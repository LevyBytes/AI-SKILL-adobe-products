# List Of Video Transitions, List Of Video Dissolve Transitions, Adjust Effects, Blur And Sharpen Effects ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: List of Video transitions; List of Video Dissolve transitions; Adjust effects; Blur and Sharpen effects; Channel effects; Color Correction effects; Distort effects; Generate effects; Image Control effects; Immersive Video effects; Keying effects; Apply and customize Chromakey using the Ultra Key effect; Ultra Key effect parameters; Noise and Grain effects; Perspective effects; Stylize effects; Time effects; Transform effects.

## List of Video transitions

### Premiere video transitions for dissolves, wipes, slides, and other scene-change effects

## List of Video Dissolve transitions

### Premiere dissolve transitions for smoothly blending one clip into the next

## Adjust effects

### Adjustment effects for refining clip color, lighting, and image tone

## Blur and Sharpen effects

### Blur and Sharpen effects for controlling whether footage appears softer or crisper

## Channel effects

### Invert effect for reversing color channels in creative Premiere looks

Apply the Invert (video) effect when an image's color information needs to be inverted.

## Color Correction effects

### Color Correction effects for changing color, luminance, levels, and broadcast-ready balance

Premiere color correction effects adjust footage color balance, brightness, contrast, and saturation. They can repair color issues, shape the intended mood, keep shots visually consistent, and support a polished, fluid edit. These effects can also be used creatively to alter the project's style and appearance.

## Distort effects

### Distortion effects in Premiere for stretching, twisting, and reshaping video during fixes or creative edits

## Generate effects

### Premiere effects for creating custom visuals such as gradients, lightning, lens flares, and animated color ramps

## Image Control effects

### Premiere color effects for grayscale conversion, color isolation, color swaps, and tonal balance

.

## Immersive Video effects

### Premiere immersive video effects for smooth VR-friendly treatment of 180Â° and 360Â° content

## Keying effects

### Keying effects in Adobe Premiere for background removal and subject isolation with chroma keying

In Premiere, keying effects remove backgrounds, such as green screens, or emphasize selected areas for visual effects. Tools such as Ultra Key and Luma Key help blend footage and build cleaner composites.

### Alpha Adjust effect

Use this effect instead of Opacity when the default render order of Fixed effects needs to change. Set the Opacity percentage to create the desired transparency level.

### Color Key effect

Use this effect to remove image pixels that match a specified key color. It changes only the clip's alpha channel.

Left: nonstandard blue screen. Center: background. Right: composite produced with the Color Key effect.

Color Key combines the nonstandard blue screen at left with the center background to create the right-side result.

### Luma Key effect

Use this effect to remove every layer area selected by specific luminance or brightness levels.

The effect works best when the subject intended for the matte has luminance that clearly differs from the background. For example, while keying musical notes on a white background, the brighter regions can be removed so that the dark notes remain opaque and visible.

Top and left show the original white background; the right view shows that background removed with Luma Key and composited over the lower layer.

Luma Key removes the original white background shown at the top/left and places the result over the lower layer at right.

### Track Matte Key effect

Track Matte Key shows a background clip through a superimposed clip by using a third file as the matte, which defines transparent regions in the superimposed clip. The setup requires two clips and a matte, with each item placed on its own track. In the matte, white makes the superimposed clip opaque and blocks lower clips, black makes it transparent, and gray creates partial transparency.

A matte that contains motion is called a traveling matte or moving matte. It can come from motion footage, such as a green-screen silhouette, or from an animated still image matte. Animate a still by applying the Motion effect to the matte. When animating a still image, make the matte frame size larger than the sequence frame size so its edges do not enter the view during the animation.

Because Track Matte Key can use a video clip as the matte source, matte behavior can change over time.

A video clip used as a Track Matte Key matte lets the matte update as time passes.

### Ultra Key effect

Use this effect to remove a green or blue screen from footage so another background can replace it. It is useful for clean, polished composites and provides controls for refining edges, reducing color spill, and more. For example, replace the green screen behind a person with a different video or image background.

## Apply and customize Chromakey using the Ultra Key effect

### Remove a solid-color background, such as green or blue screens, from video

The Ultra Key effect removes a solid-colored background from video footage, creating transparent pixels for compositing above other layers. This method is known as chromakey or green screen.

Ultra Key effect uses GPU acceleration for better system performance when supported graphics cards are available.

Before you begin:

Record the subject against an evenly lit green or blue background. Make sure the subject is not wearing colors like the background, then import the footage into Premiere.

### Apply the Ultra Key effect

Move the green screen footage onto the timeline.

Select the clip in the timeline.

Bring up the Effects panel.

In Video Effects > Keying, locate the Ultra Key effect.

Apply it to the clip in the timeline.

### Set the key color

In the Effect Controls panel, find the Ultra Key effect settings.

Select the eyedropper icon beside Key Color.

In the Program Monitor, select the green or blue background so Premiere samples it as the key color.

### Refine the key

In the Effect Controls panel, tune these settings for the shot:

- Matte Generation: sets the strength used when removing the background.
- Matte Cleanup: polishes matte edges and reduces spill.
- Spill Suppression: neutralizes background color reflected on the subject.

Use the Output menu to inspect alternate key stages.

Position the background footage you want on a video track at the lower-right of the keyed clip.

Tip

A clean key is easier in post-production when the green screen is shot with uniform lighting and a high-quality camera.

## Ultra Key effect parameters

### Review Ultra Key parameters for adjusting transparency, improving edges, reducing spill, and correcting color so chroma keys look cleaner.

Premiere's Ultra Key effect organizes controls into several parameter groups for precise chroma-key tuning. The tables below describe each group and the settings it contains.

## Noise and Grain effects

### Use Noise & Grain effect to add digital noise or film grain texture for aged, gritty, or vintage-looking footage.

## Perspective effects

### Use the Basic 3D effect to alter clips in 3D space, and the Drop Shadow effect to add realistic shadows behind clips.

## Stylize effects

### Review Stylize effects for creative clip treatments, including glow, emboss, and posterization.

In Adobe Premiere, Stylize effects push video away from realism toward a more graphic or artistic look. They can help shape mood, build abstract imagery, or draw attention to selected parts of a video.

### Alpha Glow effect

The Alpha Glow effect paints color along the edge of a masked alpha channel. The color can fade outward or transition gradually into a second color as it spreads from that edge.

### Brush Strokes effect

The Brush Strokes effect gives an image a coarse painted treatment. It can also create a pointillist style when the brush stroke length is set to zero and the stroke density is raised. The stroke direction is user-defined, but Premiere adds slight random scattering so the result feels less mechanical. Both the alpha channel and the color channels are changed. When part of the image has been masked, the brush strokes continue across the mask boundary.

Left: original image. Center: effect applied. Right: Brush Size and Length adjusted.

Brush Strokes comparison: original at left, effect-only result in the center, adjusted Brush Size and Length at right.

### Color Emboss effect

The Color Emboss effect behaves like the Emboss effect while retaining the image's original colors.

### Find Edges effect

The Find Edges effect detects high-transition areas in the image and accentuates those edges. The edges may render as dark lines on white or as colored lines on black. After the Find Edges effect is applied, images often resemble sketches or photographic negatives of the original.

### Mosaic effect

The Mosaic effect turns a clip into solid-color rectangular blocks, creating a pixelated version of the original image. Use it to imitate low-resolution displays, hide faces, or animate a transition.

### Posterize effect

The Posterize effect lets you set how many tonal levels (or brightness values) each image channel can use. The Posterize effect maps each pixel to the nearest available level. For example, selecting two tonal levels in an RGB image produces two red tones, two green tones, and two blue tones. Values range from 2 to 255.

### Replicate effect

The Replicate effect splits the screen into tiles, then repeats the entire image inside every tile. Use the slider to change how many tiles appear in each row and column.

### Roughen Edges effect

The Roughen Edges effect uses calculations to make the edges of a clip's alpha channel uneven. Rasterized text or graphics take on a natural roughness similar to eroded metal or typewriter text.

### Strobe Light effect

At periodic or random intervals, the Strobe Light effect can make a clip transparent; it can also run an arithmetic operation on that clip. For example, a clip might turn fully transparent for one-tenth of a second every five seconds, or its colors might invert at random intervals.

## Time effects

### Apply time effects to slow down, speed up, freeze, or smooth clips so important moments gain extra emphasis or style.

### Echo effect

The Echo effect blends frames sampled from different times in a clip. The Echo effect can create anything from a basic visual repeat to streaks and smears. The effect shows results only when motion exists in the clip. By default, Echo ignores effects that were applied earlier.

Left: original image. Center: low echo values. Right: increased number of echoes.

Echo comparison: original at left, lower Echo settings in the center, more echoes at right.

### Posterize Time effect

The Posterize Time effect constrains a clip to a chosen frame rate. Posterize Time works as a visible special effect and also has subtler applications. A 60-field video source, for example, can be held at 24 fps and then field rendered at 60 fields per second to create a filmlike look. In hardware devices, this effect is sometimes called Strobe.

Changing the Frame Rate slider over time can produce unpredictable results. Because of that, Hold is the only interpolation method allowed for the frame rate.

## Transform effects

### Use Transform effects to rotate, scale, flip, or reposition clips and to build smooth custom motion in an edit.

### Auto Reframe

Apply Auto Reframe when clips need to conform to aspect ratios used by different social media platforms. It saves time at sequence level because you can reframe the whole sequence in one pass instead of handling clips one by one.

### Crop effect

Crop removes pixels along clip edges.

Left, Top, Right, and Bottom set the image percentage trimmed from each side.

Choose Fit or Fill to control the cropped image's placement and scale inside the frame.

### Edge Feather effect

Use Edge Feather to place a soft black border around the video for a restrained vignette-style result. Change Amount to widen or narrow that border.

### Horizontal Flip effect

Horizontal Flip mirrors every frame horizontally, swapping left and right, while playback continues forward.

### Transform

Use Transform to change clip position, size, rotation, and opacity, which determines its motion and on-screen appearance.

### Vertical Flip effect

Vertical Flip inverts the clip from top to bottom. This effect does not support keyframes.

## Transition effects

### Use transition effects to move smoothly between clips and add style plus flow to video edits.

## Utility effects

### Use Cineon Converter to refine Cineon clip color, improve tone handling, and preview adjustments immediately in the Program Monitor.

Cineon Converter gives detailed control over color conversion for Cineon frames. It suits film-oriented workflows where retaining the source tonal character matters.

### Cineon Converter effect

With Cineon Converter, Cineon frame color conversions can be controlled very precisely. Import a Cineon file, place the clip in a sequence, then apply Cineon Converter to the clip. While watching the Program Monitor interactively, tune the colors with fine control. For tone shifts across time, set keyframes; keyframe interpolation and ease handles help match even highly uneven lighting changes. You can also keep the file in its default state and rely on the converter.

Each pixel carries 10 bits of data in every Cineon channel, which supports tone-range enhancement while keeping the overall balance intact. Careful range selection lets you produce an image version that remains visually faithful to the original.

## Video effects

### Review the video effect types available in Adobe Premiere.

## Effects and transitions reorganization

Effects and transitions in Adobe Premiere version 26.0 have been reorganized.

The Effects panel now groups effects and transitions into task-focused, more logical categories. Blur & Sharpen, Color Correction, Distort, Generate, Stylize, and Transform are examples of categories that help browsing and discovery.

Some effects may appear in different categories than before. For instance, Invert now appears under Image Control, and Offset is placed under Transform. The intent is more consistent organization and easier effect browsing.

### Modern replacements with familiar names

Frequently used effects and transitions have moved to modern, GPU-accelerated versions that allow more creative latitude. More than 90 former Film Impact effects and transitions provide these updates. Examples include:

- Cross Dissolve
- Film Dissolve
- Dip to Black
- Dip to White

If you still need the older versions, they remain in the Legacy folder.

For the full change inventory, consult the complete effects and transitions table.

### Default transition update

Cross Dissolve now uses a modern Film Impact dissolve. The previous Cross Dissolve is named Cross Dissolve (Legacy) and resides in the Legacy folder. Existing projects that already contain Cross Dissolve keep those instances as they are; Premiere does not convert them automatically to the new version, so renders stay consistent when older projects open. Customized default transition settings remain honored.

### Legacy and Obsolete effects and transitions

### Meaning of "Legacy"

Older effects and transitions that have newer substitutes are collected in the Legacy section of the Effects panel. They remain available for compatibility with old projects, although they are not recommended for new work.

### Meaning of "Obsolete"

Very old effects and transitions may be marked Obsolete and hidden so they are not used by mistake. They do not appear in the Effects panel and cannot be added to new projects, but old projects that already use them continue to render.

For the complete legacy and obsolete inventory, use the full effects and transitions table.

### What this means for your existing projects

- Existing projects continue opening and rendering normally, with applied effects unchanged.
- Legacy and Obsolete effects continue to work.

### What this means for new projects

- Categories are clearer, and modern defaults are visible.
- Legacy effects remain available and are labeled clearly.
- Obsolete effects are hidden.

### Permanent removal of effects

After an effect receives the Obsolete classification, Adobe monitors whether it is still used. A future release may remove some effects completely. Once removed, those effects no longer render in either new projects or existing projects.

Tip

Do not choose Legacy or Obsolete effects for new workflows.

## List of effects and transitions

Find out which effects and transitions in Adobe Premiere version 26.0 were updated, moved, deprecated, renamed, or removed.

The tables cover video effects and transitions that received updates, shifted into different categories, became Legacy or Obsolete, changed names, or were permanently removed.

Use these tables to see what changed for each effect or transition, where it now appears in the Effects panel, and how it behaves in both existing and new projects.

Note

The tables show whether each effect came from Film Impact and what it was called before the update. Name of categories and effects gives the new name, Effect from Film Impact identifies Film Impact origin, and Old name shows the earlier name used before Premiere version 26.0.
