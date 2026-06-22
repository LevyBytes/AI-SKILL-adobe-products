# Project, Team Projects, System, Item ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Project; Team Projects; System; Item; ItemCollection; AVItem; CompItem; FolderItem; FootageItem; Layer; LayerCollection; AVLayer; CameraLayer; LightLayer; ShapeLayer; TextLayer; ThreeDModelLayer; ParametricMeshLayer.

## Project

### Project object

app.project

### Description

An After Effects project is what the project object stands for. Through its attributes you reach particular objects held inside the project, things like imported files or footage and compositions, along with project settings such as the timecode base. Its methods bring in footage, make solids, compositions and folders, and commit changes.

## Team Projects

### Project object — Team Projects

### Project.newTeamProject()

app.project.newTeamProject(teamProjectName, description)

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Sets up a brand-new team project.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| teamProjectName | String | Team project name |
| description | String | Optional. Project description |

### Returns

Boolean. true if the team project is successfully created, otherwise false.

### Project.openTeamProject()

app.project.openTeamProject(teamProjectName)

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Opens a team project.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| teamProjectName | String | Team project name |

### Returns

Boolean. true if the team project is successfully opened, otherwise false.

### Project.shareTeamProject()

app.project.shareTeamProject(comment)

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Publishes the team project that is currently open.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comment | String | Optional. Comment. |

### Returns

Boolean. true if the team project is successfully shared, otherwise false.

### Project.syncTeamProject()

app.project.syncTeamProject()

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Synchronizes the team project that is currently open.

### Returns

Boolean. true if the team project is successfully synced, otherwise false.

### Project.closeTeamProject()

app.project.closeTeamProject()

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Closes whichever team project is open at the moment.

### Returns

Boolean. true if the team project is successfully closed, otherwise false.

### Project.convertTeamProjectToProject()

app.project.convertTeamProjectToProject(project_file)

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Turns a team project into a regular After Effects project saved on a local disk.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| project_file | Extendscript File | The local After Effects project. File extension should be either .aep or .aet (.aepx is not supported). |

### Returns

Boolean. true if the team project is successfully converted, otherwise false.

### Project.listTeamProjects()

app.project.listTeamProjects()

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Gives back an array of name strings covering every team project the current user can reach. Team Projects that have been archived are left out.

### Returns

Array of strings.

### Project.isTeamProjectOpen()

app.project.isTeamProjectOpen(teamProjectName)

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Tests whether the named team project happens to be open right now.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| teamProjectName | String | Team project name |

### Returns

Boolean. true if the specified team project is currently open, otherwise false.

### Project.isAnyTeamProjectOpen()

app.project.isAnyTeamProjectOpen()

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Tests whether some team project is open at present.

### Returns

Boolean. true if any team project is currently open, otherwise false.

### Project.isTeamProjectEnabled()

app.project.isTeamProjectEnabled()

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Tests whether team project support is turned on for After Effects. (In practice this nearly always comes back true.)

### Returns

Boolean. true if team project is currently enabled, otherwise false.

### Project.isLoggedInToTeamProject()

app.project.isLoggedInToTeamProject()

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Tests whether After Effects, acting as the client, currently has a session on the team projects server.

### Returns

Boolean. true if the client (After Effects) is currently logged into the team projects server, otherwise false.

### Project.isSyncCommandEnabled()

app.project.isSyncCommandEnabled()

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Tests whether the Sync command is presently available.

### Returns

Boolean. true if the team projects Sync command is enabled, otherwise false.

### Project.isShareCommandEnabled()

app.project.isShareCommandEnabled()

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Tests whether the Share command is presently available.

### Returns

Boolean. true if the team projects Share command is enabled, otherwise false.

### Project.isResolveCommandEnabled()

app.project.isResolveCommandEnabled()

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Tests whether the Resolve command is presently available.

### Returns

Boolean. true if the team projects Resolve command is enabled, otherwise false.

### Project.resolveConflict()

app.project.resolveConflict(ResolveType)

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

Settles a clash between the team project you have open and the copy held on the team projects server, applying whichever resolution method you name.

### Parameters

Parameter

Type

Description

ResolveType

ResolveType enum

The type of conflict resolution to use. One of: - ResolveType.`ACCEPT_THEIRS`: Take the shared version. The shared version replaces your version. - ResolveType.`ACCEPT_YOURS`: Keep your version of the project. The shared version is not taken. - ResolveType.`ACCEPT_THEIRS_AND_COPY`: Copy and rename your version, then take the shared version. The shared version replaces your original version.

| --- | --- | --- |

### Returns

Boolean. true if the resolution of the specified type was successful, otherwise false.

## System

### System object

system

### Description

Through the System object you can read details about the user's machine, including the user name plus the operating system's name and version. Reach it via the global variable system.

### Example

```
alert("Your OS is " + system.osName + " running version" + system.osVersion);
confirm("You are: " + system.userName + " running on " + system.machineName + ".");
```

## Item

### Item object

app.project.item(index)

app.project.items[index]

### Description

Anything capable of showing up in the Project panel is modeled by an Item object. Indexing begins at 1 for the first item.

Info

Item sits at the root of the hierarchy beneath AVItem object and FolderItem object, which themselves serve as bases for assorted other item types, so Item's attributes and methods carry over to every one of those item types.

### Example

Here the script pulls the project's second item and verifies it is a folder. From that folder it then deletes any top-level item that is not selected, and along the way it confirms that every item's parent points back at the correct folder.

```
var myFolder = app.project.item(2);
if (!(myFolder instanceof FolderItem)) {
    alert("error: second item is not a folder");
} else {
    var numInFolder = myFolder.numItems;
    //Always run loops backwards when deleting things:
    for (var i = numInFolder; i >= 1; i--) {
        var curItem = myFolder.item(i);
        if (curItem.parentFolder !== myFolder) {
            alert("error within AE: the parentFolder is not set correctly");
        } else {
            if (!curItem.selected) {
                //found an unselected solid.
                curItem.remove();
            }
        }
    }
}
```

## ItemCollection

### ItemCollection object

app.project.items

### Description

A grouping of Items is what the ItemCollection object stands for.

When the ItemCollection is attached to a Project object, it holds every Item object for the items present in the project.

When it is attached to a FolderItem object, it holds every Item object for the items inside that folder.

Info

ItemCollection derives from the Collection object. Every method and attribute of Collection, on top of the ones listed here, applies when you work with ItemCollection.

## AVItem

### AVItem object

app.project.item(index)

### Description

The AVItem object opens up the attributes and methods belonging to audio and visual files that have been imported into After Effects.

Info

AVItem derives from Item. Every method and attribute of Item, alongside the ones listed here, applies when you work with AVItem. See Item object

Info

AVItem serves as the base for both CompItem and FootageItem, so its attributes and methods carry over when you work with CompItem and FootageItem objects. See CompItem object and FootageItem object.

Warning

Although CompItems and FootageItems descend logically from AVItem, they are not truly subclasses of it, because AVItem has no presence in Extendscript — so a check like item instanceof AVItem fails, since AVItem is undefined. The same holds for Item itself.

For more, consult Javascript Classes and After Effects Class Hierarchy.

## CompItem

### CompItem object

app.project.item(index)

app.project.items[index]

### Description

A composition is wrapped by the CompItem object, which lets you inspect and modify it. Reach these objects through their position index in a project's item collection.

Info

CompItem is a subclass of AVItem object, which is a subclass of Item object. All methods and attributes of AVItem and Item, in addition to those listed below, are available when working with CompItem.

### Example

Assuming the project's first item is a CompItem, the snippet below pops up two alerts: the opening one reports how many layers the CompItem holds, and the next reports the name of that CompItem's final layer.

```
var firstComp = app.project.item(1);
alert("number of layers is " + firstComp.numLayers);
alert("name of last layer is " + firstComp.layer(firstComp.numLayers).name);
```

## FolderItem

### FolderItem object

app.project.FolderItem

### Description

In your Project panel, a folder is represented by the FolderItem object. Such a folder may hold a mix of item types — footage, compositions, solids — and nested folders too.

### Example

Suppose the project's second item is a FolderItem; the code below raises one alert per top-level item inside that folder, displaying each item's name.

```
var secondItem = app.project.item(2);
if (!(secondItem instanceof FolderItem)) {
    alert("problem: second item is not a folder");
} else {
    for (var i = 1; i <= secondItem.numItems; i++) {
        alert("item number " + i + " within the folder is named " + secondItem.item(i).name);
    }
}
```

## FootageItem

### FootageItem object

app.project.item(index) app.project.items[index]

### Description

A piece of footage brought into a project — the kind that turns up in the Project panel — is represented by the FootageItem object. You get at them via their position index in a project's item collection.

Info

FootageItem is a subclass of AVItem object, which is a subclass of Item object. All methods and attributes of AVItem and Item, in addition to those listed below, are available when working with FootageItem.

## Layer

### Layer object

app.project.item(index).layer(index)

### Description

Layers inside compositions are reached through the Layer object. You pull it from an item's layer collection by giving either an index number or a name string.

Info

Layer is a subclass of PropertyGroup, which is a subclass of PropertyBase. All methods and attributes of PropertyGroup, in addition to those listed below, are available when working with Layer, with the exception that propertyIndex attribute is set to undefined.

Info

Layer is the base class for CameraLayer object, LightLayer object, and AVLayer object, so Layer attributes and methods are available when working with all layer types. Layers contain AE properties, in addition to their JavaScript attributes and methods. For examples of how to access properties in layers, see PropertyBase object.

### Example

When the project's first item is a CompItem, this snippet turns off that composition's first layer and gives it a new name — handy, say, for switching an icon off within the composition.

```
var firstLayer = app.project.item(1).layer(1);
firstLayer.enabled = false;
firstLayer.name = "DisabledLayer";
```

### AVLayer Match Names — Layer

| Match Name | Display Name (EN) |
| --- | --- |
| ADBE AV Layer |  |

### Camera Layer Match Names — Layer

| Match Name | Display Name (EN) |
| --- | --- |
| ADBE Camera Layer |  |

### Light Layer Match Names — Layer

| Match Name | Display Name (EN) |
| --- | --- |
| ADBE Light Layer |  |

### Text Layer Match Names — Layer

| Match Name | Display Name (EN) |
| --- | --- |
| ADBE Text Layer |  |

### Shape Layer Match Names — Layer

| Match Name | Display Name (EN) |
| --- | --- |
| ADBE Vector Layer | Shape Layer |

## LayerCollection

### LayerCollection object

app.project.item(index).layers

### Description

A group of layers is modeled by the LayerCollection object. The one tied to a CompItem object carries every layer object for the layers in that composition, and the collection's methods give you a way to work with the layer list.

Info

LayerCollection is a subclass of Collection object. All methods and attributes of Collection, in addition to those listed below, are available when working with LayerCollection.

### Example

Suppose the project's first item is a CompItem and its second is an AVItem; this snippet reports how many layers sit in the CompItem's layer collection, brings in a new layer built from an AVItem in the project, and then reports the updated layer count.

```
var firstComp = app.project.item(1);
var layerCollection = firstComp.layers;
alert("number of layers before is " + layerCollection.length);
var anAVItem = app.project.item(2);
layerCollection.add(anAVItem);
alert("number of layers after is " + layerCollection.length);
```

## AVLayer

### AVLayer object

app.project.item(index).layer(index)

### Description

Layers built around AVItem objects — covering composition, footage, solid, text, and sound layers — are reached through the AVLayer object's interface.

Info

Being a subclass of the Layer object, AVLayer grants you the full Layer method and attribute set on top of the ones documented below.

Info

Because TextLayer derives from AVLayer as its base class, you can reach AVLayer's attributes and methods while handling TextLayer objects.

### AE Properties

The AE properties on offer vary by layer type. For AVLayer the available properties and property groups are:

- Marker
- Time Remap
- Motion Trackers
- Masks
- Effects

  - Anchor Point
  - Position
  - Scale
  - Orientation
  - X Rotation
  - Y Rotation
  - Rotation
  - Opacity

- Layer Styles
- Geometry Options // Ray-traced 3D

  - Casts Shadows
  - Light Transmission
  - Accepts Shadows
  - Accepts Lights
  - Appears in Reflections // Ray-traced 3D
  - Ambient
  - Diffuse
  - Specular Intensity
  - Specular Shininess
  - Metal
  - Reflection Intensity // Ray-traced 3D
  - Reflection Sharpness // Ray-traced 3D
  - Reflection Rolloff // Ray-traced 3D
  - Transparency // Ray-traced 3D
  - Transparency Rolloff // Ray-traced 3D
  - Index of Refraction // Ray-traced 3D

  - AudioLevels

### Example

Suppose the project's first item is a CompItem and that comp's first layer is an AVLayer; the snippet below assigns the layer's quality, startTime, and inPoint.

```
var firstLayer = app.project.item(1).layer(1);
firstLayer.quality = LayerQuality.BEST;
firstLayer.startTime = 1;
firstLayer.inPoint = 2;
```

## CameraLayer

### CameraLayer object

app.project.item(index).layer(index)

### Description

A camera layer inside a composition is represented by the CameraLayer object. You build one with LayerCollection.addCamera(), and you reach it from an item's layer collection through either its index number or a name string.

Info

Since CameraLayer derives from the Layer object, every Layer method and attribute is at your disposal when handling a CameraLayer.

### AE Properties

CameraLayer adds no attributes of its own, yet its AE properties differ from those of other layer types. The properties and property groups it carries are:

- Marker

  - PointofInterest
  - Position
  - Scale
  - Orientation
  - XRotation
  - YRotation
  - Rotation
  - Opacity

  - Zoom
  - DepthofField
  - FocusDistance
  - BlurLevel

## LightLayer

### LightLayer object

app.project.item(index).layer(index)

### Description

A light layer inside a composition is represented by the LightLayer object. You create one through the LayerCollection.addLight() method, and you reach it from an item's layer collection by index number or by a name string.

Info

Since LightLayer derives from the Layer object, the entire Layer method and attribute set is available while you handle a Light-Layer.

### AE Properties

LightLayer adds no attributes of its own, yet its AE properties differ from those of other layer types. The properties and property groups it carries are:

- Marker

  - PointofInterest
  - Position
  - Scale
  - Orientation
  - XRotation
  - YRotation
  - Rotation
  - Opacity

  - Intensity
  - Color
  - ConeAngle
  - ConeFeather
  - CastsShadows
  - ShadowDarkness
  - ShadowDiffusion

## ShapeLayer

### ShapeLayer object

app.project.item(index).layer(index)

### Description

A shape layer inside a composition is represented by the ShapeLayer object. You create one with LayerCollection.addShape(), and you reach it from an item's layer collection by index number or by a name string.

Info

ShapeLayer sits below AVLayer in the hierarchy, and AVLayer below Layer; consequently the methods and attributes of both AVLayer and Layer are usable when you handle a ShapeLayer.

## TextLayer

### TextLayer object

app.project.item(index).layer(index)

### Description

A text layer inside a composition is represented by the TextLayer object. You create one through the LayerCollection object's addText method, and you reach it from an item's layer collection by index number or by a name string.

Info

TextLayer descends from AVLayer, which in turn descends from Layer; this means both the AVLayer and Layer methods and attributes are usable when you handle a TextLayer.

### AE Properties

TextLayer adds no attributes of its own, but on top of what it inherits from AVLayer it provides these AE properties and property groups:

- Text
- SourceText
- PathOptions
- Path
- ReversePath
- PerpendicularToPath
- ForceAlignment
- FirstMargin
- LastMargin
- MoreOptions
- AnchorPointGrouping
- GroupingAlignment
- Fill&Stroke
- InterCharacterBlending
- Animators

### Unused Properties and Attributes

Text layers make no use of the TimeRemapandMotionTrackers properties inherited from AVLayer, and the matching AVLayer attributes go unused as well:

- canSetTimeRemapEnabled
- timeRemapEnabled
- trackMatteType
- isTrackMatte
- hasTrackMatte

## ThreeDModelLayer

### ThreeDModelLayer object

app.project.item(index).layer(index)

Note

This functionality was added in After Effects 24.4

### Description

A 3D Model layer inside a composition is represented by the ThreeDModelLayer object.

Info

Deriving from the AVLayer object, ThreeDModelLayer lets you use the complete AVLayer method and attribute set whenever you handle one.

### AE Properties

From the AVLayer object, ThreeDModelLayer inherits these properties and property groups:

- Marker
- Time Remap

  - Anchor Point
  - Position
  - Scale
  - Orientation
  - X Rotation
  - Y Rotation
  - Rotation
  - Opacity

- Layer Styles
  - AudioLevels

### Example

Suppose the project's first item is a CompItem and that comp's first layer is a ThreeDModelLayer; the snippet below tests its type.

```
var modelLayer = app.project.item(1).layer(1);
if (modelLayer instanceof ThreeDModelLayer)
{
    // do something
}
```

## ParametricMeshLayer

### ParametricMeshLayer object

app.project.item(index).layer(index)

Note

This functionality was added in After Effects (Beta) 26.3 and is subject to change while it remains in Beta.

### Description

A Parametric Mesh layer inside a composition is represented by the ParametricMeshLayer object.

Info

ParametricMeshLayer is a subclass of AVLayer object. From that AVLayer object it inherits these properties and property groups:

- Marker
- Time Remap

  - Anchor Point
  - Position
  - Scale
  - Orientation
  - X Rotation
  - Y Rotation
  - Rotation
  - Opacity

- Layer Styles
  - AudioLevels

### Example

Suppose the project's first item is a CompItem and that comp's first layer is a ParametricMeshLayer; the snippet below tests its type.

```
var layer = app.project.item(1).layer(1);
if (layer instanceof ParametricMeshLayer)
{
    // do something
}
```

## MaskPropertyGroup

### MaskPropertyGroup object

app.project.item(index).layer(index).mask

### Description

A MaskPropertyGroup object bundles up the mask attributes belonging to a layer.

Info

MaskPropertyGroup descends from the PropertyGroup object. Consequently, beyond the members listed here, all methods and attributes of both PropertyBase object and PropertyGroup are at your disposal when working with MaskPropertyGroup.

## RenderQueue

### RenderQueue object

app.project.renderQueue

### Description

The RenderQueue object stands for the render automation machinery — the data and capabilities reached through a given After Effects project's Render Queue panel. Its attributes let you get at the queue's items and check their render status, while its methods can kick off, pause, and halt the rendering run. For the per-item settings of anything slated to render, turn to the RenderQueueItem object.

## RQItemCollection

### RQItemCollection object

app.project.renderQueue.items

### Description

Inside an RQItemCollection sit all the render-queue items belonging to a project, just as they appear in that project's Render Queue panel. The collection hands you access to the RenderQueueItem objects and lets you spin them up out of compositions. Indexing starts with the first RenderQueueItem object at position 1.

Info

RQItemCollection descends from the Collection object, so every method and attribute of Collection is on hand when you work with RQItemCollection.

## RenderQueueItem

### RenderQueueItem object

app.project.renderQueue.item(index)

### Description

A RenderQueueItem object stands for one individual entry in the render queue, giving you access to the particular settings of whatever is set to render. You bring the object into being by dropping a composition into the Render Queue via the RQItemCollection object; see RQItemCollection.add().

## OMCollection

### OMCollection object

app.project.renderQueue.items.outputModules

### Description

Every output module belonging to a render queue is held within an OMCollection. Through this collection you reach the individual OutputModule objects and can also add new ones. Indexing starts at 1, so position 1 holds the first OutputModule.

Info

Because OMCollection derives from the Collection object, anything Collection exposes — its full set of methods and attributes — also works on an OMCollection.

## OutputModule

### OutputModule object

app.project.renderQueue.item(index).outputModule(index)

### Description

Tied to a RenderQueueItem, an OutputModule object produces one rendered file (or one image sequence) and carries the attributes and methods that describe the file the render will write.

## FileSource

### FileSource object

app.project.item(index).mainSource

app.project.item(index).proxySource

### Description

Footage originating from a file is represented by the FileSource object.

Info

As a subclass of the FootageSource object, FileSource inherits all of FootageSource's methods and attributes, which remain usable alongside the ones documented here.

## FootageSource

### FootageSource object

app.project.item(index).mainSource

app.project.item(index).proxySource

### Description

Details about where a piece of footage originates are captured by the FootageSource object. It plays the role of the mainSource on a FootageItem object, or the proxySource on either a CompItem object or a FootageItem.

Info

Since FootageSource is the base class behind the SolidSource object, its attributes and methods carry over and remain usable when you work with SolidSource objects.

## PlaceholderSource

### PlaceholderSource object

app.project.item(index).mainSource

app.project.item(index).proxySource

### Description

A placeholder's footage source is described by the PlaceholderSource object.

Info

As a subclass of the FootageSource object, PlaceholderSource makes every FootageSource method and attribute available while you work with it. PlaceholderSource itself adds no methods or attributes of its own.
