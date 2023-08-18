import { Router } from 'express';
import { bo2Routes } from './bo2/bo2-routes';

export const router = Router();

router.use('/api', bo2Routes);