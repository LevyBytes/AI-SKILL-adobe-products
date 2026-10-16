# Advanced use of Texture and Sharpness

Selecting the Sliders button below either Texture or Sharpness expands the controls for multi-band and multi-parameter adjustment, providing more precision.

- Texture (slider mode): five vertical sliders control independent bands of image texture from fine on the left to coarse on the right. With these sliders, you can soften some texture bands while sharpening others for very specific results. Dragging a slider upward from its default sharpens that band, and dragging it downward softens that band.
  - Amount: controls how much contrast is applied to increase the perception of sharpness. Raising Amount beyond a threshold automatically lowers Radius if Radius has been raised, helping keep adjustments naturalistic.
  - Radius: sets how many pixels around adjusted pixels are affected too. Raising Radius past a threshold automatically reduces Amount, again making naturalistic adjustment easier.
  - Threshold: excludes pixels from sharpening based on how different they are from nearby areas. In practice, this lets you increasingly leave fine-to-medium detail unsharpened, avoiding exaggerated noise or unwanted detail while focusing on edges and stronger high-contrast detail.

For Texture especially, the value of the extra sliders is not that every slider must be used. Their purpose is access to the correct band of functionality for the result you want, which depends on subject size and the type of detail present.

Note

Using more bands in the Texture control increases the processing load of this effect.
