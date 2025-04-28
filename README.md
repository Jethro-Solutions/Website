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

### SEO & Analytics
- **Meta Tags**: Dynamic meta tag management
- **Sitemap**: Auto-generated sitemap.xml
- **Structured Data**: JSON-LD implementation
- **Analytics**: Google Analytics 4 integration
- **Tag Management**: Google Tag Manager support

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Docker (optional)
- Google Analytics account (for analytics features)

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
   PRODUCTION_URL=https://jethrosolutions.com
   GA_MEASUREMENT_ID=G-XXXXXXXX  # Replace with your actual GA4 Measurement ID
   GTM_CONTAINER_ID=GTM-XXXXXX   # Replace with your actual GTM Container ID
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

## Production Deployment

### Deployment Options

1. **Docker Deployment (Recommended)**
   ```
   # Build production image
   docker build -t jethrosolutions/web:latest --target production .
   
   # Run with docker-compose
   docker-compose -f docker-compose.yml up -d
   ```

2. **Manual Deployment**
   ```
   # Build the application
   npm run build
   
   # Start with PM2
   pm2 start ecosystem.config.js --env production
   ```

3. **CI/CD Pipeline**

   This repository includes GitHub Actions workflows for CI/CD:
   - `ci.yml`: Runs linting, tests, and builds on pull requests
   - `cd.yml`: Deploys to production when changes are pushed to main

### Production Requirements

1. **Environment Variables**

   Create a `.env.production` file with your production settings:
   ```
   NODE_ENV=production
   PORT=8080
   MONGO_URI=mongodb://your-production-mongo-uri
   JWT_SECRET=your-strong-jwt-secret
   JWT_EXPIRE=30d
   PRODUCTION_URL=https://jethrosolutions.com
   GA_MEASUREMENT_ID=G-XXXXXXXX
   GTM_CONTAINER_ID=GTM-XXXXXX
   ```

2. **SSL Setup**

   For HTTPS, you'll need SSL certificates:
   ```
   # Using Let's Encrypt
   certbot certonly --webroot -w /path/to/webroot -d jethrosolutions.com -d www.jethrosolutions.com
   
   # Copy certificates to nginx/certs directory
   cp /etc/letsencrypt/live/jethrosolutions.com/fullchain.pem nginx/certs/
   cp /etc/letsencrypt/live/jethrosolutions.com/privkey.pem nginx/certs/
   ```

3. **NGINX Configuration**

   The repository includes a production-ready NGINX configuration in `nginx/conf/default.conf`.

4. **Database Backup**

   Set up automated MongoDB backups:
   ```
   # Add this to crontab
   0 0 * * * mongodump --uri="mongodb://username:password@localhost:27017/jethro" --out=/backups/$(date +\%Y-\%m-\%d)
   ```

## Analytics Setup

### Setting up Google Analytics 4

1. Go to [Google Analytics](https://analytics.google.com/) and sign in with your Google account
2. Click on "Admin" in the bottom left corner
3. In the Account column, click "+ Create Account"
4. Enter "Jethro Solutions" as the account name
5. Configure data sharing settings as needed and click "Next"
6. Choose "Web" as the platform
7. Enter your website details:
   - Website name: Jethro Solutions
   - Website URL: https://jethrosolutions.com (or your actual domain)
   - Industry category: Software
   - Reporting time zone: Your local time zone
8. Click "Create"
9. Accept the terms of service
10. Once created, you'll be provided with a Measurement ID (starts with "G-")
11. Add this ID to your `.env` file as `GA_MEASUREMENT_ID`

### Setting up Google Tag Manager (Optional)

1. Go to [Google Tag Manager](https://tagmanager.google.com/) and sign in
2. Click "+ Create Account"
3. Enter "Jethro Solutions" as the account name
4. Enter "Website" as the container name
5. Select "Web" as the target platform
6. Click "Create"
7. Accept the terms of service
8. You'll be provided with a Container ID (starts with "GTM-")
9. Add this ID to your `.env` file as `GTM_CONTAINER_ID`

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
├── .github/            # GitHub Actions workflows
├── nginx/              # NGINX configuration
├── src/
│   ├── config/         # Backend configuration files
│   ├── controllers/    # Backend route controllers
│   ├── middleware/     # Backend custom middleware
│   ├── models/         # Backend Mongoose models
│   ├── routes/         # Backend Express routes
│   ├── tests/          # Backend tests
│   ├── utils/          # Backend utility functions
│   ├── views/          # Server-rendered views
│   ├── server.js       # Backend entry point
│   ├── App.tsx         # Frontend entry point
│   ├── components/     # Frontend React components
│   ├── pages/          # Frontend page components
│   └── styles/         # Frontend styles
├── public/             # Static files
├── .env                # Environment variables (dev)
├── .env.production     # Environment variables (prod)
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
├── ecosystem.config.js # PM2 configuration
├── jest.config.js      # Jest configuration
├── package.json        # Project dependencies
└── README.md           # Project documentation
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

- **SEO**
  - GET /sitemap.xml - Auto-generated sitemap
  - GET /robots.txt - Auto-generated robots.txt

## Frontend Features

- Modern, responsive design
- Dark mode support
- Form validation
- Real-time updates
- Interactive UI components
- SEO optimization
- Analytics tracking

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
