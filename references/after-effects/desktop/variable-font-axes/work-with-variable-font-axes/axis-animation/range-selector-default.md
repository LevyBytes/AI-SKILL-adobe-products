# Range Selector (Default)

A single unbroken stretch of characters to animate is what the Range Selector marks out. A few of its main properties are:

| Property | Description | Values |
| --- | --- | --- |
| Start & End | Defines which characters are affected | 0% – 100% (or index/units based)<br><br>- 0% to 100% - affects all characters<br>- 0% to 50% - first half of text<br>- 50% to 100% - second half of text |
| Offset | Shifts the range along the text, and animating them creates "traveling" effects | Values: -∞ to +∞ |
| Amount | Controls the strength of the effect | 0% – 100%<br><br>- 100% - Full axis value applied<br>- 50% - Half the axis value applied<br>- 0% - No effect (base font value) |

A couple you might experiment with:

| Example | Font axis setting | Range selector | Keyframes | Result |
| --- | --- | --- | --- | --- |
| Weight wipe effect | Weight: 900 (Black) | - Start: 0%<br>- End: 0% | End keyframed from 0% - 100% | Bold weight "paints" across text from left to right |
| Traveling width wave | Width: 150% (Expanded) | - Start: 0%<br>- End: 20%<br>- Offset: Keyframed from -20% to 120% | Offset animated over time | Expanded width travels through the text |
