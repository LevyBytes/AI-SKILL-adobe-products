# Simulation Effects (part 3)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Changing a particle over its lifespan

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

## Gravity controls

Gravity controls drag the particles already present toward a direction of your choosing. The particles pick up speed as they head that way. Aim it vertically for falling matter like rain or snow, or for rising matter like champagne bubbles; aim it horizontally to mimic wind.

Force

Sets how strong gravity is. Raising the value strengthens the pull on particles; lowering it into negative territory weakens that pull.

Force Random Spread

Sets a band of randomness around the Force. Keep it at zero and every particle drops at one rate. Push it higher and the descent rates vary slightly between particles. True gravity speeds up all objects identically, yet a larger Force Random Spread can read more naturally for things like leaves drifting down, where air resistance is sufficient to spread out how fast they fall.

Direction

Sets the angle gravity pulls along. It defaults to 180°, which mirrors reality by tugging particles toward the frame's bottom.

Affects

Names which slice of the layer's particles Gravity acts on.

## Repel controls

Repel controls govern the way particles close together push apart or draw toward one another. The effect mimics giving every particle a positive or negative magnetic charge. You get to designate which particles, layers, or characters do the repelling and which get repelled.

Note

To drive a whole layer of particles clear of a particular region, turn to the Property Mapper controls, Wall, or Gradient Force.

Force

Sets the repel force. Larger values push particles apart harder. Drop into negative values and particles attract instead.

Force Radius

Sets the radius, in pixels, inside which repulsion happens. For a particle to be repelled, another must fall within that radius.

Repeller

Names the particles that serve as repellers or attractors toward a second subset you designate with the Affects control.

Affects

Names which slice of the layer's particles repulsion or attraction acts on.

## Wall controls

Wall controls fence particles in, capping the region they're free to travel within. The wall itself is a sealed mask you draw with a mask tool such as the Pen tool. A particle striking the wall rebounds at a velocity that reflects how hard it struck.

Boundary

Names the mask that serves as the wall. Drawing a fresh one on the effect layer creates a new mask.

## Affects controls

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

## Use Particle Playground Property Mapper controls

Specific properties of individual particles can be steered through a layer map together with either the Persistent Property Mapper or the Ephemeral Property Mapper. There's no way to edit one particular particle on its own, but a layer map lets you dictate what becomes of any particle that crosses a given pixel of the layer. Particle Playground reads each layer map pixel's brightness as a particular value. The Property Mapper ties a given layer map channel (Red, Green, or Blue) to a given property, so that the brightness at a pixel reshapes the property as a particle drifts over it.

There are two ways a particle property can change — persistently or ephemerally:

A persistent change holds onto the latest value a layer map assigned for the rest of the particle's lifespan, unless some other control like Repel, Gravity, or Wall alters the particle. Say you drive particle size with a layer map and animate that map off the edge of the frame; the particles retain the final size value the map set even after it has left.

An ephemeral change snaps the property back to its starting value at the end of every frame. Say you drive particle size with a layer map and animate it off-frame; each particle reverts to its original size the instant no layer map pixels line up with it. In the same way, apply an operator such as Add, and the layer map pixel's value gets added to the particle's original value every time the particle crosses a fresh pixel.

Within both the Persistent and Ephemeral Property Mappers, a single RGB image used as a layer map lets you steer as many as three particle properties on their own. Particle Playground pulls this off by reading brightness independently from the image's red, green, and blue channels. You needn't engage all three channels when only one property needs changing. To alter just one property, or to alter up to three using identical values, use a grayscale image for the layer map, since its RGB channels match.

Paired with keyframes or expressions, the Property Mappers hand you total control over individual particle properties across both space and time. Layer maps let you shift particle properties anywhere inside a frame. Apply keyframes or expressions to the Property Mapper options and animate a layer map, and you govern how the particle properties evolve.

For Use Layer As Map, pick a layer map to act as the source of the values that modify particle values. That layer map has to belong to the composition.

To restrict the effect to a slice of particles, configure the Affects controls as needed.

Assign a property to every one of these controls: Map Red To, Map Green To, and Map Blue To. There's no need to map a property onto each color channel. To shift scale over an image map, say, you could tie red to scale and leave the rest alone.

Enter the minimum and maximum values you'd like the layer map to yield for each Map To group. Min is what a black pixel maps to, and Max is what a white pixel maps to. Everything in the tonal range between Min and Max then scales in proportion.

With the Ephemeral Property Mapper, you can run an operator across the value of a particle property and the value of its matching layer map pixel.

Since particle properties come in all sorts of units — pixels, degrees, seconds — you might need to squeeze or widen the range of values coming off the layer map so every resulting value fits the measurement system of a given particle property. Start with the Min and Max controls, which set the band of values drawn from the layer map. Should you need to fine-tune further while on the Ephemeral Property Mapper, use the Operator control and pick a mathematical operator to boost, dampen, or cap a layer map's influence.

Within both the Persistent and Ephemeral Property Mappers, a layer map's alpha channel lets you make gentler adjustments to a particle property's value. As an example, particles sitting over a layer-map pixel whose alpha value is 255 feel the full effect, while lower values affect them less. Layer-map pixels that are fully transparent leave particle properties alone.

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

## Min and Max controls for Property Mappers

Should the layer map's overall span of brightness values run too broad or too tight, lean on Min and Max to stretch, squeeze, or slide the range of values it puts out. Here are some situations where tuning Min and Max comes in handy:

You'd like your text's smallest font size to be 10 points and its largest to be 96 points. Put Min at 10 and Max at 96.

You give a particle a starting color and then drive color changes with a layer map. If the shifts feel too tame, drop the Min value and lift the Max value to sharpen the contrast between colors.

You give a particle a starting velocity and then drive the X Speed value with a layer map. But the gap between your quickest and slowest particles turns out too wide. Lifting Min and lowering Max for the layer map channel mapped to X Speed tightens the spread of particle speeds.

You drive the Scale property with a layer map and discover the smallest particles still aren't small enough while the largest ones come out too big. Here the whole output range has to slide downward; bring both Min and Max down.

You've got a layer map that pushes particles the wrong direction. Trade the Min and Max values, which works the same as inverting the layer map.

Note

The Persistent and Ephemeral Property Mappers treat the layer map's alpha channel as their selection map.

## Operator controls for the Ephemeral Property Mapper

With the Ephemeral Property Mapper controls in play, Particle Playground swaps a particle property's value for whatever the layer map pixel under the particle's present spot represents. You can also boost, dampen, or cap the outcome by naming a mathematical operator and then drawing on both the particle property's value and its matching layer map pixel value.

- Set: Swaps a particle property's value for that of the matching layer map pixel. For instance, reach for Set to replace a particle property's value with the brightness at the matching pixel on the layer map. It's the most predictable operator and the one used by default.

- Add: Takes the particle property's value and the matching layer map pixel's value and uses their sum.

- Difference: Uses the absolute value of how far the particle property's value sits from the brightness at the matching layer map pixel. Taking the absolute value keeps the outcome positive at all times. That makes it handy when you need to hold values to positives only. For modeling lifelike behavior, though, Difference may fall short.

- Subtract: Begins with the particle property's value and takes away the brightness at the matching layer map pixel.

- Multiply: Takes the particle property's value times the brightness at the matching layer map pixel and uses what results.

- Min: Weighs the layer map's brightness against the particle property's value and keeps whichever is lower. To hold a particle property at or under some value, pick the Min operator and set both Min and Max to that value. If a white solid serves as the layer map, you need only set Max to that value.

- Max: Weighs the layer map's brightness against the particle property's value and keeps whichever is higher.

Note

To boost properties' existing values, give the Add operator positive values a try, or the Multiply operator with values over 1.0. To dampen (tone down) how much a property value shifts, try the Multiply operator with values in the range 0.0–1.0.

## Control layers for Particle Playground

A control layer can drive a particle property such as opacity for Particle Playground. For the general lowdown on building and using control layers, see working with compound effects and control layers.

No matter the color depth of the image serving as a control layer, Particle Playground treats its red, green, and blue channels as though each were an 8-bpc grayscale image. Build a control layer out of colors and the Property Mapper property groups in Particle Playground can read brightness from each RGB color channel on its own.

A control layer's alpha channel reshapes the layer's color values before Particle Playground draws on its pixel values. Spots where the alpha channel reads 0 (a control layer's transparent zones) leave particle values untouched. Spots where it reads above 0 (a control layer's semitransparent and opaque zones) shift the particle value by an amount proportional to the alpha channel's value. With the Persistent and Ephemeral Property Mapper property groups, the band you set for Min and Max also bears on the value handed to a particle.

Particle Playground can read brightness on its own from an image's red, green, and blue channels. Want a distinct layer map in every channel? Open a program that edits color channels one at a time, such as Adobe Photoshop, and drop (by painting or pasting) a layer map into each channel separately. Then export the control layer in any RGB format that After Effects will bring in. In RGB mode it might appear strange, because its job is to serve as a single concealed layer carrying three distinct layer maps, not as a layer you actually see.

Note

If three separate images are already on hand, fold them into a single RGB file with the Set Channels effect. Set Channels can drop each image into its own channel within a combined file, readying it for use as an RGB layer map.

## Improving performance with Particle Playground

Bear the following in mind as you work with the Particle Playground effect:

While building a Particle Playground effect, watch the Info panel to track how many particles are coming into being. Once an effect runs past 10,000 particles, rendering can bog down badly. Spot performance trouble and you should dial Particles Per Second and/or Particles Down down to fairly low figures (in the range 1–100).

Because the Grid and Layer Exploder spawn particles on every single frame, they can churn out more than your effect needs and drag rendering down. To stop the endless spawning, animate these controls down to zero over time – Layer Exploder, Radius of New Particles, Grid Width and Height, Particle Radius, and Font Size. After that, Particle Playground only spawns fresh particles at a sequence's start.

Applying a Particle Playground effect to a layer doesn't pin particle positions to that layer's edges. To rein in particles you can't see or that crowd the image's border, use a Selection or Property Map larger than the Particle Playground layer's area. Keep in mind too that After Effects factors in an image map's alpha channel. To let your map's transparent zones act on the particles, precompose the map layer over a black solid.

To turn on field rendering with a Particle Playground effect, pick Enable Field Rendering inside the Particle Playground options dialog box. From then on, Particle Playground runs the simulation at twice the current composition's frame rate, exactly what field rendering calls for.

## Shatter effect

Note

For details on properties that several of the Simulation effects have in common, see Common Lighting controls and Material controls.

What the Shatter effect does is blow images apart. Its controls let you place explosion points and tune the strength along with the radius. Whatever falls outside that radius stays whole, so parts of the layer go unchanged. Pick from an assortment of shapes for the broken pieces (or build your own) and extrude them to lend bulk and depth. A gradient layer even lets you dictate an explosion's timing and sequence with precision. You might, for example, bring in a logo and have Shatter punch a logo-shaped hole through a layer.

Note

To run the Shatter effect backward in time (so the pieces reassemble rather than scatter), apply it, precompose the layer, and then time-reverse that precomposition layer.

8-bpc color is what this effect works with.

Original (upper-left), and as Shatter is applied over time to reveal another layer (lower-left and right)

Original (upper-left), and as Shatter is applied over time to reveal another layer (lower-left and right)
