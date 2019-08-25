// Typing everything 🔥
import http, { IncomingMessage, ServerResponse } from 'http';

const handleRequest = (req: IncomingMessage, res: ServerResponse): void => {
  console.log('🔥', req.method);
  res.write('Hello World 🔥');
  res.end();
};

http.createServer(handleRequest).listen(3000);