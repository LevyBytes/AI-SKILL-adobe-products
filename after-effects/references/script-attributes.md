# Attributes (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Application object — Attributes

### app.activeViewer

app.activeViewer

### Description

The Viewer object tied to whichever viewer panel (Composition, Layer, or Footage) currently holds focus or active focus. If no viewer is open, this comes back null.

### Type

Viewer object object; read-only.

### app.availableGPUAccelTypes

app.availableGPUAccelTypes

Note

This functionality was added in After Effects 14.0 (CC 2017)

### Description

Pair this with app.project.gpuAccelType to drive the value under Project Settings > Video Rendering and Effects > Use.

### Type

Array of GpuAccelType enums, or null if no viewers are open; read-only. One of:

- CUDA
- Metal
- OPENCL
- SOFTWARE

### Example

Below, the snippet reads which GPU acceleration types this machine offers, then switches to Metal when that option is present.

```
// app.availableGPUAccelTypes returns GPU acceleration types available on the current system.
// You can use this to check before setting the GPU acceleration type.
var newType = GpuAccelType.METAL;

// Before trying to set, check which GPU acceleration types are available on the current system.
var canSet = false;
var currentOptions = app.availableGPUAccelTypes;
for (var op in currentOptions) {
    if (currentOptions[op] === newType) {
        canSet = true;
    }
}

if (canSet) {
    // Set the GPU acceleration type.
    app.project.gpuAccelType = newType;
} else {
    alert("Metal is not available on this OS.");
}
```

### app.buildName

app.buildName

### Description

Identifies, by name, the running After Effects build; Adobe relies on it internally for testing and troubleshooting.

### Type

String; read-only.

### app.buildNumber

app.buildNumber

### Description

Identifies, by number, the running After Effects build; Adobe relies on it internally for testing and troubleshooting.

### Type

Integer; read-only.

### app.disableRendering

app.disableRendering

Note

This functionality was added in After Effects 16.0 (CC 2019)

### Description

Leave it false (the default) and rendering runs as usual. Flip it to true and rendering halts, the same effect as switching Caps Lock on.

### Type

Boolean; read/write.

### app.effects

app.effects

### Description

Every effect the application makes available.

### Type

Array, with each element containing the following properties; read-only:

| Property | Type | Description |
| --- | --- | --- |
| displayName | String | A string representing the localized display name of the effect as seen in the Effect menu. |
| category | String | A string representing the localized category label as seen in the Effect menu. This can be "" for synthetic effects that aren't normally shown to the user. |
| matchName | String | A string representing the internal unique name for the effect. This name does not change between versions of After Effects. Use this value to apply the effect. |
| version | String | Effect's internal version string. This value might be different than the version number the plug-in vendor decides to show in the effect's about box. |

### Example

```
var effectName = app.effects[12].displayName;
```

### app.exitAfterLaunchAndEval

app.exitAfterLaunchAndEval

### Description

This one matters solely when a script is run from a Windows command line. Launching the program that way and supplying the -r or -s command line flag tells it to run a script, sourced from a file or from a string respectively.

Set this to true and After Effects closes once the script finishes; leave it false and the program stays open. The attribute does nothing unless After Effects was started from the Windows command line, and it carries no weight on Mac OS.

### Type

Boolean; read/write.

### app.exitCode

app.exitCode

### Description

A numeric status code in play when a script runs externally, that is, from a command line or AppleScript.

- In Windows, the value is returned on the command line when After Effects was launched on the command line (using the afterfx or afterfx -m command), and a script was specified with the -r or -s option.
- In Mac OS, the value is returned as the AppleScript DoScript result for each script.
- In both Mac OS and Windows, the value is set to 0 (`EXIT_SUCCESS`) at the beginning of each script evaluation. In the event of an error while the script is running, the script can set this to a positive integer that indicates what error occurred.

### Type

Integer; read/write.

### Example

```
app.exitCode = 2; // on quit, if value is 2, an error has occurred
```

### app.fonts

app.fonts

Note

This functionality was added in After Effects 24.0

### Description

Hands back an object you can use to walk through and pull every font your system currently has on hand.

### Type

Fonts object; read-only.

### app.isoLanguage

app.isoLanguage

### Description

A string reporting the locale, the language and regional settings, under which After Effects is running.

Tip

$.locale returns the operating system language, not the language of the After Effects application.

### Type

String; read-only. Some common values include:

- en_US for English (United States)
- de_DE for German (Germany)
- es_ES for Spanish (Spain)
- fr_FR for French (France)
- it_IT for Italian (Italy)
- ja_JP for Japanese (Japan)
- ko_KR for Korean (Korea)

### Example

```
var lang = app.isoLanguage;
if (lang === "en_US") {
    alert("After Effects is running in English.");
} else if (lang === "fr_FR") {
    alert("After Effects is running in French.");
} else {
    alert("After Effects is running not in English or French.");
}
```

### app.isRenderEngine

app.isRenderEngine

### Description

true when After Effects is operating as a render engine.

### Type

Boolean; read-only.

### app.isWatchFolder

app.isWatchFolder

### Description

true while the Watch Folder dialog box is on screen and the application is actively watching a folder to render from.

### Type

Boolean; read-only.

### app.memoryInUse

app.memoryInUse

### Description

How many bytes of memory this application is consuming at the moment.

### Type

Number; read-only.

### app.onError

app.onError

### Description

Names a callback function to fire whenever an error happens. Write such a function, assign it here, and you gain a uniform way to handle errors; for instance, you might shut down and relaunch the program, logging the error to a file if it struck mid-render. See RenderQueue.render(). After Effects passes the callback both an error string and a severity string, and the callback should return nothing.

### Type

A function name string, or null if no function is assigned; read/write.

### Example

```
function err(errString) {
    alert(errString) ;
}
app.onError = err;
```

### app.preferences

app.preferences

### Description

The AE app preferences in effect right now. See Preferences object.

### Type

Preferences object; read-only.

### app.project

app.project

### Description

Whichever project is loaded at the moment. See Project object.

### Type

Project object; read-only.

### app.saveProjectOnCrash

app.saveProjectOnCrash

### Description

Left true (the default), After Effects tries to bring up a dialog box offering to save the current project should an error force the application to close without warning.

Switch it to false and that dialog is skipped, so the program quits without saving.

### Type

Boolean; read/write.

### app.settings

app.settings

### Description

The settings loaded at present. See Settings object.

### Type

Settings object; read-only.

### app.version

app.version

Note

This functionality was added in After Effects 12.0 (CC)

### Description

An alphanumeric string that reports the After Effects version in use.

### Type

String; read-only.

### Example

```
var ver = app.version;
alert("This machine is running version " + ver + " of AfterEffects.");
```

## Project object — Attributes

app.project.renderQueue

### Description

The project's Render Queue.

### Type

RenderQueue object; read-only.

### Project.revision

app.project.revision

### Description

Where the project currently stands by revision. Each action a user takes bumps the revision number up. A brand-new project opens at revision 1.

### Type

Integer; the current revision version of the project; read-only.

### Project.rootFolder

app.project.rootFolder

### Description

The folder at the project's root, holding the project's contents; it is a virtual folder gathering every item shown in the Project panel, yet excluding items tucked inside other folders there.

### Type

FolderItem object; read-only.

### Project.selection

app.project.selection

### Description

Every item picked in the Project panel, ordered the same way the Project panel sorts them.

### Type

Array of Item objects; read-only.

### Project.timeDisplayType

app.project.timeDisplayType

### Description

How time is displayed, matching the Time Display Style section of the Project Settings dialog box.

### Type

A TimeDisplayType enumerated value; read/write. One of:

- TimeDisplayType.FRAMES
- TimeDisplayType.TIMECODE

### Project.toolType

app.project.toolType

Note

This functionality was added in After Effects 14.0 (CC 2017)

### Description

Reads and sets which tool is active in the Tools panel.

### Type

A ToolType enumerated value; read/write. One of:

- ToolType.Tool_Arrow: Selection Tool
- ToolType.Tool_Rotate: Rotation Tool
- ToolType.Tool_CameraMaya: Unified Camera Tool
- ToolType.Tool_CameraOrbit: Orbit Camera Tool
- ToolType.Tool_CameraTrackXY: Track XY Camera Tool
- ToolType.Tool_CameraTrackZ: Track Z Camera Tool
- ToolType.Tool_Paintbrush: Brush Tool
- ToolType.Tool_CloneStamp: Clone Stamp Tool
- ToolType.Tool_Eraser: Eraser Tool
- ToolType.Tool_Hand: Hand Tool
- ToolType.Tool_Magnify: Zoom Tool
- ToolType.Tool_PanBehind: Pan Behind (Anchor Point) Tool
- ToolType.Tool_Rect: Rectangle Tool
- ToolType.Tool_RoundedRect: Rounded Rectangle Tool
- ToolType.Tool_Oval: Ellipse Tool
- ToolType.Tool_Polygon: Polygon Tool
- ToolType.Tool_Star: Star Tool
- ToolType.Tool_TextH: Horizontal Type Tool
- ToolType.Tool_TextV: Vertical Type Tool
- ToolType.Tool_Pen: Pen Tool
- ToolType.Tool_Feather: Mask Feather Tool
- ToolType.Tool_PenPlus: Add Vertex Tool
- ToolType.Tool_PenMinus: Delete Vertex Tool
- ToolType.Tool_PenConvert: Convert Vertex Tool
- ToolType.Tool_Pin: Puppet Pin Tool
- ToolType.Tool_PinStarch: Puppet Starch Tool
- ToolType.Tool_PinDepth: Puppet Overlap Tool
- ToolType.Tool_Quickselect: Roto Brush Tool
- ToolType.Tool_Hairbrush: Refine Edge Tool

### Examples

This first snippet inspects the active tool and, unless it is already the Unified Camera Tool, switches the active tool to it:

```
// Check the current tool, then set it to Unified Camera Tool (UCT).
// Assume a composition is selected in the project.
var comp = app.project.activeItem;
if (comp instanceof CompItem) {
    // Add a camera to the current comp. (Requirement for UCT)
    var cameraLayer = comp.layers.addCamera("Test Camera", [comp.width / 2, comp.height / 2]);
    comp.openInViewer();

    // If the currently selected tool is not one of the camera tools, set it to UCT.
    if (( app.project.toolType !== ToolType.Tool_CameraMaya) &&
        ( app.project.toolType !== ToolType.Tool_CameraOrbit ) &&
        ( app.project.toolType !== ToolType.Tool_CameraTrackXY) &&
        ( app.project.toolType !== ToolType.Tool_CameraTrackZ)) {
            app.project.toolType = ToolType.Tool_CameraMaya;
        }
}
```

This next snippet leans on the new app.project.toolType attribute to spin up a 360-degree composition (an environment layer plus a camera) out of a footage item or composition chosen in the Project panel. Treat it as a solid jumping-off point for assembling VR compositions from equirectangular footage:

```
// Create a 360 VR comp from a footage item or comp selected in the Project panel.

var item = app.project.activeItem;
if (item !== null && (item.typeName === "Footage" || item.typeName === "Composition")) {
    // Create a comp with the footage.
    var comp = app.project.items.addComp(item.name, item.width, item.height, item.pixelAspect, item.duration, item.frameRate);
    var layers = comp.layers;
    var footageLayer = layers.add(item);

    // Apply the CC Environment effect and create a camera.
    var effect = footageLayer.Effects.addProperty("CC Environment");
    var camera = layers.addCamera("360 Camera", [item.width / 2, item.height / 2]);
    comp.openInViewer();
    app.project.toolType = ToolType.Tool_CameraMaya;
} else {
    alert("Select a single footage item or composition in the Project panel.");
}
```

### Project.transparencyGridThumbnails

app.project.transparencyGridThumbnails

### Description

When true, the transparency checkerboard pattern backs the thumbnail views.

### Type

Boolean; read/write.

### Project.usedFonts

app.project.usedFonts

Note

This functionality was added in After Effects 24.5

### Description

Gives back an Array of Objects that point to the fonts in use along with the Text Layers and the times at which each appears in the current Project. Every object holds font, a Font object, and usedAt, an Array of Objects, each of which holds layerID (a Layer.id) and layerTimeD for the moment in question. Turn to Project.layerByID() to fetch the layers.

### Project.activeItem

app.project.activeItem

### Description

Whatever item is active and slated to be acted on, or null when nothing is selected or when more than one item is selected.

### Type

Item object or null; read-only.

### Project.bitsPerChannel

app.project.bitsPerChannel

### Description

The project's color depth, which is 8, 16, or 32 bits.

### Type

Integer (8, 16, or 32 only); read/write.

### Project.compensateForSceneReferredProfiles

app.project.compensateForSceneReferredProfiles

Note

This functionality was added in After Effects 16.0 (CC 2019)

### Description

true when Compensate for Scene-referred Profiles ought to be on for this project; otherwise false.

### Type

Boolean; read/write.

### Project.dirty

app.project.dirty

Note

This functionality was added in After Effects 17.5 (CC2020).

Warning

This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!

### Description

true once the project differs from its last saved state; otherwise false.

A "Dirty" project shows an \* in the project window title.

### Type

Boolean; read-only.

### Project.displayStartFrame

app.project.displayStartFrame

### Description

A second route to the Frame Count menu setting in the Project Settings dialog box, fixing it at 0 or 1; it amounts to applying the FramesCountType.`FC_START_0` or FramesCountType.`FC_START_1` enumerated values to framesCountType.

### Type

Integer (0 or 1); read/write.

### Project.expressionEngine

app.project.expressionEngine

Note

This functionality was added in After Effects 16.0 (CC 2019)

### Description

The Expressions Engine choice from the Project Settings dialog box, given as a string. One of:

- extendscript
- javascript-1.0

### Type

String; read/write.

### Project.feetFramesFilmType

app.project.feetFramesFilmType

### Description

The Use Feet + Frames menu choice in the Project Settings dialog box. Reach for this attribute in place of the older timecodeFilmType attribute.

### Type

A FeetFramesFilmType enumerated value; read/write. One of:

- FeetFramesFilmType.MM16
- FeetFramesFilmType.MM35

### Project.file

app.project.file

### Description

The Extendscript File object representing the file that holds the project open right now.

### Type

File object or null if project has not been saved; read-only.

### Project.footageTimecodeDisplayStartType

app.project.footageTimecodeDisplayStartType

### Description

The Footage Start Time choice in the Project Settings dialog box, which becomes available once Timecode is the chosen time display style.

### Type

A FootageTimecodeDisplayStartType enumerated value; read/write. One of:

- FootageTimecodeDisplayStartType.`FTCS_START_0`
- FootageTimecodeDisplayStartType.`FTCS_USE_SOURCE_MEDIA`

### Project.framesCountType

app.project.framesCountType

### Description

The Frame Count menu choice in the Project Settings dialog box.

### Type

A FramesCountType enumerated value; read/write. One of:

- FramesCountType.`FC_START_1`
- FramesCountType.`FC_START_0`
- FramesCountType.`FC_TIMECODE_CONVERSION`

Warning

Setting this attribute to FramesCountType.`FC_TIMECODE_CONVERSION` resets the displayStartFrame attribute to 0.

### Project.framesUseFeetFrames

app.project.framesUseFeetFrames

### Description

The "Use Feet + Frames" choice in the Project Settings dialog box.

true while Feet + Frames is in use; false while Frames is in use.

### Type

Boolean; read/write.

### Project.gpuAccelType

app.project.gpuAccelType

Note

This functionality was added in After Effects 13.8 (CC 2015.3)

### Description

Reads or assigns the current project's GPU Acceleration option. see app.availableGPUAccelTypes

### Type

A GpuAccelType enumerated value; read/write. One of:

- GpuAccelType.CUDA
- GpuAccelType.Metal
- GpuAccelType.OPENCL
- GpuAccelType.SOFTWARE

### Example

```
// access via scripting to Project Settings -> Video Rendering and Effects -> Use

var currentGPUSettings = app.project.gpuAccelType; // returns the current value
var type_str = "";

// check the current value and alert the user

switch (currentGPUSettings) {
    case GpuAccelType.CUDA:
        type_str = "CUDA";
        break;
    case GpuAccelType.METAL:
        type_str = "Metal";
        break;
    case GpuAccelType.OPENCL:
        type_str = "OpenCL";
        break;
    case GpuAccelType.SOFTWARE:
        type_str = "Software";
        break;
    default:
        type_str = "UNKNOWN";
}

alert("Your current setting is " + type_str);

// set the value to Metal
app.project.gpuAccelType = GpuAccelType.METAL;
```

### Project.items

app.project.items

### Description

The project's complete set of items.

### Type

ItemCollection object; read-only.

### Project.linearBlending

app.project.linearBlending

### Description

true when this project ought to use linear blending; otherwise false.

### Type

Boolean; read/write.

### Project.linearizeWorkingSpace

app.project.linearizeWorkingSpace

Note

This functionality was added in After Effects 16.0 (CC 2019)

### Description

true when Linearize Working Space ought to be on for this project; otherwise false.

### Type

Boolean; read/write.

### Project.numItems

app.project.numItems

### Description

How many items the project holds altogether, folders and every kind of footage included.

### Type

Integer; read-only.

### Example

```
var numItems = app.project.numItems;
alert("There are " + numItems + " items in this project.")
```

### Project.renderQueue

```
var usedList = app.project.usedFonts;
if (usedList.length) {
    var font = usedList[0].font;
    var usedAt = usedList[0].usedAt;

    var str = "[0]:" + font.postScriptName + "\n";
    for (var i = 0; i < usedAt.length; i++) {
        var layerID = usedAt[i].layerID;
        // valueAtTime() for Source Text property is expecting timed
        // to be in Layer Time instead of Comp Time, unlike any of
        // the other properties. So we have adjusted the name returned
        // by usedFonts to make this clear as we expect that is where
        // it will be used next.
        var layerTimeD = usedAt[i].layerTimeD;

        var layer = app.project.layerByID(layerID);
        str += "    Layer:'" + String(layer.property("Source Text").valueAtTime(layerTimeD, false)) + "'\n";
    }
    alert(str);
}
```

### Type

Array of Objects; read-only.

### Project.workingGamma

app.project.workingGamma

### Description

Holds whichever working gamma the current project is using — the value is restricted to 2.2 or 2.4.

Assigning anything besides 2.2 or 2.4 throws a scripting error.

Tip

Once a color working space has been chosen for the project, After Effects disregards this gamma value.

### Type

2.2 or 2.4; read/write.

### Examples

- To set the working gamma to 2.4 (Rec. 709): app.project.workingGamma = 2.4;
- To get the current working gamma: var currentGamma = app.project.workingGamma;

### Project.workingSpace

app.project.workingSpace

### Description

Carries, as a string, the color-profile description tied to the project's color working space. Assign an empty string to switch the working space off (None).

Call app.project.listColorProfiles() to obtain the list of color-profile descriptions you are allowed to assign as the working space.

### Type

String; read/write.

### Examples

- To set the working space to Rec.709 Gamma 2.4: app.project.workingSpace = "Rec.709 Gamma 2.4";
- To set the working space to None: app.project.workingSpace = "";
- To get the current working space: var currentSpace = app.project.workingSpace;

### Project.xmpPacket

app.project.xmpPacket

### Description

Contains the project's XMP metadata in RDF (an XML-based encoding). Consult the JavaScript Tools Guide for deeper coverage of XMP.

### Type

String; read/write.

### Example

In the snippet below, the script reaches the current project's XMP metadata and edits the Label field within it.

```
var proj = app.project;

// load the XMPlibrary as an ExtendScript ExternalObject
if (ExternalObject.AdobeXMPScript === undefined){
    ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
}
var mdata = new XMPMeta(app.project.xmpPacket); //get the project's XMPmetadata
// update the Label project metadata's value
var schemaNS = XMPMeta.getNamespaceURI("xmp");
var propName = "xmp:Label";
try{
    mdata.setProperty(schemaNS, propName, "finalversion...no, really!");
} catch (e) {
    alert(e);
}

app.project.xmpPacket = mdata.serialize();
```

## System object — Attributes

### System.machineName

system.machineName

### Description

Identifies the computer that After Effects is currently running on.

### Type

String; read-only.

### System.osName

system.osName

### Description

Identifies the operating system that After Effects is currently running on.

Warning

From Windows 7 onward this attribute comes back empty. Reach for $.os in its place.

### Type

String; read-only.

### System.osVersion

system.osVersion

### Description

Reports the version of the local operating system in use.

### Type

String; read-only.

### System.userName

system.userName

### Description

Reports which user is signed in to the system at the moment.

### Type

String; read-only.

## See also

- [Application](script-application.md)
