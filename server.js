/* eslint-disable no-console */
import express, { static } from 'express';
import { resolve, join } from 'path';
import { build } from './config/env';

const PORT = process.env.PORT || 3000;
const BUILD_PATH = resolve(build);
const server = express();

server.use(static(BUILD_PATH));
server.get('*', (req, res) => {
  res.sendFile(join(__dirname, BUILD_PATH, 'index.html'));
});
server.listen(PORT, () => {
  console.info(`Server running on port: ${PORT}`);
});
