# Effect controls

You can adjust the Detail-preserving Upscale effect with these controls:

- Fit To Comp Width: Adjusts the Scale percentage until the layer is as wide as the composition.
- Fit To Comp Height: Adjusts the Scale percentage until the layer is as tall as the composition.
- Scale: The minimum value is 100%.
- Reduce Noise: Cleans up noise prior to running the scaling math. Raise it when noise is being wrongly retained as detail.
- Detail: Crank it up and edges grow sharper and more contrasty, though you risk ringing or halos; keep it low and edges stay softer and more natural.
- Alpha: Lets the alpha channel be handled apart from the color channels. For the sake of performance you can route the alpah channel through a different method than the color channels. Bicubic is the default.

Compared with other ways to scale — for example relying on the layer's own bilinear or bicubic scaling in the Transform property group — the Detail-preserving Upscale effect runs more slowly.
