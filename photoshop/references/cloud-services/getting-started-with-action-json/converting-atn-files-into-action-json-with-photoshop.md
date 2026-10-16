# Converting ATN files into actionJSON with Photoshop

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

```json
[
 {"_obj":"make","_target":[{"_ref":"snapshotClass"}],"from":{"_property":"currentHistoryState","_ref":"historyState"},
 "using":{"_enum":"historyState","_value":"fullDocument"}},
 {"_obj":"feather","radius":{"_unit":"pixelsUnit","_value":5.0}},
 {"_obj":"copyToLayer"},
 {"_obj":"show","null":[{"_enum":"ordinal","_ref":"layer","_value":"targetEnum"}],"toggleOptionsPalette":true},
 {"_obj":"make","_target":[{"_ref":"layer"}]},
 {"_obj":"fill","mode":{"_enum":"blendMode","_value":"normal"},"opacity":{"_unit":"percentUnit","_value":100.0},"using":{"_enum":"fillContents","_value":"white"}},
 {"_obj":"move","_target":[{"_enum":"ordinal","_ref":"layer","_value":"targetEnum"}],"to":{"_enum":"ordinal","_ref":"layer","_value":"previous"}}
]
```

Find [details about actionJSON at Photoshop API, `batchPlay`](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/batchplay/).
