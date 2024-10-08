module.exports = {
  apps : [{
    name: 'app', // You can set a name for your app
    script: 'ts-node',
    args: './src/server.ts',
    watch: ['./src'], // Watch for changes in the src directory
    interpreter: 'node', // Specify the interpreter
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
