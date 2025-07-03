import request from 'supertest';
import app from '../src/app';

describe('Facts API', () => {
  it('GET /api/facts/season/:season deve retornar curiosidades', async () => {
    const res = await request(app).get('/api/facts/season/1');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
