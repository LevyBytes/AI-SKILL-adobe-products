# Container orientation

The orientation property defines how a container organizes its children. It accepts these values:

| Value | Behavior |
| --- | --- |
| row | Places child elements side by side across the container in one left-to-right row. The container height comes from the tallest child in that row, while the container width comes from adding the widths of all child elements. |
| column | Places child elements one above another down the container in a single top-to-bottom column. The container height comes from the sum of all child heights, while its width comes from the widest child in the column. |
| stack | Places child elements over the same container region so they overlap like stacked sheets. Only the top child is fully visible. The container height comes from the tallest child in the stack, and its width comes from the widest child in the stack. |

The next figure presents the sample window laid out with each orientation:
