# [SolidColor](../../host-api/solid-color/reference-index.md) API

- Adds the require('photoshop').app.SolidColor constructor for creating SolidColor objects.
- Color-taking APIs can receive SolidColor objects as well.
  - app.foregroundColor and app.backgroundColor.
  - app.documents.add `fillColor` property.
  - Document.saveAs methods that use colors.
- `require('photoshop').core.convertColor` is a low-level API that SolidColor uses internally. App color settings drive its color-space conversions.
