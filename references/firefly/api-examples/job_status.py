import time
import requests

def poll_image_job(status_url, access_token, client_id, attempts=120, delay=5):
    if attempts < 1 or delay < 0:
        raise ValueError("Use a positive attempt count and nonnegative delay.")
    headers = {
        "Authorization": f"Bearer {access_token}",
        "x-api-key": client_id,
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    for attempt in range(attempts):
        response = requests.get(status_url, headers=headers, timeout=30)
        response.raise_for_status()
        job = response.json()
        status = job.get("status")
        if status == "succeeded":
            return job["result"]
        if status in {"failed", "cancelled", "timeout"}:
            raise RuntimeError(f"Image generation ended with {status}: {job}")
        if status not in {"pending", "running", "cancel_pending"}:
            raise ValueError(f"Unexpected job status: {status!r}")
        if attempt + 1 < attempts:
            time.sleep(delay)
    raise TimeoutError("Image generation did not finish within the poll limit.")
