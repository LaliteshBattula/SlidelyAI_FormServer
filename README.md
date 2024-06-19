# Backend Server for Form submission App
This repository contains the backend server for Form Submission App, which is built using Express.js and TypeScript. It interacts with a JSON file (db.json) to store submissions.

# Features
Endpoints for handling submission data:
- /ping: A GET request that always returns true.
- /submit: A POST request to submit new entries.
- /read: A GET request to retrieve submissions by index.
- /remove: A DELETE request to delete submissions by index.
- / : A GET request to retrieve submissions by email

# Installation
Install dependencies: npm install

# Usage
Start the server using "npm start" command.
Server will be running on http://localhost:2003 by default
