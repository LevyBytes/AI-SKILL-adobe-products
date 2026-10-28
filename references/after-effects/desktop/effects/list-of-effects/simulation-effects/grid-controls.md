# Grid controls

The Grid spreads an unbroken plane of particles out from a set of grid intersections. Their motion rides entirely on the Gravity, Repel, Wall, and Property Mapper settings. Since Gravity's Force control is on by default, Grid particles drop toward the bottom of the frame.

Under the Grid, a fresh particle shows up on every frame at each grid intersection. You can't change that frequency, but to switch the Grid off or pause its particle output at set times, drop the Particle Radius and Font Size control to 0, or keyframe the values of the Particles Across and Particles Down controls. Raise Particles Across and Particles Down to put more particles in each frame.

Note

Out of the box, the Cannon is on and the Grid is off. While working with the Grid, halt the Cannon's particle output by setting its Particles Per Second value to 0.

Position

Names the (x,y) coordinates of the grid's center. Whether a grid particle turns out to be a dot, a layer, or a text character, it lands centered on its grid intersection the moment it's born. With text characters as particles, the Edit Grid Text dialog box has the Use Grid option on by default, dropping each character onto its own grid intersection so the usual character spacing, word spacing, and kerning don't apply. To place text characters at the grid position with normal spacing, pick a text alignment other than the Use Grid option.

Width, Height

Fix the grid's dimensions, in pixels.

Particles Across, Particles Down

Fix how many particles spread horizontally and vertically over the grid area. Particles appear only once the value reaches 1 or more.

Note

Should the Width, Height, Particles Across, and Particles Down controls be grayed out, the Use Grid option has been switched off in the Edit Grid Text dialog box.

Color

Fixes the color of dots or text characters. It does nothing when a layer feeds the particles.

Particle Radius/Font Size

Gives dots a radius in pixels and text characters a size in points. It does nothing when a layer feeds the particles.
