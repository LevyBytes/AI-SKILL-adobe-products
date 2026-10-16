# Changing a particle over its lifespan

A handful of controls shape the particle right from birth — Cannon, Grid, Layer Exploder, and Particle Exploder. The rest act on it once it's alive, throughout its lifespan — Gravity, Repel, Wall, Persistent Property Mapper, and Ephemeral Property Mapper. Striking a balance among these controls is what gives you complete command over how particles move and look.

Suppose you'd like the Cannon to fire sparks that dim as they age; you might assume animating the Cannon's Color control is all it takes. That approach, though, only recolors each particle at the instant it's born. For color that persists across a particle's lifespan, build a layer map and reach for one of the Property Mappers to drive the particles' color channels.

What follows runs through typical particle behaviors and the levers that govern them.

Speed

When a particle is born, the Cannon and the explorers establish its velocity — Grid particles begin with none. Once born, turn to the Force control inside the Gravity and Repel groups. Individual particle speed can also be shaped through a layer map that drives the Speed, Kinetic Friction, Force, and Mass properties within the Property Mappers.

Direction

At birth, the Cannon supplies a particle's direction — the Layer Exploder and Particle Exploder scatter new particles every which way, while Grid particles begin with none. Afterward, direction responds to the Direction control in the Gravity group or to a Boundary (mask) named in the Wall group. Per-particle direction can likewise be shaped via a layer map feeding the Property Mappers' Gradient Force, X Speed, and Y Speed properties.

Area

Reach for a Wall mask to hold particles within a separate region or to strip away every barrier. A layer map driving the Gradient Force property in the Property Mappers can also pen particles into an area.

Appearance

At birth, the Cannon, Grid, Layer Exploder, and Particle Exploder fix particle size unless a layer map stands in for the default dots. Initial color comes from the Cannon and Grid, whereas the Layer Exploder and Particle Exploder inherit color from whatever dot, layer, or character exploded. Text's starting look is governed by the Options dialog box. Past birth, the Property Mappers let you set Red, Green, Blue, Scale, Opacity, and Font Size.

Rotation

At birth, neither the Cannon nor the Grid imparts rotation; the Particle Exploder inherits rotation from the dot, layer, or character it explodes. Switch on Auto-Orient Rotation so particles turn to follow their own paths automatically. A particle might, for example, aim upward while climbing an arc and aim downward on the way back down. On a dot particle, rotation barely registers — it shows clearly only after you swap the dot for text characters or a layer. Once born, drive the Angle, Angular Velocity, and Torque properties through a layer map in the Property Mappers.

Note

Auto-Orient Rotation is reached by choosing Options for the Particle Playground effect within the Effect Controls panel.
