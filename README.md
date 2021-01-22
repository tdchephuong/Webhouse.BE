# cometosite.be rest api

A fairly opinionated starter project for build a REST API with Node/TypeScript/Express.

## Customizing the Application

The actual business content available in this application fairly underwhelming, a simple `users` endpoint with the following actions available:

* `GET /api/users` - retrieves a list of all users
* `GET /api/users/<id>` - retrieves a single user
* `POST /api/users` - creates a user
* `PATCH /api/users/<id>` - updates a user (allows partial updates)
* `DELETE /api/users/<id>` - deletes a user

A postman project has been included at the base directory, to easily execute a few of the success and error cases of the API.

This project can be used a framework for your own by including your own **routes** and **data**.

#### Routes

A route is made up of a router and a controller, which both have base classes, `RestRouter` and `RestController`. The classes should cover the majority of the use cases for a REST API. These use cases include, but are not limited to:

* Serializing responses and errors
  * Using the correct HTTP status code
  * Sending the data is a consistent serialization format
* Handling errors
  * Sending validation failure messages
  * Catching unexpected errors

Take a look under `src/app/api/routes/users` to see the implementation for the `/api/users` endpoints.

### Quick Start

```sh
# change directory to the app
cd cometosite.BE

# install the dependencies
npm install

# start development mode
npm run dev
```

Open the browser to http://localhost:3000/api/users
-----
