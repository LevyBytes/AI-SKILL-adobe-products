# Extract a depth pass

Pulling a depth pass starts in the Effects panel: apply the 3D Channel Extract effect onto a nested composition layer.

Keep these points in mind:

- Once 3D Channel Extract sits on a nested composition layer, the 3D Channel parameter is grayed out.
- The depth range's start and end come from the Black Point and White Point properties, both gauged in pixels out from the camera position.
- By default Black Point reads 5000.0 and White Point reads 0.0. Should your 3D scene reach beyond 5000 pixels from the camera, you'll have to bump the Black Point value up.
- With the project at 32-bpc, the depth output is clamped to 0-1 across the same range that gets clamped for 8- or 16-bpc.
