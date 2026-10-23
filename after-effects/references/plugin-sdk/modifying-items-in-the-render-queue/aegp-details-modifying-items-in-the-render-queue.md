# AEGP Details - Modifying Items In The Render Queue

Calling `AEGP_AddCompToRenderQueue` from `AEGP_RenderQueueSuite1` invalidates all render-queue-item references; the same invalidation occurs when a user manually adds or removes a composition from the render queue. Adding or removing output modules likewise invalidates those references for each render queue item.
