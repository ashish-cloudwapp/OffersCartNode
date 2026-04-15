import app from './app.js';
import env from './config/env.js';
import db from './models/index.js';

await db.sequelize.authenticate();

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
