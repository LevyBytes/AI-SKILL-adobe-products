# Layers, Layer Markers Composition Markers

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Managing layers; Layer markers and composition markers.

## Managing layers

Search Last updated on May 24, 2023

### View and change layer information

Click the entry in the Timeline panel, hit Enter (Windows) or Return (macOS), then type the replacement name.

Alternatively, right-click (Windows) or Control-click (macOS) the entry in the Timeline panel, pick Rename, and type the new name.

- Toggling the Timeline panel display between source-footage names and layer names is done by clicking the Layer Name/Source Name column heading in the Timeline panel.

Note

Should a layer's name match its source footage name, square brackets wrap the name while you're in layer-name view, rendered as: [layer name]

- Press Ctrl+Alt+E (Windows) or Command+Option+E (macOS) to surface the source footage file name for a chosen layer over in the Info panel.
- To trace which footage item feeds a layer, right-click (Windows) or Control-click (macOS) that layer in the Timeline panel and pick Reveal Layer Source In Project.

That highlights the source footage item over in the Project panel.

Within the Timeline panel you can narrow the layer list down to only those layers whose properties match a search string or some other criteria. Refer to Search and filter in the Timeline, Project, and Effects & Presets panels along with Showing properties and groups in the Timeline panel (keyboard shortcuts).

A script from Christopher Green (Selected_Layers_Renamer.jsx), posted on his website, lets you batch-rename whatever layers you've selected in the Timeline panel. Its capabilities cover find-and-replace within names, tacking characters onto either end of a name, stripping a set number of characters from either end, or swapping names out for a numbered sequence.

### Layer switches and columns in the Timeline panel

A layer's behavior comes largely from its layer switches, laid out across columns within the Timeline panel. Out of the box the A/V Features column sits left of the layer name while the Switches and Modes (Transfer Controls) columns sit on the right, though you're free to reorder the columns however you like. (Refer to Columns.)

Toggling column visibility in the Timeline panel happens via the Layer Switches , Transfer Controls , or In/Out/Duration/Stretch button down in the panel's lower-left corner. The Parent column is shown or hidden with Shift+F4. F4 flips between the Switches and Modes columns.

Certain layer-switch outcomes hinge on how the composition switches are set; those sit at the top right of the layer outline in the Timeline panel.

Note

To flip a switch across several layers fast, click that switch on one layer and drag up or down its column over the neighboring layers.

Switches in the A/V Features column

Video

Turns a layer's visuals on or off. (Refer to Toggle visibility or influence of a layer or property group.)

Audio

Turns a layer's sound on or off.

Solo

Keeps the current layer in previews and renders while skipping any layer that lacks this switch. (Refer to Solo a layer.)

Lock

Seals a layer's contents so nothing can change. (Refer to Lock or unlock a layer.)

Switches in the Switches column

Shy

Conceals the current layer whenever the Hide Shy Layers composition switch is on. (Refer to Show and hide layers in the Timeline panel.)

Collapse Transformations/Continuously Rasterize

For a precomposition layer, this collapses transformations; for a shape layer, text layer, or layer sourced from a vector graphics file (an Adobe Illustrator file, say), it continuously rasterizes. Turning this on for a vector layer makes After Effects re-rasterize on every frame, which lifts image quality at the cost of longer preview and render times. (Refer to Render order and collapsing transformations and Continuously rasterize a layer containing vector graphics.)

Quality

Flips layer rendering quality between the Best and Draft options, screen previews included. (Refer to Layer image quality and subpixel positioning.)

Effect

Enable this to render the layer along with its effects. It leaves each individual effect's own setting untouched. (Refer to Delete or disable effects and animation presets.)

Frame Blend

Cycles frame blending through three states: Frame Mix , Pixel Motion , or off. With the Enable Frame Blending composition switch off, a layer's frame-blending setting carries no weight. (Refer to Frame blending.)

Motion Blur

Switches a layer's motion blur on or off. With the Enable Motion Blur composition switch off, a layer's motion-blur setting carries no weight. (Refer to Motion blur.)

Adjustment Layer

Marks the layer as an adjustment layer. (Refer to Adjustment layers.)

3D Layer

Marks the layer as a 3D layer. When that 3D layer carries 3D sublayers — as happens with a text layer using per-character 3D properties — the switch shows this icon: . (Refer to 3D layers overview and resources.)

### Toggle visibility or influence of a layer or property group

Whether a layer's visual content gets rendered for previews or final output is governed by that layer's Video (eyeball) switch. On an adjustment layer, the Video switch instead decides whether the layer's effects hit the composite built from the layers beneath it. On a camera or light, the Video switch simply turns the layer on or off.

A number of layer components — paint strokes, path operations inside shape layers, and text animators inside text layers among them — carry Video switches of their own. The Video switch lets you flip each one's visibility and effect on and off separately.

- Deselecting a layer's Video switch hides that layer.
- Choosing Layer > Switches > Show All Video turns the Video switch on for every layer.
- Choosing Layer > Switches > Hide Other Video clears the Video switch on every layer apart from the ones you've selected.

### Solo a layer

Soloing lets you set apart one or more layers for animating, previewing, or final output. It holds back every other layer of the same type from rendering — across both Composition-panel previews and final output. Solo a video layer, for instance, and any lights or audio layers stay put, so they still show up when you preview or render the composition; the rest of the video layers, however, drop out.

- Solo layers by selecting them in the Timeline panel and clicking the Solo icon sitting to the left of the layer names.
- To solo a single layer while clearing the solo on all the rest, Alt-click (Windows) or Option-click (macOS) the Solo icon left of that layer's name.

While a layer is soloed, the Video switch dims on the other layers, a sign that they won't be visible.

A script from Lloyd Alvarez, hosted on his After Effects Scripts website, lets you tag layers and then select, shy, and solo them by those tags. The tags get appended to comments over in the Comments column of the Timeline panel.

### Lock or unlock a layer

Accidental edits are kept at bay by the Lock switch. A locked layer can't be selected from either the Composition or Timeline panels. Attempt to select or alter one and the layer flashes within the Timeline panel.

A locked layer shows the Lock icon over in the A/V Features column, which by default sits to the left of the layer name in the Timeline panel.

- Lock or unlock a layer by clicking its Lock switch within the Timeline panel.
- Choosing Layer > Switches > Unlock All Layers releases every layer in the active composition.

### Color labels for compositions, footage items, layers, and keyframes

Those colored boxes in the Label column — labels — serve in both the Project panel and Timeline panel to keep compositions, footage items, layers, and keyframes organized and under control.

For a rundown of After Effects color labels: Labels preferences.

For assigning colors to keyframes: Keyframe Color Labels.

### Show and hide layers in the Timeline panel

Flag a layer as shy, then reach for the Hide Shy Layers composition switch up top in the Timeline panel to tuck away every shy layer in the Timeline panel's layer outline. Shying layers comes in handy for clearing space in the Timeline panel so the layers and properties you actually want to tweak are on display.

Whether a layer is shy or not shy is signaled by the icon in the Switches column .

Even shy layers keep rendering, in previews as well as final output. Pull layers out of previews or final output by using the Video switch or turning the layer into a guide layer.

- Flip a layer between shy and not shy by clicking its Shy switch, or by selecting the layer in the Timeline panel and choosing Layer > Switches > Shy.
- Flip between hiding and showing all shy layers by clicking to select or deselect the Hide Shy Layers composition switch up top in the Timeline panel, or by choosing Hide Shy Layers from the Timeline panel menu.

The Timeline panel also lets you filter the layer list down to only layers whose properties match a search string or some other criteria. Refer to Search and filter in the Timeline, Project, and Effects & Presets panels along with Showing properties and groups in the Timeline panel (keyboard shortcuts).

A script from Lloyd Alvarez, hosted on his After Effects Scripts website, lets you tag layers and then select, shy, and solo them by those tags. The tags get appended to comments over in the Comments field of the Timeline panel.

### Layer image quality and subpixel positioning

How precisely a layer renders rides on its quality setting, which also shapes the accuracy of other layer-related math — motion tracking, for one, and using the layer as a control layer in a compound effect.

When you duplicate or split a layer, it keeps the original's Quality setting.

Three quality options are on offer: Best, Draft, and Wireframe. Pick Best and you get a further choice between bilinear and bicubic sampling, both covered in the section that follows.

Clicking the Quality switch in the Timeline panel cycles selected layers through Best (bilinear sampling), Draft, and Best (bicubic sampling). For the full set of these plus Wireframe, choose Layer > Quality:

Best

Renders and displays a layer with subpixel positioning, anti-aliasing, 3D shading, and full computation of every applied effect. Of all options Best eats the most render time, in previews and final output alike.

Draft

Shows a layer well enough to make it out, but only at rough fidelity. Draft drops anti-aliasing and subpixel positioning from display and render, and leaves some effects imprecisely computed.

Wireframe

Renders a layer as a plain box stripped of its contents. Such wireframes display and render quicker than layers handled at Best or Draft settings.

### Bilinear and bicubic sampling

On layers set to Best quality, bicubic and bilinear sampling are both available to you. This per-layer choice governs how pixels get sampled during transformations such as scaling.

On selected layers, the sampling method has these default shortcuts: for Best/Bilinear, Alt+B (Windows) and Option+B (macOS); for Best/Bicubic, Alt+Shift+B (Windows) and Option+Shift+B (macOS).

Bicubic sampling leans on the processor a bit harder than bilinear does, and it isn't the top-quality pick in every situation. Under certain conditions its artifacts show up pretty readily — ringing and overshoots at an abrupt jump from one color to the next, for example. Where color transitions are gentler, which describes nearly every real-world photographic image, bicubic sampling usually wins out, though that doesn't hold for sharp-edged graphics. Bicubic sampling pays off more when you scale up than when you scale down.

Note

The ray-traced 3D renderer's textures skip bicubic sampling entirely and always rely on bilinear. Transformations inside effects likewise stick with bilinear sampling, except where an effect deliberately brings in another method (as a dedicated scaling plug-in effect or distortion effect would).

### Subpixel positioning

Property values in After Effects — Position and Anchor Point among them — aren't held to whole numbers; fractional values work too. That's what makes animation smooth, since a value is interpolated across keyframes. Take a Position value running from [0,0,0] at a keyframe at time 0 to [0,0,80] at the 1-second mark in a 25-frames-per-second composition: at frame 1 the value lands at [0,0,3.2].

Every spatial value After Effects computes — Position and effect control points included — is figured to a precision of 1/65,536 of a pixel. That's known as subpixel precision.

When a layer's pixels don't land squarely on the composition's pixel boundaries, a slight blur creeps in — a lot like anti-aliasing. For a moving object that blur is no trouble, since motion brings its own motion blur, but on a static image it can soften fine detail. Likewise, an image creeping along slowly or at just the wrong pace can look as though it's wavering between crisp and blurry.

Since a layer's default anchor point sits at an object's center, odd-sized objects end up with non-integer anchor points and look soft once placed at integer values. Hold to these guidelines to cut down on blurriness and that in-and-out-of-focus look:

Build graphics with odd or even dimensions to match the composition's dimensions. If the composition runs 640x480 pixels, for instance, make graphics with even dimensions (100x100 pixels, say); if it runs 99x99 pixels, make graphics with odd dimensions (such as 75x53 pixels).

Pin the position data for graphics — hold-position and final-position keyframes included — to integers rather than fractional numbers.

### Continuously rasterize a layer containing vector graphics

Import vector graphics and After Effects rasterizes them on its own. But scaling a layer of vector graphics past 100% calls for continuous rasterization of that layer to hold image quality. Layers sourced from Illustrator, SWF, EPS, and PDF files can be continuously rasterized. Continuous rasterization has After Effects rasterize the file on demand, driven by each frame's transformation. Such a layer tends to yield finer results, but it can render more slowly.

Shape layers and text layers undergo continuous rasterization at all times.

Apply an effect to a continuously rasterized layer and the outcome can diverge from what you'd get on a layer without continuous rasterization. That gap traces back to a shift in the layer's default rendering order. Without continuous rasterization, a layer's default order is masks, then effects, then transformations; with it, the default order becomes masks, then transformations, then effects.

Continuous rasterization or not, viewing and rendering a composition at Best Quality has After Effects anti-alias (smooth) the vector graphics.

A continuously rasterized layer can't be opened or worked with in a Layer panel. One upshot of that restriction is that painting straight onto such a layer isn't possible. You can, however, copy paint strokes from other layers and paste them in.

Image from imported Illustrator file

A. Original B. Enlarged with Continuously Rasterize switch turned off C. Enlarged with Continuously Rasterize switch turned on

Image from imported Illustrator file

1. Within the Timeline panel, click the layer's Continuously Rasterize switch , which doubles as the Collapse Transformations switch on precomposition layers.

### More like this

- Select layers
- Working with footage items
- Timeline panel
- Layers (keyboard shortcuts)
- Select a color or edit a gradient
- Preview modes and Viewer Quality preferences
- About vector graphics and raster images
- Render order and collapsing transformations

## Layer markers and composition markers

Search Last updated on Mar 27, 2026

### In After Effects, add and edit markers that hold comments and timing notes — and put them to work.

Lean on composition markers and layer markers to stash comments and other metadata and to flag key moments across a composition or a layer. Composition markers ride the composition's time ruler, while layer markers sit on a given layer's duration bar. Either kind can carry the same information.

A marker may point at a lone instant in time or span a duration.

In After Effects, composition markers line up with sequence markers in Adobe Premiere, and layer markers line up with clip markers in Adobe Premiere.

Render a composition holding markers and those markers can turn into web links, chapter links (chapter points), or cue points — which one depends on the output format and the values you enter in the marker dialog box. Markers can also go out as XMP metadata.

A composition marker defaults its comment to a number, whereas a layer marker defaults to no comment at all.

Any marker holding link or cue-point data carries a small dot inside its icon.

A. composition marker with duration of 1 second B. composition marker with cue-point data C. layer marker with duration of 2 seconds D. layer marker with cue-point data

Note

Markers smooth the job of lining layers or the current-time indicator up with particular moments: hold Shift as you drag the current-time indicator, a keyframe, or a layer's duration bar inside the Timeline panel, and those items snap to markers.

During a preview or audio-only preview you can drop markers, which lets you set them at telling spots in a layer's audio track.

Dragging a marker in point shifts the marker's time; dragging its out point shifts the marker's duration. Time and duration can't both change at once.

- View or edit a marker's data by double-clicking it, or right-clicking (Windows) / Control-clicking (macOS) it and choosing Settings.
- Relocate a marker by dragging it, or by double-clicking it and entering a time in the dialog box.
- Set a composition or layer marker's duration by dragging the marker's out point in the Timeline panel. Marker icons split down the middle to mark the in point and the out point.
- To drag-set a marker's duration, hold Option (macOS) or Alt (Windows), grab the marker icon, and drag rightward.
- To alter a marker's duration, just select and drag the marker out point icon — no need to hold Option or Alt.
- Want layer markers built for you off a layer's source-file temporal metadata? Turn on, over in the Disk preferences category, the Create Layer Markers From Footage XMP Metadata preference — already enabled out of the box.
- Want a precomposition layer's markers matched to the source composition's own composition markers? Right-click (Windows) or Control-click (macOS) one of its layer markers, then pick Update Markers From Source. Doing so also clears whatever markers you'd added to that layer by hand.

Note

If the layer draws on a file (not a composition) for its source, this command resets the layer markers back to those mirroring the source file's temporal XMP metadata.

Drop one composition inside another and the original nests as a layer within the host composition. Every composition marker from the nested composition turns into a layer marker on the host composition's timeline. Those markers hold no link back to the original composition markers. Edits you make to the composition markers in the original don't ripple into the nested composition's layer markers. Delete one of the original composition markers, for example, and the matching layer marker in the nested composition stays right where it is.

Scripts and expressions are able to read and act on data tucked inside markers. And because XMP metadata for source footage items can become layer markers, expressions and scripts get to work with that XMP metadata.

### Create composition markers

In the Timeline panel's time ruler, composition markers show up as small triangles. A composition can hold as many of them as you want.

Pull a numbered composition marker and the rest keep the numbers they already had. Swap a marker's comment away from its default number, and that freed-up number may get picked up later by a composition marker created down the line.

No more than one composition marker can start at any given time. Add or move a composition marker so it begins at the same instant as an existing one, and the new or relocated marker takes the other's place.

Note

For alternative keyboard shortcuts, see Markers (keyboard shortcuts).

- For a blank composition marker placed at the current time, first deselect every layer, then either choose Layer > Add Marker or hit \* (multiply) on the numeric keypad.

Note

Hitting \* mid-preview or mid-audio-only-preview drops a marker at the current time and leaves the preview running.

- For a composition marker at the current time that also springs the marker dialog box open, first verify nothing is selected, then press Alt+_ (Windows) or Option+_ (macOS) on the numeric keypad.
- To drop a composition marker from the bin, drag it off the Comp Marker Bin button.

Dragging a composition marker from the bin.

Dragging a composition marker from the bin.

- To drop a numbered composition marker at the current time, press Shift plus a number key (0–9) on the main keyboard.

Note

Press a number already claimed by another composition marker and After Effects won't make a new one. Rather, it relocates the existing marker bearing that number to the fresh spot.

- To pull a composition marker, drag it onto the Comp Marker Bin button or Ctrl-click (Windows) / Command-click (macOS) the marker.
- Locking down all of a composition's markers: right-click (Windows) or Control-click (macOS) any one of them and pick Lock Markers.

### Apply layer markers

On a layer's duration bar, layer markers show up as small triangles. A layer can hold as many of them as you want.

Render and export a movie to a QuickTime container and your layer markers survive the trip.

Note

For alternative keyboard shortcuts, see Markers (keyboard shortcuts).

- Pin a layer marker onto your selected layers at the playhead by choosing Layer > Add Marker, or just tap \* (multiply) on the numeric keypad.

Note

Tap \* during a preview or an audio-only preview and the marker lands at the current time while playback keeps going.

- For a marker at the current time that also opens the marker dialog box, the keys are Alt+_ (Windows) or Option+_ (macOS) on the numeric keypad.
- Removing one layer marker takes a Ctrl-click (Windows) or Command-click (macOS) on it.
- Wiping every marker off your selected layers: right-click (Windows) or Control-click (macOS) one, then pick Delete All Markers.
- Want a whole layer's markers locked? On that layer, right-click (Windows) or Control-click (macOS) a marker and pick Lock Markers.
- Refreshing all of a layer's markers with temporal metadata pulled from its source file: right-click (Windows) or Control-click (macOS) a layer marker, then pick Update Markers From Source.

### Assign color labels to markers

Color labels can go on both Composition and Layer markers. Markers start out with no color. Recolor a marker's label by working through these steps:

Select the marker and open its Marker settings dialog.

Adjust the New Label property. To set up color labels, choose Preferences > Labels.

### More like this

- Scripts
- Preview video and audio
- MarkerKey attributes (expression reference)
- About XMP metadata
- XMP metadata in After Effects
- Sharing markers with After Effects and Encore
- Chapter points
