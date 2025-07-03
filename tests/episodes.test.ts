import request from 'supertest';
import app from '../src/app';

describe('Episodes API', () => {
  it('GET /api/episodes deve retornar lista', async () => {
    const res = await request(app).get('/api/episodes');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/episodes/:id deve retornar episódio', async () => {
    const res = await request(app).get('/api/episodes/1');
    expect([200,404]).toContain(res.status);
  });

  it('GET /api/episodes/:id/media deve retornar mídia', async () => {
    const res = await request(app).get('/api/episodes/1/media');
    expect([200,404]).toContain(res.status);
  });
});
