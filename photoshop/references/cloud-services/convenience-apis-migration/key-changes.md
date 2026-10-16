# Key changes

- V1 convenience endpoints relied on server-side action files. In V2, the same ActionJSON definitions are published so you can inspect, fork, and customize them.
- Every convenience operation now targets one endpoint: `/v2/execute-actions`
- Depth Blur remains the sole convenience API that V2 does not yet provide (Neural Filters dependency)
