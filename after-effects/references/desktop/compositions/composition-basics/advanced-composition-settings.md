# Advanced composition settings

- Click an arrow button to pin layers against a corner or edge of the composition as its size changes.

  - So a composition holds onto its own resolution or frame rate rather than picking up whatever the outer composition uses. Say you purposely ran a low frame rate in a composition to land a jerky, hand-drawn feel — that frame rate has to be preserved once the composition gets nested. Rotoscoping work runs into the same trap, looking off once it lands at a different frame rate or resolution. Go with this setting rather than the Posterize Time effect, which costs more to run.

  - Shutter angle: Stated in degrees, the shutter angle mimics the exposure a spinning shutter lets through. It leans on the footage frame rate to work out that simulated exposure, and that in turn drives how much motion blur shows up. Punch in 90° (25% of 360°) against 24-fps footage, for example, and you land an effective exposure of 1/96 of a second (25% of 1/24 of a second). At 1° there is next to no motion blur; at 720° the blur piles on heavily.
  - Shutter phase: Measured in degrees as well, the shutter phase sets an offset governing the moment the shutter opens against the start of a frame. Tweaking it comes in handy when an object carrying motion blur looks like it trails behind where that same object sits without motion blur.
  - Samples per frame: The floor on samples. After Effects falls back to this count on any frame where it can't work out an adaptive sampling rate from the layer's motion. It is the sample rate that 3D layers and shape layers run on.
  - Adaptive sample limit: The ceiling on samples.

For details on individual Advanced composition settings that aren't covered here, head to the related sections:

- Specify resolution to use for rendering shadows
- Preferences and composition settings that affect nested compositions
- Motion blur
