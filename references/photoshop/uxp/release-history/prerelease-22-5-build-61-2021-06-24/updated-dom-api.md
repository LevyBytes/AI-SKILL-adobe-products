# Updated DOM API

- A new `Layers` collection replaces the old `layerTree` object, with the old object now named `layers` and implemented as a collection through the JavaScript Proxy object. The collection introduction is described below. The previous `layers` behavior is no longer in the DOM. Most scripts can update by replacing `layerTree` with `layers`. Documents and group-kind layers have a valid `layers` collection, while a `pixel` layer has `null` for `layers`. Collections use Array-like semantics. The extra ExtendScript routines `add` and `getByName` are available too. Check `LayerKind.GROUP` on a `layer` to determine whether `layers` exists.
- `GroupLayer` has been removed. Use `activeLayer.kind === LayerKind.GROUP` instead.
- `Constants.LayerKind` is similar to the ExtendScript version, with an added "group" layer.
- Layer APIs
  - _new_ locked, read-only indicator for whether any properties are locked
  - allLocked, pixelsLocked, positionLocked, transparentPixelsLocked properties
  - Documentation now exposes some existing properties
