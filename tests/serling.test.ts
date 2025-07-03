import request from 'supertest';
import app from '../src/app';
// Adiciona tipos do Jest para evitar erros de nomes globais
import '@types/jest';

describe('Serling API', () => {
  it('GET /api/serling deve retornar informações', async () => {
    const res = await request(app).get('/api/serling');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
  });
});
