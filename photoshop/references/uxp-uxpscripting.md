# Uxpscripting

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Photoshop 23.5 added support for running standalone JavaScript files through UXP. The [general documention of UXP Scripting](uxp-scripting.md) explains that Photoshop treats .psjs as the JavaScript file extension for code executed by UXP.

## Running a file

Several routes can launch a script file.

- Choose the file in the dialog opened from File > Scripts > Browse...
- Drop the file onto the Ps icon in the Dock (Mac) or onto the application frame (Mac and Win).
- Run an Action that executes a script file.
- (_Coming soon_) Open a .psjs file by double-clicking once installation registers its file type association.

## Developing Script files

According to the [general documentation for UXP Scripting](uxp-scripting.md), script files run in a context that closely matches UXP plugins. The main job remains controlling Photoshop.

With the [UXP Photoshop DOM API](uxp-index.md), a script file such as [cloudy.psjs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/assets/cloudy.psjs) can perform these steps:

1. Make a new file.
2. Add a new layer.
3. Fill it with the foreground color.
4. Change the layer name.
5. Apply the Clouds filter.
6. Put the layer in a group.

```javascript
const app = require("photoshop").app;
app.documents.add();
app.activeDocument.createLayer({ name: "not descriptive name" });
require("photoshop").action.batchPlay(
  [{ _obj: "fill", using: { _enum: "fillContents", _value: "foregroundColor" } }],
  {},
);
app.activeDocument.layers[0].applyClouds();
app.activeDocument.layers[0].name = "cloudy";
app.activeDocument.createLayerGroup({ fromLayers: app.activeDocument.layers[0] });
```

_The leading blank line matters; the UDT screenshot shows why._

One of those steps uses `batchPlay`. The [at-length description](uxp-media.md) explains why that route is needed and breaks down the situation.

## Debugging Script files

Script debugging is available with Photoshop 23.5 plus UXP Developer Tool (UDT) version 1.6.0; use the [download page](https://creativecloud.adobe.com/apps/download/uxp-developer-tools).

The [general documentation for UXP Scripting](uxp-scripting.md) already walks through UDT. This section instead shows the preceding script loaded into UDT after a breakpoint has been enabled. From there, set breakpoints or use Step Into for script files. (The earlier empty first line accounts for the wrapper surrounding the script body.)

[Figure: cloudy.psjs loaded into UDT](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/assets/cloudy-udt.png)

Compare the properties under `require('uxp').script` with [those present for `executeAsModal`](uxp-executeasmodal.md). Scripts run in a related context. Over time, the shared properties and methods will align around common usage patterns. This documentation will be revised once they are available.
