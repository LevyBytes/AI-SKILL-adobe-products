# Methods (part 4)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## AVLayer object — Methods

- Layer.hasVideo should return true.
- AVLayer.adjustmentLayer should return false.
- Layer.nullLayer should return false.
- If the AVLayer.source is a FootageItem object, then FootageItem.FootageSource should not be a SolidSource object.
- If the AVLayer.source is a FootageItem object and the FootageItem.FootageSource is a FileSource object then that FileSource should not point to a non-media file e.g. a JSX script file.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comp | CompItem object | The composition where you wish to add the property to the EGP. |

### Returns

Boolean.

### AVLayer.compPointToSource()

app.project.item(index).layer(index).compPointToSource()

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

Translates coordinates given in composition space, like sourcePointToComp, into the layer's own coordinate space.

Warning

For a text layer, only that layer's opening character — at the present time — is taken into account by this value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sourcePointToComp | Array of floating-point values, [x, y] | Position array of composition coordinates |

### Returns

Array of ([X,Y]) position coordinates; read-only.

### AVLayer.openInViewer()

app.project.item(index).layer(index).openInViewer()

### Description

Brings the layer up in a Layer panel, pushes that panel to the front, and hands it focus.

### Parameters

None.

### Returns

Viewer object for the Layer panel, or null if the layer could not be opened (e.g., for text or shape layers, which cannot be opened in the Layer panel).

### AVLayer.removeTrackMatte()

app.project.item(index).layer(index).removeTrackMatte()

Note

This functionality was added in After Effects 23.0

### Description

Strips this layer's track matte away while leaving its TrackMatteType intact. AVLayer.setTrackMatte() offers an alternative route to removing a track matte.

### Parameters

None.

### Returns

Nothing.

```
// Sets the track matte layer of myLayer with otherLayer as LUMA type
myLayer.setTrackMatte(otherLayer, TrackMatteType.LUMA);

// Removes the track matte for myLayer but preserves the LUMA type
myLayer.removeTrackMatte();

// Still returns TrackMatteType.LUMA
alert(myLayer.trackMatteType);
```

### AVLayer.replaceSource()

app.project.item(index).layer(index).replaceSource(newSource, fixExpressions)

### Description

Swaps in a different source for this layer.

Warning

Run this method against a null layer and its isNull attribute stays true rather than flipping — the upshot being that the layer shows up neither in the comp viewer nor in renders.

### Parameters

Parameter

Type

Description

newSource

AVItem object

The new source AVItem object.

fixExpressions

Boolean

true to adjust expressions for the new source, otherwise false.

Warning

Because this can demand heavy resources, save it for the very end of the operation when a large amount of footage is being replaced. See also Project.autoFixExpressions().

| --- | --- | --- |

### Returns

Nothing.

### AVLayer.setTrackMatte()

app.project.item(index).layer(index).setTrackMatte(trackMatteLayer, trackMatteType)

Note

This functionality was added in After Effects 23.0

### Description

Assigns both the track matte layer and the matte type for this layer. Hand null to the trackMatteLayer parameter and the track matte is removed. AVLayer.removeTrackMatte() is another way to strip a track matte off.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| trackMatteLayer | AVLayer | The layer to be used as the track matte layer. |
| trackMatteType | TrackMatteType enum | The type of the track matte to be used. |

Warning

Passing in TrackMatteType.`NO_TRACK_MATTE` as type is invalid and will result in no-op.

### Returns

Nothing

### Example

```
// Sets the track matte layer of myLayer with otherLayer as Alpha type
myLayer.setTrackMatte(otherLayer, TrackMatteType.ALPHA);

// Keeps the same trackMatteLayer and only changes the track matte type
myLayer.setTrackMatte(myLayer.trackMatteLayer, TrackMatteType.LUMA);

// Changes the track matte layer but keep the same track matte type
myLayer.setTrackMatte(newTrackMatteLayer, myLayer.trackMatteType);

// Removes the track matte for myLayer and sets the new specified TrackMatteType
myLayer.setTrackMatte(null, TrackMatteType.ALPHA);
myLayer.setTrackMatte(null, TrackMatteType.NO_TRACK_MATTE);

// Invalid. Nothing happens
myLayer.setTrackMatte(otherLayer, TrackMatteType.NO_TRACK_MATTE);
```

app.project.item(index).layer(index).sourcePointToComp()

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

Translates coordinates given in the layer's space, like boxTextPos, into composition coordinates.

Warning

On a text layer, this value accounts for nothing beyond the first character, evaluated at the current time.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| boxTextPos | Array of floating-point values, [x, y] | A position array of layer coordinates. |

### Returns

Array of ([X,Y]) position coordinates; read-only.

### Example

```
// For a paragraph text layer.
// Converts position in layer coordinates to comp coordinates.
var boxTextCompPos = myTextLayer.sourcePointToComp(boxTextLayerPos);
```

### AVLayer.sourceRectAtTime()

app.project.item(index).layer(index).sourceRectAtTime(timeT, extents)

### Description

Fetches the layer's bounding rectangle at the time index you give, adjusted for the contents of a text or shape layer. One use, for instance, is writing text that lines up neatly with the baseline.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| timeT | Floating-point value | The time index, in seconds. |
| extents | Boolean | true to include the extents, otherwise false. Extents apply to shape layers, increasing the size of the layer bounds as necessary. |

### Returns

A JavaScript object with four attributes, [top, left, width, height].

## RenderQueue object — Methods

### RenderQueue.item()

app.project.renderQueue.item(index)

### Description

Fetches one specified item out of the items collection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index | Integer, in the range [0..numItems] | The position index of the item. |

### Returns

RenderQueueItem object.

### RenderQueue.pauseRendering()

app.project.renderQueue.pauseRendering(pause)

### Description

Either halts the rendering run for the moment or picks a paused run back up — the same thing as hitting Pause in the Render Queue panel mid-render. This call is available from inside an RenderQueueItem.onStatusChanged or app.onError callback.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pause | Boolean | true to pause a current render process, false to continue a paused render. |

### Returns

Nothing.

### RenderQueue.render()

app.project.renderQueue.render()

### Description

Kicks off the rendering run — the equivalent of clicking Render in the Render Queue panel. Control does not come back from the method until rendering has finished. Should you want to pause or halt it along the way, call RenderQueue.pauseRendering() or RenderQueue.stopRendering() from an onError or onstatus callback.

- For reacting to errors as rendering proceeds, set up a callback function in app.onError.
- For reacting when a specific item's status shifts during the render, set up a callback function in RenderQueueItem.onStatusChanged on the matching RenderQueueItem object.

### Parameters

None.

### Returns

Nothing.

### RenderQueue.showWindow()

app.project.renderQueue.showWindow(doShow)

### Description

Toggles the Render Queue panel between visible and hidden.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| doShow | Boolean | When true, show the Render Queue panel. When false, hide it. |

### Returns

Nothing.

### RenderQueue.stopRendering()

app.project.renderQueue.stopRendering()

### Description

Ends the rendering run, behaving just like a press of Stop in the Render Queue panel while a render is underway. An RenderQueueItem.onStatusChanged or app.onError callback can issue this call.

### Parameters

None.

### Returns

Nothing.

### RenderQueue.queueInAME()

app.project.renderQueue.queueInAME(render_immediately_in_AME)

Note

This functionality was added in After Effects 14.0 (CC 2017)

### Description

Triggers the Queue In AME command. You must hand it a boolean that tells AME whether to merely line up the render items (false) or to additionally begin working through its queue (true).

Note

This requires Adobe Media Encoder CC 2017 (11.0) or later.

Tip

Once AME has the queued items, it falls back on whichever encoding preset was used most recently. Set render_immediately_in_AME to true and you forfeit any chance to adjust the encoding settings beforehand.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| render_immediately_in_AME | Boolean | Telling AME whether to only queue the render items (false) or if AME should also start processing its queue (true). |

### Returns

Nothing.

### Example

The sample below tests whether the render queue has any queued items and, when it does, hands them off to AME without launching the render right away:

```
// Scripting support for Queue in AME.
// Requires Adobe Media Encoder 11.0.
if (app.project.renderQueue.canQueueInAME === true) {
    // Send queued items to AME, but do not start rendering.
    app.project.renderQueue.queueInAME(false);
} else {
    alert("There are no queued item in the Render Queue.");
}
```

## RQItemCollection object — Methods

### RQItemCollection.add()

app.project.renderQueue.items.add(comp)

### Description

Drops a composition into the Render Queue, which spawns a RenderQueueItem.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comp | CompItem object | The composition to be added. |

### Returns

RenderQueueItem object.

## RenderQueueItem object — Methods

### RenderQueueItem.applyTemplate()

app.project.renderQueue.item(index).applyTemplate(templateName)

### Description

Puts a Render Settings template into effect for this item. See also RenderQueueItem.saveAsTemplate() and RenderQueueItem.templates.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| templateName | String | The name of the template to apply. |

### Returns

Nothing.

### RenderQueueItem.duplicate()

app.project.renderQueue.item(index).duplicate()

### Description

Makes a copy of this item and drops it into this render queue.

Tip

Copy an item whose status reads "Done" and the new copy comes in with a "Queued" status.

### Parameters

None.

### Returns

RenderQueueItem object.

### RenderQueueItem.getSetting()

app.project.renderQueue.item(index).getSetting()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

Retrieves one particular Render Queue Item setting.

- Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva
- Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

### Example

```
// Get current value of render setting's "Proxy Use"
// Key and value strings are English.
var rqItem1_proxyUse = app.project.renderQueue.item(1).getSetting("Proxy Use");

// Get string version of same setting, add "-str" at the end of key string
var rqItem1_proxyUse_str = app.project.renderQueue.item(1).getSetting("Proxy Use-str");
```

### RenderQueueItem.getSettings()

app.project.renderQueue.item(index).getSettings()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

Retrieves the full set of settings for a particular Render Queue Item.

- Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva
- Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

### Example

```
// Get object that contains all possible values of all render settings of
// render queue item 1 and convert to JSON format.

var rqItem1_spec_str = app.project.renderQueue.item(1).getSettings(GetSettingsFormat.SPEC);
var rqItem1_spec_str_json = rqItem1_spec_str.toSource();
```

### RenderQueueItem.outputModule()

app.project.renderQueue.item(index).outputModule(index)

### Description

Retrieves the output module sitting at the index position you name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index | Integer, in the range [1..numOutputModules] | The position index of the output module. |

### Returns

OutputModule object.

### RenderQueueItem.remove()

app.project.renderQueue.item(index).remove()

### Description

Takes this item back out of the render queue.

### Parameters

None.

### Returns

Nothing.

### RenderQueueItem.saveAsTemplate()

app.project.renderQueue.item(index).saveAsTemplate(name)

### Description

Stores this item's present render settings under a new template carrying the name you supply.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the new template. |

### Returns

Nothing.

### RenderQueueItem.setSetting()

app.project.renderQueue.item(index).setSetting()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

Assigns one particular setting on a given Render Queue Item.

Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

### Example

```
// Set value of "Proxy Use" to "Use All Proxies"

app.project.renderQueue.item(1).setSetting("Proxy Use", "Use All Proxies");

// You can use numbers, too.
// The next line does the same as the previous example.

app.project.renderQueue.item(1).setSetting("Proxy Use", 1);
```

### RenderQueueItem.setSettings()

app.project.renderQueue.item(index).setSettings()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

Assigns several settings at once on a given Render Queue Item.

- Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva
- Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

### Example

```
// Get an object that contains string version of settable render setting
// values of render queue item 1.
// To get the values in the number format, use
// GetSettingsFormat.NUMBER_SETTABLE as an argument.

var rqItem1_settable_str = app.project.renderQueue.item(1).getSettings( GetSettingsFormat.STRING_SETTABLE );

// Set render queue item 2 with values that you got from render
//queue item 1.

app.project.renderQueue.item(2).setSettings( rqItem1_settable_str );

// Set render queue item 3 with values you create.

var my_renderSettings = {
    "Color Depth":        "32 bits per channel",
    "Quality":            "Best",
    "Effects":            "All On",
    "Time Span Duration": "1.0",
    "Time Span Start":    "2.0"
};

app.project.renderQueue.item(2).setSettings( my_renderSettings );
```

## OMCollection object — Methods

### OMCollection.add()

app.project.renderQueue.item(1).outputModules.add()

### Description

Creates a fresh OutputModule and attaches it to the Render Queue Item.

### Returns

OutputModule object.

## OutputModule object — Methods

### OutputModule.applyTemplate()

app.project.renderQueue.item(index).outputModule(index).applyTemplate(templateName)

### Description

Loads an output-module template that already exists, naming it through the argument.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| templateName | String | The name of the template to be applied. |

### Returns

Nothing.

### OutputModule.getSetting()

app.project.renderQueue.item(index).outputModule(index).getSetting()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

Retrieves one particular setting from the specified Output Module.

- Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva
- Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

### Example

For a structural reference, look to the sample under RenderQueueItem.getSetting().

### OutputModule.getSettings()

app.project.renderQueue.item(index).outputModule(index).getSettings()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

Pulls back the complete set of settings for the specified Output Module.

- Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva
- Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

### Example

```
// Get object that contains the string version of all current output module setting
// values of output module item 1 from render queue item 1.
// To get the values in the number format, use GetSettingsFormat.NUMBER as an argument.

var omItem1_all_str= app.project.renderQueue.item(1).outputModule(1).getSettings( GetSettingsFormat.STRING );

// Convert to JSON format so that it is human-readable.

var omItem1_all_str_json = omItem1_all_str.toSource();

// Get object that contains string version of settable output module setting values
// of output module item 1 from render queue item 1.
// If you want to get the values in the number format, use
// GetSettingsFormat.NUMBER_SETTABLE as an argument.

var omItem1_settable_str = app.project.renderQueue.item(1).outputModule(1).getSettings( GetSettingsFormat.STRING_SETTABLE );

// Currently, the format setting in the output module is not settable, but it
// is readable. The next line will tell you the current format of output module
// item 1 from render queue item 1.

var current_format = app.project.renderQueue.item(1).outputModule(1).getSettings(GetSettingsFormat.STRING).Format;

// This line will tell you the output module file info.

var current_omFileTempalte = app.project.renderQueue.item(1).outputModule(1).getSettings(GetSettingsFormat.STRING)["Output File Info"]["File Template"];
```

### OutputModule.remove()

app.project.renderQueue.item(index).outputModule(index).remove()

### Description

Drops this OutputModule object out of the collection.

### Parameters

None.

### Returns

Nothing.

### OutputModule.saveAsTemplate()

app.project.renderQueue.item(index).outputModule(index).saveAsTemplate(name)

### Description

Stores the current output module as a new template, which then joins the templates array.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the new template. |

### Returns

Nothing.

### OutputModule.setSetting()

app.project.renderQueue.item(index).outputModule(index).setSetting()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

Writes a value to one particular setting on the specified Output Module.

- Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva
- Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

### Example

For a structural reference, look to the sample under RenderQueueItem.setSetting().

### OutputModule.setSettings()

app.project.renderQueue.item(index).outputModule(index).setSettings()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

- Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva
- Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

Warning

Be aware of a bug: once you change an output module setting, the OutputModule object goes stale, so fetch the Output Module afresh after every modification.

### Examples

Take the settings off one item's output module and apply them to another:

```
// If you want to get the values in the number format, use
// GetSettingsFormat.NUMBER_SETTABLE as an argument.

var omItem1_settable_str = app.project.renderQueue.item(1).outputModule(1).getSettings( GetSettingsFormat.STRING_SETTABLE );

// Set output module item 1 of render queue item 2 with values that you get from
// output module 1 of render queue item 1

app.project.renderQueue.item(2).outputModule(1).setSettings( omItem1_settable_str );
```

Apply values of your own making to output module item 1 of render queue item 3:

```
var crop_data = {
    "Crop":        true,
    "Crop Bottom": 0,
    "Crop Left":   0,
    "Crop Right":  8,
    "Crop Top":    10
};

app.project.renderQueue.item(1).outputModule(3).setSettings( crop_data );
```

Send the rendered file into the user directory:

```
var om1 = app.project.renderQueue.item(1).outputModule(1);
var file_name = File.decode( om1.file.name ); // Name contains special character, space?
var new_dir = new Folder( "~/new_output" );
var new_path = new_dir.fsName;

var new_data = {
    "Output File Info": {
        "Base Path":      new_path,
        "Subfolder Path": "draft",
        "File Name":      file_name
    }
};

om1.setSettings( new_data );
```

The next sample again sends the output file to the user directory, only here it relies on the full path:

```
var om1 = app.project.renderQueue.item(1).outputModule(1);

// Name contains special character, such as space?
var file_name = File.decode( om1.file.name );
var new_path = "/Users/myAccount/new_output";
var separator = "/";

if ($.os.indexOf("Mac") == -1) {
    new_path = "C:\Users\myAccount\new_output";
    separator = "\\";
}

var new_data = {
    "Output File Info": {
        "Full Flat Path": new_path + separator + file_name
    }
};

om1.setSettings( new_data );
```

## FileSource object — Methods

### FileSource.reload()

app.project.item(index).mainSource.reload()

### Description

Pulls the asset back in from its file. Only a mainSource accepts this call; a proxySource does not.

### Parameters

None.

### Returns

Nothing.

## FootageSource object — Methods

### FootageSource.guessAlphaMode()

app.project.item(index).mainSource.guessAlphaMode()

app.project.item(index).proxySource.guessAlphaMode()

### Description

Picks the most likely values for alphaMode, premulColor, and invertAlpha on this footage source. Nothing changes if hasAlpha is false.

### Parameters

None.

### Returns

Nothing.

### FootageSource.guessPulldown()

app.project.item(index).mainSource.guessPulldown(method)

app.project.item(index).proxySource.guessPulldown(method)

### Description

Picks the most likely values for fieldSeparationType and removePulldown on this footage source. Nothing changes if isStill is true.

### Parameters

Parameter

Type

Description

method

PulldownMethod enum.

Which estimation approach to apply. One of: - PulldownMethod.`PULLDOWN_3_2` - PulldownMethod.`ADVANCE_24P`

| --- | --- | --- |

### Returns

Nothing.
