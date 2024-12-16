# Skeleton MERN Application

- While developing different web applications, you will find there are common tasks,
    basic features, and implementation code repeated across the process. The same is true
    for the MERN applications. Taking these similarities into consideration, this  lay the foundations for a skeleton MERN application that can be easily modified and extended to implement a variety of
    MERN applications.

## Overview
- The skeleton application will encapsulate rudimentary features and a workflow that's
    repeated for most MERN applications. 
- This skeleton application is a basic but fully
    functioning MERN web application with user create, read, update, delete (CRUD),
    and authentication-authorization (auth) capabilities; this will also demonstrate how
    to develop, organize, and run code for general web applications built using this
    stack.
- The aim is to keep the skeleton as simple as possible so that it is easy to extend
    and can be used as a base application for developing different MERN applications.

## Config variables
- First we install ```dotenv```, a module that loads a `.env` file into `process.env`
- Then create a new .env file in the server directory and add your configuration:
```
    MONGODBURL=your_mongodb_url
    JWT_SECRET=your_jsonwebtoken_secret
    PORT=port_number
```
- In the config/config.js file, we load the variables and expose them


## Run Scripts
To run the application, use these commands:
- for the backend
```
cd server
npm run dev
```
</pre>

- for the frontend
```
cd client
npm run dev
```
</pre>

### Screenshot of the application
![Screenshot](https://github.com/papilo-cloud/mern-skeleton/blob/main/client/public/screenshot.jpg)