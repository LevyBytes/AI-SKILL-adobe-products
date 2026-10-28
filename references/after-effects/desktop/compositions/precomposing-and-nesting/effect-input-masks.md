# Precomposing, nesting, and pre-rendering - Effects can include masks and effects of other layers

Certain effects, among them - Set Matte and Displacement Map, draw a layer in as input and reach for that input layer's masks and effects. There's no need to precompose those layers first just so an effect can reference them.

This works much like the View menu sitting at the foot of the Layer viewer panel, which lets you render a layer from various stages along the rendering order — straight from its source, after its masks, or after its individual effects.

When an effect takes layer properties, open the Input Parameter menu beside the layer selection and pick the input layer you want to target, for example:

- Source: Pulls in nothing but the layer's source. Both masks and effects are skipped.
- Masks: Pulls in the layer once its masks have been applied. Effects are skipped.
- Effects & Masks: Pulls in the layer once both its masks and effects have been applied.
