# Control perceptual interpolation in gradients

Use perceptual interpolation to make gradient color transitions smoother and more natural.

Perceptual interpolation changes gradient transitions according to how the eye distinguishes color differences. The result is a smoother blend with adjacent colors that appear more distinct.

Tip

Use perceptual interpolation in charts, dashboards, infographics, or UI elements when evenly spaced, distinct colors make the design easier to read.

Choose an object that already has a gradient fill, or create a new gradient.

Open the Gradient panel.

Set Method to Perceptual.

Use Perceptual or Classic to decide how gradient colors interpolate.

Use gradient stops, colors, opacity, or location to refine the gradient appearance as desired.

Note

- PDF and SVG exports do not support Perceptual gradients; gradients saved in those formats are rasterised.
- CC Libraries do not preserve perceptual rendering for saved gradients.
- Expanding perceptual gradients into mesh objects is not supported.
