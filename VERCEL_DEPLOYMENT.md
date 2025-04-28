# Deploying to Vercel

This document provides instructions for deploying the Jethro Solutions website to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com) account
- Git repository with your code (GitHub, GitLab, or Bitbucket)
- MongoDB Atlas account (or any other MongoDB provider)

## Setup Steps

### 1. Prepare Your MongoDB Database

1. Create a MongoDB Atlas cluster if you don't have one
2. Set up a database user with appropriate permissions
3. Get your MongoDB connection string from Atlas
4. Add your IP address to the network access list (or use 0.0.0.0/0 to allow all)

### 2. Set Up Your Vercel Project

1. Log in to [Vercel](https://vercel.com)
2. Click "Add New" > "Project"
3. Import your git repository
4. Configure the following settings:
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `dist`
   - **Development Command**: `npm run dev:backend`

### 3. Configure Environment Variables

In your Vercel project settings, add the following environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment setting | `production` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://username:password@cluster.mongodb.net/jethro` |
| `JWT_SECRET` | Secret key for JWT tokens | `your-secure-jwt-secret` |
| `JWT_EXPIRE` | JWT token expiration | `30d` |
| `PRODUCTION_URL` | Your production URL | `https://jethro-solutions.vercel.app` |

### 4. Deploy Your Project

1. Click "Deploy" on the Vercel dashboard
2. Wait for the build and deployment to complete
3. Once deployed, Vercel will provide you with a URL for your application

### 5. Verify Deployment

1. Visit your deployed URL
2. Check the `/health` endpoint to verify the API is functioning
3. Test key features to ensure everything works correctly

## Project Structure for Vercel

The project has been optimized for Vercel with the following files:

- `vercel.json` - Configures build settings and routing
- `src/server.js` - Modified to work well with serverless functions
- `src/middleware/security.js` - Optimized security settings for Vercel
- `src/config/db.js` - Enhanced MongoDB connection for serverless environments
- `scripts/vercel-deploy.js` - Verify environment before deployment

## Troubleshooting

### Connection Issues

If you experience connection issues to MongoDB:

1. Verify your MongoDB connection string in the Vercel environment variables
2. Ensure your IP is allowed in MongoDB Atlas Network Access
3. Check the function logs in the Vercel dashboard

### Rate Limiting Issues

The rate limiting middleware has been optimized for Vercel, but if you still face issues:

1. Check the Vercel function logs for specific error messages
2. Consider adjusting the rate limiting configuration in `src/middleware/security.js`

### Function Timeout

If functions time out:

1. Check if your MongoDB operations are taking too long
2. Consider optimizing database queries
3. Check Vercel's function execution limits in your plan

## Continuous Deployment

Once set up, Vercel will automatically deploy new versions when you push changes to your repository's main branch.

For more information, refer to [Vercel's documentation](https://vercel.com/docs). 