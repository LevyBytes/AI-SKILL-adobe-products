# Index

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

[Figure: Firefly API banner image](https://raw.githubusercontent.com/firefly-image-hero.jpg)

Use the Adobe Firefly API to bring generative AI capabilities into creative workflows.

These pages document Adobe Firefly API for users. Firefly extends technology Adobe has developed across the past 40 years, with an emphasis on helping people turn imagined ideas into finished creative output. Write the creative direction in your own words, and Firefly produces the result while reducing time and effort.

With Firefly, teams can ideate, create, and communicate while generative AI improves the workflow. You may already know the Firefly web app, Firefly-powered features in Adobe’s flagship apps, or Adobe Stock. Those capabilities are also available through an API, so you can fit them into the workflow that matches your needs.

[Custom Models](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/index.md#custom-models-api)

Produce brand-aligned image variations at scale

[Composite Operations APIs](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/index.md#composite-operations-apis)

Place product shots and objects into generated scenes with matching tones, colors, lighting, shadows, and textures.

[Upscale API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/index.md#upscale-api)

Improve image resolution and quality at scale through the Upscale API.

## Custom Models API

With Firefly's Custom Models API, you can produce brand-aligned image variations at scale. Train models from your brand's aesthetics, characters, or products, then reference them in API requests so campaign and channel visuals stay consistent.

### What is the Custom Models API?

With the Custom Models API, you can:

- **Train subject or style models** — Use subject models to capture characters, products, or objects, and style models to capture aesthetic qualities such as color palettes, patterns, or illustrative style, so Firefly generations fit the brand.
- **Generate images with a custom model** — Provide a custom model asset ID when calling the Generate Image API, causing results to reflect characteristics learned by that model.
- **Use style presets and controls** — Pair custom models with style presets and image size parameters to tune results for brand fit.
- **Manage and share models** — A unique asset ID supports versioning and reuse for each custom model; grant applications access when they need to list or use your models through the API.

### Why choose Custom Models?

- **Scale brand-consistent visuals** — Create many images with a recognizable brand look and feel, without directing each asset manually.
- **Consistent characters and products** — Prompt varied scenes while keeping mascots, products, or key objects recognizable.
- **Secure hosting and reuse** — Adobe hosts the models and exposes clear versioning; workflows reference them by asset ID, and you can share them with technical accounts when needed.

Start with [Custom Models overview](api-concepts.md), [Custom Models Generate Image API tutorial](api-cm-generate-image-2.md), and [Grant apps access to a Custom Model](api-how-tos.md).

### What's new with Image Model 5?

Image5 is the newest Firefly model. It advances realism, lighting, and composition, and it generates at native 4 MP resolution for sharper, more expressive output across photography, text, and illustration.

The new Instruct Edit capability is supported as well, allowing natural-language instructions to generate and refine in one continuous workflow with precise, intuitive edits.

If your Firefly API implementation already generates images, migrate to the Image5 model with the [Migrating to Image5](https://raw.githubusercontent.com/guides/how-tos/cm-generate-image/breaking-changes.md) guide.

## Composite Operations APIs

Place product shots and objects into generated scenes with matching tones, colors, lighting, shadows, and textures.

Available services include the Object Composite API, **Adaptive Composite**, and **Precise Composite**.

With Composites in Adobe Firefly, upload an image such as a product photo, then use a text prompt to produce a composited product scene.

Use the Composite Operations APIs to:

- Create compelling product shots across different setups, backgrounds, and visual design variations.
- Generate social media creatives that combine custom images with product photos.
- Help customers understand possible uses by showing the product across varied surroundings and situations.

### What are the Composite Operations APIs?

The Precise Composite API improves on earlier service versions in these areas:

- **Higher Fidelity and Realism** - The new ME model improves object-edge accuracy, lighting realism, and contextual scene generation beyond the previous MD model.
- **Enhanced Masking** - By using the latest Photoshop mask models, enhanced masking removes the "halo" effect often seen in v3 outputs.

- **True Visual Integration via Harmonization** - Generative Harmonization restores and strengthens lighting and shadow correction for realistic composites. Developers can set harmonization strength from 0–100% or switch the feature off to adjust output precisely.

Use Adaptive Composite to:

- **Bring-Your-Own-Background to Adaptive Composite** - With Adaptive Composite, customers can composite products into existing backgrounds or custom-generated backgrounds, including brand-specific environments created with Firefly Custom Models. This gives teams more creative control, consistent brand results, and reusable scenes across campaigns.

- **Intelligent Object Rotation** - Adaptive Composite analyzes the target background, then adjusts the object's rotation automatically to fit environmental cues such as perspective or lighting direction.

To begin, open the [Object Composite API Feature Guide](api-how-tos-2.md).

## Upscale API

Improve image resolution and quality quickly, without retakes or pixelation.

High-resolution image demand keeps increasing across digital platforms, while conventional upscaling can introduce pixelation and reduce quality. The Upscale API automates image enhancement to conserve time and resources. Use it inside Adobe products or your own workflows when image quality matters and details need to remain crisp and accurate.

### What can the Upscale API do?

The Upscale API supports workflows built around these use-cases:

**User Assets Upsampler**

Use this use-case when your own photos or artwork need higher resolution, preserved detail, and no invented or artificial additions:

- **Preserve the original**: Stay close to the source image and avoid adding artificial or new elements.
- **Transform low-resolution sources**: Convert small or low-quality images into high-resolution outputs ready for print, display, or later workflow steps.
- **Support multiple scale factors**: Choose 2×, 4×, or 6× upsampling based on what you need.

**Generated Image Upsampler**

Preserve crispness and accurate fine details in generative AI images (e.g., textures, patterns) when zoomed in. Quality is evaluated along two dimensions:

- **Crispness**: The upscaled result keeps the original generation's sharp appearance.
- **Correctness**: During zoom, fine details (e.g., textures like flowers, grass, or fabric) keep a coherent structure instead of becoming messy or blurry.

To begin, open the [Firefly Upscale Image API Feature Guide](api-how-tos-3.md). For authentication and setup, see [Getting Started](api-getting-started.md); for Upscale endpoints and schemas, use the [API Reference](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).

## Discover

[Quickstart Guide](api-guides.md)

Start here to make your first successful Firefly API call.

[Try the API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)

Use Adobe Firefly API interactively, explore endpoints, and make calls with complete endpoint descriptions.
