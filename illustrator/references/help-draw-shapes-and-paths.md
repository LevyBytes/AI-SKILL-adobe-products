# Learn Drawing Basics, Draw Shapes

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Draw shapes and paths; Drawing modes overview; Paths overview; Adjust anchor point, handle, and bounding box display size; Show or hide direction lines for anchor points; Draw lines; Draw arcs; Draw stars; Draw spirals; Draw freeform paths with the Pencil tool; Draw straight lines with the Pencil tool; Extend paths with the Pencil tool; Reshape paths with the Pencil tool; Connect two paths with the Pencil tool; Pencil tool options; Draw shapes with the Curvature tool; Draw curves with the Pen tool; Draw line segments with the Pen tool.

## Draw shapes and paths

### Learn drawing basics

Drawing modes overview

Paths overview

Adjust anchor point, handle, and bounding box display size

Show or hide direction lines for anchor points

### Draw shapes

Draw lines

Draw arcs

Draw stars

Draw spirals

Draw freeform paths with the Pencil tool

Draw straight lines with the Pencil tool

Extend paths with the Pencil tool

Reshape paths with the Pencil tool

Connect two paths with the Pencil tool

Pencil tool options

Draw shapes with the Curvature tool

Draw curves with the Pen tool

Draw line segments with the Pen tool

Draw curves followed by straight lines

Draw straight lines followed by curves

Draw two curved segments connected by a corner

Preview the path

### Modify live shapes

Move live shapes

Rotate live shapes

Scale live shapes

Change corner radius of live shapes

Add or remove sides from stars

Change inner and outer radii of stars

Add or remove sides from polygons

Create pie shapes

### Modify paths

Create smooth paths with the Smooth tool

Refine path segments with the Smooth slider

Select and edit path segments

Select anchor points to modify paths

Convert anchor points on a path

Average the position of the anchor points

Add or remove anchor points

Turn off automatic addition or deletion of anchor points

Find and delete stray anchor points

Copy paths

Auto simplify paths

Manually simplify paths

Simplify paths advanced options overview

Simplify path benefits

Cut paths

Erase paths using the Eraser tool

Erase parts of a path

Adjust path smoothness

Refine paths in Illustrator using Anchor Point and Smooth tools

## Drawing modes overview

### Use drawing modes to manage object placement and stacking order.

Illustrator provides Draw Normal, Draw Behind, and Draw Inside for deciding how new artwork interacts with objects that already exist. These modes control both placement and stacking order for new objects in the design. The drawing-mode controls are in the lower-left toolbar area of the workspace, and Shift + D cycles through the three modes.

Drawing modes also affect commands such as Paste in Place and Paste on All Artboards. They do not apply to Paste in Front or Paste in Back.

### Draw Normal Mode

Draw Normal Mode is the standard drawing setting. Illustrator puts new objects above the selected object, or in front of other objects on the same layer.

### Draw Behind Mode

Draw Behind Mode places new artwork behind artwork that is already present. With no selection, the object goes behind every item on the selected layer. When an object is selected, Illustrator inserts the new object immediately below it.

Draw Behind mode applies to:

- New layer creation
- Symbol or file placement
- Object duplication (Alt + Drag)
- Paste in Place or Paste on All Artboards.

### Draw Inside Mode

Draw Inside Mode lets you add artwork inside one selected object, producing a clipping-mask result without extra manual steps. It is available only when a single object is selected, such as a path, a compound path, or text.

Draw Inside mode workflow:

- Choose the target object.
- Change to Draw Inside mode.
- Create or paste your shape. Illustrator clips content that falls outside the object automatically.
- Leave the mode with Shift + D, or double-click outside the object.

Note

Unlike masks made with Object > Clipping Mask > Make, these clipping masks keep the path appearance.

## Paths overview

See how paths build shapes in vector graphics, and how anchor points, fills, and strokes define their structure and appearance.

In vector graphics, a path is the basic construction unit of artwork. It contains one or more straight or curved segments joined by anchor points, which function like pins holding wire. A path may be open, with separate start and end points like a wavy line, or closed, with the start and end points joined into a complete shape like a circle.

### Paths and anchor points

To reshape a path, drag its anchor points, the direction lines that extend from them, or the path segments. Paths use two kinds of anchor points:

- Corner points: make the path turn sharply.
- Smooth points: join curved segments through a continuous transition.

Any path can combine corner points and smooth points. If you draw the wrong point type, you can change it later.

A corner point can join any pair of straight or curved segments. A smooth point always joins two curved segments. Corner and smooth describe how the points behave, not whether the attached segments are straight or curved.

### Fill and Stroke properties of paths

Every path includes two visual attributes:

- Fill: The interior area of a closed or open path receives this color or gradient.
- Stroke: The path outline; its thickness, color, and style can vary. Adobe Illustrator and InDesign include stroke options such as dash patterns and stylized lines. You can adjust a path or shape's Fill and Stroke properties at any time.

## Adjust anchor point, handle, and bounding box display size

Adjust anchor points, handle, and bounding box settings. Set preferences for anchor points, handles, and bounding boxes.

Open Edit > Preferences > Selection & Anchor Display (Windows) or Illustrator > Settings > Preferences > Selection & Anchor Display (macOS).

In Preferences, use Selection & Anchor Display to control anchor point, handle, and bounding box visibility.

Under Preferences, Selection & Anchor Display also controls how anchor points, handles, and bounding boxes appear.

In Anchor Points, Handle, and Bounding Box Display, change any of these settings:

- Size: Use the slider to resize the on-screen display of anchor points, handles, and bounding boxes.

- Handle Style: Set direction points (handle end points) to appear as solid blue circles or as white circles.
- Highlight anchors on mouse over: Highlights the anchor point directly beneath the pointer.
- Show handles when multiple anchors are selected: With the Direct Selection tool or Group Selection tool, shows direction lines for every selected anchor point in the selected object. Turning it off limits visible handles to single anchor-point selections or selected curve sections.
- Hide Corner Widget for angles greater than: Choose a degree threshold; corner widgets are hidden for angles above that value.
- Enable Rubber Band for: Choose Pen Tool or Curvature Tool to show a preview of the path you plan to create.

## Show or hide direction lines for anchor points

Use the Direct Selection tool to show or hide direction handles across several anchor points.

Direction lines or handles can make curve refinement easier while editing anchor points and paths. Too many visible handles, however, can clutter the view. Illustrator provides controls for direction-line visibility on selected anchor points.

Choose the Direct Selection tool, then Shift-click the anchor points whose handles you want to show or hide.

Open Window > Control to display the Control panel.

At the top of the screen in the Control panel, choose one of these options:

- Show handles for multiple selected anchor points
- Hide handles for multiple selected anchor points

Note

Smooth points show direction handles automatically when selected; corner points do not. To change a corner point into a smooth point, choose Convert selected anchor points to smooth in the Control panel.

## Draw lines

### Draw lines in Illustrator.

Choose the Line Segment tool.

Click the canvas where the line should start.

In the Line Segment Tool Options dialog box, enter the desired Length and the line Angle.

Turn on Fill Line to fill the line with the current fill color.

Enable Fill Line when the line should use the current fill color.

Select OK.

## Draw arcs

Draw arcs quickly in Illustrator.

Choose the Arc tool.

Click the canvas where the arc should start.

In the Arc Segment Tool Options dialog box, configure these options as needed:

- Reference point locator: Sets the point used as the origin for drawing the arc.
- Length X‑Axis: Sets the arc width.
- Length Y‑Axis: Sets the arc height.
- Type: Determines whether the arc is an Open or a Closed path.
- Base Along: Sets the arc direction. Choose X Axis for a horizontal (X) base or Y Axis for a vertical (Y) base.
- Slope: Sets the slope direction; enter a negative value for Concave (inward), a positive value for Convex (outward), or 0 to make a straight line.

Turn on Fill Arc to fill the arc with the current fill color.

Enable Fill Arc when the arc should use the current fill color.

Select OK.

## Draw stars

### Draw stars in Adobe Illustrator.

Choose the Star tool.

Click the canvas where the star center should begin.

In the Star dialog box, set these options as needed:

- Radius 1: The distance from the star's center to its innermost points.
- Radius 2: The distance from the star's center to its outermost points.
- Points: The star's point (arm) count.

Use the Star dialog box to set the number of points (arms) for the star.

The Star dialog box is also where you define the star's point (arm) count.

Select OK.

## Draw spirals

### Draw spirals in Adobe Illustrator.

Choose the Spiral tool.

Click the canvas where the spiral should start.

In the Spiral dialog box, set these options as needed:

- Radius: The distance from the spiral's center to its outermost point.
- Decay: How much each spiral wind decreases compared with the previous wind.
- Segments: The total segment count for the spiral. One complete wind contains four segments.
- Style: The direction the spiral turns.

Use the Spiral dialog box to enter the segment count.

The Spiral dialog box is where you set the number of segments.

Select OK.

## Draw freeform paths with the Pencil tool

### Draw freeform paths with the Pencil tool.

Select the Pencil tool from the toolbar. As the pointer moves onto the canvas, a small star appears on the Pencil tool, signaling that freeform drawing can begin.

Open Stroke from the Appearance section of the Properties panel, then change the stroke styles in the panel that opens.

Note

- In the Appearance panel menu (Window > Appearance), deselect New Art Has Basic Appearance. Otherwise, styles and effects can be applied only after the path is drawn, so they cannot be previewed live.
- Live preview also requires Real-Time Drawing and Editing to be on in Illustrator > Settings > Performance (macOS) or Edit > Preferences > Performance (Windows).

If needed, apply an effect from the Effect menu.

Drag on the canvas to create the path, then release the mouse when done. Anchor points appear at the two ends and at multiple points along the path.

By default:

- The Pencil tool shows stroke styles and effects while drawing and fits the path curve live. Tool options let you change these behaviors.
- After you release the mouse, the path stays selected.

For a multi-line path, point at the first line's endpoint. When the path-continuation icon appears on the Pencil tool, drag to add the next line.

For a closed path, draw back toward the starting point. Release the mouse when a small circle on the Pencil tool indicates that the path is ready to close.

## Draw straight lines with the Pencil tool

### Pencil Tool straight segments: constrained or unconstrained.

Activate Pencil tool in the toolbar.

Pick one method:

- Constrained straight line: Press and hold Shift. After the straight-line icon appears on the Pencil tool, draw a segment locked to 0, 45, or 90 degrees.
- Unconstrained straight line: Press and hold Option or Alt. After the straight-line icon appears on the Pencil tool, draw a segment without angle locking.

For another segment in the same multi-line path, keep Shift or Option/Alt held and move to the first line's endpoint. After the path-continuation icon appears on the Pencil tool, drag the next line.

To close a path, draw back toward its starting point. When the small circle appears on the Pencil tool to show closure, release the mouse.

## Extend paths with the Pencil tool

Extend paths with the Pencil tool.

Choose the Selection tool from the toolbar, then select the path to extend.

Choose the Pencil tool from the toolbar.

Move over the path endpoint. When the path-continuation icon appears on the Pencil tool, drag outward to extend the path.

The Pencil tool can continue drawing from an existing line to extend paths smoothly.

Use the Pencil tool to keep drawing from an existing line and extend the path.

## Reshape paths with the Pencil tool

Reshape paths with the Pencil tool.

Choose the Selection tool from the toolbar, then select the path to reshape.

Choose the Pencil tool from the toolbar.

Hover over the section of the path where reshaping should start. When the small star icon disappears from the Pencil tool, drag to redraw the shape.

Note

Results can differ depending on where redrawing begins and which direction you drag. For example, a closed path may become open, an open path may become closed, or part of a shape may be removed unintentionally.

## Connect two paths with the Pencil tool

Connect two separate paths with the Pencil tool.

Choose the Selection tool in the toolbar. Select both paths by Shift-clicking them or by dragging a selection area around them.

Choose the Pencil tool in the toolbar.

Move the pointer to one path's endpoint. After the path-continuation icon shows on the Pencil tool, drag toward the other path's endpoint.

When the pointer nears the endpoint of the second path and the path-continuation icon shows again on the Pencil tool, release the mouse.

Tip

For cleaner joins, pull from one path toward the other as though extending the paths in the direction they were originally drawn.

## Pencil tool options

### Review the controls available for the Pencil tool.

Open the tool settings by double-clicking the Pencil tool in the toolbar:

## Draw shapes with the Curvature tool

### Use the Curvature tool to build shapes with smooth, accurate curves more easily.

The Curvature tool makes path construction simpler and more direct. With it, you can create, toggle, edit, add, or remove smooth points and corner points.

Choose the Curvature tool.

Click anywhere on the artboard to place the first point. Click another spot to create the second point; Illustrator creates a line segment. Move the pointer to preview the resulting path.

Note

To hide that path preview on Windows, choose Edit > Preferences > Selection & Anchor Display, then clear Curvature Tool under Enable Rubber Band for. On macOS, choose Illustrator > Settings > Selection & Anchor Display, then clear Curvature Tool under Enable Rubber Band for.

Click a point on the artboard to make a smooth point, or double-click to make a corner point.

Modify smooth and corner points:

- Alt-click (Windows) or Option-click (macOS) when you want to extend an existing path or shape with more points.
- Use a double-click on a point to switch it between smooth and corner.
- Drag a selected point to reposition it.
- Select a point and press Delete to remove it without breaking the curve.
- Press Esc to finish drawing.

Tip

Enable Real-Time Drawing and Editing to make objects update more visibly while you modify them.

- (Windows) Choose Edit > Preferences > Performance > Real-Time Drawing and Editing.
- (macOS) Choose Illustrator > Settings > Performance > Real-Time Drawing and Editing.

## Draw curves with the Pen tool

### Draw curves with the Pen tool in Adobe Illustrator.

Use the Pen tool to make C-shaped and S-shaped curves.

Choose the Pen tool from the toolbar.

Place the Pen tool where the curve should start.

Drag to define the slope for the curve segment you are creating.

Move the Pen tool to the location where the curve should finish. Use one of these methods as needed:

- For a C-shaped curve: pull opposite the previous direction line, then let go of the mouse button.
- For an S-shaped curve: pull in the same direction as the previous direction line, then let go of the mouse button.

Tip

While drawing a curve, hold Ctrl (Windows) or Command (macOS) as you drag a smooth anchor point's handles to make their lengths different.

Keep positioning and dragging the Pen tool to build a series of smooth curve segments.

To close the path:

- Move the Pen tool over the first anchor point; that point appears hollow. When the pointer is in the right place, a small circle appears next to the Pen tool pointer.
- Close the path by clicking or dragging.

To keep the path open:

- Ctrl-click (Windows) or Command-click (macOS) in an empty area away from the path.
- Switch to another tool, or choose Select > Deselect.

## Draw line segments with the Pen tool

### Create straight line segments with the Pen tool.

Choose the Pen tool.

Place the Pen tool where the straight segment should start, then click without dragging to set the first anchor point. That first segment stays hidden until you place a second anchor point.

Use the Pen tool for drawing and editing paths when exact vector artwork is needed.

Use the Pen tool for path drawing and path edits when you need exact vector artwork.

Click again at the intended endpoint of the segment.

Continue clicking to place anchor points for more straight segments.

To close the path:

- Move the Pen tool over the first anchor point; that point appears hollow. At the correct position, a small circle appears next to the Pen tool pointer.
- Close the path by clicking or dragging.

To keep the path open:

- Ctrl-click (Windows) or Command-click (macOS) in an empty area away from the path.
- Switch to another tool, or choose Select > Deselect.

## Draw curves followed by straight lines

### Use the Pen tool to draw a curve that continues into a straight line.

Choose the Pen tool, then drag to place the first smooth point for the curved segment.

Move the Pen tool to the location where the curved segment should end, then drag to finish the curve.

Place the Pen tool over the selected endpoint. Once alignment is correct, a convert-point icon appears beside it.

Click the anchor point to change the smooth point into a corner point.

Move the Pen tool to the desired endpoint for the straight segment, then click to finish the straight portion.

## Draw straight lines followed by curves

### Draw a straight segment first, then continue with a curve using the Pen tool.

Choose the Pen tool, then click two locations to make corner points for a straight segment.

Place the Pen tool on the selected endpoint. At the correct position, a convert-point icon appears next to the Pen tool.

Click the anchor point, then drag the displayed direction line to define the slope for the curved segment you want to create.

Click the new anchor point location and drag to finish the curve, if needed.

## Draw two curved segments connected by a corner

### Use the Pen tool to connect two curved segments at a corner.

Choose the Pen tool, then drag to create the first smooth point for a curved segment.

Move the Pen tool and drag to form a curve with a second smooth point. Next, while holding Alt (Windows) or Option (macOS), pull the direction line back toward the opposite side to define the following curve's slope. Splitting the direction lines changes the smooth point into a corner point.

Move the Pen tool to where the second curved segment should finish, then drag out a new smooth point to complete it.

For a semi-circular segment, reshape a segment while holding the Shift key. The Shift modifier keeps the handles perpendicular and makes the handle lengths equal.

Tip

While using the Pen tool, hold Alt (Windows) or Option (macOS) and hover over a path segment. The cursor switches to the Reshape tool. You can then drag the path segment to revise its shape.

## Preview the path

### Preview a path before placing the next anchor point with the Pen tool or the Curvature tool.

With default settings, the Pen tool and the Curvature tool show a path preview from the previous anchor point to the current mouse-pointer position.

Place a smooth point with either the Pen tool or the Curvature tool, then drag out handles as needed.

Tip

While dragging the handles of a smooth point, hold Command (macOS) or Ctrl (Windows) to make unequal handles while keeping the pair intact.

Release the mouse, then move the pointer to the position where the next anchor point should go. Before you place it, Illustrator displays a path that previews what will be drawn from that point.

Place the anchor point to draw the path shown in the preview.

Note

When preview is enabled, pressing Esc hides the preview and ends the path. That matches pressing the keyboard shortcut P while using the Pen tool when preview is disabled.

Turn off path preview for the Pen tool and the Curvature tool on Windows by clearing Edit > Preferences > Selection & Anchor Display > Enable Rubber Band for. On macOS, clear Illustrator > Settings > Selection & Anchor Display > Enable Rubber Band for.
