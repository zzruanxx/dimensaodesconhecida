import os
from azure.cosmos import CosmosClient

endpoint = "https://dimensaodesconhecidaatt.documents.azure.com:443/"
key = "82zrWfFRfinSxFwuC3f1m7wgZOyrPwOpiHLtYIxhRNbMelwlbDPKkTBTwOadhJ7ot3ilLDCJGkh8ACDbyRAkog=="
database_name = "dimensaodesconhecidaatt"
container_name = "DimensaoDesconhecidaDB"

client = CosmosClient(endpoint, key)
db = client.get_database_client(database_name)

try:
    db.create_container(
        id=container_name,
        partition_key={"/partitionKey": "/id"},
        offer_throughput=400
    )
    print("Container criado com sucesso!")
except Exception as e:
    print(f"Erro ao criar container: {e}")
