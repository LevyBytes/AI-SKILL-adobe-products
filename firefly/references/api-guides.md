# Guides

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

Create an initial image with Firefly Services

[Figure: an illustration of a cat coding on a laptop](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/cat-coding.jpeg)

## Prerequisites

### Credentials

Before continuing, make sure you have a Firefly API or Firefly Services **Client ID** and **Client Secret**. If you still need them, retrieve the values from your [Adobe Developer Console project](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s/#api-overview). **Keep these credentials secure, and do not place them in client-side or public code.**

### Set Up Your Environment

In a secure terminal, run the setup commands for your chosen language:

### JavaScript

```bash
mkdir firefly-api-generate-images-tutorial
cd firefly-api-generate-images-tutorial
npm init --y
npm install axios qs
touch index.js
```

### Python

```bash
mkdir firefly-api-generate-images-tutorial
cd firefly-api-generate-images-tutorial
python -m pip install requests
touch main.py
```

Follow the tutorial step by step, or skip directly to the [full source code](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/index.md#full-example), depending on how you prefer to learn.

## Retrieve an Access Token

From a secure terminal, use `export` to place your **Client ID** and **Client Secret** in environment variables available to later commands:

```bash

```

Request an access token:

### cURL

```bash
curl --location 'https://ims-na1.adobelogin.com/ims/token/v3' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode "client_id=$FIREFLY_SERVICES_CLIENT_ID" \
--data-urlencode "client_secret=$FIREFLY_SERVICES_CLIENT_SECRET" \
--data-urlencode 'scope=openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis'
```

### Python

```python
def retrieve_access_token():
    client_id = os.environ['FIREFLY_SERVICES_CLIENT_ID']
    client_secret = os.environ['FIREFLY_SERVICES_CLIENT_SECRET']

    token_url = 'https://ims-na1.adobelogin.com/ims/token/v3'
    payload = {
        'grant_type': 'client_credentials',
        'client_id': client_id,
        'client_secret': client_secret,
        'scope': 'openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis'
    }

    response = requests.post(token_url, data=payload)
    response.raise_for_status()
    token_data = response.json()
    print("Access Token Retrieved")
    return token_data['access_token']
```

### JavaScript

```js
async function retrieveAccessToken() {
  const data = qs.stringify({
    grant_type: "client_credentials",
    client_id: process.env.FIREFLY_SERVICES_CLIENT_ID,
    client_secret: process.env.FIREFLY_SERVICES_CLIENT_SECRET,
    scope: "openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis",
  });

  const config = {
    method: "post",
    url: "https://ims-na1.adobelogin.com/ims/token/v3",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log("Access Token Retrieved");
    return response.data.access_token;
  } catch (error) {
    console.error("Error retrieving access token:", error.response.data);
  }
}
```

A successful token response has this shape:

```json
{ "access_token": "yourAccessTokenAsdf123", "token_type": "bearer", "expires_in": 86399 }
```

Export the access token for the script you run next:

```bash

```

## Generate an Image

Next, send a request to the [Firefly Generate Images API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md):

### cURL

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $FIREFLY_SERVICES_CLIENT_ID" \
--header "Authorization: Bearer $FIREFLY_SERVICES_ACCESS_TOKEN" \
--data '{
    "prompt": "a realistic illustration of a cat coding"
}'
```

### Python

```python
def generate_image(access_token):
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': os.environ['FIREFLY_SERVICES_CLIENT_ID'],
        'Authorization': f'Bearer {access_token}'
    }

    data = {
        'prompt': 'a realistic illustration of a cat coding',  # Replace with your actual prompt
    }

    response = requests.post(
        'https://firefly-api.adobe.io/v3/images/generate-async',
        headers=headers,
        json=data
    )
    response.raise_for_status()
    job_response = response.json()
    print("Generate Image Response:", job_response)
    return job_response
```

### JavaScript

```js
async function generateImage(accessToken) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-key": process.env.FIREFLY_SERVICES_CLIENT_ID,
    Authorization: `Bearer ${accessToken}`,
  };

  const data = {
    prompt: "a realistic illustration of a cat coding", // Replace with your actual prompt
  };

  const config = {
    method: "post",
    url: "https://firefly-api.adobe.io/v3/images/generate-async",
    headers: headers,
    data: data,
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Error during generateImage:", error);
  }
}
```

The API returns a payload in this form:

```json
{
  "size": {
    "width": 2048,
    "height": 2048
  },
  "outputs": [
    {
      "seed": 1779323515,
      "image": {
        "url": "https://pre-signed-firefly-prod.s3-accelerate.amazonaws.com/images/asdf-12345?lots=of&query=params..."
      }
    }
  ],
  "contentClass": "art",
  "altText": "A futuristic city glowing at night with neon lights reflecting off wet streets and flying cars soaring between towering skyscrapers."
}
```

## View the Generated Image

To view the Firefly image, open the returned URL in a browser 🎉

## Full Example

Before running this sample, use [prerequisites](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/index.md#prerequisites) for environment setup. Treat the code as instructional only: production use still needs stronger error handling, logging, security controls, and other hardening for live scale.

### Python

```python

def main():
    access_token = retrieve_access_token()
    generate_image(access_token)

def retrieve_access_token():
    client_id = os.environ['FIREFLY_SERVICES_CLIENT_ID']
    client_secret = os.environ['FIREFLY_SERVICES_CLIENT_SECRET']

    token_url = 'https://ims-na1.adobelogin.com/ims/token/v3'
    payload = {
        'grant_type': 'client_credentials',
        'client_id': client_id,
        'client_secret': client_secret,
        'scope': 'openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis'
    }

    response = requests.post(token_url, data=payload)
    response.raise_for_status()
    token_data = response.json()
    print("Access Token Retrieved")
    return token_data['access_token']

def generate_image(access_token):
    client_id = os.environ['FIREFLY_SERVICES_CLIENT_ID']

    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': client_id,
        'Authorization': f'Bearer {access_token}'
    }

    data = {
        'prompt': 'a realistic illustration of a cat coding',  # Replace with your actual prompt
    }

    response = requests.post(
        'https://firefly-api.adobe.io/v3/images/generate-async',
        headers=headers,
        json=data
    )
    response.raise_for_status()
    job_response = response.json()
    print("Generate Image Response:", job_response)

## Access the generated image URL

image_url = job_response['outputs'][0]['image']['url']
    print(f"You can view the generated image at: {image_url}")

if __name__ == '__main__':
    main()
```

### JavaScript

```js
const axios = require("axios");
const qs = require("qs");

(async () => {
  const accessToken = await retrieveAccessToken();
  await generateImage(accessToken);
})();

async function retrieveAccessToken() {
  const data = qs.stringify({
    grant_type: "client_credentials",
    client_id: process.env.FIREFLY_SERVICES_CLIENT_ID,
    client_secret: process.env.FIREFLY_SERVICES_CLIENT_SECRET,
    scope: "openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis",
  });

  const config = {
    method: "post",
    url: "https://ims-na1.adobelogin.com/ims/token/v3",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log("Access Token Retrieved");
    return response.data.access_token;
  } catch (error) {
    console.error("Error retrieving access token:", error.response.data);
  }
}

async function generateImage(accessToken) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-key": process.env.FIREFLY_SERVICES_CLIENT_ID,
    Authorization: `Bearer ${accessToken}`,
  };

  const data = {
    prompt: "a realistic illustration of a cat coding", // Replace with your actual prompt
  };

  const config = {
    method: "post",
    url: "https://firefly-api.adobe.io/v3/images/generate-async",
    headers: headers,
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log("Generate Image Response:", response.data);

    // Access the generated image URL
    const imageUrl = response.data.outputs[0].image.url;
    console.log(`You can view the generated image at: ${imageUrl}`);
  } catch (error) {
    console.error("Error during generateImage:", error.response.data);
  }
}
```

## Access the generated image URL — Deepen Your Understanding

For more detail on the available customization options, open the [Firefly Generate Image API tutorial](api-how-tos-2.md) 🚀
