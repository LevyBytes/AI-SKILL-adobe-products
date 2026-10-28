# Improving performance with Particle Playground

Bear the following in mind as you work with the Particle Playground effect:

While building a Particle Playground effect, watch the Info panel to track how many particles are coming into being. Once an effect runs past 10,000 particles, rendering can bog down badly. Spot performance trouble and you should dial Particles Per Second and/or Particles Down down to fairly low figures (in the range 1–100).

Because the Grid and Layer Exploder spawn particles on every single frame, they can churn out more than your effect needs and drag rendering down. To stop the endless spawning, animate these controls down to zero over time – Layer Exploder, Radius of New Particles, Grid Width and Height, Particle Radius, and Font Size. After that, Particle Playground only spawns fresh particles at a sequence's start.

Applying a Particle Playground effect to a layer doesn't pin particle positions to that layer's edges. To rein in particles you can't see or that crowd the image's border, use a Selection or Property Map larger than the Particle Playground layer's area. Keep in mind too that After Effects factors in an image map's alpha channel. To let your map's transparent zones act on the particles, precompose the map layer over a black solid.

To turn on field rendering with a Particle Playground effect, pick Enable Field Rendering inside the Particle Playground options dialog box. From then on, Particle Playground runs the simulation at twice the current composition's frame rate, exactly what field rendering calls for.
