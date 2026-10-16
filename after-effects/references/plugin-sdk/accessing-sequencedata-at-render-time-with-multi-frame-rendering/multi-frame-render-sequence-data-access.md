# Global, Sequence, & Frame Data — Accessing sequence_data at Render Time with Multi-Frame Rendering

Switch on Multi-Frame Rendering for an effect and the sequence_data object turns read-only/const throughout Render, reachable on each render thread by way of the `PF_EffectSequenceDataSuite1` suite.
