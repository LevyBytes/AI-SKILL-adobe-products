import os
import requests

def generate_images_with_custom_model(access_token, custom_model_id):
    url = 'https://firefly-api.adobe.io/v3/images/generate-async'
    headers = {
        'Accept': 'application/json',
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json',
        'x-accept-mimetype': 'image/jpeg',
        'x-model-version':'image3_custom',
        'x-api-key': os.environ['CUSTOM_MODELS_CLIENT_ID'],
    }

    data = {
        "numVariations": 2,
        "seeds": [66080, 82683],
        "size": {"width": 2048, "height": 2048},
        "prompt": "An almond seed in a warm setting",
        "contentClass": "photo",
        "visualIntensity": 6,
        "style": {
            "presets": ["painting"],
            "strength": 50
        },
        "promptBiasingLocaleCode": "en-US",
        "customModelId": custom_model_id
    }

    response = requests.post(url, headers=headers, json=data, timeout=60)
    response.raise_for_status()
    result = response.json()
    print("Generate Image Response:", result)
    return result

