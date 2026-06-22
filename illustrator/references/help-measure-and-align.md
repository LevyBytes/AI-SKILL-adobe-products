# Grids And Guides, Plot And Measure

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Measure and align; About rulers; Use rulers; Work with decimal tabs; Manage tab stops; Align graphic objects with grids; Align graphic objects with guides; Align graphic objects with Tabs; Use Distance Guides for accurate placement; Work with Smart Guides; Smart Guides options; Measure the distance between two points; Measure the area of objects; Area measurement scenarios; About Dimension objects; Plot the linear dimensions of objects; Plot the angular dimensions of objects; Plot radial dimensions of objects.

## Measure and align

### Use grids and guides

About rulers

Use rulers

Work with decimal tabs

Manage tab stops

Align graphic objects with grids

Align graphic objects with guides

Align graphic objects with Tabs

Use Distance Guides for accurate placement

Work with Smart Guides

Smart Guides options

### Measure and plot

Measure the distance between two points

Measure the area of objects

Area measurement scenarios

About Dimension objects

Plot the linear dimensions of objects

Plot the angular dimensions of objects

Plot radial dimensions of objects

Dimension tool options and settings

Snap a line perpendicular to a path in Illustrator

Snap a line tangent to a curve in Illustrator

## About rulers

Use rulers in an Adobe Illustrator workspace to place artwork and check measurements with accuracy when building exact layouts.

In Illustrator, rulers sit along the document's top and left sides and display the current measurement units. Use them as references for precise alignment, placement, and object measurement.

### Types of rulers

Illustrator includes two ruler modes, each intended for a different part of the layout workflow:

- Global rulers appear along the window's top and left sides, and their origin point (0,0) begins at the document's upper-left corner. Choose this mode when you need positions measured against the document as a whole.
- Artboard rulers also run along the top and left sides, but they apply to the active artboard only. Their origin point starts at that artboard's top-left corner. In documents with several artboards, this mode gives each artboard its own measurement reference.

### About the ruler origin

All document measurements use the ruler origin as their reference point; it is the location where 0 is shown on both the horizontal and vertical rulers. Illustrator lets you move that origin so it fits the way the design is constructed:

- With global rulers, Illustrator starts the default origin at the upper-left corner of the first artboard.
- With artboard rulers, Illustrator places the default origin at the upper-left corner of the active artboard.
- When artboard rulers are active, each artboard can have its own origin point.
- Moving an artboard ruler origin leaves pattern fills on objects unchanged.

### Coordinate system

Illustrator positions document content by using a coordinate system:

- On the horizontal (x) axis, values get larger toward the right.
- On the vertical (y) axis, values get larger as you move downward.

Scripting uses a coordinate system retained for backward compatibility. Because of that, Y-coordinate values used in scripts may not match the values displayed in the user interface.

## Use rulers

Apply global rulers or artboard rulers when you need to measure and line up objects accurately in an Illustrator document.

To display rulers, choose View > Rulers > Show Rulers; to remove them from view, choose View > Rulers > Hide Rulers.

Select the Show Rulers option under the Rulers menu.

Select the Show Rulers option under the Rulers menu.

For global rulers, choose View > Rulers > Change to Global Rulers.

For artboard rulers, choose View > Rulers > Change to Artboard Rulers.

To display video rulers, choose View > Rulers > Show Video Rulers; to hide them, choose View > Rulers > Hide Video Rulers.

Change the ruler origin this way:

- Position the pointer at the upper-left intersection of the rulers.
- Drag from that point to the place where the new ruler origin should be. While you drag, the window shows a crosshair and the rulers update to reflect the changing global ruler origin.

To reset the ruler origin to its default, double-click the upper-left point where the rulers meet. Moving the global ruler origin also changes how patterns tile.

Note

Illustrator defaults to points, but units for general measurements, strokes, and type can be changed through Edit > Preferences > Units (Windows) or Illustrator > Settings > Units (macOS). For one document, choose File > Document Setup. When entering values, you can override the default units by adding abbreviations such as in, mm, Q, cm, pt, pc, or px.

## Work with decimal tabs

Use decimal tabs when text needs to line up on a chosen character, such as a period or dollar sign.

Use the Tabs panel to place a new decimal tab icon on the tab ruler, or choose an existing one.

In the Align On box, enter the character that the text should align to.

Note

Any character can be typed or pasted. Confirm that each paragraph being aligned includes that character.

Align text using a decimal tab.

Align text using a decimal tab.

## Manage tab stops

Use the Tabs panel to repeat, move, remove, and adjust tab stops and tab leaders.

### Repeat tabs

Repeat Tab builds additional tabs from the spacing between the selected tab and either the left indent or the preceding tab stop.

Repeat tabs in the Tabs panel

A. Tab-alignment buttons B. Tab stop on the ruler C. Panel menu

Repeat tabs in the Tabs panel

Place an insertion point inside the paragraph.

In the Tabs panel, choose a tab stop on the ruler.

Choose Repeat Tab from the panel menu.

### Move tabs

In the Tabs panel, choose a tab stop on the ruler.

Use any of these methods:

- Enter a different position in X (for horizontal text) or Y (for vertical text), then press Enter (Windows) or Return (macOS).
- Drag the tab to another position.
- To reposition every tab stop at the same time, Ctrl -+ drag (Windows) or command + drag (macOS) a tab.

When the tab stop moves, the selected text displays a visual guide.

### Remove tabs

Choose the tab stop.

Choose Delete Tab from the panel menu.

Tip

You can remove the tab by dragging it off the -ruler as well. To restore the default tab stops, choose Clear All Tabs from the panel menu.

### Add tab leaders

A tab leader fills the space between a tab and the next text with repeated characters, for example dots or dashes.

In the Tabs panel, choose a tab stop on the ruler.

In the Leader box, enter a pattern of up to eight characters, then press Enter (Windows) or Return (macOS). The entered characters repeat across the tab width.

Note

To restyle the tab leader's font or other formatting, select the tab character in the text frame, then apply the formatting from the Character panel or Type menu.

## Align graphic objects with grids

Align graphic objects with grids.

Choose View > Show Grid.

With the Selection tool, choose the object to align.

Choose View > Snap to Grid.

Move the selected objects near a grid line.

Note

Illustrator snaps the object onto the gridline once its bounds are within two pixels.

If you choose View > Pixel Preview, Illustrator changes from Snap to Grid to Snap to Pixel.

Select Hide Grid from the View menu to turn off the grid display.

Select Hide Grid from the View menu to turn off the grid display.

Choose Edit > Preferences > Guides & Grid (Windows) or Illustrator > Settings > Guides & Grid (macOS).

Within Preferences, configure these Grid options as needed:

- Color: controls the color used for grid lines.
- Style: determines whether the Grid is drawn as Lines or Dots.
- Gridline every: sets the spacing between major gridlines.
- Subdivisions: splits each major Grid square into smaller units.

Choose OK.

## Align graphic objects with guides

Create guides, reposition them, delete or release them, and make objects snap to anchor points or guides.

Guides provide alignment references for text and graphic objects. Illustrator supports ruler guides, which are straight horizontal or vertical lines, and guide objects, which are vector objects converted into guides.

### Create guides

Choose View > Rulers > Show Rulers.

For a vertical guide, place the pointer on the left ruler; for a horizontal guide, place it on the top ruler.

Drag the guide to the desired position.

Note

To turn vector objects into guides, use these steps:

Select the objects with the Selection tool.

Choose View > Guides > Make Guides.

Use the View menu to adjust the Rulers settings.

Use the View menu to adjust the Rulers settings.

To keep guides on one artboard instead of across the full canvas, choose the Artboard tool and drag the guides onto the artboard.

### Move, delete, or release guides

Choose View > Guides > Unlock guides so the guides can be edited.

Use whichever steps you need:

- Select and drag the guide to another position, or copy it by holding Alt (Windows) or Option (macOS) during the drag.
- Select the guide and press Backspace (Windows) or Delete (macOS) to remove it.
- Choose View > Guides > Clear Guides to remove every guide in one action.
- Select the guides, then choose View > Guides > Release Guides to turn them back into regular graphic objects.

### Snap objects to anchor points or guides

Choose View > Snap to Point.

With the Selection tool, choose the object to move and place the pointer exactly at the spot that should align to an anchor point or guide.

Drag the object into the target position.

## Align graphic objects with Tabs

Use the Tabs panel in Adobe Illustrator to line up graphic objects.

The Tabs panel can be placed anywhere in the work area, though lining it up with a type object is often useful.

Choose Window > Type > Tabs to open the Tabs panel.

Choose the magnet icon to place the panel directly above the selected text object, with the 0 point matched to the left margin.

Tip

Use the resize handle at the panel's lower-right corner to change the panel width.

### Snap tab stops to the ruler units

By default, tab stops can be placed anywhere on the tab ruler.

Choose the panel menu.

Choose Snap to Unit, or hold Shift while dragging a tab stop.

### Set tabs

Tab stops affect the whole paragraph. After you add the first tab, Illustrator removes every default tab stop to its left. When additional tab stops are added, Illustrator removes the default tabs that fall between the tabs you create.

Choose a type object when the tab stops should apply to all paragraphs in that object.

In the Tabs panel, choose a tab-alignment button to define how the text sits in relation to the tab position:

- Left-Justified Tab: aligns horizontal text to the left and leaves the right margin ragged.
- Center-Justified Tab: centers text on the tab mark.
- Right-Justified Tab: aligns horizontal text to the right and leaves the left margin ragged.
- Decimal-Justified Tab: aligns text to a chosen character, such as a period or dollar sign. Use this for numeric columns.

Select a tab-alignment option

A. Left-Justified Tab B. Center-Justified Tab C. Right-Justified Tab D. Decimal-Justified Tab

Select a tab-alignment option Tip

To change tab ruler units, choose Edit > Preferences > Units for General units across all documents, or use Document Setup for only the current file. Those settings define the measurement system used by the tab ruler.

## Use Distance Guides for accurate placement

Use Distance Guides when you need to see spacing between two objects, or from one object to the artboard.

### View distances between two Objects

With the Selection tool, choose the first object for the position comparison.

Hold Alt (Windows) or Option (macOS), then place the pointer near the second object.

Note

After Smart Guides is on, Adobe Illustrator shows Distance Guides with the selected object's vertical and horizontal spacing from the object under the pointer.

Set Rulers & Grids from the Properties panel.

Set Rulers & Grids from the Properties panel. Tip

Choose View > Smart Guides to turn on Smart Guides.

### View the distance between an Object and the Artboard

With the Selection tool, choose the object to measure.

While holding Alt (Windows) or Option (macOS), move the cursor over an empty part of the artboard.

Note

Using Distance Guides, Illustrator reports how far the object sits from the top, bottom, left, and right edges of the artboard.

## Work with Smart Guides

Use Smart Guides to place, align, and snap objects with precision.

Smart Guides are temporary snap-to guides that show up while you create or adjust objects and artboards. They support alignment, editing, and transformations by snapping objects or artboards against other objects, artboards, or both, while also displaying X, Y location, and delta values.

Tip

Adobe Illustrator turns Smart Guides on by default.

Smart Guides are useful in these situations:

- While drawing with the Pen tool or Shaper tool, use Smart Guides to place a new object's anchor points in relation to existing objects, or to place a new artboard relative to another artboard or object.
- While drawing or transforming with the Pen tool or Shaper tool, Smart Guides construction guides can place anchor points at preset angles, including 45 or 90 degrees.
- During a move operation, Smart Guides align the selected object or artboard to other objects or artboards according to their geometry. Illustrator bases the alignment on object and artboard geometry, and shows guides as the moving item nears another object's edge or center point.
- During transformations, Smart Guides appear automatically to help with the operation.

Note

Smart Guides are unavailable when Snap to Grid or Pixel Preview is enabled from the View menu.

## Smart Guides options

Review the available Smart Guides options.

Open Edit > Preferences > Smart Guides (Windows) or Illustrator > Settings > Smart Guides (macOS) for the Smart Guides option set:

Smart Guides Preferences dialog box overview

Smart Guides Preferences dialog box overview

## Measure the distance between two points

Use the Measure tool to measure any two points and their angle relative to the artboard axes.

Choose the Measure tool.

For a two-point distance measurement, use either action:

- Click one point, then click the other point.
- Click one point and drag to the other point. Illustrator shows a temporary line during the drag. Shift-drag constrains that line to multiples of 45°.

The Info panel opens automatically. It reports H for horizontal distance, V for vertical distance, D for the actual distance between the two points, and the angle of the imaginary connecting line relative to the artboard axes.

## Measure the area of objects

Use the Measure tool to calculate the area of selected objects.

The Measure tool can calculate the canvas area for one or more selected objects, compound paths included. You can leave particular objects or overlapping-object segments out of the selection, which gives finer control over the area result.

With the Selection tool, select the object or objects.

Choose the Measure tool.

Click any spot on the canvas to show the Info panel. The Info panel reports the selected objects' combined area; any overlap contributes to the total only once.

Shift-click an object or a segment of overlapping objects to remove it from the measurement. Shift-click again to include it again.

In the Info panel menu, choose Area Options to adjust Units, Precision, and Scale for the area.

## Area measurement scenarios

Review special cases and limits for area measurement with the Measure tool.

Use these scenarios when the Measure tool returns a result you did not expect or when a particular object type needs measuring:

## About Dimension objects

Dimension objects and Dimension tools help you measure and plot dimensions in artwork, including distance, angle, and radius.

### Dimension tool

The Dimension tool is available from the toolbar. If it is missing, select the Edit Toolbar icon at the bottom of the toolbar, then drag the tool from the Modify section onto the toolbar. Selecting the Dimension tool opens a taskbar. That taskbar provides quick switching among tool types, including Linear Dimension, Angular Dimension, and Radial Dimension. Those tool types plot linear, angular, and radial dimension types, respectively.

### Dimension object

Plotting a dimension creates a dimension object. A dimension object is made up of a dimension line, extension line, and dimension text.

Review the parts of a dimension object before editing its options.

A. Extension line B. Offset of dimension text C. Dimension text D. Dimension line E. Extension of extension line F. Offset of extension line

Review the parts of a dimension object before editing its options.

## Plot the linear dimensions of objects

Use the Linear Dimension tool type to plot a line's length and the distance between any two points.

The linear dimensions you create can be aligned, vertical, or horizontal.

- Aligned dimension: the direct point-to-point distance.
- Vertical dimension: the distance between two points measured vertically.
- Horizontal dimension: the distance between two points measured horizontally.

### Plot the vertical and horizontal dimensions of objects

Plot vertical and horizontal dimensions for an object. If the object has been rotated, these values can differ from its bounding box dimensions; plotted measurements follow the rotated object's current vertical and horizontal dimensions.

Choose the Dimension tool from the toolbar.

Choose Linear Dimension from the taskbar that appears.

Hold Option (macOS) or Alt (Windows) while hovering over the object's path.

Click the canvas when the pink line guide appears.

Use a keyboard shortcut to plot object dimensions.

Use a keyboard shortcut to plot object dimensions.

### Plot the side dimensions of basic shapes

Plot side dimensions for basic shapes such as rectangles, polygons, line segments, and stars.

Plot side dimensions for a basic shape such as a hexagon.

Choose the Dimension tool from the toolbar.

Choose Linear Dimension from the taskbar that appears.

Move the pointer over a side of the shape until a pink line guide appears, then plot the dimensions:

- Aligned dimension of the side: Drag while the line guide stays parallel to the side, then release.
- Vertical dimension of the side: Drag while the line guide stays parallel to the side, redirect until the line guide is vertical, then release.
- Horizontal dimension of the side: Drag while the line guide stays parallel to the side, redirect until the line guide is horizontal, then release.

To reposition dimension objects, drag the object with the Dimension tool.

To modify a plotted dimension object's settings, select the dimension object with the Selection tool and adjust it in the Properties panel.

Note

Dimension values linked to a distorted object do not update automatically.

### Plot the distance between any two points

Choose the Dimension tool from the toolbar.

Choose Linear Dimension from the taskbar that appears.

Click the first point, then click the second point. You can plot these dimensions next:

- Aligned dimension: Click again.
- Vertical dimension: Move the mouse horizontally, then click.
- Horizontal dimension: Move the mouse vertically, then click.

Use the Linear Dimension tool to plot aligned, vertical, and horizontal measurements between two selected points.

Use the Linear Dimension tool to plot aligned, vertical, and horizontal measurements between two selected points. Tip

For a path segment with a stroke, snap to its preview bounds when you need an accurate linear dimension. Turn on preview bounds by opening Illustrator > Settings > General (macOS) or Edit > Preferences > General (Windows), then selecting Use Preview Bounds.

## Plot the angular dimensions of objects

Plot interior or exterior angles accurately inside shapes or between intersecting lines.

### Plot the angles of basic shapes

Use the Angular Dimension tool to plot interior or exterior angles along a vertex.

Choose the Dimension tool from the tool panel.

Choose Angular Dimension from the taskbar that appears.

Hover over the angle's vertex until a pink angular guide appears.

To plot interior and exterior angles, use these actions:

- Interior angle: Drag inward from the vertex, then release.
- Exterior angle: Drag outward from the vertex, then release.

To reposition dimension objects, drag the object with the Dimension tool.

To modify a plotted dimension object's settings, select the dimension object with the Selection tool and adjust it in the Properties panel.

Note

Dimension values linked to a distorted object do not update automatically.

### Plot the angles of intersecting lines

Choose the Dimension tool from the tool panel.

Choose Angular Dimension from the taskbar that appears.

Choose a point on the first line, then choose a point on the second line.

Move the mouse inward or outward, then click the canvas to plot the interior or exterior angle.

Plot the interior or exterior angle formed by two intersecting lines.

Plot the interior or exterior angle formed by two intersecting lines. Tip

For a path segment with a stroke, snap to its preview bounds when you need an accurate linear dimension. Turn on preview bounds by opening Illustrator > Settings > General (macOS) or Edit > Preferences > General (Windows), then selecting Use Preview Bounds.

## Plot radial dimensions of objects

In Adobe Illustrator, radial dimensions report center-point distances and show them in the artwork.

The Radial Dimension tool type plots radius and diameter measurements for circles and perfect arcs that are part of a circle.

Use the Radial Dimension tool to plot radii and diameters for circles and perfect arcs.

Choose the Dimension tool from the toolbar.

In the contextual taskbar that appears, choose Radial Dimension.

Move the pointer over the circle or arc circumference until you see a pink radial guide. Then plot the radial dimensions:

- Radius: Drag outward, then release.
- Diameter: Drag inward, then release.

To reposition dimension objects, drag the object with the Dimension tool.

To modify a plotted dimension object's settings, select the dimension object with the Selection tool and adjust it in the Properties panel.

Dimension values linked to a distorted object do not update automatically.

## Dimension tool options and settings

Set Dimension tool options for dimension objects, including measurement units, scale, precision, and appearance.

Open the Dimension Tool Options dialog box by double-clicking the Dimension tool, or by choosing Tool Options in the Dimension tool taskbar.

Use Dimension Tool Options to set up the dimension objects you will plot.

Use Dimension Tool Options to set up the dimension objects you will plot.

### Modify the properties of existing dimensions

Tool settings define the properties used for dimensions you draw next, but dimensions that already exist are edited from the Properties panel. Select the dimension objects, open the Properties panel, and apply the revised properties either to the selected dimension objects or to every existing dimension object with Apply to all. Choose Set as default when those settings should apply to all current dimensions and to dimensions created later.

When measured artwork is transformed, its linked dimensions recalculate automatically. If you widen a rectangle, for example, the dimension object measuring that width updates to show the new value.

## Snap a line perpendicular to a path in Illustrator

Use snap to perpendicular when line endpoints need to meet straight paths at exact right angles, keeping geometric joins precise.

This snapping mode helps with architectural diagrams, technical drawings, and vector illustrations where true right-angle placement is required.

Before you begin

In Preferences > Smart Guides, confirm that Geometric Guides is selected.

Choose the Line tool or Pen tool.

Start a new line, or choose an existing line to adjust near another straight path.

Move the line's endpoint toward a straight path. When the line reaches a 90° alignment, a perpendicular tooltip appears.

For clean intersections and exact right-angle placement, use snap to perpendicular.

For clean intersections and exact right-angle placement, use snap to perpendicular.

Release the mouse so the line snaps at a right angle.

For an existing line, drag its anchor points until the perpendicular indicator is shown.

Perpendicular snapping is enabled by default. To disable it, use Preferences > Smart Guides > Geometric Guides.

Note

- Snapping works only between two linear paths. A line cannot snap perpendicularly to a curved path.
- Snapping applies only to line endpoints. Mid-line or multi-point perpendicular snaps are not supported.

## Snap a line tangent to a curve in Illustrator

Use snap to tangent to create or revise lines so they touch curves or paths tangentially, producing clean and accurate geometry.

Tangential snapping helps when building logos, technical drawings, and designs where lines must meet curves smoothly. It makes a line touch a curve at one precise point, reducing guesswork and improving work on circular or organic shapes.

Before you begin

In Preferences > Smart Guides, confirm that Geometric Guides is selected.

Choose the Line tool or Pen tool.

Create a new line, or pick an existing line near a curve or path for adjustment.

Move the line's endpoint toward a curve or circle. When the endpoint aligns tangentially, the tangent tooltip and highlight appear.

Use Snap to Tangent to make lines flow naturally along curves or arcs.

Use Snap to Tangent to make lines flow naturally along curves or arcs.

Release the mouse or pen to snap the line tangentially to the curve.

For existing lines, move anchor points until the tangent indicator appears, adding tangential endpoints.

Tangential snapping is enabled by default. To disable it, use Preferences > Smart Guides > Geometric Guides.

Note

Snapping applies only to line endpoints. Mid-line tangents are not supported.
