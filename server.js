const http     = require('http');
const kelp     = require('kelp');

const React    = require('react');
const ReactDOM = require('react-dom/server');

const app = kelp();

app.use([
  require('kelp-body'),
  require('kelp-send'),
  require('kelp-logger'),
  require('kelp-static')('public')
]);

app.use((req, res, next) => {
  try{
    const Page = require('./app' + req.path)['default'];
    console.log('-> Rendering %s', Page.name);
    res.send( ReactDOM.renderToString(<Page />, req) );
  }catch(e){
    res.status(500).send(e.message);
  }
});

http.createServer(app).listen(3000);
