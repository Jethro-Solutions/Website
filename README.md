# Jethro Solutions Website Backend

This repository contains the backend API for the Jethro Solutions website.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Documentation**: Swagger
- **Testing**: Jest
- **Containerization**: Docker

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

4. Start the development server:
   ```
   npm run dev
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
│   ├── config/        # Configuration files
│   ├── controllers/   # Route controllers
│   ├── middleware/    # Custom middleware
│   ├── models/        # Mongoose models
│   ├── routes/        # Express routes
│   ├── tests/         # Tests
│   ├── utils/         # Utility functions
│   └── server.js      # Entry point
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
  - POST /api/auth/login - Login a user
  - GET /api/auth/me - Get current user
  - GET /api/auth/logout - Logout user

- **Contacts**
  - POST /api/contacts - Submit a contact form
  - GET /api/contacts - Get all contacts (admin only)
  - GET /api/contacts/:id - Get a specific contact (admin only)
  - PUT /api/contacts/:id - Update a contact (admin only)
  - DELETE /api/contacts/:id - Delete a contact (admin only)

## License

[ISC](LICENSE) 