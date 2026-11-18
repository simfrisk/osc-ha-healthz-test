# osc-ha-healthz-test

Minimal Node.js HTTP server used to test high availability (HA) deploys of an Open Source Cloud My App.

- `GET /` and `GET /health` return 200 with JSON containing a `version` string.
- `GET /healthz` returns 404 on purpose.

No dependencies. `npm start` runs `node server.js` on `PORT` (default 8080).
