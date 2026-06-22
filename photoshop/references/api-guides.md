# Actionjson Endpoint, Artboards, Create Mask, Depthblur ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Getting started with ActionJSON; Artboards; Create Mask; Depth Blur; Document level edits.

## Getting started with ActionJSON

ActionJSON resembles the Photoshop Actions endpoint because it lets you programmatically apply an ATN file's contents to an image. Using ActionJSON adds more flexibility, however.

With `/actionJSON`, you send an input file and a Photoshop Action file, then provide edits to the original action steps so the otherwise static Action becomes dynamic.

These changes can include:

- Changing the payload, for example by adding an action.
- Running an ATN file against an image while avoiding the Firefly Services upload-and-storage step used by the Photoshop Actions endpoint.

Watch the tutorial video, then continue reading for ActionJSON details.

https://youtu.be/giFJ6qbez_I?feature=shared

### Implementation example

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/spaniels-bw.png?raw=true)

This example starts with a familiar asset and action file, then changes the payload so the output runs every step in the original action with one modification: ActionJSON returns a black-and-white image instead of color.

Because the complete action file has more than 70 steps, the full JSON payload is omitted. The excerpt below is the modified section that produces the output.

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/actionJSON \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [{
  "href": "<SIGNED_GET_URL>",
  "storage": "<storage>"
  }],
  "options": {
    "actionJSON": [{
        "_obj": "imageSize",
        "constrainProportions": true,
        "interfaceIconFrameDimmed": {
          "_enum": "interpolationType",
          "_value": "automaticInterpolation"
        },
        "scaleStyles": true
      }, {
        "_obj": "imageSize",
        "constrainProportions": true,
        "interfaceIconFrameDimmed": {
          "_enum": "interpolationType",
          "_value": "automaticInterpolation"
        },
        "resolution": {
          "_unit": "densityUnit",
          "_value": 72.0
        },
        "scaleStyles": true
      },
      {
        "_obj": "make",
        "_target": [{
          "_ref": "adjustmentLayer"
        }],
        "using": {
          "_obj": "adjustmentLayer",
          "type": {
            "_obj": "blackAndWhite",
            "blue": 20,
            "cyan": 60,
            "grain": 40,
            "magenta": 80,
            "presetKind": {
              "_enum": "presetKindType",
              "_value": "presetKindDefault"
            },
            "red": 40,
            "tintColor": {
              "_obj": "RGBColor",
              "blue": 179.00115966796876,
              "grain": 211.00067138671876,
              "red": 225.00045776367188
            },
            "useTint": false,
            "yellow": 60
          }
        }
      }
    ]
  },
  "outputs": [{
    "type": "image/jpeg",
    "storage": "<storage>",
    "href": "<SIGNED_POST_URL>"
  }]
}'
```

### Creating actionJSON files

### Setting up developer mode

To turn on developer mode in Photoshop, use this flow:

1. Navigate to:

   - Open Photoshop → Preferences → Plugins... (For Mac).
   - Open Edit → Preferences → Plugins... (For Windows).

2. Choose _Enable Developer Mode_.
3. Quit Photoshop.
4. Open Photoshop again with developer mode enabled.

If your Photoshop version is 23.4 (July 2022) or older, use the command below to enable developer mode as a hidden feature.

For Mac:

```bash
echo "UXPEnableScriptingUtilities 1" >>  "/Users/$USER/Library/Preferences/Adobe Photoshop 2021 Settings/PSUserConfig.txt"
```

For Windows Powershell:

```bash
echo  "UXPEnableScriptingUtilities 1" >> "C:\Users\$env:USERNAME\AppData\Roaming\Adobe\Adobe Photoshop 2021\Adobe Photoshop 2021 Settings\PSUserConfig.txt"
```

### Creating new actionJSON

With developer mode already enabled, follow these instructions. If it is not enabled, return to the previous section first.

1. Open Photoshop.
2. Open Settings → Plugins.
3. Choose Development.
4. Choose Record Action Commands....
5. Enter a file name and click **Save**. Then perform selected Photoshop actions, such as resizing an image or adjusting hue and saturation; Photoshop records those actions in the new file.

After recording, stop and save:

1. Open Settings → Plugins.
2. Choose Development.
3. Click **Stop Action Recording**.

Photoshop saves the actions in the directory you selected when naming the file.

### Creating actionJSON in Actions Panel

Another path is to create the file from Photoshop's Action Panel:

1. Open Windows → Actions to show the action panel.
2. Create a new action by selecting **New Action...**, or use the panel's `+` button.
   [Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/actions-panel-menu.png?raw=true)
3. In the action set, choose your action.
4. Select **Copy as Javascript**.
5. Paste the contents into any text editor.
6. Modify the file so only the needed actions remain.

The resulting action is ready for a Photoshop API payload.

### Converting ATN files into actionJSON

The endpoint can turn an _.atn_ file into actionJSON format; for creating actionJSON, this is the most direct route.

### Converting ATN files into actionJSON with Photoshop

1. Open Windows → Actions to show the action panel.
2. Select **Load action**.
3. Choose the action to convert to actionJSON.
4. Click **Copy as Javascript**.
5. Paste the contents into any text editor.
6. Edit the file to remove the extra actions obj blocks. The code sample below shows the pattern.

Afterward, the action can be used in your payload.

The next sample shows Action JSON produced by Photoshop's **Copy as Javascript** command:

```js
async function vignetteSelection() {
  let result;
  let psAction = require("photoshop").action;

  let command = [
    // Make snapshot
    {
      _obj: "make",
      _target: [{ _ref: "snapshotClass" }],
      from: { _property: "currentHistoryState", _ref: "historyState" },
      using: { _enum: "historyState", _value: "fullDocument" },
    },
    // Feather
    {
      descriptor: { _obj: "feather", radius: { _unit: "pixelsUnit", _value: 5.0 } },
      options: { dialogOptions: "display" },
    },
    // Layer Via Copy
    { _obj: "copyToLayer" },
    // Show current layer
    {
      _obj: "show",
      null: [{ _enum: "ordinal", _ref: "layer", _value: "targetEnum" }],
      toggleOptionsPalette: true,
    },
    // Make layer
    { _obj: "make", _target: [{ _ref: "layer" }] },
    // Fill
    {
      _obj: "fill",
      mode: { _enum: "blendMode", _value: "normal" },
      opacity: { _unit: "percentUnit", _value: 100.0 },
      using: { _enum: "fillContents", _value: "white" },
    },
    // Move current layer
    {
      _obj: "move",
      _target: [{ _enum: "ordinal", _ref: "layer", _value: "targetEnum" }],
      to: { _enum: "ordinal", _ref: "layer", _value: "previous" },
    },
  ];
  result = await psAction.batchPlay(command, {});
}

async function runModalFunction() {
  await require("photoshop").core.executeAsModal(vignetteSelection, {
    commandName: "Action Commands",
  });
}

await runModalFunction();
```

Trim the JavaScript to the actions only: delete the rest and copy the array containing `_obj` from the `command` variable. It will resemble this example.

```js
[
 {"_obj":"make","_target":[{"_ref":"snapshotClass"}],"from":{"_property":"currentHistoryState","_ref":"historyState"},
 "using":{"_enum":"historyState","_value":"fullDocument"}},
 {"_obj":"feather","radius":{"_unit":"pixelsUnit","_value":5.0}},
 {"_obj":"copyToLayer"},
 {"_obj":"show","null":[{"_enum":"ordinal","_ref":"layer","_value":"targetEnum"}],"toggleOptionsPalette":true},
 {"_obj":"make","_target":[{"_ref":"layer"}]},
 {"_obj":"fill","mode":{"_enum":"blendMode","_value":"normal"},"opacity":{"_unit":"percentUnit","_value":100.0},"using":{"_enum":"fillContents","_value":"white"},
 {"_obj":"move","_target":[{"_enum":"ordinal","_ref":"layer","_value":"targetEnum"}],"to":{"_enum":"ordinal","_ref":"layer","_value":"previous"}}
]
```

Find [details about actionJSON at Photoshop API, `batchPlay`](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/batchplay/).

### Executing an actionJSON with multiple inputs

The `/actionJSON` endpoint supports compositing with multiple images.

To pass several images and reference them inside actionJSON, define a Placeholder Value in the actionJSON. The value must be `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_X`, where `X` is the index in the `additionalImages` array.

For an actionJSON that needs two additional images:

- `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` == `options.additionalImages[0]`
- `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_1` == `options.additionalImages[1]`

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/actionJSON \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "<storage>"
    }
  ],
  "options": {
    "additionalImages": [
      {
        "href": "<SIGNED_GET_URL>",
        "storage": "<storage>"
      }
    ],
    "actionJSON": [
    {
      "ID": 3,
      "_obj": "placeEvent",
      "freeTransformCenterState": {
        "_enum": "quadCenterState",
        "_value": "QCSAverage"
      },
      "null": {
        "_kind": "local",
        "_path": "ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0"
      },
      "offset": {
        "_obj": "offset",
        "horizontal": {
          "_unit": "pixelsUnit",
          "_value": 0
        },
        "vertical": {
          "_unit": "pixelsUnit",
          "_value": 0
        }
      }
    },
    {
      "_obj": "autoCutout",
      "sampleAllLayers": false
    },
    {
      "_obj": "make",
      "at": {
        "_enum": "channel",
        "_ref": "channel",
        "_value": "mask"
      },
      "new": {
        "_class": "channel"
      },
      "using": {
        "_enum": "userMaskEnabled",
        "_value": "revealSelection"
      }
    },
    {
      "_obj": "set",
      "_target": [
        {
          "_property": "selection",
          "_ref": "channel"
        }
      ],
      "to": {
        "_enum": "ordinal",
        "_value": "allEnum"
      }
    },
    {
      "_obj": "align",
      "_target": [
        {
          "_enum": "ordinal",
          "_ref": "layer"
        }
      ],
      "alignToCanvas": false,
      "using": {
        "_enum": "alignDistributeSelector",
        "_value": "ADSBottoms"
      }
    },
    {
      "_obj": "align",
      "_target": [
        {
          "_enum": "ordinal",
          "_ref": "layer"
        }
      ],
      "alignToCanvas": false,
      "using": {
        "_enum": "alignDistributeSelector",
        "_value": "ADSRights"
      }
    },
    {
      "_obj": "set",
      "_target": [
        {
          "_property": "selection",
          "_ref": "channel"
        }
      ],
      "to": {
        "_enum": "ordinal",
        "_value": "none"
      }
    }
  ]

  },
  "outputs": [
    {
      "type": "image/jpeg",
      "href": "<SIGNED_PUT_URL>",
      "storage": "<storage>"
    }
  ]
}'
```

## Artboards

With the Photoshop API, artboards support building one document from several input images and inspecting artboard details in generated manifests.

### Artboard information in the JSON Manifest

For documents that contain artboards, manifest generation returns an `artboards` array describing structure and bounds. For details about the manifest shape, see [Manifest Migration](api-manifest-migration.md); for the request sequence, see [Generate Manifest Endpoint](api-guides-3.md).

### Create a new artboard from multiple input images

To build an artboard document from several inputs, such as PSDs or other supported image formats, call the `/v2/create-artboard` endpoint. Images are placed horizontally by the API, and spacing can be configured.

For complete request and response material, sample calls, supported output formats, and guidance for moving from the v1 artboards endpoint, see [Artboard Migration (V1 to V2)](api-v1-to-v2.md).

## Create Mask

Create semantic masks for image foreground objects and background areas.

### Overview

With `"mode": "mask"`, the Remove Background service produces a PNG mask around the subject. Send `POST https://image.adobe.io/v2/remove-background`, then continue polling **`GET https://image.adobe.io/v2/status/{jobId}`** until processing finishes. See [Remove background](https://developer.adobe.com/firefly-services/docs/photoshop/api/photoshop-v2/#operation/removeBackground) and [Get Job Status](https://developer.adobe.com/firefly-services/docs/photoshop/api/photoshop-v2/#operation/getJobStatus).

The `/v1/mask-objects` endpoint examines an input image and produces two mask groups: `semanticMasks` for foreground objects it detects, and `backgroundMasks` for background areas. Every mask reports a label, confidence score, bounding box, and URL for the mask image.

One presigned URL supplies the input image. Max dimensions: 4000 x 4000 px.

**1. Start the job**

```shell
curl -X POST \
  https://image.adobe.io/v1/mask-objects \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "image": {
      "source": {
        "url": "<SIGNED_GET_URL>"
      }
    }
  }'
```

This starts an asynchronous job and sends back a response with the URL used for job-status polling:

```json
{
  "jobId": "e3a13d81-a462-4b71-9964-28b2ef34aca7",
  "_links": {
    "self": {
      "href": "https://image.adobe.io/v1/status/e3a13d81-a462-4b71-9964-28b2ef34aca7"
    }
  }
}
```

After the previous call returns a job ID, request the `/status` href to retrieve the current job status:

```shell
curl -X GET \
  https://image.adobe.io/v1/status/e3a13d81-a462-4b71-9964-28b2ef34aca7 \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json"
```

When the job has finished, a successful `/status` response has a shape like this. Foreground-object masks appear in `semanticMasks`; background-region masks are listed under `backgroundMasks`:

```json
{
  "jobId": "e3a13d81-a462-4b71-9964-28b2ef34aca7",
  "status": "succeeded",
  "semanticMasks": [
    {
      "label": "Person",
      "score": 0.98,
      "boundingBox": {
        "left": 120,
        "top": 45,
        "width": 320,
        "height": 610
      },
      "destination": {
        "url": "https://storage.adobe.io/..."
      },
      "mediaType": "image/png"
    }
  ],
  "backgroundMasks": [
    {
      "label": "Background",
      "score": 0.95,
      "boundingBox": {
        "left": 0,
        "top": 0,
        "width": 800,
        "height": 600
      },
      "destination": {
        "url": "https://storage.adobe.io/..."
      },
      "mediaType": "image/png"
    }
  ]
}
```

## Depth Blur

Use the Depth Blur API to add depth blur to an image.

In Photoshop, Depth Blur belongs to the Neural Filters gallery. It lets a workflow choose the blur area and range in a photo, producing wide-aperture depth-of-field effects.

You can set alternate focal points, or omit the focal point and manage depth blur with the focal range slider. With `focusSubject` set to `true`, the most prominent subject in the image is selected and the depth blur is applied around that subject.

### Applying depth blur neural filter

The following implementation sample sends a depth blur request:

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/depthBlur \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<your_signed_get_url>",
      "storage": "<your_storage>"
    }
  ],
  "options": {
    "haze": 25,
    "blurStrength": 30,
    "focalSelector": {
        "x": 0.22,
        "y": 0.33
    }
  },
  "outputs": [
    {
      "storage": "<your_storage>",
      "type": "image/jpeg",
      "href": "<your_signed_post_url>"
    }
  ]
}'
```

## Document level edits

- Crop a PSD
- Resize a PSD

## See also

- [Photoshop Actions](api-photoshop-actions.md)
