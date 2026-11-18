const http = require('http');

const VERSION = 'v4';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const path = (req.url || '/').split('?')[0];
  if (path === '/' || path === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', version: VERSION, path, time: new Date().toISOString() }));
    return;
  }
  // /healthz intentionally returns 404, like an app that never defined it.
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'not found', version: VERSION, path }));
});

server.listen(port, () => {
  console.log(`ha-healthz-test ${VERSION} listening on ${port}`);
});
