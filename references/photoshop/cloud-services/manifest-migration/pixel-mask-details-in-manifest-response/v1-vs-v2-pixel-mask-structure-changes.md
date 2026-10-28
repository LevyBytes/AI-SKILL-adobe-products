# V1 vs V2 Pixel Mask Structure Changes

**Important:** V2 uses a new consolidated model for pixel mask data, and it differs substantially from V1.

**V1 Behavior:**

- Manifest responses placed a `mask` property directly on each layer
- Mask fields were `enabled`, `linked`, and `offset`, with `x`/`y` coordinates
- The response did not include separate metadata for mask presence or bounds
- Edit-operation storage used `layerSettings.imageMask` when setting mask properties

**V2 Behavior:**

- Pixel mask fields now live in a layer-level `pixelMask` object
- Added metadata fields include `hasMask`, `extendOpaque`, and `bounds`
- Editable fields remain `enabled`, `linked`, and `offset`; edit operations can modify them
- Offset coordinates use `horizontal`/vertical` rather than `x`/y`
- Common mask settings such as density and feather move into `userMask`
- The same structure is used for manifest responses and edit operations

**Migration Note:** Clients moving from V1 should update their code to:

1. Read `pixelMask` rather than `mask` for pixel mask fields
2. Replace `offset.x`/offset.y` reads with `offset.horizontal`/offset.vertical`
3. Test `pixelMask.hasMask` before assuming mask pixel data exists
4. Test `layerSettings.clippingMask` when checking whether a layer is clipped
5. Get density and feather values from the separate `userMask` property
