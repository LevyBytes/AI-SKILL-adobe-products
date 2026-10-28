# Roughen Edges effect

Roughen Edges chews up an alpha channel and can wash in color to fake rust and similar corrosion. The result lends rasterized text or artwork a believably ragged appearance, reminiscent of worn typewriter type.

Color support: 8-bpc.

Original (left), and with effect applied (right)

Edge Type

Which style of roughening gets used.

Edge Color

Which color goes on the edge for Rusty Color or Roughen Color, or onto the fill for Photocopy Color.

Border

The reach, in pixels, that the effect pushes inward from the alpha channel's edge.

Edge Sharpness

Smaller numbers yield softer edges; larger numbers yield sharper ones.

Fractal Influence

How much roughening is applied.

Scale

The scale of the fractal that drives the roughness calculation.

Stretch Width or Height

The width or the height of that fractal used in calculating the roughness.

Offset (Turbulence)

Picks which part of the fractal shape feeds the roughness.

Complexity

Sets how much detail shows up in the roughness.

Note

More complexity means longer renders. To land on comparable results, dial the Scale value down instead of pushing Complexity up.

Evolution

Keyframe this setting and the roughness shifts as time passes.

Note

The Evolution value is counted in units called revolutions, but keep in mind that those revolutions move forward only. Each fresh value carries the Evolution state onward without limit. Reach for the Cycle Evolution option whenever you need the Evolution setting to snap back to where it started at every revolution.

Evolution Options

These options give you controls that render the effect across one brief cycle and then repeat it for as long as your layer runs. Lean on them to pre-render your roughen elements into loops and shave render time. The controls below build a seamless, forward-moving loop that never visibly repeats:

Cycle Evolution

Builds a loop that drives the Evolution state back to where it began.

Cycle

How many revolutions of the Evolution setting the fractal runs through before repeating. The spacing of your Evolution keyframes sets the pace of the Evolution cycles.

Note

Since the Cycle control touches only the fractal's state and not geometrics or the other controls, varying the Size or Offset settings hands you different outcomes.

Random Seed

Sets the value the roughness texture is generated from. Keyframe this property and you get flashing between one batch of fractal shapes and another inside the same fractal type. For roughness that transitions smoothly, lean on the Evolution control instead.

Note

Spin up fresh roughness animations by recycling Evolution cycles you've already built and tweaking nothing but the Random Seed value. A new Random Seed value reshapes the noise pattern while leaving the Evolution animation alone.
