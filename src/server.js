// import app from './app.js';
// import env from './config/env.js';
// import db from './models/index.js';

// await db.sequelize.authenticate();

// const PORT = process.env.PORT || 3000;

// app.listen(env.PORT, () => {
//   console.log(`Server running on port ${env.PORT}`);
// });


import app from './app.js';
import env from './config/env.js';
import db from './models/index.js';

await db.sequelize.authenticate();
console.log('Database connected!');

const PORT = process.env.PORT || 3000;  // 👈 process.env.PORT use karo

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});