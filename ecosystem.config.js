module.exports = {
  apps: [
    {
      name: 'jethro-web',
      script: 'src/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 8080
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080
      },
      time: true,
      error_file: './logs/app-err.log',
      out_file: './logs/app-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      node_args: '--max-old-space-size=1024',
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'jethrosolutions.com',
      ref: 'origin/main',
      repo: 'git@github.com:Jethro-Solutions/Website.git',
      path: '/var/www/jethro-website',
      'post-deploy': 'npm ci --production && pm2 reload ecosystem.config.js --env production',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}; 