# Particle properties controlled by layer maps

Pick any of the properties below and the particle receives a value that Particle Playground lifts off the layer map (that is, whatever layer you chose in the Use Layer as a Map menu).

None

Changes no particle property.

Red, Green, Blue

Pull a particle's red, green, or blue channel value, held to a 0.0–1.0 range.

Kinetic Friction

Copies how much resisting force opposes a moving object, usually within a range of 0.0–1.0. Raise it to brake moving particles, slowing or halting them.

Static Friction

Copies how much inertia pins a still particle in place, usually within a range of 0.0–1.0. At zero, any other force such as gravity will set a particle moving. Raise it and a stationary particle needs more of some other force before it budges.

Angle

Copies the direction the particle faces, in degrees measured from the particle's starting angle. The angle reads clearly when the particle is a text character or a layer lacking radial symmetry.

Angular Velocity

Copies how fast a particle spins, in degrees per second. This figure governs the rate at which a particle turns about its own axis.

Torque

Copies the rotational force on a particle. A positive torque raises a particle's angular velocity, and raises it more sluggishly the heavier the particle. Brighter pixels drive angular velocity harder; pile on enough torque against the angular velocity and the particle begins spinning the other way.

Scale

Copies a particle's scale value along both the x and y axes at once. Use it to stretch a particle uniformly. At 1.0 the particle sits at full size; at 2.0 it reaches 200%, and so on.

X Scale, Y Scale

Pull a particle's scale value on the x or y axis alone. Lean on these to stretch a particle sideways or up and down.

X, Y

Pull a particle's position on the frame's x or y axis, measured in pixels. Zero lands a particle at the frame's left edge (for X) or its top edge (for Y).

Gradient Velocity

Copies how velocity is adjusted according to regions of a layer map, across both the x and y planes of motion.

X Speed, Y Speed

Pull a particle's sideways speed (x-axis velocity) or up-and-down speed (y-axis velocity), in pixels per second.

Gradient Force

Copies how force is adjusted according to regions of a layer map, across both the x and y planes of motion. A color channel's pixel brightness values spell out the resistance to particle force pixel by pixel, so the channel behaves like a terrain of hills and valleys that lower or raise particle force. Spots of matching brightness in the layer map produce no change, like flat ground. Darker pixels mean less resistance to a particle's force, like a downhill slope. Brighter pixels mean more resistance, like an uphill slope. A soft-edged layer map image works best.

When you've got a layer map driving Gradient Force where flat regions mean no change, and you're setting that property's range with the Min and Max controls (rather than the Min or Max operators), give them the positive and negative of one number — say, –30 and +30. Doing so keeps the range's midpoint anchored at zero.

X Force

Copies the push along the x axis of motion. Positive values shove a particle rightward.

Y Force

Copies the push along the y axis of motion. Positive values shove a particle downward.

Opacity

Copies how transparent a particle is, with zero being invisible and 1 being solid. Tweak it to fade particles in or out.

Mass

Copies a particle's mass, which plays against every property that tweaks force — Gravity, Static Friction, Kinetic Friction, Torque, and Angular Velocity among them. Heavier particles demand more force to get moving.

Lifespan

Copies how long, in seconds, a particle has already existed. Once its lifespan runs out, the particle drops from the layer. By default the lifespan is essentially endless.

Character

Copies the value matching an ASCII text character, swapping it in for the current particle. This only applies when text characters serve as particles. Choose which characters show up by painting or drawing shades of gray on the layer map that line up with the ASCII characters you're after. Zero yields no character. For US English characters, stay in the range 32–127. The full span of values can hold Japanese characters too. To learn the ASCII character values for whatever font you're using, consult the font's documentation, run a utility like Character Map (Windows), or reach out to the font's maker.

Should you merely want certain characters to spell something out, it's far simpler to type the text right into the Options dialog box. The Character property earns its keep more as a hidden-message trick where you scramble text characters.

Font Size

Pulls the characters' point size. Relevant only where text characters act as particles. Push it up to grow the characters.

Time Offset

Copies the Time Offset value the Layer Map uses. This applies only when the Layer Map control points to a multiframe layer (a movie, say) as a particle source.

Scale Speed

Copies a particle's scale. Positive values grow the particle while negative values shrink it. The growing or shrinking happens at a percentage per second.

Related: [Particle Playground property mapping](use-particle-playground-property-mapper-controls.md).
