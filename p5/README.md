# Running the application

1. Host the files under the p5 folder on a web server.
2. Access index.html from a web broser to run the app.

## Notes:

- This is the neighbourhood map project where we are exploring some of the most popular places in London (If you like to explore other places change the "LatLng" value).
- We are using the knockout.js organizational library to maintain separation of concerns using the MVVM design pattern.
- Model -> We are using the data list the of popular locations returned by the Foursquare API, to create an observable array of "new Locations()"
- ModelView -> The ModelView has the location filtering functionality and binds the Model(Observables) and the View(Declarative Bindings)
- View -> The HTML has declarative bindings which use the ViewModel properties as their data source.