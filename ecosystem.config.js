module.exports = {
  apps: [{
    name: 'cloud',
    script: 'server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-176-97-202.eu-west-2.compute.amazonaws.com',
      key: '/Users/arthurlecalvez/Desktop/FourthYear/cloud/test.pem',
      ref: 'origin/master',
      repo: 'git@github.com:arthurlc1/cloud.git',
      path: '/home/ubuntu/cloud',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
