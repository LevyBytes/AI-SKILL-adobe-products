# Paint Tools Brush Clone Stamp

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

### In Adobe After Effects, the Brush and Clone Stamp tools let you paint, retouch, and repair footage with edits made straight onto individual frames.

Paint tools include the Brush tool , the Clone Stamp tool , and the Eraser tool . Each one works in the Layer panel, where you lay paint strokes onto a layer. None of them disturbs the layer source—instead, every paint tool puts down brush marks that shift the color or transparency across a region of the layer.

In the Timeline panel you can view and adjust each paint stroke's own duration bar, Stroke Options properties, and Transform properties. Unless you change it, a paint stroke takes its name from the tool that produced it plus a number marking its place in the drawing sequence.

Once a paint stroke exists, you're free at any point to adjust and animate each of its properties using the very methods you'd apply to a layer's properties and duration. Paint stroke path properties can be copied both ways between themselves and the properties of mask paths, shape layer paths, and motion paths. Expressions push this further, letting you link those properties for extra power and flexibility.

Note

Settings you want locked in before laying down a paint stroke go in the Paint and Brushes panels. Once the stroke is down, adjust and animate its properties through the stroke's entries in the Timeline panel.

Along every paint stroke, individual brush marks get spaced out—though under the default settings they often look like one unbroken stroke. The shape, spacing, and other traits of those brush marks come from the Brush settings in the Brushes panel; per stroke, you can also tweak these Stroke Options properties in the Timeline panel.

Within After Effects, paint strokes count as vector objects, so scaling them up costs no quality. Certain other applications—Photoshop, for one—treat paint strokes as raster objects.

In the Timeline panel, collections of paint strokes turn up as instances of the Paint effect. A Paint On Transparent option rides along with each Paint effect instance. Turn it on and the layer source image, together with every effect ahead of this Paint effect instance in the effect stacking order, gets skipped; the strokes land on a transparent layer instead.

Note

When the job calls for refined painting, drawing, cloning, or retouching, you might lean on the advanced paint tools that Adobe Photoshop offers. See Working with Photoshop and After Effects.

Note

A number of features overlap between the Roto Brush tool and the paint tools, and Roto Brush strokes can be handled in many of the same ways paint strokes are. For more on both, consult Roto Brush strokes, spans, and base frames.

## Common operations for paint tools and strokes

- Press PP to reveal the paint strokes on selected layers in the Timeline panel.
- Grab the Selection tool to pick paint strokes in the Layer panel—click a single stroke, or drag a box across parts of several strokes at once.

Note

Hold down V to switch on the Selection tool for as long as you keep it pressed.

- Want only the selected paint strokes showing in the Timeline panel? Select them and press SS.
- Renaming a paint stroke means selecting it in the Timeline panel and pressing Enter on the main keyboard (Windows) or Return (macOS); alternatively, right-click (Windows) or Control-click (macOS) the name and pick Rename.
- Within a Paint effect instance, reorder paint strokes by dragging a Paint stroke somewhere new in the Timeline panel stacking order.
- To weave a Paint effect instance in among other effects, drag the effect to a different spot in the Timeline panel stacking order.
- When you want fresh paint strokes added to one specific Paint effect instance, make your pick from the View menu along the bottom of the Layer panel.
- Keeping a paint stroke out of view—and out of rendered output—is a matter of clearing its Video switch.
- With a paint tool active, the Toggle The Paint Panels button opens and closes the Paint panel and Brushes panel.

## Common paint tool settings in the Paint panel

Before the Paint panel does you any good, grab a paint tool from the Tools panel.

Opacity

With Brush and Clone strokes, this caps how much paint goes down. With Eraser strokes, it caps how much paint and layer color come off.

Flow

For Brush and Clone strokes, this governs the rate at which paint goes on. For Eraser strokes, it governs the rate at which paint and layer color come off.

Mode

The way the pixels already in the image mix with the ones the Brush or Clone stroke lays over them.

Channels

Pick Alpha and you decide which of the layer's channels the Brush or Clone stroke touches. Since the stroke then changes opacity alone, the swatches show up in grayscale. Laying pure black onto the alpha channel does the same thing the Eraser tool would.

Duration

How long the paint stroke lasts. Constant runs the stroke from the present frame through to the end of the layer's duration. Single Frame puts the stroke on the current frame and nothing else. Custom puts the stroke across however many frames you specify, starting from the current one. Write On runs the stroke from the present frame to the end of the layer's duration and animates the stroke's End property so the timing tracks the motion you used to draw it.

Note

With a paint tool active, hit 1 or 2 (on the main keyboard) to step the current-time indicator back or ahead by however many frames the Paint panel's Duration setting calls for.

## Brushes and the Brushes panel tools

Before the Brushes panel does you any good, grab a paint tool from the Tools panel.

## Choose a brush gallery display mode

From the Brushes panel menu, settle on a display mode: Text Only, Small Thumbnail, Large Thumbnail, Small List, or Large List.

## Create and manage preset brushes

- Building a new preset brush starts with dialing in the settings you want in the Brushes panel, then either choosing New Brush from the Brushes panel menu or clicking the Save Current Settings As New Brush button .
- Renaming one means picking the brush, then choosing Rename Brush off the panel menu.
- Removing a preset brush means choosing Delete Brush from the panel menu or clicking the Delete Brush button .
- Choose Reset Brush Tips from the Brushes panel menu to bring back the default set of preset brushes. So your own custom brushes stick around, click Append when you're asked whether to swap the current brushes for the defaults.

Note

Because preset brushes get stored in the preferences file, they carry over from one project to the next.

## Brush properties

Note

Hold Ctrl and drag (Windows) or Command and drag (macOS) the brush within the Layer panel to set Diameter; let go of the key and keep dragging to set Hardness.

Diameter

Sets how big the brush is.

Strokes with low Diameter values (left) and high Diameter values (right)

Strokes with low Diameter values (left) and high Diameter values (right)

Angle

How far the long axis of an elliptical brush is turned away from horizontal.

note: A brush angle works in positive or negative terms equally well. A brush set to 45º, for instance, matches a brush set to -135º.

Roundness

How the short axis of a brush compares with its long axis. At 100% the brush is circular, at 0% it's linear, and anything in between gives you an elliptical brush.

Brush strokes using 100% roundness (left) and varying percentages (right)

Brush strokes using 100% roundness (left) and varying percentages (right)

Hardness

How a brush stroke fades from fully opaque (100%) at its center out to fully transparent (100%) at its edges. Crank Hardness up and still only the center stays completely opaque.

Hardness settings at 100% (left) and 0% hardness (right)

Hardness settings at 100% (left) and 0% hardness (right)

Spacing

How far apart the brush marks sit within a stroke, given as a percentage of the brush diameter. Leave this option off and the spacing instead comes from how fast you drag while making the stroke.

Decrease spacing for continuous strokes (left); increase spacing for dashed strokes (right).

Decrease spacing for continuous strokes (left); increase spacing for dashed strokes (right).

Brush Dynamics

These settings decide how a pressure-sensitive digitizing tablet—a Wacom pen tablet, say—steers and shapes the brush marks. Per brush, you assign Pen Pressure, Pen Tilt, or Stylus Wheel to Size, Angle, Roundness, Opacity, and Flow, choosing which pen-tablet features should drive the brush marks. To vary brush-mark thickness, for example, tie Size to Pen Pressure and bear down harder over the parts of the stroke you want heavier. As long as Size isn't set to Off, the thinnest brush mark's size is dictated by Minimum Size.

## Paint with the Brush tool

Reach for the Brush tool when you want to paint a layer in the Layer panel using whatever foreground color is current.

Note

Settings you want fixed before laying down a paint stroke go in the Paint and Brushes panels. After the stroke is down, adjust and animate its properties from the stroke's entries in the Timeline panel.

## Select a color for the Brush tool

With the Brush tool active, take any of these routes:

- For a foreground color via the Color Picker, click the Set Foreground Color button over in the Paint panel.
- To grab a foreground color from anywhere on screen with the eyedropper, select the eyedropper in the Paint panel and click on the color under the pointer. Hold Ctrl and click (Windows) or Command and click (macOS) to pull the average color out of a 3-pixel by 3-pixel square.

Note

For quick access to the eyedropper inside the Layer panel, press Alt (Windows) or Option (macOS) while the pointer sits in the Layer panel.

- Swap the foreground and background colors by pressing X or clicking the Switch Foreground And Background Colors button .
- Press D to send the foreground and background colors back to black and white.

Note

Once you've painted, change or animate a brush stroke's color through the Color property in the Stroke Options group in the Timeline panel.

## Paint with the Brush tool

Select the Brush tool .

In the Paint panel and Brushes panel, settle on your settings and a brush.

Drag the Brush tool across the layer in the Layer panel to paint.

Letting go of the mouse button ends the current stroke. Drag once more and a fresh stroke begins. Hold Shift and drag to pick the previous stroke back up.

## Paint on individual frames with the Brush tool

Painting frame by frame across a run of frames lets you build an animation or cover up details you don't want in your footage.

Note

When your output is headed for interlacing, double your composition's frame rate before you start painting on individual frames.

Select the Brush tool.

Over in the Paint panel, pick Custom from the Duration menu and enter the duration in frames. Setting the Duration value to 1 paints every frame. Set the rest of your options across the Paint panel and Brushes panel however you like.

Drag the Brush tool across the layer in the Layer panel to paint.

Letting go of the mouse button ends the current stroke. Drag once more and a fresh stroke begins. Hold Shift and drag to pick the previous stroke back up.

Press 2 on the main keyboard to jump ahead by the number of frames your Custom duration specifies, then do the previous step over again.

Press 1 on the main keyboard to step back by the Custom number of frames.

Working with a pen tablet? Assign the keyboard shortcuts to your pen's buttons for a smoother workflow. Check your pen tablet's documentation for how.

## Clone Stamp tool

With the Clone Stamp tool, pixel values are sampled from one location and moment and then laid down at a different location and moment. Removing wires is one use—sample from an unobstructed stretch of sky and paint it over them—and another is turning a single cow in your source footage into a whole herd, with each copy shifted in time.

Sampling happens on a source layer, and the values picked up there get painted onto a target layer; that target may be the very same layer or a separate one living in the same composition. Should the source and target be one and the same layer, whatever paint strokes and effects already sit on it are sampled too, right along with the layer's underlying source image.

## Use the Clone Stamp tool

Like every paint tool, the Clone Stamp tool does its work inside the Layer panel.

Note

When your source and target are separate layers, give each its own viewer. Splitting and locking the current viewer is done with Ctrl+Alt+Shift+N (Windows) or Command+Option+Shift+N (macOS).

A semi-transparent rendering of the source layer—the clone source overlay—lets you preview the outcome of a stroke before committing to it.

Note

Dial in a paint stroke's settings ahead of applying it through the Paint and Brushes panels. Once the stroke exists, its properties live in the Timeline panel, where you can change and animate them.

Turning on Aligned in the Paint panel ties the sample point (Clone Position) to the Clone Stamp tool's motion in the target Layer panel, shifting it for each successive stroke. Put another way, Aligned lets a series of strokes build up a single copy of the sampled pixels. Switch Aligned off and the sample point holds steady from stroke to stroke, so every fresh drag restarts your painting from the original sample point to lay down another clone.

To copy one entire cow—a job nearly impossible in a single unbroken stroke—turn Aligned on and use several clone strokes; to stamp one flower into dozens of spots and fill a field, turn Aligned off and lay down one clone stroke per copy.

Turning on Lock Source Time clones just one source frame (taken at composition time Source Time); leave Lock Source Time off and successive frames are cloned, separated from the target frame by a time offset (Source Time Shift). Once the sampling point runs past the end of the source layer's duration, the clone source time wraps automatically back to the original sample point. That looping comes in handy when the target layer needs many frames repaired but the source layer offers only a handful of good ones.

1. Open the composition holding both layers—source and target alike.
   Bring the source layer up in a Layer panel and slide the current-time indicator to whichever frame should begin the sampling.

In the Paint panel you steer where sampling starts, in both time and coordinates, by editing four values: Offset, Source Time Shift, Source Position, and Source Time. The Reset button returns them all to zero.

Set the sampling point by holding Alt and clicking (Windows) or Option and clicking (macOS) the source layer in the Layer panel with the Clone Stamp tool.

Bring the target layer up in a Layer panel and move the current-time indicator to whichever frame should start the clone stroke.

Paint the source layer's cloned pixel values into place by dragging across the target layer. A crosshair marks the spot currently being sampled, so you can keep track of what the Clone Stamp tool is pulling from as your strokes go down.

Releasing the mouse button ends the current stroke; the next drag opens a new one. Hold Shift while dragging to pick the previous stroke back up.

Lining elements up and judging your clone strokes is easier if you click the Difference Mode button beside the Clone Source Overlay option in the Paint panel, or adjust the overlay's opacity. A quick press of Alt+Shift (Windows) or Option+Shift (Mac OS) shows the clone source overlay for as long as you hold it. To reposition the source layer, drag while holding Alt+Shift (Windows) or Option+Shift (Mac OS).

In the Timeline panel, every clone stroke carries its own set of properties—unique to the Clone Stamp tool—that mirror the choices you made in the Paint panel before the stroke was drawn:

Clone Source

Whichever layer was sampled.

Clone Position

Where the sample point sits, as an (x,y) coordinate, inside the source layer.

Clone Time

Within the composition, the moment at which sampling of the source layer occurs. Only with Lock Source Time turned on does this property show up.

Clone Time Shift

How far apart in time the sampled frame and the target frame fall. Only with Lock Source Time turned off does this property show up.

Once your clone strokes exist, the Timeline panel lets you adjust and animate their properties. Cloning a bird in flight, for instance, comes down to cloning it on a single frame, tracking its movement, and then tying the Clone Position property to the tracker's Attach Point property by way of an expression.

Note

Just like any other paint stroke, clone strokes accept a blending mode. The Darken blending mode works well for clearing away light-colored scratches, while the Lighten blending mode handles dark blemishes and dust.

## Work with clone presets

Clone presets exist so you can store and replay clone source settings—the Source Layer, Aligned, Lock Source Time, Source Time Shift, Offset, and Source Position values. Because they sit in the preferences file, those presets carry over to other projects. Begin by selecting the Clone Stamp tool whenever you want to work with clone presets.

- Choosing a clone preset is a matter of pressing 3, 4, 5, 6, or 7 on the main keyboard, or clicking a Clone Preset button in the Paint panel.
- Changing a clone preset means selecting it first and then tuning the Clone Options settings however you like.
- Carrying settings from one clone preset over to another: select the preset you're copying from, then Alt-click (Windows) or Option-click (Mac OS) the Clone Preset button of the preset you want those settings pasted into.

## Eraser tool

Run the Eraser tool in Layer Source & Paint or Paint Only mode and it lays down Eraser strokes you can later adjust and animate. Run it instead in Last Stroke Only mode and it touches nothing but the most recent paint stroke, producing no Eraser stroke at all.

Note

For a momentary switch to Last Stroke Only behavior with the Eraser tool, hold Ctrl+Shift and drag (Windows) or Command+Shift and drag (macOS).

Grab the Eraser tool over in the Tools panel.

Set your options in the Paint panel.

Within the Brushes panel, pick a brush and configure its brush options.

Across the region you mean to erase, drag in the Layer panel.

Releasing the mouse button ends the current stroke; the next drag opens a new one. Hold Shift while dragging to pick the previous stroke back up.

Note

On a pen tablet, flipping the pen over and pressing its eraser end to the tablet brings the Eraser tool up for as long as you do so.

## Animate and edit paint strokes

Animating a paint stroke comes down to setting keyframes or expressions on its properties. For every frame that falls between keyframes, After Effects fills in the values—the Path property of a stroke included—to drive the animation.

Adjusting and animating a stroke's Start and End properties lets you dictate how much of it shows at any given moment. Drive the End property from 0% to 100% automatically with the Write On setting, for example, and the stroke looks as though it's being drawn on as time passes.

Paint stroke properties, like all properties, can be wired to other properties through expressions. Make a stroke trail a moving element in your footage, say, by tracking that element and then connecting the stroke's Position property to the tracker's Attach Point property.

A special form of painting or drawing frame by frame, where you trace some object in the frame, is what rotoscoping means. More often than not the term refers to animated masks being drawn instead of paint strokes. (See Rotoscoping introduction and resources.)

On his Effects Corner website, Scott Squires offers two movies covering how to rotoscope through both painting and masking:

Rotoscoping - Part 1

Rotoscoping - Part 2

## Animate a paint stroke by sketching with Write On

Pick Write On from the Duration menu in the Paint panel and the End property animates on its own to follow the motion you drew the stroke with.

Note

A Write-on effect ships with After Effects as well. (See Write-on effect.)

Grab a paint tool over in the Tools panel.

Within the Paint panel, set the Duration menu to Write On.

To put a paint stroke on the layer, drag inside the Layer panel.

While you paint, your movements get captured live and govern how fast the finished stroke draws onto the screen for output. The recording kicks off the moment you click inside the layer in the Layer panel. Let go of the mouse button and the current time jumps back to where your painting began—done this way so additional paint strokes can be recorded for animated playback all starting from that same moment.

Note

Animating the Trim Paths operation on a shape path can land you in much the same place as driving a paint stroke through Write On. (See Alter shapes with path operations.)

## Animate a paint stroke path

Grab a paint tool over in the Tools panel.

Within the Paint panel, set the Duration menu to Single Frame, Constant, or Custom.

Inside the Layer panel, drag to lay down a paint stroke.

With the Selection tool, click the paint stroke to select it.

For a momentary switch to the Selection tool, hold down V.

Pressing SS surfaces the chosen paint stroke over in the Timeline panel.

6. Next to the paint stroke name, click its triangle so the full property list opens out.
   To lay down a first Path keyframe, click the stopwatch beside the Path property.

7. Drag the current-time indicator to another time.
   Drawing a fresh stroke while one is already selected swaps out the selected stroke—an action that goes by the name stroke targeting.

Unhappy with how the path interpolates? Build the path as a mask instead, dial in the interpolation using Smart Mask Interpolation, and from there copy the keyframes of the Mask Path property over onto the paint stroke Path property. (See Animate a mask path with Smart Mask Interpolation.)

9. After Effects interpolates a paint stroke (center) between two different shapes created with the same brush (left and right).

### More like this

- Blending mode reference
- Layer properties in the Timeline panel
- Paint tools (keyboard shortcuts)
- Select a color or edit a gradient
- Viewers
- Add, edit, and remove expressions
- Managing and animating shape paths and masks
