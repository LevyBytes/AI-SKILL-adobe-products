# Particle Playground property mapping

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

Related references:

- [Particle properties controlled by layer maps](particle-mapped-properties.md)
