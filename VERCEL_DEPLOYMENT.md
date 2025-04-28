# Deploying to Vercel

This document provides instructions for deploying the Jethro Solutions website to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com) account
- Git repository with your code (GitHub, GitLab, or Bitbucket)
- A [Formspree](https://formspree.io) account for the contact form

## Setup Steps

### 1. Set Up Formspree

1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the Contact component with your Formspree form ID:
   ```jsx
   // in src/components/Contact.tsx
   const handleSubmit = async (e: React.FormEvent) => {
     // ...
     const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
     // ...
   };
   ```

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
| `PRODUCTION_URL` | Your production URL | `https://jethro-solutions.vercel.app` |

### 4. Deploy Your Project

1. Click "Deploy" on the Vercel dashboard
2. Wait for the build and deployment to complete
3. Once deployed, Vercel will provide you with a URL for your application

### 5. Verify Deployment

1. Visit your deployed URL
2. Check the `/health` endpoint to verify the server is functioning
3. Test the contact form to ensure it's submitting to Formspree correctly
4. Test all navigation and interactive elements

## Project Structure for Vercel

The project has been optimized for Vercel with the following files:

- `vercel.json` - Configures build settings and routing
- `src/server.js` - Modified to work well with serverless functions
- `src/middleware/security.js` - Optimized security settings for Vercel
- `src/components/Contact.tsx` - React component with Formspree integration
- `scripts/vercel-deploy.js` - Verify environment before deployment

## Troubleshooting

### Contact Form Issues

If the contact form isn't working:

1. Check that your Formspree ID is correct in the Contact component
2. Verify that your Formspree form is active and properly configured
3. Check browser console for any JavaScript errors
4. Test the form directly through Formspree's test page

### Static Asset Issues

If images or other static assets aren't loading:

1. Verify that assets are properly placed in the `/public` directory
2. Check the network tab in browser developer tools for 404 errors
3. Ensure the paths to assets in your code are relative and correct

### Function Timeout

If functions time out:

1. Your site might be doing too much server-side processing
2. Consider optimizing server-side rendering
3. Check Vercel's function execution limits in your plan

## Continuous Deployment

Once set up, Vercel will automatically deploy new versions when you push changes to your repository's main branch.

For more information, refer to [Vercel's documentation](https://vercel.com/docs). 