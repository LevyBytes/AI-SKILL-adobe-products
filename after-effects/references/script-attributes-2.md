# Attributes (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Item object — Attributes

### Item.comment

app.project.item(index).comment

### Description

A string able to carry a note as long as 15,999 bytes once encoding conversion is applied. The note exists purely for the user; it changes nothing about how the item looks or behaves.

### Type

String; read/write.

### Item.dynamicLinkGUID

app.project.item(index).dynamicLinkGUID

### Description

A persistent, one-of-a-kind identification number for the dynamic link, formatted as 00000000-0000-0000-0000-000000000000.

### Type

String; read-only.

### Item.guides

app.project.item(index).guides

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

A collection of guide objects, each carrying orientationType, positionType, and position attributes.

### Type

Array; read-only.

### Item.id

app.project.item(index).id

### Description

A persistent, one-of-a-kind identification number the application uses internally to tell an item apart across sessions. Saving the project to a file and reopening it later leaves this ID untouched. Import the project into a different project, though, and every item from the imported project receives fresh IDs. The ID never surfaces anywhere in the user interface.

### Type

Integer; read-only.

### Item.label

app.project.item(index).label

### Description

The item's label color, given as a number (0 means None, while 1 through 16 each pick one of the preset colors defined in the Labels preferences).

Tip

A script has no way to apply custom label colors.

### Type

Integer (0 to 16); read/write.

### Item.name

app.project.item(index).name

### Description

The item's name exactly as it appears in the Project panel.

### Type

String; read/write.

### Item.parentFolder

app.project.item(index).parentFolder

### Description

The FolderItem object representing the folder this item lives in. When the item sits at the project's top level, that folder is the project's root folder (app.project.rootFolder). Create a fresh folder with ItemCollection.addFolder() and assign it here to relocate items into the new folder.

### Type

FolderItem object; read/write.

### Example

The script below makes a fresh FolderItem in the Project panel and shifts compositions into it.

```
//create a new FolderItem in project, with name "comps"
var compFolder = app.project.items.addFolder("comps");

//move all compositions into new folder by setting
//compItem's parentFolder to "comps" folder
for (var i = 1; i <= app.project.numItems; i++){
    if (app.project.item(i) instanceof CompItem) {
        app.project.item(i).parentFolder = compFolder;
    }
}
```

### Item.selected

app.project.item(index).selected

### Description

A value of true marks this item as selected, and several items may be selected together. Assign true to select the item from a script, or false to clear its selection.

### Type

Boolean; read/write.

### Item.typeName

app.project.item(index).typeName

### Description

A human-readable label for the item's kind — for example "Folder", "Footage", or "Composition". Since these labels follow the application's locale, they vary with whichever interface language the application uses.

### Type

String; read-only.

### Localized strings

| Locale | Composition | Folder | Footage |
| --- | --- | --- | --- |
| en_US | Composition | Folder | Footage |
| de_DE | Komposition | Ordner | Footage |
| es_ES | Composición | Carpeta | Material de archivo |
| fr_FR | Composition | Dossier | Métrage |
| it_IT | Composizione | Cartella | Metraggio |
| ja_JP | コンポジション | フォルダー | フッテージ |
| ko_KR | 컴포지션 | 폴더 | 푸티지 |
| pt_BR | Composição | Pasta | Gravação |
| ru_ru | Композиция | Папка | Видеоряд |
| zh_CN | 合成 | 文件夹 | 素材 |

### Example

```
if (/Composition|Komposition|Composición|Composizione|コンポジション|컴포지션|Composição|Композиция|合成/.test(app.project.item(index).typeName)) {
    // item is a composition
} else if (/Folder|Ordner|Carpeta|Dossier|Cartella|フォルダー|폴더|Pasta|Папка|文件夹/.test(app.project.item(index).typeName)) {
    // item is a folder
}
```

## AVItem object — Attributes

### AVItem.duration

app.project.item(index).duration

### Description

Gives the item's length in seconds. A still footage item reports a duration of 0.

- For a CompItem this tracks the composition's own duration and you may write to it.
- For a FootageItem it follows the mainSource object's duration and is read-only.

### Type

Floating-point value, in the range [0.0..10800.0]; read/write for a CompItem; otherwise, read-only.

### AVItem.footageMissing

app.project.item(index).footageMissing

### Description

A value of true signals that the AVItem is a placeholder or stands for footage whose source file cannot be located. When that happens, the absent source file's path lives in the missingFootagePath attribute on the footage item's source-file object. See FootageItem.mainSource and FileSource.missingFootagePath.

### Type

Boolean; read-only.

### AVItem.frameDuration

app.project.item(index).frameDuration

### Description

Gives the duration of a single frame for this AVItem in seconds, which is simply 1 divided by frameRate. Assign it and the reciprocal is taken automatically as a new frameRate. The figure handed back is the reciprocal of frameRate, and that may differ from whatever you assigned if your value does not divide evenly into 1.0 (0.3, say). Owing to numerical precision, (1 / (1 / 0.3)) lands very near 0.3 but not exactly on it. Should the AVItem be a FootageItem, the value ties to the mainSource and is read-only; alter it by setting the mainSource object's conformFrameRate, which adjusts the FootageItem's frameRate and frameDuration together.

### Type

Floating-point value, in the range [1/99..1.0]; read-only for a FootageItem, otherwise read/write.

### AVItem.frameRate

app.project.item(index).frameRate

### Description

The AVItem's frame rate in frames per second, which is simply 1 divided by frameDuration. Assign it and the reciprocal is taken automatically as a new frameDuration.

- For a CompItem this tracks the composition's own frameRate and you may write to it.
- For a FootageItem it follows the mainSource object's frameRate and is read-only. Adjust it instead through the mainSource object's conformFrameRate, which updates both frameRate and frameDuration on the FootageItem at once.

### Type

Floating-point value, in the range [1.0..99.0]; read-only for a FootageItem, otherwise read/write.

### AVItem.hasAudio

app.project.item(index).hasAudio

### Description

A value of true means the AVItem carries an audio component.

- For a CompItem the result is tied to the composition itself.
- For a FootageItem it is tied to the mainSource object.

### Type

Boolean; read-only.

### AVItem.hasVideo

app.project.item(index).hasVideo

### Description

A value of true means the AVItem carries a video component.

- For a CompItem the result is tied to the composition itself.
- For a FootageItem it is tied to the mainSource object.

### Type

Boolean; read-only.

### AVItem.height

app.project.item(index).height

### Description

The item's height measured in pixels.

- For a CompItem this tracks the composition and you may write to it.
- For a FootageItem it tracks the mainSource object, writable only when that mainSource object happens to be a SolidSource; in every other case it stays read-only.

### Type

Integer, in the range [1..30000]; read/write, except as noted.

### AVItem.isMediaReplacementCompatible

app.project.item(index).isMediaReplacementCompatible

Note

This functionality was added in After Effects 18.0 (2021)

### Description

Checks whether the AVItem qualifies as an alternate source for a Property.setAlternateSource() call.

Comes back true when the item qualifies, and false otherwise.

A layer's alternate source may be either a CompItem or a FootageItem, though a handful of limits apply:

- When the AVItem is a FootageItem object, its FootageItem.FootageSource must not be a SolidSource object.
- When the AVItem is a FootageItem object whose FootageItem.FootageSource is a FileSource object, that FileSource must not reference a non-media file such as a JSX script file.
- Assigning the AVItem must not introduce a cyclical reference anywhere in the project.

### Type

Boolean; read only.

### AVItem.name

app.project.item(index).name

### Description

The item's name as it shows in the Project panel.

- For a FootageItem this tracks the mainSource object. Where that mainSource object is a FileSource, the property governs how the name reads in the Project panel yet leaves the underlying file name unchanged.

### Type

String; read/write.

### AVItem.pixelAspect

app.project.item(index).pixelAspect

### Description

The item's pixel aspect ratio (PAR).

- For a CompItem the result is tied to the composition itself.
- For a FootageItem it is tied to the mainSource object.

What you read back after assigning a value can differ a little from what you put in. In the table that follows, the value displayed in the UI is set beside the more precise value this attribute returns.

| PAR in the After Effects UI | PAR returned by the pixelAspect attribute |
| --- | --- |
| 0.91 | 0.909091 |
| 1 | 1 |
| 1.5 | 1.5 |
| 1.09 | 1.09402 |
| 1.21 | 1.21212 |
| 1.33 | 1.33333 |
| 1.46 | 1.45869 |
| 2 | 2 |

### Type

Floating-point value, in the range [0.01..100.0]; read/write.

### AVItem.proxySource

app.project.item(index).proxySource

### Description

The FootageSource currently serving as a proxy. You cannot write to this attribute directly; instead reassign it through one of the AVItem methods that swap the proxy source: setProxy(), setProxyWithSequence(), setProxyWithSolid(), or setProxyWithPlaceholder().

### Type

FootageSource object; read-only.

### AVItem.time

app.project.item(index).time

### Description

Where the item's playhead sits while it is previewed straight from the Project panel, expressed as a count of seconds. Run the global method timeToCurrentFormat() to turn it into a string that states the time in frames. Setting it throws an error on any FootageItem backed by still media (item.mainSource.isStill is true).

### Type

Floating-point value; read/write.

### AVItem.usedIn

app.project.item(index).usedIn

### Description

Every composition in which this AVItem appears. Be aware that the array is copied when you read it, so it does not refresh on its own. If you read this value and then place the item into another composition, read it once more to obtain an array that takes the new use into account.

### Type

Array of CompItem objects; read-only.

### AVItem.useProxy

app.project.item(index).useProxy

### Description

A value of true means a proxy stands in for the item. Each of the SetProxy methods flips it to true, and the SetProxyToNone() method flips it back to false.

### Type

Boolean; read/write.

### AVItem.width

app.project.item(index).width

### Description

The item's width measured in pixels.

- For a CompItem this tracks the composition and you may write to it.
- For a FootageItem it tracks the mainSource object, writable only when that mainSource object happens to be a SolidSource; in every other case it stays read-only.

### Type

Integer, in the range [1..30000]; read/write, except as noted.

## CompItem object — Attributes

### CompItem.activeCamera

app.project.item(index).activeCamera

### Description

The currently active camera — that is, the topmost enabled camera layer. Where no camera layer is enabled in the composition, this evaluates to null.

### Type

CameraLayer object; read-only.

### CompItem.bgColor

app.project.item(index).bgColor

### Description

The composition's background color, given as a three-element array whose entries are the red, green, and blue channels.

### Type

An array containing three floating-point values, [R, G, B], in the range [0.0..1.0]; read/write.

### CompItem.counters

app.project.item(index).counters

Note

This functionality was added in After Effects 13.2 (CC2014).

Warning

Adobe never officially documented this method/property — it surfaced through independent research. Treat the details here as possibly wrong, and bear in mind the whole thing could vanish or quit functioning at any time. If you know more, please add to it!

### Description

The setting applies across the whole application: altering it on a single CompItem propagates the change to every CompItem in the project. That value persists only until AE is closed, reverting to false on the next launch.

This parameter has no effect.

### Type

Boolean; read/write.

### CompItem.displayStartFrame

app.project.item(index).displayStartFrame

### Description

The frame number marking where the composition starts.

It serves as a substitute for deriving the start frame from CompItem.displayStartTime together with CompItem.frameDuration, sidestepping floating-point inaccuracies.

Note

This functionality was added in After Effects 17.1.

### Type

Integer; read/write.

### CompItem.displayStartTime

app.project.item(index).displayStartTime

### Description

The composition's start point, measured in seconds. In the Composition Settings dialog box this is the same as the Start Timecode or Start Frame setting.

Note

Starting with After Effects 17.1, this bottoms out at -10800.0; in releases prior to 17.1 the floor sat at 0.0

### Type

Floating-point valuem in the range [-10800.0..86339.0] (-3:00:00:00 to 23:59:00:00); read/write.

### CompItem.draft3d

app.project.item(index).draft3d

### Description

A value of true turns on Draft 3D mode for the Composition panel, matching the state of that panel's Draft 3D button.

### Type

Boolean; read/write.

### CompItem.dropFrame

app.project.item(index).dropFrame

### Description

true signals that the composition runs on drop-frame timecode, while false signals non-drop-frame. It reflects the corresponding choice in the Composition Settings dialog box.

### Type

Boolean; read/write.

### CompItem.frameBlending

app.project.item(index).frameBlending

### Description

A value of true switches on frame blending for the composition, tracking the state of the Frame Blending button in the Composition panel.

### Type

Boolean; if true, frame blending is enabled; read/write.

### CompItem.frameDuration

app.project.item(index).frameDuration

### Description

How long one frame lasts, in seconds — the reciprocal of frameRate (frames per second).

### Type

Floating-point value; read/write.

### CompItem.hideShyLayers

app.project.item(index).hideShyLayers

### Description

With true set, the Timeline panel shows only layers whose shy is false; with false, every layer appears, shy ones included. It mirrors the Hide All Shy Layers button in the Composition panel.

### Type

Boolean; read/write.

### CompItem.layers

app.project.item(index).layers

### Description

A LayerCollection object holding every Layer object for the layers within this composition.

### Type

LayerCollection object; read-only.

### CompItem.markerProperty

app.project.item(index).markerProperty

Note

This functionality was added in After Effects 14.0 (CC 2017)

### Description

A PropertyGroup object gathering every marker on a composition. Scripting composition markers behaves identically to scripting Layer markers.

See MarkerValue object.

### Type

PropertyGroup object or null; read-only.

### Example

The snippet below spins up a project and a composition, then adds two composition markers carrying different properties

```
// comp.markerProperty allows you to add markers to a comp.
// It has the same functionality as layer.property("Marker")
var currentProj = app.newProject();
var comp = currentProj.items.addComp("mycomp", 1920, 1080, 1.0, 5, 29.97);
var solidLayer = comp.layers.addSolid([1, 1, 1], "mylayer", 1920, 1080, 1.0);

var compMarker = new MarkerValue("This is a comp marker!");
compMarker.duration = 1;

var compMarker2 = new MarkerValue("Another comp marker!");
compMarker2.duration = 1;

comp.markerProperty.setValueAtTime(1, compMarker);
comp.markerProperty.setValueAtTime(3, compMarker2);
```

### CompItem.motionBlur

app.project.item(index).motionBlur

### Description

When set to true, the composition has motion blur turned on, matching the state of the Motion Blur button in the Composition panel.

### Type

Boolean; read/write.

### CompItem.motionBlurAdaptiveSampleLimit

app.project.item(index).motionBlurAdaptiveSampleLimit

### Description

The ceiling on motion blur samples taken for 2D layer movement. In the Composition Settings dialog box's Advanced tab, this maps to the Adaptive Sample Limit setting.

### Type

Integer (between 16 and 256); read/write.

### CompItem.motionBlurSamplesPerFrame

app.project.item(index).motionBlurSamplesPerFrame

### Description

The smallest count of motion blur samples per frame applied to Classic 3D layers, shape layers, and some effects. Within the Composition Settings dialog box's Advanced tab, this lines up with the Samples Per Frame setting.

### Type

Integer (between 2 and 64); read/write.

### CompItem.motionGraphicsTemplateControllerCount

app.project.item(index).motionGraphicsTemplateControllerCount

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

How many properties the composition exposes in the Essential Graphics panel.

### Type

Integer; read-only.

### CompItem.motionGraphicsTemplateName

app.project.item(index).motionGraphicsTemplateName

Note

This functionality was added in After Effects 15.0 (CC 2018)

### Description

Gets or sets the composition's name property shown in the Essential Graphics panel.

When you export a Motion Graphics template, that Essential Graphics panel name becomes the file's name (for instance, "My Template.mogrt").

In the example that follows, the active composition's name is assigned and then echoed back through an alert

```
app.project.activeItem.motionGraphicsTemplateName = "My Template";
alert(app.project.activeItem.motionGraphicsTemplateName);
```

### Type

String; read/write.

### CompItem.numLayers

app.project.item(index).numLayers

### Description

How many layers the composition contains.

### Type

Integer; read-only.

### CompItem.preserveNestedFrameRate

app.project.item(index).preserveNestedFrameRate

### Description

Set to true, nested compositions keep their own frame rate inside the current composition. It corresponds to the "Preserve frame rate when nested or in render queue" option in the Advanced tab of the Composition Settings dialog box.

### Type

Boolean; read/write.

### CompItem.preserveNestedResolution

app.project.item(index).preserveNestedResolution

### Description

Set to true, nested compositions retain their resolution within the current composition. It corresponds to the "Preserve Resolution When Nested" option in the Advanced tab of the Composition Settings dialog box.

### Type

Boolean; read/write.

### CompItem.renderer

app.project.item(index).renderer

### Description

Which rendering plug-in module renders this composition, chosen in the Advanced tab of the Composition Settings dialog box. Valid entries are whatever CompItem.renderers lists.

### Type

String; read/write.

### CompItem.renderers

app.project.item(index).renderers

### Description

Every rendering plug-in module on hand. The member strings correspond to the modules you have installed, the same ones shown in the Advanced tab of the Composition Settings dialog box.

### Type

Array of strings; read-only.

### CompItem.resolutionFactor

app.project.item(index).resolutionFactor

### Description

The horizontal and vertical downsample factors used when the composition renders. Each array entry states how many pixels to skip while sampling — the first governs horizontal sampling and the second governs vertical. [1, 1] gives full resolution, [2, 2] gives half, and [4, 4] gives a quarter; [1, 1] is the default.

### Type

Array of two integers in the range [1..99]; read/write.

### CompItem.selectedLayers

app.project.item(index).selectedLayers

### Description

Every layer currently selected in this composition, returned as a 0-based array whose first element sits at index 0.

### Type

Array of Layer objects; read-only.

### CompItem.selectedProperties

app.project.item(index).selectedProperties

### Description

Every selected Property and PropertyGroup object in this composition, with the first one at index position 0.

### Type

Array of Property and PropertyGroup objects; read-only.

### CompItem.shutterAngle

app.project.item(index).shutterAngle

### Description

The composition's shutter angle. This maps to the Shutter Angle setting in the Advanced tab of the Composition Settings dialog box.

### Type

Integer, in the range [0..720]; read/write.

### CompItem.shutterPhase

app.project.item(index).shutterPhase

### Description

The composition's shutter phase. This maps to the Shutter Phase setting in the Advanced tab of the Composition Settings dialog box.

### Type

Integer, in the range [-360..360]; read/write.

### CompItem.workAreaDuration

app.project.item(index).workAreaDuration

### Description

How long the work area runs, in seconds — the gap between the start and end times of the Composition work area.

### Type

Floating-point value; read/write.

### CompItem.workAreaStart

app.project.item(index).workAreaStart

### Description

The moment, in seconds, at which the Composition work area starts.

### Type

Floating-point value; read/write.

## FolderItem object — Attributes

### FolderItem.items

app.project.item(index).items

### Description

An ItemCollection object whose Item objects make up the folder's top-level contents.

This collection differs from the one on the Project object: it lists only the folder's top-level items. Being top-level inside the folder is not equivalent to being top-level inside the project.

Items count as top-level in the Project only when they sit at the top level of the root folder.

### Type

ItemCollection object; read-only.

### FolderItem.numItems

app.project.item(index).numItems

### Description

How many items sit in the items collection (folderItem.items.length).

When a folder holds another folder, that nested folder counts as a single FolderItem; the items tucked inside it are not tallied.

### Type

Integer; read-only.

## FootageItem object — Attributes

### FootageItem.file

app.project.item(index).file

### Description

The Extendscript File object pointing at the footage's source file.

When the FootageItem's mainSource happens to be a FileSource, this matches FootageItem.mainSource.file; in every other case it comes back null.

### Type

File object; read-only.

### FootageItem.mainSource

app.project.item(index).mainSource

### Description

The footage source — an object carrying every setting tied to the footage item, among them the ones you would otherwise reach via the Interpret Footage dialog box. This attribute cannot be written to directly; changing its value means calling whichever "replace" method on FootageItem applies. See the FootageSource object, and its three types:

- SolidSource object
- FileSource object
- PlaceholderSource object

When it is a FileSource object and footageMissing reads true, FileSource.missingFootagePath holds the path to the footage file that has gone missing.

### Type

FootageSource object; read-only.
