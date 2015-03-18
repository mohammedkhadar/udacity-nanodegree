## Website Performance Optimization portfolio project

### Getting started

Some useful tips to help you get started:

1. Check out the repository.
2a. Run "npm install -g grunt-cli".
2b. Run "npm install" from your project directory, this should intall all the packages required by the build tool to run.

  ```bash
  $> cd /path/to/your-project-folder
  $> npm install
  ```

3. Run "grunt" to build the project
4. Open a browser and visit localhost:8080
5. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

6. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)


### Improvements made to the code in main.js

1. Changes in "changePizzaSizes" function : Refactored code to prevent invoking "determineDx()" and calculating "newwidth" for each pizza element. Instead, "determineDx()" and "newwidth" are invoked and calculated for a single pizza element outside the "for" loop. This improves computation efficiency. (Lines 457- 463)

2. Changes in "updatePositions" function : Using Translate 3d to slide the pizzas over style.left, thus maintaining a constant freamerate >=60. This has been verified via timeline trace in chrome dev-tools. However, style.left is initially used for positioning the backgroung pizzas. Thereafter, only Tranlate 3d is used to slide the pizzas.(Lines 518- 540)

Note: Minified JS, CSS code is used for the pizza.html. The minification is carried out usig Grunt. Besides, optimized images are used in pizza.html.

