# Document (part 1)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Represents one Photoshop document that is open.
Document instances are reachable through these approaches:

```javascript
const { app, constants } = require("photoshop");

// The currently active document from the Photoshop object
const currentDocument = app.activeDocument;

// Choose one of the open documents from the Photoshop object
const secondDocument = app.documents[1];

// You can also create an instance of a document via a UXP File entry
let fileEntry = require("uxp").storage.localFileSystem.getFileForOpening();
const newDocument = await app.open("/project.psd");
```

## Properties

### saveAs

â€¢ **saveAs**: _object_

Writes the document in the requested file format.

When a workflow needs a UXP File token, generate it through
[UXP storage APIs](https://www.adobe.com/go/ps-api-uxp-filesystemprovider).

```javascript
let entry = await require("uxp").storage.localFileSystem.getFileForSaving("target.psd");
document.saveAs.psd(entry);

// Save as a Copy (High JPG quality)
document.saveAs.jpg(entryJpg, { quality: 12 }, true);

// Save a PSB, with some options:
document.saveAs.psb(entryPsb, { embedColorProfile: true });
```

### Type declaration

| Name | Type |
| --- | --- |
| `bmp` | (`entry`: File, `saveOptions?`: [_BMPSaveOptions_](https://raw.githubusercontent.com/ps-reference/objects/saveoptions/bmpsaveoptions.md), `asCopy`: _boolean_) => _Promise_`<void>` |
| `gif` | (`entry`: File, `saveOptions?`: [_GIFSaveOptions_](https://raw.githubusercontent.com/ps-reference/objects/saveoptions/gifsaveoptions.md), `asCopy`: _boolean_) => _Promise_`<void>` |
| `jpg` | (`entry`: File, `saveOptions?`: [_JPEGSaveOptions_](https://raw.githubusercontent.com/ps-reference/objects/saveoptions/jpegsaveoptions.md), `asCopy`: _boolean_) => _Promise_`<void>` |
| `png` | (`entry`: File, `saveOptions?`: [_PNGSaveOptions_](https://raw.githubusercontent.com/ps-reference/objects/saveoptions/pngsaveoptions.md), `asCopy`: _boolean_) => _Promise_`<void>` |
| `psb` | (`entry`: File, `saveOptions?`: [_PhotoshopSaveOptions_](https://raw.githubusercontent.com/ps-reference/objects/saveoptions/photoshopsaveoptions.md), `asCopy`: _boolean_) => _Promise_`<void>` |
| `psd` | (`entry`: File, `saveOptions?`: [_PhotoshopSaveOptions_](https://raw.githubusercontent.com/ps-reference/objects/saveoptions/photoshopsaveoptions.md), `asCopy`: _boolean_) => _Promise_`<void>` |

### selection

â€¢ `Readonly` **selection**: [_Selection_](https://raw.githubusercontent.com/ps-reference/classes/selection.md)

Container for the document's active selection.

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| activeChannels | [_Channel_](https://raw.githubusercontent.com/ps-reference/classes/channel.md)[] | R W | 23.0 | Document channels that are active right now. [(24.6)](https://raw.githubusercontent.com/ps-reference/changelog/index.md#246-bug-fixes) |
| activeHistoryBrushSource | [_HistoryState_](https://raw.githubusercontent.com/ps-reference/classes/historystate.md) | R W | 22.5 | Source history state used by the history brush tool. |
| activeHistoryState | [_HistoryState_](https://raw.githubusercontent.com/ps-reference/classes/historystate.md) | R W | 22.5 | History state currently selected for the document. |
| activeLayers | [_Layers_](https://raw.githubusercontent.com/ps-reference/classes/layers.md) | R W | 22.5 | Layers selected in the document. [(26.9)](https://raw.githubusercontent.com/ps-reference/changelog/index.md#photoshop-269-july-2025) |
| artboards | [_Layers_](https://raw.githubusercontent.com/ps-reference/classes/layers.md) | R | 22.5 | Artboard layers contained in the document. |
| backgroundLayer | [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md) | R | 22.5 | Background layer, when one is present. |
| bitsPerChannel | [_BitsPerChannelType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#bitsperchanneltype) | R W | 23.0 | Bit depth for each color channel. |
| channels | [_Channels_](https://raw.githubusercontent.com/ps-reference/classes/channels.md) | R | 23.0 | Complete set of channels in the document. |
| cloudDocument | _boolean_ | R | 23.0 | Boolean test for a [Photoshop cloud document](https://helpx.adobe.com/photoshop/using/cloud-documents-faq.html). |
| cloudWorkAreaDirectory | _string_ | R | 23.0 | Local folder associated with this cloud document. |
| colorProfileName | _string_ | R W | 23.0 | Color profile name. Applies only when [colorProfileType](https://raw.githubusercontent.com/ps-reference/classes/document.md#colorprofiletype) is `CUSTOM` or `WORKING`; otherwise it returns "None". |
| colorProfileType | [_ColorProfileType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#colorprofiletype) | R W | 23.0 | Indicates whether the document has the working profile, a custom profile, or no profile. |
| colorSamplers | [_ColorSamplers_](https://raw.githubusercontent.com/ps-reference/classes/colorsamplers.md) | R | 24.0 | ColorSamplers collection available in the document. |
| componentChannels | [_Channel_](https://raw.githubusercontent.com/ps-reference/classes/channel.md)[] | R | 24.5 | Component channels for the document. [(24.6)](https://raw.githubusercontent.com/ps-reference/changelog/index.md#246-bug-fixes) |
| ~~compositeChannels~~ | [_Channel_](https://raw.githubusercontent.com/ps-reference/classes/channel.md)[] | R | 23.0 | Deprecated because these are component channels rather than composite channels. Use `compositeChannels` above. |
| countItems | [_CountItems_](https://raw.githubusercontent.com/ps-reference/classes/countitems.md) | R | 24.1 | CountItems collection available in the document. |
| guides | [_Guides_](https://raw.githubusercontent.com/ps-reference/classes/guides.md) | R | 23.0 | Guides collection available in the document. |
| height | _number_ | R | 22.5 | Document height, in pixels. |
| histogram | _number_[] | R | 23.0 | Histogram with the pixel count for each color intensity level in the component channel. Array length is 256; applies only when [mode](https://raw.githubusercontent.com/ps-reference/classes/document.md#mode) = `DocumentMode.\{RGB,CMYK,INDEXEDCOLOR}` |
| historyStates | [_HistoryStates_](https://raw.githubusercontent.com/ps-reference/classes/historystates.md) | R | 22.5 | Document history-state collection. |
| id | _number_ | R | 22.5 | Internal document ID, valid while this document remains open, and usable in batchPlay calls that target this document. |
| layerComps | [_LayerComps_](https://raw.githubusercontent.com/ps-reference/classes/layercomps.md) | R | 24.0 | Layer comps available in the document. |
| layers | [_Layers_](https://raw.githubusercontent.com/ps-reference/classes/layers.md) | R | 22.5 | Top-level layers in the layer/group hierarchy of the document. |
| mode | [_DocumentMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#documentmode) | R | 23.0 | Current color mode. To modify it, use [Document.changeMode](https://raw.githubusercontent.com/ps-reference/classes/document.md#changemode). |
| name | _string_ | R | 23.0 | Document name. |
| path | _string_ | R | 22.5 | Full file-system path for this document, or the identifier for a cloud document. |
| pathItems | [_PathItems_](https://raw.githubusercontent.com/ps-reference/classes/pathitems.md) | R | 23.3 | Paths collection for this document, matching what appears in the Paths panel. |
| pixelAspectRatio | _number_ | R W | 22.5 | Custom pixel aspect ratio to apply. |
| quickMaskMode | _boolean_ | R W | 23.0 | Quick Mask mode state; true indicates Quick Mask mode is active. |
| resolution | _number_ | R | 22.5 | Document resolution, in pixels per inch. |
| saved | _boolean_ | R | 23.0 | True after the document has been saved following the most recent change. |
| title | _string_ | R | 22.5 | Document title. |
| typename | _string_ | R | 23.0 | Referenced object class name: _"Document"_. |
| width | _number_ | R | 22.5 | Document width, in pixels. |
| zoom | _number_ | R | 25.1 | Document zoom factor, as a percent. |

## Methods

### calculations

24.5

**async** : _Promise_<void \| [_Channel_](https://raw.githubusercontent.com/ps-reference/classes/channel.md) \| [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md)>

With the Calculations command, source channels can be blended across one or more images. The blended output can target a new image, a new channel, or a selection in the active image.

Runs Image > Calculations on the document. For more information and examples, see the [CalculationsOptions](https://raw.githubusercontent.com/ps-reference/objects/options/calculationsoptions.md)
object.

```javascript
const doc = app.activeDocument;
const options = {
    source1: {
        document: doc,
        layer: doc.layers[0],
        channel: constants.CalculationsChannel.GRAY
        invert: true
    },
    source2: {
        document: doc,
        layer: constants.CalculationsLayer.MERGED,
        channel: doc.channels[2]
    },
    blending: constants.CalculationsBlendMode.DARKEN,
    opacity: 50,
    result: constants.CalculationsResult.NEWCHANNEL
};
doc.calculations(options);

```

Known issue: calculations currently works only when exactly one unlocked pixel layer is selected.
Later versions should remove layer requirements because this operation cannot output into a layer.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `calculationsOptions` | [_CalculationsOptions_](https://raw.githubusercontent.com/ps-reference/objects/options/calculationsoptions.md) | Options object supplied to calculations. |

### changeMode

23.0

**async** : _Promise_`<void>`

Updates the document color mode.

### Parameters

| Name | Type |
| --- | --- |
| `mode` | [_ChangeMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#changemode) |
| `options?` | [_BitmapConversionOptions_](https://raw.githubusercontent.com/ps-reference/objects/conversionoptions/bitmapconversionoptions.md) \| [_IndexedConversionOptions_](https://raw.githubusercontent.com/ps-reference/objects/conversionoptions/indexedconversionoptions.md) |

### close

22.5

**async** : _Promise_`<void>`

Closes the document and, when requested, shows a prompt for unsaved changes.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `saveDialogOptions` | [_SaveOptions_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#saveoptions) | Default behavior is to show a save dialog when unsaved edits exist. |

### closeWithoutSaving

22.5

_void_

Closes the document and throws away unsaved edits.

### convertProfile

23.0

**async** : _Promise_`<void>`

Updates the color profile.

`destinationProfile` accepts either a string naming a color mode,
or one of the following working color-space or Lab values.

`"Working RGB", "Working CMYK", "Working Gray", "Lab Color"`

### Parameters

| Name | Type |
| --- | --- |
| `destinationProfile` | _string_ |
| `intent` | [_Intent_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#intent) |
| `blackPointCompensation?` | _boolean_ |
| `dither?` | _boolean_ |

### createLayer

23.0

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)>

This is the general entry point for the kind-specific methods below; those methods provide additional detail.

Creates a layer of the requested kind. With no arguments, a pixel layer is created.
The options object carries properties tied to that kind,
although every layer also uses a shared base property set.
The override signatures below act as type guardrails so
the supplied options match the requested kind.

```javascript
await doc.createLayer(); // defaults to pixel layer

await doc.createLayer(
  constants.LayerKind.NORMAL, // pixel layer
  { name: "myLayer", opacity: 80, blendMode: constants.BlendMode.COLORDODGE },
);
```

_Promise_<[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)>

### Parameters

| Name | Type |
| --- | --- |
| `kind?` | [_LayerKind.NORMAL_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#layerkind) |
| `options?` | [_PixelLayerCreateOptions_](https://raw.githubusercontent.com/ps-reference/objects/createoptions/pixellayercreateoptions.md) |

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)>

Builds a group layer.

```javascript
await doc.createLayer(constants.LayerKind.GROUP, { name: "myLayer", opacity: 80 });
```

### Parameters

| Name | Type |
| --- | --- |
| `kind` | [_LayerKind.GROUP_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#layerkind) |
| `options?` | [_GroupLayerCreateOptions_](https://raw.githubusercontent.com/ps-reference/objects/createoptions/grouplayercreateoptions.md) |

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)>

Builds text content as a layer.

```javascript
await doc.createLayer(Constants.LayerKind.TEXT, { name: "message", contents: "Hello World" });
```

### Parameters

| Name | Type |
| --- | --- |
| `kind` | [_LayerKind.TEXT_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#layerkind) |
| `options?` | [_TextLayerCreateOptions_](https://raw.githubusercontent.com/ps-reference/objects/createoptions/textlayercreateoptions.md) |

### createLayerGroup

23.0

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)>

Uses [GroupLayerCreateOptions](https://raw.githubusercontent.com/ps-reference/objects/createoptions/grouplayercreateoptions.md) options to build a layer group.

```javascript
const myEmptyGroup = await doc.createLayerGroup();
const myGroup = await doc.createLayerGroup({
  name: "myLayer",
  opacity: 80,
  blendMode: "colorDodge",
});
const nonEmptyGroup = await doc.createLayerGroup({
  name: "group",
  fromLayers: [layer1, layer2],
});
const selectedGroup = await doc.createLayerGroup({
  name: "group",
  fromLayers: doc.activeLayers,
});
```

### Parameters

| Name | Type |
| --- | --- |
| `options?` | [_GroupLayerCreateOptions_](https://raw.githubusercontent.com/ps-reference/objects/createoptions/grouplayercreateoptions.md) |

### createPixelLayer

24.1

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)>

Uses [PixelLayerCreateOptions](https://raw.githubusercontent.com/ps-reference/objects/createoptions/pixellayercreateoptions.md) options to build a pixel layer.

```javascript
await doc.createPixelLayer({
  name: "myLayer",
  opacity: 80,
  fillNeutral: true,
});
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options?` | [_PixelLayerCreateOptions_](https://raw.githubusercontent.com/ps-reference/objects/createoptions/pixellayercreateoptions.md) | Creation options, including general layer settings and kind-specific settings. |

### createTextLayer

24.2

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)>

Uses [TextLayerCreateOptions](https://raw.githubusercontent.com/ps-reference/objects/createoptions/textlayercreateoptions.md) options to build a text layer.

```javascript
await doc.createTextLayer();
await doc.createTextLayer({
  name: "myTextLayer",
  contents: "Hello, World!",
  fontSize: 32,
});
```

### Parameters

| Name | Type |
| --- | --- |
| `options?` | [_TextLayerCreateOptions_](https://raw.githubusercontent.com/ps-reference/objects/createoptions/textlayercreateoptions.md) |

### crop

23.0

**async** : _Promise_`<void>`

Crops the document to the supplied bounds.

### Parameters

| Name | Type | Default value |
| --- | --- | --- |
| `bounds` | [_Bounds_](https://raw.githubusercontent.com/ps-reference/objects/bounds.md) | - |
| `angle` | _number_ | 0 |
| `width` | _number_ | 0 |
| `height` | _number_ | 0 |

### duplicate

23.0

_Promise_<[*Document*](https://raw.githubusercontent.com/ps-reference/classes/document.md)>

Makes a duplicate document and switches the active document to that duplicate.

The optional parameter `name` supplies the duplicated document name.

The optional parameter `mergeLayersOnly` controls whether only merged layers are duplicated.

### Parameters

| Name | Type |
| --- | --- |
| `name?` | _string_ |
| `mergeLayersOnly?` | _boolean_ |

### duplicateLayers

23.0

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)[]>

Copies the supplied layer(s), places the new copies above the uppermost one in the layer stack,
and returns the layers that were created.

```javascript
// duplicate some layers
const layerCopies = await document.duplicateLayers([layer1, layer3]);
layerCopies.forEach((layer) => {
  layer.blendMode = "multiply";
});
// ...to another document
const finalDoc = await photoshop.open("~/path/to/collated/image.psd");
await document.duplicateLayers([logo1, textLayer1], finalDoc);
await finalDoc.close(SaveOptions.SAVECHANGES);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `layers` | [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md)[] | Array of layers to duplicate. |
| `targetDocument?` | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | When specified, places the duplicates in another document. |

### flatten

22.5

**async** : _Promise_`<void>`

Flattens every document layer. The lone resulting layer becomes Background.

### generativeUpscale

27.2

**async** : _Promise_<[*Document*](https://raw.githubusercontent.com/ps-reference/classes/document.md)>

Runs AI-powered generative upscaling on the currently selected layer(s).

```javascript
// Upscale using Firefly model with default options (2x scale)
await document.generativeUpscale(constants.GenerativeUpscaleModel.FIREFLY);

// Upscale using Firefly model with 4x scale
const doc4x = await document.generativeUpscale(constants.GenerativeUpscaleModel.FIREFLY, {
  scale: 4,
});
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `model` | [_GenerativeUpscaleModel.FIREFLY_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#generativeupscalemodel) | Generative upscale model to apply. |
| `options?` | [_GenerativeUpscaleOptions_](https://raw.githubusercontent.com/ps-reference/objects/generativeoptions/generativeupscaleoptions.md) | Model-specific options, such as `scale`. |

### groupLayers

23.0

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)>

Builds a group out of existing layers.

```javascript
const layers = doc.layers;
const group = await doc.groupLayers([layers[1], layers[2], layers[4]]);
```

### Parameters

| Name | Type |
| --- | --- |
| `layers` | [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md)[] |

### linkLayers

23.0

[_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md)[]

Links the layers when possible and returns the linked-layer list.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `layers` | [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md)[] | Array of layers to link. |

### mergeVisibleLayers

23.0

**async** : _Promise_`<void>`

Combines all visible document layers into one layer.
Unlike [flatten](https://raw.githubusercontent.com/ps-reference/classes/document.md#flatten), `mergeVisibleLayers` does not turn the resulting layer
into Background when no Background exists already. If the result is not Background, the merged layer
takes its name from the top selected layer, or from the topmost layer.

### paste

23.0

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)>
