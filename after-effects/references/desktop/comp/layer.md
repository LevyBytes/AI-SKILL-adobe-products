# layer(index)

Return type: Layer, Light, or Camera.

Argument type: index is a Number.

Fetches a layer by its number, which is its order in the Timeline panel. Example: thisComp.layer(3)

### layer(name)

Return type: Layer, Light, or Camera.

Argument type: name is a String.

Fetches a layer by its name. Matching goes by layer name first, falling back to source name when no layer name exists. When names are duplicated, the topmost match in the Timeline panel wins. Example:

thisComp.layer("Solid 1")

### layer(otherLayer, relIndex)

Return type: Layer, Light, or Camera.

Argument type: otherLayer is a Layer object, and relIndex is a Number.

Fetches whichever layer sits relIndex positions above or below otherLayer. So thisComp.layer(thisLayer, 1).active comes back true whenever the layer directly beneath it in the Timeline panel is active.
