# Multi-Frame Rendering in AE

To exploit today's hardware with its higher CPU core and thread counts, Multi-Frame Rendering is now supported in After Effects 2022 and later. With Multi-Frame rendering (MFR), several frames render in parallel, which accelerates both the rendering and the export of AE compositions.

Setting the `PF_OutFlag` below through the AE Effects SDK is how a third-party effect opts into Multi-Frame Rendering support:

Set `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` in the effect’s second output-flags field when the surrounding requirements are met.

What this flag signals is that the effect can render across several threads at once. Whether applied once or multiple times on a layer, the effect may be invoked to render simultaneously across multiple threads. Before this flag goes on, the effect has to be thread-safe. More on that appears in the section below titled "What does it mean for an effect to be thread-safe?"

Note

With Multi-Frame Rendering active in After Effects, an effect that lacks thread-safety and leaves this flag unset will compel each render thread to step through the effect code one at a time, entering and exiting in sequence. That sharply cuts into the speed gains MFR delivers, and to flag the cost, a warning icon appears next to the effect in the Effects Control Window.

A backwards-compatibility flag exists for effects that must write to sequence_data during Render:

Set `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` in the effect’s second output-flags field when the surrounding requirements are met.

Under this flag every render thread holds its own sequence_data instance, neither shared with nor synchronized against the other render threads. When computing the data held in sequence_data is expensive, reach for the new Compute Cache For Multi-Frame Rendering instead.

Note

To employ the `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` flag, you have to build against the March 2021 SDK or a newer one.
