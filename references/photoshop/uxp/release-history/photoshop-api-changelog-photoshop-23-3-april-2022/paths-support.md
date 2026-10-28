# Paths support

- Document.pathItems property was added, providing ExtendScript-like APIs for path work.
- `Document.pathItems` exposes the [PathItems](../../host-api/path-items/reference-index.md) collection class, which contains [PathItem](../../host-api/path-item/reference-index.md) objects.
- `PathItem.subPathItems` exposes the [SubPathItems](../../host-api/sub-path-items/reference-index.md) collection class, which contains [SubPathItem](../../host-api/sub-path-item.md) objects.
- `SubPathItem.pathPoints` exposes the [PathPoints](../../host-api/path-points/reference-index.md) collection class, which contains [PathPoint](../../host-api/path-point.md) objects.
- Use [`PathItems.add`](../../host-api/path-items/add.md) to create document paths by supplying `PathPointInfo` and `SubPathInfo` objects. The constructors are on the [app](../../host-api/objects/app.md) object.
