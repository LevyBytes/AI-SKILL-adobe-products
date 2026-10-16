# PF_OutFlag2_I_MIX_GUID_DEPENDENCIES

`PF_OutFlag2_I_MIX_GUID_DEPENDENCIES`

GuidMixInPtr()

SmartFX is the only consumer of this. Reach for it whenever custom UI or `PF_Cmd_DO_DIALOG` alters sequence data, or whenever the render outcome hinges on something else that wasn't accounted for and a rerender might be called for. While `PF_Cmd_SMART_PRERENDER` runs, the effect may invoke GuidMixInPtr() to fold any extra render-affecting state into our internal GUID for the cached frame. That GUID lets AE judge whether the frame is already on hand or still has to be rendered. The SmartyPants sample project holds an example.

Compared with the older approaches `PF_OutFlag_FORCE_RERENDER` and `PF_Cmd_DO_DIALOG` — which would evict the frame from the cache because the host had no idea what else the plug-in was folding into the render — this is a step up. It can also stand in for `PF_OutFlag2_OUTPUT_IS_WATERMARKED`.

- Request Frames Asynchronously Without Blocking the UI
