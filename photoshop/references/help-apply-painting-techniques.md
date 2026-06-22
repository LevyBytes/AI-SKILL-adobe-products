# Fill Objects Selections Layers, Create Fill With Patterns, Brushes Presets

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Apply painting techniques; Painting tools overview; Fill adjacent areas with similar colors; Stroke a selection or layer with color; Use Content-Aware, Pattern, or History fills; Fill the work canvas; Fill a selection or layer with color; Create a new layer when brushing; Pattern Preview best practices; Create a new pattern; Get started with brush presets; Display the Brush Settings panel and brush options; Create a brush tip from an image; Create a brush and set painting options; Select a preset brush; Create a new preset brush; Create preset brush groups; Rename preset brushes.

## Apply painting techniques

### Fill objects, selections, and layers

Painting tools overview

Fill adjacent areas with similar colors

Stroke a selection or layer with color

Use Content-Aware, Pattern, or History fills

Fill the work canvas

Fill a selection or layer with color

Create a new layer when brushing

### Create and fill with patterns

Pattern Preview best practices

Create a new pattern

### Brushes and presets

Get started with brush presets

Display the Brush Settings panel and brush options

Create a brush tip from an image

Create a brush and set painting options

Select a preset brush

Create a new preset brush

Create preset brush groups

Rename preset brushes

Delete preset brushes

Import brushes and brush packs

## Painting tools overview

Review the navigation and measuring tools available from the toolbar in Adobe Photoshop.

## Fill adjacent areas with similar colors

Use the Paint Bucket tool in Adobe Photoshop to fill image areas with solid colors or patterns.

The Paint Bucket tool quickly fills regions that have colors similar to the chosen foreground color or pattern. It detects color boundaries according to the Tolerance settings. Use it for backgrounds, shape coloring, or filling selections in an image.

Select the Paint Bucket tool. If it is hidden, select and hold the Gradient tool to reveal the Paint Bucket tool.

Choose a foreground or background color.

In the Options bar, choose Foreground color or Pattern. For Pattern, choose an item from the dropdown menu.

Under Blending, set Mode for the fill.

Set Opacity for the fill. Lower opacity values make the fill more transparent.

Enter a Tolerance value from 0-255. Lower values such as 10-20 fill closer color matches, while higher values such as 100 or more cover a wider color range.

Tune the fill behavior for the image:

- Anti-alias: produces smoother edges on filled regions.
- Contiguous: limits the fill to connected areas instead of other parts of the image.
- All Layers: uses color data from all visible layers rather than only the active layer.

With the Paint Bucket tool, use Anti-alias for smoother edges, Contiguous to keep filling within the selected area, or All Layers to blend from visible-layer data.

The Paint Bucket tool can smooth edges with Anti-alias, restrict fills through Contiguous, or incorporate visible layers with All Layers.

Select the image area to fill. Paint Bucket fills all pixels inside the specified tolerance range.

Tip

Lock the layer's transparency in the Layers panel when transparent areas should not be filled.

## Stroke a selection or layer with color

Use Adobe Photoshop strokes to place color around a selection or layer so edges stand out and the artwork reads more clearly.

A stroke adds a colored outline to the selected content or active layer. Use strokes to call attention to an element, draw an edge treatment, or outline many selection kinds, including rectangular selections, elliptical selections, freeform areas, and text that has been converted into a selection.

Choose a foreground color.

Make the area to stroke with any selection tool. For a layer stroke, activate the layer in the Layers panel.

Choose Edit > Stroke.

Tip

When Edit > Stroke is unavailable, the active layer may be a shape, text, or smart object. Right-click the layer and choose Rasterize Layer from the shortcut menu.

In the Stroke dialog box, enter the border Width value in pixels.

For Location, choose Inside, Center, or Outside to place the stroke relative to the selection or layer edge.

In Blending, set Mode and Opacity for the stroke. Smaller opacity percentages make the stroke more transparent.

Enable Preserve Transparency when the stroke should affect only existing pixel areas on the layer.

Choose OK to apply the stroke. Photoshop adds the colored border around the selection or layer.

Note

If the layer's pixels already cover the full image, an Outside stroke on that layer will not be visible.

## Use Content-Aware, Pattern, or History fills

Use Adobe Photoshop fill commands to swap a selected area with Content-Aware pixels, a saved pattern, or a History source.

Photoshop includes fill choices for removing unwanted content, introducing decorative pattern material, or returning part of an image to an earlier state.

Select the part of the image that needs a fill.

Begin by making an accurate selection around the item you intend to remove or replace.

Make a close selection around the object targeted for removal or replacement before filling.

Choose Edit > Fill. Photoshop opens the Fill dialog box.

Open the Contents dropdown menu in the Fill dialog box.

- Content-Aware: builds the replacement from nearby pixel information.
- Pattern: applies the chosen pattern across the selected area.
- History: uses an earlier History state as the fill source.

Tip

For Pattern, choose Custom Pattern to pick from stored patterns. For History, verify that the correct History Brush source is selected.

To fill with repeated artwork, choose Pattern, then pick the desired pattern from the Custom Pattern dropdown menu.

To synthesize the fill from neighboring image data, choose Content-Aware. For stronger results, extend the selection slightly into the area that should be sampled.

To restore from an earlier edit point, choose History so the selection uses the source state or snapshot set in the History panel.

In Blending, choose Mode and Opacity for the fill. For complete coverage, use Normal mode at 100% opacity.

Choose OK. Photoshop fills the selection with the selected content type, pattern, or history state.

Use Content-Aware fill when the goal is to remove the selection and blend the result into adjacent pixels.

Content-Aware fill can remove the selected content while smoothing the replacement into the surrounding image.

## Fill the work canvas

Set the Adobe Photoshop work canvas to a color or custom background that makes the document easier to edit.

The work canvas is the area around the image. Filling it with a contrasting color can improve image visibility, reduce eye strain, and make longer editing sessions more comfortable.

Before you begin

Confirm that the workspace is visible and that Photoshop is not in full-screen mode.

Right-click on the work canvas surrounding the image.

The context menu offers these color choices:

- Default
- Black
- Dark Gray
- Medium Gray
- Light Gray
- Custom

Choosing Custom applies the most recently selected custom color.

Use a preset or custom work-canvas color from the context menu to raise editing contrast.

Pick a preset or custom canvas color from that menu when the image needs clearer contrast during editing.

To update the custom color, choose Select Custom color, then pick a color in the Color Picker.

Choose OK to apply the selected color.

## Fill a selection or layer with color

Apply a solid color fill in Adobe Photoshop to a selection or layer when a design needs fast color blocking or cleanup.

Photoshop can fill backgrounds, shapes, selected regions, or whole layers with a solid color. This workflow is useful for base tones, background changes, composition blocking, masks, and effect building.

Choose a foreground or background color.

Select the region to fill with any selection tool. To fill a whole layer, activate that layer in the Layers panel.

Choose Edit > Fill. The Fill dialog box appears.

Under Contents, choose a fill source:

- Foreground Color
- Background Color
- Black, 50% Gray, or White
- Color
- Pattern

CMYK tip

For CMYK images, use Foreground Color with the foreground color set to a suitable black so printer ink limits are not exceeded.

Under Blending, choose Mode and Opacity for the applied paint.

Enable Preserve Transparency to affect only the layer areas that are not transparent.

Choose OK to apply the fill.

Pick the fill color, blending mode, and opacity so color is added cleanly while transparent pixels remain protected.

Set the fill color, blend behavior, and opacity to apply color without disturbing transparency.

### Keyboard shortcuts

- Foreground fill for non-transparent pixels: press Alt + Backspace (Windows) or Option + Delete (macOS).
- Background color fill: press Ctrl + Backspace (Windows) or Command + Delete (macOS).

## Create a new layer when brushing

Configure Adobe Photoshop so the Brush tool or Pencil tool starts painting on a new pixel layer automatically.

Choose Edit > Preferences > General (Windows) or Photoshop > Preferences > General (macOS).

Find Create a new layer when brushing and turn on its checkbox.

Choose OK to store the preference.

Select the Brush tool and start painting.

Note

With this preference enabled, Photoshop creates a new pixel layer when painting begins on a layer that cannot accept paint, such as a Smart Object or adjustment layer.

## Pattern Preview best practices

Review practical techniques for making Pattern Preview work more smoothly.

### Performance tips

Pattern Preview relies on the graphics card (GPU) for display, although these situations can reduce responsiveness:

- Using complex brushes while building a pattern.
- Working in large documents.
- Editing patterns while zoomed far out.

Tip

Pattern Preview behaves most predictably when raster layers become Smart Objects before pattern elements are transformed, rotated, or scaled.

### Limitations

Account for these Pattern Preview constraints:

- It is disabled in Artboard documents.
- It works best when GPU is enabled, although it can still run without GPU support.
- It is disabled when tools and commands that alter document dimensions are used, such as Crop tool and Canvas Size.
- It may behave poorly with features such as Symmetry, Liquify, or Vanishing Point.

## Create a new pattern

Build repeating artwork in Adobe Photoshop with Pattern Preview.

Open a document in Photoshop.

Turn on Pattern Preview with View > Pattern Preview.

Tip

Pattern Preview performs best with smart objects. Once active, it automatically repeats the canvas contents outside the canvas area.

Add text, images, colors, or shapes.

Choose Edit > Define Pattern.

Type the pattern name in the Pattern Name dialog box.

Choose OK. The new pattern appears in the Patterns panel and is ready to use.

## Get started with brush presets

### Adobe Photoshop brush presets store favorite brush characteristics so creative work can reuse consistent brush behavior quickly.

Brush presets are saved brush tips with settings such as size, shape, and hardness already defined. They help keep often-used brush setups close at hand, preserve consistency across projects, and reduce repeated configuration work.

Selecting a preset brush in Photoshop means choosing a brush whose stored settings control how it paints on the canvas. Presets save setup time because common brush behavior does not need to be rebuilt for routine tasks.

### Types of presets you can save

Photoshop provides two main categories of saved brush setup:

- Brush presets: store only brush tip characteristics, including size, shape, hardness, and related tip attributes. Tool presets can be converted to brush presets through Options bar > Tool Preset Picker > settings icon > Convert All to Brush Presets, which adds them to the brush library.
- Tool presets: preserve the brush tip characteristics plus extra Brush tool settings from the Options bar, including opacity, flow, and blending modes. To save a tool preset for the Brush tool, choose Options bar > settings icon > Tool Preset Picker > New Tool Preset.

### Temporary and permanent brush settings

Changing a preset brush, for example by adjusting size or hardness, lasts only for the current use. When that preset is selected again later, Photoshop restores its original values. Save the modified setup as a new preset if the change should persist, keeping the original brush unchanged while adding a custom option for your library.

## Display the Brush Settings panel and brush options

Open the Brush Settings panel in Adobe Photoshop when painting or retouching requires brush controls and option groups.

In Photoshop, the Brush Settings panel is where brush behavior and paint application are adjusted. Shape, texture, and dynamics controls can be tuned for the workflow. These settings also affect tools such as the Eraser tool, the Clone Stamp tool, and several adjustment tools, supporting more controlled or expressive edits.

Choose Window > Brush Settings.

In the Brush Settings panel, use the checkbox next to a set, such as Scattering, to enable or disable that set.

Select a setting group name to display and edit options such as size, hardness, and spacing.

Use the Brush Settings panel to tune brush options for painting tools.

Adjust options in the Brush Settings panel when painting tools need customized behavior. Note

You can also choose a tool such as the Eraser or Clone Stamp, then use Toggle the Brush Settings panel in the Options bar.

## Create a brush tip from an image

Turn an image selection into a custom Adobe Photoshop brush tip for texture, retouching, or artwork effects.

Image-based custom brush tips can provide distinctive textures and painting marks. Any image area with useful detail can become a brush for digital art, photo retouching, or pattern design.

Open an image in Photoshop.

With a selection tool, mark the artwork that should become the brush. The selected area can be as large as 2500 x 2500 pixels.

In the Options bar, adjust Feather to control brush-edge quality:

- For a crisp brush edge, set Feather to 0 pixels.
- For softer brush edges, raise the Feather value.

Choose Edit > Define Brush Preset.

Type a name for the new brush in the dialog box.

Choose OK to save the brush tip. The new brush is added to the Brushes panel.

Note

When a brush tip is defined, Photoshop converts color images to grayscale.

## Create a brush and set painting options

Create a custom brush in Adobe Photoshop and configure the painting options it uses.

Photoshop custom brushes can be built to match a specific creative style. They support digital painting, concept art, and retouching by giving strokes and textures more repeatable behavior.

Open the panel with Window > Brush Settings.

In the Brush Settings panel, choose a brush tip shape or Brush Presets to start from an existing preset.

Under Brush Tip Shape, set options such as size, angle, roundness, and spacing.

Choose the unlock icon to keep brush tip shape settings when switching presets, or choose the lock icon to stop changes.

From the Brush panel menu, choose New Brush Preset.

Name the brush and decide whether tool settings or color should be included. Photoshop adds the brush to the Brush Preset Picker.

Tip

To share custom brushes, right-click the brush or group in the Brushes panel, choose Export Selected Brushes, and save the set as an .abr file.

Tune brush settings to build strokes and textures that fit a particular painting style.

Adjust the brush configuration to create custom stroke and texture behavior for your artwork.

## Select a preset brush

### Choose an Adobe Photoshop preset brush and adjust its settings for the painting or editing task.

Choose Window > Brushes.

Select a brush in the Brushes panel. Hover over a brush to view a live stroke preview.

Test different brush tips to produce varied strokes.

Experiment with alternate brush tips to get different stroke results.

Open the Brush Settings panel to:

- Review all available brush presets.
- Change characteristics such as size, texture, and shape dynamics.
- Preview the brush's real-time paint behavior.

Refine brush settings to manage texture and dynamics.

Change brush settings when texture and dynamics need tighter control. Tip

To preserve adjustments, save them as a new brush preset rather than modifying the original.

## Create a new preset brush

### Save customized Adobe Photoshop brushes as presets and export them into a reusable library.

Photoshop saves the current brush settings, including size, shape, hardness, and other attributes, so artwork can stay consistent.

Choose Window > Brushes.

Select an existing brush in the Brushes panel, then customize it in the Brush Settings panel.

Provide a name for the new brush preset and add tool settings such as opacity or color.

When needed, include tool settings such as opacity or color as you name the preset.

Select the Create new brush icon at the lower-right corner.

Type a name for the preset brush.

Choose OK to save it.

Open the Brushes panel menu and choose Export Selected Brushes to permanently save the brushes in a custom library.

Save brushes in a library when they need to be archived or shared.

Archive or share brushes by saving them into a custom library. Tip

Preset brushes live in the Preferences file. If that file is deleted, reset, or damaged, the brushes are lost. A custom library makes them permanent.

## Create preset brush groups

Organize Adobe Photoshop brushes into groups so the Brushes panel stays orderly and useful brushes are easier to locate.

Open the Brushes panel with Window > Brushes.

In the lower-right corner of the dialog box, select the Create a new group icon.

Enter a group name and choose OK.

Drag brushes or presets into the group.

Repeat the process to create additional groups as needed. The brushes are organized, so they can be found and used from the Brushes panel more easily.

Move between brush groups to see different preset collections quickly.

Switch across brush groups for fast access to different preset collections.

## Rename preset brushes

Give Adobe Photoshop preset brushes clear names so the collection stays organized and tools are quicker to find.

Open the Brushes panel with Window > Brushes, then choose the brush to rename.

From the panel menu, choose Rename Brush.

Enter the replacement name in the dialog box.

Choose OK to save.

## Delete preset brushes

Remove unused Adobe Photoshop preset brushes so the Brushes panel remains cleaner, better organized, and easier to navigate.

Open the Brushes panel with Window > Brushes.

Choose the preset brush that should be removed.

In the lower-right corner, select the Delete brush icon.

Choose OK to confirm deletion.

Tip

To restore the default brush set, choose Reset Brushes from the Brushes panel menu.

## Import brushes and brush packs

Use ABR brush files in Adobe Photoshop by downloading them and importing them when you want a larger brush toolkit.

Photoshop can read ABR brush files. One ABR file may contain several brushes or whole brush packs, and after import they become available from your Brushes panel for use in creative work.

Open Window > Brushes panel.

From the Brushes panel menu, choose Get More Brushes to browse free brush packs from Adobe and download the ones you want.

With Photoshop open, double-click the downloaded ABR file. Photoshop adds the imported brushes to your Brushes panel so you can start using them.

Choose Import Brushes from the Brushes panel menu when you need to load an ABR file.

Tip

When you want to distribute your own brushes, right-click the brush or group in the Brushes panel, choose Export Selected Brushes, and save the set as an ABR file.
