# Affects controls

Affects controls turn up inside many Particle Playground controls. What they do is name which particles their parent control will act on. Take the Affects controls nested in the Particle Exploder controls — they name which particles the Particle Exploder works on.

Particles From

Names the particle generator, or mix of generators, whose particles you intend to affect.

Selection Map

Names the layer map that shapes which particles get affected.

Note

The bounds of the layer Particle Playground is applied to do not confine the simulation space. A selection map bigger than the Particle Playground layer may be necessary so that it reaches dots sitting out of view.

Characters

Names the characters you intend to affect. It only matters when text characters serve as the particle type.

Older/Younger Than

Names the age cutoff, in seconds, past which (above or below) a particle should be affected. Positive numbers reach older particles; negative numbers reach younger ones. A value of 10, for instance, means a particle flips to the new value the moment it hits 10 seconds.

Age Feather

Names the span of seconds across which the Older/Younger Than cutoff gets feathered, or eased. Feathering yields a gradual shift rather than a sudden one. For instance, with Older/Younger Than at 10 and Age Feather at 4, roughly 20% of particles begin changing at 8 seconds old, 50% change at 10 seconds (the Older/Younger Than value), and the rest finish changing by 12 seconds old.
