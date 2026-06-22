# Action, Actionset, Channel, Channels ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Action; ActionSet; Channel; Channels; CharacterStyle; ColorSampler; ColorSamplers; CountItem — Properties; CountItems.

## Action

Models one Action in the Actions palette.
An Action is a sequence of commands a user can record and replay later.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| id | _number_ | R | 22.1 | The internal ID of this Action Can be used for batchPlay calls, used internally |
| index | _number_ | R | 22.1 | Zero-based index of this Action in it's parent Action Set |
| name | _string_ | R W | 22.1 | The name of this Action, displayed in the panel Cannot be changed |
| parent | [_ActionSet_](https://raw.githubusercontent.com/ps-reference/classes/actionset.md) | R | 22.1 | The Action Set this Action belongs to |
| typename | _string_ | R | 23.0 | The class name of the referenced object: _"Action"_. |

### Methods

### delete

22.1

_void_

Removes the selected Action entry from the panel

### duplicate

22.1

[_Action_](https://raw.githubusercontent.com/ps-reference/classes/action.md)

Creates another Action inside the current Action Set

### play

22.1

**async** : _Promise_`<void>`

Runs this Action

## ActionSet

Photoshop Actions

Manages content in the Actions panel.
The Actions panel contains a hierarchy of Action Sets, and each Action Set holds a list of Actions

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| actions | [_Action_](https://raw.githubusercontent.com/ps-reference/classes/action.md)[] | R | 22.1 | List of Actions in this Action Set |
| id | _number_ | R | 22.1 | The internal ID of this Action Set Can be used for batchPlay calls, used internally |
| index | _number_ | R | 22.1 | Zero-based index of this Action Set in the Actions palette |
| name | _string_ | R W | 22.1 | The name of this Action Set, displayed in the panel |
| typename | _string_ | R | 23.0 | The class name of the referenced object: _"ActionSet"_. |

### Methods

### delete

22.1

_void_

Removes the selected Action Set entry from the panel

### duplicate

22.1

[_ActionSet_](https://raw.githubusercontent.com/ps-reference/classes/actionset.md)

Creates another Action Set instance

### play

22.1

**async** : _Promise_`<void>`

Runs every Action in this set sequentially

## Channel

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
| color | [_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) | R W | 23.0 | Channel color value. |
| histogram | _number_[] | R | 23.0 | Per-intensity pixel counts for this channel. The array has 256 entries. Visibility is required for the target channel. |
| kind | [_ChannelType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#channeltype) | R W | 23.0 | Channel category. |
| name | _string_ | R W | 23.0 | Channel name. Component-channel names may be localized. **_Fixes in Photoshop 24.6_** - _For component channels, Photoshop 24.6 preserves the UI casing instead of lowercasing the name_ - _For component channels, Photoshop 24.6 throws an error when the channel no longer exists in the document_ |
| opacity | _number_ | R W | 23.0 | Channel opacity or solidity value. |
| parent | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R | 23.0 | Document that owns this channel. |
| visible | _boolean_ | R W | 23.0 | Channel visibility state. |

### Methods

### duplicate

23.0

**async** : _Promise_`<void>`

Copies this channel into its parent document, or into `targetDocument` when one is provided.

```javascript
// duplicate the channel
await channel.duplicate();

// duplicate to a different, compatible document
const newDoc = psApp.documents[1];
await channel.duplicate(newDoc);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `targetDocument?` | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | when supplied, uses another document as the duplicate destination. |

### merge

23.0

_Promise_`<void>`

Combines a Spot Color channel back with the component channels.

### remove

23.0

_Promise_`<void>`

Removes this channel.

## Channels

The `Channels` collection supports array-style access to document channels and retains ExtendScript-style helpers such as `getByName`.

```javascript
// Iterate through all channels in the document
app.activeDocument.channels.forEach((h) => console.log(h.name));
```

**_Fixes in Photoshop 24.6_**

- _Component channels now behave correctly in non-English localizations_
- _Bitmap and Indexed Color modes now return Channel objects correctly_

### Indexable

▪ [index: *number*]: [_Channel_](https://raw.githubusercontent.com/ps-reference/classes/channel.md)

Use this indexer to retrieve channels from the collection.

```javascript
// Iterate through all channels in the document
app.activeDocument.channels.forEach((h) => console.log(h.name));
```

**_Fixes in Photoshop 24.6_**

- _Component channels now behave correctly in non-English localizations_
- _Bitmap and Indexed Color modes now return Channel objects correctly_

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 23.0 | Count of Channel elements held by this collection. |
| parent | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R | 23.0 | Document that owns this Channel collection. |
| typename | _string_ | R | 23.0 | `Channels` object collection name. |

### Methods

### add

23.0

[_Channel_](https://raw.githubusercontent.com/ps-reference/classes/channel.md)

Adds an alpha channel to this document.

### getByName

23.0

[_Channel_](https://raw.githubusercontent.com/ps-reference/classes/channel.md)

Returns the first channel whose name matches `name`.

**_Fixes in Photoshop 24.6_**

- \*Component channels resolve correctly in non-English locales.

### Parameters

| Name | Type |
| --- | --- |
| `name` | _string_ |

### removeAll

23.0

_void_

Deletes every Alpha channel from the parent document.

## CharacterStyle

Stores Character panel-related settings for Photoshop text.

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| alternateLigatures | _boolean_ | R W | false | - | 24.1 | Enables discretionary ligature use. |
| antiAliasMethod | [_AntiAlias_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#antialias) | R W | SHARP | - | 24.1 | Text anti-aliasing mode. |
| autoKerning | [_AutoKernType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#autokerntype) | R W | METRICS | - | 24.1 | Auto-kerning setting to apply. |
| baseline | [_Baseline_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#baseline) | R W | NORMAL | - | 24.1 | Baseline setting for the text. |
| baselineShift | _number_ | R W | - | -1296..1296 | 24.1 | Pixel baseline offset for text when the document is 72ppi. |
| capitalization | [_TextCase_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#textcase) | R W | NORMAL | - | 24.1 | Case conversion applied to text. |
| characterAlignment | [_CharacterAlignment_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#characteralignment) | R W | ROMAN | - | 24.1 | Character alignment setting. For mixed character sizes on one line, this chooses how text lines up against the largest characters. |
| color | [_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) | R W | - | - | 24.1 | Text color stored as [SolidColor](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md). |
| fauxBold | _boolean_ | R W | false | - | 24.1 | When true, applies Faux Bold, matching use of the Character panel's Faux Bold control. |
| fauxItalic | _boolean_ | R W | false | - | 24.1 | When true, applies Faux Italic, matching use of the Character panel's Faux Italic control. |
| font | _string_ | R W | - | - | 24.1 | PostScript font name used for the character face. See [TextFont](https://raw.githubusercontent.com/ps-reference/classes/textfont.md) and its `postScriptName` property. |
| fractionalWidths | _boolean_ | R W | false | - | 24.1 | Uses fractional widths for text. |
| fractions | _boolean_ | R W | false | - | 24.1 | Fractions option. |
| horizontalDiacriticPosition | _number_ | R W | - | -1000..1000 | 24.1 | Horizontal diacritic adjustment for Middle Eastern languages. |
| horizontalScale | _number_ | R W | - | 0..1000 | 24.1 | Horizontal character scaling as a percentage, relative to verticalScale. |
| kashidas | _boolean_ | R W | true | - | 24.1 | Turns kashidas on or off for Middle Eastern languages. |
| language | [_Language_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#language) | R W | - | - | 24.1 | Language basis used for hyphenation and spelling rules. |
| leading | _number_ | R W | null | 0..4999.99 | 24.1 | Leading value in pixels for 72ppi documents. |
| ligatures | _boolean_ | R W | true | - | 24.1 | Standard-ligature toggle (default: true). |
| middleEasternDigitsType | [_MiddleEasternDigitsType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#middleeasterndigitstype) | R W | LTRARABIC | - | 24.1 | Digits style for Middle Eastern features. |
| middleEasternTextDirection | [_MiddleEasternTextDirection_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#middleeasterntextdirection) | R W | DEFAULT | - | 24.1 | Text direction for Middle Eastern features. |
| noBreak | _boolean_ | R W | false | - | 24.1 | When true, blocks text from breaking across lines. |
| ordinals | _boolean_ | R W | false | - | 24.1 | Ordinals option. |
| size | _number_ | R W | - | 0.01..1296 | 24.1 | Pixel font size for 72ppi documents. |
| strikeThrough | [_StrikeThrough_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#strikethrough) | R W | STRIKEOFF | - | 24.1 | Controls whether text uses strikethrough. |
| stylisticAlternates | _boolean_ | R W | false | - | 24.1 | Stylistic alternates option. |
| swash | _boolean_ | R W | false | - | 24.1 | Swash option. |
| titlingAlternates | _boolean_ | R W | false | - | 24.1 | Titling alternates option. |
| tracking | _number_ | R W | - | -1000..1000 | 24.1 | Uniform spacing applied between characters. Tracking values use 1/1000-em units. The em-space width depends on the active type size: at 1 point, 1 em is 1 point; at 10 points, 1 em is 10 points. For example, 100 tracking units in 10-point text equals 1 point. |
| underline | [_Underline_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#underline) | R W | NONE | - | 24.1 | Underline style setting. |
| useAutoLeading | _boolean_ | R W | - | - | 24.1 | When true, uses the font's built-in leading data. |
| verticalDiacriticPosition | _number_ | R W | - | -1000..1000 | 24.1 | Vertical diacritic adjustment for Middle Eastern languages. |
| verticalScale | _number_ | R W | - | 0..1000 | 24.1 | Vertical character scaling as a percentage, relative to horizontalScale. |

### Methods

### reset

24.1

**async** : _Promise_`<void>`

Restores Character panel text styles to their default values.

## ColorSampler

Models a `ColorSampler` object in the Photoshop DOM.

Create ColorSampler instances from the [ColorSamplers](https://raw.githubusercontent.com/ps-reference/classes/colorsamplers.md) collection by calling [ColorSamplers.add](https://raw.githubusercontent.com/ps-reference/classes/colorsamplers.md#add):

```javascript
const app = require("photoshop").app;
app.activeDocument.colorSamplers.add({ x: 100, y: 100 });
```

After creation, read `color`, `position`, and `parent` from that ColorSampler object:

```javascript
let cs = app.activeDocument.colorSamplers[0];
console.log(cs.position); // {x: 100, y: 100}
console.log(cs.color.rgb); // SolidColor {red: 0, green: 255, blue: 0}
console.log(cs.parent); // Document
```

Move an existing ColorSampler instance by supplying a new position:

```javascript
cs.move({ x: 200, y: 200 });
console.log(cs.position); // {x: 200, y: 200}
```

Remove it from the document when it is no longer needed:

```javascript
cs.remove();
console.log(app.activeDocument.colorSamplers.length); // 0
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| color | [_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) \| [_NoColor_](https://raw.githubusercontent.com/ps-reference/colors/nocolor.md) | R | 24.0 | Current-position color readout for this ColorSampler. |
| docId | _number_ | R | 24.0 | ID of the Document associated with this ColorSampler. |
| parent | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R | 24.0 | Document that owns this ColorSampler. |
| position | _object_ | R | 24.0 | Current ColorSampler position. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"ColorSampler"_. |

### Methods

### move

24.0

_void_

Moves this ColorSampler object to `position`.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | _object_ | Object literal containing target pixel coordinates `{x: number, y: number}`. |
| `position.x` | _number_ | - |
| `position.y` | _number_ | - |

### remove

24.0

_void_

Deletes this ColorSampler object.

## ColorSamplers

The `ColorSamplers` collection provides array-style access to a document's ColorSamplers.

Use the [Document.colorSamplers](https://raw.githubusercontent.com/ps-reference/classes/document.md#colorsamplers) property to reach it. For instance, this call appends one colorSampler:

```javascript
const app = require("photoshop").app;
app.activeDocument.colorSamplers.add({ x: 20, y: 20 });
```

Read a colorSampler through the collection's `[index]` property, then inspect its properties.
This example takes the first colorSampler and destructures `color` and `position`, yielding a sampled [SolidColor](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) object plus the current `{x, y}` coordinate object:

```javascript
const cs = app.activeDocument.colorSamplers[0];
const { color, position } = cs; // destructuring assignment
console.log(color.rgb); // returns a SolidColor object:
// {red: 0, green: 255, blue: 0, model: ColorModel.RGB}
console.log(position); // returns an object: {x: 20, y: 20}
```

Call `removeAll()` to clear the colorSamplers collection.

```javascript
app.activeDocument.colorSamplers.removeAll();
app.activeDocument.colorSamplers.length; // returns 0
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 24.0 | Count of [ColorSampler](https://raw.githubusercontent.com/ps-reference/classes/colorsampler.md) entries held here. `javascript // A new document starts with no colorSamplers app.activeDocument.colorSamplers.length; // returns 0 ` |
| parent | Document | R | 24.0 | Owner [Document](https://raw.githubusercontent.com/ps-reference/classes/document.md) for this ColorSamplers collection. |

### Methods

### add

24.0

[_ColorSampler_](https://raw.githubusercontent.com/ps-reference/classes/colorsampler.md)

Creates a [ColorSampler](https://raw.githubusercontent.com/ps-reference/classes/colorsampler.md) in the collection at pixel coordinates `{x, y}`.

```javascript
app.activeDocument.colorSamplers.add({ x: 20, y: 20 });
app.activeDocument.colorSamplers.length; // returns 1
```

### Parameters

| Name | Type |
| --- | --- |
| `position` | _object_ |
| `position.x` | _number_ |
| `position.y` | _number_ |

### removeAll

24.0

_void_

Deletes every ColorSampler entry held here.

```javascript
app.activeDocument.colorSamplers.removeAll();
app.activeDocument.colorSamplers.length; // returns 0
```

## CountItem — Properties

### groupIndex

• `Readonly` **groupIndex**: _number_

Index of the Group associated with this CountItem.

### itemIndex

• `Readonly` **itemIndex**: _number_

Descriptor-provided itemIndex for the CountItem.

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| parent | [_CountItems_](https://raw.githubusercontent.com/ps-reference/classes/countitems.md) | R | 24.1 | CountItems collection that contains this item and the other collected CountItems. |
| position | _object_ | R | 24.1 | CountItem location as an object with pixel-based x and y properties. |
| typename | _string_ | R | 24.1 | Referenced CountItem object class name. |

### CountItem — Methods

### move

24.1

_void_

Moves this CountItem to another position.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | _object_ | Object containing x and y pixel properties; |
| `position.x` | _number_ | - |
| `position.y` | _number_ | - |

### remove

24.1

_void_

Deletes the CountItem from the document.

## CountItems

`CountItems` is a collection class for accessing the document's CountItem entries.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 24.1 | Count of [CountItem](https://raw.githubusercontent.com/ps-reference/classes/countitem.md) elements held by this collection. |
| parent | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R | 24.1 | Owning [Document](https://raw.githubusercontent.com/ps-reference/classes/document.md) for this CountItems collection. |
| typename | _string_ | R | 24.1 | Typename value reported for the CountItems collection. |

### Methods

### activateGroupByIndex

24.1

_void_

Selects a Count Item group using its index.

### Parameters

| Name | Type |
| --- | --- |
| `index` | _number_ |

### add

24.1

[_CountItem_](https://raw.githubusercontent.com/ps-reference/classes/countitem.md)

Appends a [CountItem](https://raw.githubusercontent.com/ps-reference/classes/countitem.md) to this collection.

```javascript
app.activeDocument.countItems.add({ x: 20, y: 20 });
```

### Parameters

| Name | Type |
| --- | --- |
| `position` | _object_ |
| `position.x` | _number_ |
| `position.y` | _number_ |

### createGroup

24.1

_void_

Makes a Count Item group.

### Parameters

| Name | Type |
| --- | --- |
| `groupName` | _string_ |

### getAll

24.1

[_CountItem_](https://raw.githubusercontent.com/ps-reference/classes/countitem.md)[]

Returns every [CountItem](https://raw.githubusercontent.com/ps-reference/classes/countitem.md) object in this collection.

```javascript
app.activeDocument.countItems.getAll();
```

### removeAllFromActiveGroup

24.1

_void_

Removes every [CountItem](https://raw.githubusercontent.com/ps-reference/classes/countitem.md) object from the active group in this collection.

```javascript
app.activeDocument.countItems.removeAllFromActiveGroup();
```

### removeGroupByIndex

24.1

_void_

Deletes a Count Item group identified by index.

### Parameters

| Name | Type |
| --- | --- |
| `index` | _number_ |

### renameActiveGroup

24.1

_void_

Changes the name of the active Count Item group.

### Parameters

| Name | Type |
| --- | --- |
| `groupName` | _string_ |

### setActiveColor

24.1

_void_

Applies the Color used by the Count Item marker plus label.

### Parameters

| Name | Type |
| --- | --- |
| `color` | [_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) |

### setActiveLabelSize

24.1

_void_

Controls the size of the Count Item label, which is the number.

### Parameters

| Name | Type |
| --- | --- |
| `size` | _number_ |

### setActiveMarkerSize

24.1

_void_

Controls the size of the Count Item marker, which is the dot.

### Parameters

| Name | Type |
| --- | --- |
| `size` | _number_ |

### toggleActiveGroupVisibility

24.1

_void_

Switches visibility on or off for the selected Count Item group.

### Parameters

| Name | Type |
| --- | --- |
| `isVisible` | _boolean_ |

## See also

- [Photoshop Actions](api-photoshop-actions.md)
