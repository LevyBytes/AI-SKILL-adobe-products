# Methods (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Project object — Methods

### Project.listColorProfiles()

app.project.listColorProfiles()

### Description

Hands back an array of color-profile descriptions, any of which is eligible to become the project's color working space.

### Parameters

None.

### Returns

Array of strings.

### Project.reduceProject()

app.project.reduceProject(array_of_items)

### Description

Strips out every project item apart from the ones you list, equivalent to the File > Reduce Project command.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| array_of_items | Array of Item objects | The items to be kept. |

### Returns

Integer; the total number of items removed.

### Example

```
var items = [];
items[items.length] = app.project.item(1);
items[items.length] = app.project.item(3);
app.project.reduceProject(items);
```

### Project.removeUnusedFootage()

app.project.removeUnusedFootage()

### Description

Clears footage that nothing references out of the project, the same as choosing File > Remove Unused Footage.

### Parameters

None.

### Returns

Integer; the total number of FootageItem objects removed.

### Project.replaceFont()

app.project.replaceFont(fromFont, toFont, [noFontLocking = false])

Note

This functionality was added in After Effects 24.5

### Description

Substitutes the Font object toFont everywhere the Font object fromFont is currently in use.

Because it taps the very same machinery and rules that drive automatic substitution of missing or replaced fonts, the swap is exact and complete — it even handles TextDocuments with mixed styling, holding onto the character range that fromFont covered.

You cannot undo this operation.

The optional noFontLocking flag governs the case where toFont lacks glyphs for the text it lands on. Normally a fallback font that does carry those glyphs gets picked, but flip this flag to true and that fallback is suppressed, leaving the glyphs missing. At present nothing can detect or report that situation.

Keep in mind that if fromFont is itself a substituted font and toFont shares its font properties, no fallback is possible, so the flag is disregarded and behaves as though set to true.

```
var fromFont = app.project.usedFonts[0].font;
var fontList = app.fonts.getFontsByPostScriptName("TimesNewRomanPSMT");
var toFont = fontList[0];
var layerChanged = app.project.replaceFont(fromFont, toFont);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fromFont | Font object | Font to be replaced. |
| toFont | Font object | Font to replace it with. |
| noFontLocking | Boolean | Optional. Defaults to false |

### Returns

Boolean. true if at least one Layer was changed.

### Project.save()

app.project.save([file])

### Description

Writes the project to disk, matching File > Save or File > Save As. When the project has no prior save and you pass no file, you are asked for a location and file name.

Hand in a File object to write the project to a brand-new file with no prompt.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File | Optional. The file to save. |

### Returns

None.

### Project.saveWithDialog()

app.project.saveWithDialog()

### Description

Opens the Save dialog box, where the user may give the file a name and location and store the project, or press Cancel to leave the dialog.

### Parameters

None.

### Returns

Boolean; true if the project was saved.

### Project.setDefaultImportFolder()

app.project.setDefaultImportFolder(folder)

### Description

Chooses which folder the file-import dialog opens to. That choice stays in force as an override until setDefaultImportFolder() runs with no arguments, or until After Effects is shut down.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| folder | Extendscript Folder | Folder to set as default |

### Returns

Boolean; indicates if the operation was successful.

### Examples

Each of the lines below points the default import folder at C:/My Folder:

- var myFolder = new Folder("C:/My Folder"); app.project.setDefaultImportFolder(myFolder);
- app.project.setDefaultImportFolder(new Folder("C:/My Folder"));
- app.project.setDefaultImportFolder(Folder("C:/My Folder"));

Note: should the path actually name an existing file rather than a folder, the Folder function yields a File object in place of a Folder object, and that makes setDefaultImportFolder() come back false.

To point the default import folder at the desktop of the logged-in user: app.project.setDefaultImportFolder(Folder.desktop);

To turn the default folder off, run setDefaultImportFolder() without any parameters: app.project.setDefaultImportFolder();

### Project.showWindow()

app.project.showWindow(doShow)

### Description

Reveals or conceals the Project panel.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| doShow | Boolean | When true, show the Project panel. When false, hide the Project panel. |

### Returns

Nothing.

## System object — Methods

### System.callSystem()

system.callSystem(cmdLineToExecute);

### Description

Runs a system command exactly as though you had entered it at the operating system's command line, and returns whatever the system prints back, if anything. On Windows, hand the command to cmd.exe behind its /c switch, wrapping the command you want in escaped quotes (\"...\"). For instance, the snippet below fetches the current time and shows it to the user:

```
var timeStr = system.callSystem("cmd.exe /c \"time /t\"");
alert("Current time is " + timeStr);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| cmdLineToExecute | String | The command and its parameters. |

### Returns

The output from the command.

## Item object — Methods

### Item.addGuide()

app.project.item(index).addGuide(orientationType, position)

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

Builds a fresh guide and drops it into the Item's guides object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| orientationType | Integer | 0 for a horizontal guide, 1 for a vertical guide. Any other value defaults to horizontal. |
| position | Integer | The X or Y coordinate position of the guide in pixels, depending on its orientationType. |

### Returns

Integer; the index of the newly-created guide.

### Example

Drops a vertical guide onto the X axis at 500 pixels for a project's activeItem.

```
app.project.activeItem.addGuide(1, 500);
```

### Item.remove()

app.project.item(index).remove()

### Description

Erases this item from both the project and the Project panel. When the item is a FolderItem, everything held inside that folder leaves the project too. Nothing is deleted from the disk — no files and no folders.

### Parameters

None.

### Returns

Nothing.

### Item.removeGuide()

app.project.item(index).removeGuide(guideIndex)

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

Deletes a guide that already exists, identified by its position within the Item.guides object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| guideIndex | Integer | The index of the guide to be removed. |

### Returns

Nothing.

### Example

Deletes the first guide of activeItem.

```
app.project.activeItem.removeGuide(0);
```

Warning

Once a guide is removed, every guide above it in the index list slides down one position.

### Item.setGuide()

app.project.item(index).setGuide(position,guideIndex)

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

Repositions a guide that already exists, picked out by its guideIndex inside the Item.guides array.

After a guide exists, its orientationType is locked and cannot be switched.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| position | Integer | The new X or Y coordinate position of the guide in pixels, depending on its existing orientationType. |
| guideIndex | Integer | The index of the guide to be modified. |

### Returns

Nothing.

### Example

Moves activeItem's first guide to the 1200-pixel mark.

```
app.project.activeItem.setGuide(1200, 0);
```

## ItemCollection object — Methods

### ItemCollection.addComp()

app.project.items.addComp(name, width, height, pixelAspect, duration, frameRate)

### Description

Builds a fresh CompItem object, adds it to this collection, and returns it.

When the ItemCollection is the project's or the root folder's, the new item's parentFolder becomes the root folder.

When the ItemCollection belongs to some other folder, the new item's parentFolder is set to that FolderItem.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the composition. |
| width | Integer, in the range [4..30000] | The width of the composition in pixels. |
| height | Integer, in the range [4..30000] | The height of the composition in pixels. |
| pixelAspect | Floating-point value, in the range [0.01..100.0] | The pixel aspect ratio of the composition. |
| duration | Floating-point value, in the range [0.0..10800.0] | The duration of the composition in seconds. |
| frameRate | Floating-point value, in the range [1.0..99.0] | The frame rate of the composition. |

### Returns

CompItem object

### ItemCollection.addFolder()

app.project.items.addFolder(name)

### Description

Builds a fresh FolderItem object, adds it to this collection, and returns it.

When the ItemCollection is the project's or the root folder's, the new folder's parentFolder becomes the root folder.

When the ItemCollection belongs to some other folder, the new folder's parentFolder is set to that FolderItem. Assign the Item.parentFolder attribute to move items into the folder.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the folder. |

### Returns

FolderItem object.

### Example

The script below makes a fresh FolderItem in the Project panel and shifts compositions into it.

```
//create a new FolderItem in project, with name "comps"
var compFolder = app.project.items.addFolder("comps");
//move all compositions into new folder by setting
//comp Item's parentFolder to "comps" folder
for (var i = 1; i <= app.project.numItems; i++) {
    if (app.project.item(i) instanceof CompItem) {
        app.project.item(i).parentFolder = compFolder;
    }
}
```

## AVItem object — Methods

### AVItem.setProxy()

app.project.item(index).setProxy(file)

### Description

Assigns a given file to serve as this AVItem's proxy.

The named file is read into a freshly created FileSource object; that object becomes the proxySource attribute, and useProxy is flipped to true.

Interpretation parameters are not carried over here — the user preferences are applied instead. When the file carries an unlabeled alpha channel and the relevant preference is configured to query the user, no prompt appears: the method just estimates how the alpha should be read.

The behavior is unlike assigning a FootageItem's mainSource, yet both operations mirror what happens through the user interface.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File object | The file to be used as a proxy. |

### Returns

None.

### AVItem.setProxyToNone()

app.project.item(index).setProxyToNone()

### Description

Detaches any proxy from this AVItem: proxySource is reset to null and useProxy is switched to false.

### Parameters

None.

### Returns

Nothing.

### AVItem.setProxyWithPlaceholder()

app.project.item(index).setProxyWithPlaceholder(name, width, height ,frameRate, duration)

### Description

Builds a PlaceholderSource object from the supplied values, makes it the proxySource attribute, and sets useProxy to true. As with the other proxy calls, the interpretation parameters are taken from the user preferences rather than preserved.

Note

The interface offers no direct command for assigning a placeholder as a proxy; you only see this state when an existing proxy is later relocated or removed.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the new object. |
| width | Integer, in the range [4..30000] | The pixel dimensions of the placeholder. |
| height | Integer, in the range [4..30000] | The pixel dimensions of the placeholder. |
| frameRate | Integer, in the range [1..99] | Frame rate for the proxy. |
| duration | Integer, in the range [0.0..10800.0] | The total length in seconds, up to 3 hours. |

### Returns

Nothing.

### AVItem.setProxyWithSequence()

app.project.item(index).setProxyWithSequence(file,forceAlphabetical)

### Description

Assigns a file sequence as this AVItem's proxy, optionally locking the order to alphabetical. The named sequence is read into a new FileSource object, which becomes the proxySource attribute, and useProxy is set to true.

Interpretation parameters are not retained — the user preferences govern instead. Should any file in the sequence have an unlabeled alpha channel while the preference is set to ask, the method skips the prompt and estimates the alpha interpretation on its own.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File object | The first file in the sequence. |
| forceAlphabetical | Boolean | When true, use the "Force alphabetical order" option. |

### Returns

Nothing.

### AVItem.setProxyWithSolid()

app.project.item(index).setProxyWithSolid(color, name, width, height, pixelAspect)

### Description

Builds a SolidSource object from the supplied values, makes it the proxySource attribute, and sets useProxy to true. Here too the interpretation parameters come from the user preferences rather than being preserved.

Note

Assigning a solid as a proxy is not possible from the interface; this capability exists only via scripting.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| color | Array of three floating-point values, [R, G, B], in the range [0.0..1.0]. | The color of the solid. |
| name | String | The name of the new object. |
| width, height | Integer, in the range [1..30000] | The pixel dimensions of the placeholder. |
| pixelAspect | Floating-point value, in the range [0.01..100.0] | The pixel aspect ratio of the solid. |

### Returns

Nothing.

## CompItem object — Methods

### CompItem.duplicate()

app.project.item(index).duplicate()

### Description

Makes a copy of this composition — carrying over the same layers as the original — and hands it back.

### Parameters

None.

### Returns

CompItem object.

### CompItem.exportAsMotionGraphicsTemplate()

app.project.item(index).exportAsMotionGraphicsTemplate(doOverWriteFileIfExisting[, file_path])

Note

This functionality was added in After Effects 15.0 (CC 2018)

### Description

Writes the composition out as a Motion Graphics template, returning true on a successful export and false otherwise.

The file name for the Motion Graphics template comes from the name in the Essential Graphics panel (for instance, "My Template.mogrt"). Set that name through the motionGraphicsTemplateName attribute.

You may also pass the folder path where the template file should land. Leave it out and the file goes into the current user's Motion Graphics Templates folder:

| OS | Path |
| --- | --- |
| macOS | /Users/<name>/Library/Application Support/Adobe/Common/Motion Graphics Templates/ |
| Windows | C:\Users<name>\AppData\Roaming\Adobe\Common\Motion Graphics Templates\ |

Where edits have occurred since the project was last saved, After Effects asks the user to save it. Call the project save() method ahead of the export to skip that prompt.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| doOverWriteFileIfExisting | Boolean | Whether to overwrite an existing file of the same name. |
| file_path | String | Optional. Path to the folder where the file will be saved. |

### Returns

Boolean.

### CompItem.getMotionGraphicsTemplateControllerName()

app.project.item(index).getMotionGraphicsTemplateControllerName(index)

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

Retrieves the name of one property within the Essential Graphics panel.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index | Integer | The index of the EGP property whose name will be returned. |

### Returns

String; read-only.

### CompItem.setMotionGraphicsControllerName()

app.project.item(index).setMotionGraphicsControllerName(index, newName)

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

Assigns the name of one property within the Essential Graphics panel.

Tip

For renaming a property at the moment it goes into the EGP, see Property.addToMotionGraphicsTemplateAs().

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index | Integer | The index of the EGP property to be renamed. |
| newName | String | The new name for the EGP property. |

### Returns

String; read-only.

### CompItem.layer()

app.project.item(index).layer(index)

app.project.item(index).layer(otherLayer, relIndex)

app.project.item(index).layer(name)

### Description

Hands back a Layer object, identified either by its name, by an index position in this layer, or by an index taken relative to some other layer.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index | Integer, in the range [1..numLayers], where numLayers is the number of layers in the composition | The index number of the desired layer in this composition. |

or:

| Parameter | Type | Description |
| --- | --- | --- |
| otherLayer | Layer object in this composition. | The relIndex value is added to the index value of this layer to find the position of the desired layer. |
| relIndex | Integer, in the range [1 - otherLayer.index .. numLayers - otherLayer.index], where numLayers is the number of layers in the composition. | The position of the desired layer, relative to otherLayer. This value is added to the otherLayer value to derive the absolute index of the layer to return. |

or:

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the desired layer. |

### Returns

Layer object.

### CompItem.openInEssentialGraphics()

app.project.item(index).openInEssentialGraphics()

Note

This functionality was added in After Effects 15.0 (CC 2018)

### Description

Brings the composition up inside the Essential Graphics panel.

### Parameters

None.

### Returns

Nothing.

### CompItem.openInViewer()

app.project.item(index).openInViewer()

### Description

Brings the composition up in a Composition panel, then pushes that panel to the front and hands it focus.

### Parameters

None.

### Returns

Viewer object object for the Composition panel, or null if the composition could not be opened.

## FolderItem object — Methods

### FolderItem.item()

app.project.item(index).item(subIndex)

### Description

Hands back this folder's top-level item sitting at the index you specify.

Keep in mind that "top-level" here refers to top-level inside the folder, which need not coincide with top-level inside the project.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| subIndex | Integer | The position index of the item to retrieve. The first item is at index 1. |

### Returns

Item object.

## FootageItem object — Methods

### FootageItem.openInViewer()

app.project.item(index).openInViewer()

### Description

Brings the footage up in a Footage panel, then pushes that panel to the front and hands it focus.

Tip

This method can open missing and placeholder footage, which you cannot open by hand (by double-clicking it).

### Parameters

None.

### Returns

Viewer object for the Footage panel, or null if the footage could not be opened.

### FootageItem.replace()

app.project.item(index).replace(file)

### Description

Swaps this FootageItem's source over to the file you name.

Beyond reading the file in, the method spins up a fresh FileSource object for it and points mainSource at that object. Drawing on the file's contents, it fills in the new source object's name, width, height, frameDuration, and duration attributes (see AVItem object).

Interpretation parameters carry over from the prior mainSource object.

Where the chosen file carries an unlabeled alpha channel, the method estimates how to interpret the alpha.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File object | The file to be used as the footage main source. |

### FootageItem.replaceWithPlaceholder()

app.project.item(index).replaceWithPlaceholder(name, width, height, frameRate, duration)

### Description

Swaps this FootageItem's source over to the placeholder you specify. A new PlaceholderSource object is created, its values are taken from the parameters, and mainSource is pointed at it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the placeholder. |
| width | Integer, in the range [4..30000] | The width of the placeholder in pixels. |
| height | Integer, in the range [4..30000] | The height of the placeholder in pixels. |
| frameRate | Floating-point value, in the range [1.0..99.0] | The frame rate of the placeholder. |
| duration | Floating-point value, in the range [0.0..10800.0] | The duration of the placeholder in seconds. |

### FootageItem.replaceWithSequence()

app.project.item(index).replaceWithSequence(file, forceAlphabetical)

### Description

Swaps this FootageItem's source over to the image sequence you specify.

Beyond reading the file in, the method spins up a fresh FileSource object for it and points mainSource at that object. Drawing on the file's contents, it fills in the new source object's name, width, height, frameDuration, and duration attributes (see AVItem object).

Interpretation parameters carry over from the prior mainSource object. Where the chosen file carries an unlabeled alpha channel, the method estimates how to interpret the alpha.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File object | The first file in the sequence to be used as the footage main source. |
| forceAlphabetical | Boolean | When true, use the "Force alphabetical order" option. |

### FootageItem.replaceWithSolid()

app.project.item(index).replaceWithSolid(color, name, width, height, pixelAspect)

### Description

Swaps this FootageItem's source over to the solid you specify. A new SolidSource object is created, its values are taken from the parameters, and mainSource is pointed at it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| color | Array of three floating-point values, [R, G, B], in the range [0.0..1.0]. | The color of the solid. |
| name | String | The name of the solid. |
| width | Integer, in the range [4..30000] | The width of the solid in pixels. |
| height | Integer, in the range [4..30000] | The height of the solid in pixels. |
| pixelAspect | Floating-point value, in the range [0.01..100.0] | The pixel aspect ratio of the solid. |

## See also

- [Application](script-application.md)
