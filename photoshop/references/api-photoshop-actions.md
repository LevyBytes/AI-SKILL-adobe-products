# Photoshop Actions

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

A Photoshop Action is a recorded sequence of image adjustments in the Photoshop app that can later be applied to one or many images. This guide explains how the Photoshop API runs those Actions programmatically so image-processing workflows can be automated.

## Getting started with Photoshop Actions

_Actions_ are recorded image-adjustment sequences created in the Photoshop app and reused against one or more images.

Commonly, actions are applied to one file or many files; recording can come from Photoshop app menu commands, panel options, tool actions, and related interactions.

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/frogs-adjusted.png?raw=true)

One action file might change hue and saturation, add a light blur, and save the result in the chosen format. In the Photoshop app, you build the action sequence and save those adjustments into a single ATN file. Later, the Photoshop API can run one or more actions from that ATN file across multiple images.

For more context about Photoshop Actions, use the [Photoshop Actions background](https://helpx.adobe.com/photoshop/using/actions-actions-panel.html).

### Supported input and output formats

Photoshop API with Photoshop Actions supports these file formats:

- PSD
- JPEG
- PNG
- TIFF

### Best practices and limitations

- Photoshop app dialogs are supported, but interactions with operating system dialogs are not. As a result, Photoshop API cannot programmatically open a system-level print settings dialog.
- Create Actions that avoid user intervention, including confirmation prompts or file-path entry.
- Test actions in Photoshop against several different input/images. If Photoshop reports errors, the same action will not complete successfully on servers.

Photoshop API has these known unsupported areas:

- Photoshop 3D plus Video and animation features.
- Custom presets, such as color swatches and brushes.
- Multiple file inputs are not currently supported by this endpoint.

Playback can run every task recorded in an Action, or target one task from an Actions file while excluding the rest.

## Implementation examples

This example uses a custom Action called Posterize. The ATN file includes multiple recorded Photoshop tasks: Select Subject, Remove Background, Posterize, and Export as PNG.

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/spaniels-before-after.png?raw=true)

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/photoshopActions \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "https://as2.ftcdn.net/jpg/02/49/48/49/500_F_249484911_JifPIzjUqzkRhcdMkF9GnsUI9zaqdAsn.jpg",
      "storage": "external"
    }
  ],
  "options": {
    "actions": [
      {
        "href": "https://raw.githubusercontent.com/johnleetran/ps-actions-samples/master/actions/Posterize.atn",
        "storage": "external"
      }
    ]
  },
  "outputs": [
    {
      "storage": "<your_storage>",
      "type": "image/jpeg",
      "href": "https://some-presigned-url/output.jpeg"
    }
  ]
}'
```

### Playing a specific action

Unless instructed otherwise, Photoshop API attempts to play every action in an action set. To play only one action, specify `actionName` with the action name to invoke, as shown below.

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/photoshopActions \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "https://as2.ftcdn.net/jpg/02/49/48/49/500_F_249484911_JifPIzjUqzkRhcdMkF9GnsUI9zaqdAsn.jpg",
      "storage": "external"
    }
  ],
  "options": {
    "actions": [
      {
        "href": "https://raw.githubusercontent.com/johnleetran/ps-actions-samples/master/actions/Oil-paint.atn",
        "storage": "external",
        "actionName": "Action 51"
      }
    ]
  },
  "outputs": [
    {
      "storage": "<your_storage>",
      "type": "image/jpeg",
      "href": "https://some-presigned-url/output.jpeg"
    }
  ]
}'
```
