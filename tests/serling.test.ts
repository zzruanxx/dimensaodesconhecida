import request from 'supertest';
import app from '../src/app';

describe('GET /api/serling', () => {
  it('deve retornar informações sobre Rod Serling', async () => {
    const res = await request(app).get('/api/serling');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
  });
});
