# How it works

1. Send an upscale request that includes the source image and requested scale factor.
2. Receive the job ID and polling URL in the response.
3. Keep polling the status endpoint until processing finishes.
4. Download the upscaled image from the output URL returned by the job.

This asynchronous pattern is useful for batch systems that process many assets at the same time.
