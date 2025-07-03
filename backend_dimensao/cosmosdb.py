import os
from azure.cosmos import CosmosClient

COSMOS_DB_ENDPOINT = os.getenv("COSMOS_DB_ENDPOINT")
COSMOS_DB_KEY = os.getenv("COSMOS_DB_KEY")
COSMOS_DB_DATABASE = os.getenv("COSMOS_DB_DATABASE")
COSMOS_DB_CONTAINER = os.getenv("COSMOS_DB_CONTAINER")

def get_cosmos_container():
    client = CosmosClient(COSMOS_DB_ENDPOINT, COSMOS_DB_KEY)
    database = client.get_database_client(COSMOS_DB_DATABASE)
    container = database.get_container_client(COSMOS_DB_CONTAINER)
    return container
