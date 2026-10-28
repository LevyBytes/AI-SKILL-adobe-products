# Radio Waves effect

Radiating waves emanate from an effect control point — stationary or animated — when you apply the Radio Waves effect. Reach for it to build pond ripples, sound waves, or elaborate geometric patterns. The Reflection control lets the shapes ricochet off the layer's edges. Radio Waves is also handy for producing convincing wave displacement maps that pair nicely with the Caustics effect.

In a demonstration, Satya animates the mask that supplies the radio wave shape. He shows as well that pushing Frequency very high — paired with thoughtfully tuned Fade-in Time and Fade-out Time values — yields smooth, organic contours instead of separate discrete waves.

This effect works with 8-bpc color.

Polygon wave type with square stroke profile (lower-left), and Image Contour wave type with Sine stroke profile (lower-right)

Producer Point

Where the waves originate.

Parameters Are Set At

Governs whether individual waves can have animated parameters. With Birth, every wave holds onto the same parameter settings as time passes. With Each Frame, the waves shift right along with the changing parameters. Say you build a star wave whose rotation property is animated: pick Birth to stagger each star behind the one before it, forming a twisting tunnel, or pick Each Frame so all stars spin together as the rotation property updates.

Render Quality

Sets how good the output looks. To produce smooth, anti-aliased shapes, Radio Waves renders the shapes at high resolution and then scales them back down through oversampling. Building a 100x100-pixel image, for instance, might mean generating a 400x400-pixel image first and shrinking it with 4x oversampling. The trade-off for that high quality is lengthy render times. Only Best quality mode supports this option.

Wave Type

The basis for the wave shape.

Polygon

Which polygon serves as the wave shape. You reach these controls when Polygon is selected for Wave Type.

Sides

A triangle comes from three sides, a square from four, and so on. Push the Size value past 64 and you get a smooth circle. Another route to a near-circle: set Sides to 3, Curve Size to 1, and Curvyness to roughly 0.62.

Curve Size

Sets the portion of each side that curves at every point.

Curvyness

Sets how pronounced the curve becomes at each point of the wave.

Star

Turns the polygon into a star shape. Adjust the number of sides to change how many points the star has.

Star Depth

Shapes a star's angles by setting the gap between its inner points and its center.

Mask

The mask that builds a wave. You reach this control by picking Mask from the Wave Type pop-up menu.
