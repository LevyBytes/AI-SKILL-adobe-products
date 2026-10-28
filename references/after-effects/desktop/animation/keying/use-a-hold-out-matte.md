# Use a hold-out matte

Reach for a hold-out matte (also known as a hold-back matte) when you need to patch up a scene that already has a keying effect on it.

What a hold-out matte amounts to is a masked-off region taken from a duplicate of the layer you keyed. You mask that duplicate down to just the slice of the image holding the key color you want kept opaque, then lay the hold-out matte straight over the keyed layer.

Example of using a hold-out matte

A. Original bluescreen image. The background for the number is also blue. B. After keying, the background for the number is also transparent. C. Hold-out matte containing the part of the image you want to remain opaque D. When the hold-out matte is placed on top of the keyed image, the background for the number is now opaque.

Example of using a hold-out matte

1. Make a copy of the layer that holds the color screen.
2. On the original layer, build transparency by running keying effects together with Matte effects.
3. Over on the copied layer, draw masks that hide all of the image apart from the region you mean to keep.
   Once you've made the duplicate, leave the Transform properties of just one layer alone—let the pair travel together. Parenting one layer to the other is worth considering. (See Parent and child layers.)

### More like this

- Keying effects
- Matte effects
- Creating shapes and masks
