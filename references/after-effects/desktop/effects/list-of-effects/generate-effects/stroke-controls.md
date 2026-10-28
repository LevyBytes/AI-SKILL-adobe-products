# Stroke controls

How a wave's stroke looks is set by the Stroke controls.

Profile

Governs how the shape-defining stroke appears. As the wave radiates from the effect point, the shape's outline is animated. Stroke quality is treated as a 3D wave type.

Color

Sets the stroke's color.

Opacity

Sets the highest opacity the stroke can reach. Its real opacity weighs this setting alongside the Fade-in Time and Fade-out Time controls.

Fade-in Time

Sets how long the wave takes to fade into view. Measured in seconds, Fade-in Time starts at 0 opacity when the wave is born. With a Lifespan of 3 seconds and a Fade-in Time of 1 second, for example, the stroke is fully transparent at birth and climbs smoothly to full opacity by the 1-second mark.

Fade-out Time

Sets how long the wave takes to fade from view. Fade-out Time counts backward from the end of the Lifespan. Given a Lifespan of 3 seconds and a Fade-out Time of 1 second, the wave starts fading at 2 seconds. Should Fade-in Time plus Fade-out Time exceed the Lifespan value, the point where the two fades meet is computed so the wave never goes fully transparent. And if either Fade-in Time or Fade-out Time runs longer than the Lifespan, that figure is clipped down to match the Lifespan.

Start Width

Sets the shape's width at birth. End Width sets the shape's width at the close of its lifespan.
