# Work with layer blending modes

How any given layer combines with the layers stacked below it is governed by that layer's blending mode. In After Effects these layer blending modes — once known as layer modes, and occasionally transfer modes — match the blending modes found in Adobe Photoshop exactly.

For the majority of modes, only the color values of the source layer get altered, while its alpha channel is left untouched. Two exceptions stand out: Alpha Add reaches into the alpha channel of the source layer itself, and the silhouette and stencil modes reach down into the alpha channels of whatever sits below them.

Keyframes can't drive a blending mode directly, so there's no way to animate the mode itself. If you need the mode to switch at a particular moment, cut the layer at that point and assign the new mode to the trailing segment. An alternative is the Compound Arithmetic effect, which yields output comparable to a blending mode yet is free to vary across the timeline.

A blending mode is assigned to every layer — and where nothing else has been chosen, that mode is simply the default Normal.

Note

For colors to blend at a gamma value of 1, open File > Project Settings > Color and turn on Blend colors using 1.0 gamma. Turning the same option off blends colors in the project's working color space instead. Learn more about linearizing working space and enable linear blending.

When several masks sit on one layer, the modes that combine them go by a different name: mask modes.

- Stepping through the available modes for the selected layers is done by holding Shift and tapping either - (hyphen) or = (equal sign) on the main keyboard. It's a quick route to previewing how each mode looks.

- Assigning a mode to the selected layers happens either through the menu in the Timeline panel's Mode column or by way of the Layer > Blending Mode menu.

- Revealing the Modes column in the Timeline panel takes one of two routes: pick Columns > Modes from the panel menu, or click the Expand or Collapse The Transfer Controls pane button at the Timeline panel's lower-left corner.

Note

Certain effects ship with blending-mode options of their own. Reading through the write-ups for individual effects will turn up options like these.
