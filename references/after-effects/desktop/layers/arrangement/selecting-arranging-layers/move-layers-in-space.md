# Move layers in space

Shifting a layer through space is a matter of altering its Position property.

A Position property's pieces can be split apart into standalone properties — X Position, Y Position, and, on 3D layers, Z Position — letting you edit or animate each one on its own.

Note

- To bring the chosen layers' anchor points to the center of the current view, pick Layer > Transform > Center In View or press Ctrl+Home (Windows) or Command+Home (macOS).
- To park a layer's anchor point dead-center in the composition, right-click (Windows) or Control-click (macOS) the Position property, pick Edit Value, set the Units menu to % Of Composition, and type 50 into each of the Position property's components.

Keep a layer's Position values whole rather than fractional whenever the image isn't in motion, so a still image stays crisp. Doing so heads off the resampling that kicks in when a layer set to Best image quality lands on subpixels.
