# dimensaodesconhecida
Aplicativo em Homenagem a série the Twilight Zone

# Dimensão Desconhecida API

## Endpoints

### Episódios
- `GET /api/episodes` — Lista todos os episódios.
- `GET /api/episodes/:id` — Detalhes de um episódio.
- `GET /api/episodes/:id/media` — Imagens e trilha sonora do episódio.

### Curiosidades
- `GET /api/facts/season/:season` — Curiosidades por temporada.

### Rod Serling
- `GET /api/serling` — Informações sobre Rod Serling.

## Testes

Execute `npm test` para rodar os testes automatizados.
