# Step 6. Poll for Response

a. Poll Request - Because the Platform API is asynchronous, the client, after getting the job URL, must use it to poll for the response until the result arrives.

b. Output Response (URL to download output file) - As soon as processing wraps up and the result is ready, the client receives a response carrying a URL through which the output file can be downloaded. That URL usually points at the spot where the output file is held for the time being.
