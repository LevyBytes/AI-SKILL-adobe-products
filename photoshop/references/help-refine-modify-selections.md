# Move Selection Or Selection Border, Refine Your Selection And Mask, Hover Layer Bounds In The Move Tool, Copy And Paste Selections ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Move a selection or selection border; Refine your selection and mask; Hover layer bounds in the Move tool; Copy and paste selections; Create multiple copies of a selection within an image; Paste one selection into or outside another; Delete or cut selected pixels; Control the movement of a selection; Hide or show selection edges; Inverse selection; Adjust a selection manually; Select only an area intersected by other selections; Refine and soften selection edges; Select pixels using anti-aliasing; Define a feathered edge for a selection tool; Create a selection around a selection border; Expand or contract a selection; Clean up stray pixels in a color-based selection.

## Move a selection or selection border

Photoshop supports moving a selection, changing its border, showing or hiding selection edges, and inverting a selection.

### Move a selection

Choose the Move tool from the toolbar.

Put the pointer inside the selection border, then drag to reposition the selection. If several areas are selected, Photoshop moves them together.

### Move a selection border

With any selection tool active, choose New Selection in the Options bar.

Move the pointer inside the selection border until the movement pointer appears.

Drag the border so it surrounds a different part of the image.

- The border can extend past the canvas while you drag; when you bring it back, the original outline is still preserved.
- The border may also be moved into another image window.

Note

Geometric transformations can reshape the selection border.

### Control the movement of a selection

- Hold Shift during a drag to limit the movement direction to 45° increments.
- Press an arrow key when you need a 1 pixel nudge.
- Hold Shift while pressing an arrow key to move by 10 pixels.

### Hide or show selection edges

- Use View > Extras to switch selection edges, grids, guides, and other extras on or off together.
- Use View > Show > Selection Edges when only the selection outline should be toggled. A fresh selection brings the edges back.

### Select the unselected parts of an image

Select the background with the Magic Wand tool.

Use Select > Inverse when the object, rather than the background, should become selected.

## Refine your selection and mask

Improve Photoshop selections with View Modes and refinement methods when you need more exact control.

Use the Properties panel settings to tune visibility, accuracy, and refinement behavior for cleaner results.

### View Mode settings

- View Mode: controls the display style used for the selection.
- Onion Skin: shows the selection over the background as an onion skin overlay, with transparency that can be adjusted.
- Marching Ants: presents the selection border with marching ants.
- Overlay: covers the unselected regions with a transparent color overlay; red is the default.
- On Black: previews the selection against a black background.
- On White: previews the selection against a white background.
- Black and White: shows the selection as a black and white mask.
- On Layers: frames the selected area with transparency around it.
- Show Edge: reveals the refinement region.
- Show Original: returns the preview to the selection as it was before refinement.
- High Quality Preview: draws a more precise change preview, although performance may slow.
- Transparency/Opacity: changes how visible the selection is against its background.
- Real-time Refinement: refreshes the preview while you brush with refinement tools. If it is off, the result appears after the mouse button is released.
- Shortcuts: Use F to move through the modes; use X when every mode should be temporarily disabled.

### Refine modes

- Color Aware: suited to simple backgrounds or scenes with strong contrast.
- Object Aware: suited to selections involving hair, fur, or objects placed against complex backgrounds.

## Hover layer bounds in the Move tool

Use hover layer bounds in the Move tool to see and customize layer boundaries directly on the canvas in Adobe Photoshop.

### Hover Layer Bounds in Photoshop

With hover layer bounds, Photoshop previews an object's boundary when you move the pointer over it on the canvas. This makes layers easier to identify and choose before you click them.

When the outline appears, Photoshop highlights the matching layer in the Layers panel. If a layer uses pixel or vector masks, both visible data and hidden layer data are shown. The selected Auto-Select setting for the Move tool controls how hover layer bounds respond:

- Layer shows the outline for individual layer objects.
- Group shows the outline for layer groups.

Hovering over entries in the Layers panel can also display hover layer bounds. When layers overlap, press the [ or ] keys to cycle through additional layer boundaries at the same pixel coordinates. To edit those shortcuts, open Edit > Keyboard Shortcuts > Keyboard Shortcuts and Menus dialog box.

After the boundaries appear, select or drag to work with that layer or group.

### Customizing Hover Layer Bounds

Hover layer bounds can be customized in both appearance and behavior:

- Set boundary color, boundary thickness, and the Layers panel highlight color from Photoshop > Settings > Guides, Grid & Slices.
- In the Options bar, use Set additional Move tool options for the Move tool to show or hide hover layer boundaries and panel highlights.
- In the Options bar, use Set additional Move tool options for the Move tool to decide whether selecting a layer on the canvas automatically expands layer groups.

## Copy and paste selections

Use copy and paste in Adobe Photoshop when a selection needs to be duplicated or moved to other image content.

Selections can be copied and pasted inside one image or between images by using the Move tool, Copy, Copy Merged, Cut, and Paste. Moving content by dragging with the Move tool bypasses the clipboard and uses less memory.

### Copy a selection

Select the area to copy.

Choose Edit > Copy or Edit > Copy Merged.

### Copy a selection while dragging

From the toolbar, choose the Move tool.

To copy the selection, drag it while holding Alt (Windows) or Option (macOS).

When no selection exists, Photoshop copies the full active layer. While the selection is dragged over another image window, the window border highlights if dropping there is allowed.

### Paste a selection

Choose Edit > Copy or Edit > Copy Merged.

Choose Edit > Paste to add the copied selection to the destination image as a new layer.

Tip

Pasted content keeps its pixel dimensions when moved between images with different resolutions, so the apparent size may not match. Match the image resolutions first, or resize afterward with Free Transform.

## Create multiple copies of a selection within an image

Create several copies of a selection inside the same Adobe Photoshop image.

From the toolbar, choose the Move tool.

Drag the selection while holding Alt (Windows) or Option (macOS) to make a duplicate.

Hold Alt or Option and press an arrow key to duplicate the selection with a 1 pixel offset.

Press an arrow key while holding Alt+Shift (Windows) or Option+Shift (macOS) to duplicate the selection with a 10 pixel offset.

Note

While Alt or Option remains held, every arrow-key press makes another copy, offset from the most recent duplicate on that same layer.

## Paste one selection into or outside another

Use layer masks in Adobe Photoshop when one selection needs to be pasted into or outside another.

Cut or copy the image area that will be pasted.

In the current image or a different one, select the target area for the paste into or paste outside operation. For Paste Outside, make the selected area smaller than the copied selection.

Choose Edit > Paste Special > Paste Into when the source selection should appear inside the destination selection. Choose Edit > Paste Special > Paste Outside when it should surround the chosen destination area.

Either choose the Move tool in the Tools panel, or temporarily activate it by holding Ctrl (Windows) or Command (macOS). Drag the source content until the wanted area is visible through the mask.

Select the layer mask thumbnail in the Layers panel, then edit the mask with a painting tool: black hides more of the underlying image, white reveals more, and gray creates partial transparency.

When the result is acceptable, choose Layer > Merge Down to combine the new layer and mask with the layer underneath.

## Delete or cut selected pixels

Remove selected pixels in Photoshop by deleting or cutting them.

Choose Edit > Clear or press Backspace (Windows) or Delete (macOS) to delete the selected area.

Choose Edit > Cut to remove the selected area and send it to the clipboard.

Note

On a background layer, deleting fills the selection with the background color. On a regular layer, deletion changes that area to transparency.

## Control the movement of a selection

Control selection movement in Adobe Photoshop with 45° angle constraints and precise pixel nudges.

Before you begin

Select the Move tool when you need to reposition a selection on the canvas.

Choose the Select tool, then select the area that should move.

Select the Move tool to reposition the selection on the canvas. To move the selected area, use one of these methods:

- To constrain direction to multiples of 45°, start dragging and then hold Shift while the drag continues.
- To move by 1-pixel increments, press an arrow key.
- To move by 10-pixel increments, hold Shift and press an arrow key.

## Hide or show selection edges

Hide selection edges in Adobe Photoshop when they distract from editing, or show them again when selection refinement needs to continue.

Use View > Extras to toggle selection edges. The same command also affects grids, guides, target paths, slices, and annotations, plus layer borders, count, and Smart Guides.

Use View > Show > Selection Edges to toggle only the current selection's edges. Making another selection displays the edges again.

## Inverse selection

Use the inverse option in Adobe Photoshop when the unselected area of an image should become the selection.

Select the background with the Magic Wand tool.

Choose Select > Inverse to invert the selection and select the object instead.

## Adjust a selection manually

Use Adobe Photoshop selection tools to enlarge or reduce an existing pixel selection.

Before you begin

Before changing the selection, match the Feather and Anti-aliasing values in the Options bar to the settings that created the original selection.

### Add to a selection

Create a selection.

With any selection tool active, choose one of these methods:

- Select Add to selection in the Options bar, then drag across areas that should join the selection.
- Hold down Shift while dragging to extend the selection.

During an add operation, the pointer shows a plus sign.

### Subtract from a selection

Create a selection.

With any selection tool active, choose one of these methods:

- Select Subtract from selection in the Options bar, then drag across areas to remove them.
- Hold down Alt (Windows) or Option (macOS) while dragging to subtract.

During a subtract operation, the pointer shows a minus sign.

## Select only an area intersected by other selections

In Photoshop, intersecting selections keeps only the area where the selections overlap.

Create a selection.

With any selection tool active, choose one of these methods:

- Select Intersect with selection in the Options bar, then drag over the image area that should remain.
- Hold down Alt+Shift (Windows) or Option+Shift (macOS), then drag across the part of the original selection to retain.

While Intersect with selection is in use, the pointer switches to a selection icon with an "x".

That same selection icon with an "x" also indicates Intersect with selection mode.

## Refine and soften selection edges

In Adobe Photoshop, soften hard selection boundaries so selected pixels blend more easily with nearby content.

Use the Select and Mask workspace when selection edges need more precision. It helps pull objects out more cleanly and supports better layer-mask refinement. Open it from the Options bar or Select > Select and Mask to work with the dedicated edge-refinement tools.

Photoshop also provides anti-aliasing and feathering for softening selection boundaries. These two approaches create smoother, more natural transitions between selected pixels and the pixels around them.

### Anti-aliasing

Anti-aliasing reduces jagged selection edges by easing the color change between edge pixels and the background. Because it changes only edge pixels, image detail remains intact. It is useful when selections are cut, copied, or pasted into composite images.

The Lasso, Polygonal Lasso, Magnetic Lasso, Elliptical Marquee, and Magic Wand tools support Anti-aliasing. Turn the setting on in the Options bar before you create the selection.

### Feathering

Feathering builds a transition zone between a selection edge and the surrounding area. Anti-aliasing may slightly soften boundary detail, while feathering adds a blur along that edge.

You can set Feathering while working with tools such as the Rectangular Marquee, Lasso, Polygonal Lasso, or Magnetic Lasso, and you can apply it after the selection already exists. The result becomes visible only after the selection is moved, cut, copied, or filled.

## Select pixels using anti-aliasing

Use anti-aliasing in Photoshop when a pixel selection needs smoother edges.

In the toolbar, choose the Lasso tool.

In the Options bar, enable the Anti-alias checkbox.

Create the selection in the image. Its edge will be smoother after anti-aliasing is applied.

## Define a feathered edge for a selection tool

In Adobe Photoshop, feathered edges help selections fade more smoothly and soften edge transitions.

Choose a Lasso or Marquee tool from the toolbar.

Type a value in the Feather box in the Options bar to set the feathered edge width.

### Define a feathered edge for an existing selection

Choose Select > Modify > Feather.

Set the Feather Radius value.

Select OK.

When the No pixels are more than 50% selected message is shown, either lower the feather radius or make the selection larger. To keep the current mask anyway, select OK even when the edge is not visible.

## Create a selection around a selection border

Use the Border command to create a selection with a chosen pixel width on both sides of an existing selection border. This helps isolate a narrow pixel band around an image area, for example when removing halo artifacts from a pasted object.

Create a selection with a selection tool.

Choose Select > Modify > Border.

For the border width, type any value from 1 to 200 pixels.

Select OK.

The resulting selection wraps around the original area and stays centered on that border. For example, a border width of 20 pixels extends the selection 10 pixels inward and 10 pixels outward from the original border.

## Expand or contract a selection

In Adobe Photoshop, selections can grow, shrink, or expand to include similarly colored areas.

### Expand or contract a selection by a specific number of pixels

Create a selection with a selection tool.

Choose Select > Modify > Expand or Contract.

For Expand By or Contract By, type a pixel value between 1 and 100.

Select OK.

The selection border moves outward or inward by the number of pixels you specify. Parts of the selection border that run along the canvas edge do not change when Expand is applied.

### Expand a selection to include areas with a similar color

Choose Select > Grow to add all touching pixels covered by the tolerance range from the Magic Wand options.

Choose Select > Similar to add matching pixels anywhere in the image, rather than only adjacent pixels, when the tolerance range includes them.

Note

Grow and Similar are unavailable on Bitmap mode images and 32-bits-per-channel images.

## Clean up stray pixels in a color-based selection

In Adobe Photoshop, the Smooth command can clean stray pixels from a selection and soften jagged selection edges.

Create a selection with any selection tool.

Select Select > Modify > Smooth.

For Sample Radius, type any pixel value from 1 to 100.

Select OK.

Photoshop checks pixels around each selected pixel out to the distance set by the radius. When selected pixels make up more than half of that surrounding area, the current pixel stays selected and neighboring unselected pixels are added. When fewer than half are selected, Photoshop removes the pixel. This process reduces patchy areas and smooths sharp corners or jagged lines in the selection.

## Fringe pixels around a selection

Learn how fringe pixels influence selections and how Photoshop Matting removes unwanted edge color for cleaner composites.

### What are fringe pixels?

Moving or pasting an anti-aliased selection can carry along pixels just outside the selection border. Those extra pixels form a fringe or halo around the pasted edge. The effect is easiest to see when the new background differs strongly from the original background.

Fringe pixels naturally come from anti-aliasing, which makes edges look smoother by partially filling pixels along the selection border. Even though anti-aliasing improves edge appearance, the partially transparent pixels may keep color from the old background and become visible artifacts in a new setting.

### Why fringe pixels occur

Fringe pixels usually come from these conditions:

- Anti-aliased selections: smooth edges are produced by partially filled edge pixels, which can keep some original-background color.
- Contrast changes: fringe pixels stand out more after a selection is moved onto a background with another color.
- Transparency blending: semi-transparent edge pixels can carry traces of the original background as they blend with a replacement background.

### Matting commands for removing fringe pixels

- Color Decontaminate: replaces background color in fringe pixels with colors from nearby fully selected pixels, keeping edges natural while removing contamination.
- Defringe: swaps fringe pixel colors for pixels located farther inside the selection, producing cleaner edges and smoother transitions.
- Remove Black Matte and Remove White Matte: clear black or white matte edges from anti-aliased selections so placement on different backgrounds stays clean.

Note

Edges can also be refined with the Advanced Blending sliders in the Layer Styles dialog box. Turning black or white areas transparent can remove fringe pixels while preserving smooth edges. Alt-click (Windows) or Option-click (macOS) the sliders to split them for more precise transition control.

## Decrease the fringe on a selection

Use Defringe in Adobe Photoshop to clean halo or fringe pixels along a selection edge.

Choose the layer that holds the selection.

Go to Layer > Matting > Defringe.

In Width, type the pixel amount Photoshop should replace.

Select OK to commit the defringe result.

## Remove a matte from a selection

Use Adobe Photoshop matte removal when an anti-aliased selection has black or white edge pixels.

Choose the layer that holds the selection.

Go to Layer > Matting > Remove Black Matte or Layer > Matting > Remove White Matte.
