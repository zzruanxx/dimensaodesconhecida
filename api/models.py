# api/models.py

from django.db import models

class Episode(models.Model):
    # Mapeando os campos do seu episodes.json para um modelo Django
    id = models.IntegerField(primary_key=True)
    nome_episodio = models.CharField(max_length=255)
    data_lancamento = models.DateField()
    sinopse = models.TextField()
    analise_critica = models.TextField()

    class Meta:
        # Informa ao Django o nome da coleção no banco de dados.
        db_table = 'Episodes'

    def __str__(self):
        return self.nome_episodio