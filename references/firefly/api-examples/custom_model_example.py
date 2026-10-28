import os
from authentication import retrieve_access_token
from custom_models import list_custom_models
from image_jobs import submit_image_job
from job_status import poll_image_job

def main():
    client_id = os.environ["CUSTOM_MODELS_CLIENT_ID"]
    access_token = retrieve_access_token(
        client_id, os.environ["CUSTOM_MODELS_CLIENT_SECRET"],
        "openid,AdobeID,firefly_api,ff_apis",
    )
    response = list_custom_models(access_token, client_id)
    models = response.get("custom_models", [])
    if not models or not models[0].get("repo:assetId"):
        raise ValueError("No custom model with a repo:assetId was returned.")
    custom_model_id = models[0]["repo:assetId"]
    payload = {
        "numVariations": 2,
        "seeds": [66080, 82683],
        "size": {"width": 2048, "height": 2048},
        "prompt": "Laika running over rolling green hills with a big vibrant sun in the background",
        "contentClass": "photo",
        "visualIntensity": 6,
        "style": {"presets": ["painting"], "strength": 50},
        "promptBiasingLocaleCode": "en-US",
        "customModelId": custom_model_id,
    }
    job = submit_image_job(access_token, client_id, payload, "image3_custom")
    result = poll_image_job(job["statusUrl"], access_token, client_id)
    for output in result["outputs"]:
        print(output["image"]["url"])

if __name__ == "__main__":
    main()
