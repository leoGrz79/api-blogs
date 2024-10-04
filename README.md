# API for blogs

## Overview

This is a RESTful API designed to manage and serve blog posts, comments, and user authentication.

## Features

- User registration and authentication
- Create, read, update, and delete<sup><a href="#detailed-explanation">1</a></sup> blog posts (CRUD)
- Add comments to blog posts
- Tagging system for posts
- Pagination for retrieving posts
- Input validation and error handling

## Tech Stack

- Node.js
- Express.js
- Sequelize (for database interactions)
- MySQL (as the database)
- JWT (for authentication)
- Docker (for containerization)

## Getting Started

### Prerequisites

- Node.js (version >= 14.x)
- MySQL
- Docker

### Installation

1. Clone the repository.
2. Install the dependencies:
   ```
   npm i
   ```
3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DB_NAME=blogs-api
   MYSQL_USER=root
   MYSQL_PASSWORD=1234
   DEBUG=true
   ```

4. Run the migrations to create the database tables:
   ```
   npx sequelize-cli db:migrate
   ```
5. Start the server:
   ```
   npm start
   ```

6. To run the app in a docker container, run the following commands:
   ```   
   docker-compose up -d --build
   ```

## API Endpoints

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr style="background-color: #ffffff3a;">
      <th style="border: 1px solid #dddddd; padding: 8px; border-radius: 5px;">Method</th>
      <th style="border: 1px solid #dddddd; padding: 8px; border-radius: 5px;">Endpoint</th>
      <th style="border: 1px solid #dddddd; padding: 8px; border-radius: 5px;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 8px;">GET</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">/post</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">Retrieve all blog posts</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 8px;">GET</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">/post/:id</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">Retrieve a specific blog post</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 8px;">GET</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">/categories</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">Retrieves all categories from DB</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 8px;">GET</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">/user</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">Retrieves all users from DB</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 8px;">GET</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">/user/:id</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">Retrieves a specific user from the DB by id</td>
    </tr>    
       <tr>
      <td style="border: 1px solid #dddddd; padding: 8px;">POST</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">/login</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">Authenticates user</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 8px;">POST</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">/user</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">Adds a new user to the DB</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 8px;">POST</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">/categories</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">Adds a new post category to the DB</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 8px;">POST</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">/posts</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">Create a new blog post</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 8px;">PUT</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">/posts/:id</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">Update a specific blog post</td>
    </tr>
  </tbody>
</table>

## Detailed explanation
<sup>1</sup> Not yet implemented