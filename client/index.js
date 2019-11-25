const request = require('request-promise');
const fs = require('fs');

const caCert = fs.readFileSync('../certificate/server.cert');

const sslRequestOptions = {
  uri: 'https://localhost/',
  ca: caCert,
};

request.get({ uri: 'http://localhost/' })
  .then((data) => {
    console.log('Data returned on normal Connection', { data });
  });

request.get({ uri: 'https://localhost/' })
  .then((data) => {
    console.log('Data returned on SSL Connection', { data });
  })
  .catch((error) => {
    console.error('Error returned on SSL Connection', { error });
  });

request.get(sslRequestOptions)
  .then((data) => {
    console.log('Data returned on SSL Connection', { data });
  });
