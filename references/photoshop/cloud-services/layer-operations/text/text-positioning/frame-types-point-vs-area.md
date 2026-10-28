# Frame types: point vs area

|  | V1 | V2 |
| --- | --- | --- |
| **Area frame** | ✅ The only V1 frame type. Text layer creation always produced an area frame, and bounds were required unless defaults were used. | ✅ Yes. For area text, set `text.frame` to `type: "area"` and provide `bounds: { top, left, right, bottom }`. |
| **Point frame** | ❌ V1 had no point-frame support. | ✅ Yes. For point text, set `text.frame` to `type: "point"` with `origin: { x, y }`. The text is single-point and does not wrap. |

V1 is limited to **area** frames, while V2 can create either **point** or **area** frames.
