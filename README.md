# Devs-Directory API

This repository contains the backend API for a developer directory built with NestJS.

## Features

- User authentication and authorization
- CRUD operations for developers
- Search and filtering functionality
- Pagination of results
- RESTful API design

## Getting Started

### Prerequisites

- Node.js (version 18.16.0)
- npm (version 9.6.7)
- MongoDB (version ^7.2.3)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/devs-directory-api.git
Install the dependencies:

```shell
cd devs-directory-api
npm install
```

Set up the environment variables:

Rename the .env.example file to .env.
Open the .env file and update the variables with your own values.
Start the application:

```shell
npm run start:dev
```
The API will be available at http://localhost:3000.

API Documentation
The API endpoints and their usage are documented using OpenAPI (Swagger) specification. After starting the application, you can access the Swagger UI documentation at http://localhost:3000/docs to explore and test the API.

Usage and Examples
Here are some examples of how to use the API:

To create a new developer:

```http
POST /developers
```
Request body:
```json
{
  "name": "John Doe",
  "skills": ["JavaScript", "Node.js", "React"],
  "location": "San Francisco"
}
```

To get a list of developers:

```http
GET /developers
```
To search for developers:

```http
GET /developers?search=John
```

To update a developer:

```http
PUT /developers/:id
```

Request body:

```json
{
  "skills": ["JavaScript", "Node.js", "Angular"]
}
```

To delete a developer:

```http
DELETE /developers/:id
```

Please refer to the API documentation for more details on the available endpoints and their usage.

Contribution
Contributions to the project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
