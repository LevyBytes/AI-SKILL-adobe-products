# 7. Removed V1 options

| V1 Field | V2 Status | Notes |
| --- | --- | --- |
| `options.costOptimization` (boolean) | **Removed** | No equivalent; optimization is internal in V2 |
| `outputs[].includeMetadata` (boolean) | **Removed** | No equivalent; implicit behavior |
| `outputs[].embedICCProfiles` (boolean) | **Replaced** | Use `outputs[].iccProfile` object instead |
