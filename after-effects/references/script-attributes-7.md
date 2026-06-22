# Attributes (part 7)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## MaskPropertyGroup object — Attributes

### MaskPropertyGroup.color

app.project.item(index).layer(index).mask(index).color

### Description

The color in which the mask outline gets drawn throughout the interface — the Composition panel, the Layer panel, and the Timeline panel.

### Type

Array of three floating-point values, [R, G, B], in the range [0.0..1.0]; read/write.

### MaskPropertyGroup.inverted

app.project.item(index).layer(index).mask(index).inverted

### Description

A true value means the mask is inverted; false means it is not.

### Type

Boolean; read/write.

### MaskPropertyGroup.locked

app.project.item(index).layer(index).mask(index).locked

### Description

A true value locks the mask, putting it beyond editing in the interface; false leaves it editable.

### Type

Boolean; read/write.

### MaskPropertyGroup.maskFeatherFalloff

app.project.item(index).layer(index).mask(index).maskFeatherFalloff

### Description

The mask's feather falloff mode, mirroring the Layer > Mask > Feather Falloff setting.

### Type

A MaskFeatherFalloff enumerated value; read/write. One of:

- MaskFeatherFalloff.`FFO_LINEAR`
- MaskFeatherFalloff.`FFO_SMOOTH`

### MaskPropertyGroup.maskMode

app.project.item(index).layer(index).mask(index).maskMode

### Description

This mask's masking mode.

### Type

A MaskMode enumerated value; read/write. One of:

- MaskMode.NONE
- MaskMode.ADD
- MaskMode.SUBTRACT
- MaskMode.INTERSECT
- MaskMode.LIGHTEN
- MaskMode.DARKEN
- MaskMode.DIFFERENCE

### MaskPropertyGroup.maskMotionBlur

app.project.item(index).layer(index).mask(index).maskMotionBlur

### Description

The way motion blur gets applied to this mask.

### Type

A MakMotionBlur enumerated value; read/write. One of:

- MaskMotionBlur.`SAME_AS_LAYER`
- MaskMotionBlur.ON
- MaskMotionBlur.OFF

### MaskPropertyGroup.rotoBezier

app.project.item(index).layer(index).mask(index).rotoBezier

### Description

A true value makes the mask a RotoBezier shape; false does not.

### Type

Boolean; read/write.

## RenderQueue object — Attributes

### RenderQueue.canQueueInAME

app.project.renderQueue.canQueueInAME

Note

This functionality was added in After Effects 14.0 (CC 2017)

### Description

Reports whether the After Effects render queue currently holds any queued render items. Items have to be queued before they can move over to the AME queue.

RenderQueue.queueInAME()

### Type

Boolean; read-only.

### RenderQueue.queueNotify

app.project.renderQueue.queueNotify

Note

This functionality was added in After Effects 22.0 (2022)

### Description

Reads or writes the Notify property covering the whole Render Queue. In the UI this shows up as a checkbox down in the Render Queue panel's lower right corner.

### Type

Boolean; read/write.

### RenderQueue.items

app.project.renderQueue.items

### Description

Every item the render queue holds, gathered into one collection. See RenderQueueItem object.

### Type

RQItemCollection object; read-only.

### RenderQueue.numItems

app.project.renderQueue.numItems

### Description

How many items sit in the render queue altogether.

### Type

Integer; read-only.

### RenderQueue.rendering

app.project.renderQueue.rendering

### Description

A true value means rendering is currently underway or on pause; false means it has stopped.

### Type

Boolean; read-only.

## RenderQueueItem object — Attributes

### RenderQueueItem.comp

app.project.renderQueue.item(index).comp

### Description

The composition this render-queue item is going to render. Swapping in a different composition means deleting this render-queue item and building a fresh one.

### Type

CompItem object; read-only.

### RenderQueueItem.elapsedSeconds

app.project.renderQueue.item(index).elapsedSeconds

### Description

How many seconds have gone into rendering this item.

### Type

Integer, or null if item has not been rendered; read-only.

### RenderQueueItem.logType

app.project.renderQueue.item(index).logType

### Description

The log type chosen for this item, which dictates which events get logged as the item renders.

### Type

A LogType enumerated value; (read/write). One of:

- LogType.`ERRORS_ONLY`
- LogType.`ERRORS_AND_SETTINGS`
- LogType.`ERRORS_AND_PER_FRAME_INFO`

### RenderQueueItem.numOutputModules

app.project.renderQueue.item(index).numOutputModules

### Description

The count of Output Modules attached to this item in total.

### Type

Integer; read-only.

### RenderQueueItem.onStatusChanged

app.project.renderQueue.item(index).onStatusChanged

### Description

The name of the callback function fired every time the RenderQueueItem.status attribute takes on a new value.

While rendering is running or paused you cannot alter render queue items or the application itself; this callback, though, gives you a hook to pause or halt the render. See RenderQueue.pauseRendering() and RenderQueue.stopRendering(). See also app.onError.

### Type

A function name string, or null if no function is assigned.

### Example

```
function myStatusChanged() {
    alert(app.project.renderQueue.item(1).status);
}

app.project.renderQueue.item(1).onStatusChanged = myStatusChanged;
app.project.renderQueue.item(1).render = false; // changes status and shows dialog
```

### RenderQueueItem.outputModules

app.project.renderQueue.item(index).outputModules

### Description

This item's collection of Output Modules.

### Type

OMCollection object; read-only.

### RenderQueueItem.queueItemNotify

app.project.renderQueue.item(index).queueItemNotify

Note

This functionality was added in After Effects 22.0 (2022)

### Description

Lets scripts read and write the Notify checkbox attached to each separate item in the Render Queue. The UI presents this as a checkbox beside every Render Queue item under the Notify column.

That column stays hidden by default, so you may have to turn it on — right-click the Render Queue column headers and pick Notify.

### Type

Boolean; read/write.

### RenderQueueItem.render

app.project.renderQueue.item(index).render

### Description

A true value queues the item to render when the render queue starts. Setting it true drives RenderQueueItem.status to RQItemStatus.QUEUED; setting it false drives the status to RQItemStatus.UNQUEUED.

### Type

Boolean; read/write.

### RenderQueueItem.skipFrames

app.project.renderQueue.item(index).skipFrames

### Description

The count of frames to bypass while rendering this item — handy for running render tests quicker than a full pass. At 0 nothing is skipped and every frame renders as usual. At 1 every second frame is dropped, which amounts to "rendering on twos." Larger values bypass more frames still. Either way the overall length of time holds steady. As an instance, with skip set to 1, a sequence output ends up with half as many frames, while in movie output each frame lasts twice as long.

### Type

Integer, in the range [0..99]; read/write.

### RenderQueueItem.startTime

app.project.renderQueue.item(index).startTime

### Description

The calendar day and clock time at which this item began rendering.

### Type

Date object, or null if the item has not started rendering; read-only.

### RenderQueueItem.status

app.project.renderQueue.item(index).status

### Description

Where this item currently stands in the render process.

### Type

An RQItemStatus enumerated value; read-only. One of:

- RQItemStatus.`WILL_CONTINUE`: Rendering process has been paused.
- RQItemStatus.`NEEDS_OUTPUT`: Item lacks a valid output path.
- RQItemStatus.UNQUEUED: Item is listed in the Render Queue panel but composition is not ready to render.
- RQItemStatus.QUEUED: Composition is ready to render.
- RQItemStatus.RENDERING: Composition is rendering
- RQItemStatus.`USER_STOPPED`: Rendering process was stopped by user or script.
- RQItemStatus.`ERR_STOPPED`: Rendering process was stopped due to an error.
- RQItemStatus.DONE: Rendering process for the item is complete.

### RenderQueueItem.templates

app.project.renderQueue.item(index).templates

### Description

Every Render Settings template name on offer for this item. See also RenderQueueItem.saveAsTemplate().

### Type

Array of strings; read-only.

### RenderQueueItem.timeSpanDuration

app.project.renderQueue.item(index).timeSpanDuration

### Description

How long, in seconds, the composition slated for rendering runs. That figure comes from taking the end time and subtracting the start time. Assigning it is equivalent to dialing in a custom end time over in the Render Settings dialog box.

### Type

Floating-point value; read/write.

### RenderQueueItem.timeSpanStart

app.project.renderQueue.item(index).timeSpanStart

### Description

The point in the composition, measured in seconds, where rendering kicks off. Assigning it is equivalent to dialing in a custom start time over in the Render Settings dialog box.

### Type

Floating-point value; read/write.

## OutputModule object — Attributes

### OutputModule.file

app.project.renderQueue.item(index).outputModule(index).file

### Description

Points to the Extendscript File object naming the file this output module will render to.

### Type

ExtendScript File object; read/write.

### OutputModule.includeSourceXMP

app.project.renderQueue.item(index).outputModule(index).includeSourceXMP

### Description

Set this to true to copy every bit of source-footage XMP metadata into the rendered file. This is the scripting equivalent of the Include Source XMP Metadata checkbox found in the Output Module Settings dialog box.

### Type

Boolean; read/write.

### OutputModule.name

app.project.renderQueue.item(index).outputModule(index).name

### Description

Whatever label the interface displays for this output module.

### Type

String; read-only.

### OutputModule.postRenderAction

app.project.renderQueue.item(index).outputModule(index).postRenderAction

### Description

Specifies what should happen once the render finishes.

### Type

A PostRenderAction enumerated value (read/write); one of:

- PostRenderAction.NONE
- PostRenderAction.IMPORT
- PostRenderAction.`IMPORT_AND_REPLACE_USAGE`
- PostRenderAction.`SET_PROXY`

### OutputModule.templates

app.project.renderQueue.item(index).outputModule(index).templates

### Description

Lists every output-module template that the current After Effects installation makes available.

### Type

Array of strings; read-only.

## FileSource object — Attributes

### FileSource.file

app.project.item(index).mainSource.file

app.project.item(index).proxySource.file

### Description

The Extendscript File object identifying the file behind this asset. To alter it:

- When the FileSource serves as an AVItem's proxySource, use setProxy() or setProxyWithSequence().
- When the FileSource serves as a FootageItem's mainSource, use replace() or replaceWithSequence().

### Type

File object; read-only.

### FileSource.missingFootagePath

app.project.item(index).mainSource.missingFootagePath

app.project.item(index).proxySource.missingFootagePath

### Description

Reports the path plus filename for any footage this asset is missing. See also AVItem.footageMissing.

### Type

String; read-only.

## FootageSource object — Attributes

### FootageSource.alphaMode

app.project.item(index).mainSource.alphaMode

app.project.item(index).proxySource.alphaMode

### Description

Controls the way the footage's alpha information gets read. Should hasAlpha be false, the setting carries no meaningful effect.

### Type

An Alpha Mode enumerated value; (read/write). One of:

- AlphaMode.IGNORE
- AlphaMode.STRAIGHT
- AlphaMode.PREMULTIPLIED

### FootageSource.conformFrameRate

app.project.item(index).mainSource.conformFrameRate

app.project.item(index).proxySource.conformFrameRate

### Description

Supplies a frame rate that overrides nativeFrameRate; leaving it at 0 falls back on nativeFrameRate. Setting it raises an error whenever FootageSource.isStill is true, and setting it to 0 is likewise an error if removePulldown is anything other than PulldownPhase.OFF. Should it be 0 at the moment you give removePulldown a value besides PulldownPhase.OFF, it gets reset automatically to whatever nativeFrameRate holds.

### Type

Floating-point value, in the range [0.0..99.0]; read/write.

### FootageSource.displayFrameRate

app.project.item(index).mainSource.displayFrameRate

app.project.item(index).proxySource.displayFrameRate

### Description

The working frame rate at which After Effects shows and renders the footage inside compositions. While removePulldown sits at PulldownPhase.OFF, it matches conformFrameRate when that is non-zero, or else nativeFrameRate when conformFrameRate is 0. Once removePulldown moves off PulldownPhase.OFF, the figure becomes conformFrameRate \* 0.8 — the rate left after one frame in every five is dropped.

### Type

Floating-point value, in the range [0.0..99.0]; read-only.

### FootageSource.fieldSeparationType

app.project.item(index).mainSource.fieldSeparationType

app.project.item(index).proxySource.fieldSeparationType

### Description

Governs the way fields get split apart in footage that is not still. Setting it is an error when isStill is true, and assigning FieldSeparationType.OFF is an error if removePulldown is not PulldownPhase.OFF.

### Type

A FieldSeparationType enumerated value; read/write. One of:

- FieldSeparationType.OFF
- FieldSeparationType.`UPPER_FIELD_FIRST`
- FieldSeparationType.`LOWER_FIELD_FIRST`

### FootageSource.hasAlpha

app.project.item(index).mainSource.hasAlpha

app.project.item(index).proxySource.hasAlpha

### Description

A true value means the footage carries an alpha component, in which case alphaMode, invertAlpha, and premulColor all hold meaningful values. A false value leaves those three attributes with no bearing on the footage.

### Type

Boolean; read-only.

### FootageSource.highQualityFieldSeparation

app.project.item(index).mainSource.highQualityFieldSeparation

app.project.item(index).proxySource.highQualityFieldSeparation

### Description

A true value tells After Effects to apply its special high-quality field-separation algorithms. Assigning this attribute is an error when isStill is true, or when fieldSeparationType equals FieldSeparationType.OFF.

### Type

Boolean; read/write.

### FootageSource.invertAlpha

app.project.item(index).mainSource.invertAlpha

app.project.item(index).proxySource.invertAlpha

### Description

A true value flips the alpha channel of a footage clip or proxy. The attribute only applies where an alpha exists; it is disregarded if hasAlpha is false or if alphaMode equals AlphaMode.IGNORE.

### Type

Boolean; read/write.

### FootageSource.isStill

app.project.item(index).mainSource.isStill

app.project.item(index).proxySource.isStill

### Description

True marks the footage as still; false marks it as having a time-based component. JPEG files, solids, and placeholders running 0 in duration are examples of still footage, whereas movie files, sound files, sequences, and placeholders of non-zero duration are examples that are not still.

### Type

Boolean; read-only.

### FootageSource.loop

app.project.item(index).mainSource.loop

app.project.item(index).proxySource.loop

### Description

How many times in a row the footage plays back when placed in a composition. Assigning this attribute is an error if isStill is true.

### Type

Integer, in the range [1..9999]; default is 1; read/write.

### FootageSource.nativeFrameRate

app.project.item(index).mainSource.nativeFrameRate

app.project.item(index).proxySource.nativeFrameRate

### Description

The footage's own native frame rate.

### Type

Floating-point value; read-only.

### FootageSource.premulColor

app.project.item(index).mainSource.premulColor

app.project.item(index).proxySource.premulColor

### Description

Names the color that gets premultiplied. It only carries meaning when alphaMode equals alphaMode.PREMULTIPLIED.

### Type

Array of three floating-point values, [R, G, B], in the range [0.0..1.0]; read/write.

### FootageSource.removePulldown

app.project.item(index).mainSource.removePulldown

app.project.item(index).proxySource.removePulldown

### Description

Determines the manner in which pulldowns get stripped out once field separation is in play. Setting it is an error when isStill is true, and trying to assign anything other than PulldownPhase.OFF is an error wherever fieldSeparationType equals FieldSeparationType.OFF.

### Type

A PulldownPhase enumerated value; read/write. One of:

- PulldownPhase.RemovePulldown.OFF
- PulldownPhase.RemovePulldown.WSSWW
- PulldownPhase.RemovePulldown.SSWWW
- PulldownPhase.RemovePulldown.SWWWS
- PulldownPhase.RemovePulldown.WWWSS
- PulldownPhase.RemovePulldown.WWSSW
- PulldownPhase.RemovePulldown.`WSSWW_24P_ADVANCE`
- PulldownPhase.RemovePulldown.`SSWWW_24P_ADVANCE`
- PulldownPhase.RemovePulldown.`SWWWS_24P_ADVANCE`
- PulldownPhase.RemovePulldown.`WWWSS_24P_ADVANCE`
- PulldownPhase.RemovePulldown.`WWSSW_24P_ADVANCE`

## SolidSource object — Attributes

### SolidSource.color

solidSource.color

### Description

Gives the solid's color as separate red, green, and blue components.

### Type

Array of three floating-point values, [R, G, B], in the range [0.0..1.0]; read/write.

## CharacterRange object — Attributes

### CharacterRange.characterEnd

CharacterRange.characterEnd

### Description

The computed end-of-character value for the Text layer range.

Accessing it throws an exception if the effective value would run past the limits of the related TextDocument object.

### Type

Unsigned integer; read-only.

### CharacterRange.characterStart

CharacterRange.characterStart

### Description

The computed start-of-character value for the Text layer range.

Accessing it throws an exception if the effective value would run past the limits of the related TextDocument object.

### Type

Unsigned integer; read-only.

### CharacterRange.fillColor

CharacterRange.fillColor

### Description

The Fill Color CharacterRange attribute for the Text layer range, given as an array of [r, g, b] floating-point values.

To illustrate, an 8-bpc project renders a red value of 255 as 1.0, while a 32-bpc project can push an overbright blue value as high as something like 3.2.

Writing this value additionally flips applyFill to true over the affected characters.

Where the attribute holds a mixed value across the character range, the read returns undefined.

Warning

Unlike the matching attribute on the TextDocument API, no exception is thrown on read here when applyFill is not true.

### Type

Array [r, g, b] of floating-point values; read/write.

### CharacterRange.isRangeValid

CharacterRange.isRangeValid

### Description

Yields true when the present range stays inside the limits of the related TextDocument object, and false otherwise.

### Type

Boolean; read-only.

### CharacterRange.kerning

CharacterRange.kerning

### Description

The kerning-option character attribute for the Text layer range.

What this actually reports is the manual kerning figure, not the value computed by auto kerning.

- If autoKernType in the range is set to AutoKernType.`METRIC_KERN`, AutoKernType.`OPTICAL_KERN`, or is mixed, then this attribute will be returned as undefined.
- If autoKernType in the range is set to AutoKernType.`NO_AUTO_KERN`, and this attribute has a mixed value, it will be read as undefined.

Writing this value additionally turns on AutoKernType.`NO_AUTO_KERN` across the affected characters.

### Type

Integer value; read/write.

### CharacterRange.strokeColor

CharacterRange.strokeColor

### Description

The stroke-color character property of the Text layer CharacterRange, given as an array of [r, g, b] floating-point values.

To illustrate, an 8-bpc project renders a red value of 255 as 1.0, while a 32-bpc project can push an overbright blue value as high as something like 3.2.

Where the attribute holds a mixed value, the read returns undefined.

Writing this value additionally flips applyStroke to true over the affected characters.

Warning

Unlike the matching attribute on the TextDocument API, no exception is thrown on read here when applyStroke is not true.

### Type

Array [r, g, b] of floating-point values; read/write.

### CharacterRange.strokeOverFill

CharacterRange.strokeOverFill

### Description

The Stroke Over Fill character property of the Text layer CharacterRange.

It signals the order in which fill and stroke render for the characters in the range. A true value places the stroke above the fill.

Where the attribute holds a mixed value, the read returns undefined.

Warning

A Text layer can override the per-character setting by way of the All Strokes First or All Fills First option on the CharPanel.

The value reported here reflects what is applied to the characters, leaving aside any possible Text layer override.

### Type

Boolean; read/write.

### CharacterRange.text

CharacterRange.text

### Description

The text content of the Text layer range.

A read hands back the same number of characters as the range spans. Where the span is zero — an insertion point — it returns an empty string.

A write swaps the characters in the range for whatever string you pass. An empty string in effect erases the characters in the range.

To add characters without removing any that exist, call TextDocument.characterRange() using the same value for start and end so as to obtain an insertion-point range.

### Type

String; read/write.

## ComposedLineRange object — Attributes

### ComposedLineRange.characterEnd

ComposedLineRange.characterEnd

### Description

The computed end-of-character value for the Text layer range.

Accessing it throws an exception if the effective value would run past the limits of the related TextDocument object.

### Type

Unsigned integer; read-only.

### ComposedLineRange.characterStart

ComposedLineRange.characterStart

### Description

The computed start-of-character value for the Text layer range.

Accessing it throws an exception if the effective value would run past the limits of the related TextDocument object.

### Type

Unsigned integer; read-only.

### ComposedLineRange.isRangeValid

ComposedLineRange.isRangeValid

### Description

Yields true when the present range stays inside the limits of the related TextDocument object, and false otherwise.

### Type

Boolean; read-only.
