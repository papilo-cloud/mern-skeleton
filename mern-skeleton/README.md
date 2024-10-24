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

### Integrating user auth and protected routes
To restrict access to user operations such as user profile view, user update, and user delete, we will first implement sign-in authentication with JWT, then use it to protect and authorize the read, update, and delete routes.

- [Auth routes](https://github.com/papilo-cloud/mern-skeleton/blob/main/mern-skeleton/server/routes/auth.route.js) The auth routes are assigned the corresponding controller functions, which should be called
when requests are received for these routes. 
The auth routes are as follows:
    - '/auth/signin': POST request to authenticate the user with their email and password
    - '/auth/signout': GET request to clear the cookies containing a JWT that was set on the object after sign-in

- [Auth controller](https://github.com/papilo-cloud/mern-skeleton/blob/main/mern-skeleton/server/controllers/auth.controller.js) The auth controller functions in will not only handle requests to the signin and signout routes, but also provide JWT
and express-jwt functionality to enable authentication and authorization for protected user API endpoints.
The file will have the following structure:
    ```js
        exports.signin = () => {...}
        exports.signout = () => {...}
        exports.requireSignin = () => {...}
        exports.hasAuthorization = () => {...}
    ```