# Descriptors

The first `batchPlay` parameter is an array of descriptors, also known as action descriptors.

UXP for Photoshop represents those action descriptors as text. This representation is sometimes called `actionJSON`.

An action descriptor is made from these parts:

- The command. This names the Photoshop command to perform and is provided through the `_obj` keyword.
- The target for the command. This identifies the (DOM) element the command acts on and is provided through the `_target` keyword. This property is sometimes omitted. Without it, the command uses a default element. Usually that default is the object active in the UI.
- Command parameters. These provide the parameters for the command.
- Command execution options. These control how the command runs.

The example below shows an `actionJSON` command that hides a layer :

```javascript
{
  _obj: "hide",
  _target: [
    {_ref: "layer", _enum: "ordinal", _value: "targetEnum"},
    {_ref: "document", _enum: "ordinal", _value: "targetEnum"}
  ]
}
```

The `_obj` keyword specifies the command, which is `hide`.

The `_target` value is an `action reference`; it identifies the layer to hide. Action references list the target from the most specific item to the least specific item, roughly like reversing a postal address. To locate the target DOM object, read the list from the last value back to the first. In this example:

- `{_ref: "document", _enum: "ordinal", _value: "targetEnum"}` First locate the target document. It is specified with `ordinal` and `targetEnum`, meaning the active frontmost document.
- Inside that document, locate the layer given by `{_ref: "layer", _enum: "ordinal", _value: "targetEnum"}`. This means the active selected layer.

The selected layer in the frontmost document is therefore the target for this command. For ordinal enumerations, `targetEnum` is the default and can be left out. For more information, see the [action references](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/batchplay.md#action-references) section below.

Because this command changes Photoshop state, it must run inside a modal scope. For details, see the [executeAsModal](../executeasmodal.md) documentation. This JavaScript hides the active layer through batchPlay:

```javascript
const { app, action, core } = require("photoshop");
async function hideActiveLayer() {
  return await action.batchPlay(
    [
      {
        _obj: "hide",
        _target: [
          { _ref: "layer", _enum: "ordinal" },
          { _ref: "document", _enum: "ordinal" },
        ],
      },
    ],
    {},
  );
}
let result = core.executeAsModal(hideActiveLayer, { commandName: "Hide Layer" });
```

This next `batchPlay` and `actionJSON` sample returns the value of a particular document pixel.
It demonstrates an extra `samplePoint` parameter.

```javascript
async function samplePixel() {
  return await action.batchPlay(
    [
      {
        _obj: "colorSampler",
        _target: { _ref: "document", _enum: "ordinal", _value: "targetEnum" },
        samplePoint: {
          horizontal: 100,
          vertical: 100,
        },
      },
    ],
    {},
  );
}
let result = await core.executeAsModal(samplePixel, { commandName: "Sample Pixel" });
```

Sample output from the colorSampler command:

```javascript
[
  {
    colorSampler: {
      _obj: "CMYKColorClass",
      black: 0,
      cyan: 26.27,
      magenta: 4.71,
      yellowColor: 0,
    },
    sampledData: true,
  },
];
```
