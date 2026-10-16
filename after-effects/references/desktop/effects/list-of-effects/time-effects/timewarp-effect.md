# Timewarp effect

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
