import { Router } from 'express';
import { getSerlingInfo } from '../services/serlingService';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const info = await getSerlingInfo();
    res.json(info);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar informações.' });
  }
});

export default router;
