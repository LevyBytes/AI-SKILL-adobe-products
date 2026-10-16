# putSelection

Use this API from JavaScript to update the selection itself from a supplied pixel-data representation. Conceptually, this mirrors leaving Quick Mask mode; reference: https://helpx.adobe.com/photoshop/using/create-temporary-quick-mask.html.

```javascript
await imaging.putSelection(options);
```

- options | Object - **_Required_**
  Settings for the operation.
  - `documentID` | Number - Optional. Source document id. When it is omitted or set below zero, the active document is used.
  - `replace` | Boolean - Optional. Determines how the selection changes. When true, Photoshop removes the existing document selection before creating the new one. When false, the new image data is added to the current document selection. The default value is true.
  - `targetBounds` | Object - Optional. Location where the selection is inserted. If omitted, selection pixels begin at `(0, 0)`. The object must include these values: `left`, `top`. (`width` and `height` dimension keys are ignored here.)
  - `commandName` | String - Optional. When supplied, Photoshop uses this name while creating a history panel entry.

Example:

```javascript
await imaging.putSelection({ imageData: grayImageData });
```
