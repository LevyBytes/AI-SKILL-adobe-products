# Precomposing, nesting, and pre-rendering — Uses for precomposing and nesting

Keeping intricate compositions tidy and controllable is what precomposing and nesting are for. The techniques unlock several capabilities:

- Apply complex changes to an entire composition: Gather several layers into one composition, drop that composition inside the larger one, then animate or add effects to the nested version — every layer it holds then transforms identically across the same stretch of time.
- Reuse anything you build: Construct an animation as a standalone composition, after which you can drag it into any number of other compositions as often as you like.
- Update in one step: Edits made to a nested composition ripple through to each composition that references it — the same way altering a source footage item updates every composition that draws on it.
- Alter the default rendering order of a layer: Instruct After Effects to carry out a transformation, rotation for instance, ahead of the effects, so that the effect lands on the already-rotated footage.
- Add another set of transform properties to a layer: Beyond the properties belonging to its contained layers, the layer standing in for the composition carries properties of its own. That extra layer of properties lets you transform a layer or a group of layers a second time.
