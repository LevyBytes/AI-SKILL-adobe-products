# Connect masks in the graph

Check the target node first: it may need a standalone mask input, or it may accept one combined parameter containing both mask and image.

Confirm compatibility for dimensions and color space against the node requirements; when they do not match, resize or convert earlier in the graph.

Validate the downstream node so mask issues are caught, including absent connections, mismatched sizes, and masks that are entirely black or entirely white.
