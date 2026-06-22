# Immersive Video Vr, Vr Effects, Compositing Tools Vr 360

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Construct VR environments in After Effects; Apply immersive video effects; Compositing tools for VR 360 and VR 180 videos.

## Construct VR environments in After Effects

Search Last updated on Apr 21, 2026

### Learn about how Adobe After Effects offers native support for editing your VR 360 and VR 180 videos.

Editing of VR 360 and VR 180 footage is supported natively inside After Effects. A wide range of animated transitions, effects, and titles is available to refine and elevate the immersive viewing experience. For a smooth post-production pipeline, try out the assorted VR 360 and VR 180 tools that the application provides.

These are the After Effects tools available for editing VR 360 and VR 180 footage:

By automating intricate compositions and pipelines, the VR 360 and VR 180 tools in After Effects make 360 production smooth from end to end. Editing time drops and the results stay precise.

### Create VR Environment

Comp building and the setup of camera relationships are handled automatically by Create VR Environment. It lets you automate portions of the VR authoring environment within After Effects.

To launch Create VR Environment, select Composition > VR > Create VR Environment.

Within the Create VR Environment dialog box, building a VR master from the ground up means choosing the Size of your master first (for the majority of VR compositions, 1024x1024 is fine). Specify the Frame Rate and Duration for the VR Master, then select Create VR Master.

2. Lean on Create VR Environment to handle parts of the VR authoring setup inside After Effects.
   Switch the view to Custom View 1 inside the Composition window and build your immersive video there. A range of immersive video and additional effects is available to you in the Effects & Presets panel.

When your composition is finished, reopen the Create VR Environment dialog box and select Generate VR Output. Every composition and expression is built by After Effects, which also inserts the cameras and distortions a Cubic Map needs.

Should you edit your VR Master and want those edits carried into the VR comp, select Refresh VR Output in the Create VR Environment dialog box. Based on the changes you applied to the VR master, After Effects wipes all comps and rebuilds them.

- Use 2-node camera: Turn this on to work with a 2-node camera.
- Use 3D Null camera Control: Turn this on to drive your SkyBox Camera from a 3D Null layer.
- Center camera: Turn this on to align the camera to center.

- I am using 3D plugins: Turn this on when 3D plug-ins are in play.
- Use edge blending: Turn this on for plugins that aren't true 3D plug-ins.

### Extract Cubemap

Equirectangular distortion is stripped from 360-degree footage by Extract Cubemap, which pulls out six individual camera views. Those six views sit in a cube arrangement. The composition is then open to motion-tracking, object removal, and the addition of motion graphics and VFX.

To launch VR Extract Cubemap, select Composition > VR > Extract Cubemap.

Within the VR Extract Cubemap dialog box, pick a composition from the drop-down list, choose Conversion Resolution, and then select Extract Cubemap.

2. Run Extract Cubemap to clear equirectangular distortion off 360-degree footage and pull out six discrete camera views.
   A cubemap output for the VR composition is produced by After Effects. Alongside a VR Master Camera, Extract Cubemap brings in six more camera views bound to that master. Six camera faces, deliberately arranged into a cube, are generated as well.

3. Those six extracted faces land in the Timeline panel.

### More like this

- Apply immersive video effects
- Compositing tools for VR/360 videos

## Apply immersive video effects

Search Last updated on Jun 27, 2025

This page walks through what the immersive video effects in After Effects do.

Native immersive video effects ship with After Effects for editing VR 360 and VR 180 footage. A wide range of animated transitions, effects, and titles is available to refine and elevate the immersive viewing experience. For a smooth post-production pipeline, try out the various immersive video effects the application offers.

### GPU requirements for immersive video effects

Rendering of Immersive Video effects relies on your machine's GPU. Be sure your video rendering preference points to the GPU. To set, select File > Project Settings > Video Rendering and Effects > Use > Mercury GPU Acceleration (OpenCL). When the preference is left on Mercury Software Only, nothing renders and a warning banner appears - This effect requires GPU acceleration.

### Apply seamless immersive video effects to your footage

For equirectangular content, spherically aware immersive video effects are available that correct the distortion.

To apply these effects, select Effects > Immersive Video, or search for VR in the Effects & Presets panel.

Immersive video effects in Effects and Presets panel

Immersive video effects in Effects and Presets panel Immersive video effects under Effects tab

Immersive video effects under Effects tab

A seamless editing workflow comes from the Post Effects in After Effects. Applied straight onto stitched 360 footage, they leave the seams free of distortion. To strengthen the immersive experience, the following effects can be added to your videos:

### Apply VR Color Gradients effect

After

After Before

Before

Tweak these parameters to shape how the effect plays across your shot:

VR Color Gradient settings

VR Color Gradient settings

Parameter

Description

Frame Layout

Chooses between a Monoscopic and a Stereoscopic Over/Under frame layout.

Points Number

Sets how many color points get laid onto a footage.

Gradient Power

Tunes the gradient power across every color point at once.

Gradient Blend

Controls how much all the color points blend together overall. Larger numbers fuse the colors more, with the blend beginning at the edges and working its way inward - feathering around the edges, for instance.

Points

Sets the Color and Point of Interest per color point. Every Point of Interest is independently movable and can be key-framed.

Opacity

Controls how opaque the combined color gradients appear on your footage. The effect is fully opaque at 100% and fully transparent at 0%.

Blending Mode

Pick any of the available color blending modes for layering the effect over your original footage. Normal is the default.

Stereoscopic Side-by-Side

Beyond the Monoscopic and Stereoscopic Over/Under choices already there, Frame Layout now also accepts Stereoscopic Side-by-Side.

Horizontal and Vertical Field of View

Each field of view, horizontal and vertical, is adjustable on its own. They default to 360x180; for VR 180 material, drop both to 180.

| --- | --- |

### Apply VR Fractal Noise effect

After

After Before

Before

Tweak these parameters to shape how the effect plays across your shot:

VR Fractal Noise setting

VR Fractal Noise setting

- Scale: Controls the overall size of the fractals across your footage; raise it and the visible fractals grow larger.
- Tilt (X axis): Shifts the fractal noise along your footage's X-axis. Pan (Y axis): Shifts the fractal noise along your footage's Y-axis.
- Roll (Z axis): Shifts the fractal noise along your footage's Z-axis.

- Sub Influence: A fractal noise effect is built from several stacked fractal noise layers. This sets how strongly the sublayer shapes the look.
- Sub Scaling: Sets how much the sublayer's scaling contributes to the look.
- Sub Tilt (X axis): Places the subscaled fractal noise layer along your footage's X-axis.
- Sub Pan (Y axis): Places the subscaled fractal noise layer along your footage's Y-axis.
- Sub Roll (Z axis): Places the sub scaled fractal noise layer along your footage's Z-axis.

| Parameter | Description |
| --- | --- |
| Frame Layout | Chooses between a Monoscopic and a Stereoscopic Over/Under frame layout. |
| Fractal Type | Lets you pick from four fractal types: Basic, Turbulent Sharp, Max, and Strings. |
| Contrast | Sets the image contrast of the fractal noise. |
| Brightness | Sets how bright the fractal noise reads. |
| Invert | Flips the fractal noise's color channels. |
| Complexity | Tunes how complex the fractal noise gets; higher values yield more detail and lower values yield less. |
| Evolution | Drives a cycling feature that animates the fractal noise, where the cycling speed alters the animation. |
| Transform |  |
| Sub settings |  |
| Random Speed | Lets you give the fractal noise particles on your footage a randomized speed. |
| Opacity | Controls how opaque the effect appears on your footage. It is fully opaque at 100% and fully transparent at 0%. |
| Blend Mode | Lets you pick from several blending modes. |
| Stereoscopic Side-by-Side | Beyond the Monoscopic and Stereoscopic Over/Under choices already there, Frame Layout now also accepts Stereoscopic Side-by-Side. |
| Horizontal and Vertical Field of View | Each field of view, horizontal and vertical, is adjustable on its own. They default to 360x180; for VR 180 material, drop both to 180. |

### Apply VR Digital Glitch effect

After

After Before

Before

Tweak these parameters to shape how the effect plays across your shot:

VR Digital Glitch settings

VR Digital Glitch settings

- Color Distortion: Controls the RGB-split color distortion across your footage.
- Geometry Distortion X: Sets the distortion on your footage along its X-axis; raise it for more distortion on that axis. Pair this with the Distortion Rate for the best results.
- Geometry Distortion Y: Sets the distortion on your footage along the Y-axis; raise it for more distortion on that axis.
- Geometry Distortion Z: Sets the distortion on your footage along the Z-axis; raise it for more distortion on that axis.
- Distortion Complexity: Breaks up the distorted regions of your footage; higher values make the distortion finer while smaller ones make it blocky.
- Distortion Rate: Sets how much distortion lands on your footage. A value of 100 floods the whole video with distortion, while 0 leaves none.
- Distortion Evolution: Builds a loop that animates the distortion the Distortion Rate setting produces. A faster animation cycle glitches the video more quickly; a slower one glitches it more slowly.
- Color Evolution: Animates the RGB color distortion that the Color Distortion setting produces. Cycle this setting to drive the effect.

- Scale X: Resizes the distortion artifacts along the X-axis.
- Scale Y: Resizes the distortion artifacts along the Y-axis.
- Scale Z: Resizes the distortion artifacts along the Z-axis.Translate X: Slides the distortion across your footage along the X-axis.
- Translate Y: Slides the distortion across your footage along the Y-axis.
- Translate Z: Slides the distortion across your footage along the Z-axis

- Sub Influence: Tunes how the visible distortion on your footage is subdivided.
- Sub Scaling: Tunes the subscaling of the visible distortion on your footage.

- Noise Strength: Controls how opaque the noise on your footage looks.
- Noise Quantity: Controls how dense the noise on your footage is.
- Noise Scale: Controls the scale of the noise on your footage.
- Noise Evolution: Cycle this setting to animate the noise the Noise Strength setting produces.
- Quantity settings: Sets how fast the noise cycles; quicker cycles speed up the distortion animation.
- Color Noise: Switches on colorized noise.
- Random Speed: Applies the Digital Glitch effect at random.

| Parameter | Description |
| --- | --- |
| Frame Layout | Chooses between a Monoscopic and a Stereoscopic Over/Under frame layout. |
| Point of Interest | Sets the Point of Interest - the effect's central spot - and you can keyframe its position to make it move. |
| POI Scale (Point of Interest scale) | Sets how far the effect scales out from the point of interest. A value of 100 covers the whole footage; lower it to confine the effect to part of the footage. |
| POI Aspect Ratio (Point of Interest aspect ratio) | Sets the aspect ratio of the Point of Interest Scale. The minimum of -100 makes the ratio wide and short, while the maximum of 100 makes it narrow. |
| Master Amplitude | Sets a single overall threshold spanning all the effect settings together. At 100 they all stay as you set them; at 0 they all scale back down to 0 from your values. |
| Distortion |  |
| Transform |  |
| Sub settings |  |
| Noise |  |
| Stereoscopic Side-by-Side | Beyond the Monoscopic and Stereoscopic Over/Under choices already there, Frame Layout now also accepts Stereoscopic Side-by-Side. |
| Horizontal and Vertical Field of View | Each field of view, horizontal and vertical, is adjustable on its own. They default to 360x180; for VR 180 material, drop both to 180. |

### Apply VR Chromatic Aberration effect

After

After Before

Before

Tweak these parameters to shape how the effect plays across your shot:

VR Chromatic Aberration settings

VR Chromatic Aberration settings

Parameter

Description

Frame Layout

Switches the frame layout between Monoscopic and Stereoscopic Over/Under.

Point of Interest

Sets where the footage's point of interest sits, and its position can be keyframed for movement.

Aberration (Red)

Scales your footage's Red channel.

Aberration(Green)

Scales your footage's Green channel.

Aberration (Blue)

Scales your footage's Blue channel.

Falloff Distance

Sets how far the effect falls off from the point of interest; raise it for crisper aberrations.

Falloff Invert

Holds the chromatic aberrations back from appearing around the point of interest.

Stereoscopic Side-by-Side

Beyond the Monoscopic and Stereoscopic Over/Under choices already there, Frame Layout now also accepts Stereoscopic Side-by-Side.

Horizontal and Vertical Field of View

Each field of view, horizontal and vertical, is adjustable on its own. They default to 360x180; for VR 180 material, drop both to 180.

| --- | --- |

### Apply VR Blur effect

After

After Before

Before VR Blur settings

VR Blur settings

While correcting for the distortion in Equirectangular content, VR Blur blurs the footage accurately.

- Blurriness: You can adjust the convolution kernel radius.
- Stereoscopic Side-by-Side: Beyond the Monoscopic and Stereoscopic Over/Under choices already there, Frame Layout now also accepts Stereoscopic Side-by-Side.
- Horizontal and Vertical Field of View: Each field of view, horizontal and vertical, is adjustable on its own. They default to 360x180; for VR 180 material, drop both to 180.

### Apply VR De-Noise effect

After

After Before

Before

Tweak these parameters to shape how the effect plays across your shot:

VR De-Noise settings

VR De-Noise settings

Parameters

Description

Noise Type

Pick the kind of noise - Random Valued or Slat-and-Pepper speckles.

Noise Level

Sets the level of input noise.

Stereoscopic Side-by-Side

Beyond the Monoscopic and Stereoscopic Over/Under choices already there, Frame Layout now also accepts Stereoscopic Side-by-Side.

Horizontal and Vertical Field of View

Each field of view, horizontal and vertical, is adjustable on its own. They default to 360x180; for VR 180 material, drop both to 180.

| --- | --- |

### Apply VR Glow effect

After

After Before

Before

Tweak these parameters to shape how the effect plays across your shot:

VR Glow settings

VR Glow settings

Parameter

Description

Luma Threshold

Marks which parts of the image glow - the regions whose luma (brightness) exceeds the threshold, ranging from 0.0 (black) to 1.0 (white).

Glow Radius

Sets how wide the glowing halo spreads.

Glow Brightness

Scales up the intensity of the glow's brightness.

Glow Saturation

Scales up the intensity of the glow's saturation (color).

Use Tint Color

Mixes a tint color into the resulting glow color.

Tint Color

Picks the tint color.

Stereoscopic Side-by-Side

Beyond the Monoscopic and Stereoscopic Over/Under choices already there, Frame Layout now also accepts Stereoscopic Side-by-Side.

Horizontal and Vertical Field of View

Each field of view, horizontal and vertical, is adjustable on its own. They default to 360x180; for VR 180 material, drop both to 180.

| --- | --- |

### Apply VR Sharpen effect

How much sharpness sits in your footage is governed by the VR Sharpen effect.

Parameter

Description

Sharpen Amount

Dial the relative sharpen amount anywhere from 0 to 100.

Stereoscopic Side-by-Side

Beyond the Monoscopic and Stereoscopic Over/Under choices already there, Frame Layout now also accepts Stereoscopic Side-by-Side.

Horizontal and Vertical Field of View

Each field of view, horizontal and vertical, is adjustable on its own. They default to 360x180; for VR 180 material, drop both to 180.

| --- | --- |

### Apply VR Converter effect

With VR Converter you can take footage from a 2D source, equirectangular, cubic, or spherical layout and recast it into other VR layouts. Reorienting the footage and dropping in logos, supers, or image patches is also possible.

Two functional categories make up the converter:

- Input and Output formats
- Re-orient Camera View

VR Converter settings

VR Converter settings

### VR Converter formats

The formats VR Converter accepts as input and delivers as output are listed below:

VR Converter Input formats:

- Fisheye (FullDome)
- Cube-map Facebook 3:2
- Cube-map Pano2VR 3:2
- Cube-map GearVR 6:1
- Equirectangular 16:9
- 2D Source
- Cube-map 4:3
- Sphere-map
- Equirectangular 2:1

VR Converter Output formats:

Output formats

Example

Cube-map Pano2VR 3:2

Cube-map GearVR 6:1

Fisheye (FullDome)

Equirectangular 16:9

Cube-map Facebook 3:2

Equirectangular 2:1

| --- | --- |

### Re-orient Camera View

Using the orientation tools in VR Converter, you can reorient your footage's camera without restitching the camera views:

- Tilt (X-Axis)
- Pan (Y Axis)
- Roll (Z Axis)

Vary these settings to produce different outcomes. The controls are keyframable, letting you produce effects such as camera tilts, pans, and rolls.

### Apply VR Plane to Sphere effect

Through the VR Plane to Sphere effect, you can lay text, logos, graphics, and other 2D elements over Monoscopic or Stereoscopic footage.

Here is how to use the effect:

Bring in or build a 2D element within your composition.

Choose Effects > Immersive Video, then drop the effect onto the timeline.

Tune the effect parameters, which include:

- Frame layout: Pick Monoscopic when the output is non-stereo (non 3D); pick Stereoscopic for stereo 3D output.
- Scale (Degrees): Resizes your 2D element.
- Stereo Disparity (Degrees): Sets the gap between the left and right views, raising or lowering how much the 3D pops out. Keyframe it to vary the stereo effect over time.
- Feather: Feathers the edges of the footage.
- Rotate Source: Sets the X, Y, or Z rotation of the 2D element about the anchor point, and it can be keyframed.
- Rotate Projection: Sets the X, Y, or Z rotation of where your element sits in the 360-degrees spherical environment.
- Stereoscopic Side-by-Side: Beyond the Monoscopic and Stereoscopic Over/Under choices already there, Frame Layout now also accepts Stereoscopic Side-by-Side.
- Horizontal and Vertical Field of View: Each field of view, horizontal and vertical, is adjustable on its own. They default to 360x180; for VR 180 material, drop both to 180.

### Apply VR Rotate Sphere effect

Tweak these parameters to shape how the effect plays across your shot:

VR Rotate Sphere settings

VR Rotate Sphere settings

Parameter

Description

Frame Layout

Pick Monoscopic when the output is non-stereo (non 3D); pick Stereoscopic for stereo 3D output.

Invert Rotation

Takes the tilt, pan, and roll and flips them.

Tilt (X axis), Pan (Y axis), Roll (Z axis)

Resets the focal point, levels the horizon, and introduces camera moves into your footage.

Stereoscopic Side-by-Side

Beyond the Monoscopic and Stereoscopic Over/Under choices already there, Frame Layout now also accepts Stereoscopic Side-by-Side.

Horizontal and Vertical Field of View

Each field of view, horizontal and vertical, is adjustable on its own. They default to 360x180; for VR 180 material, drop both to 180.

| --- | --- |

### Apply VR Sphere to Plane effect

Turning 360° spherical VR footage into a flat 2D view is what the VR Sphere to Plane effect does, so you can pull particular views or angles out of equirectangular footage.

VR Sphere to Plane settings in the Effect Controls panel.

VR Sphere to Plane settings in the Effect Controls panel.

Parameter

Description

Input Format

State which format your 360° footage is in.

Output Frame Width

Sets the output frame's horizontal resolution; a greater width yields a higher-resolution flat view.

Output Frame Ratio

Governs the output's aspect ratio. Choosing Unchanged keeps the ratio tied to the input or composition.

Rotate Projection

Spin the camera view around inside the 360° footage:

- Projection Tilt (Y-axis): Left-right rotation.
- Projection Tilt (X-axis): Up-down rotation.
- Projection Tilt (Z-axis): Rotate the image around the center axis.

| --- | --- |

### More like this

- Compositing tools for VR/360
- Construct VR environments in After Effects

## Compositing tools for VR 360 and VR 180 videos

Search Last updated on Apr 30, 2026

### A guide to compositing and editing immersive VR plus 360° video within Adobe After Effects, drawing on dedicated tools built for precise spatial workflows.

In After Effects, the VR Comp Editor lets you treat 360- and 180-degree clips like ordinary footage. Its view-based approach previews material the same way a VR headset would present it. To assemble a spherical composite, the editor's compositing tools combine 2D and 3D edits together. From there, you can move between the individual edits that make up the spherical composite and preview the finished render.

### Work with VR Comp Editor

Follow these steps to get going with the VR Comp Editor:

Open it by choosing Windows > VR Comp Editor.jsx.

When the VR Comp Editor dialog appears, pick either Add 2D Edit or Add 3D Edit, and the matching dialog opens.

2. VR Comp Editor options
   Set the Comp Width and Aspect Ratio here; note that these values leave your composition window's own size and aspect ratio untouched. Once finished, click Add 3D Edit or Add 2D Edit. Composites from 2D edits sit within the sphere, whereas 3D edits get rendered across several camera directions and are then stitched onto the spherical backdrop.

3. Add 3D Edit settings
   In the Project panel, After Effects generates a pair of composition timelines: an Edit1 composition and an Output composition. Whereas Edit 1 shows undistorted 16:9 footage, the Output composition presents the same footage in an equirectangular view.

4. Edit1 and Output composition in Project panel
   Within the VR Comp Editor dialog, click Edit 1 to make the Edit 1 composition active. That lets you work inside the Edit 1 composition window, where you can drop in Immersive video effects, masks, shapes, and outside graphics. To see how it turns out, click Open Output/Render.

5. Current composition settings
   Composition settings remain adjustable beyond this point. Click Properties inside the VR Comp Editor dialog, tweak the values, then click Save. To remove what you stored, click Delete.

6. Edit 3D properties
   To gauge how the footage will appear to someone wearing a VR headset, you can orbit the field of view. Choose the Edit 1 composition, then drag it around with the Camera tool. The footage's 360 view helps you reposition the field of view and spot a place to drop in elements. Switching the number of views reveals the various camera angles.

Bring in graphics, text elements, and effects, then check how they appear in the Output composition. Should the output composition fail to update, click Open Output/Render in the VR Comp Editor and the comp refreshes.

Tip: When a 3D edit is in play, convert whatever element you insert into a 3D layer. Switch on the 3D layer toggle over in the Timeline panel.

8. Output equirectangular composition

### More like this

- Construct VR environments in After Effects
- Apply immersive video effects
