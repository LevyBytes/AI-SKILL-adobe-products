# Compositing feature guide

Firefly API provides compositing operations that place objects into scenes while accounting for lighting, shadows, and image harmonization. The API offers three compositing choices, each aimed at a different workflow and amount of creative control.

All three operations run asynchronously. A request returns a `jobId` plus a `statusUrl` that can be polled for progress.

The composite operations are:

- **Generate Object Composite** creates a background from a text prompt, then places the object into that generated scene. Use it when you do not already have a background image.
- **Precise Composite** inserts an object into an existing background while keeping the supplied subject pixel-accurate. Use it when the subject cannot be changed.
- **Adaptive Composite** places an object into an existing background while adapting and regenerating the subject so it better fits the scene. Use it when natural integration and realism matter most.

For complete schema and endpoint information, use the [Object Composite API Reference](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).
