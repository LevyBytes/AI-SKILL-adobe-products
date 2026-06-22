# Execute Actions, Pegasus Worker V2 Models, Smart Object Workflow

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Execute Actions Workflow; Photoshop API v2 guides; Pegasus Worker v2 — ML models reference; Smart Object Workflow.

## Execute Actions Workflow

Learn to automate Photoshop work with Actions and UXP Scripts through the `/v2/execute-actions` endpoint.

The **execute-actions workflow** runs Photoshop operations programmatically with Actions (JSON-formatted action descriptors and traditional binary `.atn` files) plus UXP Scripts (modern JavaScript automation).

Key capabilities include:

- **Actions and UXP Scripts**: Run traditional Actions (recorded operations) alongside modern UXP Scripts (JavaScript automation)
- **Inline or external**: Provide inline JSON/JavaScript or point to external `.atn`, `.json`, or `.psjs` files
- **Dynamic placeholders**: Insert file paths during execution with placeholder syntax
- **Multiple actions**: Chain as many as 10 actions in order; UXP is limited to 1 script per request
- **Pattern-based outputs**: Use glob patterns to collect dynamically generated files

**Recommendation**: Choose Actions for image manipulation and effects. Choose UXP Scripts for conditional logic, data extraction, or more complex decision-making.

### Prerequisites

Before starting, make sure these are available:

1. **Authentication token**: Use the [Authentication guide](https://raw.githubusercontent.com/getting-started/index.md) to obtain your OAuth 2.0 Bearer token
2. **API key**: Use your Client ID from the Adobe Developer Console
3. **Image storage**: Provide a publicly accessible URL for the input image, such as S3, Azure, Dropbox, or another pre-signed URL

Create these environment variables:

```bash

```

### Request structure

Use this general shape for execute-actions requests:

```json
{
  "image": {
    "source": {
      "url": "<INPUT_IMAGE_URL>"
    }
  },
  "options": {
    "actions": [
      /* Action definitions */
    ],
    "uxp": {
      /* UXP script */
    },
    "additionalContents": [
      /* Additional images */
    ]
  },
  "outputs": [
    {
      "mediaType": "<OUTPUT_FORMAT>",
      "destination": {
        "validityPeriod": 3600
      },
      "scriptOutputPattern": "<FILENAME_OR_PATTERN>"
    }
  ]
}
```

**Key fields:**

- **`image.source.url`**: input image URL (required)
- **`options.actions`** (array, max 10) or **`options.uxp`** (single script): one of these is required
- **`options.additionalContents`**: optional list of extra images; up to 25
- **`outputs.mediaType`**: format to create (`image/jpeg`, `image/png`, `image/vnd.adobe.photoshop`, `application/json`)
- **`outputs.scriptOutputPattern`**: required when UXP scripts create files
- **`destination.validityPeriod`**: URL validity duration in seconds (default: 3600)

### Working with actions

Photoshop operations can be automated with JSON-formatted descriptors or with legacy `.atn` action files. Requests may embed the action data directly or point to an external file.

### Example: warm vintage film look

This sample creates sepia-toned vintage styling and level adjustments:

```bash
curl -X POST "https://photoshop-api.adobe.io/v2/execute-actions" \
  -H "Authorization: Bearer $TOKEN" \
  -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "https://your-storage.com/input-image.jpg"
    }
  },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"make\",\"_target\":[{\"_ref\":\"adjustmentLayer\"}],\"using\":{\"_obj\":\"adjustmentLayer\",\"type\":{\"_obj\":\"hueSaturation\",\"colorize\":true,\"hue\":{\"_unit\":\"angleUnit\",\"_value\":30},\"saturation\":{\"_unit\":\"percentUnit\",\"_value\":25},\"lightness\":{\"_unit\":\"percentUnit\",\"_value\":0}}}},{\"_obj\":\"make\",\"_target\":[{\"_ref\":\"adjustmentLayer\"}],\"using\":{\"_obj\":\"adjustmentLayer\",\"type\":{\"_obj\":\"levels\",\"adjustment\":[{\"_obj\":\"levelRecord\",\"channel\":{\"_ref\":\"channel\",\"_enum\":\"channel\",\"_value\":\"composite\"},\"inputFloor\":10,\"inputCeiling\":245,\"outputFloor\":15,\"outputCeiling\":255,\"gamma\":1.1}]}}},{\"_obj\":\"make\",\"_target\":[{\"_ref\":\"adjustmentLayer\"}],\"using\":{\"_obj\":\"adjustmentLayer\",\"type\":{\"_obj\":\"brightnessEvent\",\"brightness\":5,\"contrast\":-5}}}]",
          "contentType": "application/json"
        }
      }
    ]
  },
  "outputs": [
    {
      "mediaType": "image/jpeg",
      "destination": {
        "validityPeriod": 3600
      }
    }
  ]
}'
```

### Working with UXP scripts

With UXP (Unified Extensibility Platform), the execute-actions endpoint can run modern JavaScript (ES6+) for more complex Photoshop automation.

### Example: flatten document and export

This request flattens every layer in a PSD and returns JPEG output:

```bash
curl -X POST "https://photoshop-api.adobe.io/v2/execute-actions" \
  -H "Authorization: Bearer $TOKEN" \
  -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "https://your-storage.com/input.psd"
    }
  },
  "options": {
    "uxp": {
      "source": {
        "content": "const { app } = require(\"photoshop\"); async function main() { await app.activeDocument.flatten(); } main();",
        "contentType": "application/javascript"
      }
    }
  },
  "outputs": [
    {
      "mediaType": "image/jpeg",
      "destination": {
        "validityPeriod": 3600
      }
    }
  ]
}'
```

### Sandboxing

For security, UXP scripts execute inside a sandbox. File system access is limited to `plugin-temp:/` for generated output and `additionalContents` for supplied input; network calls are blocked, shell execution is unavailable, and scripts are separated from system resources.

**Restricted operations:**

- Server-side arbitrary file paths are unavailable
- Network requests are blocked (fetch, HTTP calls)
- Shell commands and external processes cannot be launched

**Working with files:**

For file handling in UXP scripts, route all file I/O through `plugin-temp:/`. Files that the script produces, such as JSON, text, logs, or metadata, should be written to `plugin-temp:/filename`; when `scriptOutputPattern` matches, those files are collected as outputs automatically. To read external inputs, pass them through `additionalContents` and reference the placeholder form (`__ADDITIONAL_CONTENTS_PATH_0__`) inside the script.

**Example: writing and reading files**

This example shows sandbox file I/O by saving processing results and loading config:

```bash
curl -X POST "https://photoshop-api.adobe.io/v2/execute-actions" \
  -H "Authorization: Bearer $TOKEN" \
  -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "https://your-storage.com/input.psd"
    }
  },
  "options": {
    "additionalContents": [
      {
        "source": {
          "url": "https://your-storage.com/config.json"
        }
      }
    ],
    "uxp": {
      "source": {
        "content": "const { app } = require(\"photoshop\"); const fs = require(\"fs\"); async function main() { const configPath = \"__ADDITIONAL_CONTENTS_PATH_0__\"; const config = JSON.parse(fs.readFileSync(configPath, \"utf-8\")); const doc = app.activeDocument; if (config.applyResize && doc.width > config.maxWidth) { await app.batchPlay([{\"_obj\":\"imageSize\",\"width\":{\"_unit\":\"pixelsUnit\",\"_value\":config.maxWidth},\"constrainProportions\":true}], {}); } const report = { originalSize: { width: doc.width, height: doc.height }, configApplied: config, processedAt: new Date().toISOString() }; fs.writeFileSync(\"plugin-temp:/process-report.json\", JSON.stringify(report, null, 2)); } main();",
        "contentType": "application/javascript"
      }
    }
  },
  "outputs": [
    {
      "mediaType": "image/jpeg",
      "destination": {
        "validityPeriod": 3600
      }
    },
    {
      "mediaType": "application/json",
      "destination": {
        "validityPeriod": 3600
      },
      "scriptOutputPattern": "process-report.json"
    }
  ]
}'
```

### Advanced features

### Executing a specific action by name

For an `.atn` file that bundles several named actions, set `actionName` to run just the chosen entry. Without `actionName`, execution proceeds through every action in the file in sequence.

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "url": "https://your-storage.com/my-actions.atn"
        },
        "actionName": "Vignette Effect"
      }
    ]
  }
}
```

One request may combine actions that name a specific action with actions that process an entire file:

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "url": "https://your-storage.com/my-actions.atn"
        },
        "actionName": "Resize to Web"
      },
      {
        "source": {
          "url": "https://your-storage.com/color-grading.atn"
        }
      }
    ]
  }
}
```

In this sample, `"Resize to Web"` is taken only from the first `.atn`; the second `.atn` is processed in full.

### Multiple actions in sequence

Chain as many as 10 actions in order:

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"imageSize\",\"width\":{\"_unit\":\"pixelsUnit\",\"_value\":800}}]",
          "contentType": "application/json"
        }
      },
      {
        "source": {
          "url": "https://your-storage.com/color-correction.json"
        }
      },
      {
        "source": {
          "url": "https://your-storage.com/add-watermark.atn"
        }
      }
    ]
  }
}
```

### Combining actions with UXP scripts

A request can include several actions plus a single UXP script. The action list is processed before the UXP script.

Each request accepts only **one UXP script**, alongside a maximum of **10 actions**.

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"imageSize\",\"width\":{\"_unit\":\"pixelsUnit\",\"_value\":1920}}]",
          "contentType": "application/json"
        }
      }
    ],
    "uxp": {
      "source": {
        "content": "const app = require('photoshop').app; const doc = app.activeDocument; /* custom UXP code */",
        "contentType": "application/javascript"
      }
    }
  }
}
```

### Using additional contents

Use placeholders when compositing several images. Put `__ADDITIONAL_CONTENTS_PATH_{index}__` in action JSON or UXP code; `{index}` maps to the zero-based position inside `additionalContents`.

```json
{
  "image": {
    "source": {
      "url": "https://your-storage.com/background.jpg"
    }
  },
  "options": {
    "additionalContents": [
      {
        "source": {
          "url": "https://your-storage.com/logo.png"
        }
      },
      {
        "source": {
          "url": "https://your-storage.com/overlay.png"
        }
      }
    ],
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"placeEvent\",\"null\":{\"_kind\":\"local\",\"_path\":\"__ADDITIONAL_CONTENTS_PATH_0__\"}}]",
          "contentType": "application/json"
        }
      }
    ]
  }
}
```

### Script output patterns

Use glob patterns to collect files created by UXP scripts:

```json
{
  "outputs": [
    {
      "mediaType": "image/png",
      "destination": {
        "validityPeriod": 3600
      },
      "scriptOutputPattern": "layer-*.png"
    }
  ]
}
```

### Loading custom resources

**Fonts:**

```json
{
  "options": {
    "fontOptions": {
      "additionalFonts": [
        {
          "source": {
            "url": "https://your-storage.com/custom-font.ttf"
          }
        }
      ]
    }
  }
}
```

**Brushes and patterns:**

```json
{
  "options": {
    "brushes": [
      {
        "source": {
          "url": "https://your-storage.com/custom-brush.abr"
        }
      }
    ],
    "patterns": [
      {
        "source": {
          "url": "https://your-storage.com/custom-pattern.pat"
        }
      }
    ]
  }
}
```

### Common issues

### Issue: invalid content type

**Error**: `Invalid contentType for inline action`

**Solution**: For action content, set `"contentType": "application/json"`; for UXP scripts, set `"contentType": "application/javascript"`.

### Issue: placeholder not replaced

**Error**: File path contains literal `__ADDITIONAL_CONTENTS_PATH_0__`

**Solution**: Provide an `additionalContents` array under `options`, then verify that the placeholder index is the expected 0-based value.

### Issue: script output not found

**Error**: `No files matching pattern`

**Solution**: Confirm the UXP script writes the file under `plugin-temp:/filename` and that `scriptOutputPattern` uses the same filename.

## Photoshop API v2 guides

These guides explain Photoshop API v2 endpoint usage through workflow examples, step sequences, and recommended patterns.

### Available guides

- [Execute Actions workflow](api-guides-v2.md) — Use `/v2/execute-actions` to automate Photoshop operations with Actions and UXP Scripts
- [Smart Object workflow](api-guides-v2.md) — Use `/v2/create-composite` and `/v2/generate-manifest` for linked smart-object insertion and smart-object content replacement
- [/v2/edit API benchmarking](api-v2-edit-api-benchmarking.md) — Performance timings for JPEG and PNG output by resolution, quality, and compression to support capacity planning

### Related v2 guides

The migration guides below add case-specific notes for using v2 APIs:

- [Product Crop](api-convenience-apis.md) — Use published ActionJSON with `/v2/execute-actions` for auto-crop and padding
- [Text Layer Operations](api-text-layer-operations.md) — Use ActionJSON or UXP scripts with `/v2/execute-actions` to edit text layers
- [Actions Migration](api-actions-migration.md) — Move Photoshop Actions and ActionJSON workflows onto `/v2/execute-actions`

## Pegasus Worker v2 — ML models reference

Reference list for **models and cloud endpoints** that **pegasus-worker-v2** uses while Photoshop Services jobs are processed.

### Model inventory

| Capability | Hosting | Model / identifier | API or endpoint | Notes |
| --- | --- | --- | --- | --- |
| Generative Fill | Cloud | `me_md` | `https://firefly-clio-imaging.adobe.io/v2/images/fill` | Fill and expand each use the corresponding path. |
| Generative Expand | Cloud | `me_md` | `https://firefly-clio-imaging.adobe.io/v2/images/expand` | Fill and expand each use the corresponding path. |
| Select Subject | Cloud | Select Subject V5 | Generated dynamically | If cloud fails, falls back to **on-device** (uses **V3**). |
| Select Sky / sky replacement | On-device | `SKBS` / `SKRF` | — |  |
| Remove tool — MetaCAF (generative remove) | Cloud | multi-edit erase | `https://di-me.ff.adobe.io/v2/images/generate-erase` |  |
| People detection | On-device | `PeopleDistractorV1` | — | For **removal**, flow uses **generative remove (MetaCAF)** on **cloud**. |
| Wire removal | On-device | `WireGlobal`, `WireLocal`, `WireStuffSeg_V2`, `CMGAN_Tiny_V3` | — | All models used in the **same** pipeline. |
| Object selection | On-device | `object_selection`, `ultimate_universal_mask_refinement`, `select_subject_classifier` | — | All models used in the **same** pipeline. |

## Smart Object Workflow

See [Photoshop API v1 guides overview](https://raw.githubusercontent.com/guides/v1/index.md) for authentication, API key, and storage setup.

### Example 1: Adding a linked smart object

Create a linked smart object layer, then run generate-manifest to verify that the manifest reports it as linked.

### Placeholders for step 1

Set these values in the payload:

| Placeholder | Description |
| --- | --- |
| `<SIGNED_INPUT_ASSET_GET_URL>` | Presigned GET URL for your input asset (a PSD file). |
| `<SIGNED_SMART_OBJECT_ASSET_GET_URL>` | Presigned GET URL for the external file (PNG, JPEG, PSD, etc) to add as a new linked smart object layer. Placement is at the top of the layer stack, as specified by the placement field. |
| `<SIGNED_OUTPUT_POST_URL>` | Presigned POST (or PUT) URL where the output asset will be uploaded. In this example, the output is a PSD file as specified by the mediaType field |

### Step 1 — Create composite (add linked smart object)

**Endpoint:** `POST /v2/create-composite`

**Request payload:**

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_INPUT_ASSET_GET_URL>"
    }
  },
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "Linked Added Smart Object",
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        },
        "smartObject": {
          "isLinked": true,
          "smartObjectFile": {
            "source": {
              "url": "<SIGNED_SMART_OBJECT_ASSET_GET_URL>"
            }
          }
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_OUTPUT_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

The result PSD contains a new linked smart object at the top of the layer stack, matching the images below.

**Before:** Original PSD.
[Figure: Before adding linked smart object](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/add-linked-before.png?raw=true)
**After:** PSD with linked smart object layer on top.
[Figure: After adding linked smart object](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/add-linked-after.png?raw=true)

### Step 2 — Generate manifest

Set `image.source.url` in the next payload to the presigned GET URL for the Step 1 output PSD; it references the PSD just created.

### Placeholders for step 2

Set these values in the payload:

| Placeholder | Description |
| --- | --- |
| `<SIGNED_OUTPUT_PSD_GET_URL>` | Presigned GET URL of the output PSD from Step 1. Use this to read the PSD for manifest generation. |

**Endpoint:** `POST /v2/generate-manifest`

**Request payload:**

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_OUTPUT_PSD_GET_URL>"
    }
  },
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

Set `image.source.url` to the URL for the PSD produced in Step 1.
Calling this API starts an async job and returns a URL-bearing response. Use `href` for [job status](https://raw.githubusercontent.com/guides/get-job-status/index.md) polling; the response also carries the JSON manifest.

### Step 3 — Result: linked smart object in manifest

Manifest JSON layer excerpt:

```json
"smartObject": {
    "isSmartObject": true,
    "isLinked": true,
    "isValid": true,
    "smartObjectData": {
        "type": "smartObject",
        "transform": [
            0,
            0,
            1000,
            0,
            1000,
            1000,
            0,
            1000
        ],
        "fileInfo": {
            "relative": "../../df06670e-467a-4880-a697-cfc162f313c3/downloads/c89b3884-3df6-444e-9540-a0c26af33ddc.png",
            "name": "c89b3884-3df6-444e-9540-a0c26af33ddc.png",
            "path": "/tmp/df06670e-467a-4880-a697-cfc162f313c3/downloads/c89b3884-3df6-444e-9540-a0c26af33ddc.png",
            "fileType": "png",
            "linked": true
        }
    }
}
```

The snippet shows that linked smart objects report `linked` as `true` and include `path` details for the external file.

### Example 2: Replacing a smart object with a linked file

Update an existing smart object layer by pointing it at a different linked file. The input PSD needs to contain the target smart object layer already. This example starts from the Example 1 output PSD and swaps its linked smart object for another linked file.

### Placeholders for example 2

Set these values in the payload:

| Placeholder | Description |
| --- | --- |
| `<SIGNED_INPUT_ASSET_GET_URL>` | Presigned GET URL for your input PSD. This PSD must contain an existing smart object layer. |
| `<EXISTING_SMART_OBJECT_LAYER_NAME>` | The exact name of the smart object layer to replace (as it appears in the Layers panel). Use the manifest to find the layer name if needed. |
| `<SIGNED_NEW_SMART_OBJECT_GET_URL>` | Presigned GET URL for the new file to use as the smart object content. |
| `<SIGNED_OUTPUT_POST_URL>` | Presigned POST (or PUT) URL where the output PSD will be uploaded. |

### Step 1 — Create composite (replace with a linked smart object)

**Endpoint:** `POST /v2/create-composite`

**Request payload:**

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_INPUT_ASSET_GET_URL>"
    }
  },
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "<EXISTING_SMART_OBJECT_LAYER_NAME>",
        "operation": {
          "type": "edit"
        },
        "smartObject": {
          "isLinked": true,
          "smartObjectFile": {
            "source": {
              "url": "<SIGNED_NEW_SMART_OBJECT_GET_URL>"
            }
          }
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_OUTPUT_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

The output PSD contains the replacement linked smart object, corresponding to the images below.

**Before:** PSD with linked smart object (from Example 1).
[Figure: Before replacing with linked smart object](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/add-linked-after.png?raw=true)
**After:** PSD with replaced linked smart object.
[Figure: After replacing with linked smart object](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/replace-after.png?raw=true)

### Opening the output PSD in Photoshop

Opening the processed PSD on a local Photoshop install can trigger a **"missing file"** prompt for the linked smart object. That warning is normal. During server-side processing, the PSD stores a path to the asset's temporary server location, and that path is unavailable on the local machine. Photoshop is reporting the unresolved link correctly.

Pick the option that fits the workflow:

1. **Relink locally.** Store a local copy of the asset supplied as the linked smart object somewhere Photoshop can reach. In Photoshop, choose the **Layer** panel → **Smart Objects** → **Relink to File**,

   [Figure: Relinking the smart object in Photoshop](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/relink-2.jpg?raw=true)

   or use the missing-link dialog when the PSD opens. After relinking, Photoshop stores the updated path.

   [Figure: Missing file prompt in Photoshop](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/relink-1.jpg?raw=true)

2. **Use embedded smart objects instead.** Choose embedded smart objects when portability outranks an external-link workflow. For PSD handoff to an end user who needs to open and edit without tracking separate assets, embedded smart objects are carried inside the PSD and remove the relink step. To embed, either set `"isLinked": false` or leave `isLinked` out of the `smartObject` block. Linked smart objects fit managed asset pipelines that need direct control over source files; embedded objects usually work better for hand-off.

## See also

- [Photoshop Actions](api-photoshop-actions.md)
