# Detail Preserving Upscale Effect

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 7, 2026

### Upscale footage in Adobe After Effects to increase resolution while retaining sharp edges and fine details.

Use the Detail-preserving Upscale effect to enlarge an image dramatically without losing its detail; crisp lines and curves stay crisp. It lets you go, for instance, from SD up to HD, or from HD up to digital cinema.

In behaviour it mirrors the Preserve Details resampling choice found in Photoshop's Image Size dialog box.

## Effect controls

You can adjust the Detail-preserving Upscale effect with these controls:

- Fit To Comp Width: Adjusts the Scale percentage until the layer is as wide as the composition.
- Fit To Comp Height: Adjusts the Scale percentage until the layer is as tall as the composition.
- Scale: The minimum value is 100%.
- Reduce Noise: Cleans up noise prior to running the scaling math. Raise it when noise is being wrongly retained as detail.
- Detail: Crank it up and edges grow sharper and more contrasty, though you risk ringing or halos; keep it low and edges stay softer and more natural.
- Alpha: Lets the alpha channel be handled apart from the color channels. For the sake of performance you can route the alpah channel through a different method than the color channels. Bicubic is the default.

Compared with other ways to scale — for example relying on the layer's own bilinear or bicubic scaling in the Transform property group — the Detail-preserving Upscale effect runs more slowly.
