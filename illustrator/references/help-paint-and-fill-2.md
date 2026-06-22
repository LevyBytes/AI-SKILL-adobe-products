# Create And Edit Gradients, Create And Edit Meshes

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Gradients overview; Apply predefined gradients; Apply linear gradients; Apply radial gradients; Apply freeform gradients; Apply gradients on stroke; Apply gradients across multiple objects; Control dither in gradients; Control perceptual interpolation in gradients; Mesh objects overview; Create mesh objects; Edit mesh objects; Set transparency for gradient meshes; Convert mesh objects to path objects; Convert a gradient-filled object to a mesh object.

## Gradients overview

Review Illustrator gradient categories.

Apply a gradient to create a smooth transition between colors.

Apply a gradient to create a smooth transition between colors.

A Gradient is a gradual mix between two or more colors, or between tints of a single color. Gradients can build color blends, give vector objects a sense of volume, and add light-and-shadow effects to artwork. You can create, apply, and edit a Gradient from the Gradient panel, the Gradient tool, or the Control panel.

### Gradient types

Illustrator supports three gradient types:

- Linear Gradient: blends colors from one point to another along a straight line.
- Radial Gradient: blends colors between one point and another in a circular pattern.
  - Points: blends colors around a color stop.
  - Lines: blends colors around a line.

Note

Linear Gradient and Radial Gradient can be used on an object's Fill and Stroke. Freeform Gradient is available only for an object's Fill.

Use Linear, Radial, or Freeform gradient to blend colors.

A. Linear Gradient B. Radial Gradient C. Freeform Gradient

Use Linear, Radial, or Freeform gradient to blend colors. Tip

A Color Stop controls gradient color. For Linear Gradient and Radial Gradient, it appears on the Gradient Annotator; for Freeform Gradient, it appears on the object. Change color stops to define the gradient colors.

### Gradient Annotator

For Linear Gradient and Radial Gradient, choosing the Gradient tool in the toolbar places Gradient Annotator on the artwork. This slider includes a starting point, an end point, a midpoint, plus color stops at both ends.

Control visibility with View > Hide Gradient Annotator or View > Show Gradient Annotator. Gradient Annotator can change the angle, location, and spread for a Linear Gradient, and the focal point, origin, and spread for a Radial Gradient. After the annotator is visible on the object, either the Gradient panel or Gradient Annotator can be used to add color stops, set colors for specific stops, revise Opacity settings, and move stops by dragging. Open the Gradient panel with Windows > Gradient.

In Linear Gradient and Radial Gradient annotators, drag the circular end, the starting point, to move the gradient origin. Drag the arrow end, the end point, to lengthen or shorten the gradient range. Hovering over the end point shows a rotation cursor for changing the gradient Angle.

Freeform Gradient places color stops at arbitrary positions inside the object, so Gradient Annotator is unnecessary.

## Apply predefined gradients

### Apply a predefined gradient in Adobe Illustrator to add color transitions to artwork.

Illustrator includes preset gradients that are available through the Gradient panel and the Swatches panel. Custom gradients can also be built and stored in the Swatches panel for later reuse.

- The first use of the Gradient tool applies the default white-to-black gradient.
- After a gradient has already been used, Illustrator applies the most recently used gradient instead.

### Apply a saved gradient or a gradient preset from the Gradient panel

Choose Window > Gradient.

Select the artwork on the canvas.

In the Gradient panel, pick either a saved item under Gradient swatches or an entry in the Presets drop-down menu.

Use options such as Water, Wood, Sky, Pastels, and more when you want a quick gradient effect on an object.

Use options such as Water, Wood, Sky, Pastels, and more when you want a quick gradient effect on an object. Tip

Treat gradient presets as starting material, then customize stops, colors, or opacity in the Gradient panel.

### Apply a predefined gradient from the swatch library

Choose Window > Swatches to open the Swatches panel.

In the Swatches panel, choose Swatch Library menu > Gradients, then choose the gradient to apply.

Tip

The same predefined gradients are available from the Swatches panel menu through Open Swatch Library > Gradients.

From the Gradient menu in Open Swatch Library, choose a predefined gradient.

From the Gradient menu in Open Swatch Library, choose a predefined gradient.

Use Show Swatch Kinds menu > Show Gradient Swatches to show only gradients in the Swatches panel.

### Apply gradients using existing fill

When a gradient is applied to an object that already has a solid fill, Illustrator uses that fill color as the gradient's first color. This keeps the design visually consistent and avoids manually picking the base color again.

Select a shape with a solid fill color, then go to the Gradient panel.

The Gradient Slider starts automatically with the shape's fill color. Use the swatches to adjust the gradient as needed.

Note

If the object has no fill, Illustrator applies the default gradient. When several selected shapes have different colors, the last used gradient appears.

## Apply linear gradients

This workflow creates Linear Gradient fills with the Gradient tool.

Choose the target object with the Selection tool.

Open the Gradient panel by double-clicking the Gradient tool in the toolbar.

In the Gradient panel's Type section, choose Linear Gradient.

Linear Gradient creates smooth color blending along a straight direction.

Linear Gradient creates smooth color blending along a straight direction. Note

The Control panel and Properties panel also provide Linear Gradient.

Use the Gradient panel to refine Angle, Gradient Slider, Opacity, and Location as needed.

## Apply radial gradients

This workflow creates Radial Gradient fills with the Gradient tool.

Choose the target object with the Selection tool.

Open the Gradient panel by double-clicking the Gradient tool in the toolbar.

In the Gradient panel's Type section, choose Radial Gradient.

Radial Gradient creates smooth color blending outward from the center.

Radial Gradient creates smooth color blending outward from the center. Note

The Control panel and Properties panel also provide Radial Gradient.

Use the Gradient panel to refine Angle, Aspect Ratio, Gradient Slider, Opacity, and Location as needed.

## Apply freeform gradients

Use the Gradient tool to create freeform gradients.

Freeform gradients can be built with the Points or Lines option in the Gradient tool. With Points, color stops are added as separate points inside the object; with Lines, color stops are placed along lines.

### Apply freeform gradients using Points

This workflow uses Points to edit freeform color transitions at specific positions.

Choose the target object with the Selection tool.

Open the Gradient panel by double-clicking the Gradient tool in the toolbar.

In the Gradient panel's Type section, choose Freeform Gradient, then choose Points as the Draw option.

Note

- Freeform Gradient is also available from the Control panel and the Properties panel.
- To avoid the default Freeform Gradient experience, turn off Enable Content Aware Defaults in Illustrator > Settings > General (macOS) or Edit > Preferences > General (Windows).

Click inside the object to place a color stop. Add additional color stops as needed.

Drag a color stop to move it.

To change a color stop's spread, select the stop, then use one of these methods:

- Choose a preset value from the Spread dropdown in the Gradient panel.
- Enter a value in the Spread field for an exact spread.

Changing a color stop's spread controls how much area the stop affects.

To remove a color stop, select it, then press Delete.

You can also remove it by dragging the color stop outside the object or by choosing Delete Stop in the Gradient panel.

In the Gradient panel, adjust Opacity as needed.

### Apply freeform gradients using Lines

This workflow uses Lines to edit freeform color transitions along drawn paths.

Choose the target object with the Selection tool.

Open the Gradient panel by double-clicking the Gradient tool in the toolbar.

In the Gradient panel's Type section, choose Freeform Gradient, then choose Lines as the Draw option.

Click inside the object to place the first color stop, then click again for the second stop. Illustrator connects those stops with a straight line automatically.

Click again to add more color stops as needed. After the third color stop is added, the straight line becomes curved. Press Esc to finish the line.

Drag a color stop to move it. The line updates automatically.

To remove a color stop, select it, then press Delete.

You can also remove it by dragging the color stop outside the object or by choosing Delete Stop in the Gradient panel.

Add more lines as needed. To join two lines, click an endpoint color stop on the first line, then click an endpoint color stop on the second line.

Lines is useful for continuous color blending.

In the Gradient panel, adjust Opacity as needed.

Note

With Lines, Spread is unavailable.

## Apply gradients on stroke

Set up gradients on strokes in Illustrator.

Choose the object with the Selection tool.

Open Window > Gradient.

In the Gradient panel, choose Stroke (X) to target the Stroke.

Choose the desired Gradient from the Gradient panel.

Choose one of these Stroke styles as needed:

- Apply gradient within stroke : distributes the Gradient evenly inside the stroke width.
- Apply gradient along stroke : makes the Gradient follow the stroke path.
- Apply gradient across stroke : extends the Gradient across the stroke thickness.

Gradient panel overview

A. Apply gradient within stroke B. Apply gradient along stroke C. Apply gradient across stroke

Gradient panel overview

## Apply gradients across multiple objects

Use gradients across multiple objects in Adobe Illustrator to keep one unified, consistent color transition.

### Apply a Linear Gradient or a Radial Gradient for multiple objects

Apply a Linear or Radial Gradient to one object.

Choose the Selection tool from the toolbar. Hold Shift and select the other objects that should use the same gradient.

In the Gradient panel, choose the Fill icon to apply the gradient to the selected objects.

Tip

The Eyedropper tool can sample different gradient colors.

### Apply gradients for multiple objects using the Gradient tool

For a single Gradient Annotator, choose the Gradient tool, click the artboard where the gradient should start, and drag to the point where it should end.

To give each selected object its own Gradient Annotator, choose the Gradient tool, keep Alt (Windows) or Option (macOS) pressed, and drag from the first gradient position to the final one. Adjust the separate gradient sliders for the individual objects. Illustrator creates multiple gradient sliders only for simple paths.

## Control dither in gradients

Use the Dither effect on gradient fills to reduce banding, smooth transitions, and improve blend quality in artwork.

Banding appears as visible stepping between gradient stops instead of a clean blend. Dither rasterizes the gradient and adds slight noise, softening color transitions, reducing banding, and improving output for screen and print.

Choose an object that already has a gradient fill, or create a gradient.

In the Gradient panel, select the Dither checkbox to enable the effect and smooth the gradient.

Apply dithering to the selected gradient to reduce visible bands.

Apply dithering to the selected gradient to reduce visible bands.

Adjust gradient stops, opacity, or angle if needed.

Note

- Dither applies only to gradient fills.
- For editable gradients, go to File > Export > Export As..., choose PDF, and enable Preserve Illustrator Editing Capabilities during export.
- Gradients added to CC Libraries do not support Dither.
- Dithered gradients use the resolution defined in Document Raster Effect Settings.

## Control perceptual interpolation in gradients

Use perceptual interpolation to make gradient color transitions smoother and more natural.

Perceptual interpolation changes gradient transitions according to how the eye distinguishes color differences. The result is a smoother blend with adjacent colors that appear more distinct.

Tip

Use perceptual interpolation in charts, dashboards, infographics, or UI elements when evenly spaced, distinct colors make the design easier to read.

Choose an object that already has a gradient fill, or create a new gradient.

Open the Gradient panel.

Set Method to Perceptual.

Use Perceptual or Classic to decide how gradient colors interpolate.

Use Perceptual or Classic to decide how gradient colors interpolate.

Use gradient stops, colors, opacity, or location to refine the gradient appearance as desired.

Note

- PDF and SVG exports do not support Perceptual gradients; gradients saved in those formats are rasterised.
- CC Libraries do not preserve perceptual rendering for saved gradients.
- Expanding perceptual gradients into mesh objects is not supported.

## Mesh objects overview

Use meshes to blend colors, add depth, and create gradient effects on objects.

A mesh object contains multiple colors that can move in different directions while transitioning smoothly from point to point. Mesh objects are created with the Mesh tool.

Create a mesh object using the Mesh tool.

A. Mesh line B. Mesh point C. Mesh patch

Create a mesh object using the Mesh tool.

Mesh objects are made from these parts:

- Mesh line: These are the intersecting lines Illustrator shows after a mesh is created on an object. They define the mesh structure and help control color transitions. Move or adjust points along mesh lines to fine-tune color intensity and distribution.
- Mesh point: This is where two mesh lines intersect. It behaves like an anchor point but can also accept color. Mesh anchor points can be viewed, added, modified, moved, and deleted.
- Mesh patch: This is the area bounded by any four mesh points. As with mesh points, colors can be applied or adjusted directly within a patch.

## Create mesh objects

Create mesh objects to build contours, add depth, and form detailed color transitions in artwork.

### Create mesh objects with an irregular pattern of mesh points

Choose the target object with the Selection tool.

Activate the Mesh tool or press U.

Click along paths or inside the object to add mesh lines and mesh points. Click additional locations to add more mesh points.

To color the area between mesh points, select a mesh point, then choose a fill color.

Use the Mesh tool to drag mesh points and edit the shape and color flow.

### Create mesh objects with a regular pattern of mesh points

Choose the target object with the Selection tool.

Choose Object > Create Gradient Mesh.

Set Rows and Columns for the object in the Create Gradient Mesh dialog box.

In the same dialog box, use row and column counts to generate mesh lines in horizontal and vertical directions.

Use the Create Gradient Mesh dialog box to specify row and column counts that create horizontal and vertical mesh lines.

From the Appearance dropdown menu, choose a direction for highlighting the mesh object:

- Flat: uses the object's original color uniformly across the surface, so no highlight appears.
- To Center: creates a highlight at the center of the object.
- To Edge: creates a highlight along the object's edges.

In the Highlight field, enter the percentage of white highlight to apply to the mesh object.

Use the Mesh tool to drag mesh points and adjust the shape and color flow.

Note

When mesh objects are printed, spot colors are preserved in EPS, PDF, and PostScript file formats.

## Edit mesh objects

This section explains how to edit mesh objects in Adobe Illustrator.

With the Mesh tool, select the mesh object.

To insert a mesh point, click any location inside the mesh object.

With the Mesh tool, drag existing mesh points into new positions. Press Shift when choosing more than one anchor point.

Use the Mesh tool to target a mesh point or mesh patch.

For color in the region between mesh points or mesh patches, choose Window > Swatches.

Add a fill by dragging a color from the Swatches panel onto the point or patch.

In the Swatches panel, create a new swatch group.

In the Swatches panel, create a new swatch group.

### Edit mesh points

- To recolor a mesh point or patch, use the Mesh tool to pick an existing mesh point or patch, or choose a fill color in the Swatches or Color panel.
- To insert a mesh point while keeping the active fill color unchanged, hold Shift as you select the mesh point.
- To remove a mesh point, hold Alt (Windows) or Option (macOS) and click the point with the Mesh tool.

## Set transparency for gradient meshes

This section covers setting transparency for gradient meshes in Adobe Illustrator.

Using the Selection tool, select the mesh object.

Choose Window > Transparency.

In the Transparency panel, move the Opacity slider as required. 0% Opacity makes the object completely transparent; 100% Opacity makes it completely opaque.

In the Transparency panel, choose the Blending Mode.

In the Transparency panel, choose the Blending Mode. Tip

When an Illustrator file that contains gradient mesh objects with transparency is saved to legacy formats such as EPS or PDF, Illustrator preserves that transparency by generating an opacity mask.

## Convert mesh objects to path objects

This section explains how to convert mesh objects to path objects in Adobe Illustrator.

Using the Selection tool, select the mesh object.

Choose Object > Path > Offset Path.

Set Offset to zero.

Adjust the Joins settings in the Offset Path dialog box.

Adjust the Joins settings in the Offset Path dialog box.

Select OK.

## Convert a gradient-filled object to a mesh object

This section covers turning a gradient object into a mesh object for finer control over color transitions and contouring.

With the Selection tool, select the object with gradients, then choose Object > Expand.

In the Expand dialog box, choose Gradient Mesh.

Use Gradient Mesh for the conversion from gradient object to mesh object.

Use Gradient Mesh for the conversion from gradient object to mesh object.

Select OK to make the object an editable gradient mesh object.

With the Mesh tool, select the object so you can add mesh lines and mesh points.
