# Time Effects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jun 26, 2025 Note

Bundled with After Effects, the third-party effects under this category are CC Force Motion Blur, CC Time Blend, CC Time Blend FX, and CC Wide Time effect. See Third-party plug-ins included with After Effects.

## Echo effect

Frames captured at different moments in a layer are merged by the Echo effect. Its uses range widely, from a plain visual echo through streaking and smearing effects.

Echo effect

Echo effect

You'll only see this effect's results when the layer carries change across time — motion in a layer driven by a video footage item, say. Motion you create by moving the layer itself inside the composition produces no echoes here. For echoes from that kind of motion, precompose the layer, move all its attributes across to the new composition, and then run the Echo effect on the precomposition layer.

This effect works with 8-bpc, 16-bpc, and 32-bpc colors.

Echo Time (seconds)

How much time, in seconds, falls between echoes. Negative values pull echoes from earlier frames; positive values pull them from later frames.

Number of Echoes

How many echoes there are. With a value of 2, for instance, three frames combine: the current time, the current time + Echo Time, and the current time + (2 \* Echo Time).

Starting Intensity

How opaque the first image in the echo sequence is.

Decay

How an echo's opacity compares to that of the echo before it in the sequence. With Decay at 0.5, for example, the first echo's opacity is half the Starting Intensity, and the second echo is half of that — one-quarter of the Starting Intensity.

Echo Operator

Which blending operation merges the echoes.

- Add: Merges the echoes by summing their pixel values. Set the starting intensity too high and this mode overloads fast, throwing off streaks of white.

- Maximum: Merges the echoes by keeping the largest pixel values across all of them.

- Minimum: Merges the echoes by keeping the smallest pixel values across all of them.

- Screen: Mimics merging the echoes by optically stacking them. It resembles Add, yet overloads less readily.

- Composite In Back: Places the current-time image at the rear, each echo stepping progressively farther toward the front of the composite.

- Composite In Front: Places the current-time image at the front, each echo stepping progressively farther toward the rear of the composite.

- Blend: Averages the echoes.

## Pixel Motion Blur | CC

Computer-built motion or sped-up footage tends to look fake because it lacks motion blur. By studying the video footage and reading motion vectors, the Pixel Motion Blur effect synthesizes a motion blur from them. That added blur makes the motion read as more realistic, since it supplies the blur a camera would normally introduce while shooting.

Shutter Control

Pick Manual to dial in Shutter Angle and Shutter Samples values on their own. Pick Automatic to adopt the values set for the layer or composition.

Shutter Angle

Measured in degrees, the shutter angle simulates the exposure a rotating shutter would permit. It draws on the footage frame rate to gauge the simulated exposure, which drives how much pixel motion blur appears. Enter 90° (25% of 360°) for 24-fps footage, for instance, and you get an effective exposure of 1/96 of a second (25% of 1/24 of a second). Enter 1° for almost no pixel motion blur, or 720° for a heavy dose of blur.

Shutter Samples

Governs how good the pixel motion blur looks. A higher value smooths the motion blur out but stretches the render time.

Vector Detail

Sets how many motion vectors go into computing the blur. At a value of 100, one vector serves each pixel. Raising it won't necessarily improve the result, but it will lengthen the render.

## Posterize Time effect

Posterize Time effect

Posterize Time effect

A layer gets pinned to a specific frame rate by the Posterize Time effect. Beyond standing alone as a special effect, it has subtler applications. For instance, 60-field-per-second video footage can be pinned to 24 frames per second (then field rendered at 60 fields per second) for a filmlike look. Nested compositions, too, can be pinned to a chosen frame rate. In hardware devices this effect sometimes goes by the name Strobe.

Animating the Frame Rate slider's value can produce unpredictable results. That's why Hold is the only interpolation method permitted for the frame rate.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Note

You can reach much the same outcome as applying the Posterize Time effect to a layer another way: precompose the layer, set the precomposition's frame rate in the Composition Settings dialog box, and on the Advanced tab enable, for that precomposition, Preserve frame rate when nested or in render queue. With this method the precomposition keeps its own frame rate rather than inheriting the containing composition's settings.

## Time Difference effect

Time Difference effect

Time Difference effect

By computing the color difference between two layers, the Time Difference effect lends a hand in color correction; lean on it to pull out color differences while matching a clean background plate against foreground footage. It's handy too for building mattes that drive trails of smoke, fire, or echo effects. Once you've applied the Time Difference effect to pinpoint color differences in the footage, Color Correction effects can carry out the corrections.

This effect works with 8-bpc color.

Note

Pair Time Difference with Particle Playground to shed particles from moving sections alone.

Target

Names the layer that gets compared to the effect layer. The comparison layer's video switch needn't be on (unless you pick the source layer as the Target).

Time Offset

Where in the comparison layer, in seconds, the layers are compared. Set this control to 0.00 and the comparison happens at the current time. To stack the effect layer against a point 3 seconds into the comparison layer, for example, set Time Offset to 3. Select the underlined offset value and you can type the exact frame-offset value in the format frames/frame rate. After Effects works out the value automatically. Enter 3/30, for instance, to jump three frames forward in a 30-fps composition. The computed value is 0.1, or 10% of the total time.

Contrast

Tunes the comparison result. For fine-tuning color corrections, this control can be especially useful.

Absolute Difference

Shows the comparison result as an absolute value. Black stands for any area of the comparison layer that matches the effect layer, while any degree of difference shows up brighter than black. Deselect this option and compared areas with no difference appear gray instead.

Alpha Channel

Sets how the alpha channel is computed.

- Original: Draws on the effect layer's alpha channel.

- Target: Draws on the target layer's alpha channel.

- Blend: Mixes together the alpha channels of the target layer and the effect layer.

- Max: Takes whichever alpha channel is more opaque.

- Full On: Makes the alpha channel opaque.

- Lightness Of Result: Takes the lightness of the RGB difference for the alpha.

- Max Of Result: Takes the top values of the RGB difference for the alpha.

- Alpha Difference: Works out the alpha-channel differences between the effect layer and target layer the same way the RGB difference is worked out.

- Alpha Difference Only: Works out the alpha-channel differences alone. RGB gets set to white.

## Time Displacement effect

Time Displacement effect

Time Displacement effect Displacement map layer

Displacement map layer

By sliding pixels across time, the Time Displacement effect warps the image and yields a broad range of results. The classic slit-scan technique, for example — which records the successive stages of a moving image across time — can be reproduced with the Time Displacement effect.

This effect works with 8-bpc and 16-bpc color.

Note

Once the Time Displacement effect is applied, any masks on that same layer are disregarded. Should you need to mask the layer, apply the effect first and then precompose it with the Move All Attributes into the New Composition option.

Much like the Displacement Map effect, the Time Displacement effect relies on a displacement map, but it ties the movement of the layer's pixels to luminance values in that map. Layer pixels matching bright regions of the displacement map are swapped for pixels at the same spot but a set number of seconds ahead in time. In the same way, layer pixels matching dark regions of the displacement map are swapped for pixels a set number of seconds behind in time. Any layer can serve as a displacement map, though a grayscale image makes brightness levels easier to see and pixel displacement easier to anticipate.

Without keyframes or expressions, the Time Displacement effect swaps pixels across time on its own. You can still animate other properties to vary the effect over time, though.

Picturing the displacement as a series of steps helps clarify how pixels get displaced in time.

After Effects lays the displacement map layer over the effect layer (the one you're distorting). When the displacement map's dimensions differ from the effect layer's, it's up to you whether the map gets centered or scaled to fit.

You name a maximum displacement amount, measured in seconds.

Working from the maximum displacement amount, After Effect reads each displacement-map pixel's luminance value and from it computes how far the matching pixel in the effect layer shifts.

In grayscale images the luminance value range runs from 0 to 255, which is remapped to a scale from -1 to 1. A luminance value of 0 yields maximum backward displacement, so pixels at the current time are replaced by pixels from an earlier time. A luminance value of 255 yields maximum positive displacement, so pixels at the current time are replaced by pixels from a later time. A luminance value of 128 yields no displacement. For the remaining values in grayscale displacement maps, the displacement amount, in seconds, comes from this equation:

Displacement amount in seconds = maximum_displacement_time _ (2 _ (luminance_value – 128) / 256)

After Effects displaces each pixel in the image by replacing a pixel in the image at the current time with the pixel in the same position at another time. The other time is the displacement amount in seconds for the pixel, calculated in step 3.

Say you set 2 seconds as the maximum time displacement. After Effects reads each pixel's luminance value in the displacement map, then swaps the matching pixels at the current time for pixels from another time keyed to that 2-second maximum. Within the displacement map, a luminance value of 255 pulls in, for that pixel's slot, the pixel located 2 seconds ahead. A luminance value of 42 pulls in, for that same slot, the pixel sitting 1.34 seconds behind.

Time Displacement Layer

Picks which layer serves as the displacement map.

Max Displacement Time (sec)

Sets the farthest reach, in seconds, ahead of or behind the current time from which pixels get pulled. The maximum time displacement comes only from luminance values of 0 or 255 — that is, maximum darkness and maximum brightness. Every other luminance value yields a time displacement under the maximum.

Time Resolution (fps)

Sets how many frames per second pixels are replaced at. As a rule, keep this value at or below the affected layer's frame rate. Pushing Time Resolution up can drive render time way up.

Stretch Map To Fit

Resizes the Time Displacement Layer so it matches the dimensions of whatever layer you're distorting. With this option off, the time displacement layer instead stays centered within the composition.

### Apply the Time Displacement effect

Bring up, in the Composition panel, both the layer you mean to distort and the displacement map layer.

Tuck the displacement map layer out of sight by clicking its video switch over in the Timeline panel.

Back in the Composition panel, click the layer you mean to distort.

Choose Effect > Time > Time Displacement.

Open the Time Displacement Layer menu — it shows every layer in the composition — and pick a displacement map from it. A grayscale map is the suggested choice.

The layer you pick is used by After Effects exactly as it stands, ignoring any masking, effects, or transformations applied to it. Want those changes baked into the displacement map? Precompose that layer first with the Move All Attributes into the New Composition option.

Fine-tune the Time Displacement controls.

### More like this

- Randomness and random seeds
- About masks
- Randomness and random seeds

## Timewarp effect

Timewarp effect

Timewarp effect

When you retime a layer's playback, the Timewarp effect hands you fine-grained control across many parameters at once — among them the interpolation method, motion blur, and edge cropping of the source to strip out unwanted artifacts. Reach for it for straightforward slow-motion or fast-motion looks, or for retiming that is far more involved. Note that Timewarp runs on its own, independent of the Frame Blending switch in the Timeline panel.

Note

- Once Timewarp is applied, the effect disregards any masks living on that same layer. If you need to mask the layer, apply the effect first and then precompose with the Move All Attributes into the New Composition option.
- Interlaced footage fields are not handled by Timewarp. So that the effect runs on a layer whose source is an interlaced footage item, double the composition's frame rate in its settings. Then, at render time, head to the Render Queue panel and adjust your render settings so the frame rate suits the output type.

Kronos — a piece of The Foundry's Furnace software package — is what Timewarp is built on. Thorough coverage of the motion vectors and motion-estimation parameters lives in the Furnace documentation (in PDF) on the Foundry website.

8-bpc and 16-bpc color are supported by this effect. With After Effects CS6, it operates in 32-bit color.

Note

There is a way to introduce motion blur into a video layer using Timewarp while leaving the layer's speed untouched: apply the effect, set Speed to 100, switch on motion blur inside the effect, and dial in the blur with the manual shutter controls.

Method

Shifting the frame rate means image data has to be invented — interpolated — for the frames sitting between an image's original frames. Which approach generates those interpolated frames is governed by the Method setting.

- Whole Frames: Repeats whichever frame was last displayed.

- Frame Mix: Blends the frames you already have into a new one.

- Pixel Motion: Builds a fresh frame by studying how pixels travel across neighboring frames and deriving motion vectors. A motion vector captures the shift of a pixel — or a block of them — from one frame to the next, and the in-between images are interpolated from these vectors.

Adjust Time By controls

Pick Speed to express the time adjustment as a percentage. Pick Source Frame to express it by stating which source frame should appear at which moment. Selecting Source Frame for Adjust Time By means you have to animate the Source Frame property; otherwise all you get is a freeze on a single frame. The Speed property can be animated as well, letting the time-remapping factor vary over the course of the clip.

Out of the box, Speed sits at 50 — a drop to 50% speed. Rather than pairing one original frame with one freshly made frame, this setting generates new frames at a quarter and three-quarters of a frame interval away from an original frame. Original frames are intentionally left out of the time-remapped sequence; otherwise a half-speed slowdown would show a visible pulse on every other frame.

Tuning controls for Pixel Motion interpolation

- Vector Details: Sets the count of motion vectors applied during interpolation. More vectors mean longer renders, and a value of 100 yields one vector for every pixel. Footage with fast motion can come out looking better at a lower Vector Details setting.

Smoothing

Image sharpness is governed by these controls:

- Build From One Image: Derives the final output from the single nearest frame instead of the two nearest frames, trading sharper images for choppier motion.

- Correct Luminance Changes: Levels out the luminance from frame to frame ahead of the motion calculation.

- Filtering: Sets how good the filtering is when the interpolated image is assembled. Extreme drives render time up sharply. Because Filtering touches only the final image's sharpness, stick with Normal until you reach final rendering.

Error Threshold

Sets how precisely pixels are matched between consecutive frames. Raising the value yields fewer motion vectors and more blending.

Note

Edge tearing in the picture can often be cured by raising the Error Threshold so that more blending occurs. Conversely, when an image carries heavy grain, lowering the Error Threshold tells the effect to disregard the grain's low-level motion.

Block Size

Sets how big the blocks are that the vector calculation works on.

Weighting

Governs how heavily the red, green, and blue channels count in the calculations that analyze the image. Set Red Weight and Green Weight to zero, for instance, and motion is analyzed from the blue channel alone.

Motion Blur controls

- Shutter Angle: Sets how strong the motion blur is. Expressed in degrees, the shutter angle mimics the exposure produced by a rotating shutter. The simulated exposure time equals the shutter angle divided by the frame rate times 360°. A shutter angle of 90°, for example, yields an exposure of 1/96 of a second per frame: 90° / (360° \* 24 fps).

- Shutter Samples: Sets the quality of the motion blur. The higher the value, the smoother the motion blur.

Matte Layer

The layer used as a matte to mark off the image's foreground and background regions. In the matte, white marks the foreground, black marks the background, and gray fades between the two.

Matte Channel

The channel to use as a matte.

Warp Layer

Lets you warp the layer carrying the effect by feeding it the motion vectors taken from a layer of your choosing.

Show

Sets which part of the layer gets time-remapped.

Source Crops

When unwanted pixels or artifacts cling to the edges of the image, the Source Crops controls let you define the image boundaries. Beyond those boundaries, the edge pixels are repeated outward to fill the layer.

### More like this

- Precompose layers
- Precomposing, nesting, and pre-rendering
- Composition settings
- Composition settings
- Render settings
