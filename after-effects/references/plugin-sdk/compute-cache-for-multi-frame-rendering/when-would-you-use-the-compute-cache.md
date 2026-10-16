# When would you use the Compute Cache?

- Reach for the Compute Cache when your effect relies on sequence_data and must write to or refresh sequence_data during Render — all the more so when calculating the needed data is expensive.
- Lacking the Compute Cache, the effect has to add the `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` flag, which spins up a distinct copy of sequence_data for every render thread. Each render thread might then have to redo the expensive calculations on its own, with no way to share the outcome across the render threads.
- Through the Compute Cache, render threads can divide the work of computing the data and benefit from data that's already been computed.
- Depending on what the effect requires, the Compute Cache API handles both single- and multi-checkout computation tasks. The Compute Cache API documentation has more detail.
