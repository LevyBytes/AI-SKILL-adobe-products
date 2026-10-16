# Adding, editing and deleting layers

Use the `/documentOperations` API to apply layer-level and/or document-level edits to a PSD, then create new renditions with those changes.

In `options.layers`, pass a flat array containing only the layers targeted by the request body. Match items to your PSD by layer ID.

`add`, `edit`, `move`, and `delete` blocks specify what action applies to a layer object. A layer block without one of those attributes is ignored.

For `add` and `move`, also include one placement attribute: `insertAbove`, `insertBelow`, `insertInto`, `insertTop`, or `insertBottom`, so the service knows the destination.

A layer ID is not required when adding a new layer; the service creates one.
