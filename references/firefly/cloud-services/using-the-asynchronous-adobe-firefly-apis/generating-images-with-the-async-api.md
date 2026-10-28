# Generating Images with the Async API

This example uses the asynchronous text-to-image endpoint; consult [Generate Image Async API Reference](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md). Authentication is omitted because it follows the synchronous-call pattern.

Required and optional arguments are the same as on the synchronous endpoint. At minimum, send a text prompt. You can also send optional values that guide the final result, including content class, structure controls, and style settings. The main request-code change is the endpoint:

[Complete request helper](../../api-examples/node/async-text-request.cjs).

This small `Node.js` wrapper calls the endpoint while passing a text prompt and content class. Other generation options can be added as needed.

The response is now different. With the synchronous endpoint, the method waited until image generation completed. With async generation, a successful request quickly returns a response like this:

```json
{
  "jobId": "urn:ff:jobs:eso851211:86ffe2ea-d765-4bd3-b2fd-568ca8fc36ac",
  "statusUrl": "https://firefly-api.adobe.io/v3/status/urn:ff:jobs:eso851211:86ffe2ea-d765-4bd3-b2fd-568ca8fc36ac",
  "cancelUrl": "https://firefly-api.adobe.io/v3/cancel/urn:ff:jobs:eso851211:86ffe2ea-d765-4bd3-b2fd-568ca8fc36ac"
}
```

Use `statusUrl` and `cancelUrl` to check the request or cancel it. `jobId` can also be saved for logging. This sample repeatedly polls `statusUrl` until Firefly finishes:

[Complete bounded polling helper](../../api-examples/node/fetch-job-status.cjs).

While a job is running, the response resembles this:

```json
{
  "status": "running",
  "jobId": "86ffe2ea-d765-4bd3-b2fd-568ca8fc36ac"
}
```

After Firefly creates the image successfully, the final status is similar to this:

```json
{
  "status": "succeeded",
  "jobId": "urn:ff:jobs:eso851211:86ffe2ea-d765-4bd3-b2fd-568ca8fc36ac",
  "result": {
    "size": {
      "width": 2048,
      "height": 2048
    },
    "outputs": [
      {
        "seed": 2142812600,
        "image": {
          "url": "https://pre-signed-firefly-prod.s3-accelerate.amazonaws.com/images/0c5c80a3-7189-4bd3-a52e-87b36e4fc47b12345"
        }
      }
    ],
    "contentClass": "art",
    "altText": "A futuristic city glowing at night with neon lights and flying cars streaking across a dark sky."
  }
}
```

The complete script below uses a static prompt, sends the Firefly request, then polls the request status. Once the image is ready, it saves the output locally. Utility functions such as authentication match the synchronous-call pattern, although your implementation may handle authentication differently.

Complete example files:

- [fetch-authentication.cjs](../../api-examples/node/fetch-authentication.cjs)
- [fetch-job-status.cjs](../../api-examples/node/fetch-job-status.cjs)
- [async-text-request.cjs](../../api-examples/node/async-text-request.cjs)
- [fetch-image-transfer.cjs](../../api-examples/node/fetch-image-transfer.cjs)
- [download-generated-images.cjs](../../api-examples/node/download-generated-images.cjs)
- [generated-download-setup.md](../../api-examples/node/generated-download-setup.md)
