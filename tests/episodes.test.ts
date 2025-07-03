import request from 'supertest';
import app from '../src/app';

describe('GET /api/episodes', () => {
  it('deve retornar todos os episódios', async () => {
    const res = await request(app).get('/api/episodes');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /api/episodes/:id', () => {
  it('deve retornar um episódio específico', async () => {
    // Substitua '1' por um ID válido no seu banco
    const res = await request(app).get('/api/episodes/1');
    expect([200, 404]).toContain(res.status);
  });
});
  });
});
