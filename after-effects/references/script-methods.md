# Methods (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Global functions — Methods

### clearOutput()

clearOutput()

### Description

Wipes whatever currently sits in the Info panel output.

### Parameters

None.

### Returns

Nothing.

### currentFormatToTime()

currentFormatToTime(formattedTime, fps[, isDuration])

### Description

Takes a frame time written as a formatted string and, against a given frame rate, returns the matching count of seconds. Say the formatted frame time reads 0:00:12 (a project setting dictates the precise string layout) and the rate is 24 fps; that resolves to 0.5 seconds (12/24). At 30 fps the same string yields 0.4 seconds (12/30). Durations have their frames tallied beginning at 0; everything else is tallied from the project's start frame (see Project.displayStartFrame).

### Parameters

| Parameter | Description |
| --- | --- |
| formattedTime | The frame time value, a string specifying a number of frames in the project's current time display format. |
| fps | The frames-per-second, a floating-point value. |
| isDuration | Optional. When true, the time is a duration (measured from frame 0). When false (the default), the time is measured from the project's starting frame. |

### Returns

Floating-point value, the number of seconds.

### generateRandomNumber()

generateRandomNumber()

Note

This functionality was added in After Effects 13.6 (CC 2015)

### Description

Produces random numbers. When the random values are destined to become project values (e.g., when using setValue), reach for this rather than Math.random().

The reason: a multi-CPU-thread concurrency bug kept Math.random() from yielding truly random output in After Effects CC 2015 (13.5.x), and this method sidesteps that.

### Returns

Floating-point, pseudo-random number in the range [0..1].

### Example

```
// change the position X of all layers with random number

var myComp = app.project.activeItem;
var x = 0;

for (var i = 1; i <= myComp.numLayers; i++) {
    // If you use Math.random(), this does not work
    // x = 400 * (Math.random()) - 200;
    // use new generateRandomNumber() instead

    x = 400 * generateRandomNumber() - 200;
    var currentPos = myComp.layer(i).property("Position").value;
    myComp.layer(i).property("Position").setValue([currentPos[0] + x, currentPos[1]]);
}
```

### getEnumAsString()

getEnumAsString()

Note

This functionality was added in After Effects 24.0

### Description

Hands back the string form of an Enum.

### Parameters

Enum.

### Returns

String.

### Example

```
// Returns: "BlendingMode.ADD"
alert(getEnumAsString(5220));
```

### isValid()

isValid(obj)

### Description

Tests whether a given After Effects object (e.g., composition, layer, mask, etc.) is still around. Certain calls, PropertyBase.moveTo() among them, can break variable references you previously bound to related objects, so use this to confirm such a reference still holds before you try to read from it.

### Parameters

| Parameter | Description |
| --- | --- |
| obj | The After Effects object to check for validity. |

### Returns

Boolean.

### Example

```
var layer = app.project.activeItem.layer(1); // assume layer has three masks
alert(isValid(layer)); // displays "true"
var mask1 = layer.mask(1);
var mask2 = layer.mask(2);
var mask3 = layer.mask(3);
mask3.moveTo(1); // move the third mask to the top of the mask stack
alert(isValid(mask1)); // displays "false"; mask2 and mask3 do as well
```

timeToCurrentFormat(time, fps[, isDuration])

### Description

Goes the other direction from a numeric time (a count of seconds) to a frame time, meaning a formatted string naming the frame that lands at that moment for the rate you give. With a time of 0.5 seconds at 24 fps, the frame reads 0:00:12 (assuming the project shows time as timecode). Switch the rate to 30 fps and it becomes 0:00:15. A project setting governs how the timecode string is formatted. Durations count their frames from 0, while all other times count from the project's start frame (see Project displayStartFrame attribute).

### Parameters

| Parameter | Description |
| --- | --- |
| time | The number of seconds, a floating-point value. |
| fps | The frames-per-second, a floating-point value. |
| isDuration | Optional. When true, the time is a duration (measured from frame 0). When false (the default), the time is measured from the project's starting frame. |

### Returns

String in the project's current time display format.

### write()

write(text)

### Description

Pushes output into the Info panel without tacking on a line break.

### Parameters

| Parameter | Description |
| --- | --- |
| text | The string to display. Truncated if too long for the Info panel. |

### Returns

Nothing.

### Example

```
write("This text appears in Info panel ");
write("with more on same line.");
```

### writeLn()

writeLn(text)

### Description

Sends output to the Info panel, finishing it off with a line break.

### Parameters

| Parameter | Description |
| --- | --- |
| text | The string to display. |

### Returns

Nothing.

### Example

```
writeLn("This text appears on first line");
writeLn("This text appears on second line");
```

## Application object — Methods

### app.activate()

app.activate()

### Description

Restores the main application window from a minimized or iconified state and pulls it forward to the front of the desktop.

### Parameters

None.

### Returns

Nothing.

### app.beginSuppressDialogs()

app.beginSuppressDialogs()

### Description

Starts holding back script error dialog boxes in the interface. Call app.endSuppressDialogs() when you want those error dialogs showing again.

### Parameters

None.

### Returns

Nothing.

### app.beginUndoGroup()

app.beginUndoGroup(undoString)

### Description

Flags where an undo group starts, letting a script bundle all its actions into one undoable step (handy with the Edit > Undo/Redo menu items). Pair it with the app.endUndoGroup() method to flag where the group ends.

You can nest beginUndoGroup() and endUndoGroup() pairs. An inner group folds into the surrounding one and still undoes properly; when that happens the inner group names go unused.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| undoString | String | The text that will appear for the Undo command in the Edit menu (that is, "Undo") |

### Returns

Nothing.

### app.cancelTask()

app.cancelTask(taskID)

### Description

Pulls the named task out of the queue holding tasks set aside for delayed execution.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| taskID | Integer | An integer that identifies the task, as returned by app.scheduleTask(). |

### Returns

Nothing.

### app.endSuppressDialogs()

app.endSuppressDialogs(alert)

### Description

Stops holding back script error dialog boxes in the interface. Since error dialogs show by default, only invoke this once app.beginSuppressDialogs() has already run.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| alert | Boolean | When true, errors that have occurred following the call to beginSuppressDialogs() are displayed in a dialog box. |

### Returns

Nothing.

### app.endUndoGroup()

app.endUndoGroup()

### Description

Flags where an undo group opened by app.beginUndoGroup() comes to an end. Use it to drop an undo-group boundary partway through a script when you want more than one undo group in a single script. With just one undo group per script you can skip it; left off at the script's end, the system seals the undo group for you. Calling it when no beginUndoGroup() has been set raises an error.

### Parameters

None.

### Returns

Nothing.

### app.endWatchFolder()

app.endWatchFolder()

### Description

Shuts off Watch Folder mode.

### Parameters

None.

### Returns

Nothing.

### See Also

- app.watchFolder()
- app.parseSwatchFile()
- app.isWatchFolder

### app.executeCommand()

app.executeCommand(id)

### Description

Each Menu Command in the GUI application carries its own ID number, and that number is what you feed this method. A handful of features absent from the API can be reached no other way.

Use the app.findMenuCommandId() method to look up a command's ID number.

For more detail and lists of the IDs people have catalogued, see these sites:

- https://www.provideocoalition.com/after-effects-menu-command-ids/
- https://hyperbrew.co/blog/after-effects-command-ids/

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| id | Integer | The ID number of the command. |

### Returns

None.

### Example

```
// calls the Convert to Bezier Path command
app.executeCommand(4162);
```

### app.findMenuCommandId()

app.findMenuCommandId(command)

### Description

Each Menu Command in the GUI application carries its own ID number, which then serves as an argument to the app.executeCommand() command. A handful of features absent from the API can be reached no other way.

Worth noting: this method isn't dependable across After Effects language packages, so the usual approach is to discover the command ID number while developing and then invoke it directly by number in production.

For more detail and lists of the IDs people have catalogued, see these sites:

- https://www.provideocoalition.com/after-effects-menu-command-ids/
- https://hyperbrew.co/blog/after-effects-command-ids/

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| command | String | The text of the menu command, exactly as it is shown in the UI. |

### Returns

Integer, the ID number of the menu command.

### Example

```
app.findMenuCommandId("Convert To Bezier Path")
```

### app.newProject()

app.newProject()

### Description

Builds a fresh After Effects project, mirroring the File > New > New Project menu command. Should the current project carry unsaved edits, the user gets a save prompt. If the user backs out of the Save dialog box, no new project gets made and the method returns null.

Close the current project first with app.project.close(CloseOptions.`DO_NOT_SAVE_CHANGES`) before you open a new one. See Project.close()

### Parameters

None.

### Returns

A new Project object, or null if no new project is created.

### Example

```
app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
app.newProject();
```

### app.open()

app.open()

app.open(file)

### Description

Opens a project.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File | Optional. Project file to open. If not supplied, the method prompts the user to select a project file. |

### Returns

A new Project object for the specified project, or null if the user cancels the Open dialog box.

### Example

```
var my_file = new File("../my_folder/my_test.aep");
if (my_file.exists) {
    var new_project = app.open(my_file);
    if (new_project) {
        alert(new_project.file.name);
    }
}
```

### app.openFast()

app.openFast(file)

Warning

This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!

### Description

Loads a project quicker than app.open() does by bypassing certain checks.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File | Project file to open. |

### Returns

A new Project object for the specified project.

### Example

```
var projectFile = new File("someFile.aep");

$.hiresTimer;
app.openFast(projectFile);
var fastEnd = $.hiresTimer / 1000;

app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);

$.hiresTimer;
app.open(projectFile);
var normalEnd = $.hiresTimer / 1000;

app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);

alert( "The difference is " + parseInt(normalEnd-fastEnd) + " ms" +
        "\n\nFast: " + fastEnd + " ms" +
        "\nNormal:" + normalEnd + " ms" );
```

### app.parseSwatchFile()

app.parseSwatchFile(file)

### Description

Reads color swatch data out of an Adobe Swatch Exchange (ASE) file.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File | The ASE file to parse. |

### Returns

The swatch data, in this format:

Property

Description

data.majorVersion data.minorVersion

The ASE version number.

data.values

An array of Swatch Value.

SwatchValue.type

One of "RGB", "CMYK", "LAB", "Gray"

SwatchValue.r SwatchValue.g SwatchValue.b

When type = "RGB", the color values in the range [0.0..1.0]. [0, 0, 0] is Black.

SwatchValue.c SwatchValue.m SwatchValue.y SwatchValue.k

When type = "CMYK", the color values in the range [0.0..1.0]. [0, 0, 0, 0] is White.

SwatchValue.L SwatchValue.a SwatchValue.b

When type = "LAB", the color values. - L is in the range [0.0..1.0] - a and bare in the range [-128.0..+128.0] [0, 0, 0] is Black.

SwatchValue.value

When type = "Gray", the value range is [0.0..1.0]. 0.0 is Black.

| --- | --- |

### app.pauseWatchFolder()

app.pauseWatchFolder(pause)

### Description

Halts or restarts the scan of the chosen watch folder for items awaiting render.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pause | Boolean | true to pause, false to resume. |

### Returns

Nothing.

### See Also

- app.isWatchFolder
- app.watchFolder()
- app.endWatchFolder()

### app.purge()

app.purge(target)

Tip

This functionality was updated in After Effects 24.3 to allow the `ALL_CACHES` enumerated value to clear both the RAM and disk cache, with the `ALL_MEMORY_CACHES` enumerated value added to purge only the RAM. In versions prior to 24.3, `ALL_CACHES` will only clear the RAM cache.

### Description

Clears unused data of whatever types you name, mirroring the Purge choices on the Edit menu.

### Parameters

Parameter

Type

Description

target

PurgeTarget enum

Which kind of elements to clear out of memory. One of: - PurgeTarget.`ALL_CACHES`: Purges all data that After Effects has cached to both RAM and disk cache. - PurgeTarget.`ALL_MEMORY_CACHES`: Purges all data that After Effects has cached to RAM. (new in 24.3) - PurgeTarget.`UNDO_CACHES`: Purges all data saved in the undo cache. - PurgeTarget.`SNAPSHOT_CACHES`: Purges all data cached as composition/layer snapshots. - PurgeTarget.`IMAGE_CACHES`: Purges all saved image data.

| --- | --- | --- |

### Returns

Nothing.

### app.quit()

app.quit()

### Description

Closes the After Effects application.

### Parameters

None.

### Returns

Nothing.

### app.restart()

app.restart()

### Description

Relaunches the After Effects application.

### Parameters

None.

### Returns

Nothing.

### app.scheduleTask()

app.scheduleTask(stringToExecute, delay, repeat)

### Description

Queues the given JavaScript to run after a delay.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| stringToExecute | String | A string containing JavaScript to be executed. |
| delay | Float | A number of milliseconds to wait before executing the JavaScript. |
| repeat | Boolean | When true, execute the script repeatedly, with the specified delay between each execution. When false, the script is executed only once. |

### Returns

Integer, a unique identifier for this task, which can be used to cancel it with app.cancelTask().

### app.setMemoryUsageLimits()

app.setMemoryUsageLimits(imageCachePercentage, maximumMemoryPercentage)

### Description

Establishes memory usage caps just like the Memory & Cache preferences pane does. For each of the two figures, the percentage applies to installed RAM when that RAM falls under a stated amount (n gigabytes), and otherwise applies to n. That n equals: 2 GB on 32-bit Windows, 4 GB on 64-bit Windows, and 3.5 GB on Mac OS.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| imageCachePercentage | Float | The percentage of memory assigned to image cache. |
| maximumMemoryPercentage | Float | The maximum usable percentage of memory. |

### Returns

Nothing.

### app.setMultiFrameRenderingConfig()

app.setMultiFrameRenderingConfig(mfr_on, max_cpu_perc)

Note

This functionality was added in After Effects 22.0 (2022)

### Description

Invoke this from a script and you set the Multi-Frame Rendering configuration that the next render will use. Once the script finishes running, those settings revert to whatever the UI had before.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| mfr_on | Boolean | Set to true to enable Multi-Frame Rendering. |
| max_cpu_perc | Floating-point value, in the range [1..100] | The maximum CPU percentage Multi-Frame Rendering should utilize. If mfr_on is set to false, pass in 100. |

### Returns

Nothing.

### app.setSavePreferencesOnQuit()

app.setSavePreferencesOnQuit(doSave)

### Description

Turns on or off the flag deciding whether preferences get saved as the application closes.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| doSave | Boolean | When true, preferences saved on quit, when false they are not. |

### Returns

Nothing.

### app.watchFolder()

app.watchFolder(folder_object_to_watch)

### Description

Kicks off a Watch Folder (network rendering) process aimed at a folder you specify.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| folder_object_to_watch | Extendscript Folder | The folder to watch. |

### Returns

Nothing.

### Example

```
var theFolder = new Folder("c:/tool");
app.watchFolder(theFolder);
```

### See Also

- app.endWatchFolder()
- app.parseSwatchFile()
- app.isWatchFolder

## Project object — Methods

### Project.autoFixExpressions()

app.project.autoFixExpressions(oldText, newText)

### Description

Scans the project's broken expressions and swaps the located text for the replacement, but only when the substitution lets the expression run error-free.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| oldText | String | The text to replace. |
| newText | String | The new text. |

### Returns

Nothing.

### Project.close()

app.project.close(closeOptions)

### Description

Shuts the project down; you can have changes saved automatically, have the user asked first, or discard them.

### Parameters

Parameter

Type

Description

closeOptions

CloseOptions enum

Action to be performed on close. One of: - CloseOptions.`DO_NOT_SAVE_CHANGES`: Close without saving. - CloseOptions.`PROMPT_TO_SAVE_CHANGES`: Prompt for whether to save changes before close. - CloseOptions.`SAVE_CHANGES`: Save automatically on close.

| --- | --- | --- |

### Returns

Boolean. true on success. false if the file has not been previously saved, the user is prompted, and the user cancels the save.

### Project.consolidateFootage()

app.project.consolidateFootage()

### Description

Merges every footage item in the project together, equivalent to choosing File > Consolidate All Footage.

### Parameters

None.

### Returns

Integer; the total number of footage items removed.

### Project.importFile()

app.project.importFile(importOptions)

### Description

Brings in the file named by the supplied ImportOptions object under the options it carries — the scripting equivalent of File > Import File.

Builds a fresh FootageItem object from that file, appends it to the project's items array, and hands it back.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| importOptions | ImportOptions | Options specifying the file to import and the options for the operation. |

### Returns

FootageItem object.

### Example

```
app.project.importFile(new ImportOptions(new File("sample.psd"));
```

### Project.importFileWithDialog()

app.project.importFileWithDialog()

### Description

Brings up an Import File dialog box, matching the File > Import > File command.

### Returns

Array of Item objects created during import; or null if the user cancels the dialog box.

### Project.importPlaceholder()

app.project.importPlaceholder(name, width, height, frameRate, duration)

### Description

Builds a new PlaceholderItem, appends it to the project's items array, and returns it — the same as the File > Import > Placeholder command.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the placeholder. |
| width | Integer, in the range [4..30000] | The width of the placeholder in pixels. |
| height | Integer, in the range [4..30000] | The height of the placeholder in pixels. |
| frameRate | Floating-point value, in the range [1.0..99.0] | The frame rate of the placeholder. |
| duration | Floating-point value, in the range [0.0..10800.0] | The duration of the placeholder in seconds. |

### Returns

PlaceholderItem object.

### Project.item()

app.project.item(index)

### Description

Fetches whichever item sits at the given index position.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index | Integer | The index position of the item. The first item is at index 1. |

### Returns

Item object.

### Project.itemByID()

app.project.itemByID(id)

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

Looks up an item using its Item ID.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| id | Integer | The ID of an item |

### Returns

Item object.

### Project.layerByID()

app.project.layerByID(id)

Note

This functionality was added in After Effects 22.0 (2022)

### Description

A Project instance method that hands back the Layer object carrying the supplied ID, provided the ID is valid.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| id | Integer (non-negative) | The ID of the Layer to be retrieved from the Project. |

### Returns

Returns the matching Layer object when a layer with that ID is present on the project, or null when none is. Supplying an invalid ID raises an exception that reports the argument as not being an unsigned integer.

### Example

```
var firstComp = app.project.item(1);
var firstLayer = firstComp.layer(1);
var layerID = firstLayer.id;

if (app.project.layerByID(layerID) === firstLayer) {
    alert("You can get the Layer from the ID!");
}
```

## See also

- [Application](script-application.md)
