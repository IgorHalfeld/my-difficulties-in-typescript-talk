import express, { Request, Response, Express } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  console.log('* Path', req.path);
  res.json({ message: 'Hello Typescript 🔥' });
});

app.listen(3000, () => console.log('Server running'));