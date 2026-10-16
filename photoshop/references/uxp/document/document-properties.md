# Document properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| activeChannels | [_Channel_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/channel.md)[] | R W | 23.0 | Document channels that are active right now. [(24.6)](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/changelog/index.md#246-bug-fixes) |
| activeHistoryBrushSource | [_HistoryState_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/historystate.md) | R W | 22.5 | Source history state used by the history brush tool. |
| activeHistoryState | [_HistoryState_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/historystate.md) | R W | 22.5 | History state currently selected for the document. |
| activeLayers | [_Layers_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layers.md) | R W | 22.5 | Layers selected in the document. [(26.9)](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/changelog/index.md#photoshop-269-july-2025) |
| artboards | [_Layers_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layers.md) | R | 22.5 | Artboard layers contained in the document. |
| backgroundLayer | [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md) | R | 22.5 | Background layer, when one is present. |
| bitsPerChannel | [_BitsPerChannelType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#bitsperchanneltype) | R W | 23.0 | Bit depth for each color channel. |
| channels | [_Channels_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/channels.md) | R | 23.0 | Complete set of channels in the document. |
| cloudDocument | _boolean_ | R | 23.0 | Boolean test for a [Photoshop cloud document](https://helpx.adobe.com/photoshop/using/cloud-documents-faq.html). |
| cloudWorkAreaDirectory | _string_ | R | 23.0 | Local folder associated with this cloud document. |
| colorProfileName | _string_ | R W | 23.0 | Color profile name. Applies only when [colorProfileType](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#colorprofiletype) is `CUSTOM` or `WORKING`; otherwise it returns "None". |
| colorProfileType | [_ColorProfileType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#colorprofiletype) | R W | 23.0 | Indicates whether the document has the working profile, a custom profile, or no profile. |
| colorSamplers | [_ColorSamplers_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/colorsamplers.md) | R | 24.0 | ColorSamplers collection available in the document. |
| componentChannels | [_Channel_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/channel.md)[] | R | 24.5 | Component channels for the document. [(24.6)](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/changelog/index.md#246-bug-fixes) |
| ~~compositeChannels~~ | [_Channel_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/channel.md)[] | R | 23.0 | Deprecated because these are component channels rather than composite channels. Use `componentChannels` instead. |
| countItems | [_CountItems_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/countitems.md) | R | 24.1 | CountItems collection available in the document. |
| guides | [_Guides_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/guides.md) | R | 23.0 | Guides collection available in the document. |
| height | _number_ | R | 22.5 | Document height, in pixels. |
| histogram | _number_[] | R | 23.0 | Histogram with the pixel count for each color intensity level in the component channel. Array length is 256; applies only when [mode](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#mode) = `DocumentMode.\{RGB,CMYK,INDEXEDCOLOR}` |
| historyStates | [_HistoryStates_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/historystates.md) | R | 22.5 | Document history-state collection. |
| id | _number_ | R | 22.5 | Internal document ID, valid while this document remains open, and usable in batchPlay calls that target this document. |
| layerComps | [_LayerComps_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layercomps.md) | R | 24.0 | Layer comps available in the document. |
| layers | [_Layers_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layers.md) | R | 22.5 | Top-level layers in the layer/group hierarchy of the document. |
| mode | [_DocumentMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#documentmode) | R | 23.0 | Current color mode. To modify it, use [Document.changeMode](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#changemode). |
| name | _string_ | R | 23.0 | Document name. |
| path | _string_ | R | 22.5 | Full file-system path for this document, or the identifier for a cloud document. |
| pathItems | [_PathItems_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitems.md) | R | 23.3 | Paths collection for this document, matching what appears in the Paths panel. |
| pixelAspectRatio | _number_ | R W | 22.5 | Custom pixel aspect ratio to apply. |
| quickMaskMode | _boolean_ | R W | 23.0 | Quick Mask mode state; true indicates Quick Mask mode is active. |
| resolution | _number_ | R | 22.5 | Document resolution, in pixels per inch. |
| saved | _boolean_ | R | 23.0 | True after the document has been saved following the most recent change. |
| title | _string_ | R | 22.5 | Document title. |
| typename | _string_ | R | 23.0 | Referenced object class name: _"Document"_. |
| width | _number_ | R | 22.5 | Document width, in pixels. |
| zoom | _number_ | R | 25.1 | Document zoom factor, as a percent. |

## Methods
