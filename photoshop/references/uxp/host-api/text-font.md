# Text Font

Represents a font available to Photoshop; [Photoshop.fonts](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/photoshop.md#fonts) exposes these objects.

```javascript
const arialMTFont = require("photoshop").app.fonts.getByName("ArialMT");
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| family | _string_ | R | 23.0 | Font family. |
| name | _string_ | R | 23.0 | Font name. |
| parent | [_Photoshop_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/photoshop.md) | R | 23.0 | Containing application. |
| postScriptName | _string_ | R | 23.0 | Font's PostScript name. |
| style | _string_ | R | 23.0 | Font style. |
| typename | _string_ | R | 23.0 | Class name for the referenced object: _"TextFont"_. |
