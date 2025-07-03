# api/urls.py

from .views import EpisodeList
from django.urls import path

urlpatterns = [
    # Rota para a lista de episódios: /api/episodes/
    path('', EpisodeList.as_view(), name='episode-list'),

    # Rota para um episódio específico, ex: /api/episodes/1/
    # path('<int:pk>/', EpisodeDetail.as_view(), name='episode-detail'),  # Remova ou comente esta linha

    # Rota para o endpoint de status: /api/episodes/status/
    # path('status/', cosmosdb_status),  # Remova ou comente esta linha, pois cosmosdb_status não está definido
]