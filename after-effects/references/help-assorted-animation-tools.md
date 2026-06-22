# Assorted Animation Tools

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 11, 2026

### Adjust timing, motion, and the broader behaviour of your animation in Adobe After Effects with an assortment of tools made for the job.

## Motion paths

Spatial properties—Position, Anchor Point, and the control-point properties of effects among them—display their animation as a motion path once you set keyframes. That path renders as a trail of dots, with every dot fixing where the layer sat on a given frame; wherever a keyframe lives, the path draws a box instead.

Think of a motion path as a second way to look at the same spatial keyframes—a spatial, on-canvas counterpart to editing those properties over in the Timeline panel. Reshaping one is a matter of dragging an existing keyframe, dropping in a fresh keyframe, or swapping the spatial interpolation that governs how the curve bends through each keyframe.

How tightly the dots bunch up between two boxes tells you how fast the layer or effect control point is traveling. Closely packed dots mean slower motion; dots spread wide apart mean the element is covering ground quickly.

Note

To bring up a keyframe's context menu, right-click it on Windows or Command-click it on macOS.

Editing the keyframes of a spatial property with the Pen tool or Selection tool inside the Composition or Layer panel works the same way as reshaping a Bezier path for a mask or for a shape on a shape layer.

Fewer keyframes make a motion path simpler and quicker to adjust. When a path carries keyframes you don't need, the Smoother panel can strip them out.

## Show motion path controls

The Composition panel is where Position motion paths show up, while Anchor Point paths and effect control point paths are drawn in the Layer panel.

- Turn on motion-path controls in the Composition panel by choosing View > View Options and ticking Effect Controls, Keyframes, Motion Paths, and Motion Handles. Keep in mind that a Position motion path only appears in the Composition panel while the Position property itself is selected.
- For the Layer panel, pick the property or effect you want from the View menu tucked into the panel's lower-right corner to expose its motion-path controls.
- How many keyframes a motion path reveals is set under Edit > Preferences > Appearance (Windows) or After Effects > Settings > Appearance (macOS); choose an option within the Motion Path section.
- The size of the Bezier direction handles on motion paths is governed in that same spot—Edit > Preferences > Appearance (Windows) or After Effects > Settings > Appearance (macOS)—where you edit the Path Point and Handle Size value.

## Move motion path keyframes

Start in the Timeline panel by choosing the layer whose motion path you intend to change.

Should the keyframe you mean to edit fall outside what's currently visible in the Composition or Layer panel, slide the current-time indicator onto that keyframe to bring it into view.

Once you're in the Composition or Layer panel, reach for the Selection tool to drag a keyframe or to drag its handles.

There's no requirement to park the current-time indicator on a keyframe ahead of dragging it.

Several keyframes can shift together: highlight them in the Timeline panel first, then drag them within the Composition or Layer panel. Relocating the entire path means selecting every keyframe—click the property's name in the Timeline panel—before you start dragging any one of them inside the Composition panel.

3. Within the Composition panel, nudge every keyframe along the path over by a single keyframe.

## Add a keyframe to a motion path using the Pen tool

Bring the motion path you plan to change into view in the Composition or Layer panel.

From the Tools panel, grab the Pen tool or the Add Vertex tool .

Hover the Pen tool over the spot on the motion path where the new keyframe belongs inside the Composition panel, then click to drop it in.

The frame you clicked on the motion path now carries a fresh keyframe, which also surfaces in the Timeline panel. Reposition it with the Selection tool whenever you need to.

The outcome differs, but shaping motion-path curves with the Pen tool follows nearly the same moves you'd use to draw and adjust any other Bezier path—mask paths and shape paths included.

## Sketch a motion path with Motion Sketch

Motion Sketch lets you trace out a path for a chosen layer by capturing both where the layer goes and how fast your hand moves while drawing it. Every frame you draw across lays down its own Position keyframe.

Keyframes you've already established on other properties stay untouched by Motion Sketch. Picture a ball that already has Rotation keyframes set on it: layering Position keyframes on top with Motion Sketch makes the ball look like it's rolling along whatever path you trace.

Inside the Composition or Timeline panel, pick the layer you want to sketch a motion path for.

Over in the Timeline panel, drop the work-area markers (Layer > Markers > Add Marker) across the stretch of time you'd like to sketch within.

To let your composition's audio keep playing while you sketch, confirm that the Mute Audio button is deselected in the Preview panel.

Choose Window > Motion Sketch.

Dial in whichever Motion Sketch settings suit the job:

Capture Speed At

How the recorded motion's speed compares against playback speed, given as a ratio. At 100%, what you recorded plays back at exactly the speed you recorded it. Push Capture Speed At above 100% and playback runs slower than the original recording.

Smoothing

Trims away keyframes the motion path doesn't need. The effect mirrors what the Smoother's Tolerance setting does. Raising the value yields smoother curves, though pushing it too far can lose the shape of what you drew.

Once a motion path exists, you can still smooth it later with either the smooth expression or the Smoother.

Show Wireframe

Renders the layer as a wireframe while you're sketching the motion path.

Show Background

Holds the still frame you began sketching from on screen in the Composition panel as you work. It comes in handy when you want to sketch motion in relation to other imagery in your composition.

Click Start Capture, then drag inside the Composition panel to lay down the motion path. Let go of the mouse button to stop recording.

The moment capture time hits the end of the work area—which defaults to the composition's full duration—After Effects stops recording on its own.

## Create a motion path from a mask, shape, or paint path

Several kinds of paths can be turned into a motion path:

A mask path property

A shape path property living on a shape layer

A path property belonging to a paint stroke

A path you've copied out of Illustrator or Photoshop

Any of these can be pasted onto a layer's Position or Anchor Point property, or onto the Position property of an effect control point. Every pasted keyframe except the first and last is set to rove in time, which holds velocity steady along the path.

Out of the box, a pasted motion path runs 2 seconds. Stretch or shorten that by dragging its first or last keyframe within the Timeline panel.

In the Timeline panel, pick a Path property and choose Edit > Copy.

In Illustrator or Photoshop, pick a path and choose Edit > Copy.

Back in the Timeline panel, select the property you want to paste the path into.

3. Move the current-time indicator to whatever moment you want the motion path's opening keyframe to land on.
   Choose Edit > Paste.

## Motion blur

Look at any single frame of film or video that holds a moving subject and you'll usually see blur, because each frame captures a slice of time rather than an instant—on film, one frame lasts 1/24 of a second. During that slice the subject sweeps through several positions on its way across the frame, so it can't read as a crisp, frozen object. Speed makes it worse: the quicker the subject travels, the more it smears. The look of that blur also rides on the camera's shutter angle and shutter phase, which set how long the shutter stays open and how its opening lines up with the start of the frame.

Computer-generated animation behaves the opposite way—within a lone frame, moving elements can look every bit as crisp as stationary ones, so you may not even spot which ones are in motion. Skip the motion blur and animated layers march in discrete, strobing steps rather than flowing smoothly. Switching motion blur on for the layers you animate in After Effects gives that motion a softer, more lifelike feel.

Motion blur is something you switch on per layer, and you separately decide whether it renders for previews versus final output. The Enable Motion Blur composition switch sitting at the top of the Timeline panel toggles motion-blur rendering for previews. For final output, that toggle lives in the Render Queue panel's render settings. When the Switches Affect Nested Comps preference under the Appearance category is on, nested compositions inherit the setting of whatever composition holds them.

Because motion blur drags rendering down, a common habit is to leave the composition switch off while you work and flip it on only to check the final look.

To enable motion blur for a layer, do one of the following:

- Tick the Motion Blur layer switch for that layer over in the Timeline panel.
- Select the layer, then choose Layer > Switches > Motion Blur.

How many samples After Effects spends calculating a layer's motion blur scales to that layer's own movement. That adaptive approach delivers quality blur without burning as many samples on a slow layer as it would on a fast one. The catch is that heavy sampling rates eat into rendering performance.

With motion blur on for a composition and the Timeline panel zoomed close enough to read individual frames, a pale gray band hugging the current-time indicator stands in for the shutter phase and shutter angle. That band's width maps to the shutter angle, and how far it sits off-center maps to the shutter phase. It's a visual cue for how the composition samples each frame when computing motion blur.

Motion blur is meant for movement you animate—sliding a text layer across the screen, say. What you can't do with the Motion Blur layer switch and the Enable Motion Blur switch is add blur to motion already baked inside a layer.

When the goal is smoothing live-action footage whose assigned frame rate sits well below or above the original, frame blending is the tool to reach for instead of motion blur.

Refer to Apply motion blur to create a fake motion blur,

## Motion blur settings in the Advanced tab of Composition Settings

Reach for the controls in the Motion Blur section to tune motion blur and land convincing, realistic results.

Reach for the controls in the Motion Blur section to tune motion blur and land convincing, realistic results.

Samples Per Frame

Sets the floor on samples. After Effects falls back to this minimum on any frame where it can't work out an adaptive sampling rate from the layer's motion. 3D layers and shape layers run on this rate.

Adaptive Sample Limit

Sets the ceiling on samples.

Shutter Angle

Stated in degrees, the shutter angle mimics how much exposure a spinning shutter would let through. It leans on the footage frame rate to gauge that simulated exposure, which in turn dictates how much motion blur you get. Take 24-fps footage: dialing in 90° (25% of 360°) yields an effective exposure of 1/96 of a second (25% of 1/24 of a second). At 1° there's barely any motion blur; at 720° the blur is heavy.

Shutter Phase

The shutter phase is likewise given in degrees. It sets an offset fixing when the shutter opens against the start of a frame. Tweak it when a blurred object seems to trail behind where that same object sits without motion blur.

Note

For a layer composited over another via motion tracking data, the sweet spot is a Shutter Phase set to -1/2 of the Shutter Angle. (Say, Shutter Phase = -90 with Shutter Angle = 180.) Pairing those values centers the resulting blur on the original object.

## Apply motion blur to a mask

Motion blur produces blur driven by how a mask travels through the composition. You're free to apply it to individual masks. For any layer—or any mask inside a layer—to show motion blur, that composition's Enable Motion Blur switch has to be on.

1. Highlight a single mask or several at once.
   Choose Layer > Masks > Motion Blur, then settle on one of these settings:

Same As Layer

The mask picks up motion blur only when the layer's Enable Motion Blur switch is on.

On

No matter how the layer's Enable Motion Blur switch is set, the mask gets motion blur.

Off

The mask stays free of motion blur.

## Additional resources about motion blur

Filming a fast subject leaves motion blur on it once rendered. Shoot those same moving subjects at a high shutter speed instead and they seem to leap frame to frame, which reads as strobed motion.

After Effects' Pixel Motion Blur effect follows how pixels shift from one frame to the next. It studies a clip to figure out which regions are moving, builds a collection of motion vectors, and draws on that to lay motion blur into the frame.

When a subject races by too quickly, bump up Shutter Samples to manufacture extra in-between frames. Raise Vector Detail to cut down on errors as the analysis compares pixel groups across frames.

## Smooth motion and velocity by removing extra keyframes

The Smoother irons bumpiness or surplus keyframes out of motion paths, value curves, and velocity curves, adding keyframes or clearing away ones that aren't needed.

Note

There's also the smooth expression method, which serves the same end without deleting any keyframes. See Property attributes and methods (expression reference) for details.

Any property's curve can be smoothed, but the Smoother earns its keep most on curves that Motion Sketch spat out automatically, where stray keyframes pile up. Turn it loose on keyframes you placed by hand and the curve may shift in ways you didn't intend.

Note

You can sidestep ever needing the Smoother on a Motion Sketch path by setting the Smoothing option in the Motion Sketch panel before you sketch the motion path.

Aim the Smoother at a spatially changing property such as Position and only the spatial curve—the one the motion traces—can be smoothed. Aim it at a property that changes purely over time such as Opacity and you're limited to smoothing the value and velocity curves—the ones traced by the value or the velocity.

Beyond adding or clearing keyframes, the Smoother also lays Bezier interpolation onto every keyframe when it smooths the temporal curve.

Within the Timeline panel, select all of a property's keyframes to smooth the whole curve, or grab at least three keyframes to smooth just a stretch of it.

Choose Window > Smoother. Within the Apply To menu, the Smoother lands on Spatial Path or Temporal Graph automatically, going by which kind of property you picked keyframes for back in step 1.

Set a value for Tolerance.

Tolerance carries the same units as whatever property you're smoothing. Fresh keyframe values stray no further than that figure from the original curve. Bigger values give smoother curves, yet pushing too high may fail to hold the curve's original shape.

Click Apply and look over the outcome.

Should you need to, choose Edit > Undo Smoother to restore the keyframes, change the Tolerance value, and run the Smoother again.

## Add randomness to a property with the Wiggler

Reach for the Wiggler whenever you want a property's variation over time to gain some randomness.

Note

The wiggle expression method does the same job, and as a rule it's the easier route compared with the Wiggler.

Based on the property and the settings you choose, the Wiggler injects a set number of deviations into a property—it drops in keyframes and randomizes the interpolation flowing into and out of the keyframes already there. Two keyframes is the minimum the Wiggler needs.

The Wiggler helps you mimic natural movement more believably inside boundaries you define. You might toss randomness onto an animated butterfly so it flutters, or recreate an aging projector's flicker by applying it to brightness or opacity.

1. Highlight a span of the property's keyframes.
   Choose Window > Wiggler.

2. Tune your composition's blur by working through the controls in the Motion Blur panel.
   Under Apply To, pick which curve you'd like the Wiggler to alter. With keyframes chosen on a spatially varying property, Spatial Path adds deviations to the motion while Temporal Graph adds them to the velocity. With keyframes on a property that doesn't vary spatially, Temporal Graph is your only choice.

Pick a Noise Type to set the flavor of deviation that comes from randomly scattered pixel values (noise):

Smooth Noise

Yields deviations that build up gradually, free of abrupt jumps.

Jagged Noise

Yields abrupt jumps.

X, Y, or Z

Confines deviations to a single dimension of the chosen property. Pick that dimension from the menu.

All Independently

Hands each dimension its own separate batch of deviations.

All The Same

Applies one identical batch of deviations across every dimension.

Use Frequency to dictate how many deviations (keyframes) per second After Effects drops onto the selected keyframes. Keep it low and deviations come only now and then; crank it high for jumpier output. Below 1, keyframes land less than once per second—0.5, for instance, places one keyframe every 2 seconds.

Use Magnitude to cap how large the deviations can get. After Effects ties the magnitude you set to the chosen property's units, so a figure that works on one property can behave differently on another.

Click Apply and look over the outcome.

Should you need to, choose Edit > Undo Wiggler to restore the keyframes, change the Frequency and Magnitude values, and run the Wiggler again.

## Convert audio to keyframes

Within the work area, the Convert Audio To Keyframes keyframe assistant measures audio amplitude and lays down keyframes that track it.

Make the composition active inside either the Composition or the Timeline panel, then choose Animation > Keyframe Assistant > Convert Audio To Keyframes.

What this keyframe assistant builds is an Audio Amplitude layer standing in for every audio source in the composition, carrying three Expression Controls effects whose Slider properties hold the keyframes: Left Channel, Right Channel, and Both Channels.

Putting those keyframes to work means tying the shifts in audio amplitude to other layer properties. As one example, an expression can wire the audio keyframes to a layer's Scale property so the layer swells and contracts as amplitude rises and falls.

## More like this

- Selecting and arranging layers
- Managing and animating shape paths and masks
- Expression language reference
- Setting, selecting, and deleting keyframes
