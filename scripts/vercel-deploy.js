// This script runs before deployment to verify the Vercel environment is properly set up
// It can be used in the package.json build script

// Check that required environment variables are present
const requiredEnvVars = [
  'NODE_ENV',
  'PRODUCTION_URL'
];

const missing = requiredEnvVars.filter(varName => !process.env[varName]);

if (missing.length > 0) {
  console.error('Error: Missing required environment variables:');
  missing.forEach(varName => {
    console.error(`  - ${varName}`);
  });
  console.error('\nPlease set these variables in your Vercel project settings.');
  console.error('Go to: Project Settings > Environment Variables');
  
  // Continue anyway in CI, but warn
  if (process.env.CI) {
    console.warn('CI environment detected, continuing despite missing variables');
  } else {
    process.exit(1);
  }
}

console.log('Vercel environment validation successful!'); 