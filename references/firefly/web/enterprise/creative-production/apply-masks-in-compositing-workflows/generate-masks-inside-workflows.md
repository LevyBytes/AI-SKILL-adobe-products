# Generate masks inside workflows

Not every mask must be created manually. Workflows include nodes that generate masks programmatically, such as luminosity-driven or segmentation-style masks, so later nodes receive a ready-made mask input.

For the base image, add an input node.

Attach a masking or analysis node that produces a mask image, such as Apply luminosity mask or Remove background.

Route the mask output into an operation that accepts mask inputs; examples include Composite images (2D), Fill region, or similar operations.

Unless the node states otherwise, generated masks use the white-applies, black-protects interpretation.
