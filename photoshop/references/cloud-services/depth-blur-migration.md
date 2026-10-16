# Depth Blur Migration

For Depth Blur, use the v2 API in place of the v1 `/pie/psdService/depthBlur` endpoint.

### Overview

Photoshop's Neural Filters back the Depth Blur convenience API, which produces depth-of-field results through adjustable blur controls. For migrations, compare V1's `/pie/psdService/depthBlur` path with the V2 `/v2/execute-actions` workflow.

**V2 highlights:**

- All 11 customizable parameters are available
- Blur intensity, focal point, and color adjustments can be set directly
- Other actions can be chained into the workflow
- Published ActionJSON can be studied and customized

**Depth Blur is not currently supported in V2.** The depth blur feature depends on Neural Filters, and those filters are still unavailable through the V2 API. At present, the V1 `/pie/psdService/depthBlur` endpoint is still the only supported route for this capability. This reference remains available for planning and will change after V2 adds Neural Filters support.
