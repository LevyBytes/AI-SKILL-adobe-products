# Color Correction Fundamentals

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Correct color; Color grading overview; Basic color correction options; Color settings; Create and edit multiple Lumetri Color effects; Color correction workflow.

## Correct color

### Color correction fundamentals

Topic: Color grading overview

Topic: Basic color correction options

Topic: Color settings

Topic: Create and edit multiple Lumetri Color effects

Topic: Color correction workflow

### Add color effects

Topic: Color Correction effects overview

Topic: Available color correction effects

Topic: Correct color using RGB curves

Topic: Correct color using Hue and Saturation curves

Topic: Install custom Look-up Table files

Topic: Add Look-up Tables

Topic: Save or export Look-up Tables

Topic: Use Auto Color

Topic: Correct color using color wheels

Topic: Match color between shots

Topic: Correct color using HSL Secondary Controls

Topic: Available Lumetri Scopes

Topic: Apply Lumetri looks

Topic: Display Lumetri Scopes

Topic: View more View less

### Set up Color Management

Topic: Color Management overview

Topic: How Color Management works

Topic: Color Management and Lumetri Color

Topic: Color Management options

Topic: Manage source media colors in the Program Monitor

Topic: Configure sequence Color Management

Topic: Configure clips for Color Management using Clip Modify

Topic: Customize color presets for new or existing sequences

Topic: Configure sequence's output color space

Topic: Disable Color Management

Topic: Premiere and After Effects Color Management compatibility

Topic: Tone mapping in Premiere

Topic: View more View less

### Color mode fundamentals

Topic: Color mode in Premiere (beta)

Topic: Using Color mode with Color Management

Topic: Work in Color mode

Topic: Open a sequence in Color mode

Topic: Color mode workflow

Topic: Working with the Clip Grid

Topic: Understanding Heads-Up Displays (HUDs)

Topic: Default Adjust Operation

Topic: Color adjustment in Edit mode

Topic: About the Clip Grid

Topic: Color Controls panel overview

Topic: Color monitor overview

Topic: About Comparison View

Topic: Working with Video Scopes

Topic: Grading clips using Adjust

Topic: Grading clips using Style

Topic: Available Style modules

Topic: Managing multiple color operations

Topic: Applying clip operations

Topic: Applying operations to the Sequence

Topic: Using Custom Groups

Topic: Copy and paste for Grade Management

Topic: Isolated adjustments using masks

Topic: View more View less

## Color grading overview

### Professional color grading tools available in Adobe Premiere.

Premiere includes professional-grade color correction and grading features so footage can be graded on the editing timeline.

The Lumetri Color workspace contains those controls. They let you change color, contrast, and light within sequences through newer workflow patterns. Because editing and grading remain connected, you can move between cut work and color work without exporting media or opening a separate grading app.

Lumetri Color serves both experienced colorists and editors who are learning grading. It supports quick corrections and complex Lumetri Looks through sliders and controls, while curves and color wheels support detailed cut adjustments and grade refinements.

### Lumetri Color Workspace overview

Open the Lumetri Color workspace when you need the color correction controls.

A. Lumetri Scopes panel B. Lumetri Color panel

Open the Lumetri Color workspace when you need the color correction controls.

The Lumetri Scopes panel shows luma and chroma analyses as waveforms that update with your adjustments, so you can judge clips during grading.

The Lumetri Color panel groups powerful, straightforward tools, including curves, color wheels, and sliders, into workflow-focused sections.

## Basic color correction options

### Basic Color Correction options in Adobe Premiere and how they help correct color.

In the Basic Correction section, you can fix clips that are overly dark or bright, and tune hue (color or chroma) plus luminance (exposure and contrast).

For any control, move its slider until the image reaches the intended result, or enter an exact number in the box beside the slider.

The Basic Correction section in the Lumetri Color panel gives fast color and lighting controls that are useful for balancing picture while audio edits are underway.

The Basic Correction section in the Lumetri Color panel gives fast color and lighting controls that are useful for balancing picture while audio edits are underway.

### Input LUT

A LUT (Look Up Table) can be used as the first grading step, with the remaining color controls applied afterward for further refinement.

Premiere includes multiple preset LUTs for footage, and it also lets you choose a custom LUT you previously saved.

### White balance

White Balance describes the lighting conditions present when the video was captured. Changing white balance can improve the clip's overall ambient color.

Set White Balance by adjusting Temperature and Tint. With the eyedropper, click an area of the footage that is white or neutral; Premiere updates White Balance automatically. You can also use the sliders to refine Temperature and Tint until the color balance matches the goal.

- Temperature: adjusts White Balance on a color-temperature scale. Move the slider left for a cooler image, or right for warmer colors.
- Tint: corrects White Balance for green or magenta shifts. Move left (negative values) to introduce green, or right (positive values) to introduce magenta.
- Saturation: changes color intensity. Drag left for a more muted image, or right for brighter, stronger color.

### Tone

Use the Tone controls to change the clip's tonal range.

- Exposure: sets clip brightness. Drag Exposure right to raise tonal values and broaden highlights; drag left to lower tonal values and open shadows. Stop when the brightness matches the desired look.
- Contrast: raises or lowers contrast, with the largest impact in the color midtones. Increasing contrast darkens middle-to-dark ranges; decreasing it lightens middle-to-light ranges.
- Highlights: targets bright image areas. Drag left to make highlights darker, or right to make them brighter while limiting clipping.
- Shadows: targets dark image areas. Drag left to deepen shadows while limiting clipping, or right to brighten shadows and recover detail.
- Whites: changes white clipping. Drag left to reduce highlight clipping; drag right to add highlight clipping.
- Blacks: changes black clipping. Drag left to increase black clipping so more shadows become pure black; drag right to reduce shadow clipping.
- Reset: restores every tone control to its starting value.
- Auto: selects an automatic overall tonal scale. When Auto is selected, Premiere positions the sliders to expand tonal range while limiting highlight and shadow clipping.
- Saturation: changes all video colors evenly. Drag left to reduce overall saturation, or right to raise it.

## Color settings

### Change media, sequence, and display-related color settings from one Adobe Premiere workspace.

The Color workspace gathers color-related settings in one location so they are easier to find and use.

In Lumetri Color, the Settings tab brings together Preferences plus the area for Project color settings, the area for Source Clip color settings, the area for Sequence color settings, and the area for Sequence Clip color settings.

For adjustment targeting, use the Settings tab in the Lumetri Color panel to see whether your color changes apply to a clip or a sequence, helping keep grades consistent across the timeline.

For adjustment targeting, use the Settings tab in the Lumetri Color panel to see whether your color changes apply to a clip or a sequence, helping keep grades consistent across the timeline.

### Preferences

- Display Color Management: shows accurate color values on any monitor.
- Extended Dynamic Range Monitoring: when available, shows out-of-range color values without clamping.

A transmit-device subsection can also list connected transmit devices, provide controls to enable or disable video streams for each one, and open their settings.

### Project color settings

Project section controls include target luminance for 100% white in HDR workflows through HDR Graphics White (Nits), the LUT color-interpretation method through 3D LUT Interpolation, and Viewer Gamma from a dropdown that previously lived only in Project Settings.

Turn on Color Manage Auto Detected Log and Raw Media when the project should apply log color management automatically. Turn on Color Space Aware Effects to use the color space-aware form of effects that need special handling when the Working Color Space is not Rec. 709. A sequence can override those project settings.

### Source Clip color settings

Source Clip color settings let you replace the default color space choice manually and set the media color space yourself.

Choose Apply Input LUT or Override Media Color Space from the drop-down. The same settings can be applied either to the source clip selected from the timeline sequence or to the source clip selected in the project bin.

Select Preserve RGB to stop automatic conversion from input color space to working color space for this source media. You can still assign an Input LUT for that conversion. This does not change how output color space conversion works in a sequence.

### Sequence color settings

Use this section when the timeline-selected clip or the project-bin-selected sequence needs sequence setting changes.

In the Sequence section, you can adjust Color Setup, Output Color Space, and Output Peak Luminance. In Advanced, the available controls are:

- Working Color Space: chooses the color space used for editing the video.
- Input Tone Mapping: maps wide-gamut media into the Working Color Space before color adjustments, using an automatically selected method from the Sequence Clip controls.
- Input Gamut Compression: compresses selected out-of-range colors from larger-color-space media so they fit the active Working Color Space.
- Output Tone Mapping: runs after all effects, mapping the resulting Working Color Space image data into the Output Color Space. Multiple tone mapping methods are available.
- Highlight Saturation: sets the permitted saturation level in tone-mapped highlights.
- Knee: sets the tonal threshold; values below it stay unchanged, while highlights above it are compressed through tone mapping.
- Output Gamut Compression: compresses selected out-of-range image colors from a larger color space so they fit the active Output Color Space. This occurs after all effects.
- Graphics White Override: when Output Color Space uses HLG or PQ, defines the maximum white luminance for generated titles, graphics, and SDR media. It keeps SDR media from looking too dim next to the HDR program and keeps titles from becoming overly bright.
- Color Space Aware Effects: turns on the Color Space Aware version of effects.

### Sequence Clip color settings

These controls apply to the currently selected timeline clip.

- Color Space Input Conversion: converts Media Color Space into Working Color Space.
- Color Space Output Conversion: converts Working Color Space into Output Color Space.
- Input Gamut Compression: compresses selected out-of-range colors from larger-color-space media so they fit the active Working Color Space. It runs before effects are applied.
- Input Tone Mapping: enables tone mapping of wide-gamut media into the Working Color Space before color corrections, using an automatically selected method from Sequence Clip controls. It is usually used when the working color space is not wide-gamut.
- Exposure: adjusts exposure before Input Tone Mapping, which can recover extra highlight detail that was overly compressed.
- High Saturation: sets how much saturation is permitted in tone-mapped highlights.
- Knee: sets the tonal threshold; content below it is left unchanged, while highlights above it are compressed by tone mapping.

## Create and edit multiple Lumetri Color effects

### Create and manage multiple Lumetri Color effects in Adobe Premiere to improve color grading workflows.

Set the Premiere Color workspace by selecting Window > Workspace > Color.

In the Lumetri Color panel, open the fx drop-down menu and select Add Lumetri Color Effect to create another effect.

When a new effect is added, Premiere creates a Lumetri Color effect named Lumetri Color.

Lumetri instances follow the same top-to-bottom order shown in the Effects Control panel. The selected instance appears blue and includes a check mark on its left.

For organization, rename effects as needed. To rename one, choose Rename from the fx drop-down list. To remove one, choose the effect to delete (shown in blue), then choose Clear from the fx drop-down list.

If there are no Lumetri instances, Add Lumetri Color Effect is the only enabled option.

Use the dropdown in the Lumetri Color panel for creating, renaming, and managing multiple Lumetri color effects.

Use the dropdown in the Lumetri Color panel for creating, renaming, and managing multiple Lumetri color effects.

## Color correction workflow

### Improve video clips with color correction tools in Adobe Premiere.

Move the playhead to the clip you need in the sequence.

Begin adjustments in the Basic Correction section.

For a fast start, use Auto Color, the Adobe Sensei ML feature for intelligent clip color correction. After that, refine the result with the Intensity, Color, and Light sliders.

Inside the Lumetri Color panel's Basic Correction section, use white balance, saturation, and light controls such as exposure and contrast to adjust tone and color.

Inside the Lumetri Color panel's Basic Correction section, use white balance, saturation, and light controls such as exposure and contrast to adjust tone and color.

The Basic Correction controls walk you through applying a LUT (Lookup Table) and making other exposure and light corrections with straightforward controls.

- Use the Creative section to apply Looks. Then refine them with the adjustment sliders.
- Use the Curves section to refine the look further with RGB Curves and the Hue Saturation Curve.
- Use Color Wheels & Match to adjust shadows, midtones, and highlights with more precise color control.
- To make shots captured under different lighting feel like part of the same scene, and to avoid jarring cuts between them, use the Color Match section.
- After finishing the color work, add a high-quality vignette to help the video stand out.
