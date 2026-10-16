# Using the Repeater to replicate shapes

Virtual copies of every path, stroke, and fill above it in the same group are spun up by the Repeater path operation. No separate Timeline panel entries stand in for those virtual copies, yet the Composition panel renders them all the same. How each copy is transformed depends on its place within the set of copies together with the values in that Repeater instance's Transform property group.

Original shape (upper-left), one instance of the Repeater operation applied (upper-right), and two instances of the Repeater operation applied (lower-right)

Number the original shape 0, the next copy 1, and so on, and the Repeater's effect is to apply each Transform-property-group transformation n times to copy number n.

Take a Repeater applied to a shape with Copies set to 10 and the Repeater's Transform-group Position property set to (0.0, 8.0). The original shape holds its spot at (0.0, 0.0). The first copy lands at (0.0, 8.0), the second at (0.0, 16.0), the third at (0.0, 24.0), continuing on to the ninth copy at (0.0, 72.0)—ten shapes in all.

Several Repeater instances can run inside one group; in other words, the Repeater itself can be repeated. Stacking instances of the Repeater is a quick route to a grid of virtual copies of one shape: aim one instance's Position property at the horizontal values and another instance's at the vertical ones.

What the Offset property does is shift the transformations by a set number of copies. Say Copies is 10 and Offset is 3—then the original shape gets transformed by 3 times the amount in the Transform property group, and the final copy by 12 times that amount.

Note

Keyframing the Offset property is an easy path to interesting results.

Whether copies render above (in front of) or below (behind) the copies preceding them is set by the Composite option.

The Start Opacity value sets the original shape's opacity and the End Opacity value sets the last copy's; opacity for the copies in between is interpolated.

Drop the Repeater after a path but above a shape's fill and stroke property groups, and the whole set of virtual copies is filled or stroked as one compound path. Leave the Repeater under the fill and stroke, and each copy gets filled and stroked on its own. Gradient fills and strokes make the contrast clearest.

Note

Place a Wiggle Transform path operation after a Repeater operation to scramble (wiggle) the position, scale, anchor point, or rotation of the repeated copies inside a Repeater instance. When the Wiggle Transform path operation sits before (above) the Repeater path operation, every repeated shape gets wiggled (randomized) the same way. When the Repeater path operation sits before (above) the Wiggle Transform path operation, each repeated shape gets wiggled (randomized) on its own.

On his website, Chris Zwar shares an example project that pairs the Card Dance effect with a shape layer running the Repeater operation, simulating—for any video or still image—a halftone color separation.

### More like this

- About shapes and shape layers
- Groups and render order for shapes and shape attributes
- Select a color or edit a gradient
