import os
from authentication import retrieve_access_token
from image_jobs import submit_image_job
from job_status import poll_image_job

def main():
    client_id = os.environ["FIREFLY_SERVICES_CLIENT_ID"]
    access_token = retrieve_access_token(
        client_id, os.environ["FIREFLY_SERVICES_CLIENT_SECRET"],
        "openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis",
    )
    job = submit_image_job(access_token, client_id, {
        "prompt": "a realistic illustration of a cat coding"
    })
    result = poll_image_job(job["statusUrl"], access_token, client_id)
    image_url = result["outputs"][0]["image"]["url"]
    print(f"You can view the generated image at: {image_url}")

if __name__ == "__main__":
    main()
