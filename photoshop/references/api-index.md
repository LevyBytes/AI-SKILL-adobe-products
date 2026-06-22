# Rest Api — Index

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use a RESTful API to pair Adobe Photoshop with advanced AI/ML services.

### Now Generally Available - Photoshop API v2

Photoshop API v2 is generally available. The release brings major improvements for scalability, flexibility, and programmability so teams can create production-grade, high-volume content workflows. It also resolves earlier gaps while giving modern content pipelines a more extensible foundation.

- [Learn more](https://raw.githubusercontent.com/getting-started/v2-ga/index.md)

## Overview

The Adobe Photoshop API is now part of Firefly Services. It uses REST-like patterns with standard HTTP response codes, verbs, and authentication, and responses are JSON-encoded. Although the examples use cURL, applications can be written in the language you prefer.

Use this guide for:

- Project creation in the Adobe Developer Console
- Credential retrieval and authentication
- Personalized workflow construction by chaining API calls across Firefly Services APIs endpoints
- Event-driven application development with Adobe I/O Events

## Photoshop API v2 — General Availability

Photoshop API v2 is the unified next-generation API for Photoshop and Lightroom-style workflows in Firefly Services. It provides one architecture, consistent request and response conventions, and flexible output destinations. Teams familiar with v1 may have run into limits involving file size, embedded assets, and rigid workflow design. v2 closes those gaps and gives modern content pipelines a more extensible foundation.

### What's new in v2

### Linked Smart Objects

Photoshop API v2 supports linked smart objects, which are a core upgrade for content supply chains.

In v1, embedded smart objects introduced several problems:

- PSD files grew quickly and frequently passed the 2GB limit
- Assets were copied into multiple files instead of being reused
- Managing and governing downstream asset updates was difficult

Linked smart objects change the model this way:

- Assets are referenced rather than embedded
- File sizes stay manageable, including in large-scale workflows
- Updates flow through templates and variants
- Shared assets can be centralized and governed by teams

The result is a more efficient, maintainable, and scalable content system.

### Increased file size limits

- Maximum file size increased from **2GB to 5GB**

More complex documents are possible with this higher limit, removing an important enterprise constraint.

### UXP scripting (JavaScript automation)

With Photoshop API v2, developers can run JavaScript directly in Photoshop workflows through UXP scripting.

That programmable layer opens advanced scenarios, including:

- Copy-fitting workflows and dynamic text adjustments
- Logic driven by inputs or metadata
- Automated localization and recoloring
- Print-specific trapping and adjustment tasks
- Enforcement for compliance and brand rules

Earlier versions required custom workarounds for these scenarios or a wait for new API features. UXP scripting means:

- Teams own the logic they define and maintain
- Workflows can carry embedded business rules directly
- Automation is extensible instead of locked to fixed behavior

This greatly broadens what the API can support.

### More powerful action workflows

- **Generative Fill**, **Generative Expand**, and more actions are supported
- Adobe action files are published and can be customized
- Runtime output generation works without predeclared assets

### Richer document intelligence

- Artboards now act as first-class objects and carry full metadata (size, presets, background)
- Embedded smart objects can be extracted without opening Photoshop
- Layer metadata is expanded, including text settings, blend ranges, and layout details

### Expanded creative control

- Smart object workflows improve through SVG and linked-asset support
- Replacement and transformation capabilities are new
- Text rendering is enhanced for complex and multilingual content
- Color management improves with ICC profile support

### Built for scale

- Files up to 5GB are supported
- Complex jobs can run with longer processing times
- Error handling improves and returns more actionable responses
- Storage options are flexible for prototyping and production workflows

### Photoshop API v2 services

The v2 API exposes many useful Photoshop operations. Examples include:

- **[Remove background](https://raw.githubusercontent.com/guides/remove-background/index.md)** - Uses AI to find and isolate the primary subject, removes the background, and keeps the subject available for cutouts and composites.
- **[Smart Objects](https://raw.githubusercontent.com/guides/smart-objects-and-the-api/index.md)** - Creates and replaces embedded and linked Smart Objects in a PSD, fitting replacement imagery to the original layer bounds while preserving aspect ratio.
- **[Product Crop](https://raw.githubusercontent.com/guides/product-crop/index.md)** - Detects the subject and smart-crops the image so the subject becomes the focal point.
- **[ActionJSON](https://raw.githubusercontent.com/guides/actionjson-endpoint/index.md)** - Runs Photoshop Actions from an ATN file programmatically and lets the action payload be adjusted for flexible, dynamic edits.

For the full service set, open the [Photoshop API v2 guides](https://raw.githubusercontent.com/guides/photoshop-v2/index.md), or review endpoints in the [Photoshop API v2 reference](https://raw.githubusercontent.com/api/photoshop-v2/index.md).

## Migration from v1

**Photoshop API v1 will reach end of life on July 31, 2026.** Start planning the move to v2 now to gain the newer capabilities and avoid service interruption.

For a smoother transition, topic-based migration guides address flows for edit, document, layer, actions, output, artboard, manifest, and status. Versioned `/v2` endpoints plus a dedicated v2 OpenAPI reference sit beside the legacy v1 reference, letting teams compare contracts and plan without mixing them.

**Start your migration:**

- [Photoshop API v2 migration guides](https://raw.githubusercontent.com/guides/photoshop-v2/index.md) - Topic guides for moving from v1 to v2, plus workflow documentation for v2
- [Photoshop API v2 reference](https://raw.githubusercontent.com/api/photoshop-v2/index.md) - Complete endpoint reference for the `photoshopv2-api.json` specification

## Discover

### Get Started

[Getting Started Guide](https://raw.githubusercontent.com/getting-started/index.md)

Begin with Firefly Services for Adobe Photoshop.

[Photoshop API v2 guides](https://raw.githubusercontent.com/guides/photoshop-v2/index.md)

**Recommended.** Provides migration material, v1-to-v2 topics, and guidance for v2 workflows.

[Photoshop API v2 reference](https://raw.githubusercontent.com/api/photoshop-v2/index.md)

**Recommended.** Use this OpenAPI material for Photoshop API v2 endpoints.

[Tutorials](https://raw.githubusercontent.com/guides/index.md)

Open the tutorials page for broader walkthrough content.

[Photoshop API v1 guides (Deprecated)](https://raw.githubusercontent.com/guides/v1/index.md)

**Deprecated.** Ends July 31, 2026. Move to v2; keep this only as reference and avoid it in new work.

[Photoshop API v1 reference (Deprecated)](https://raw.githubusercontent.com/api/index.md)

**Deprecated.** Ends July 31, 2026. Move to v2; retain this as reference material only and do not base fresh integrations on it.

## See also

- [Photoshop Actions](api-photoshop-actions.md)
- [Getting Started](uxp-xmp.md)
