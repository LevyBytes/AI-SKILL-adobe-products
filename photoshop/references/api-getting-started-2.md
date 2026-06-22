# V2 Ga, Webhooks

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Photoshop API v2 — General Availability; Photoshop API webhooks and Adobe I/O Events.

## Photoshop API v2 — General Availability

Photoshop API v2 has reached general availability. This release brings major gains in scalability, flexibility, and programmability, so teams can build production-grade, high-volume content workflows.

If v1 was part of your workflow, its file-size limits, embedded-asset model, and rigid flows may have been blockers. v2 closes those gaps and gives modern content pipelines a more extensible base.

### What's New

### Linked Smart Objects

Photoshop API v2 supports linked smart objects, which gives content supply chains a core new building block.

In v1, embedded smart objects caused several problems:

- PSD files could grow fast and hit the 2GB limit.
- Files duplicated assets rather than sharing them.
- Downstream asset updates were hard to govern and manage.

With linked smart objects:

- Assets are referenced rather than embedded.
- File sizes stay manageable, including in large-scale workflows.
- Updates flow across templates and variants.
- Shared assets can be centralized and governed by teams.

Content systems can therefore become more efficient, maintainable, and scalable.

### Increased File Size Limits

The maximum file size moved from 2GB to 5GB.

Enterprise use cases can work with much more complex documents because a major old limit is removed.

### UXP Scripting (JavaScript Automation)

Photoshop API v2 supports UXP scripting, so developers can run JavaScript directly inside Photoshop workflows.

Automation gains a programmable layer, opening advanced use cases:

- Copy fitting and dynamic text adjustments.
- Logic branches from supplied inputs or metadata.
- Recoloring and localization can be automated.
- Print-specific trapping and adjustments.
- Brand and compliance rules can be enforced.

Before v2, teams either built custom workarounds for these cases or waited until the API added more capability.

With UXP scripting in place:

- Teams own and maintain their logic.
- Workflows can carry business rules directly.
- Automation is extensible rather than fixed.

The API can support a substantially broader set of builds.

### More Powerful Action Workflows

- Generative Fill, Generative Expand, and additional actions are supported.
- Adobe action files are published and can be customized.
- Runtime generation of outputs does not require predefining assets.

### Richer Document Intelligence

- Artboards now act as first-class objects with full metadata (size, presets, background).
- Embedded smart objects can be extracted without opening Photoshop.
- Layer metadata is broader, including text settings, blend ranges, and layout details.

### Expanded Creative Control

- Smart object workflows improve through support for SVG and linked assets.
- Replacement and transformation capabilities are new.
- Complex and multilingual content gets enhanced text rendering.
- ICC profile support improves color management.

### Built for Scale

- Files up to 5GB are supported.
- Complex jobs can run longer.
- Error handling is improved with more actionable responses.
- Storage choices are flexible for prototyping and production workflows.

### Migration Notice

Photoshop API v1 reaches end of life on **July 31, 2026**.

To use the new capabilities and avoid disruption, teams should start planning migration to v2.

### Documentation

[Photoshop API v2 reference](https://raw.githubusercontent.com/api/photoshop-v2/index.md)

## Photoshop API webhooks and Adobe I/O Events

Learn how Adobe I/O Events work and how to configure your application to receive Photoshop events.

### Registering your application and webhook

Adobe I/O Events supports event-driven applications built from Photoshop-originating events.
To listen for events, register a webhook URL for your application and specify the event types it should receive.
When a matching event triggers, the application receives an HTTP POST request at the webhook URL.

Event types correspond to individual APIs. The event provider includes two event types:

- `Photoshop API events`
- `Imaging API Events`

For deeper Adobe I/O Events background:

1. In Adobe's I/O Events documentation, follow [webhook application setup and first webhook registration](https://www.adobe.io/apis/experienceplatform/events/docs.html#!adobedocs/adobeio-events/master/intro/webhooks_intro.md).
2. Open the [webhook sample Node.js app](https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/webhook-sample-app).
3. You'll need a project on the Adobe I/O Console. Create one by following the [Getting Started](https://raw.githubusercontent.com/getting-started/index.md) guide.

After successful registration, the selected event types start arriving for any submitted job that succeeds or fails. That removes the need to poll job status by job ID.

To apply the flow, continue with the [event-triggering API guide](https://raw.githubusercontent.com/guides/triggering-an-event/index.md).

## See also

- [Getting Started](uxp-xmp.md)
