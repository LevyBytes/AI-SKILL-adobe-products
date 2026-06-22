# Auto Reframe Overview, Add Auto Reframe Effect To A Sequence, Add Auto Reframe Effect To A Clip, Apply Motion Effect ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Auto Reframe overview; Add Auto Reframe effect to sequences; Add Auto Reframe effect to clips; Apply Motion effect; Edit vector graphics using Vector Motion effect; Stabilize shaky footage using Warp Stabilizer; Warp Stabilizer settings; Create fade-in video effects; Add lightning effects; Create a Jacob’s ladder effect; Effects and transitions removed from Adobe Premiere; Create vignettes using Lumetri Color; Create vignettes using masks; Create a counting leader; Create color bars and a 1-kHz tone; Create a black video; Create a color matte; Create a transparent video clip.

## Auto Reframe overview

### Auto Reframe overview

Auto Reframe analyzes action in a video and adjusts clip framing for alternate aspect ratios.

Auto Reframe is useful when preparing the same video for social channels such as Instagram, YouTube, or Facebook.

Use Auto Reframe for square, vertical, and cinematic 16:9 outputs, or for crops from high-resolution material such as 4K and higher. The feature can reframe either individual clips or an entire sequence automatically.

### Set output resolution for Auto Reframe sequence

When you reframe a sequence, the Auto Reframe dialog now lets you set the target resolution directly. That avoids a separate manual pass through sequence settings after the reframe.

In the Auto Reframe Sequence dialog, enter the target resolution for the reframed sequence. When the resolution changes, Premiere recalculates the aspect ratio from the values you provide. The selected resolution is stored and reused the next time Auto Reframe is applied to sequences with matching dimensions.

Set a custom target resolution in the Auto Reframe Sequence dialog when you need to control the reframed sequence's output size.

Use the same custom target resolution setting in the Auto Reframe Sequence dialog to define the output size for the reframed sequence.

This adds control over final output dimensions while keeping the workflow efficient.

## Add Auto Reframe effect to sequences

### Using Auto Reframe to adapt aspect ratio and framing for different platforms

When a sequence contains multiple clips, applying Auto Reframe to the whole sequence is usually more efficient than handling each clip separately.

Play the video to see a demonstration of Auto Reframe behavior.

Select the sequence in the Project panel, then select Sequence > Auto Reframe Sequence.

In the dialog box, choose the Target Aspect Ratio from the presets or enter a custom aspect ratio.

Choose the option that automatically reframes the selected clip or sequence.

Choose the automatic reframe option for the selected clip or sequence. Note

Premiere makes a duplicate sequence at the correct dimensions for the new aspect ratio. Each clip in that new sequence receives the Auto Reframe effect. The duplicate is stored in the Auto Reframe Sequences folder at the root of the Project panel.

To satisfy quality needs or platform rules, enter a custom Resolution (width and height) for the reframed sequence.

Refine the Auto Reframe effect by selecting an appropriate motion preset from the Motion Tracking drop down list. The available options are:

- Slower Motion: best for footage with little or no camera movement, such as talking head interviews. With this control, results stay nearly static and require very few keyframes.
- Default: suitable for most material. In this mode, the Auto Reframe effect tracks the action, but very fast action may not produce ideal results.
- Faster Motion: intended for footage with substantial movement when the Auto Reframe effect should track the action, such as action sports or skateboarding videos. In this mode, Auto Reframe keeps the moving subject in frame and adds many keyframes to the clip.

(Optional) Apply clip nesting if you need to keep original motion adjustments in the reframed sequence. Select Clip Nesting when you have:

- Complex motion keyframes that should be retained.
- Sequences with speed and duration adjustments.

When clip nesting is enabled, Premiere puts all video clips into a nest and keeps the original edit points and track layering, while graphics and audio remain unchanged.

Note

Nesting clips does not preserve soft transitions correctly because nested clips do not include the handle media.

For a complex sequence with rapid movement or multiple points of interest, keyframes in the reframed sequence may need manual fine-tuning afterward.

## Add Auto Reframe effect to clips

### Adding Auto Reframe to clips for social-platform aspect ratios

Select Video Effects > Transform.

Drag the Auto Reframe effect onto the clip that needs reframing.

Adjust the Auto Reframe effect by selecting a Motion Tracking option in the Effect Controls panel. While the effect is applied, Premiere creates motion keyframes that follow the action in the content. The choices are:

- Slower Motion: best for footage with little or no camera movement, such as talking head interviews. With this control, results are nearly static and the clip receives very few keyframes.
- Default: suitable for most material. In this mode, the Auto Reframe effect tracks the action, but very fast action may not produce ideal results.
- Faster Motion: intended for footage with substantial movement when the Auto-Reframe effect should track the action, such as action sports or skateboarding videos. In this mode, Auto Reframe keeps the moving subject in frame and adds many keyframes to the clip.

(Optional) Overwrite Generated Path is available after the generated motion path exists.

(Optional) Additional controls include Adjust Position, Reframe Offset, Reframe Scale, and Reframe Rotation.

After applying the effect, play the clip to review the result.

## Apply Motion effect

### Using the Motion effect to position, scale, or rotate clips

The Motion effect controls clip position, scale, and rotation inside the video frame. Every clip added to the Timeline panel receives Motion as a fixed effect by default. To see and edit Motion properties, select the arrow icon beside Motion in the Effect Controls panel.

Before you begin:

Open Premiere and either create a new project or open an existing one. Import media, then create a sequence on the timeline.

Use Motion when you need to position, scale, or rotate clips in the video frame.

Select a clip on the timeline, then select Window > Effect Controls.

Expand Motion in the Effect Controls panel.

Open the Motion effect control in the Effects Control panel to display its controls.

Expand the Motion control in the Effects Control panel when you need to view the available settings.

To change clip position: drag the video in the Program Monitor to the desired location. You can also set Position numerically in the Effect Controls panel.

To change clip scale or size: edit the Scale parameters in the Effect Controls panel. The Program Monitor handles can also resize the clip visually.

To rotate the clip: edit the Rotation parameter in the Effect Controls panel.

Play the clip back to check the changes in the Program Monitor.

## Edit vector graphics using Vector Motion effect

### Vector Motion for smoother scaling and transformation of text and logos

Vector Motion lets you edit and transform vector graphics without converting them to raster content. This helps avoid pixelation and cropping boundaries that can appear when vector graphics are scaled or animated. Use the Properties panel for edits to individual layers inside the graphic, while Vector Motion handles overall transformations.

Before you begin:

Create or import a graphic for the Premiere sequence, then choose the graphic clip on the timeline.

To edit the entire graphic with Vector Motion, double-click the graphic in the Program Monitor.

Open Effect Controls and locate Vector Motion.

Set property values inside the Vector Motion area of Effect Controls.

Use that Vector Motion area in Effect Controls for any needed property changes.

Editable parameters include:

- Position
- Scale
- Rotation
- Anchor Point

For time-based animation:

- Select the Toggle animation icon beside the property you want to animate.
- Move the playhead to another position on the timeline.
- Change the property values to create keyframes.

Improve the animation by editing keyframes in the timeline. Use Show Video Keyframes to view and adjust keyframes directly on the timeline.

## Stabilize shaky footage using Warp Stabilizer

### Stabilizing shaky footage with Warp Stabilizer in Adobe Premiere

The Warp Stabilizer effect in Adobe Premiere reduces camera movement and requires clip dimensions to match the sequence settings.

Premiere can correct shaky video with the Warp Stabilizer effect. The effect reduces jitter from camera movement, helping handheld shots become smoother and steadier.

How to stabilize footage with Warp Stabilizer in Premiere.

Select the clip that needs stabilization.

Open the Effects panel and choose Video Effects. Scroll to Distort and double-click Warp Stabilizer. You can also drag the Warp Stabilizer option onto the clip.

After the effect is applied, Premiere starts analyzing the clip in the background right away.

When analysis starts, the Project panel shows the first of two banners to indicate analysis is running. After analysis finishes, a second banner reports that stabilization is underway.

You can continue working with that footage or in other parts of the project while the process runs.

Note

In Premiere, Warp Stabilizer requires clip dimensions that match the sequence settings. If a clip's dimensions differ from the sequence, nest the clip first, then apply Warp Stabilizer to the nest.

## Warp Stabilizer settings

### Warp Stabilizer settings for analysis, methods, and borders

Apply the Warp Stabilizer effect to smooth shaky footage.

Use Warp Stabilizer on footage when the goal is to reduce shake.

- Analyze: Premiere selects this automatically when Warp Stabilizer is first applied, so manual selection is not required. The button remains disabled until a change occurs, for example edits to a layer's In or Out points or an upstream source modification. After those changes, select Analyze to run the analysis again.

- Cancel: Stops the current analysis. While analysis runs, Premiere shows status information beside Cancel.

Note

Analysis ignores any effects applied directly to that same clip.

### Stabilization

Note

Subspace Warp may create unwanted warping in some cases, and Perspective may cause unwanted keystoning. Choosing a simpler method can prevent those anomalies.

### Borders

Borders settings control treatment of borders, meaning the moving edges, in stabilized footage.

## Create fade-in video effects

### Creating fade-in effects for video clips

Choose the clip in the Timeline panel.

In the Effects panel, search for Dissolve effects, then apply the chosen dissolve by dragging it to the clip's beginning.

Choose a dissolve effect, then drag and drop it at the beginning of the clip.

Pick the dissolve effect you want and place it on the clip's start by dragging and dropping.

Alternatively, open the Effect Controls panel, use the clip's Opacity property, and add keyframes that begin at 0 and rise to 100%.

Select the stopwatch icon beside Opacity to enable keyframing, then change opacity values to animate the clip.

Use the stopwatch icon next to Opacity to turn on keyframing, then animate by adjusting opacity values.

## Add lightning effects

### Adding lightning effects to only part of a clip

Place a Transparent Video clip on a video track above the original clip.

In an empty Project panel area, right-click and choose New Item > Transparent Video to create the Transparent Video clip.

Use Transparent Video as the clip where the lightning effect will be applied.

The Transparent Video option creates a transparent clip that can hold the lightning effect.

In the Effects panel, locate Lightning Effects and place it on the Transparent Video clip with drag and drop.

Drag and drop Lightning Effects onto the transparent video clip in the timeline.

Place Lightning Effects on the transparent video clip by dragging it onto the timeline clip.

Use Effect Controls to set the Lightning Effects properties.

Then set the Transparent Video clip length to match the lightning appearance.

Use trimming handles to set the clip length and align it to the intended duration in the timeline.

Adjust the trimming handles again as needed so the clip's position and duration match the desired timing.

## Create a Jacob’s ladder effect

### Creating a Jacob's Ladder effect

A Jacob's Ladder effect is a lightning-style visual that imitates the behavior of a real Jacob's Ladder electrical device.

In Premiere, the Jacob's Ladder effect creates a look where a lightning bolt is pulled in one direction and then snaps back to its original position along the starting line.

From the Effects panel, apply Lightning by dragging it onto the timeline clip.

In the Effect Controls panel, select the triangle next to Lightning to show the property controls.

Test combinations across these three controls.

- Stability
- Pull Force
- Pull Direction

Change the Stability value so the lightning can arc before snapping back.

Adjust Stability to let the lightning stretch into an arc before it returns. Note

When Stability is too low, the lightning cannot stretch into an arc before snapping back. When the value is too high, the lightning bolt may bounce around.

## Effects and transitions removed from Adobe Premiere

### Removed obsolete effects and transitions in Adobe Premiere

As Premiere continues modernization work, the Obsolete Effects folder and plug-ins, the Obsolete Transitions folder and plug-ins, and presets based on obsolete effects have been removed. Faster modern substitutes are available in Premiere or through third parties. Adobe continues GPU acceleration work for more widely used effects, while the obsolete effects have extremely low usage. Those effects can cause major project slowdowns and performance bottlenecks.

Projects created in earlier Premiere versions still open when they contain obsolete effects. Applied effects or transitions continue to appear in sequences and in the Effects Control panel on the clips that use them. The Project panel no longer exposes the Obsolete Effects folder, Obsolete Transitions folder, or the four Presets folders: Bevel Edges, Solarize, Convolution Kernel, and Blurs (Windows Only). You can copy and paste applied obsolete effects and transitions between clips and sequences, and you can keep using them on new clips and new sequences. Custom presets saved in an earlier version remain available even if they include obsolete effects.

Beyond the modern replacements already in the Premiere tool set, a broad third-party ecosystem provides current, performant effects, transitions, and filters.

## Create vignettes using Lumetri Color

### Using Vignette controls in Adobe Premiere to guide viewer focus

Vignetting makes a natural focal point by fading footage edges while the center stays bright and prominent.

In the Lumetri Color panel, the Vignette section creates a vignette around the frame to steer attention toward subjects such as people or landscapes. It is the fastest vignette method in Premiere. For more control over shape and placement, use masks with the Brightness & Contrast effect instead.

### Apply and adjust the vignette effect

Select a clip in the timeline.

In the Lumetri Color panel, scroll to the Vignette section.

Use the Vignette controls in the Lumetri Color panel to darken or lighten frame edges.

The Lumetri Color panel's Vignette controls can make the frame edges darker or lighter.

Drag the Amount slider left to a negative value when you want darker edges for a traditional vignette.

Use the Midpoint slider to set how far the vignette reaches into the frame.

Adjust the Roundness slider to move the vignette shape between circular and more rectangular.

Change the Feather slider to make the vignette edge transition softer or sharper.

The four vignette controls combine to produce the intended look. Amount determines the darkening or brightening level, where negative values create the classic dark-edge appearance and positive values brighten the edges. Lower Midpoint values apply the effect across more of the image; higher values keep it closer to the outside edges.

Roundness changes the vignette shape. Negative values emphasize corners for a stronger vignette, while positive values create a lighter, more circular result that blends with the footage. Feather controls edge quality: smaller values create a firmer, clearer boundary between the vignette and the center, while larger values create a softer and more gradual transition.

You can use vignettes alongside other Lumetri Color adjustments in the same effect instance. Because the vignette is applied after other color corrections, it works well as a finishing pass for a color grade.

Tip

Begin with subtle changes to preserve a natural appearance. Extreme vignette settings can pull attention away instead of guiding it.

## Create vignettes using masks

### Applying Brightness & Contrast with masks for custom vignettes in Adobe Premiere

Mask-based vignettes provide accurate control over both shape and position, which makes them useful for interviews, close-ups, and any shot where viewer attention should go to a specific subject instead of the center of the frame.

This method combines the Brightness & Contrast effect with masks to build custom vignette shapes. The Vignette controls in the Lumetri Color panel create a vignette around the full frame, while mask-based vignettes let you decide exactly where the darker area appears and what shape it uses. Use this approach for asymmetrical vignettes or for isolating a specific subject, for example an interview subject's face.

Choose the clip on the timeline.

In the Toolbar, open the Object Mask Tool group. Available choices include:

- Ellipse Mask Tool icon
- Rectangle Mask Tool icon
- Pen Mask Tool icon

Draw the mask in the Program Monitor.

After drawing, open Effect Controls for that clip.

Use mask tracking to follow the selected mask forward and backward.

Under Lumetri Color, set Vignette to control edge softness; increasing the value makes the transition smoother and more gradual.

In the Effect Controls panel, combine the mask with Vignette controls to build a vignette around the subject.

In the Effect Controls panel, combine a mask with Vignette controls to place a vignette around the subject. Tip

To protect areas that should remain unchanged, mask those areas and select the Inverted checkbox so the vignette effect applies to the unmasked areas.

## Create a counting leader

### Add a synchronized countdown leader in Adobe Premiere for playback checks, sync review, and sequence-setting confirmation.

When a sequence is being prepared for film output, place a counting leader at the beginning so sync and playback can be checked. Premiere can generate an 11-second universal leader, and you can adjust its appearance and cue behavior for the project.

Open `Window > Projects`, then choose the project to open.

In the Project panel, use the New Item icon in the lower-right corner, then choose `Universal Counting Leader`.

In the New Universal Counting Leader dialog box, match `Width`, `Height`, `Timebase`, `Pixel Aspect Ratio`, and `Sample Rate` to the sequence settings.

Select `OK`.

In the Universal Counting Leader Setup dialog box, configure these options:

- Wipe Color: controls the color used by the circular one-second wipe region.
- Background Color: chooses the color displayed behind the wipe.
- Line Color: sets the color for the horizontal and vertical guide lines.
- Target Color: defines the color for the double circles around the numeral.
- Numeral Color: chooses the color for the countdown number.
- Cue Blip on out: shows a cue circle on the leader's final frame.
- Cue Blip on 2: plays a beep at the two-second point, also known as a two-pop.
- Cue Blip at all Second Starts: plays a beep at each second boundary during the leader.

Select `OK` to place the leader in the project.

To revise the leader later, double-click the counting leader.

Drag the counting leader from the Project panel to the beginning of the timeline to include it in the sequence.

## Create color bars and a 1-kHz tone

### Calibrate Adobe Premiere video and audio with color bars and a 1-kHz tone before playback or export.

Open `Window > Projects`, then choose the project to open.

In the Project panel, use the New Item icon at the lower-right corner, then choose `Bars and Tone`.

In the New Bars and Tone dialog box, review the values, adjust them if needed so they match the sequence settings, and select `OK`. The Project panel then contains the Bars and Tone clip.

Some audio pipelines need a reference tone at a particular level. Premiere's 1-kHz tone defaults to -12 dB relative to 0 dBFS. To change that level for the audio workflow, select the clip, then choose `Clip > Audio Options > Audio Gain`.

Tip

To define the default gain used by future instances, select the Bars and Tone clip in the Project panel. To adjust only the instance already in the edit, select that clip in the Timeline panel.

## Create a black video

### Make a solid-color clip in Adobe Premiere for placeholders, backgrounds, or transition material.

If no visible clips exist on lower tracks, empty track space displays as black. You can also create opaque black video clips and place them anywhere in a sequence. Black Video behaves like a still image; use a color matte when a different solid color is needed.

Open `Window > Projects`, then choose the project to open.

At the lower-right corner of the Project panel, select the New Item icon, then choose `Black Video`.

In the New Black Video dialog box, set `Width`, `Height`, `Timebase`, and `Pixel Aspect Ratio` to the values required by the sequence where the black video will be used.

Select `OK` to generate the clip. The Project panel shows the new black video.

The default duration can be changed for black video clips and other still-image clips.

## Create a color matte

### Build a solid clip in Adobe Premiere for a sequence background, overlay, or transition element.

Open `Window > Projects`, then choose the project to open.

At the lower-right of the Project panel, select the New Item icon, then choose `Color Matte`.

In the New Color Matte dialog box, set `Width`, `Height`, `Timebase`, and `Pixel Aspect Ratio` to match the sequence that will contain the color matte.

Select `OK`.

In the Color Picker dialog box, choose the matte color, then select `OK`.

Type a name for the color matte and select `OK`.

## Create a transparent video clip

### Use an empty video layer in Adobe Premiere for alpha-based effects that should not cover lower video.

Transparent video is a generated clip, similar to `Black Video`, `Bars and Tone`, or `Color Matte`. Use it when an effect creates the visible image and keeps transparency intact, such as the `Timecode` or `Lightning` effect. Treat transparent video as a clear matte that carries effects while leaving underlying layers visible.

At the lower-right of the Project panel, select the New Item icon, then choose `Transparent Video`.

In the New Transparent Video dialog box, set `Width`, `Height`, `Timebase`, and `Pixel Aspect Ratio` to the values for the sequence where the transparent video will be used.

Select `OK`.

Move the transparent video clip from the Project panel to the top track in the sequence, extend it to the needed duration, and add an effect.

Note

Transparent video works only with effects that use the alpha channel, such as `Checkerboard` and `Grid`. Some third-party lens flare effects and other effects that include an alpha channel can also work well on transparent video.
