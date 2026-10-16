# Basic Host Differences — Rendering Frames

Premiere is optimized for responsive editing. When scrubbing the timeline or changing effect parameters, Premiere immediately requests a low-quality render for display, followed by a high-quality render. An effect may therefore receive two requests for the same effective time: first at low resolution and low bit-depth, then at full resolution and full bit-depth. Each requested render resolution accounts for Playback and Paused Resolution in the Source and Program Monitors. The first request uses Playback Resolution, and the second uses Paused Resolution.

Premiere also performs speculative rendering, rendering frames ahead on the timeline so that initial frames are ready if or when playback starts. When the time needle is repositioned or effect parameters change, Premiere asks the effect to render frames ahead of the current time. If those frames were already rendered and cached, the effect does not see those render requests because cached frames are used.

When rendering frames in Premiere-native pixel formats, Premiere sends `PF_Cmd_RENDER` once per field rather than once per frame. `PF_InData`->field identifies the field being rendered, `PF_LayerDef`->height is half the frame height, and `PF_LayerDef`->rowbytes is twice the normal value.
