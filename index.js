const http = require('http');
const kelp = require('kelp');

const app = kelp();

app.use([
  require('kelp-logger'),
  require('kelp-static')('public'),
]);

http.createServer(app).listen(3000);
