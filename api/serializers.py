# api/serializers.py

from rest_framework import serializers
from .models import Episode

class EpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        # '__all__' significa que queremos incluir todos os campos 
        # do nosso modelo Episode no JSON final.
        fields = '__all__'