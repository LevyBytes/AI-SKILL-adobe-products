# SmartFX`PF_Cmd_SMART_RENDER`

For any given pre-render, no more than a single `PF_Cmd_SMART_RENDER` call reaches the effect.

Be aware that a render pass might not happen whatsoever. It's possible that After Effects was only after some bounds math, or that it later figured out the effect's result wouldn't be needed anyway — that situation arises, for instance, when a track matte's pre-render phase hands back a rectangle that misses the effect's output entirely.

Without leaking resources or slipping into an unstable condition, every effect has to cope with a Pre-Render that is never followed by a Render.

The extra parameter, during `PF_Cmd_SMART_RENDER`, refers to a `PF_SmartRenderExtra`.
