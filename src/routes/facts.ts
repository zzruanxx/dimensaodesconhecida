import { Router } from 'express';
import { getFactsBySeason } from '../services/factsService';

const router = Router();

router.get('/season/:season', async (req, res) => {
  try {
    const facts = await getFactsBySeason(Number(req.params.season));
    res.json(facts);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar curiosidades.' });
  }
});

export default router;
