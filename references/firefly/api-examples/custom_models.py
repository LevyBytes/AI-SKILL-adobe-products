import requests

def list_custom_models(access_token, client_id):
    response = requests.get(
        "https://firefly-api.adobe.io/v3/custom-models",
        headers={
            "Authorization": f"Bearer {access_token}",
            "x-api-key": client_id,
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        timeout=30,
    )
    response.raise_for_status()
    return response.json()
