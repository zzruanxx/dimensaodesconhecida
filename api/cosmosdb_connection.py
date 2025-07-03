from azure.cosmos import CosmosClient, PartitionKey, exceptions
import os

COSMOS_DB_ENDPOINT = os.environ.get("COSMOS_DB_ENDPOINT")
COSMOS_DB_KEY = os.environ.get("COSMOS_DB_KEY")
COSMOS_DB_DATABASE = os.environ.get("COSMOS_DB_DATABASE")
COSMOS_DB_CONTAINER = os.environ.get("COSMOS_DB_CONTAINER")

# Use as variáveis, não valores literais!
client = CosmosClient(COSMOS_DB_ENDPOINT, credential=COSMOS_DB_KEY)
database = client.create_database_if_not_exists(id=COSMOS_DB_DATABASE)

def get_container():
    try:
        container = database.get_container_client(COSMOS_DB_CONTAINER)
        container.read()
    except exceptions.CosmosResourceNotFoundError:
        container = database.create_container(
            id=COSMOS_DB_CONTAINER,
            partition_key=PartitionKey(path="/id"),
            offer_throughput=400
        )
    return database.get_container_client(COSMOS_DB_CONTAINER)

def criar_item(item):
    container = get_container()
    return container.create_item(body=item)

def ler_item(item_id, pk):
    container = get_container()
    return container.read_item(item=item_id, partition_key=pk)

def listar_itens():
    container = get_container()
    return list(container.read_all_items())

def listar_episodios():
    container = get_container()
    return list(container.read_all_items())

def criar_episodio(episodio):
    container = get_container()
    return container.create_item(body=episodio)