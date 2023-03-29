import { RecaptchaV3 as Recaptcha } from 'express-recaptcha';
import dotenv from 'dotenv';

dotenv.config();

const recaptcha = new Recaptcha(process.env.RECAPTCHA_SITE_KEY as string, process.env.RECAPTCHA_SECRET_KEY as string);

export const verifyRecaptcha = recaptcha.middleware.verify;

export default recaptcha;
