# Artisan Data Types — The World Is Your Canvas

`AEGP_RenderTexture`() places a layer's raw, untransformed pixels into a buffer of arbitrary size.

`AEGP_RenderLayer`() runs the full After Effects render pipeline, including transforms, masking, and related processing, and provides the layer as it appears inside its composition in a composition-sized buffer.

When the rendered layer is 3D, the default Artisan, Standard 3D, is called to perform the 3D geometric work.

Your Artisan can use this behavior to render track matte layers and apply them to the transformed 3D layer only as strict 2D mattes.

Before rendering, the Artisans shipped with After Effects apply an inverse transform to obtain square pixels, then apply the transform again before display.

For example, when the pixel aspect ratio is 10/11 (DV NTSC), multiplying by 11/10 produces square pixels. After processing and compositing 3D layers, divide again to return to the original pixel aspect ratio.

The suite below provides layers, compositions, texture buffers, and destination buffers. Every artisan relies on this suite.
