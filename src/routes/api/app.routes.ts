import { Router } from 'express';
import { getMessages, sendMessage } from '../../controllers/api/contact-message.controller';

const router = Router();

router.get('/', (req, res) => {
  return res.send('Hello World!');
});

router.post('/contact-message', sendMessage);
router.get('/contact-message', getMessages);

export default router;