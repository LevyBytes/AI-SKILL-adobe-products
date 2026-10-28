# Generate a seed image

Keep the original seed while adjusting other image generation options, including style presets or size.
Create related cityscape images with this seed:

`1842533538`

|  |  |
| --- | --- |
| ![a picture of a futuristic city 1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/1027f559cdb1509a61b34e2f2da9618ec431f2cb/src/pages/guides/images/seedless-city-1.jpeg) Original Image | ![a variation of futuristic city 1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/1027f559cdb1509a61b34e2f2da9618ec431f2cb/src/pages/guides/images/seeded-city-1.jpeg) Same Seed Image with Preset Variation |

1. Generate a cityscape variation with the command below. It applies the "landscape photography" and "science fiction" [style presets](../style-presets.md); add other options while experimenting.

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
--header "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
--data '{
    "prompt": "a futuristic future cityscape with flying cars",
    "seeds": [
        1842533538
    ],
    "style": {
        "presets": [
            "landscape_photography", "science_fiction"
        ]
    }
}'
```

Firefly returns async job metadata quickly:

```json
{
  "jobId": "<`YOUR_JOB_ID`>",
  "statusUrl": "https://firefly-epo854211.adobe.io/v3/status/urn:ff:jobs:...",
  "cancelUrl": "https://firefly-epo854211.adobe.io/v3/cancel/urn:ff:jobs:..."
}
```

2. Fetch the completed output by querying with the `jobId`:

```bash
curl -X GET "https://firefly-api.adobe.io/v3/status/<`YOUR_JOB_ID`>" \
    -H "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
    -H "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
    -H "Content-Type: application/json"
```

Visible differences remain, but shared details persist. The seed drives those common traits.
