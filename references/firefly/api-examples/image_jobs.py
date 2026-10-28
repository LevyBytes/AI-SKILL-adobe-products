import requests

def submit_image_job(access_token, client_id, payload, model_version=None):
    headers = {
        "Authorization": f"Bearer {access_token}",
        "x-api-key": client_id,
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    if model_version is not None:
        headers["x-model-version"] = model_version
        headers["x-accept-mimetype"] = "image/jpeg"
    response = requests.post(
        "https://firefly-api.adobe.io/v3/images/generate-async",
        headers=headers,
        json=payload,
        timeout=60,
    )
    response.raise_for_status()
    job = response.json()
    if not job.get("statusUrl"):
        raise ValueError("The response did not include a statusUrl.")
    return job
