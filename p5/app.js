var locUrl = "https://api.foursquare.com/v2/venues/explore?ll=12.966,77.566&limit=20&section=topPicks&day=any&time=any&locale=en&oauth_token=A5NTPJR3WYZ4I3N3KRB4411S0K4L5GBT2Y25K3QKHGWY3VP5&v=20150329";

/* Model */

var model = [];

var Location = function(lat, lng, name, category, address, tel, rating, id) {
	this.lat = lat;
	this.lng = lng;
	this.name = name === undefined ? "" : name;	
	this.visible = ko.observable(true);
	this.googleMapsMarker = {};
	this.category = category === undefined ? "" : category;
	this.address = address === undefined ? [] : address;
	this.tel = tel === undefined ? "" : tel;
	this.rating = rating === undefined ? "" : rating;
	this.id = id === undefined ? "" : id;
}

$.ajax( locUrl, {
	async: false,
	success: function(data) {
		console.log(data);
		for(var i = 0, items = data.response.groups[0].items; i < items.length; i++) {
			var venueObj = items[i].venue;
			model.push( new Location(	venueObj.location.lat, 
										venueObj.location.lng, 
										venueObj.name, 
										venueObj.categories[0].name, 
										venueObj.location.formattedAddress,
										venueObj.contact.formattedPhone,
										venueObj.rating,
										venueObj.id															
									)
			);
		}            
	},
	error: function() {
		alert("Some error occured while fetching the data. Please check your network connectivity and refresh the page.")
	}
});

/* ViewModel */

var ViewModel = function() {
	var self = this;
	self.locations = ko.observableArray(model);	    
	self.map = new google.maps.Map(document.getElementById('map-canvas'), { center: self.locations()[0], zoom: 12, disableDefaultUI: true });
	self.infoWindow = new google.maps.InfoWindow({content: ""});
	self.filterStr = ko.observable("");
	self.filterExp = ko.computed( function() { return new RegExp( this.filterStr(),"ig") }, self );
	self.showListView = ko.observable(true);
	self.toggleListView = function(){ self.showListView( ! self.showListView() ) };
	self.toggleButtonClass = ko.computed( function(){ return this.showListView() ? "glyphicon-remove" : "glyphicon-th-list"}, this);

	self.filter = function() {
		for(var i = 0, l = self.locations().length; i < l; i++){
			if(self.locations()[i].name.match(self.filterExp()) === null) {
				self.locations()[i].visible(false);		
			}
			else {
				self.locations()[i].visible(true);				
			}
		}
	};
}

ko.bindingHandlers.location = {

	init: function(element, valueAccessor, allBindings){		
		var map = allBindings.get('map');
		var location = allBindings.get('location');
		var infoWindow = allBindings.get('infoWindow');
		infoWindow.setContent("<b>" + location.name + "</b><br>" + 
								location.category + "<br>" +
								location.address.join("<br>") + "<br>" +
								location.tel + "<br>" +																
								"<a href='" + "https://foursquare.com/v/" + location.id + "'target='_blank'><img class='fs-icon' src='images/foursquare-icon-16x16.png'>" + 
								"<span>Rating: " + location.rating + "</span></a>"
		);		

	    /* Initialize google maps marker */
	    var googleMapsMarker = location.googleMapsMarker = new google.maps.Marker({
	        position: new google.maps.LatLng( location.lat, location.lng ),	    	
	    	animation: google.maps.Animation.DROP,
	        title:""
	    });

	    /* Adding "click" event listeners to Google maps marker and list view item */
    	google.maps.event.addListener(googleMapsMarker, 'click', function(){        	
    		googleMapsMarker.setAnimation(google.maps.Animation.BOUNCE);
    		var timeout = setTimeout(function() { 
    			googleMapsMarker.setAnimation(null);
    			clearTimeout(timeout);
    		}, 2000);    		
    		infoWindow.open(map, googleMapsMarker);
    	});

    	element.addEventListener("click", function(e){
    		google.maps.event.trigger(googleMapsMarker, 'click');
    	});	    
	},

	/* Hide or show google maps marker based on the visible binding in the UI */
	update: function(element, valueAccessor, allBindings){
		var map = allBindings.get('map');
		var location = allBindings.get('location');		
		location.visible() ? location.googleMapsMarker.setMap(map) : location.googleMapsMarker.setMap(null);
	}
};

ko.applyBindings(new ViewModel());