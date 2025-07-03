import express, { Router } from 'express';
import { getEpisodes, getEpisodeById, getEpisodeMedia, getFactsBySeason, getRodSerlingInfo } from '../services/episodesService';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const episodes = await getEpisodes();
    res.json(episodes);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar episódios.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const episode = await getEpisodeById(req.params.id);
    if (!episode) return res.status(404).json({ error: 'Episódio não encontrado.' });
    res.json(episode);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar episódio.' });
  }
});

// Endpoint para imagens e trilha sonora associadas ao episódio
router.get('/:id/media', async (req, res) => {
  try {
    const episodeId = req.params.id;
    const media = await getEpisodeMedia(episodeId);
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar mídia do episódio.' });
  }
});

// Novo endpoint para buscar curiosidades por temporada
router.get('/season/:seasonId/facts', async (req, res) => {
  try {
    const seasonId = req.params.seasonId;
    const facts = await getFactsBySeason(seasonId);
    res.json(facts);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar curiosidades da temporada.' });
  }
});

// Novo endpoint para buscar informações sobre Rod Serling
router.get('/rod-serling', async (_req, res) => {
  try {
    const serlingInfo = await getRodSerlingInfo();
    res.json(serlingInfo);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar informações sobre Rod Serling.' });
  }
});

export default router;
