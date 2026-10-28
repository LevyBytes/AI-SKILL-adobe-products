# rect

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Rectangle | R |

A rectangle marking the monitor’s edges in virtual desktop coordinates:

That virtual desktop takes its origin from the top left corner of the primary monitor. The primary monitor’s bounds therefore always look like [ 0, 0, right, bottom ].

Where a secondary monitor sits relative to the primary one decides whether its bounds arrays carry positive or negative values.
