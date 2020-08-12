### Build a simple PAGINATED API

## Overview

Pagination is a technique frequently seen in HTTP API's to make working with large data sets more manageable.
This app uses pagination to return the data sets based on query parameters.

## Requirements

This application will paginate, based on queried parameters. Required paramaters include 'id' or 'name'.
Secondary parameters include 'start', 'end', 'max', and 'order.

## Technolgies, Stack, & Dependencies

Javascript, Node.Js, MongoDB, Mongoose, Express, Cors, DotEnv, Nodemon, Prettier

## Start

Create your project directory. You may use YARN or NPM alternatively, in which case please use the appropriate commands 

mkdir (“project name”)
cd (project name)
yarn init -y ||  npm init
yarn add express cors mongoose dotenv || npm instasll express cors mongoose dotenv
yarn add nodemon || npm install nodemon
touch server.js
touch .env sample.env .gitignore
Add your .env and node_modules to .gitignore

## Enviornment variables

Access your MongoDB url and add it to the .env file.

## Package.json & Scripts

Change "main" to "sever.js" or the name of whatever file will be the primary entry point for your application

Add the following scripts to Package.json:
"scripts: {
  "start": "node app.js",
  "dev": "nodemon app.js",
  "test": "jest --watchAll --runInBand  --setupFiles dotenv/config"
 }

## Seed Data

This app was seeded with a database housing a 100 documents.
Each document must have an 'id' and 'name' in the form '1' and 'my-app-001'.
A CSV file with these documents was uploaded directly to MongoDB to populate the database.

## Parameters

This app has one endpoint which can be queried based on the requirements above. Here are some examples of how to query it:

/apps?by=id&start=1
/apps?by=id&start=1&end=20
/app?by=name&start=1&max=40
/app?by=name&max=10

## Testing
 
To add endpoint testing, use Jest and Supertest (https://zellwk.com/blog/endpoint-testing/)

## Heroku Deployment

From command line "heroku create". Follow the commands and log in to Heroku.
Find your app and deploy with GitHub. Then from the command line "push heroku master".

Alternately you can acces github remotely and deploy with these commands instead: "heroku create", "git remote -v", "git push heroku master"

## Challenges

For this build a NoSQL database was used, but in the future it could be refactored with a SQL database to more easily paginate the data.

## Take Aways

Excellent exercise for those looking to get more comfortable with accessing and calling database using pagination through query parameters.

Highly recommended for new develops looking to work on their back end skillset.

