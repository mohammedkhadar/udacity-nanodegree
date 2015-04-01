# Running the application

1. Host the files under the root folder on a web server.
2. Access index.html from a web browser to run the app.
3. You can filter the most popular places in London by using the search bar.

## Notes:

1. This is the neighbourhood map project where we are exploring some of the most popular places in London (If you like to explore other places change the "LatLng" value).
2. We are using the knockout.js organizational library to maintain separation of concerns using the MVVM design pattern
3.Model -> We are using the data list of popular locations returned by the Foursquare API, to create an observable array of "new Location()"
4. ViewModel -> The ViewModel has the location filtering functionality and binds the Model(Observables) and the View(Declarative Bindings)
5. View -> The HTML has declarative bindings which use the ViewModel properties as their data source.