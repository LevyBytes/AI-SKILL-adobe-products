# Layer Exploder and Particle Exploder

The Layer Exploder bursts a layer into new particles, while the Particle Exploder bursts one particle into more. Beyond explosion effects, the exploders also come in handy for faking fireworks or for swelling the particle count fast.

These pointers can help you rein in the particles an explosion throws off:

A layer bursts once per frame. Left alone, that yields an unbroken shower of particles across the composition's length. To start or stop a layer explosion, keyframe the Radius of New Particles control so its value sits at zero whenever you want no particles made.

When a nested composition feeds the layer, you can give the layers inside it different Opacity values or In and Out points to render the exploding layer transparent at various moments. Where the source layer is transparent, the Layer Exploder makes no particles.

To reposition the exploding layer, precompose it at its new position (using the Move All Attributes Into The New Composition option), then feed that precomposed layer as the exploding layer.

When particles burst, the new ones take on the position, velocity, opacity, scale, and rotation of the originals.

After layers or particles burst, the Gravity, Repel, Wall, and Property Mapper controls drive the particles' movement.

Note

A few Persistent Property Mapper and Ephemeral Property Mapper options can lend explosions more realism. Shift Opacity, for instance, to fade the resulting particles out, or shift the Red, Green, and Blue color channels so they change color as though cooling.

Explode Layer

(Layer Exploder only) Names the layer you mean to burst. To make the video vanish the instant the particles appear, either switch the layer's video off or trim its Out point.

Radius Of New Particles

Fixes the radius of the particles the explosion throws off. This figure has to stay below the radius of the original layer or particle.

Velocity Dispersion

Fixes, in pixels per second, the top speed of the band within which Particle Playground varies the resulting particles' velocity. High values give a more scattered, cloudlike blast. Low values pack the new particles together and can make the burst read like a halo or shockwave.

Affects

Names which particles the Layer Exploder and Particle Exploder act on.
