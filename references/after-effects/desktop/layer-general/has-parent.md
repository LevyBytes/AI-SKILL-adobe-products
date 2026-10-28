# hasParent

Return type: Boolean.

Comes back true when the layer has a parent, false when it doesn't.

Lean on the hasParent attribute to test whether a layer is parented. It works even while the layer currently lacks a parent. Take the expression below: it makes the layer it's applied to wiggle off the parent's position. With no parent, the layer wiggles off its own position instead. Attach a parent later, and the layer's behavior shifts to match:

idx = index; if (hasParent) { idx = parent.index; } thisComp.layer(idx).position.wiggle(5,20)
