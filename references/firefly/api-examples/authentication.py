import requests

def retrieve_access_token(client_id, client_secret, scope):
    response = requests.post(
        "https://ims-na1.adobelogin.com/ims/token/v3",
        data={
            "grant_type": "client_credentials",
            "client_id": client_id,
            "client_secret": client_secret,
            "scope": scope,
        },
        timeout=30,
    )
    response.raise_for_status()
    return response.json()["access_token"]
