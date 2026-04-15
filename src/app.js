import express from 'express';
import routes from './routes.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'OffersCart Node API is running'
  });
});

app.use('/api', routes);

export default app;
