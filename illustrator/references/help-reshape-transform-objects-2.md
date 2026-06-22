# Shear Objects, Create Intertwined Objects, About Perspective Drawing, Draw Objects In Perspective ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Shear objects; Intertwine objects; About perspective drawing; Draw objects in perspective; Perspective grid options; Define and manage perspective grid preset; Move the perspective grid and adjust its vanishing points; Adjust grid cell size and grid extent; Adjust horizon heights and grid planes; Adjust the perspective grid and the active plane widget.

## Shear objects

Shear objects along horizontal, vertical, or custom axes.

Shearing slants objects on a horizontal, vertical, or custom axis in relation to a reference point. You can apply shearing to one object or several, lock one dimension, and set both the skew direction and angle.

### Shear objects with the Shear tool

Choose one or more objects.

Activate the Shear tool in the tool panel.

Use the action that matches the shear reference you need:

- For shearing around the object's center, drag in the document window.
- For a different reference point, click in the document to place that point, move the pointer away from it, and then drag to set the slant.
- For shearing on the object's vertical axis, drag upward or downward in the document window.
- For shearing on the object's horizontal axis, drag left or right in the document window.

Hold Shift while shearing on the object's horizontal or vertical axis to keep the original height or width.

### Shear objects with the Shear command

Choose one or more objects.

Use one of these methods:

- To shear from the center, choose Object > Transform > Shear or double-click the Shear tool.
- For a different reference point, choose the Shear tool, then Alt - click (Windows) or option - click (macOS) where the new point should be placed.

In the Shear dialog box, type a Shear Angle from -359° to 359°.

A Shear Angle sets the clockwise skew applied to an object, calculated against a line perpendicular to the shear axis.

Use the Shear Angle value to set both slant direction and transformation amount.

Use the Shear Angle value to set both slant direction and transformation amount.

Choose the Axis used for shearing:

- Horizontal: tilts the object on the horizontal axis, moving its top and bottom edges sideways.
- Vertical: tilts the object on the vertical axis, moving its left and right edges upward or downward.
- Angle: applies diagonal shearing with a custom -359° to 359° value measured from the horizontal axis.

Choose one of the following Options, and then choose OK:

- Transform Objects: applies the shear transformation to both the shape and its pattern.
- Transform Patterns: limits the shear to the pattern fill inside the object and leaves the object shape unchanged.

Choose Copy to make a sheared duplicate while the original objects remain unchanged.

### Shear objects with the Free Transform tool

Choose one or more objects.

Activate the Free Transform tool in the tool panel.

Use one of these methods:

- For shearing on the vertical axis, start dragging the middle-left or middle-right bounding-box handle, then press Ctrl + Alt (Windows) or option + command (macOS) while dragging up or down.
- For shearing on the horizontal axis, start dragging the top-middle or bottom-middle bounding-box handle, then press Ctrl + Alt (Windows) or option + command (macOS) while dragging right or left.

Hold Shift while shearing on the object's horizontal or vertical axis to keep the original height or width.

### Shear objects with the Transform panel

Choose one or more objects.

Choose Window > Transform.

The Transform panel can also be opened by choosing Transform from the Control panel.

In the Transform panel, choose a Reference Point.

Type a value in the Shear text box, or choose one from the dropdown.

Note

For a smoother live object preview while editing, choose Edit > Preferences > Performance > Real-Time Drawing and Editing (Windows) or Illustrator > Settings > Performance > Real-Time Drawing and Editing (macOS).

## Intertwine objects

### Use Intertwine to weave overlapped object areas without destructive edits.

Intertwine can combine shapes, text, 2D, and 3D objects while avoiding permanent changes to them.

### Intertwine an area where two objects overlap

Use the Selection tool to select the overlapping objects.

Choose Object > Intertwine > Make. Illustrator creates an Intertwine group for the selected objects in the Layers panel, and more objects can be dragged into that group later.

Use the approach that gives the control you need:

- Hover over an overlapping object area; when the area is highlighted, click it to intertwine.
- Draw a closed path around an overlapping area to intertwine it. For a rectangular path, hold Shift and drag.

Click to intertwine

Encircle to intertwine

Note

Intertwine is unavailable for Live Paint, Repeat, and graphs. Nested intertwines are not supported, and already intertwined objects cannot be used to create another one.

### Intertwine an area where multiple objects overlap

Use the Selection tool to select the overlapping objects.

Choose Object > Intertwine > Make.

Draw a closed path around an area where at least three objects overlap.

Move the pointer over the enclosed area; the object path nearest the pointer becomes highlighted.

Right-click the highlighted path and choose Bring to Front, Bring Forward, Send Backward, or Send to Back.

Use that highlighted path to create the intertwine within the overlap.

### Edit intertwined objects

To reopen an Intertwine group for editing later, follow these steps:

Use the Selection tool to select the Intertwine group.

Choose Object > Intertwine > Edit.

### Release intertwined objects

Use the Selection tool to select the Intertwine group.

Choose Object > Intertwine > Release. The objects return from the Intertwine group in their original state, and the Intertwine group is removed from the Layers panel.

## About perspective drawing

Review perspective drawing and the available perspective drawing options in Adobe Illustrator.

Perspective drawing gives artwork accurate depth cues and spatial relationships. In Illustrator, the perspective grid lets you draw or place objects in perspective. The grid supports selectable perspective types, grid adjustments, and grid preset definitions.

### Types of perspective

Use any of the three perspective types when drawing or placing objects in perspective.

Choose from the same three perspective types to position or create artwork in perspective.

- One-point perspective: shows objects as viewed from the front or back. Drawing objects in parallel can create the illusion that they recede into the distance.
- Two-point perspective: presents objects or designs from a corner or angled view, adding complexity and visual impact to the artwork.
- Three-point perspective: expresses the scale, proportions, and fine detail of architectural designs with precision, depth, and space.

### Perspective grid

Choose the Perspective Grid tool or press Shift + P to show the perspective grid. With this tool, you can choose the number of vanishing points, change the grid angle and position, and snap artwork to grid lines and vanishing points for accurate placement.

Use the widgets in the perspective grid when customizing it.

A. Hide Grid widget B. Active plane widget C. Perspective grid ruler D. Right vanishing point E. Horizon level F. Grid cell size G. Ground level H. Right, horizontal, and left grid plane controls I. Origin J. Extent of grid K. Horizon height

Use the perspective grid widgets for customization.

## Draw objects in perspective

Use the perspective grid to draw with perspective.

Activate the Perspective Grid tool in the toolbar, or press Shift + P. The canvas then shows the perspective grid and the active plane widget.

The perspective grid helps make objects appear to vanish into the distance.

A. Active plane widget with the right plane active B. Hide Grid widget C. The perspective grid D. Artwork drawn on the active plane

The perspective grid helps create the appearance of objects receding into the distance.

On the active plane widget, choose the plane where you want to draw objects.

Draw objects on the active plane with any drawing tool.

Height, width, and other object properties can be entered in perspective the same way they are entered in regular mode.

To hide the perspective grid, choose the Hide Grid widget beside the active plane widget or press Esc.

To toggle grid visibility, choose View > Perspective Grid, and then choose Show Grid or Hide Grid.

The keyboard shortcut is Command + Shift + I (macOS) or Ctrl + Shift + I (Windows).

## Perspective grid options

Learn about perspective grid options that set angles, units, and grid visibility for accurate depth and 3D perspective work in Adobe Illustrator.

Open the Define Perspective Grid dialog box through View > Perspective Grid > Define Grid.

Customize the perspective grid with presets, grid settings, and grid appearance controls:

Options

Functions

Preset

Choose a preset from the drop-down menu, or create a custom one.

Type

Choose the grid type for the perspective you want to build.

Units

Set the measurement units used for grid size.

Scale

Define or adjust artboard measurements alongside real-world measurements.

Gridline every

Set the size of each grid cell.

Viewing Angle

Set left and right vanishing point positions relative to the observer.

Viewing Distance

Set the distance between the observer and the scene.

Horizon Height

Set the height of the horizon line above ground level.

Third Vanishing Point

For three-point perspective, enable this option and enter the preset's X and Y coordinates.

Grid Color & Opacity

Pick colors for the Left Grid, Right Grid, and Horizontal Grids. Adjust grid Opacity with the slider.

| --- | --- |

## Define and manage perspective grid preset

Define and manage grid presets to make perspective drawing setup faster and tailor grids for accurate, precise artwork.

### Define grid presets

Choose View > Perspective Grid > Define Grid.

In the Define Perspective Grid dialog box, edit these preset attributes:

- Preset: choose Custom from the drop-down menu.
- Type: choose the grid type for the perspective you want to build.
- Units: set the measurement units used for grid size.
- Scale: define or customize artboard and real-world measurements.
- Gridline every: set grid cell size.
- Viewing Angle: set the left and right vanishing point positions from the observer.
- Viewing Distance: set the observer-to-scene distance.
- Horizon Height: set the horizon line height from ground level.
- Third Vanishing Point: for three-point perspective, enable this option and enter the X and Y coordinates for the preset.
- Grid Color & Opacity: choose colors for the Left Grid, Right Grid, and Horizontal Grids. Move the slider to adjust grid Opacity.

### Manage grid presets

Choose Edit > Perspective Grid Presets.

In the Perspective Grid Presets dialog box, choose the preset you want to modify.

Use the needed option:

- New : creates a new preset.
- Edit : changes the selected preset.
- Delete : removes the preset.
- Import: brings in a preset.
- Export: exports the preset.
- Preset Settings: displays the preset settings.

## Move the perspective grid and adjust its vanishing points

In Adobe Illustrator, control design depth and alignment by repositioning the perspective grid and changing its vanishing points.

### Move the perspective grid

Select the Perspective Grid tool.

Move the pointer onto the grid's Ground Level point until the pointer changes to .

Use the Ground Level widget to reposition the entire perspective grid across the artboard.

Tip

Hold Shift while dragging to restrict movement to horizontal or vertical directions.

### Adjust vanishing points

Select the Perspective Grid tool.

On the left or right side of the perspective grid, move the pointer onto the small diamond-shaped handles (vanishing points) until the pointer changes to .

Drag the Vanishing Point widget.

Tip

Constrain movement of the vertical axis by holding Shift while dragging.

Reposition the perspective grid and refine its vanishing points

## Adjust grid cell size and grid extent

Adjust grid cell size and grid extent when you need the perspective grid to cover more or less of the artwork and use a different scale.

### Adjust grid cell size

Choose the Perspective grid tool in the toolbar.

Move the pointer over the Grid Cell Size widget until the cursor changes to .

Drag that widget to make the grid cells larger or smaller.

Note

Increasing the Grid Cell Size lowers the number of visible grid cells.

### Adjust grid extent

Choose the Perspective grid tool in the toolbar.

Move the pointer over the Grid Extent widget until the cursor changes to .

Drag the widget to change the vertical grid extent or set how far the grid extends across the planes.

Note

Gridlines appear onscreen only when a one-pixel gap is available. As you keep zooming in, additional gridlines move nearer to the Vanishing Point.

## Adjust horizon heights and grid planes

Use horizon height and grid plane adjustments to match the perspective grid to the artwork's viewpoint and alignment.

### Adjust horizon height

Select the Perspective grid tool.

Move the pointer over the Horizon Level until the cursor changes to .

Drag the widget upward or downward to change the grid height.

### Adjust grid planes

Select the Perspective grid tool.

Move the pointer over the Grid Plane controls until the cursor changes to or .

Drag any Grid Plane Control widget.

Tip

Hold Shift while dragging when you want the movement constrained to the cell-size extent.

## Adjust the perspective grid and the active plane widget

Change the perspective grid and active plane widget settings when you need a different grid view or plane-control placement.

### Adjust the perspective grid

Select View > Perspective Grid.

In the Perspective Grid submenu, choose any of these options when they fit the task:

- Show Grid or Hide Grid: switches the perspective grid on or off on the artboard.
- Show Rulers or Hide Rulers: shows or hides the perspective rulers that line up with the grid planes.
- Snap to Grid: lets objects snap to gridlines while you move, scale, draw in perspective, or bring artwork into perspective.
- Lock Grid or Unlock Grid: controls whether the perspective grid can be moved and edited.
- Lock Station Point: fixes the station point so accidental perspective changes are less likely. Moving one vanishing point can also move the other vanishing point with it.
- Define Grid: opens the Define Perspective Grid dialog box, where you can set grid size, angles, color, and layout.
- One Point Perspective: converts the grid to one-point perspective, using one vanishing point on the horizon line.
- Two Point Perspective: switches to the default two-point perspective, using two horizon-line vanishing points for angled views.
- Three Point Perspective: changes the grid to three-point perspective and places the vertical-view vanishing point above or below the horizon line.
- Save Grid as Preset: stores the current grid settings as a preset you can reuse in later projects.

### Adjust the active plane widget and plane positioning

Use the Perspective Grid tool options to change how the active plane widget looks and how the active plane is positioned:

Open the settings by double-clicking the Perspective Grid tool.

When the Perspective Grid Options dialog box opens, set these options as needed:

- Show Active Plane Widget: shows or hides the active plane widget.
- Widget Position: sets where the active plane widget appears in the document window.
- Automatic Plane Positioning: creates objects by deriving the object's height or depth from Anchor Point of Perspective Artwork and Intersection of Gridlines.
