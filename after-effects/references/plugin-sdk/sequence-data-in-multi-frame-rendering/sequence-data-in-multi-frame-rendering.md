# Multi-Frame Rendering in AE — Sequence Data in Multi-Frame rendering

Across the years, the sequence_data object together with its related Sequence Selectors have offered a means of holding data for the duration of an effect's lifetime. A few shifts worth noting come in with Multi-Frame Rendering:

Changes as of June 2020

- For Multi-Frame rendering, After Effects has to marshal sequence*data over to the render threads. To keep that efficient for effects whose sequence_data needs flattening via the `PF_OutFlag_SEQUENCE_DATA_NEEDS_FLATTENING` flag, those effects are now also required to set the `PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA` flag.

Note

A later After Effects release will enforce the requirement to set the `PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA` flag and to handle the matching selector inside the plugin. Loading any effect that falls short of this will trigger a warning dialog.

Changes as of March 2021

- Read at Render time, the sequence_data object is now const and ought to be reached through the `PF_EffectSequenceDataSuite` interface.
- By default, writing to seqeunce_data at render time is turned off, and the outcome is undefined should a write to sequence_data be attempted at render time.
- An effect that has to write to sequence*data at render time must set the `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` flag, which instructs After Effects to permit writes to sequence_data at a performance cost. At the start of the render, the sequence_data object is duplicated to each render thread, and for the render's lifetime every render thread maintains its own separate copy of sequence_data. On performance grounds, using the Compute Cache For Multi-Frame Rendering to write whatever data the effect needs is the preferred approach.
