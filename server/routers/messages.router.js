import { Router } from 'express';
import { messagesController } from '../controllers';

const messagesRouter = Router();

messagesRouter.get('/', messagesController.get);
messagesRouter.post('/', messagesController.post);

export default messagesRouter;