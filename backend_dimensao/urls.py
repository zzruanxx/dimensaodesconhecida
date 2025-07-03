# backend_dimensao/urls.py

from django.contrib import admin
from django.urls import path, include  # 1. Importe a função 'include'
from django.http import HttpResponse

def home(request):
    return HttpResponse("API Dimensão Desconhecida - Backend rodando.")

urlpatterns = [
    path('admin/', admin.site.urls),

    # 2. Adicione esta linha para conectar com as URLs da nossa api
    path('api/episodes/', include('api.urls')),
    path('', home),
]