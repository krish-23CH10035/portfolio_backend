# Portfolio Backend

This is the backend for your React-based personal portfolio website, built with Node.js, Express.js, and MongoDB.

## Features
- RESTful API for Projects, Experience, Achievements, and Contact Messages
- Modular structure: config, models, controllers, routes
- Environment variable support via `.env`
- CORS enabled for frontend integration

## Project Structure
```
backend/
  config/
    db.js
  controllers/
    achievementController.js
    contactController.js
    experienceController.js
    projectController.js
  models/
    Achievement.js
    Experience.js
    Message.js
    Project.js
  routes/
    achievements.js
    contact.js
    experience.js
    projects.js
  .env
  package.json
  server.js
```

## Setup
1. Install dependencies:
   ```
npm install
   ```
2. Create a `.env` file in the backend directory:
   ```
MONGO_URI=your_mongodb_connection_string
PORT=5000
   ```
3. Start the server:
   ```
npm run dev
   ```

## API Endpoints
- `GET /api/projects` / `POST /api/projects`
- `GET /api/experience` / `POST /api/experience`
- `GET /api/achievements` / `POST /api/achievements`
- `POST /api/contact`

---

Replace `your_mongodb_connection_string` with your actual MongoDB URI.
