import { Router } from 'express';
import { getMessages, sendMessage, sendCompanyMessage } from '../../controllers/api/contact-message.controller';
import { verifyRecaptcha } from '../../providers/recaptcha.provider';

const router = Router();

router.get('/', (req, res) => {
  return res.send('Hello World!');
});

router.post('/contact-message', verifyRecaptcha, sendMessage);
router.post('/company-contact-message', sendCompanyMessage);
// router.get('/contact-message', getMessages);

export default router;
