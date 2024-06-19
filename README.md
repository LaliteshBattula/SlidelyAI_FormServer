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

# Screenshots
Here are some screenshots of the backend server in action:

![Ping Endpoint](https://github.com/LaliteshBattula/SlidelyAI_FormServer/assets/127239215/9c8c7710-6cf0-4f8b-bb0a-31187baddb17) 
- Ping endpoint response

![Read Endpoint](https://github.com/LaliteshBattula/SlidelyAI_FormServer/assets/127239215/4ec6b9ca-124d-4f10-808a-a0654e8b7480) 
- Submission by index GET request

![Email Endpoint](https://github.com/LaliteshBattula/SlidelyAI_FormServer/assets/127239215/e0d0a025-e96f-45cc-be92-5179a4aba277) 
- Submission by email GET request
