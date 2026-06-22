# Types Of Effects

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add video effects; About Effects and Effects panel; Types of effects; List of accelerated effects; List of 32-bit effects; List of YUV effects; Modern effects in Premiere; Modern transitions in Premiere on desktop; Modern animations in Premiere on desktop.

## Add video effects

### Types of effects

About Effects and Effects panel

Types of effects

List of accelerated effects

List of 32-bit effects

List of YUV effects

Modern effects in Premiere

Modern transitions in Premiere on desktop

Modern animations in Premiere on desktop

### Apply video effects

Apply effects

Remove effects

Copy and paste clip effects

Find and group effects

About Effect Controls panel

Adjust controls in the Effect Controls panel

View effects in the Effect Controls panel

Effect presets

Create effect presets

Apply effect presets

Use FX badges

Manage effects and plug-ins

Create adjustment layers

Resize adjustment layers

About Source clips

Apply effects to Source clips

Enable or disable Source clips effects in thumbnails

### Effects and transitions library

List of Video transitions

List of Video Dissolve transitions

Adjust effects

Blur and Sharpen effects

Channel effects

Color Correction effects

Distort effects

Generate effects

Image Control effects

Immersive Video effects

Keying effects

Apply and customize Chromakey using the Ultra Key effect

Ultra Key effect parameters

Noise and Grain effects

Perspective effects

Stylize effects

Time effects

Transform effects

Transition effects

Utility effects

Video effects

Effects and transitions reorganization

List of effects and transitions

### Control effects and transitions using keyframes

Adjust effect speed

About keyframes

Add keyframes

Select keyframes

Copy and paste keyframes

Set keyframes to snap

Delete keyframes

Keyframes and graphs in panels

Edit keyframes graphs

View keyframes and properties in the Timeline panel

View keyframes in the Effect Controls panel

Move the Current Time Indicator to a keyframe

Control effect changes using keyframe interpolation

Change the keyframe interpolation method

Filter properties in the Effect Controls panel

Adjust or reset controls in the Effect Controls panel

Control change using Bezier keyframe interpolation

### Create masks and composites

Create masks

Create reveal animations using masking techniques

### Commonly used effects

Auto Reframe overview

Add Auto Reframe effect to sequences

Add Auto Reframe effect to clips

Apply Motion effect

Edit vector graphics using Vector Motion effect

Stabilize shaky footage using Warp Stabilizer

Warp Stabilizer settings

Create fade-in video effects

Add lightning effects

Create a Jacob's ladder effect

Effects and transitions removed from Adobe Premiere

Create vignettes using Lumetri Color

Create vignettes using masks

Create a counting leader

Create color bars and a 1-kHz tone

Create a black video

Create a color matte

Create a transparent video clip

### Apply video transitions

Transitions overview

Set and apply default transitions

Apply single-sided transitions

Copy and paste transitions

Align and reposition transitions

Reposition the center of a transition

Change transition settings

Replace transitions

Move cuts and transitions simultaneously

Change transition duration using the Effect Controls panel

Morph Cut overview

Apply morph cut to smoothen jump cuts

Morph Cut transition options

Clip handles settings

Video transitions using clip handles

### Work with masks

Redesigned Rectangle, Ellipse, and Pen tools

Object masking in Premiere

Create masks using shapes

Refining and combining masks

Apply effects to existing unassigned masks in Premiere

Copy, paste or move masks

Adjust mask properties

Mask tracking tools in Premiere

Adjust masks at the clip or frame level in Premiere

Track masks

Masking tool actions and modifiers

Apply Sharp and Smooth modes in Object Masking

### Work with composites

Compositing overview

Combine multiple video clips using Blend modes

Blend mode options

Set clip opacity

## About Effects and Effects panel

### Premiere audio and video effects, and the Effect Controls panel used to manage them.

In Adobe Premiere, effects change or enhance video and audio clips. They can modify motion, opacity, timing, and sound. An effect might change footage exposure or color, reshape audio, distort an image, or add a stylized look. Effects also support clip rotation and animation, plus size and position changes inside the frame. Premiere groups effects by what they do and by processing type, which helps keep editing organized. Effect strength comes from the values assigned to each effect, and those values can be animated with keyframes in the Effect Controls or Timeline panels.

Presets can be created and applied for effects so editing moves faster and repeated workflows stay consistent.

## Types of effects

### The effect categories in Premiere that can improve video and audio edits.

### Effect types

Premiere includes many effects that ship with the application, and it can also use third-party plug-in effects from outside manufacturers.

### Fixed effects

Every clip already carries fixed effects, including Motion, Opacity, Time Remapping, and Volume controls.

Fixed effects are present on each timeline clip and manage the clip's basic attributes. After selecting a clip, adjust those controls from the Effect Controls panel. For a more visual editing flow, work from the Audio Track Mixer, Program Monitor, or Timelines panel.

Fixed effect

Description

Motion

Control position, scale, rotation, anti-flicker, and compositing with other clips.

Opacity

Lower clip opacity when building overlays, fades, dissolves, and related effects.

Time Remapping

Change playback speed, hold frames, and build slow-motion or fast-motion results.

Volume

For any section of a clip, make playback slower, faster, reversed, or held on one frame. These controls give detailed adjustment over how those changes accelerate or decelerate.

| --- | --- |

Fixed effects come built into each clip. Use their properties when you need to change them. Premiere evaluates Fixed effects after Standard effects; Standard effects render from top to bottom. You can change Standard effect order in the Effect Controls panel, while Fixed effects keep a fixed processing order.

When the processing order for a Fixed effect needs to change, substitute a comparable Standard effect. Use Transform in place of Motion, Alpha Adjust in place of Opacity, and the Standard Volume effect in place of the fixed Volume effect. These replacements are not exact matches, but they provide similar capabilities.

### Standard effects

Standard effects are optional additions that you apply to clips yourself. They support color correction, blur, distortion, and other changes.

After you add Standard effects, the Effect Controls panel lets you adjust them to enhance or alter clips. Use Standard effects for these tasks:

- Adjust tone, crop pixels, or create stylized treatments.
- Combine multiple effects on the same clip in any arrangement.
- Use handles in the Program Monitor to manipulate supported effects directly.
- Animate properties over time by using keyframes and Bezier curves.

The Effects panel contains many video and audio effects. Which effects appear depends on the installed effect files in the language subfolder of the Premiere Plug-ins folder. Installing compatible Adobe or third-party plug-ins adds more choices.

### Clip-based and track-based effects

Video effects work on individual clips; audio effects can operate on either clips or tracks.

Both Fixed and Standard video effects are clip-based, so they change single clips. To affect several clips as one unit, apply the effect to a nested sequence.

Audio effects may be added to clips or to tracks. For track-level audio effects, work in the Audio Track Mixer. After keyframes are present, adjust the effect through the Audio Track Mixer or Timelines panel.

### Effect Plug-Ins

Plug-ins extend Premiere with third-party effects from Adobe or other vendors.

In addition to the effects included with Premiere, the application can use Adobe plug-ins, many third-party plug-ins, and compatible tools such as After Effects and VST. Official support covers only plug-ins installed with the application. Plug-ins are stored in these locations:

- Windows: Program Files\Adobe\Common\Plug-ins<version>\MediaCore
- macOS: /Library/Application Support/Adobe/Common/Plug-ins/<version>/MediaCore

When a project that uses add-on plug-ins must be edited on several computers, install the needed plug-ins on every editing system. If a project opens with effects missing, Premiere reports the missing effects, flags them offline, and renders without them.

### Effect categories

For easier searching, Premiere organizes effects into three categories. The Effects panel shows these categories as three buttons. Selecting a button limits the display to effects and transitions of that type, and multiple buttons can be selected together to combine filters.

### GPU-Accelerated Effects

These effects rely on the GPU to speed rendering and enable real-time playback.

GPU acceleration improves many effects and can allow playback without pre-rendering. To use GPU acceleration, confirm that the system satisfies the Premiere requirements for supported graphics cards.

Acceleration is available only with a supported video card. Without supported hardware, the Accelerated Effects filter still appears, but its badge is greyed out to indicate that acceleration is unavailable.

To enable or disable GPU acceleration for effects:

Open File > Project Settings > General.

In the Video Rendering And Playback section, choose Mercury Playback Engine GPU Acceleration for GPU-based rendering or Mercury Playback Engine Software Only for CPU-based rendering.

Note

Which choices appear depends on whether the system supports GPU acceleration.

### 32-bit Color Effects

These effects process at higher bit depth to improve color resolution and gradient smoothness.

Premiere includes selected video effects and transitions with high-bit-depth processing, which improves gradients and color resolution when assets such as v210 video or 16-bit Photoshop files are used. Some effects offer high-bit-depth processing for stronger color fidelity. To make those effects available, use File > New > Sequence > Settings (New Sequence dialog) and enable Maximum Bit Depth.

If a sequence mixes any 8-bit effect with 32-bit effects, Premiere processes every effect at 8-bit depth.

### YUV Effects

YUV effects work on YUV color values directly instead of translating them to RGB, which helps preserve color accuracy. They are useful when you need contrast and exposure adjustments that do not shift color.

## List of accelerated effects

### GPU-accelerated and obsolete effects in Adobe Premiere.

Use the Accelerated Effects icon in the Effects panel when you want playback to start immediately without rendering. The accelerated effects below support real-time playback through GPU-accelerated processing.

- 4-Color Gradient
- ASC CDL
- Alpha Adjust
- Alpha Glow
- Auto Reframe
- Basic 3D
- Black & White
- Block Dissolve
- Brightness & Contrast
- Cineon Convertor
- Color Emboss
- Color Key
- Color Pass
- Color Replace
- Corner Pin
- Crop
- Directional Blur
- Drop Shadow
- Edge Feather
- Extract
- Find Edges
- Gamma Correction
- Gaussian Blur
- Gradient Wipe
- Horizontal Flip
- Invert
- Lens Distortion
- Levels
- Linear Wipe
- Lumetri Color
- Magnify
- Metadata & Timecode Burn-in
- Mirror
- Mosaic
- Noise
- Offset
- Posterize
- ProcAmp
- Ramp
- Reduce Interlace Flicker
- Replicate
- Roughen Edges
- SDR Conform
- Sharpen
- Simple Text
- Spherize
- Strobe Light
- Tint
- Track Matte Key
- Transform
- Twirl
- Ultra Key
- Unsharp mask
- VR Blur
- VR Chromatic Aberrations
- VR Color Gradients
- VR De-Noise
- VR Digital Glitch
- VR Fractal Noise
- VR Glow
- VR Plane to Sphere
- VR Projection
- VR Rotate Sphere
- VR Sharpen
- Vertical Flip
- Video Limiter
- Warp Stabilizer
- Wave Warp

These accelerated effects are now obsolete.

- Additive Dissolve
- Center Split
- Clip Name
- Cross Dissolve
- Dip To Black
- Dip To White
- Fast Blur
- Fast Color Corrector
- Film Dissolve
- Non-Additive Dissolve
- Push
- RGB Color Corrector
- RGB Curves
- Three-Way Color Corrector
- Video Limiter
- Luma Corrector
- Morph Cut
- Slide
- Split
- Strobe
- Timecode
- VR Chroma Leaks
- VR Gradient Wipe
- VR Iris Wipe
- VR Light Leaks
- VR Light Rays
- VR Mobius Zoom
- VR Random Blocks
- VR Spherical Blur
- Whip
- Wipe

## List of 32-bit effects

### Use the 32-bit Color icon in the Effects panel to locate and apply 32-bit effects.

Premiere provides these 32-bit effects for smoother gradients and higher color detail.

- ASC CDL
- Auto Reframe
- Gaussian Blur
- Horizontal Flip
- Luma Key
- Lumetri Color
- ProcAmp
- SDR Conform
- Tracke Matte Key
- Video Limiter

## List of YUV effects

### Use the YUV Effects icon in the Effects panel to locate and apply the effects.

Premiere includes these YUV effects for maintaining dependable color.

- Alpha Adjust
- Auto Reframe
- Black & White
- Crop
- Edge Feather
- Gaussian Blur
- Horizontal Flip
- Luma Key
- Lumetri Color
- Metadata & Timecode Burn-in
- ProcAmp
- Simple Text
- Track Matte Key
- Video Limiter

## Modern effects in Premiere

Use modern, cinematic effects in Adobe Premiere to build stronger edits at no additional cost.

Premiere adds a new collection of modern effects, transitions, and animations alongside the existing set. The 90 brand-new effects are meant for cinematic transitions, refined visual effects, and animated text or graphics that can improve an edit. Because they do not require a separate plug-in or subscriptions, the set includes redefined classic transitions and updated dissolves, blurs, and wipes that provide a smoother, richer, and fresher version of familiar looks.

All effects are GPU-accelerated, so playback can remain real time while settings change or multiple effects are layered, without rendering first. Each transition, effect, and animation can be used as provided, or every parameter can be adjusted from scratch for full creative control.

When you need to refine edits, add dramatic light treatments, or use blur for stylized depth, the effect categories below can speed the work while still producing polished, professional-looking results.

### Tools FX

Video example with Channel Mix FX applied to a clip.

### Lights and Blurs FX

Video example with Echo Glow FX applied to a clip.

### Essentials FX

Video example with Mosaic FX effect applied to a clip.

### Motion

Video example with Camera Shake FX effect applied to a clip.

### Gradient effect

Gradient is the modern substitute for Ramp and is used to create customizable background textures in many visual styles. It handles linear and radial gradients and adds broader control over color and texture.

With Gradient, you can fine-tune grain, feathering, interpolation, mirroring, repetition, orientation, scale, and position. Predictable compositing behavior comes from Master opacity and alpha preservation.

Color controls let tone and ambient colors be blended separately, with optional desaturation and posterization for stylized results. Texture controls can be turned on to introduce surface detail through adjustable patterns, scale, distortion, and intensity.

Examples showing linear and radial gradients with texture, repetition, and color blending variations added.

Examples showing linear and radial gradients with texture, repetition, and color blending variations added.

### Channel Blur

Channel Blur can blur separate color channels independently, including the alpha channel. That makes it possible to soften or alter selected image components without changing the whole frame.

Different color modes, including RGB, HSV, and YUV, are available depending on the workflow. The effect applies Gaussian blur for smooth, natural-looking output.

For compositing and color work, channel isolation can clean edges, limit noise, or make stylized variants. Channel Blur replaces the legacy Channel Blur effect, adding improved image quality and broader color space support.

Individual channel blurring creates separate softening effects and color shifts.

A. Red Channel Blur B. Blue Channel Blur C. Surprise me! D. Green Channel Blur

Individual channel blurring creates separate softening effects and color shifts.

### Noise Effect

Noise introduces controlled animated noise into an image, which helps break up smooth gradients and add subtle texture.

You can set the overall amount of noise or apply it selectively across shadows, midtones, and highlights. Other controls cover noise saturation and HDR-compatible blending choices: Normal, Screen, Additive, and Soft Light. Preserving the original alpha channel keeps compositing behavior predictable.

This effect supersedes the legacy Noise effect with higher quality and more flexible tonal control. Use it for barely visible texture or for stronger stylized treatments.

Adding noise creates texture and lessens visible banding in smooth regions.

Adding noise creates texture and lessens visible banding in smooth regions.

### Explore alternative looks with Surprise Me button

Surprise Me lets you quickly try alternate looks and variations without hand-tuning parameters. Every click creates a randomized configuration, which can help you find new creative options more quickly.

Select the transition in your sequence.

Open the Effect Controls panel, then expand the properties for the effect or transition you applied.

Select the Surprise Me button.

Each click creates a distinct variation of the applied effect and transition. Repeat the action to review randomized variations until the desired look appears.

## Modern transitions in Premiere on desktop

Improve edits with modern transitions in Adobe Premiere on desktop, all included at no extra cost.

Premiere expands its existing set with modern effects, transitions, and animations. The 90 brand-new effects help build cinematic transitions, polished effects, and animated text or graphics. No separate plug-in or subscriptions are required; the set also refreshes classic transitions and includes updated dissolves, blurs, and wipes for a smoother, richer, and fresher approach to familiar styles.

Transitions are grouped into flexible categories intended to make editing faster, add visual depth, and help create professional, engaging results with less effort.

### Essentials

Video example with Blur Dissolve Impacts transition applied to a clip.

### ﻿﻿Transformers

Video example with 3D Spin Impacts transition applied to a clip.

### ﻿Animation

Video example with Spring Motion Impacts transition applied to a clip.

### ﻿﻿Lights & Blurs

Video example with Zoom Blur Impacts transition applied to a clip.

## Modern animations in Premiere on desktop

Use text and graphic animations in Adobe Premiere on desktop to elevate edits, with everything available at no additional cost.

Premiere adds modern effects, transitions, and animations to the existing collection. The 90 brand-new effects are built to enhance work with cinematic transitions, polished effects, and dynamic text and graphic animations. They do not require a separate plug-in or subscriptions, and they include redefined classic transitions plus updated dissolves, blurs, and wipes for a smoother, richer, and fresher treatment of familiar styles.

Video example with Spring Motion Impacts transition applied to a clip.
