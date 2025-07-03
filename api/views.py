# api/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Episode
from .serializers import EpisodeSerializer
from django.http import JsonResponse
from .cosmosdb_connection import listar_itens, criar_item

# View para listar todos os episódios ou criar um novo (não implementaremos o POST agora)
class EpisodeList(APIView):
    """
    Lista todos os episódios.
    """
    def get(self, request, format=None):
        episodes = Episode.objects.all()
        serializer = EpisodeSerializer(episodes, many=True)
        return Response(serializer.data)

# View para buscar, atualizar ou deletar um episódio específico
class EpisodeDetail(APIView):
    """
    Busca um episódio pelo seu ID.
    """
    def get_object(self, pk):
        try:
            return Episode.objects.get(pk=pk)
        except Episode.DoesNotExist:
            return None

    def get(self, request, pk, format=None):
        episode = self.get_object(pk)
        if episode is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = EpisodeSerializer(episode)
        return Response(serializer.data)
    
def criar_novo_item(request):
    data = {"id": "item1", "nome": "Teste"}
    criar_item(data)
    return HttpResponse("Item criado com sucesso!")

def cosmosdb_status(request):
    try:
        itens = listar_itens()
        return JsonResponse({"status": "ok", "qtd_itens": len(itens)})
    except Exception as e:
        return JsonResponse({"status": "erro", "detalhe": str(e)}, status=500)