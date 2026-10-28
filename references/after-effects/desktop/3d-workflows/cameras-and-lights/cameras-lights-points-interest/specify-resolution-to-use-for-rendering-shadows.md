# Specify resolution to use for rendering shadows

Compositions holding intersecting 3D layers are rendered by the Advanced 3D renderer. For shadows it relies on shadow maps — images rendered from each light source's vantage point. As a rule, shadow resolution is worked out for you from the composition resolution and the layers' quality settings. When that automatic resolution falls short of the quality you're after, or drags the render down, you can change the shadow map resolution yourself. Say shadows look blurry while the Shadow Diffusion material option reads 0 — then raise the shadow map resolution. Or, when shadows render too slowly, lower the shadow map resolution.

Where a shadow-casting layer cuts across another layer, a tiny gap behind the intersection that ought to be in shadow can sometimes appear. Raise the shadow map resolution to shrink that gap.
