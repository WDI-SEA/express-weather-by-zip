![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# A RESTful Express Weather App

## Objectives
* Build an Express web app that requests the location of our user, and then returns weather data about that location.
* Use a new NPM package, [Weather-JS](https://www.npmjs.com/package/weather-js).
* Use best practices when writing code and in organizing your routes. 

## Getting Started

* Fork and clone this repository.
* Make "entry point" for your app (`touch index.js`). 
* Run `npm init -y` to setup our folder. 
* Install your dependencies (Express, [Weather-JS](https://www.npmjs.com/package/weather-js)). 
* Create a `.gitignore` file 
* Start writing out Express app in `index.js`.

## Requirements

Index.js file should include the following routes:

- `/`: a GET route:
  - It sends an HTML document from the backend. 
  - The HTML document should include a form for the user to submit a zipcode.
  - When the user submits the form, the submission should trigger the `/weather` GET route.
- `/weather`: a GET route:
  - It grabs the zipcode from the form submission.
  - It uses the `Weather-JS` node package to find weather data for that zipcode.
  - It sends that data to the client.
- `/weather/:zipcode`: a GET route:
  - It grabs the zipcode from URL parameter.
  - It uses the `Weather-JS` node package to find weather data for that zipcode.
  - It sends that data to the client.
## Bonuses

* Write a function that queries a random zipcode for the weather, and returns the `/weather/:zipcode` route with the result. 

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
