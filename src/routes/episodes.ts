import { Router, Request, Response } from 'express';
import { getEpisodes, getEpisodeById, getEpisodeMedia } from '../services/episodesService';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const episodes = await getEpisodes();
    res.json(episodes);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar episódios.' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const episode = await getEpisodeById(req.params.id);
    if (!episode) return res.status(404).json({ error: 'Episódio não encontrado.' });
    res.json(episode);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar episódio.' });
  }
});

// Endpoint para imagens e trilha sonora associadas ao episódio
router.get('/:id/media', async (req: Request, res: Response) => {
  try {
    const media = await getEpisodeMedia(req.params.id);
    if (!media) return res.status(404).json({ error: 'Mídia não encontrada.' });
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar mídia.' });
  }
});

export default router;
