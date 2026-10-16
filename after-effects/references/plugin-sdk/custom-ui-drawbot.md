# Custom UI & Drawbot

A composited drawing model built on Drawbot is what Custom UI relies on. What the Drawbot suites are good for:

1. Basic 2D path drawing: Lines, Rect, Arc, Bezier
2. Stroking/Filling/Shading paths
3. Image drawing: Compositing an ARGB/BGRA buffer onto the surface
4. Pushing/popping surface state
5. Text drawing, if supplier supports it (clients should first check if text drawing is supported before actual drawing)

Only during `PF_Event_DRAW` is drawing permitted (and never during `PF_Event_DRAG` or `PF_Event_DO_CLICK`).

Getting started with Drawbot means first obtaining the drawing reference: hand `PF_Context` to a fresh suite call, `PF_GetDrawingReference`.

When the drawing reference that comes back isn't NULL, use it to pull the supplier and surface references off `DRAWBOT_DrawbotSuite`.

The Drawbot suites include `DRAWBOT_DrawbotSuite`, `DRAWBOT_SupplierSuite`, `DRAWBOT_SurfaceSuite`, `DRAWBOT_PathSuite`.
