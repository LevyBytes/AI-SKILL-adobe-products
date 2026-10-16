import os
import requests

def retrieve_access_token():
    client_id = os.environ['CUSTOM_MODELS_CLIENT_ID']
    client_secret = os.environ['CUSTOM_MODELS_CLIENT_SECRET']

    token_url = 'https://ims-na1.adobelogin.com/ims/token/v3'
    payload = {
        'grant_type': 'client_credentials',
        'client_id': client_id,
        'client_secret': client_secret,
        'scope': 'openid,AdobeID,firefly_api,ff_apis'
    }

    response = requests.post(token_url, data=payload, timeout=60)
    response.raise_for_status()
    token_data = response.json()
    print("Access Token Retrieved")
    return token_data['access_token']
