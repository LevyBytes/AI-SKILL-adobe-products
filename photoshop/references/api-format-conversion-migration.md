# Format Conversion Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this migration note to update format-conversion and export workflows: the old v1 `/pie/psdService/renditionCreate` route becomes the v2 `/create-composite` route.

## Overview

In v1, `/renditionCreate` mainly handled **PSD conversion and export to other formats**, including JPEG, PNG, and Cloud PSD. Its role was rendering/export; document edits and layer operations were outside that scope.

**V1 Endpoint:**

```text
POST /pie/psdService/renditionCreate
```

**V2 Endpoint:**

```text
POST /v2/create-composite
```

## Key differences

- **Request Structure:** Input and output configuration now use a different layout
- **Media Types:** Media type declarations are more explicit
- **Storage Options:** Storage support now covers external, hosted, embedded, and Creative Cloud choices
- **Multiple Outputs:** A single request can create multiple formats, with a limit of 25 outputs
- **Conversion Behavior:** Details are covered in [Format Support: Color Mode and Bit Depth](api-output-types-migration.md)

## Basic format conversion

### PSD to JPEG

Export a PSD into JPEG format.

**Key Changes:**

- `inputs[0].href` -> `image.source.url`
- `outputs[].href` -> `outputs[].destination.url`
- `storage` -> `storageType`
- `type` -> `mediaType`
- `quality` (1-7 numeric scale) -> `quality` (string: "very_poor", "poor", "low", "medium", "high", "maximum", "photoshop_max")

**V1 Approach:**

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/renditionCreate \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/jpeg",
      "quality": 7,
      "width": 1920
    }
  ]
}'
```

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 1920
    }
  ]
}'
```

### PSD to PNG

Export a PSD as PNG when transparency must be retained.

**PNG-Specific Options:**

- `compression`: chooses the compression setting for PNG output ("none", "very_low", "low", "medium_low", "medium", "medium_high", "default", "high", "very_high", "maximum")
- `shouldTrimToCanvas`: crops away transparent edge pixels from the image

**V1 Approach:**

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/renditionCreate \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/png",
      "width": 2048
    }
  ]
}'
```

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/png",
      "compression": "medium",
      "width": 2048
    }
  ]
}'
```

### PSD to Cloud PSD

Write a PSD out as Cloud PSD for storage optimized around cloud access.

**Cloud PSD Benefits:**

- Optimized for cloud storage and streaming
- Layer information can be reached more quickly
- Web-based editing workflows use it efficiently
- Creative Cloud applications can work with it
- Creative Cloud storage gives the smoothest integration path

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "creativeCloudPath": "my-folder/output.psdc"
      },
      "mediaType": "document/vnd.adobe.cpsd+dcxucf"
    }
  ]
}'
```

For Cloud PSD output, `document/vnd.adobe.cpsd+dcx` and `document/vnd.adobe.cpsd+dcxucf` both work with ACP (Adobe Cloud Platform) storage and external storages.

## Resizing during conversion

During conversion, images can be resized to create thumbnails or scaled derivatives.

**Sizing Options:**

- Specify `width` only - the API calculates `height` to preserve aspect ratio
- Specify `height` only - the API calculates `width` to preserve aspect ratio
- Specify both `width` and `height` - the image is constrained inside those bounds while retaining aspect ratio
- Size range: 1 to 32000 pixels

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "high",
      "width": 800,
      "height": 600
    }
  ]
}'
```

## Multiple format outputs

Produce several output formats from one PSD during a single API call.

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<PSD_OUTPUT_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    },
    {
      "destination": {
        "url": "<JPEG_FULL_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum"
    },
    {
      "destination": {
        "url": "<JPEG_THUMB_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "high",
      "width": 400
    },
    {
      "destination": {
        "url": "<PNG_URL>"
      },
      "mediaType": "image/png",
      "compression": "small",
      "shouldTrimToCanvas": true
    }
  ]
}'
```

A request can include no more than 25 outputs.

## Quality and compression options

### JPEG quality settings

V2 selects JPEG quality with names instead of numbers:

| V2 Quality | V1 Quality (1-7) | Description |
| --- | --- | --- |
| `very_poor` | N/A | V2-only output with the smallest size |
| `poor` | N/A | V2-only output with very compact size |
| `low` | 1-2 | Thumbnails and compact previews |
| `medium` | 3-4 | Typical web image output |
| `high` | 5-6 | Higher-quality web output |
| `maximum` | 7 | Print and production use |
| `photoshop_max` | N/A | Highest-quality professional print output |

The `quality` parameter can be omitted. When it is absent, defaults depend on the operation:

- **Create Composite** (`/v2/create-composite`): `photoshop_max` is the default quality
- **Generate Manifest** (`/v2/generate-manifest`): layer thumbnails default to `medium`

**Example:**

```json
{
  "mediaType": "image/jpeg",
  "quality": "high"
}
```

### PNG compression settings

V2 exposes ten compression levels aligned with zlib/libpng behavior:

```json
{
  "mediaType": "image/png",
  "compression": "medium"
}
```

**Compression Options:**

- `none` - turns compression off (level 0)
- `very_low` - applies only a small amount (level 1)
- `low` - uses a light compression setting (level 2)
- `medium_low` - applies a lower-middle setting (level 3)
- `medium` - uses the middle setting (level 4)
- `medium_high` - applies an upper-middle setting (level 5)
- `default` - uses the library-standard default (level 6)
- `high` - applies strong compression (level 7)
- `very_high` - uses a stronger setting (level 8)
- `maximum` - applies the strongest compression (level 9)

The `compression` parameter is optional. Without it, both Create Composite and Generate Manifest use `default` (level 6).

**V1 to V2 Mapping:**

| V1 Compression | V2 Recommended | V2 Alternatives | Notes |
| --- | --- | --- | --- |
| `small` | `maximum` | `very_high`, `high` | Smallest output, slower processing |
| `medium` | `medium` | `default`, `medium_high`, `medium_low` | Balanced performance |
| `large` | `low` | `very_low`, `none` | Faster output, larger files |

## Storage options

V2 supports several output storage destinations:

### External storage (pre-signed URLs)

```json
{
  "destination": {
    "url": "<SIGNED_POST_URL>"
  }
}
```

For AWS S3 presigned URLs and ordinary HTTPS URLs, omit `storageType`. Reserve `storageType` for Azure Blob Storage (`"storageType": "azure"`) and Dropbox (`"storageType": "dropbox"`).

### Hosted storage (temporary Adobe hosting)

```json
{
  "destination": {
    "validityPeriod": 3600
  }
}
```

- Adobe hosts the files for the requested duration, measured in seconds
- Temporary processing workflows can use this mode
- Your own storage does not need to be managed

### Creative Cloud storage with path

```json
{
  "destination": {
    "creativeCloudPath": "my-folder/output.jpg"
  }
}
```

- Write directly into the user's Creative Cloud Files
- User authentication is required
- Creative Cloud workflows integrate smoothly with this destination

### Creative Cloud storage with project ID

```json
{
  "destination": {
    "creativeCloudPath": "project-assets/output.jpg",
    "creativeCloudProjectId": "urn:aaid:sc:US:a21c8629-413f-55d9-b5b0-....."
  }
}
```

Use these fields to point at a project asset:

- `creativeCloudProjectId` (a URN starting with `urn:aaid:`) points to the project root.
- `creativeCloudPath` gives the asset location under that project root.
- This is useful for Creative Cloud assets scoped to a project.

### Embedded (inline response)

Embedded storage is recommended only for small results such as JSON metadata, not image files.

```json
{
  "destination": {
    "embedded": "base64"
  }
}
```

### Cloud PSD storage support

Cloud PSD accepts these media types for ACP Storage and External Storage, including S3 and Azure:

- `document/vnd.adobe.cpsd+dcxucf`
- `document/vnd.adobe.cpsd+dcx`

## Converting with source from different storage

### From Creative Cloud

**Creative Cloud Path:**

```json
{
  "image": {
    "source": {
      "creativeCloudPath": "my-folder/design.psd"
    }
  }
}
```

- When referencing a file in the user's personal storage, `creativeCloudPath` is enough

**Creative Cloud Project ID:**

```json
{
  "image": {
    "source": {
      "creativeCloudPath": "my-folder/design.psd",
      "creativeCloudProjectId": "urn:aaid:sc:US:a21c8629-413f-55d9-b5b0-....."
    }
  }
}
```

Use these fields to identify a project asset:

- `creativeCloudProjectId` (a URN starting with `urn:aaid:`) points to the project root.
- `creativeCloudPath` gives the asset location under that project root.

### From Adobe Assets

```json
{
  "image": {
    "source": {
      "url": "https://assets.adobe.com/...",
      "storageType": "adobe"
    }
  }
}
```

## Complete conversion example

Here is a full example that converts one PSD into several formats while using different output options:

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<CLOUD_PSD_URL>"
      },
      "mediaType": "document/vnd.adobe.cpsd+dcxucf"
    },
    {
      "destination": {
        "url": "<JPEG_FULL_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum"
    },
    {
      "destination": {
        "url": "<JPEG_LARGE_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "high",
      "width": 2048
    },
    {
      "destination": {
        "url": "<JPEG_MEDIUM_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "medium",
      "width": 1024
    },
    {
      "destination": {
        "url": "<JPEG_THUMB_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "medium",
      "width": 400
    },
    {
      "destination": {
        "url": "<PNG_URL>"
      },
      "mediaType": "image/png",
      "compression": "medium",
      "shouldTrimToCanvas": true
    }
  ]
}'
```

## Common migration issues

### Quality parameter not accepted

**Problem:** v1 numeric `quality` values are submitted

```json
{
  "quality": 7
}
```

**Solution:** Send a descriptive quality string

```json
{
  "quality": "maximum"
}
```

### Storage parameter not recognized

**Problem:** A v1 `storage` parameter is included

```json
{
  "storage": "external"
}
```

**Solution:** For standard URLs, remove the storage parameter

```json
{
  "destination": {
    "url": "<URL>"
    // storageType NOT required for S3/HTTPS URLs
    // Only use storageType for Azure ("azure") or Dropbox ("dropbox")
  }
}
```

### Type vs MediaType

**Problem:** The v1 `type` parameter is used

```json
{
  "type": "image/jpeg"
}
```

**Solution:** Use `mediaType`

```json
{
  "mediaType": "image/jpeg"
}
```

## Migrating from PSDC conversion engine (Sensei service)

Enterprise customers cannot use the following service.

**Important:** The sensei `/v2/predict` endpoint still operates. Retirement applies only to the PSDC Conversion Engine (ID: `Feature:sensei-demo:Service-66484d87ede04702af063315a7de4094`). Engines other than that one continue unchanged on `/v2/predict`.

**Format Naming:** PSDC, Cloud PSD, and CPSD name the same format. The v2 documentation consistently uses "Cloud PSD".

**Format Support:** In the v2 API, Cloud PSD accepts `document/vnd.adobe.cpsd+dcx` and `document/vnd.adobe.cpsd+dcxucf` as media types. ACP Storage (Adobe Cloud Platform) and External Storage both accept those values. Either storage option accepts either format.

### Overview

The PSDC Conversion Engine handled PSD and Cloud PSD (PSDC/CPSD) format interchange. That engine is being retired, and V2 now provides the same capability through `/v2/create-composite`.

**PSDC Engine:**

```shell
POST /services/v2/predict
Engine ID: Feature:sensei-demo:Service-66484d87ede04702af063315a7de4094
```

**V2 API:**

```shell
POST /v2/create-composite
```

### Cloud PSD to PSD conversion (using URN)

Convert a Cloud PSD file to PSD format using file URN.

**Key Changes:**

- `repo:id` -> `creativeCloudFileId` (input via URN)
- `repo:path` -> `creativeCloudPath` (output to file path)
- `sensei:repoType: "RAPI"` -> Not needed (inferred from field used)
- `dc:format` -> `mediaType` (always `image/vnd.adobe.photoshop`)
- JSON becomes simple; multipart/form-data is no longer needed

**PSDC Engine:**

```shell
curl -X POST \
  https://sensei-ue1.adobe.io/services/v2/predict \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: multipart/form-data" \
  -F 'contentAnalyzerRequests={
  "sensei:invocation_mode": "asynchronous",
  "sensei:invocation_batch": false,
  "sensei:in_response": false,
  "sensei:engines": [{
    "sensei:execution_info": {
      "sensei:engine": "Feature:sensei-demo:Service-66484d87ede04702af063315a7de4094"
    },
    "sensei:inputs": {
      "image_in": {
        "repo:id": "urn:aaid:sc:US:edc9dc37-fb7a-4bcd-9e22-717f1ef7fa44",
        "dc:format": "document/vnd.adobe.cpsd+dcx",
        "sensei:repoType": "RAPI"
      }
    },
    "sensei:params": {
      "format": "image/vnd.adobe.photoshop"
    },
    "sensei:outputs": {
      "image_out": {
        "repo:path": "/temp/output.psd",
        "dc:format": "image/vnd.adobe.photoshop",
        "sensei:repoType": "RAPI"
      }
    }
  }]
}'
```

**V2 API:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "creativeCloudFileId": "urn:aaid:sc:US:edc9dc37-fb7a-4bcd-9e22-717f1ef7fa44"
    }
  },
  "outputs": [{
    "destination": {
      "creativeCloudPath": "temp/output.psd"
    },
    "mediaType": "image/vnd.adobe.photoshop"
  }]
}'
```

### PSD to Cloud PSD conversion (using file path)

Convert a PSD file to Cloud PSD format using path.

**PSDC Engine:**

```shell
curl -X POST \
  https://sensei-ue1.adobe.io/services/v2/predict \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: multipart/form-data" \
  -F 'contentAnalyzerRequests={
  "sensei:engines": [{
    "sensei:execution_info": {
      "sensei:engine": "Feature:sensei-demo:Service-66484d87ede04702af063315a7de4094"
    },
    "sensei:inputs": {
      "image_in": {
        "repo:path": "/files/input.psd",
        "dc:format": "image/vnd.adobe.photoshop",
        "sensei:repoType": "CCRepo"
      }
    },
    "sensei:params": {
      "format": "document/vnd.adobe.cpsd+dcx"
    },
    "sensei:outputs": {
      "image_out": {
        "repo:path": "/files/output.psdc",
        "dc:format": "document/vnd.adobe.cpsd+dcxucf",
        "sensei:repoType": "CCRepo"
      }
    }
  }]
}'
```

**V2 API:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "creativeCloudPath": "files/input.psd"
    }
  },
  "outputs": [{
    "destination": {
      "creativeCloudPath": "files/output.psdc"
    },
    "mediaType": "document/vnd.adobe.cpsd+dcxucf"
  }]
}'
```

### PSD to Cloud PSD conversion (using project ID)

Convert a PSD file to Cloud PSD format using project id and path.

**Key Changes:**

- `repo:id` / `repo:path` (input) -> `creativeCloudPath` + `creativeCloudProjectId` (project-scoped input)
- `repo:id` / `repo:path` (output) -> `creativeCloudPath` + `creativeCloudProjectId` (project-scoped output)
- `sensei:repoType: "RAPI"` -> Not needed (inferred from fields used)
- `dc:format` -> `mediaType` (always `document/vnd.adobe.cpsd+dcxucf` or `document/vnd.adobe.cpsd+dcx`)
- JSON becomes simple; multipart/form-data is no longer needed

**V2 API:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "creativeCloudPath": "project-files/input.psd",
      "creativeCloudProjectId": "urn:aaid:sc:US:a21c8629-413f-55d9-b5b0-....."
    }
  },
  "outputs": [{
    "destination": {
      "creativeCloudPath": "project-files/output.psdc",
      "creativeCloudProjectId": "urn:aaid:sc:US:a21c8629-413f-55d9-b5b0-....."
    },
    "mediaType": "document/vnd.adobe.cpsd+dcx"
  }]
}'
```

For project-specific assets, send `creativeCloudProjectId` alongside `creativeCloudPath` so the request resolves context and permissions correctly.

- `creativeCloudProjectId` must use a valid project-root URN that starts with `urn:aaid:sc:`.
- `creativeCloudPath` gives the asset location under that project root.

### Parameter mapping

| PSDC Engine | V2 API | Notes |
| --- | --- | --- |
| `sensei:engine` | `/v2/create-composite` | Endpoint changes |
| `repo:id` (URN) | `creativeCloudFileId` | Asset identifier (URN ID) on ACP Storage, supplied as input |
| `repo:path` (input) | `creativeCloudPath` | Asset path in personal storage, or project-root-relative path when creativeCloudProjectId is used for input |
| `repo:path` (output) | `creativeCloudPath` | Asset path in personal storage, or project-root-relative path when creativeCloudProjectId is used for output |
| N/A | `creativeCloudProjectId` (input) | Project root ID (URN), optional for project-scoped input assets |
| N/A | `creativeCloudProjectId` (output) | Project root ID (URN), optional for project-scoped output assets |
| `sensei:repoType` | Not needed | Field type determines it |
| `dc:format` (input) | Auto-detected | V2 does not require this |
| `dcxucf:format` (output) | `mediaType` | Use `document/vnd.adobe.cpsd+dcxucf` or `document/vnd.adobe.cpsd+dcx` |
| `sensei:params.format` | `mediaType` in output | Simplified |
| `document/vnd.adobe.cpsd+dcx` | `document/vnd.adobe.cpsd+dcxucf` or `document/vnd.adobe.cpsd+dcx` | Cloud PSD format |
| Status: separate endpoint | `/v2/status/{jobId}` | Status is unified |

**Benefits:**

- JSON structure is simpler
- multipart/form-data complexity is removed
- Status is checked through one endpoint
- Authentication matches the other V2 endpoints

## When to use format conversion vs other endpoints

Choose **Format Conversion** (`/create-composite` without edits) for:

- Converting PSD to other formats, such as JPEG or PNG
- Producing several output sizes
- Creating thumbnails
- Converting to Cloud PSD format
- Rendering without modifications

Choose **[Document Operations](api-document-operations-migration.md)** for:

- Cropping, resizing, or trimming documents
- Changing canvas size
- Applying document-level transformations

Choose **[Composite Operations](api-v1-to-v2.md)** for:

- Adding, removing, or changing layers
- Applying layer effects
- Building complex multi-layer compositions

## Next steps

- Read the [storage solutions guide](api-getting-started.md) for additional storage choices
- Use the [status migration guide](api-status-migration.md) when updating job-status checks
- Try conversion workflows against development endpoints
