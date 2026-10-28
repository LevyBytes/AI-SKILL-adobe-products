# Expanding Images with Async APIs

Async APIs can be even more useful for resize workflows. In this example, a source image is uploaded, then the [Expand Image Asynchronous API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) resizes it. Instead of resizing one output at a time, the code starts several jobs together so the image can be resized more efficiently.

First, here is a wrapper that uses only a small part of the available parameters. This wrapper needs the source image plus the target size:

```js
async function asyncExpandImage(source, size, id, token) {
  let [width, height] = size.split("x");

  let body = {
    image: {
      source: {
        uploadId: source,
      },
    },
    size: {
      width,
      height,
    },
  };

  let resp = await fetch(`${BASE}/v3/images/expand-async`, {
    method: "POST",
    headers: {
      "x-api-key": id,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await resp.json();
}
```

Next, authenticate and upload the source image:

```js
let token = await getAccessToken(FIREFLY_SERVICES_CLIENT_ID, FIREFLY_SERVICES_CLIENT_SECRET);

let upload = await uploadImage("./source.jpg", "image/jpeg", FIREFLY_SERVICES_CLIENT_ID, token);
let uploadedImage = upload.images[0].id;
```

`uploadImage` wraps the [`upload`](https://developer.adobe.com/firefly-services/docs/firefly-api/guides/api/upload_image/) method. As with synchronous Firefly APIs, signed URLs from supported cloud storage providers can also be used.

Define the target sizes, start the jobs, and wait for them:

```js
let sizes = ["2500x2500", "3000x3000", "3500x3500"];

let expandJobs = [];
for (let size of sizes) {
  console.log(`Create job to expand our source to ${size}`);
  expandJobs.push(asyncExpandImage(uploadedImage, size, FIREFLY_SERVICES_CLIENT_ID, token));
}

let jobs = await Promise.all(expandJobs);
```

Production code should generally add more error handling. At this stage, all three resize jobs have been started.

Now configure polling and wait for completion:

```js
let expandResults = [];
jobs.forEach((j) => {
  expandResults.push(pollJob(j.statusUrl, FIREFLY_SERVICES_CLIENT_ID, token));
});
console.log("Waiting for the jobs to complete...");

let finalResults = await Promise.all(expandResults);
```

After the jobs finish, download the outputs:

```js
console.log("All work done, now downloading.");

finalResults.forEach((r, i) => {
  // we know we only have one result
  downloadFile(r.result.outputs[0].image.url, `source_${sizes[i]}.jpg`);
});
```

Here is the full example script:

Complete example files:

- [fetch-authentication.cjs](../../api-examples/node/fetch-authentication.cjs)
- [fetch-job-status.cjs](../../api-examples/node/fetch-job-status.cjs)
- [async-expand-request.cjs](../../api-examples/node/async-expand-request.cjs)
- [fetch-image-transfer.cjs](../../api-examples/node/fetch-image-transfer.cjs)
- [download-expanded-images.cjs](../../api-examples/node/download-expanded-images.cjs)
- [expanded-download-setup.md](../../api-examples/node/expanded-download-setup.md)
