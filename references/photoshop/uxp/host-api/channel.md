# Channel

A Photoshop document exposes each channel through this `Channel` model.
Retrieve channel instances from these document properties or collection lookups:

```javascript
// An array of component channels in the document
const componentChannels = app.activeDocument.componentChannels;

// An array of active (selected) channels in the document
const activeChannels = app.activeDocument.activeChannels;

// Reference a document's Red channel
const redChannel = app.activeDocument.channels[0];
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| color | [_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) | R W | 23.0 | Channel color value. |
| histogram | _number_[] | R | 23.0 | Per-intensity pixel counts for this channel. The array has 256 entries. Visibility is required for the target channel. |
| kind | [_ChannelType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#channeltype) | R W | 23.0 | Channel category. |
| name | _string_ | R W | 23.0 | Channel name. Component-channel names may be localized. **_Fixes in Photoshop 24.6_** - _For component channels, Photoshop 24.6 preserves the UI casing instead of lowercasing the name_ - _For component channels, Photoshop 24.6 throws an error when the channel no longer exists in the document_ |
| opacity | _number_ | R W | 23.0 | Channel opacity or solidity value. |
| parent | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | R | 23.0 | Document that owns this channel. |
| visible | _boolean_ | R W | 23.0 | Channel visibility state. |

### Methods
