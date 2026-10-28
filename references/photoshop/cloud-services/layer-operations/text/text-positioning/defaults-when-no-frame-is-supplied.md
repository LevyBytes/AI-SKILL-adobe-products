# Defaults when no frame is supplied

|  | V1 | V2 |
| --- | --- | --- |
| **When no bounds/frame is supplied** | V1 fell back to default area bounds: `left: 0`, `top: 0`, `width: 4`, `height: 4` (pixels). | Omitting `text.frame` in V2 creates a **point** frame at the **center of the canvas**. |

The default placement moved from a tiny top-left area in V1 to a centered point frame in V2. For deterministic V2 placement, include `text.frame` and choose an area frame plus bounds or a point frame plus origin.
