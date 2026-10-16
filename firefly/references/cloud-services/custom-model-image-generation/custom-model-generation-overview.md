# Custom model image generation

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

Firefly can use a custom trained model for image generation.

- [Figure: trained-custom-model](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/cm-generate-image/images/custom-model-trained.png) Custom Image Model
- [Figure: generated-image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/cm-generate-image/images/almond.png) Output Image

This walkthrough covers these tasks:

- See which custom models are available.
- Create images from a selected custom model, supplying the custom parameters: prompt, style presets, and image size.

If you want the fastest route, you can either follow the steps in order or [jump immediately to the full source code](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/cm-generate-image/index.md#implementation-example) near the end of this webpage.

Note

Firefly Custom Models on Image Model 3 and Firefly Custom Models on Image Model 4 do not support negative prompting.
