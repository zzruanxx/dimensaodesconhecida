import express from 'express';
import episodesRouter from './routes/episodes';
import factsRouter from './routes/facts';
import serlingRouter from './routes/serling';

const app = express();

app.use('/api/episodes', episodesRouter);
app.use('/api/facts', factsRouter);
app.use('/api/serling', serlingRouter);

export default app;