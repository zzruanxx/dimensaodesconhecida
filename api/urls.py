# api/urls.py

from django.urls import path
from .views import EpisodeList, EpisodeDetail

urlpatterns = [
    # Rota para a lista de episódios: /api/episodes/
    path('', EpisodeList.as_view(), name='episode-list'),

    # Rota para um episódio específico, ex: /api/episodes/1/
    path('<int:pk>/', EpisodeDetail.as_view(), name='episode-detail'),
]