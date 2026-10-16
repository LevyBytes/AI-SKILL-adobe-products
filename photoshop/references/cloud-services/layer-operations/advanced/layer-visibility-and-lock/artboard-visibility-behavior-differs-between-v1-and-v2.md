# Artboard visibility behavior differs between V1 and V2

The two API versions handle `visible: false` on an **artboard root layer** differently:

| Behavior | V1 (`documentOperations`) | V2 (`create-composite`) |
| --- | --- | --- |
| Artboard content rendered | **Always** (visibility ignored) | Only if `isVisible: true` |
| Output dimensions | Full document canvas | Shrinks to visible artboards only |
| Effect on child layers | No change | Children not composited |

**V1 quirk:** In V1, hiding an artboard container by `id`, such as `{"id": 328, "visible": false}`, does not change the rendered image. Even when artboard visibility is tracked, render time ignores it and returns the full document canvas at its original pixel size. This is a known V1 limitation.

**V2 behavior:** V2 honors artboard visibility correctly. If a PSD has several artboards and some are hidden, the generated image is sized around only the visible artboard content.

**Migration impact:** A V1 export workflow that hides artboard root IDs to isolate one artboard will get a different, smaller output size in V2. Treat that as the expected behavior and update downstream assumptions about dimensions.
