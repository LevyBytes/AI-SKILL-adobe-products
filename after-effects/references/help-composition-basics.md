# Composition Basics

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Apr 21, 2026

Pick up the fundamentals of Composition in After Effects, build one composition or several, and dig deeper into the time panel along the way.

Think of a composition as a movie's framework, each one carrying its own timeline. A composition of the usual sort holds several layers standing in for components: still images and lights, animated text and vector graphics, plus footage items for both video and audio. To put a footage item into a composition, you make a layer that has the footage item as its source. From there you position layers across space and time within the composition and composite them with transparency features, deciding which parts of lower layers peek through the layers piled above.

In After Effects, a composition plays the same role a sequence does in Premiere.

Rendering a composition produces the frames of the finished output movie, which then gets encoded and exported into a variety of formats.

A straightforward project might hold just a single composition, whereas an intricate one could run to hundreds of compositions that tame large volumes of footage or numerous effects.

Here and there in the After Effects user interface, you'll see composition shortened to comp.

In the Project panel, each composition has its own entry. Double-click a composition's entry there to open it inside its own Timeline panel. Selecting one back in the Project panel works like this: inside the Composition panel or Timeline panel belonging to that composition, right-click (Windows) or Control-click (macOS) and choose Reveal Composition In Project from the context menu.

The Composition panel is where you preview a composition and edit what's in it by hand. It holds the composition frame plus a pasteboard region beyond the frame, which you can use to shift layers into and out of the composition frame. A layer's offstage extents—the parts sitting outside the composition frame—appear as rectangular outlines. Previews and final output render only what falls inside the composition frame.

On an intricate project, the simplest way to stay organized is often to nest compositions—dropping one or more compositions inside another. Precomposing any group of layers lets you form a composition from them. Once you've adjusted some of your composition's layers, you can precompose those layers and then pre-render the precomposition, swapping in a rendered movie for it.

To move around inside a hierarchy of nested compositions, use the Composition Navigator and Composition Mini-Flowchart.

When you need to grasp the structure of an elaborate composition or a web of compositions, turn to the Flowchart panel.

Tip

Hitting the \ (backslash) key flips activation back and forth between the current composition's Composition panel and Timeline panel.

## Create a composition

Composition settings are open to change whenever you like. Even so, settings such as frame aspect ratio and frame size are best nailed down as you create the composition, with your finished output in view. Since After Effects grounds certain calculations in these composition settings, altering them late in your workflow can ripple through to your final output.

Note

Some composition settings can be overridden at render time for the final output. You might, for example, render the same movie at different frame sizes. For more information, see Render settings and Output modules and output module settings.

Create a composition without touching the settings in the Composition Settings dialog box, and the new one adopts whatever settings were in place the last time composition settings were configured. The new compositions, however, don't carry over the earlier Preserve frame rate when nested or in render queue and Preserve resolution when nested settings found on the Advanced tab of Composition Settings.

## Create a composition and manually set composition settings

Reach for Composition > New Composition, or trigger it with Ctrl+N (Windows) or Command+N (macOS).

## Create a composition from a single footage item

Pull the footage item onto the Create a new composition button found along the bottom edge of the Project panel, or pick File > New Comp From Selection.

Frame size (width and height), pixel aspect ratio, and the rest of the composition settings get matched automatically to whatever that footage item already uses.

## Create a single composition from multiple footage items

Pick out footage items inside the Project panel.

Drag what you selected onto the Create a new composition button along the bottom of the Project panel, or pick File > New Comp from Selection.

Within the New Composition from Selection dialog box, turn on Single Composition along with the other settings:

Use Dimensions From

Names the footage item whose characteristics — frame size (width and height) and pixel aspect ratio — the new composition borrows for its settings.

Still Duration

How long each still image you bring in stays on screen.

Add to Render Queue

Drops the freshly made composition straight into the render queue.

Sequence Layers, Overlap, Duration, and Transition

Line the layers up one after another, let them overlap in time if you want, dial in how long the transitions run, and pick which transition style applies.

## Create multiple compositions from multiple footage items

Pick out footage items inside the Project panel.

Drag what you selected onto the Create a new composition button along the bottom of the Project panel, or pick File > New Comp from Selection.

Within the New Composition from Selection dialog box, turn on Multiple Compositions plus the other settings, and fill in the following under the Options section:

Still Duration

How long the compositions built from still images run.

Add To Render Queue

Drops the freshly made compositions straight into the render queue.

Note

Selecting more than one footage item brings up the New Composition from Selection dialog. From there you decide between bundling every footage item into one composition or spinning up a separate composition per item.

## Crop composition to selected layer bounds

In After Effects you can reshape a composition so it matches the visible extent of whichever 2D layers you have selected. Shrinking it down around smaller layers or stretching it out to capture everything are both on the table, depending on what your content needs.

Being able to snap pre-comps and assets to the actual size of their content — no fiddling by hand, no third-party scripts — pays off across plenty of scenarios. Building social media formats or other deliverables gets simpler, for instance, because the leftover empty space disappears.

Start a fresh composition and load in however many layers the project calls for.

Highlight one or more 2D layers, then reach for Crop Comp to Selected Layer(s) Bounds through any of these routes:

- The Composition menu
- Right-click on the selected layers in the Timeline panel.
- Right-click on the selected layers in the Composition panel

2. Picking Crop Comp to Selected Layer(s) Bounds off the layer's menu resizes the composition down to the visible area of the chosen 2D layers.
   Whether the composition shrinks or grows comes down to which layer(s) you picked.

In the walkthrough here, a shape layer does the cropping on a composition packed with several layers, videos and text among them.

Note

Only 2D layers work with this; 3D layers are left out. A 3D layer's bounds shift with the active camera and the angle it views from, so altering the composition or the camera risks throwing off animations you have keyframed.

## Duplicate a composition

Highlight the composition inside the Project panel.

Reach for Edit > Duplicate, or hit Ctrl+D (Windows) or Command+D (macOS).

## Timeline panel

A Timeline panel belongs to every composition individually. Plenty of jobs run through it — keyframing layer properties, ordering layers across time, dialing in blending modes, and the like. Whatever layers sit lowest in the Timeline panel's stacking order render ahead of the rest and — when they are 2D image layers — sit deepest in the back within both the Composition panel and the finished composite.

Note

Stepping forward through Timeline panels one at a time uses Alt+Shift+. (Period) on Windows or Option+Shift+. (Period) on macOS. Going the other direction uses Alt+Shift+, (Comma) on Windows or Option+Shift+, (Comma) on macOS.

That vertical red line running down the time graph — the current-time indicator (CTI) — marks where a composition's current time lands. The same value is spelled out in the current time display tucked into the Timeline panel's upper-left corner.

Columns of layer controls fill the Timeline panel's left half. Over on the right half — the time graph — you get a time ruler, markers, keyframes, expressions, the duration bars for layers (while in layer bar mode), plus the Graph Editor (while in Graph Editor mode).

A. Current-time display B. Current-time indicator (CTI) C. Time ruler D. Laye switches E. Time graph

Note

Hitting the \ (Backslash) key flips activation back and forth between the Composition panel and Timeline panel for whichever composition is current.

## Composition settings

Composition settings can be typed in by hand, or you can lean on composition settings presets that fill in frame size (width and height), pixel aspect ratio, and frame rate for plenty of the usual output formats automatically. Rolling your own custom composition settings presets and saving them for down the road is an option too. A few things stay out of those presets, though: Resolution, Start Timecode (or Start Frame), Duration, and the Advanced composition settings.

Note

Three hours is as long as a composition's duration can go. Footage items that run past three hours are fine to use, but anything beyond the three-hour mark won't display properly. A composition tops out at 30,000x30,000 pixels in size. Roughly 3.5 GB is what a 30,000x30,000 8-bpc image eats up; your own ceiling on composition size might come in lower, hinging on your operating system and how much RAM is free.

## Working with composition settings

Any one of these gets the Composition Settings dialog box open so you can change composition settings:

Highlight a composition in the Project panel, or make the Timeline or Composition panel active for the composition, then choose Composition > Composition Settings or press Ctrl+K (Windows) or Command+K (macOS).

Right-click (Windows) or Control-click (macOS) the composition where it sits in the Project panel or Composition panel — not over a layer — and pick Composition Settings off the context menu.

Saving a custom composition settings preset works like this: fill in the Width, Height, Pixel Aspect Ratio, and Frame Rate values inside the Composition Settings dialog box, then hit the Save button.

Getting rid of a composition settings preset works like this: pick it out of the Preset menu in the Composition Settings dialog box, then hit the Delete button.

- Bringing back the default composition settings presets is a matter of Alt-clicking (Windows) or Option-clicking (macOS) either the Delete button or the Save button inside the Composition Settings dialog box.

Note

Custom composition settings presets stay put on the machine that made them — they live inside the preferences file, so there is no carrying them across to another system.

- Scaling a whole composition runs through File > Scripts > Scale Composition.jsx.

Note

Every layer in the chosen composition has to be unlocked, otherwise the script gives out.

## Basic composition settings

Preset

Pick from the lineup of composition presets in the Composition Presets dropdown, social-platform presets included.

Start Timecode or Start Frame

The timecode or frame number pinned to the composition's opening frame. Rendering pays it no mind; all it does is mark where the count begins.

Background Color

Reach for the color swatch or the eyedropper to land on a composition background color. Learn more about selecting a color or edit a gradient.

Note

Drop one composition inside another (nesting) and the outer composition keeps its background color while the inner one's background turns transparent. Want the nested composition's background color to stick around? Build a solid-color layer and let it serve as a background layer down in the nested composition.

For details on individual Basic composition settings that aren't covered here, head to the related sections:

- Pixel aspect ratio and frame aspect ratio
- Frame rate
- Resolution

## Advanced composition settings

- Click an arrow button to pin layers against a corner or edge of the composition as its size changes.

  - So a composition holds onto its own resolution or frame rate rather than picking up whatever the outer composition uses. Say you purposely ran a low frame rate in a composition to land a jerky, hand-drawn feel — that frame rate has to be preserved once the composition gets nested. Rotoscoping work runs into the same trap, looking off once it lands at a different frame rate or resolution. Go with this setting rather than the Posterize Time effect, which costs more to run.

  - Shutter angle: Stated in degrees, the shutter angle mimics the exposure a spinning shutter lets through. It leans on the footage frame rate to work out that simulated exposure, and that in turn drives how much motion blur shows up. Punch in 90° (25% of 360°) against 24-fps footage, for example, and you land an effective exposure of 1/96 of a second (25% of 1/24 of a second). At 1° there is next to no motion blur; at 720° the blur piles on heavily.
  - Shutter phase: Measured in degrees as well, the shutter phase sets an offset governing the moment the shutter opens against the start of a frame. Tweaking it comes in handy when an object carrying motion blur looks like it trails behind where that same object sits without motion blur.
  - Samples per frame: The floor on samples. After Effects falls back to this count on any frame where it can't work out an adaptive sampling rate from the layer's motion. It is the sample rate that 3D layers and shape layers run on.
  - Adaptive sample limit: The ceiling on samples.

For details on individual Advanced composition settings that aren't covered here, head to the related sections:

- Specify resolution to use for rendering shadows
- Preferences and composition settings that affect nested compositions
- Motion blur

## 3D renderer settings

The controls on the 3D renderer tab let you settle on the right 3D renderer for your composition. The Renderer menu offers these to pick from:

- Classic 3D
- Advanced 3D
- Cinema 4D

What the Cinema 4D composition renderer does in 3D lines up almost exactly with extruding 3D text and shape layers and bending other 3D layers — solids, footage, and the rest — into curved planes. The output can still diverge, though, since each draws on a different renderer and backs a different feature set. The 3D layer material options and various layer behaviors differ, to name one area.

Extruded text and shapes plus curved 2D planes all fall to the Cinema 4D composition renderer, which is there to take the pain out of animating 3D text and logos from a blank start.

Lean on the 3D renderer tab to settle on the right 3D renderer for your composition.

Lean on the 3D renderer tab to settle on the right 3D renderer for your composition.

## Classic 3D renderer

The longtime default is Classic 3D. It sets layers up as planes within 3D space.

A high-quality, GPU-driven, performance-minded composition renderer is what Advanced 3D delivers. It sits alongside Classic 3D and Cinema 4D as one more rendering choice in After Effects. The rendering engine beneath it is shared with other Adobe products, and it draws on Adobe Standard Material properties to do physically-based rendering. Flip the 3D switch on any solids, precomps, text, and shape layers in After Effects and they now get textured and rendered through Adobe Standard Material, landing more accurate, photographic looks.

## CINEMA 4D Composition Renderer options

Quality

Wherever you park the Quality slider shapes the parameters steering how the Cinema 4D composition renderer lays down the 3D layers. The parameter values it lands on turn up in the Options, Anti-Aliasing, and Reflectance boxes. That one Quality control spares you from learning and hand-tuning the assorted rendering quality parameters, letting you strike a workable trade between rendering speed and 3D rendering quality you can live with.

Sliding the Quality control adjusts these parameters:

- Ray Threshold: A value that helps trim render time.
- Ray Depth: Governs how many transparent objects — or regions hidden through the alpha channel — the renderer is allowed to punch through.
- Reflection Depth: Fire a ray into the scene and reflective surfaces can bounce it. Push Reflection Depth higher and rays get chased deeper into the scene before the results are rendered.
- Shadow Depth: Works much like Reflection Depth. Shadow Depth sets the shadow depth at which visible shadow rays get worked out.

Anti-Aliasing

The default anti-aliasing setting is Geometry, which evens out every object edge (handled automatically at 16x16 sub-pixels).

Quality

The default Reflectance setting is Layer sampling, which sets how good matte reflections come out.

Reflectance

Choose Cinema 4D from the Renderer drop-down box and the Enabled column lists the 3D options that are switched on while the Disabled column lists the 3D options sitting unavailable.

Which renderer you choose dictates the features open to 3D layers in a composition and the way they play against 2D layers.

Which renderer you choose dictates the features open to 3D layers in a composition and the way they play against 2D layers.

Setting a quality level for your 3D rendering goes like this: with Cinema 4D chosen as the renderer, click the Options button and set the level on the Quality slider. The Ray Threshold, Ray Depth, Reflection Depth, Shadow Depth, Anti-Aliasing, and Reflectance values all shift to match.

After Effects drops a default renderer onto your machine. If you own a full retail Cinema 4D and have it installed, you can switch the renderer over to it.

Whatever the newest installed build of Cinema 4D or Cinema 4D Lite happens to be serves as the default editor.

To point at a different Cinema 4D installation, pick Choose Installation and supply the path to the installer in the Rendering and Editing boxes.

## Improved composition toolbar for 3D designing

The reworked composition panel toolbar lets you move quickly and stay focused while you build and lay out 3D scenes inside After Effects. It keeps the same look and spot as the standard composition toolbar that runs along the bottom of the Composition panel during 2D work. The moment 3D content lands in your scene, the composition panel shows its 3D menu. After Effects then stacks extra 3D controls onto the composition panel toolbar, while anything your current workflow doesn't call for retreats into the Composition menu. Learn more about 3D Design space.

## How is this composition toolbar different from the old composition toolbar?

### Placement of controls

- The controls you reach for most have been regrouped over on the toolbar's left side.
- Over on the right side of the toolbar sit the 3D controls, which surface only once the comp holds at least one 3D layer.
- Rarely touched controls — Adobe Immersive Environment, Show Timeline, and Show Composition Flowchart among them — have been taken out.

### New 3D controls

- Draft 3D
- Ground Plane

- Flip each of these on or off with the button set aside for it.

### Streamlined controls

- A leaner Select view layout menu is in place.
- Fast reviews has been tightened up too. What was Fast Draft now goes by Draft 3D and rides on the button over on the toolbar's right side. Draft mode is gone and no longer applies. You will find the Renderer Options command inside the 3D Renderer menu on the toolbar's right side.

### Controls enabled by default

- 3D Reference Axes come switched on out of the gate. Turn them off from the Grids and guides options menu on the toolbar's left side.
- Pixel Aspect Ratio correction comes switched on out of the gate.

## Composition thumbnail images

Which frame stands in as a composition's thumbnail image (poster frame) over in the Project panel is yours to set. Out of the box, that thumbnail is the composition's opening frame, with any transparent areas rendered black.

- Setting a composition's thumbnail image means parking the current-time indicator on the frame you want in the Timeline panel, then choosing Composition > Set Poster Time.
- Layering a transparency grid onto the thumbnail view means picking Thumbnail Transparency Grid off the Project panel menu.
- Hiding the thumbnail images in the Project panel means choosing Edit > Preferences > Appearance (Windows) or After Effects > Preferences > Appearance (macOS) and turning on Disable Thumbnails in Project Panel.

## More like this

- Creating layers
- Basics of rendering and exporting
- About precomposing and nesting
