# Get the true Position of a parented layer

Parenting a layer changes what its Position property reports: the figure you see is measured against the parent's location rather than marking the layer's genuine spot inside the Composition. Pinning down that genuine spot calls for an expression that remaps the parent's coordinate space onto the composition's own coordinate space. Drop the expression below onto the Position of a layer that has no parent, and it will track wherever the parented layer actually sits:

```javascript
// Defines the parented layer
var targetLayer = thisComp.layer("Parented Layer");

// Finds the parented layer's Anchor Point in the Composition
targetLayer.toComp( targetLayer.anchorPoint );
```
