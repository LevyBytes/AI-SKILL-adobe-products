import os
import requests

def list_custom_models(access_token):
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': os.environ['CUSTOM_MODELS_CLIENT_ID'],
        'Authorization': f'Bearer {access_token}'
    }

    response = requests.get(
        'https://firefly-api.adobe.io/v3/custom-models',
        headers=headers, timeout=60
    )
    response.raise_for_status()
    models_response = response.json()
    print("List Custom Models Response:", models_response)
    return models_response
