# 1. Upscaling product images for eCommerce

**Scenario:** A retailer needs higher-resolution catalog images for product detail pages, zoom views, or print-quality output, while avoiding texture or color changes that could misrepresent the item.

**Why Firefly Upscale:** The API focuses on source fidelity. It preserves structural proportions, color accuracy, and tone so the product still looks like the original item instead of a sharpened reinterpretation. Color and tone remain aligned with the source, and fine surface detail such as fabric, packaging, and labels is kept without excessive sharpening.

At 2x scale, results are very stable and usually ready for most catalog workflows. At 4x, clean product shots can still produce strong results, although complex textures may vary and may benefit from a quick review before publication.

[**Recommended scale:**](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/upscale/index.md#scale-factor-guidance) Use 2x for most catalog work. Use 4x when a larger resolution increase is required and the source image is high quality.

Expected output:

- Color and tone remain close to the original
- Fine surface details stay intact without excessive sharpening
- Packaging text is generally readable, especially at 4x when the source text is sharp and high contrast
- At 4x, smooth surfaces can show amplified noise; review hero images before use
