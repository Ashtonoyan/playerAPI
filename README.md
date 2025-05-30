# playerAPI
Football Players API

A simple REST API for managing football players, built with Node.js, Express, and PostgreSQL. The project includes automated API tests written with Playwright.

🔧 Project Structure and Workflow:

This project follows a clear and structured workflow:

Create the PostgreSQL Database:

A players table is created with fields such as id, name, team, position, and goals.

Build the API with Express and PostgreSQL:

A simple RESTful API is implemented in Node.js using Express. It supports full CRUD operations:

POST /players – Create a new player

GET /players/:id – Read a player by ID

PUT /players/:id – Update a player

DELETE /players/:id – Delete a player

Send API Requests in Automated Tests:

API requests are sent using Playwright’s request context to test each endpoint.

Verify Results with SQL Queries:

After each API request, an SQL query is executed directly on the database to verify that the data was correctly inserted, retrieved, updated, or deleted.

Technologies Used:

Node.js + Express — server.

TypeScript.

PostgreSQL — database.

Playwright — API test automation.

Nodemon + ts-node — for development mode.


API Endpoints:

POST	/players	Create a new player.

GET	/players/:id	Get a player by ID.

PUT	/players/:id	Update a player.

DELETE	/players/:id	Delete a player.

