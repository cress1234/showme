# ShowMe

A TV show manager designed to give a random show on request from a self curated list.

## Dependencies
express: `npm install --save express`  
body-parser: `npm install --save body-parser`      
ejs: `npm install --save ejs`  
(possibly also request: `npm install request`)

## Usage
Clone directory and install dependencies.  
Run `node server.js`  
Navigate to `localhost:3000` in your web browser.

## To do list for future implementation:
+ Front End
    + Add more comprehensive, and formatted, display of information about TV shows when you click the add show button.
    + Add automatic switching to search for show if a direct match not found.
    + Add search button to be able to search for alternatives in the case that the direct match is not the intended one.
+ Back End
    + Create class for TV shows with properties for all the necessary fields.
    + Look into database for storing TV shows, and methods to read from and write to said database.
