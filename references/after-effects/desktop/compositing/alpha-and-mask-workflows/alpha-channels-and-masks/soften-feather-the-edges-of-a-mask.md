# Soften (feather) the edges of a mask

A mask's edges are softened by feathering, which fades them from more transparent to less transparent across a distance you specify. Through the Mask Feather property, mask edges can be made crisp or soft (feathered). Out of the box, the feather width sits centered on the mask edge—half of it inside, half outside. Set the feather width to 25, for instance, and the feathering reaches 12.5 pixels in from the mask edge plus 12.5 pixels out.

With the slider, Mask Feather values can be scrubbed as high as 32,000.

Reach for the Mask Feather property when you want mask edges crisp or soft.

Where the mask feathering shows up can also be steered by growing or shrinking the mask edges through the Mask Expansion property.

Only inside the layer's bounds does mask feathering occur. For that reason, keep a feathered mask's path a little inside the layer area and never push it right up to the layer's edge. Push a mask feather past the layer area and the feathered edge cuts off sharply.

For selected layers, press F to bring up the Mask Feather property.

(Optional) Click the Constrain Proportions switch beside the Mask Feather property to lock horizontal and vertical feather amounts so they change together.

Adjust the Mask Feather property the same way you'd handle any property—drag the underlined value, or click it and type an amount into the text input field.

Note

Since the mask feather makes opacity values follow a Gaussian distribution, the feather's affected area reaches past the pixel count you set. Beyond that specified range, though, the feather's influence is slight. This soft Gaussian fall-off reads as more natural than a linear one would.
