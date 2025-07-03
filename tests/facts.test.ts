import request from 'supertest';
import app from '../src/app';

describe('GET /api/facts/season/:season', () => {
  it('deve retornar curiosidades da temporada', async () => {
    const res = await request(app).get('/api/facts/season/1');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
