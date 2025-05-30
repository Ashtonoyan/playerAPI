# playerAPI
Football Players API

A simple REST API for managing football players, built with Node.js, Express, and PostgreSQL. The project includes automated API tests written with Playwright.

⚙️ Project Workflow
This project follows a structured testing workflow:

Create the PostgreSQL database
Define the players table and set up your database locally.

Build the API with Express
Implement endpoints for:

POST /players – Create a new player

GET /players/:id – Read player info

PUT /players/:id – Update a player

DELETE /players/:id – Remove a player

Send API requests using Playwright
Use Playwright’s built-in request context to test the endpoints.

Validate API behavior via SQL
After each API call in the test, a SQL query is executed directly to verify changes in the database.
For example, after creating a player via POST, a SELECT query checks if the record was created correctly.

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

