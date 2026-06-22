# Bounds, Conversionoptions, Coremodulesobjects, Createoptions ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Bounds; Bitmap Conversion Options; Conversion Options; Indexed Conversion Options; Core Modules Options; DocumentCreateOptions; GroupLayerCreateOptions; Create Options; LayerCompCreateOptions; PixelLayerCreateOptions; TextLayerCreateOptions; GenerativeUpscaleOptions; Generative Options; Objects.

## Bounds

Represents a rectangle through the properties: left, right, top, and bottom.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| bottom | _number_ | R W | 22.5 | Bottom-edge coordinate. |
| height | _number_ | R | 22.5 | Height computed from the bounds. |
| left | _number_ | R W | 22.5 | Left-edge coordinate. |
| right | _number_ | R W | 22.5 | Right-edge coordinate. |
| top | _number_ | R W | 22.5 | Top-edge coordinate. |
| typename | _string_ | R | 22.5 | Class name for the referenced object: _"Bounds"_. |
| width | _number_ | R | 22.5 | Width computed from the bounds. |

## Bitmap Conversion Options

Use these options when [Document.changeMode](https://raw.githubusercontent.com/ps-reference/classes/document.md#changemode) converts an image to bitmap mode with `ChangeMode.BITMAP`.

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| angle | _number_ | R W | - | -180...180 | 23.0 | Dot orientation angle, in degrees. See shape property below. Applies only for method = `BitmapConversionType.HALFTONESCREEN`. |
| frequency | _number_ | R W | - | 1.0..999.99 | 23.0 | Dots per inch to use. Applies only for method = `BitmapConversionType.HALFTONESCREEN`. |
| method | [_BitmapConversionType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#bitmapconversiontype) | R W | DIFFUSIONDITHER | - | 23.0 | Conversion method. |
| patternName | _string_ | R W |  | - | 23.0 | Pattern name to use. Applies only for method = BitmapConversionType.CUSTOMPATTERN. |
| resolution | _number_ | R W | 72 | - | 23.0 | Pixels-per-inch output resolution. |
| shape | [_BitmapHalfToneType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#bitmaphalftonetype) | R W | - | - | 23.0 | Dot shape. Applies only for method = BitmapConversionType.HALFTONESCREEN. |
| typename | _string_ | R | - | - | 23.0 | Class name for the referenced object: _"BitmapConversionOptions"_. |

## Conversion Options

Conversion-option objects for [Document.changeMode](https://raw.githubusercontent.com/ps-reference/classes/document.md#changemode).

## Indexed Conversion Options

Options used by [Document.changeMode](https://raw.githubusercontent.com/ps-reference/classes/document.md#changemode) when converting an RGB image to an indexed color model

### Properties

| Name | Type | Access | Default | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| colors | _number_ | R W | - | 23.0 | Number of colors in the palette. Palette types that allow this field are: LOCALADAPTIVE, LOCALPERCEPTUAL, LOCALSELECTIVE, MACOSPALETTE, UNIFORM, WEBPALETTE, or WINDOWSPALETTE. |
| dither | [_Dither_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#dither) | R W | - | 23.0 | Dithering method. |
| ditherAmount | _number_ | R W | - | 23.0 | Dither strength. Applies only for dither = DIFFUSION. |
| forced | [_ForcedColors_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#forcedcolors) | R W | - | 23.0 | Colors forced into the palette. |
| matte | [_MatteColor_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#mattecolor) | R W | WHITE | 23.0 | Color for filling anti-aliased edges bordering transparent image areas. If transparency equals false, this matte color fills those pixels. |
| palette | [_Palette_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#palette) | R W | - | 23.0 | Palette type. |
| preserveExactColors | _boolean_ | R W | - | 23.0 | When true, colors matching entries in the image color table are not dithered. |
| transparency | _boolean_ | R W | - | 23.0 | When true, transparent image areas are kept during conversion to GIF format. |
| typename | _string_ | R | - | 23.0 | Class name for the referenced object: _"IndexedConversionOptions"_. |

## Core Modules Options

Objects describing arguments and returned values used by [core](https://raw.githubusercontent.com/ps-reference/media/photoshopcore.md) functions.

## DocumentCreateOptions

Create documents by passing an object literal with any of the properties below to [Photoshop.createDocument](https://raw.githubusercontent.com/ps-reference/classes/photoshop.md#createdocument).
For Typescript development, `DocumentCreateOptions` is available as a type.

```javascript
const options = { name: "Web mockup", preset: "Web Large" };
require("photoshop").app.createDocument(options);
```

| Name | Type | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| depth | _number_ | 8 | [8,16,32] | 22.5 | Document bit depth. |
| fill | [_DocumentFill_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#documentfill) | - | - | 22.5 | Document fill color. |
| fillColor | [_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) | - | - | 23.0 | Custom document fill color. |
| height | _number_ | - | - | 22.5 | Height, in pixels. |
| mode | [_NewDocumentMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#newdocumentmode) | - | - | 22.5 | ImageMode value. |
| name | _string_ | - | - | 22.5 | Document name. |
| pixelScaleFactor | _number_ | - | - | 22.5 | Scale factor for pixels. |
| preset | _string_ | - | - | 22.5 | Preset. |
| presetJSON | _string_ | - | - | 22.5 | JSON preset supplied as a JSONified string. |
| profile | _string_ | - | - | 22.5 | Color profile selected by profile name. |
| resolution | _number_ | - | - | 22.5 | Image resolution. |
| width | _number_ | - | - | 22.5 | Width, in pixels. |

## GroupLayerCreateOptions

To create a layer group, pass an object literal containing any property listed below to [Document.createLayerGroup](https://raw.githubusercontent.com/ps-reference/classes/document.md#createlayergroup).
For Typescript development, `GroupLayerCreateOptions` is available as a type.

```javascript
const options = { name: "myGroup", opacity: 50 };
await require("photoshop").app.activeDocument.createLayerGroup(options);
```

| Name | Type | Default | Min Version | Description |
| --- | --- | --- | --- | --- |
| blendMode | [_BlendMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#blendmode) | NORMAL | 22.5 | Resulting item's blend mode. |
| color | [_LabelColors_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#labelcolors) | NONE | 22.5 | Resulting item's label color. |
| fromLayers | [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md) \| [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md)[] | - | 22.5 | Layer or layer list used to populate the group. |
| group | _boolean_ | false | 22.5 | Set true to make a clipping mask from the preceding layer. |
| ~~mode~~ | [_BlendMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#blendmode) | NORMAL | 22.5 | Deprecated; prefer `blendMode` above because that setting takes precedence. |
| name | _string_ | - | 22.5 | Layer group name. When omitted, Photoshop generates one using the template, "Group #". |
| opacity | _number_ | 100 | 22.5 | Resulting item's opacity. |

## Create Options

Creation option objects are available for:

- [Photoshop.createDocument](https://raw.githubusercontent.com/ps-reference/classes/photoshop.md#createdocument)
- [Document.createLayer](https://raw.githubusercontent.com/ps-reference/classes/document.md#createlayer)
- [Document.createLayerGroup](https://raw.githubusercontent.com/ps-reference/classes/document.md#createlayergroup)

## LayerCompCreateOptions

Supply an object literal with any of the properties below to [LayerComps.add](https://raw.githubusercontent.com/ps-reference/classes/layercomps.md#add).
For Typescript development, `LayerCompCreateOptions` is available as a type.

```javascript
const options = { name: "mockup", comment: "First attempt", visibility: true };
await require("photoshop").app.activeDocument.layerComps.add(options);
```

| Name | Type | Default | Min Version | Description |
| --- | --- | --- | --- | --- |
| appearance | _boolean_ | false | 24.0 | Captures the layers' effects state. |
| childComp | _boolean_ | false | 24.0 | Records Layer Comps found within Smart Objects on recorded layers. |
| comment | _string_ | null | 24.0 | Comment shown in the Layer Comp Options dialog. |
| name | _string_ | - | 24.0 | Name displayed in the Layer Comps panel. When omitted, Photoshop generates one from the template, "Layer Comp #". |
| position | _boolean_ | true | 24.0 | Records layer position state. |
| visibility | _boolean_ | false | 24.0 | Records layer visibility state. |

## PixelLayerCreateOptions

Create a pixel layer by passing an object literal with any property listed below to [Document.createLayer](https://raw.githubusercontent.com/ps-reference/classes/document.md#createlayer).
For Typescript development, `PixelLayerCreateOptions` is available as a type.

```javascript
const options = { name: "myLayer", opacity: 80, blendMode: constants.BlendMode.COLORDODGE };
await require("photoshop").app.activeDocument.createLayer(options);
```

| Name | Type | Default | Min Version | Description |
| --- | --- | --- | --- | --- |
| blendMode | [_BlendMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#blendmode) | NORMAL | 22.5 | Resulting item's blend mode. |
| color | [_LabelColors_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#labelcolors) | NONE | 22.5 | Resulting item's label color. |
| fillNeutral | _boolean_ | false | 22.5 | Whether Photoshop fills the layer with a neutral color while applying Blend Mode. |
| group | _boolean_ | false | 22.5 | Set true to make a clipping mask from the preceding layer. |
| ~~mode~~ | [_BlendMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#blendmode) | NORMAL | 22.5 | Deprecated; prefer `blendMode` above because that setting takes precedence. |
| name | _string_ | - | 22.5 | Layer name. When omitted, Photoshop generates one using the template, "Layer #". |
| opacity | _number_ | 100 | 22.5 | Resulting item's opacity. |

## TextLayerCreateOptions

Create a text layer by passing an object literal with any property listed below to [Document.createTextLayer](https://raw.githubusercontent.com/ps-reference/classes/document.md#createtextlayer).
For Typescript development, `TextLayerCreateOptions` is available as a type.

Note: With the `position` option, the text layer's top-left corner depends on the properties in use.
A Text Tool click establishes the layer's bottom-left corner.
The `position` value here uses that bottom-left point.
Supplying `{x: 0, y: 0`}` will probably place the new layer just above y of 0, so it may not show "on the canvas".
That behavior is why Photoshop defaults the position to the document center.

```javascript
const options = {
  name: "myTextLayer",
  contents: "Hello, World!",
  fontSize: 24,
  position: { x: 200, y: 300 },
};
await require("photoshop").app.activeDocument.createTextLayer(options);
```

| Name | Type | Default | Min Version | Description |
| --- | --- | --- | --- | --- |
| blendMode | [_BlendMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#blendmode) | NORMAL | 22.5 | Resulting item's blend mode. |
| color | [_LabelColors_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#labelcolors) | NONE | 22.5 | Resulting item's label color. |
| contents | _string_ | "Lorem Ipsum" | 24.2 | Initial string placed in the text layer. |
| fontName | _string_ | "MyriadPro-Regular" | 24.2 | PostScript font name used by the text layer. |
| fontSize | _number_ | 12px | 24.2 | Text layer font size, in pixels. |
| group | _boolean_ | false | 22.5 | Set true to make a clipping mask from the preceding layer. |
| ~~mode~~ | [_BlendMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#blendmode) | NORMAL | 22.5 | Deprecated; prefer `blendMode` above because that setting takes precedence. |
| name | _string_ | - | 22.5 | Layer name. When omitted, Photoshop generates one using the template, "Layer #". |
| opacity | _number_ | 100 | 22.5 | Resulting item's opacity. |
| position | [_Position_](https://raw.githubusercontent.com/ps-reference/objects/options/position.md) | document center | 24.2 | Text-layer insertion coordinates, in pixels |
| textColor | [_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) | black | 24.2 | Color assigned to the text layer. |

## GenerativeUpscaleOptions

Options accepted by [Document.generativeUpscale](https://raw.githubusercontent.com/ps-reference/classes/document.md#generativeupscale)().
Model support varies; currently Firefly supports only scale.

| Name | Type | Min Version | Description |
| --- | --- | --- | --- |
| scale | _number_ | 27.2 | Upscale factor. Must be 2 or 4. |

## Generative Options

Generative/AI feature option objects include:

- [Document.generativeUpscale(model, options)](https://raw.githubusercontent.com/ps-reference/classes/document.md#generativeupscale)

## Objects

DOM methods expect these objects to be created as object literals.
In TypeScript development, they may also be used as types.
