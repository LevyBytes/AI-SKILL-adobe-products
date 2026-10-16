# Precomposing, nesting, and pre-rendering — Render order and collapsing transformations

Layers piled one above another in the Timeline panel are what make up a composition. Come render time — for a preview or the finished output — the layer at the bottom renders first. For each raster (non-vector) layer, the pieces apply in this sequence: masks, effects, transformations, and layer styles. Continuously rasterized vector layers follow a different default order — masks first, then transformations and effects.

The properties bundled beneath the Transform category in the Timeline panel — Anchor Point, Position, Scale, Rotation, and Opacity — are what count as transformations. The Layer panel shows you the rendering result as it stands before any transformations get applied.

Note

Want finer command over the timing of transformations? Apply the Transform effect and shift its position relative to the other effects.

Items in a stack of effects or masks get handled top to bottom. Apply the Circle effect and then the Magnify effect, say, and the circle ends up magnified. Within the Effect Controls or Timeline panel, though, pull the Magnify effect up above (before) the Circle effect, and now the circle is drawn after the magnification, escaping it entirely.

Once a layer finishes rendering, the next layer's rendering kicks off. That just-rendered layer below can feed into the rendering of the layer on top — for working out how a blending mode turns out, for instance.

When a composition holds other compositions nested inside, those nested compositions render ahead of the rest of the containing composition's layers.

Note

A handful of effects pay no attention to masks on the layer they sit on. To get one of these effects working on a masked layer, pre-compose the layer with its mask applied, then apply the effect to that pre-composed layer.
