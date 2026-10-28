# Configure parameters and connect your workflow

Once validation has passed:

- Map each port to an upstream node that provides the expected kind of data, using text for text tags and images for image or Smart Object tags; where the node supports it, type a static value instead.
- Configure the node output settings, such as JPEG / PNG and quality, according to the delivery target.
- Route the node's image or file output into a preview node, an output node, or the next processing step.

If a tag is not mapped, it may act as a blank input or keep the document default. Test this behavior in your workflow when leaving a port disconnected on purpose.
