# PSD as output file type

Choosing PSD as the output file type creates a processed file with these parts:

- One layer containing the image and mask
- One layer for every background color or image
- One color decontamination layer used to refine edges

Example showing the original image in a masked layer, with uploaded background images placed beneath it as separate layers.

Example with the original image held in a masked layer and the uploaded background images below it on separate layers.

For example, when you specify three solid colors and add one background image, the PSD file contains six layers:

- Layer 1: Color decontamination layer
- Layer 2: Original masked object layer
- Layers 3, 4, and 5: Three solid color backgrounds
- Layer 6: Background image
