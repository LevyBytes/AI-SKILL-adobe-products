from image_jobs import submit_image_job

def generate_images_with_custom_model(access_token, custom_model_id, client_id):
    payload = {
        "prompt": "An almond seed in a warm setting",
        "customModelId": custom_model_id,
    }
    return submit_image_job(access_token, client_id, payload, "image3_custom")
