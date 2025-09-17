const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Bind the router db to the app
app.db = router.db;

// Set default middlewares (logger, static, cors and no-cache)
app.use(jsonServer.defaults());

// You must apply the auth middleware before the router
app.use(auth);
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
