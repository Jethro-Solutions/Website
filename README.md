# Jethro Solutions Website

This repository contains both the frontend and backend for the Jethro Solutions website.

## Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Documentation**: Swagger
- **Testing**: Jest
- **Containerization**: Docker

### Frontend
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **State Management**: React Query
- **Form Handling**: React Hook Form
- **Routing**: React Router
- **Build Tool**: Vite

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Docker (optional)

## Installation

### Method 1: Local Development

1. Clone the repository:
   ```
   git clone <repository-url>
   cd jethro-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/jethro_solutions
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=30d
   ```

4. Start the development servers:
   ```
   # Terminal 1 - Backend
   npm run dev:backend

   # Terminal 2 - Frontend
   npm run dev:frontend
   ```

### Method 2: Docker Development

1. Clone the repository:
   ```
   git clone <repository-url>
   cd jethro-website
   ```

2. Start the Docker containers:
   ```
   docker-compose up
   ```

## API Documentation

API documentation is available at [http://localhost:5000/api-docs](http://localhost:5000/api-docs) when the server is running.

## Testing

Run the tests with:

```
npm test
```

## Project Structure

```
jethro-website/
├── src/
│   ├── config/        # Backend configuration files
│   ├── controllers/   # Backend route controllers
│   ├── middleware/    # Backend custom middleware
│   ├── models/        # Backend Mongoose models
│   ├── routes/        # Backend Express routes
│   ├── tests/         # Backend tests
│   ├── utils/         # Backend utility functions
│   ├── server.js      # Backend entry point
│   ├── App.tsx        # Frontend entry point
│   ├── components/    # Frontend React components
│   ├── pages/         # Frontend page components
│   └── styles/        # Frontend styles
├── .env               # Environment variables
├── Dockerfile         # Docker configuration
├── docker-compose.yml # Docker Compose configuration
├── jest.config.js     # Jest configuration
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Available Endpoints

- **Authentication**
  - POST /api/auth/register - Register a new user
  - POST /api/auth/login - Login user
  - GET /api/auth/me - Get current user
  - POST /api/auth/logout - Logout user

- **Contact**
  - POST /api/contact - Submit contact form
  - GET /api/contact - Get all contact submissions (admin only)
  - GET /api/contact/:id - Get specific contact submission (admin only)
  - DELETE /api/contact/:id - Delete contact submission (admin only)

## Frontend Features

- Modern, responsive design
- Dark mode support
- Form validation
- Real-time updates
- Interactive UI components
- SEO optimization
