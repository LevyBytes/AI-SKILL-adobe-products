# Copy and paste keyframes

Keyframe selections that reach across several layers can be copied and pasted without spawning extra layers.

Keyframes can be lifted from one layer alone or from many layers together. Pasting them into a different layer drops them onto the matching property of that destination layer. The earliest of the group lands at the current time, with the rest trailing behind in their original order. Because the keyframes stay selected once pasted, moving them onto the destination layer right away is easy.

Copying between layers works for one shared property — Position, say — or between two different properties that handle the same kind of data, like Position and Anchor Point.

Note

Pasting between matching properties lets you go from several properties to several properties in a single pass. Pasting between differing properties, on the other hand, is limited to one property at a time on each side.

Within the Timeline panel, reveal the layer property that holds the keyframes you intend to copy.

2. Select one or more keyframes.
   Select Edit > Copy.

Over in the Timeline panel that holds the destination layer, slide the Current Time Indicator to the moment where the keyframes should land.

When pasting back to the same property the keyframes came from, select the destination layer.

When pasting to a different property, select that destination property.

Select Edit > Paste.
