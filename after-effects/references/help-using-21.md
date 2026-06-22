# Time Stretching Time Remapping, Timecode Time Display Units

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Time-stretching and time-remapping; Timecode and time display units.

## Time-stretching and time-remapping

Search Last updated on Jul 22, 2024

For retiming results such as slow motion, fast motion, or freeze frames, you have three handy options: time-stretching, time-remapping, and the Timewarp effect.

### Time-stretch a layer

Applying a single uniform factor to slow down or speed up a whole layer is what time-stretching does. As a layer is time-stretched, its audio, the footage's original frames, and every keyframe tied to that layer get spread out across the revised duration. Reach for this command only in cases where the whole layer, keyframes and all, is meant to take on a fresh duration.

Before Time Stretch is applied to a layer.

After Time Stretch is applied to a layer.

Should a time-stretch push the resulting frame rate far away from the original, motion quality inside the layer can degrade. To get the cleanest outcome when retiming a layer, turn to the Timewarp effect.

### Time-stretch a layer from a specific time

Off the Timeline or Composition panel, click the layer.

Select Layer > Time > Time Stretch.

Inside the Time Stretch dialog, you can either type a Stretch Factor or key in a brand-new layer duration.

3. Adjust Stretch Factor or New Duration to change the duration of a layer and speed up or slow down your animation.
   Pick one of the Hold in Place options to set which moment the stretch pivots around, then select OK.

Layer In-point

Pins the layer's start time where it currently sits and stretches the layer by shifting its Out point.

Current Frame

Anchors the layer at wherever the current-time indicator sits (the same frame shown in the Composition panel) and stretches it by relocating both the In and Out points.

Layer Out-point

Pins the layer's end time where it currently sits and stretches the layer by shifting its In point.

### Time-stretch a layer to a specific time

Within the Timeline panel, drag the current-time indicator over to whichever frame should serve as the layer's start or finish.

To reveal the In and Out columns, pick Columns > In and Out from the Timeline panel menu.

Stretching the In point to the current time is done by holding Ctrl (Windows) or Command (macOS) while you select that layer's In time within the In column.

For the Out point, hold Ctrl (Windows) or Command (macOS) as you select the layer's Out time in the Out column to stretch it to the current time.

### Time-stretch a layer but not its keyframes

By default, a layer's keyframe positions stretch right along with the layer during a time-stretch. Cutting the keyframes and pasting them back lets you sidestep that behavior.

1. Make a note of the time at which the first keyframe appears. (Placing a composition marker is a good way to mark the time.)
   In the Timeline panel, click the name of one or more layer properties holding the keyframes you intend to keep fixed in time.

Select Edit > Cut.

Reposition or stretch the layer so it lands on its fresh In and Out points.

5. Move the current-time indicator to the time at which the first keyframe appeared before you cut the keyframes.
   Select Edit > Paste.

### Reverse the playback direction of a layer

Reversing the playback direction of a layer also flips the order of every keyframe on every property for that selected layer. Relative to the composition, the layer keeps the same In and Out points it started with.

Note

You'll get the cleanest outcome if you precompose the layer first and reverse it within the precomposition.

Inside a Timeline panel, click whichever layer you'd like reversed.

Select Layer > Time > Time-Reverse Layer, or use Ctrl+Alt+R (Windows) or Command+Option+R (macOS).

### Reverse keyframes without reversing layer playback

Keyframes can be selected and reversed across several layers and properties at once, yet each property's keyframe set flips only within its own original time span rather than within any other selected property's span. Because Timeline panel markers don't flip, you may have to relocate markers once the keyframes have been reversed.

Inside the Timeline panel, highlight whatever span of keyframes you'd like flipped.

Select Animation > Keyframe Assistant > Time-Reverse Keyframes.

### Time-remapping

Through a technique called time-remapping, you can stretch out, squeeze together, run backward, or hold a section of a layer's duration. Say you've shot a person walking: you could run the footage forward as they advance, rewind a handful of frames so they back up, then run it forward again to send them walking once more. Slow motion, fast motion, and reverse motion all combine nicely under time-remapping.

Comparable capabilities come from the Timewarp effect, which grants finer control over certain frame-blending aspects, though being applied as an effect saddles it with extra restrictions.

Frames from non-time-remapped footage are displayed at a constant speed in one direction.

Time-remapping distorts time for a range of frames within a layer.

Audio and video stay in sync when you time-remap a layer that holds both. Audio files can be remapped to ramp the pitch up or down gradually, to run in reverse, or to produce a warbled or scratchy texture. Layers made of still images can't be time-remapped.

Time can be remapped from either the Layer panel or the Graph Editor. Remap the video in one and the outcome shows up in both. Each gives you a distinct angle on the layer's duration:

The Layer panel offers a visual reference of the frames you alter along with the frame number. It shows the current-time indicator plus a remap-time marker, which you reposition to pick the frame meant to play at the current time.

By tagging your changes with keyframes and a graph resembling the ones used for other layer properties, the Graph Editor presents a view of the adjustments you make over time.

While remapping time in the Graph Editor, lean on the values shown in the Time Remap graph to figure out and steer which movie frame plays at which moment. Every Time Remap keyframe carries a time value matching a specific frame in the layer, and that value is plotted vertically on the Time Remap value graph. The moment you turn on time remapping for a layer, After Effects drops a Time Remap keyframe at both the layer's start and end. Those first Time Remap keyframes hold vertical time values that match their horizontal spot on the timeline.

Laying down extra Time Remap keyframes lets you build intricate motion. Every additional Time Remap keyframe gives you one more spot to alter playback speed or direction. Sliding the keyframe up or down within the value graph changes which video frame is set to play at the current time. From that point to the next Time Remap keyframe, After Effects fills in the in-between frames and runs the footage forward or backward. Scanning the value graph left to right, an upward slope means forward playback and a downward slope means reverse, with the steepness of that slope reflecting playback speed.

In the same way, the value shown beside the Time Remap property name tells you which frame plays at the current time. Dragging a value graph marker up or down shifts this value to match and, where needed, sets a Time Remap keyframe. You can highlight the value and key in a new one, or drag the value to tweak it.

Once you remap time, the source footage's original duration may stop being valid, since portions of the layer no longer run at their first rate. Where necessary, give the layer a new duration before you remap time.

Just as with other layer properties, the Time Remap graph values can be viewed as either a value graph or a speed graph.

When remapping pushes the resulting frame rate far from the original, motion quality within the layer can suffer. Add frame blending to sharpen time remapping for slow or fast motion.

Note

Lean on the readings in the Info panel to steer you while you work with time-remapping. Expressed in seconds/sec, that ratio reports the present playback speed—how many seconds of the original layer run for every second following the remap.

### Time-remap a layer

All or just a slice of a layer can be time-remapped to yield many outcomes, freeze-frame or slow-motion among them.

### Freeze the current frame for the duration of the layer

From a Composition or Timeline panel, click the layer.

2. Place the current-time indicator on the frame that you want to freeze.
   Select Layer > Time > Freeze Frame.

This switches on time-remapping, and After Effects drops a Hold keyframe right where the current-time indicator sits to lock the frame. Had you already turned on time-remapping for the layer, every keyframe you'd made gets wiped once the Freeze Frame command runs.

### Freeze the first frame without changing the speed

Within a Composition or Timeline panel, pick the layer you intend to remap.

Select Layer > Time > Enable Time Remapping.

Out of the gate this command drops two Time Remap keyframes, one at the start of the layer and another at its finish.

3. Move the current-time indicator to where you want the movie to begin.
   Click the Time Remap property name to pick both the start and end keyframes.

Drag that first keyframe onto the current-time indicator, which carries the start and end keyframes along. (In the Graph Editor, grab the bounding box instead of a keyframe or handle so that both keyframes travel together.)

### Freeze a frame in the middle of the duration of a layer

From a Composition or Timeline panel, choose the layer you mean to remap.

Select Layer > Time > Enable Time Remapping.

Right away this command sets down a pair of Time Remap keyframes—one marking the layer's opening, the other its close.

Move the current-time indicator onto the frame you'd like frozen, then set a Time Remap keyframe at that spot by clicking the Time Remap property's keyframe navigator diamond.

Grab the final pair of Time Remap keyframes—that's the second and third—and drag the two of them rightward.

Hit F2 to clear the selection, then click the middle keyframe—the second one—to single it out.

Copy that keyframe by pressing Ctrl+C (Windows) or Command+C (macOS).

Paste the keyframe at the current time with Ctrl+V (Windows) or Command+V (macOS). The current-time indicator should have stayed put ever since step 3.

If you'd like to lengthen the layer so its duration grows to cover the time the freeze-frame added, press the K key twice to send the current-time indicator to the final Time Remap keyframe, then press Alt+] (Windows) or Option+] (macOS).

Between the first and second keyframes the layer runs at an unchanged rate (matching the non-time-remapped layer), and so does the stretch between the third and fourth keyframes. Since the second and third keyframes are the same, one frozen frame holds across the span separating those two.

### Freeze on the last frame

A layer's final frame can likewise be held frozen all the way to the composition's end. After Effects lays down time remapping keyframes in the layer and stretches its duration out to the close of the composition.

Off a Composition or Timeline panel, click the layer.

Select Layer > Time > Freeze Frame.

### Remap time using the Graph Editor

Note

Toggling back and forth between layer bar mode and Graph Editor mode is done with Shift+F3.

Off a Composition or Timeline panel, pick the layer slated for remapping.

Select Layer > Time > Enable Time Remapping.

Over in the Timeline panel, click the Time Remap property's name to select it.

Move the current-time indicator to the instant where a keyframe belongs, then click the keyframe button within the keyframe navigator to add one.

Inside the Graph Editor, drag the keyframe marker upward or downward while you watch the Time Remap value. Hold Shift while dragging to snap onto other keyframes.

Slowing the layer down means dragging the keyframe downward. (Should the layer be running in reverse, drag it up instead.)

Speeding the layer up means dragging the keyframe upward. (Should the layer be running in reverse, drag it down instead.)

Playing frames backward calls for dragging the keyframe down beneath the previous keyframe's value.

Playing frames forward calls for dragging the keyframe up past the previous keyframe's value.

To hold the previous keyframe, drag the current keyframe marker until it equals the previous keyframe value so the graph line goes flat. Alternatively, select the keyframe, choose Animation > Toggle Hold Keyframe, and then drop another keyframe wherever the motion should pick back up.

Note

It's wise to select every later time-remap keyframe in the layer before you shift a time-remap keyframe. That selection preserves the timing throughout the rest of the layer as you handle the remap for this particular keyframe.

### Remap time in a Layer panel

Bring up the Layer panel belonging to the layer you'd like to remap.

Select Layer > Time > Enable Time Remapping. Inside the Layer panel a second time ruler now shows up, sitting above both the navigator bar and the default time ruler.

3. On the lower time ruler, move the current-time indicator to the first frame where you want the change to occur.
4. On the upper time ruler, the remap-time marker indicates the frame currently mapped to the time indicated on the lower time ruler. To display a different frame at the time indicated on the lower time ruler, move the remap-time marker accordingly.
5. Move the current-time indicator on the lower time ruler to the last frame where you want change to occur.
   To push the earlier part of the layer forward, place the remap-time marker at a time later than the current-time indicator.

To pull the earlier part of the layer backward, place the remap-time marker at a time earlier than the current-time indicator.

To hold a frame still, set the remap-time marker on the frame you want frozen. Next, slide the current-time indicator (lower ruler) to the final moment the frame should stay frozen and move the remap-time marker once more to that same frame.

### Time-remap audio pitch

An audio file's pitch ties directly to the speed graph of the Time Remap property. Nudging that speed graph gently opens the door to all sorts of intriguing effects. Keeping the Speed value under 200% helps you steer clear of screeching audio. If the speed climbs too far, reach for the Levels controls beneath the Audio property to manage the volume.

Setting fresh In and Out points in the Time Remap graph can leave clicks audible at the start and finish of an audio (or audio and video) layer. Clear those clicks out with the Levels controls.

### Change the pitch of an audio layer

Within a Composition or Timeline panel, click the layer you'd like to remap.

Select Layer > Time > Enable Time Remapping.

If it isn't already showing, click the Graph Editor button in the Timeline panel to bring up the Graph Editor.

Click the Choose Graph Type And Options button along the bottom of the Graph Editor and pick Edit Speed Graph.

Send the current-time indicator to the frame where the change should start, then click the Add A Keyframe button.

On the speed graph beneath the keyframe, drag a marker while watching the Speed value as you go.

Lowering the pitch means dragging that speed graph marker downward.

Raising the pitch means dragging that speed graph marker upward.

### Remove clicks from new In and Out points

Over in the Timeline panel, click whichever audio (or audio and video) layer you time-remapped.

Open up the layer outline to reveal the Audio property and then the Audio Levels property.

Park the current-time indicator on the new In point, then choose Animation > Add Audio Levels Keyframe.

Within the Audio panel, set the decibel value at 0.0.

To switch the Audio panel on, select Windows > Audio.

Tap the Page Up key on your keyboard so the current-time indicator steps back one frame.

Back in the Audio panel, drop the decibel level to -96.0.

Shift the current time onto the new Out point and put the decibel level at 0.

Press the Page Down key to advance the current-time indicator by one frame.

Once more in the Audio panel, drop the decibel level to -96.0.

From the Audio panel menu pick Options, which opens the Audio Options dialog box, and there adjust the Slider Minimum decibel value.

### Frame blending

Stretching or remapping a layer down to a slower frame rate, or to one beneath its composition's frame rate, can leave movement looking jerky. That jerkiness comes about because the layer now carries fewer frames per second than the composition does. The same jerky look can equally show up when you stretch or remap a layer to a frame rate above its composition's. Frame blending is the tool for smoothing motion as you slow a layer down or speed it up. Hold off on frame blending unless a layer's video has actually been re-timed—meaning the video runs at a frame rate different from that of the source video.

Two flavors of frame blending ship with After Effects: Frame Mix and Pixel Motion. Frame Mix renders faster, while Pixel Motion delivers far superior results, particularly on footage that's been slowed down dramatically.

Frame blending is also shaped by whichever Quality setting you pick. With the layer at Best quality, frame blending yields smoother motion though it can take longer to render than at Draft quality.

Note

While handling a frame-blended layer in Draft mode, After Effects always falls back on Frame Mix interpolation to speed up rendering.

Frame blending can also be switched on for every composition when you render a movie.

Turn to frame blending to lift the quality of time-altered motion in a layer carrying live-action footage—video, say. A sequence of still images can take frame blending, but a lone still image cannot. When you're animating a layer—sliding a text layer across the screen, for instance—reach for motion blur instead.

Note

Frame blending won't apply to a precomposition layer (one whose source footage item is a nested composition). That said, you can apply frame blending to the layers inside the nested composition as long as those layers are themselves built on motion footage items, like video or image sequences.

Click the layer over in the Timeline panel.

Select Layer > Frame Blending > Frame Mix.

Select Layer > Frame Blending > Pixel Motion.

When the relevant Frame Blending command (Frame Mix or Pixel Motion) carries a check mark beside it, that tells you it's active on the selected layer. The Frame Blending switch also shows up in the Switches column for that layer in the Timeline panel. Strip frame blending off by either clicking the Frame Blending switch or picking the matching Frame Blending command a second time.

No matter what state the layer switches are in, frame blending being off for the composition means it's off for every layer in that composition. Switch frame blending on for the composition either through the Enable Frame Blending choice in the Timeline panel menu, or via the Enable Frame Blending button sitting atop the Timeline panel.

Note

Because motion blur can make it tougher for Pixel Motion to pick out distinct objects within each frame, the motion-vector calculation grows less dependable. When you're using Pixel Motion for slow motion, footage carrying less motion blur produces better results.

### More like this

- About animation, keyframes, and expressions
- The Graph Editor
- Preview video and audio
- Layer image quality and subpixelpositioning

## Timecode and time display units

Search Last updated on Apr 21, 2026

### Learn how to use timecode and time display units in Adobe After Effects to view, navigate, and align your compositions with precise, standards‑based timing.

A great many values in After Effects represent either moments in time or stretches of time—among them the current time, layer In and Out points, and the durations of layers, footage items, and compositions.

Out of the box, After Effects shows time as Society of Motion Picture and Television Engineers (SMPTE) timecode: hours, minutes, seconds, and frames. You're free to switch to a different time display system, like frames or feet and frames for 16mm or 35mm film.

Feet + Frames might be your pick when prepping a project for film output, whereas frame numbers suit animation‑based workflows. Whichever time display format you choose touches only the current project.

Note

Switching the time display format leaves your assets' and output's frame rate untouched; all it changes is how frames get numbered for display within After Effects.

For reference, video-editing workstations frequently rely on SMPTE timecode recorded onto videotape. When the video you're building has to sync with one carrying SMPTE timecode, stick with the default timecode display style.

A range of file formats can surface their source timecode for display. You'll find source timecode across several parts of the interface, the Project panel, Project Settings dialog box, Composition Settings dialog box, and Preferences dialog box among them.

### Change time-display units

Ctrl-click (Windows) or Command-click (macOS) the current-time display to cycle through Timecode Base, or Frames/Feet + Frames (which depends on whether the "Use Feet + Frames" option is checked in the Project Settings). You'll find the current-time display in the Timeline panel's upper-left corner and at the foot of the Layer, Composition, and Footage panels.

Whichever option isn't picked in Project Settings shows up as smaller text beneath. To show only the option chosen in Project Settings (Timecode or Frames), follow these steps:

1. Select After Effects > Settings > Appearance (macOS) or Edit > Preferences > Appearance (Windows).
2. Deselect the Show Both Timecode and Frames in Timeline Panel option (this option is selected by default).

To change the time display units, choose File > Project Settings, then select an option from the Time Display Style section.

### Options for time-display units

- Timecode: Shows time as timecode within the time rulers of the Timeline, Layer, and Footage panels, drawing on either Use Media Source (source timecode) or beginning at 00:00:00:00 for the Footage Start Time. Pick the Timecode option to work in timecode rather than Frames. No options exist for picking a frame rate or drop-frame/non-drop-frame, since source timecode gets detected and applied in their place.

Note

Within any one composition in a project, drop-frame and non-drop-frame timecode are both allowed to coexist.

- Frames: Puts a frame number on screen in place of time. Lean on this setting when it's handy to dovetail your work with a frame-based application or format, Flash or SWF for example. To work in frames, pick Frames and clear Use Feet + Frames.
- Feet + Frames: Shows how many feet of film there are, plus frames for the leftover partial feet, for 16mm or 35mm film. To work in feet and frames, pick Frames and then turn on Use Feet + Frames.
- Frame Count: Sets the number the Frames time display style starts counting from.
- Timecode Conversion: Takes the item's timecode value as the starting number (assuming the item carries source timecode). Where no timecode value exists, the count starts at zero. Timecode Conversion makes After Effects act as it did in earlier versions, with the frame count and timecode count of every asset coming out mathematically equal.
- Start at 0: Frame counting kicks off at zero.
- Start at 1: Frame counting kicks off at one.

Note

With the Start at 0 and Start at 1 options you can set up separate frame-counting schemes for Frames versus Timecode. You might, for instance, decide to respect footage items' source timecode while still counting frames from zero or one.

### Source timecode

- Project Panel: The Project panel shows source timecode across columns: Media Start, Media End, Media Duration, and Tape Name. Those point to the source's start, end, and overall duration. In Point, Out Point, and Duration columns appear as well; for a footage item they echo whatever In and Out points the user dialed in via the Footage panel, while for compositions they echo the work area.
- Project Settings: The source timecode feature set lives in the Project Settings dialog box.
- Composition Settings: The source timecode feature set lives in the Composition Settings dialog box.
- Preferences: Source timecode features are backed by the Import panel Preferences dialog box.
