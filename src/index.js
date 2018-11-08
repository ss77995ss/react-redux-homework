import http from 'http';
import app from './server/index';

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('🚀 started');
});
