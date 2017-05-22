const http = require('http');
const kelp = require('kelp');

const app = kelp();

app.use([
  require('kelp-logger'),
  require('kelp-static')('public'),
]);


// default handler
app.use(function(req, res, next){
  res.end('Not Found');
})

http.createServer(app).listen(3000);
