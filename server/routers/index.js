import { Router } from 'express';
import messagesRouter from './messages.router';

const rootRouter = Router();

rootRouter.use('/api/messages', messagesRouter);

export default rootRouter;