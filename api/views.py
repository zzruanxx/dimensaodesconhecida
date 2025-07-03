# api/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .cosmosdb_connection import listar_episodios, criar_episodio, ler_item

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

class EpisodeDetail(APIView):
    """
    Retrieve, update or delete a episode instance.
    """
    def get(self, request, id):
        try:
            episodio = ler_item(item_id=id, pk=id)
            return Response(episodio)
        except Exception:
            return Response({"detail": "Episódio não encontrado."}, status=status.HTTP_404_NOT_FOUND)