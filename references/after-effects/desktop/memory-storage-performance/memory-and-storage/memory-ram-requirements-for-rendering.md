# Memory (RAM) requirements for rendering

Rendering any frame — for a preview or for final output — demands memory that scales with whichever layer in the composition is the heaviest memory consumer.

Compositions render in After Effects one layer per frame at a time. That's why, in judging whether a particular frame fits within available memory, an individual layer's memory footprint matters more than the composition's length or its layer count. A composition's memory need amounts to the memory need of its single most memory-hungry layer.

A layer's memory needs climb under any of these conditions:

Raising the project's color bit depth

Bumping up the composition resolution

Working from a larger source image

Switching on color management

Attaching a mask

Applying per-character 3D properties

Precomposing while leaving transformations uncollapsed

Reaching for blending modes, layer styles, or effects — particularly any that span several layers

Turning on output options like 3:2 pulldown, cropping, and resizing

Casting shadows or depth-of-field effects on 3D layers

Each frame has to sit in one unbroken block of memory; After Effects can't split a frame across fragmented memory.

Note

Improve performance by simplifying your project covers ways to trim memory needs and lift performance.
