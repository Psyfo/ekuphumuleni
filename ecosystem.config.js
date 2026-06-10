// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'ekuphumuleni',
      script: '/usr/bin/doppler',
      args: 'run -- node_modules/.bin/next start -p 3001',
      cwd: '/home/mahlangu-dev-admin/ekuphumuleni',
      env: {
        NODE_ENV: 'production',
        DOPPLER_TOKEN: process.env.DOPPLER_TOKEN_EKUPHUMULENI,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
    },
  ],
};
