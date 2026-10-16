# Operator controls for the Ephemeral Property Mapper

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
