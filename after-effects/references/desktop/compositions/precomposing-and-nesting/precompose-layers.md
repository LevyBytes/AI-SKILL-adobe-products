# Precomposing, nesting, and pre-rendering — Precompose layers

When you precompose layers, they move into a fresh composition — the precomposition, or precomp for short. Back in the original composition, those selected layers collapse into a single layer that stands in for this new precomposition. Precomposing just one layer comes in handy when you want to give a layer transform properties and shape the sequence in which a composition's pieces render.

Highlight the layers in the Timeline panel, then choose Layer > Pre-compose or hit Ctrl+Shift+C (Windows) or Command+Shift+C (macOS).

Leave all attributes in

The precomposed layer's properties and keyframes stay behind in the original composition, now riding on the new layer that represents the precomposition. Whatever size the selected layer was, the new composition matches it. This option disappears the moment your selection includes several layers, or a shape layer, or any text layer.

Move all attributes into the new composition

The precomposed layers carry their properties and keyframes one rung deeper in the composition hierarchy, further from the root composition. Choose this and any tweaks you made to the layers' properties travel with each individual layer inside the precomposition. The new composition takes on the same frame size as the original composition.
