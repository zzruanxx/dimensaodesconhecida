from azure.cosmos import CosmosClient, PartitionKey
import os

COSMOS_DB_ENDPOINT = os.environ.get("COSMOS_DB_ENDPOINT")
COSMOS_DB_KEY = os.environ.get("COSMOS_DB_KEY")
COSMOS_DB_DATABASE = os.environ.get("COSMOS_DB_DATABASE")
COSMOS_DB_CONTAINER = os.environ.get("COSMOS_DB_CONTAINER")

if not all([COSMOS_DB_ENDPOINT, COSMOS_DB_KEY, COSMOS_DB_DATABASE, COSMOS_DB_CONTAINER]):
    print(
        "[AVISO] Uma ou mais variáveis de ambiente do Cosmos DB não estão definidas: "
        "COSMOS_DB_ENDPOINT, COSMOS_DB_KEY, COSMOS_DB_DATABASE, COSMOS_DB_CONTAINER"
    )
    client = None
    database = None
    container = None
else:
    client = CosmosClient(COSMOS_DB_ENDPOINT, credential=COSMOS_DB_KEY)
    database = client.create_database_if_not_exists(COSMOS_DB_DATABASE)
    container = database.create_container_if_not_exists(
        id=COSMOS_DB_CONTAINER,
        partition_key=PartitionKey(path="/id"),
    )

def criar_item(item):
    return container.create_item(item)
from .cosmosdb_connection import criar_item

def criar_novo_item(request):
    data = {"id": "item1", "nome": "Teste"}
    criar_item(data)
    ...
def ler_item(item_id, pk):
    return container.read_item(item_id, partition_key=pk)

def listar_itens():
    return list(container.read_all_items())