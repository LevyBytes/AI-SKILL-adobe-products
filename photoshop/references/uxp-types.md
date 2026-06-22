# Applyimagetypes, Calculationstypes, Generaltypes, Layercomptypes ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: types/ApplyImageTypes — Interfaces; types/CalculationsTypes — Interfaces; types/GeneralTypes — Interfaces; types/LayerCompTypes — Interfaces; types/LayerTypes — Interfaces; types/TextTypes — Interfaces.

## types/ApplyImageTypes — Interfaces

- [ApplyImageOptions](https://raw.githubusercontent.com/ps-reference/objects/options/applyimageoptions.md)
- [ApplyImageSource](https://raw.githubusercontent.com/ps-reference/objects/options/applyimagesource.md)

### types/ApplyImageTypes — Type aliases

### ApplyImageChannelType

Ƭ **ApplyImageChannelType**: ComponentChannel \| AlphaChannel \| [_RGB_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#rgb) \| [_CMYK_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#cmyk) \| [_LAB_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#lab) \| [_SELECTION_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#selection) \| [_TRANSPARENCY_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#transparency)

Channel choice type used by [ApplyImageSource](https://raw.githubusercontent.com/ps-reference/objects/options/applyimagesource.md)

### ApplyImageLayerType

Ƭ **ApplyImageLayerType**: [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md) \| [_MERGED_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#merged)

Layer choice type used by [ApplyImageSource](https://raw.githubusercontent.com/ps-reference/objects/options/applyimagesource.md).
Use [ApplyImageLayer.MERGED](uxp-constants.md) when the source should come from document pixels after merging or flattening.

## types/CalculationsTypes — Interfaces

- [CalculationsOptions](https://raw.githubusercontent.com/ps-reference/objects/options/calculationsoptions.md)
- [CalculationsSource](https://raw.githubusercontent.com/ps-reference/objects/options/calculationssource.md)

### types/CalculationsTypes — Type aliases

### CalculationsChannelType

Ƭ **CalculationsChannelType**: ComponentChannel \| AlphaChannel \| [_GRAY_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#gray) \| [_TRANSPARENCY_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#transparency) \| [_SELECTION_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#selection)

Channel choice type used by [CalculationsSource](https://raw.githubusercontent.com/ps-reference/objects/options/calculationssource.md)

## types/GeneralTypes — Interfaces

- [Dimensions](https://raw.githubusercontent.com/ps-reference/objects/returnobjects/dimensions.md)
- [Position](https://raw.githubusercontent.com/ps-reference/objects/options/position.md)
- [SimpleBounds](https://raw.githubusercontent.com/ps-reference/objects/returnobjects/simplebounds.md)

## types/LayerCompTypes — Interfaces

- [LayerCompCreateOptions](https://raw.githubusercontent.com/ps-reference/objects/createoptions/layercompcreateoptions.md)
- [LayerCompRecaptureOptions](https://raw.githubusercontent.com/ps-reference/objects/options/layercomprecaptureoptions.md)

## types/LayerTypes — Interfaces

- [GroupLayerCreateOptions](https://raw.githubusercontent.com/ps-reference/objects/createoptions/grouplayercreateoptions.md)
- [PixelLayerCreateOptions](https://raw.githubusercontent.com/ps-reference/objects/createoptions/pixellayercreateoptions.md)
- [TextLayerCreateOptions](https://raw.githubusercontent.com/ps-reference/objects/createoptions/textlayercreateoptions.md)

### types/LayerTypes — Type aliases

### LayerCreateOptions

Ƭ **LayerCreateOptions**: [_PixelLayerCreateOptions_](https://raw.githubusercontent.com/ps-reference/objects/createoptions/pixellayercreateoptions.md) \| [_GroupLayerCreateOptions_](https://raw.githubusercontent.com/ps-reference/objects/createoptions/grouplayercreateoptions.md) \| [_TextLayerCreateOptions_](https://raw.githubusercontent.com/ps-reference/objects/createoptions/textlayercreateoptions.md)

[Document.createLayer](https://raw.githubusercontent.com/ps-reference/classes/document.md#createlayer) accepts these option forms:

- PixelLayerCreateOptions
- GroupLayerCreateOptions

## types/TextTypes — Interfaces

- [HyphenationProperties](https://raw.githubusercontent.com/ps-reference/objects/options/hyphenationproperties.md)
- [JustificationProperties](https://raw.githubusercontent.com/ps-reference/objects/options/justificationproperties.md)
