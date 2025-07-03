# api/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .cosmosdb_connection import listar_episodios, criar_episodio

class EpisodeList(APIView):
    """
    Lista todos os episódios.
    """
    def get(self, request, format=None):
        episodios = listar_episodios()
        return Response(episodios)

    def post(self, request, format=None):
        episodio = request.data
        result = criar_episodio(episodio)
        return Response(result, status=status.HTTP_201_CREATED)