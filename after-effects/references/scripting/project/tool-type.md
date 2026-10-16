# Project.toolType

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

```javascript
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

```javascript
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
