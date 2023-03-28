import { Router } from 'express';
import apiRouter from './api/app.routes';

const router = Router();

router.get('/', (req, res) => {
  return res.send('Google Sheets API!');
});
router.use('/api', apiRouter);

export default router;