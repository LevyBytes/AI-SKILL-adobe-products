# Compute Cache API

Serving as either a stand-in for Sequence Data or an addition to it, the Compute Cache API offers a thread-safe cache where effects can work out, hold, and retrieve data ahead of or during Render. Reserve it for data whose computation is costly. Effects doing Multi-Frame Rendering can gain a lot from it, since it wipes out duplicate work spread across threads. After Effects keeps this cache pooled with its others, so memory is kept in balance across them all. The design further lets a user run A/B parameter testing while the cache state survives for both the A and the B states, which accelerates the workflow. Those final two traits pay off for single-frame and multi-frame rendering effects alike.

`AEGP_ComputeCache` is the suite that implements the Compute Cache, reachable through `AEGP_ComputeCacheSuite1` and `AEGP_ComputeCacheCallbacks`.
