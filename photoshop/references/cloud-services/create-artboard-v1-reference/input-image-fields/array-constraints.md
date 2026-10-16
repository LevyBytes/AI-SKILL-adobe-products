# Array constraints

|  | V1 | V2 |
| --- | --- | --- |
| Minimum images | 1 | 1 |
| Maximum images | Not documented | **25** (returns an error above the limit) |

**V2 allows no more than 25 input images.** V1 did not publish a limit. When a workflow has more than 25 images, divide it across requests. V2 message: `"images must contain between 1 and 25 items"`
