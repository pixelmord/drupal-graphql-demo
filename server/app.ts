import express from 'express';
import path from 'path';

import serverRenderer from './middleware/renderer';

// Create Express server
const app = express();

const router = express.Router();
// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer);

// other static resources should just be served as they are
router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);
// tell the app to use the above rules
app.use(router);

// Express configuration
app.set('port', process.env.PORT || 3009);
export default app;
