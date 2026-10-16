# Getting state from Photoshop

To read state from Photoshop with batchPlay, use the "get" action command with a target property. This sample reads a target document's title: 

Run in Photoshop with an open document. The awaited request reads that document.

```javascript
const photoshop = require("photoshop");
const someDocumentID = photoshop.app.activeDocument.id;
var target = {_ref: [
  {_property: "title"},
  {_ref: "document", _id: someDocumentID},
  {_ref: "application"}
]};
var command = {_obj: "get", _target: target};
let result = await photoshop.action.batchPlay([command], {});
```

 A possible result from running this command is: 

Example returned data, not an executable statement.

```json
[
  {
    "title": "Untitled-1"
  }
]
```

 When the "get" command has no target property, Photoshop returns every available property for that target. This example lists the available document properties: 

Run in Photoshop with an open document. The awaited request reads that document.

```javascript
const photoshop = require("photoshop");
const someDocumentID = photoshop.app.activeDocument.id;
var target = {_ref: [
  {_ref: "document", _id: someDocumentID},
  {_ref: "application"}
]};
var command = {_obj: "get", _target: target};
let result = await photoshop.action.batchPlay([command], {});
```

 A possible result from running this command may include the following: 

Partial response: additional document properties are omitted.

Example returned data, not an executable statement.

```json
[
  {
    "mode": {
      "_enum": "colorSpace",
      "_value": "RGBColor"
    },
    "bigNudgeH": 655360,
    "bigNudgeV": 655360,
    "rulerOriginH": 0,
    "rulerOriginV": 0,
    "width": {
      "_unit": "distanceUnit",
      "_value": 504
    },
    "height": {
      "_unit": "distanceUnit",
      "_value": 360
    },
    "resolution": {
      "_unit": "densityUnit",
      "_value": 300
    },
    "title": "Untitled-1",
    "fileInfo": {
      "_obj": "fileInfo"
    },
    "numberOfPaths": 0,
    "numberOfChannels": 3,
    "numberOfLayers": 0,
    "targetPathIndex": -1,
    "workPathIndex": -1,
    "clippingPathInfo": {
      "_obj": "clippingInfo",
      "clippingPathIndex": -1,
      "clippingPathFlatness": 0
    }
  }
]
```

 Using "get" without a property is meant only for plugin development. This "get all" request helps a developer see which properties an element supports. _A shipping plugin should avoid requesting all properties for a target, because the operation may be slow and may get slower as future properties are added._
