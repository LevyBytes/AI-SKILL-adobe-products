# Control layers for Particle Playground

A control layer can drive a particle property such as opacity for Particle Playground. For the general lowdown on building and using control layers, see working with compound effects and control layers.

No matter the color depth of the image serving as a control layer, Particle Playground treats its red, green, and blue channels as though each were an 8-bpc grayscale image. Build a control layer out of colors and the Property Mapper property groups in Particle Playground can read brightness from each RGB color channel on its own.

A control layer's alpha channel reshapes the layer's color values before Particle Playground draws on its pixel values. Spots where the alpha channel reads 0 (a control layer's transparent zones) leave particle values untouched. Spots where it reads above 0 (a control layer's semitransparent and opaque zones) shift the particle value by an amount proportional to the alpha channel's value. With the Persistent and Ephemeral Property Mapper property groups, the band you set for Min and Max also bears on the value handed to a particle.

Particle Playground can read brightness on its own from an image's red, green, and blue channels. Want a distinct layer map in every channel? Open a program that edits color channels one at a time, such as Adobe Photoshop, and drop (by painting or pasting) a layer map into each channel separately. Then export the control layer in any RGB format that After Effects will bring in. In RGB mode it might appear strange, because its job is to serve as a single concealed layer carrying three distinct layer maps, not as a layer you actually see.

Note

If three separate images are already on hand, fold them into a single RGB file with the Set Channels effect. Set Channels can drop each image into its own channel within a combined file, readying it for use as an RGB layer map.
