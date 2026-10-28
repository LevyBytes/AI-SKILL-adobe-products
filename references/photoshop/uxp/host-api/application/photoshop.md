# Photoshop

Photoshop application object at the DOM root level.

```javascript
const { app } = require("photoshop");
```

Use it to reach open documents, tools, UI elements, and to run commands or menu items.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| actionTree | [_ActionSet_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/actionset.md)[] | R | 23.0 | Array form of the Actions panel tree: ActionSets, each with its Actions. |
| activeDocument | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | R W | 23.0 | Document currently focused by the application. |
| backgroundColor | [_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) | R W | 23.0 | Background color and color style used for documents. [(24.2)](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/changelog/index.md#other-fixes) |
| currentTool | [_Tool_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/tool.md) | R | 23.0 | Currently selected tool. At present, Tool exposes only an `id` field; future releases are intended to give tools dedicated classes. |
| displayDialogs | [_DialogModes_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#dialogmodes) | R W | 23.0 | Application dialog mode, controlling which dialog types may appear while code interacts with Photoshop. |
| documents | [_Documents_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/documents.md) | R | 23.0 | Documents that are open right now. |
| fonts | [_TextFonts_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/textfonts.md) | R | 23.0 | Fonts available on this system. |
| foregroundColor | [_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) | R W | 23.0 | Foreground color used for painting, fills, and stroked selections. [(24.2)](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/changelog/index.md#other-fixes) |
| preferences | [_Preferences_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/preferences.md) | R | 24.0 | Photoshop preference groups organized into categories resembling the Preferences dialog. |
| typename | _string_ | R | 23.0 | Referenced object class name: _"Photoshop"_. |

### Methods
