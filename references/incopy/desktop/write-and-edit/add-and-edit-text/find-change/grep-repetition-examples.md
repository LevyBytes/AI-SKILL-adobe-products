# GREP repetition examples

Open when selecting exact, bounded, greedy or shortest repetition in Find/Change.

Use this sample: `abbc abbbc abbbbc abbbbbc`.

| Find expression | Meaning | Matched b-runs |
| --- | --- | --- |
| `b{3}` | Exactly three b characters. | `bbb`, `bbb`, `bbb` |
| `b{3,}` | At least three; use the longest available match. | `bbb`, `bbbb`, `bbbbb` |
| `b{3,}?` | At least three; use the shortest match. | `bbb`, `bbb`, `bbb` |
| `b{2,3}` | Two or three; prefer three. | `bb`, `bbb`, `bbb`, `bbb`, `bb` |
| `b{2,3}?` | Two or three; prefer two. | `bb`, `bb`, `bb`, `bb`, `bb`, `bb` |

Matches are found from left to right without overlap. A remaining run can produce another match when it still meets the minimum length.

Source: [Adobe InCopy Find/Change](https://helpx.adobe.com/uk/incopy/desktop/write-and-edit/add-and-edit-text/find-change.html).
