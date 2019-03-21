/*
netlify-lambda use this proxy to run things locally.
https://www.netlify.com/docs/functions/#tools-for-building-javascript-functions
*/

import proxy from 'http-proxy-middleware';

module.exports = function(app: any) {
  app.use(proxy('/.netlify/functions/', { 
    target: 'http://localhost:9000/',
    "pathRewrite": {
      "^/\\.netlify/functions": ""
    }
  }));
};