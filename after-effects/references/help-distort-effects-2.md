# Distort Effects (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Use the Reshape effect

Open a layer in the Layer panel.

Give each mask a name you'll readily spot in the Mask menu over in the Effect Controls panel.

Over in the Timeline panel, set the Mode menu to None for every mask.

Place the boundary mask to mark the region of the image that stays untouched. The interior of the boundary mask gets distorted; whatever lies outside it is left alone. To steer clear of foldovers, hold the boundary mask as far away from the source and destination masks as you can.

5. Scale and position the source mask over the image.
   Size and place the destination mask to point out the final shape. Distortions come out best when the source and destination masks sit in roughly the same spot.

Bring the Composition or Timeline panel to the front, select the layer, then choose Effect > Distort > Reshape.

Using the Mask menus, pick the source, destination, and boundary masks.

Dial in the Percent control and settle on an option for Elasticity.

Within the Composition panel, add, remove, or reposition correspondence points on the masks to steer the distortion:

Adding a point: Alt-click (Windows) or Option-click (macOS) the mask.

Removing one: Alt-click or Option-click the point itself.

Relocating one: simply drag it wherever you want.

Flipping the interpolation of a point pair: Shift-click a point. Smooth interpolation suits round masks best, while linear interpolation suits angular masks best, and you can mix smooth and linear interpolation within one composition.

Settle on an interpolation method and preview the distortion. When Linear or Smooth gives unwanted results, throw in more keyframes; when Discrete gives unwanted results, switch to another method.

## Ripple effect

The Ripple effect makes ripples seem to spread across a chosen layer, radiating outward from a center point as concentric circles — much like tossing a stone into a pond. You can also direct the ripples to move inward toward that center point.

To animate ripples at a steady speed, use the Wave Speed control, which needs no keyframes to animate. For ripples that move at changing speeds, build keyframes for the Ripple Phase control instead.

This effect works with 8-bpc and 16-bpc color.

Radius

Governs how far the ripples spread from the center point. Stated as a percentage of the overall image size, the Radius value scales accordingly. When the ripple's center matches the layer's center and the radius reads 100, the ripples reach all the way to the image edge. At a value of 0, no ripples appear. Just as with ripples on water, the layer's ripples shrink the farther they spread from the center.

Note

For a single-wave ripple, set Radius to 100, Wave Width somewhere from 90 to 100, and Wave Height however you like.

Center Of Ripple

Sets where the center of the effect sits.

Type Of Conversion

Sets how the ripples get made. Asymmetric yields ripples that look more realistic; asymmetric ripples carry lateral motion and generate more distortion. Symmetric yields motion heading only outward from the center point, and symmetric ripples generate less distortion.

Wave Speed

Fixes the speed at which the ripples spread outward from the center point. Once you set a wave speed, the ripples animate on their own at a steady rate (no keyframes) over the time range. A negative value drives the ripples inward toward the center, and a value of 0 yields no movement. To make wave speed vary over time, leave this control at 0 and then build a keyframe for the layer's Ripple Phase property.

Wave Width

Sets the gap, in pixels, between wave peaks. Higher values yield long, rolling ripples, while low values yield many small ripples.

Wave Height

Sets how tall the ripple wave stands. Taller waves yield greater distortion.

Ripple Phase

Sets the spot along the waveform where a wave cycle starts. The default of 0° begins the wave at the midpoint of its downward slope; 90° begins it at the lowest point in the trough; 180° begins it at the midpoint of the upward slope, and so on.

## Smear effect

The Smear effect lets you mark off a region inside an image and then shift that region somewhere new, dragging and stretching the image around it along the way. Lean on masks to mark off the region you want to distort.

This effect works with 8-bpc and 16-bpc color.

Working with Smear starts by building or importing two masks: the source mask and the boundary mask. You can draw the masks on the layer right in After Effects, or bring in masks made in Adobe Illustrator. To reuse an Illustrator mask, copy it and paste it onto a layer in After Effects. Smear only handles closed masks; if a mask is an open trace, After Effects seals it shut when you select it. Both masks need to live on the same layer as the footage where the Smear effect is applied, though copying masks from another layer is fine.

As you shift the source mask across the image, Smear stretches whatever part of the image lies inside the boundary mask so it trails the edges of the source mask. The boundary mask works to shield the image beyond it from getting stretched. The Composition panel shows both the source mask's starting position (set in the Layer panel) and its offset position: a light red outline flags the first position of the source mask, while a dark outline flags the new one.

The source mask's position, size, and rotation can all be animated as it travels to its offset position, and you can likewise animate the source mask's original position over in the Layer panel.

Certain settings can stretch processing out to several minutes. The closer the source mask creeps toward the boundary mask, the longer computation takes. Selecting a control halts processing.

Source Mask

Names a mask to serve as the source mask. By default, the second mask you draw or import for the layer is the one After Effects picks as the source mask.

Note

To produce a distortion, name both a boundary mask and a source mask.

Boundary Mask

Names a mask to serve as the boundary mask. By default, the first mask you draw or import is the one After Effects picks as the boundary mask.

Mask Offset

Names a destination position for the source mask. Expressed through x and y coordinates that show up to the right of the Offset button, the offset is a position you set by selecting the Offset button and then clicking the image at the spot you want. To pin the offset down numerically, type a fresh value per axis. When the precision of Mask Offset isn't needed, you can just drag the source mask offset around the Composition panel.

Note

Stray undulations can show up when the source mask sits close to the boundary mask while animating.

Mask Rotation

Spins the source mask about its center point, anywhere from 0° to 360°.

Mask Scale

Sizes the source mask (at its offset position) up or down, relative to its starting position.

Percent

Sets what share of the smear gets carried out. With Percent at 50%, for instance, Smear completes half the smear you've called for by moving, scaling, and rotating the source mask. This value leaves the source mask's original and offset positions untouched; it touches only the share of the effect that runs.

Elasticity

Sets how tightly the image tracks the shape the curve lays out. Stiff distorts the least, whereas Super Fluid distorts the most. As a rule, go with the stiffest setting that still avoids polygonal images.

Interpolation Method

Sets a method for the interpolation Smear runs between keyframes. Linear needs two or more keyframes and runs a straight-line interpolation across them. Discrete yields animations where the distortions shift at keyframes. Smooth needs three or more keyframes and approximates the distortion with cubic curves, yielding distortions that move gracefully. Should you need extra precision in the between-keyframe animation, add more keyframes. A distortion standing for a 90-degree rotation across two keyframes, for example, shows up as a fold in the image; to smooth that distortion out, drop in a keyframe every 10°.

## Use the Smear effect

Open a layer inside the Layer panel.

2. Draw or paste in the pair of masks you'll treat as the boundary mask and the source mask.
   Place the boundary mask to mark the region of the layer you'd rather Smear left alone.

3. Size and place the source mask over whatever area you intend to relocate.
   Bring the Composition panel to the front, and choose Effect > Distort > Smear.

Type a Percent value to fix how much smear gets applied.

Within the Composition panel, shift the source mask to its destination position either by dragging it or by relying on the Mask Offset value.

Spin the source mask with the Mask Rotation control and resize it with the Mask Scale control.

Drag the Percent slider however you need, and settle on a setting for Elasticity.

## Spherize effect

The Spherize effect warps a layer by draping a region of the image over a sphere. A layer's quality setting bears on the Spherize effect: Best quality samples the displaced pixels down to subpixel precision, while Draft quality samples only to the closest whole pixel.

This effect works with 8-bpc and 16-bpc color.

## Transform effect

The Transform effect lays two-dimensional geometric transformations onto a layer, rounding out the transform properties each layer already carries in the Timeline panel. The Anchor Point, Position, Rotation, Scale, and Opacity properties behave much as the layer transform properties do in the Timeline panel.

For this layer, you can set the motion-blur shutter angle on its own, apart from the composition's shutter angle. (For that to matter, motion blur has to be switched on for both the layer and the composition.)

Note

Because this effect is reckoned relative to the input layer, rotating a layer about its upper left corner means opening the layer in the Layer panel, choosing Transform from the Layer panel menu, and then shifting both the position and the anchor point over to that corner.

This effect works with 8-bpc and 16-bpc color.

Skew

Skew amount.

Skew Axis

The axis about which skew occurs.

## Turbulent Displace effect

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

## Create a seamless loop using Turbulent Displace

Lay down two keyframes for the Evolution control, sticking to full revolutions only.

Tune the spacing between keyframes and the count of Evolution revolutions until the displacement looks the way you want.

Select Cycle Evolution.

Pick a Cycle value that divides evenly into the number of revolutions you assigned to Evolution.

Within the Timeline panel, drag the current-time indicator to the moment the cycle wraps up. If the Cycle value is 2, for instance, locate the frame where the Evolution value reads 2 revolutions.

6. Back the current-time indicator up by a single frame so the seamless loop won't carry a duplicate frame.
   Hit the right bracket key (]) to clip the layer Out point to the current time.

7. Render this layer ahead of time, then bring it into the project.
   Should you have set keyframes for any of the other controls, you have to send them back to their starting settings at the point on the Timeline panel where the cycle starts repeating; otherwise those properties won't loop.

## Twirl effect

The Twirl effect warps an image by spinning a layer about its center, bending the image harder near the center than out at the edges — which yields a whirlpool look at the extremes. Since this effect distorts so heavily, After Effects brings in special anti-aliasing techniques to keep image quality at its highest, and as a consequence the Twirl effect can render especially slowly.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Angle

How far the image gets twirled. Positive angles spin the image clockwise; negative angles spin it counterclockwise. For a whirlpool look, animate the angle.

Twirl Radius

How far the twirl reaches out from the twirl center. The value is a percentage of the layer's width or height, whichever runs larger. A value of 50, say, produces a twirl that stretches to the layer's edges.

## Warp effect

Lean on Warp to distort or deform layers. Its warp styles behave much as two familiar features do elsewhere — the Warp effects in Adobe Illustrator and Warp Text in Adobe Photoshop.

This effect works with 8-bpc and 16-bpc color.

Warping a layer

Warping a layer

## Warp Stabilizer effect

Warp Stabilizer is a fresh option for steadying shaky footage. For details, see Stabilize motion with the Warp Stabilizer effect (CS5.5 and later).

## Wave Warp effect

The Wave Warp effect makes a wave appear to roll across an image. A range of wave shapes is possible, square, circular, and sine among them. Wave Warp animates on its own at a steady speed over the time range (no keyframes or expressions needed); to change the speed, set keyframes or expressions.

This effect works with 8-bpc and 16-bpc color.

Wave Type

The shape of the wave.

Wave Height

The distance, in pixels, between wave peaks.

Wave Width

The size of the wave in pixels.

Direction

The direction the wave travels across the image. A value of 225°, for example, sends the waves traveling diagonally from upper right toward lower left.

Wave Speed

How fast the waves travel, measured in cycles per second. A negative value flips the wave direction, and a value of 0 yields no movement. To make wave speed vary over time, leave this control at 0, then set keyframes or expressions on the Phase property.

Pinning

Which edges to pin so the pixels running along them stay put.

Phase

The spot along the waveform where a wave cycle starts. At 0°, for instance, the wave begins at the midpoint of its downward slope, and at 90° it begins at the lowest point in the trough.

Antialiasing

Fixes how much anti‑aliasing, or edge smoothing, gets applied to the image. Lower settings often give satisfactory results, while a high setting can drive rendering time way up. Anti-aliasing runs only when the layer quality setting is Best.

## Third-party effects

The third-party effects bundled into this category with After Effects are these:

CC Bend It effect

CC Bender effect

CC Blobbylize effect

CC Flo Motion effect

CC Griddler effect

CC Lens effect

CC Page Turn effect

CC Power Pin effect

CC Ripple Pulse effect

CC Slant effect

CC Smear effect

CC Split effect

CC Split 2 effect

CC Tiler effect

See Third-party plug-ins included with After Effects.

### More like this

- Tracking and stabilizing motion (CS5)
- Motion blur
