# Apply Color Adjustments And Looks, Enhance Speech, Blend Modes, Automatically Split Scenes In Videos

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Apply color adjustments and looks; Enhance audio; Blend modes in Firefly video editor; Automatically split scenes in videos.

## Apply color adjustments and looks

Use preset Looks and manual color controls to improve the visual style of a video.

Generated videos can feel more consistent and expressive after professional color grading. In Firefly video editor (beta), color adjustment tools let you apply cinematic styles or tune individual color attributes.

For fast styling, apply a preset from the Looks panel; for direct control, use Color adjustments to change brightness, contrast, and color tones manually. The edits affect selected images or video clips on the timeline, so different parts of the project can use different treatments.

### Before you begin

Before starting, make sure these prerequisites are in place:

- A Firefly video editor (beta) project that already exists
- Media files already placed on the editor timeline

### Apply a predefined Looks preset

In the timeline, choose the image or video clip whose colors you want to add or modify.

Use the Looks icon in the left toolbar to display the Looks panel.

When the Looks panel opens, the Color adjustments panel opens on the right as well.

Review the Looks presets in the panel, then choose one to apply it to the selected timeline clip.

- Soft Warm
- Muted Film
- Golden Hour
- Dusty Rose
- Vibrant
- Cool Clean
- High Contrast
- Bright Editorial
- Rosy Dream
- Amber Glow
- Deep Glow
- Cool Fantasy
- B&W Classic
- B&W Soft Matte
- B&W Dramatic

After a Looks preset is applied, another preset can be selected at any time to preview a different style. The selected clip updates right away, and the Color adjustment sliders in the right panel move with each edit.

To compare with the unstyled clip, hover over the binocular or Show original icon in the panel's top-right area.

Choose the Reset to default icon to clear the Looks preset and restore the clip's original colors.

### Adjust color settings manually

In the timeline, choose the image or video clip whose colors need manual adjustment.

On the right toolbar, select the Color adjustments icon.

Opening Color adjustments also brings up the Looks panel on the left.

The Looks panel appears on the left whenever the Color adjustments panel is opened.

Use the available sliders to tune the clip's color and lighting.

The Color adjustments panel gives each slider a separate part of the clip appearance to control:

- Contrast: changes the separation between bright and dark image areas.
- Exposure: alters the clip's overall brightness.
- Highlights: changes brightness in the brightest image areas.
- Shadows: changes brightness in darker regions.
- Temperature: shifts the overall color tone warmer or cooler.
- Tint: moves color balance toward green or magenta.
- Saturation: sets color intensity and richness.

To compare against the untouched clip, hover over the binocular or Show original icon at the top-right of the panel.

Select the Reset to default icon to clear all applied Looks preset changes and return the clip to its original colors.

Individual slider nodes can also be reset by double-clicking them.

Tip

For strong results, start with a Looks preset to establish the base style, then use Color adjustments for precise refinement.

Looks presets and manual adjustments operate separately, but using both together gives full control over color grading in the video.

## Enhance audio

Use Firefly video editor (beta)'s built-in audio enhancement to reduce background noise and make voices clearer in video projects.

Enhance audio applies AI-based processing to improve quality by separating speech, music, sound effects, and background noise. It can be used inside Firefly video editor (beta), so audio can be refined without leaving the editing workflow. Sliders for speech, background noise, music, and sound effects help create clearer, balanced, professional-sounding audio.

### Apply audio enhancement to your clip

In the timeline, choose the audio or video clip whose audio you want to enhance.

Select the Properties icon on the right rail to open the Properties panel.

At the bottom of the panel, turn on Enhance audio.

Audio processing may need time before the enhancement controls become usable.

The enhancement controls can remain unavailable until processing finishes. Note

Processing time can be several minutes, depending on clip length and internet speed. Output quality depends on the starting audio; cleaner recordings generally enhance better. Enhancement works only on clips up to 30 minutes long. When a longer clip is selected, a notification says the action is not supported.

Use the sliders below the preview section to adjust speech and background levels:

- Speech enhancement: sets how much enhancement is applied to isolated speech or dialogue. Move left for less enhancement, or right for clearer and more prominent speech.
- Music: sets the music volume within the clip. Move left to lower music, or right to make music more present.
- Sound effects: sets the loudness of sound effects, such as walking or crunching leaves underfoot, in the clip. Move left to soften sound effects, or right to emphasize them.
- Noise: sets background-noise loudness. Move left to lower background noise, or right to raise background sound.

Fine controls let you favor voice clarity or ambient sound according to the final output's needs.

Depending on what the finished piece requires, use the fine controls to emphasize voices or surrounding audio.

Preview the result by playing the clip in the viewer or timeline.

Tip

For natural-sounding output, keep speech enhancement moderate. With heavy background noise in the recording, lower the Noise slider substantially and reduce Sound effects and Music by a moderate amount before raising Speech enhancement.

Choose Enhance to save the clip changes.

After enhancement is applied, return to the Properties panel to change it or remove it by adjusting sliders or switching off Enhance audio.

## Blend modes in Firefly video editor

Use Blend options to understand the visual results of compositing video clips, images, and graphics.

Blend modes control how a selected visual element combines with the layers underneath it. In Firefly video editor (beta), Blend can create transparency effects, improve lighting, or merge images, video, and graphics with more visual variety.

### Apply Blend

To use a blend mode, choose a visual element in the timeline or viewer, open the Properties panel, find the Blend dropdown, and select a blend mode. The chosen effect is applied immediately to every selected element.

Start by selecting one or more visual elements in the timeline or viewer.

Open the Properties panel, find the Blend dropdown, and choose a blend mode. The chosen effect applies immediately to every selected element.

Pick a Blend mode to apply it across the current selection.

Apply the selected Blend mode to all selected elements. Tip

Hovering over choices in the Blend menu previews them in the viewer. While the menu is open, move through choices with the Up and Down Arrow keys.

If selected objects use different blend modes at the same time, the Blend dropdown shows an intermediate state for the mixed values.

### Supported elements

Any timeline element that supports opacity adjustments can use blend modes:

- Video clips
- Images, including JPEG, PNG, and additional supported formats
- Graphics, including text, icons, and grouped objects

### Blend modes

Blend mode

Description

Pass through

Lets blend modes used by layers in a group continue through to lower layers without being altered.

Normal

Uses the source color as the result color, ignoring the color underneath.

Multiply

For every color channel, the source color value is multiplied by the underlying color value, then divided by the maximum value. The result cannot become brighter than the original. Black in either color produces black, while white in either color leaves the other color.

Darken

For each channel, the darker lower value between the source color channel and the matching underlying channel becomes the result.

Color Burn

Darkens the source color in response to the underlying color by increasing contrast. Pure white in the source leaves the image unchanged.

Lighten

For each channel, the lighter higher value between the source color channel and the matching underlying channel becomes the result.

Screen

Works by multiplying the complements of the channel values and then complementing that result. The output is never darker than either input color.

Color Dodge

Lightens the source color in response to the underlying color by decreasing contrast. When the source color is black, the underlying color is returned.

Overlay

Depending on whether the underlying color is lighter than 50% gray, channel values are multiplied or screened. Highlights and shadows are preserved in the result.

Soft Light

Uses the source color to darken or lighten the underlying color, producing an effect like a diffused spotlight.

Hard Light

Uses the source color to multiply or screen channel values, producing an effect like a harsh spotlight.

Difference

For each channel, the darker input value is subtracted from the lighter one. White paint inverts the underlying color, and black paint leaves it unchanged.

Exclusion

Produces an effect related to Difference with reduced contrast. White in the source produces the complement of the underlying color; black leaves it unchanged.

Hue

Combines the underlying color's luminosity and saturation with the hue from the source color.

Saturation

Combines the underlying color's luminosity and hue with the saturation from the source color.

Color

Combines the underlying color's luminosity with the source color's hue and saturation. Gray levels in the underlying color are preserved.

Luminosity

Combines the underlying color's hue and saturation with the source color's luminosity. This is the inverse of Color mode.

| --- | --- |

## Automatically split scenes in videos

Use scene detection to divide video clips automatically when scene changes occur.

Split scenes finds shot and scene changes on its own, so long videos do not need to be scrubbed and separated one scene at a time. The feature examines footage, identifies cut points where camera angle, shot, or scene changes occur, and separates the clip into segments at those points.

In Firefly video editor (beta), Split scene works on video clips that are already on the timeline.

### Split your video into scenes

In the timeline, choose the video clip that should be split into scenes.

Right-click the selected clip.

From the context menu, choose Split scenes.

Split scenes can be used to separate any video clip automatically.

Use Split scenes when a video clip needs automatic separation.

Wait while Firefly video editor (beta) finds scene changes and splits the clip automatically.

When processing finishes, the original clip is shown as several clips on the timeline, separated at every detected cut point. Each scene can then be edited, reordered, trimmed, or given effects independently.

Tip

Scene detection performs best when videos have obvious visual changes between shots. With subtle transitions or gradual camera motion, extra segments may need to be created manually with the standard split tool.
