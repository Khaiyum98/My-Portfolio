import express, { Request, Response, NextFunction } from 'express';

const server = express();

// Your routes and other server logic here...

server.get('**', (req: Request, res: Response, next: NextFunction) => {
  // Your logic here...
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
