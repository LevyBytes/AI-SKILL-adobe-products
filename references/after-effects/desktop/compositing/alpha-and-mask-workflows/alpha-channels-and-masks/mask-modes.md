# Mask modes

The way masks on a single layer combine with each other is governed by their blending modes, referred to as mask modes. Every mask starts out assigned to Add, a setting that merges the transparency values of any masks overlapping on the same layer. While a mode can be assigned per mask, that mode can't be animated—there's no way to set keyframes or expressions on a mask mode property so it varies across time.

Pick a mask's mode from the menu positioned beside the mask name in the Timeline panel.

For the very first mask, the interaction is with the layer's alpha channel. Should that channel leave any part of the image less than fully opaque, the mask instead interacts with the layer frame. Every mask added after that interacts with whichever masks sit above it in the Timeline panel stacking order. Because of this, how a mask mode behaves changes according to the modes assigned to the masks ranked higher in the stack. No mask mode reaches across to a different layer—the effect stays confined to masks sharing one layer.

Mask modes let you build intricate compound masks containing several transparent regions. As one case, a mode can merge a pair of masks while restricting the opaque region to just the overlap where both masks cross.

Original

Original set of shapes.

None

Here the mask exerts no direct effect on the layer's alpha channel. Reach for this when the mask path is needed solely to drive an effect like Stroke or Fill, or to serve as the source for a shape path.

Add

This mask joins those above it in the stacking order, so its influence builds on top of the masks ranked higher.

Subtract

Here the mask's influence is taken away from the masks above it. It comes in handy for producing the look of a hole punched through the middle of another mask.

Intersect

This mask joins those above it in the stacking order. Wherever it overlaps the masks ranked higher, its influence accumulates with theirs; wherever it falls outside them, the outcome is full opacity.

Lighten

This mask joins those above it in the stacking order. At spots where several masks cross, the largest transparency value wins.

Darken

This mask joins those above it in the stacking order. At spots where several masks cross, the smallest transparency value wins.

Difference

This mask joins those above it in the stacking order. Outside the regions where it overlaps the masks ranked higher, it behaves as though it were the layer's only mask; inside those overlapping regions, its influence is subtracted from the masks above.

While drawing or editing a closed mask, these keyboard shortcuts switch its mode:

| Function | Mac | Win |
| --- | --- | --- |
| None | N | N |
| Subtract | S | S |
| Add | A | A |
| Intersect | I | I |
| Darken | D | D |
| Difference | F | F |
| Lighten | L | L |

Notes:

- While starting a new mask with a Shape tool such as the Rectangle tool or Ellipse tool, you're free to hit these keyboard shortcuts together with the mouse.
- With the Pen tool, a new mask only accepts these keyboard shortcuts at the moment you close it. Position the pointer over the closing vertex (typically the first one), click and keep the mouse button held to close the mask, and tap the mask mode shortcut before you let go. A mode doesn't exist for open masks, so these shortcuts have no effect when you draw open masks with the Pen tool.
- While editing a closed mask, you may tap these keyboard shortcuts any moment the mouse button is down.
