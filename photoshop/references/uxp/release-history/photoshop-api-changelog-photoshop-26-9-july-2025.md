# Photoshop API Changelog — Photoshop 26.9 (July 2025)

- Set [Document](../document/reference-index.md) `activeLayers` by passing an array of [Layer](../layer/reference-index.md) objects.
- [app.createDocument](../host-api/application/create-document.md) no longer fails silently when `fillColor` is supplied without `fill`. Options containing only `fillColor` are now processed correctly, and document creation errors are now thrown instead of discarded.
- Internal validation for Document and Layer references was expanded.
