import request from 'supertest';
import app from '../app'; // Supondo que o app Express está exportado aqui

describe('GET /api/episodes/:id', () => {
  it('deve retornar 404 se o episódio não existir', async () => {
    const res = await request(app).get('/api/episodes/nao-existe');
    expect(res.status).toBe(404);
  });

  it('deve retornar o episódio se existir', async () => {
    // Supondo que exista um episódio com id '1'
    const res = await request(app).get('/api/episodes/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', '1');
  });
});
