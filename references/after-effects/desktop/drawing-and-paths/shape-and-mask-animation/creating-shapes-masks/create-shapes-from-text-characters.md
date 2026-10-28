# Create shapes from text characters

Reach for Create Shapes From Text to pull the outlines out of every character, turn those outlines into shapes, and drop the shapes onto a fresh shape layer. From there those shapes behave like any others you'd work with.

Reach for Create Masks From Text to pull the outlines out of every character, turn those outlines into masks, and drop the masks onto a fresh solid-color layer. From there those masks behave like any others you'd work with.

Note

A handful of font families — Webdings is one — pack characters that are really graphical images instead of text. Converting text drawn from these families can be a handy starting point for simple graphical elements within shape layers.

- For shapes covering every character in a text layer, select that text layer in the Timeline or Composition panel.
- For shapes covering only certain characters, select those characters in the Composition panel.

- Choose Layer > Create Shapes From Text.
- On the layer or the text, Right-click (Windows) or Control-click (macOS), then pick Create Shapes From Text off the context menu.

- The Video switch belonging to the text layer gets switched off.
- A new shape layer appears at the very top of the layer stacking order. Inside it sits one shape group per selected character, along with fill and stroke properties matching the text's fills and strokes.
- Characters built from compound paths — i and e among them — produce several paths that get joined through the Merge Paths path operation.
- Effects, masks, layer styles, plus keyframes and expressions on properties within the text layer's Transform property group all copy over to the new shape layer or solid-color layer.
