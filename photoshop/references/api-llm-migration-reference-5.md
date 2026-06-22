# Llm Migration Reference (part 5)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Call 3

curl -X POST https://image.adobe.io/lrService/edit \
 -d '{
"inputs": {...},
"options": {
"Exposure": 1.2,
"Contrast": 10,
"Saturation": 15
},
"outputs": [...]
}'

````

**V2 Code (single call):**
```shell
curl -X POST https://photoshop-api.adobe.io/v2/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<`INPUT_URL`>"
    }
  },
  "edits": {
    "autoTone": true,
    "autoStraighten": {
      "enabled": true,
      "constrainCrop": true
    },
    "light": {
      "exposure": 1.2,
      "contrast": 10
    },
    "color": {
      "saturation": 15
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<`OUTPUT_URL`>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
````

**Key Transformations:**

1. Three calls → One call
2. Operations combined in `edits` object
3. PascalCase params → camelCase within categories
4. `Exposure` → `light.exposure`
5. `Saturation` → `color.saturation`

### Example 3: Format conversion (PSD to JPEG)

**V1 Code:**

```shell
curl -X POST https://image.adobe.io/pie/psdService/renditionCreate \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "https://my-storage.com/document.psd",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "https://my-storage.com/output.jpg",
      "storage": "external",
      "type": "image/jpeg",
      "quality": 7,
      "width": 1920
    }
  ]
}'
```

**V2 Code:**

```shell
curl -X POST https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "https://my-storage.com/document.psd"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "https://my-storage.com/output.jpg"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 1920
    }
  ]
}'
```

**Key Transformations:**

1. Endpoint: `/pie/psdService/renditionCreate` → `/v2/create-composite`
2. Input: `inputs[0].href` → `image.source.url`
3. Output: `outputs[0].href` → `outputs[0].destination.url`
4. Quality: Numeric `7` → String `"maximum"`
5. Storage: Removed (not needed)
6. No `edits` block (just format conversion)

### Example 4: Layer addition

**V1 Code:**

```shell
curl -X POST https://image.adobe.io/pie/psdService/documentOperations \
  -d '{
  "inputs": [{
    "href": "<`DOCUMENT_URL`>",
    "storage": "external"
  }],
  "options": {
    "layers": [
      {
        "type": "layer",
        "name": "New Image",
        "add": {
          "insertTop": true
        },
        "input": {
          "href": "<`IMAGE_URL`>",
          "storage": "external"
        }
      }
    ]
  },
  "outputs": [{
    "href": "<`OUTPUT_URL`>",
    "storage": "external",
    "type": "image/vnd.adobe.photoshop"
  }]
}'
```

**V2 Code:**

```shell
curl -X POST https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<`DOCUMENT_URL`>"
    }
  },
  "edits": {
    "layers": [
      {
        "type": "layer",
        "name": "New Image",
        "image": {
          "source": {
            "url": "<`IMAGE_URL`>"
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<`OUTPUT_URL`>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

**Key Transformations:**

1. Endpoint: `/documentOperations` → `/create-composite`
2. Structure: `options.layers` → `edits.layers`
3. Add operation: `add: {insertTop: true}` → `operation: {type: "add", placement: {type: "top"}}`
4. Layer source: `input.href` → `image.source.url`

### Example 4b: Layer edit operation

**V1 Code (with edit: \{\}):**

```shell
curl -X POST https://image.adobe.io/pie/psdService/documentOperations \
  -d '{
  "inputs": [{
    "href": "<`DOCUMENT_URL`>",
    "storage": "external"
  }],
  "options": {
    "layers": [
      {
        "id": 123,
        "type": "layer",
        "edit": {},
        "text": {
          "content": "Updated text"
        }
      }
    ]
  },
  "outputs": [{
    "href": "<`OUTPUT_URL`>",
    "storage": "external",
    "type": "image/vnd.adobe.photoshop"
  }]
}'
```

**V2 Code (explicit edit operation):**

```shell
curl -X POST https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<`DOCUMENT_URL`>"
    }
  },
  "edits": {
    "layers": [
      {
        "id": 123,
        "type": "text_layer",
        "text": {
          "content": "Updated text"
        },
        "operation": {
          "type": "edit"
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<`OUTPUT_URL`>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

**Key Transformations:**

1. Layer type: `type: "layer"` → `type: "text_layer"` (specify actual layer type)
2. Operation: V1 `"edit": {}` → V2 `"operation": {"type": "edit"}`
3. Edit operation is now explicit and required (not implicit)
4. When V1 layer has `"edit": {}` with no add/delete, use edit operation in V2

### Example 5: Action execution

**V1 Code:**

```shell
curl -X POST https://image.adobe.io/pie/psdService/photoshopActions \
  -d '{
  "inputs": [{
    "href": "<`IMAGE_URL`>",
    "storage": "external"
  }],
  "options": {
    "actions": [
      {
        "href": "<`ACTION_FILE_URL`>",
        "storage": "external"
      }
    ]
  },
  "outputs": [{
    "href": "<`OUTPUT_URL`>",
    "storage": "external",
    "type": "image/vnd.adobe.photoshop"
  }]
}'
```

**V2 Code:**

```shell
curl -X POST https://photoshop-api.adobe.io/v2/execute-actions \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<`IMAGE_URL`>"
    }
  },
  "options": {
    "actions": [
      {
        "source": {
          "url": "<`ACTION_FILE_URL`>"
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<`OUTPUT_URL`>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

**Key Transformations:**

1. Endpoint: `/photoshopActions` → `/execute-actions`
2. Input: `inputs[0].href` → `image.source.url`
3. Action: `actions[0].href` → `actions[0].source.url`
4. Storage: Removed from action and input

### Example 6: Status checking

**V1 Code:**

```shell

## Lightroom job

curl -X GET https://image.adobe.io/lrService/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"

## Photoshop job

curl -X GET https://image.adobe.io/pie/psdService/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

## All jobs use same endpoint

**V2 Code:**

```shell
curl -X GET https://photoshop-api.adobe.io/v2/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

**Key Transformations:**

1. Service-specific endpoints → Unified endpoint
2. Same jobId works for all operation types

### Example 7: Artboard create

**V1 Code:**

```shell
curl -X POST https://image.adobe.io/pie/psdService/artboardCreate \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {"href": "<`IMAGE_1_URL`>", "storage": "external"},
    {"href": "<`IMAGE_2_URL`>", "storage": "external"}
  ],
  "outputs": [
    {
      "href": "<`SIGNED_POST_URL`>",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

**V2 Code:**

```shell
curl -X POST https://photoshop-api.adobe.io/v2/create-artboard \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "images": [
    {"source": {"url": "<`IMAGE_1_URL`>"}},
    {"source": {"url": "<`IMAGE_2_URL`>"}}
  ],
  "outputs": [
    {
      "destination": {"url": "<`SIGNED_POST_URL`>"},
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

**Key Transformations:**

1. Endpoint: `/pie/psdService/artboardCreate` → `/v2/create-artboard`
2. Input: `inputs[]` → `images[]`; `href` + `storage` → `source.url`
3. Output: `outputs[].href` → `outputs[].destination.url`; `type` → `mediaType`
4. Optional: Add `artboardSpacing` (integer, pixels) for horizontal spacing between artboards (default 50)
5. Storage: Omit for standard URLs; use `destination.storageType` only for Azure/Dropbox

## All jobs use same endpoint — V2 status response output patterns

### Overview

V2 status payloads differ substantially from V1, especially in the representation of outputs. Migration code needs to account for the destination chosen in the original request because that choice controls the shape of `result.outputs[]`.

### Base response structure

Every V2 status payload follows this baseline shape, no matter which destination type was requested:

```json
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "createdTime": "2025-11-11T10:00:00.000Z",
  "modifiedTime": "2025-11-11T10:05:30.000Z",
  "status": "succeeded",
  "result": {
    "outputs": [...]  // Structure varies by destination type
  }
}
```

### Key structural changes from V1

| V1 Field              | V2 Field             | Notes                                        |
| --------------------- | -------------------- | -------------------------------------------- |
| `created`             | `createdTime`        | ISO-8601 datetime format                     |
| `modified`            | `modifiedTime`       | ISO-8601 datetime format                     |
| `_links.self.href`    | _removed_            | No hypermedia links in V2                    |
| `outputs` (top-level) | `result.outputs`     | Nested inside result object                  |
| `outputs[].status`    | `status` (job-level) | Single status for entire job, not per-output |
| `outputs[]._links`    | _removed_            | No per-output hypermedia links               |
| `outputs[].input`     | _removed_            | No input echo in outputs                     |

**Status Values:** `"pending"`, `"running"`, `"succeeded"`, `"failed"`

### Destination type patterns

The destination type selected in the request determines how `result.outputs[]` is shaped. The next sections describe the 5 destination categories and the corresponding status payload forms.

### 1. External URL destination (presigned URLs)

**Typical destinations:** Presigned URLs for Azure Blob, AWS S3, Google Drive, Dropbox, and Frame.io

**Request:**

```json
{
  "outputs": [
    {
      "destination": {
        "url": "https://s3.amazonaws.com/bucket/output.jpg?X-Amz-Signature=REDACTED-EXAMPLE"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum"
    }
  ]
}
```

**Status Response (succeeded):**

```json
{
  "jobId": "...",
  "createdTime": "2025-11-11T10:00:00.000Z",
  "modifiedTime": "2025-11-11T10:05:30.000Z",
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": {
          "url": "https://s3.amazonaws.com/bucket/output.jpg?X-Amz-Signature=REDACTED-EXAMPLE"
        },
        "mediaType": "image/jpeg",
        "quality": "maximum"
      }
    ]
  }
}
```

**Pattern:** The destination URL is echoed exactly in the output, and the file has been written to that presigned URL.

**V1 vs V2 Comparison:**

```javascript
// V1 Status Response
{
  outputs: [{
    _links: {
      self: { href: "https://s3.amazonaws.com/bucket/output.jpg?..." }
    },
    input: "https://input-url...",
    status: "succeeded"
  }]
}

// V2 Status Response
{
  result: {
    outputs: [{
      destination: { url: "https://s3.amazonaws.com/bucket/output.jpg?..." },
      mediaType: "image/jpeg",
      quality: "maximum"
    }]
  },
  status: "succeeded"  // Job-level, not per-output
}
```

**Key Migration Points:**

- V1: `outputs[]._links.self.href` → V2: `result.outputs[].destination.url`
- V1: Per-output status → V2: Single job-level status
- V1: Includes `input` field → V2: No input echo
- V2: Preserves all output parameters (quality, width, height, etc.)

### 2. Embedded destination (inline content)

**Use Case:** XMP metadata, JSON manifests, small text outputs returned inline

**Request (embedded: "string"):**

```json
{
  "outputs": [
    {
      "destination": {
        "embedded": "string"
      },
      "mediaType": "application/rdf+xml"
    }
  ]
}
```

**Status Response:**

```json
{
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "string",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\">...</x:xmpmeta>"
        },
        "mediaType": "application/rdf+xml"
      }
    ]
  }
}
```

**Request (embedded: "json"):**

```json
{
  "outputs": [
    {
      "destination": {
        "embedded": "json"
      },
      "mediaType": "application/json"
    }
  ]
}
```

**Status Response:**

```json
{
  "result": {
    "outputs": [{
      "destination": {
        "embedded": "json",
        "content": {
          "document": {
            "width": 1920,
            "height": 1080,
            "layers": [...]
          }
        }
      },
      "mediaType": "application/json"
    }]
  }
}
```

**Request (embedded: "base64"):**

```json
{
  "outputs": [
    {
      "destination": {
        "embedded": "base64"
      },
      "mediaType": "image/png"
    }
  ]
}
```

**Status Response:**

```json
{
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "base64",
          "content": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        },
        "mediaType": "image/png"
      }
    ]
  }
}
```

**Pattern:** The `destination` object carries a `content` field with the returned inline data.

**Embedded Types:**

- `"string"`: returns plain text such as XMP, XML, or text-file content as a string
- `"json"`: returns manifest or other structured JSON data as a parsed JSON object
- `"base64"`: returns small binary files or images as base64 text

**V1 vs V2:**

```javascript
// V1: Limited embedded support, varied formats
{
  outputs: [
    {
      _links: { self: { href: "data:..." } },
      status: "succeeded",
    },
  ];
}

// V2: Standardized embedded format with content field
{
  result: {
    outputs: [
      {
        destination: {
          embedded: "string",
          content: "<?xml version=...",
        },
        mediaType: "application/rdf+xml",
      },
    ];
  }
}
```

**Important Restrictions:**

- Use embedded only for text, metadata, and small file outputs
- For large images, use URL or Hosted instead
- XMP extraction and JSON manifests are the recommended embedded cases

### 3. Hosted destination (Adobe temporary storage)

**Use Case:** V2 can provide temporary storage so the caller does not have to create presigned URLs.

**Request:**

```json
{
  "outputs": [
    {
      "destination": {
        "validityPeriod": 3600 // seconds: 60-86400 (1 min - 24 hours)
      },
      "mediaType": "image/jpeg",
      "quality": "high"
    }
  ]
}
```

**Status Response:**

```json
{
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": {
          "url": "https://adobe-hosted-storage.example.com/path/to/output.jpg?expires=1699700000&signature=abc123..."
        },
        "mediaType": "image/jpeg",
        "quality": "high"
      }
    ]
  }
}
```

**Pattern:** Adobe returns a temporary presigned URL in `destination.url`; it remains valid only for the requested period, up to 24 hours.

**Key Characteristics:**

- Adobe holds the output in temporary storage
- The URL carries both an expiration timestamp and a signature
- Files are removed automatically once the expiration time passes
- Upper validity limit: 86400 seconds (24 hours)
- Lower validity limit: 60 seconds (1 minute)

**CRITICAL:** Fetch the file while the URL is still valid; after expiration, it cannot be recovered.

**V1 Equivalent:** V1 has no matching hosted-storage behavior; this capability is introduced in V2.

**Use Cases:**

- Short-lived processing flows
- Fast prototypes
- Jobs that do not need durable storage
- Workflows that should avoid generating presigned URLs

### 4. Creative Cloud destination

**Use Case:** Write outputs into ACP (Adobe Content Platform), the storage layer behind Creative Cloud.

**Request:**

```json
{
  "outputs": [
    {
      "destination": {
        "creativeCloudPath": "my-folder/output.jpg"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum"
    }
  ]
}
```

**Status Response:**

```json
{
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": {
          "creativeCloudPath": "my-folder/output.jpg"
        },
        "mediaType": "image/jpeg",
        "quality": "maximum"
      }
    ]
  }
}
```

**Pattern:** The output repeats the Creative Cloud path once the file is stored in ACP-backed Creative Cloud storage.

**Alternative: Creative Cloud File ID**

```json
// Request
{
  "destination": {
    "creativeCloudFileId": "urn:aaid:sc:VA6C2:...",
    "creativeCloudProjectId": "urn:aaid:sc:VA6C2:..."  // Optional
  }
}

// Status Response
{
  "destination": {
    "creativeCloudFileId": "urn:aaid:sc:VA6C2:...",
    "creativeCloudProjectId": "urn:aaid:sc:VA6C2:..."
  }
}
```

**V1 vs V2:**

```javascript
// V1 Status Response (CC storage)
{
  outputs: [{
    _links: {
      self: {
        href: "my-folder/output.jpg",
        storage: "external"
      }
    },
    status: "succeeded"
  }]
}

// V2 Status Response (CC storage)
{
  result: {
    "outputs": [{
      destination: {
        creativeCloudPath: "my-folder/output.jpg"
      },
      mediaType: "image/jpeg"
    }]
  },
  status: "succeeded"
}
```

**When to Use:**

- Integration with Creative Cloud ecosystem and ACP
- Direct access to user's CC files
- Collaboration workflows
- Seamless CC workflow integration

### 5. Script output pattern (dynamic file discovery)

**Use Case:** UXP scripts that generate files dynamically (V2 new feature, `/v2/execute-actions` only)

**Request with glob pattern:**

```json
{
  "outputs": [
    {
      "destination": {
        "validityPeriod": 3600
      },
      "mediaType": "application/json",
      "scriptOutputPattern": "*.json" // Matches any JSON files
    }
  ]
}
```

**Status Response when script generates 3 JSON files:**

```json
{
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": {
          "url": "https://adobe-hosted.../fonts.json?expires=..."
        },
        "mediaType": "application/json"
      },
      {
        "destination": {
          "url": "https://adobe-hosted.../layers.json?expires=..."
        },
        "mediaType": "application/json"
      },
      {
        "destination": {
          "url": "https://adobe-hosted.../metadata.json?expires=..."
        },
        "mediaType": "application/json"
      }
    ]
  }
}
```

**Pattern:** A single request output that contains a pattern can produce multiple status response outputs, one for each matching file.

**Exact filename match:**

```json
{
  "scriptOutputPattern": "document-info.json" // Exact match
}

// Status: Single output with that specific file
```

**Glob patterns supported:**

- `*.json` - All JSON files generated by script
- `result-*.png` - Files matching pattern (result-1.png, result-2.png, etc.)
- `data-*.txt` - Pattern with wildcard
- `document-info.json` - Exact filename (no glob)

**Pattern Expansion Examples:**

1 request output → 1 status output (exact match):

```json
// Request
{"scriptOutputPattern": "metadata.json"}

// Status
{"outputs": [{"destination": {"url": ".../metadata.json?..."}}]}
```

1 request output → 3 status outputs (glob match):

```json
// Request
{"scriptOutputPattern": "*.json"}

// Status (if 3 JSON files generated)
{"outputs": [
  {"destination": {"url": ".../file1.json?..."}},
  {"destination": {"url": ".../file2.json?..."}},
  {"destination": {"url": ".../file3.json?..."}}
]}
```

**Restrictions:**

- Only works with **Hosted** or **Embedded** destinations
- Cannot use with **URL** or **Creative Cloud** destinations (require pre-known filenames)
- Only applicable to `/v2/execute-actions` endpoint
- Files are filtered by `mediaType` - only matching extensions included
- Not applicable to `/v2/edit`, `/v2/create-composite`, or other endpoints

**MediaType Filtering:**
With `mediaType: "application/json"`, files are included only when their extension is `.json`, even if other files match the pattern.

**V1 Equivalent:** None; UXP script workflows gain this capability only in V2.

**Use Cases:**

- UXP scripts whose file count is not known ahead of time
- Scripts that create filenames dynamically
- Batch processing jobs with variable output counts
- Finding assets emitted by a script

### Multiple outputs example

For a request that asks for several outputs with different destination types:
