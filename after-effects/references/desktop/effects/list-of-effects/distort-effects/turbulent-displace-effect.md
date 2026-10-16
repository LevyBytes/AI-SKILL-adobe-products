# Turbulent Displace effect

The Turbulent Displace effect taps fractal noise to spin up turbulent distortions in an image. Reach for it when you want effects such as waving flags, the warp of a funhouse mirror, or the look of flowing water.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Displacement

Which kind of turbulence gets used. Turbulent Smoother, Bulge Smoother, and Twist Smoother carry out the identical operations to Turbulent, Bulge, and Twist, the difference being that they yield gentler warps at the cost of slower rendering. Vertical Displacement confines the warp to the vertical axis. Horizontal Displacement confines it to the horizontal axis. Cross Displacement applies the warp along both axes at once.

Amount

Crank this up for heavier distortion.

Size

Raise this to spread the distortion across wider areas.

Offset (Turbulence)

Pins down which slice of the fractal shape goes into building the distortion.

Complexity

Pins down how much detail lives in the turbulence. Lower values cause smoother distortions.

Evolution

Animate this setting and the turbulence shifts over time.

Note

Even though the Evolution value is measured in units called revolutions, bear in mind these revolutions are progressive — the Evolution state keeps advancing endlessly at each new value. Lean on the Cycle Evolution option to send the Evolution setting back to its original state at every revolution.

Evolution Options

Evolution Options hand you controls that render the effect across one brief cycle and then loop it for the length of the layer. Use them to pre-render turbulence elements into loops, which cuts rendering time.

Cycle Evolution

Builds a loop that drives the Evolution state back to where it started.

Cycle

How many revolutions of the Evolution setting the fractal runs through before repeating. The spacing of time between Evolution keyframes dictates the timing of the Evolution cycles.

Note

Since the Cycle control touches only the fractal's state — not geometrics or other controls — you can land different results with different Size or Offset settings.

Random Seed

Names a value to seed the fractal noise from. Animating this property triggers flashing from one batch of fractal shapes to another (within the same fractal type), which usually isn't what you're after. For the fractal noise to transition smoothly, animate the Evolution property instead.

Note

Spin up turbulence animations by recycling Evolution cycles you built earlier and altering only the Random Seed value. A fresh Random Seed value reshapes the noise pattern while leaving the Evolution animation undisturbed.

Pinning

Names which edges to pin so the pixels running along them stay put.

Resize Layer

Lets the distorted image spill past the layer's original bounds.
