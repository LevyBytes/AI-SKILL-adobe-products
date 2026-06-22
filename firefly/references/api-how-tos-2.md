# Firefly Generate Image Api Tutorial, Object Composite

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Firefly Generate Image API Tutorial; Compositing feature guide.

## Firefly Generate Image API Tutorial

Use the Generate Image API to create custom photos and illustrations.

[Figure: paris tourism illustration](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/gen-image-tutorial-hero.jpeg)

### Overview

Picture a global tourism company preparing a marketing campaign that needs localized illustrations for each destination it promotes.

In this tutorial, you will:

- Start by generating one image from a simple prompt
- Then apply aspect ratio, localized style, and style preset customizations
- Finish by creating localized images for multiple locations

Choose the step-by-step walkthrough, or open the [full source code](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/firefly-generate-image-api-tutorial.md#full-example) near the end of this webpage if that better fits how you learn.

### Prerequisites

To follow along, have a Firefly Services **Client ID** and **Client Secret** available. If you need credentials, use the [Adobe Developer Console](api-getting-started.md) page to learn how to obtain them.

### Set Up Your Environment

Before starting this [Node.js](https://nodejs.org/en/download/package-manager) tutorial, use a protected terminal session for these commands:

```bash

mkdir firefly-generate-image-api-tutorial
cd firefly-generate-image-api-tutorial
npm init --y
npm install axios qs
touch index.js
```

### Generate an Image

Starting with the main point, here is code that uses `dog` as the default prompt for one generated image:

```js
async function generateImage({ accessToken, data = { prompt: "dog" } }) {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://firefly-api.adobe.io/v3/images/generate",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": process.env.FIREFLY_SERVICES_CLIENT_ID,
      Authorization: `Bearer ${accessToken}`,
    },
    data: JSON.stringify(data),
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
```

### Customize Requests

Firefly requests include several controls for customizing generated images. The following `data` object demonstrates these choices:

- Landscape output at a (16:9) aspect ratio
- A geographic style localized to `en-US`
- Style presets set to `doodle_drawing` and `scribble_texture` as the selected pair

```js
const data = {
  prompt: "Fun, abstract tourism doodle that inspires travel",
  size: { width: 2688, height: 1536 },
  promptBiasingLocaleCode: "en-US",
  style: {
    presets: ["doodle_drawing", "scribble_texture"],
  },
};
```

### Define Localized Customizations

Place this object near the top of your file to describe the localized variants:

```js
const IMAGE_VARIATIONS = [
  {
    location: "Paris, France",
    locale: "fr-FR",
    customPrompt: "Includes delicious croissants.",
  },
  {
    location: "Tokyo, Japan",
    locale: "ja-JP",
    customPrompt: "Includes delicious sushi.",
  },
];
```

Then revise the `createImages` function so each location gets its own request customization:

```js
async function createImages(accessToken) {
  return Promise.all(
    IMAGE_VARIATIONS.map(({ location, locale, customPrompt }) => {
      const data = {
        prompt: `Fun, abstract tourism doodle that inspires travel to ${location}. ${customPrompt}`,
        size: { width: 2688, height: 1536 },
        promptBiasingLocaleCode: locale,
        style: {
          presets: ["doodle_drawing", "scribble_texture"],
        },
      };

      return generateImage({ accessToken, data });
    }),
  );
}
```

### Full Example

Check this tutorial's [prerequisites](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/firefly-generate-image-api-tutorial.md#prerequisites) section before running the complete sample so your environment is ready. Because the listing is educational, production use in a live application still requires additional error handling, logging, security measures, and related hardening.

```js
const axios = require("axios");
const qs = require("qs");

const IMAGE_VARIATIONS = [
  {
    location: "Paris, France",
    locale: "fr-FR",
    customPrompt: "Includes delicious croissants.",
  },
  {
    location: "Tokyo, Japan",
    locale: "ja-JP",
    customPrompt: "Includes delicious sushi.",
  },
  // Add more locations here
];

(async () => {
  const accessToken = await retrieveAccessToken();
  const images = await createImages(accessToken);
  console.log(JSON.stringify(images, null, 2));
})();

async function createImages(accessToken) {
  return Promise.all(
    IMAGE_VARIATIONS.map(({ location, locale, customPrompt }) => {
      const data = {
        prompt: `Fun, abstract tourism doodle that inspires travel to ${location}. ${customPrompt}`,
        size: { width: 2688, height: 1536 },
        promptBiasingLocaleCode: locale,
        style: {
          presets: ["doodle_drawing", "scribble_texture"],
        },
      };

      return generateImage({ accessToken, data });
    }),
  );
}

async function retrieveAccessToken() {
  let data = qs.stringify({
    grant_type: "client_credentials",
    client_id: process.env.FIREFLY_SERVICES_CLIENT_ID,
    client_secret: process.env.FIREFLY_SERVICES_CLIENT_SECRET,
    scope: "openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://ims-na1.adobelogin.com/ims/token/v3",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    const { access_token } = response.data;
    return access_token;
  } catch (error) {
    console.log(error);
  }
}

async function generateImage({ accessToken, data }) {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://firefly-api.adobe.io/v3/images/generate",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": process.env.FIREFLY_SERVICES_CLIENT_ID,
      Authorization: `Bearer ${accessToken}`,
    },
    data: JSON.stringify(data),
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
```

This tutorial uses CommmonJS to keep the first run straightforward. For ES6 modules, switch `require` statements to `import` statements and rename `index.js` to `index.mjs`.

### Deepen Your Understanding

Once Generate Image API is working in your code, open its [reference documentation](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) to investigate advanced automation scenarios.

## Compositing feature guide

Firefly API provides compositing operations that place objects into scenes while accounting for lighting, shadows, and image harmonization. The API offers three compositing choices, each aimed at a different workflow and amount of creative control.

All three operations run asynchronously. A request returns a `jobId` plus a `statusUrl` that can be polled for progress.

The composite operations are:

- **Generate Object Composite** creates a background from a text prompt, then places the object into that generated scene. Use it when you do not already have a background image.
- **Precise Composite** inserts an object into an existing background while keeping the supplied subject pixel-accurate. Use it when the subject cannot be changed.
- **Adaptive Composite** places an object into an existing background while adapting and regenerating the subject so it better fits the scene. Use it when natural integration and realism matter most.

For complete schema and endpoint information, use the [Object Composite API Reference](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).

### Which API should I use?

Use this decision tree when choosing the endpoint that fits your scenario:

[Figure: Decision tree for choosing Generate Object Composite, Precise Composite, or Adaptive Composite based on whether you have a background image and whether pixel-perfect subject fidelity is required.](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/object-composite/composite-api-decision-tree.svg)

### Generate Object Composite

This service creates a background from a prompt, then composites the object into that new background.
Use it when you already have an object image and need Firefly to create the background for the final asset.

Run this workflow with an object composite request to `/v3/images/generate-object-composite-async`.

### Example requests

### JavaScript

```javascript
const axios = require("axios");

const API_BASE = "https://firefly-api.adobe.io";
const ACCESS_TOKEN = "your_access_token";
const API_KEY = "your_api_key";

async function generateObjectComposite() {
  const payload = {
    prompt: "a product on a wooden table in a cozy kitchen",
    image: {
      source: { url: "https://example.com/product.png" },
    },
  };

  const response = await axios.post(
    `${API_BASE}/v3/images/generate-object-composite-async`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    },
  );

  console.log("Job ID:", response.data.jobId);
  console.log("Status URL:", response.data.statusUrl);
  console.log("Cancel URL:", response.data.cancelUrl);
  return response.data;
}

generateObjectComposite();
```

### Python

```python

API_BASE = "https://firefly-api.adobe.io"
ACCESS_TOKEN = "your_access_token"
API_KEY = "your_api_key"

headers = {
    "Authorization": f"Bearer {ACCESS_TOKEN}",
    "x-api-key": API_KEY,
    "Content-Type": "application/json"
}

payload = {
    "prompt": "a product on a wooden table in a cozy kitchen",
    "image": {
        "source": { "url": "https://example.com/product.png" }
    }
}

response = requests.post(
    f"{API_BASE}/v3/images/generate-object-composite-async",
    headers=headers,
    json=payload
)
response.raise_for_status()
result = response.json()
print("Job ID:", result["jobId"])
print("Status URL:", result.get("statusUrl"))
print("Cancel URL:", result.get("cancelUrl"))
```

### cURL

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-object-composite-async' \
  --header 'Authorization: Bearer $ACCESS_TOKEN' \
  --header 'x-api-key: $API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "prompt": "a product on a wooden table in a cozy kitchen",
    "image": {
      "source": { "url": "https://example.com/product.png" }
    }
  }'
```

### Precise Composite

Precise Composite inserts an object into an existing background and keeps the subject exactly as supplied.
Use this option when pixel-perfect subject fidelity is a requirement.

Send a precise composite request to `/v3/images/precise-composite` for this operation.

### Example request

### JavaScript

```javascript
const axios = require("axios");

const API_BASE = "https://firefly-api.adobe.io";
const ACCESS_TOKEN = "your_access_token";
const API_KEY = "your_api_key";

async function preciseComposite() {
  const payload = {
    background: {
      image: {
        source: { url: "https://example.com/background.jpg" },
      },
      fillAreaMask: {
        source: { url: "https://example.com/placement-mask.png" },
      },
    },
    object: {
      image: {
        source: { url: "https://example.com/product.png" },
      },
    },
    blend: 0.5,
    output: { mediaType: "image/jpeg" },
  };

  const response = await axios.post(`${API_BASE}/v3/images/precise-composite`, payload, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
  });

  console.log("Job ID:", response.data.jobId);
  console.log("Status URL:", response.data.statusUrl);
  console.log("Cancel URL:", response.data.cancelUrl);
  return response.data;
}

preciseComposite();
```

### Python

```python

API_BASE = "https://firefly-api.adobe.io"
ACCESS_TOKEN = "your_access_token"
API_KEY = "your_api_key"

headers = {
    "Authorization": f"Bearer {ACCESS_TOKEN}",
    "x-api-key": API_KEY,
    "Content-Type": "application/json"
}

payload = {
    "background": {
        "image": {
            "source": { "url": "https://example.com/background.jpg" }
        },
        "fillAreaMask": {
            "source": { "url": "https://example.com/placement-mask.png" }
        }
    },
    "object": {
        "image": {
            "source": { "url": "https://example.com/product.png" }
        }
    },
    "blend": 0.5,
    "output": { "mediaType": "image/jpeg" }
}

response = requests.post(
    f"{API_BASE}/v3/images/precise-composite",
    headers=headers,
    json=payload
)
response.raise_for_status()
result = response.json()
print("Job ID:", result["jobId"])
print("Status URL:", result.get("statusUrl"))
print("Cancel URL:", result.get("cancelUrl"))
```

### cURL

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/precise-composite' \
  --header 'Authorization: Bearer $ACCESS_TOKEN' \
  --header 'x-api-key: $API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "background": {
      "image": {
        "source": { "url": "https://example.com/background.jpg" }
      },
      "fillAreaMask": {
        "source": { "url": "https://example.com/placement-mask.png" }
      }
    },
    "object": {
      "image": {
        "source": { "url": "https://example.com/product.png" }
      }
    },
    "blend": 0.5,
    "output": { "mediaType": "image/jpeg" }
  }'
```

### Adaptive Composite

Adaptive Composite places an object image into an existing background and modifies the subject so it better matches the scene.
Use it when a realistic, seamless composite is more important than preserving the exact original subject pixels.

**Background Image**
[Figure: Image of the background, a clean modern kitchen countertop](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/object-composite/XStitch-comp1.png)

**Product Image**
[Figure: Image of the product, a cereal box](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/object-composite/XStitch-comp2.png)

**Completed Composite**
[Figure: Image of the composite, the cereal box on the kitchen countertop](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/object-composite/XStitch-comp3.png)

Run this operation with an adaptive composite request to `/v3/images/adaptive-composite`.

### Background preservation

Adaptive Composite includes the `preserveBackground` parameter. When it is `true`, original background pixels remain in place and only the object-composite region changes. This is useful when exact background details must stay intact, such as floor texture or a branded environment, while the inserted object still needs to blend naturally.

**Background Image**
[Figure: Background image of a hand holding a phone in front of a bookcase](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/object-composite/background-preserve1.png)

**Product Image**
[Figure: Product image, the back of a phone](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/object-composite/background-preserve-asset.png)

**Mask Area Image (white area is the dynamic, changeable area)**
[Figure: Mask image, a rectangle around the phone](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/object-composite/background-preserve-mask.png)

**Completed Composite**
[Figure: Completed Composite showing the back of the phone](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/object-composite/background-preserve2.png)

### Example request

### JavaScript

```javascript
const axios = require("axios");

const API_BASE = "https://firefly-api.adobe.io";
const ACCESS_TOKEN = "your_access_token";
const API_KEY = "your_api_key";

async function adaptiveComposite() {
  const payload = {
    background: {
      image: {
        source: { url: "https://example.com/living-room.jpg" },
      },
      fillAreaMask: {
        source: { url: "https://example.com/placement-mask.png" },
      },
    },
    object: {
      image: {
        source: { url: "https://example.com/chair.png" },
      },
      mask: {
        source: { url: "https://example.com/chair-mask.png" },
      },
    },
    preserveBackground: true,
    harmonization: 0.7,
    shadowIntensity: 1,
    seeds: [42, 84, 126],
    output: { mediaType: "image/png" },
  };

  const response = await axios.post(`${API_BASE}/v3/images/adaptive-composite`, payload, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
  });

  console.log("Job ID:", response.data.jobId);
  console.log("Status URL:", response.data.statusUrl);
  console.log("Cancel URL:", response.data.cancelUrl);
  return response.data;
}

adaptiveComposite();
```

### Python

```python

API_BASE = "https://firefly-api.adobe.io"
ACCESS_TOKEN = "your_access_token"
API_KEY = "your_api_key"

headers = {
    "Authorization": f"Bearer {ACCESS_TOKEN}",
    "x-api-key": API_KEY,
    "Content-Type": "application/json"
}

payload = {
    "background": {
        "image": {
            "source": { "url": "https://example.com/living-room.jpg" }
        },
        "fillAreaMask": {
            "source": { "url": "https://example.com/placement-mask.png" }
        }
    },
    "object": {
        "image": {
            "source": { "url": "https://example.com/chair.png" }
        },
        "mask": {
            "source": { "url": "https://example.com/chair-mask.png" }
        }
    },
    "preserveBackground": True,
    "harmonization": 0.7,
    "shadowIntensity": 1,
    "seeds": [42, 84, 126],
    "output": { "mediaType": "image/png" }
}

response = requests.post(
    f"{API_BASE}/v3/images/adaptive-composite",
    headers=headers,
    json=payload
)
response.raise_for_status()
result = response.json()
print("Job ID:", result["jobId"])
print("Status URL:", result.get("statusUrl"))
print("Cancel URL:", result.get("cancelUrl"))
```

### cURL

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/adaptive-composite' \
  --header 'Authorization: Bearer $ACCESS_TOKEN' \
  --header 'x-api-key: $API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "background": {
      "image": {
        "source": { "url": "https://example.com/living-room.jpg" }
      },
      "fillAreaMask": {
        "source": { "url": "https://example.com/placement-mask.png" }
      }
    },
    "object": {
      "image": {
        "source": { "url": "https://example.com/chair.png" }
      },
      "mask": {
        "source": { "url": "https://example.com/chair-mask.png" }
      }
    },
    "preserveBackground": true,
    "harmonization": 0.7,
    "shadowIntensity": 1,
    "seeds": [42, 84, 126],
    "output": { "mediaType": "image/png" }
  }'
```

### Canceling a job

The three endpoints described above are asynchronous. Each one returns **202 Accepted** with a `jobId`, a `statusUrl` used for polling, and a `cancelUrl` that can stop the job.

To cancel work that is still running, send a `PUT` request to the `cancelUrl` supplied in the first response. Successful cancellation usually returns **200** and no response body.

### JavaScript

```javascript
async function cancelJob(cancelUrl) {
  const response = await axios.put(
    cancelUrl,
    {},
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    },
  );
  console.log("Job canceled:", response.status);
  return response.data;
}
```

### Python

```python
def cancel_job(cancel_url):
    response = requests.put(
        cancel_url,
        headers={
            "Authorization": f"Bearer {ACCESS_TOKEN}",
            "x-api-key": API_KEY,
            "Content-Type": "application/json"
        }
    )
    response.raise_for_status()
    print("Job canceled:", response.status_code)
    return response.json() if response.content else None
```

### cURL

```bash
curl --location --request PUT '$CANCEL_URL' \
  --header 'Authorization: Bearer $ACCESS_TOKEN' \
  --header 'x-api-key: $API_KEY' \
  --header 'Content-Type: application/json'
```

For full technical details, see the [Object Composite API Reference](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).
