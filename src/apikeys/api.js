import { createClient } from 'contentful';

const contentful = require('contentful')

const client = contentful.createClient({
  space: 'jnnpcct6w3gh',
  environment: 'master', 
  accessToken: '0KPgqwYWnYvFcjB29EA7BgyYSyuMCha8gvuHrFWqfvw'
})

client.getEntry('2xemgfVpxrclbuWs1XO8kD')
  .then((entry) => console.log(entry))
  .catch(console.error)


export default client;
