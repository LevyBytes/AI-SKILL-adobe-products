# Apply the HDR Compander effect

1. Within a 32-bpc project, drop the HDR Compander effect onto a layer.
2. For Mode, pick Compress Range.
3. Point Gain at the top value the compressed range needs to hold—in other words, the image's brightest white. Hold back on Gain, though: the larger the slice of the 16-bpc value you hand to highlights, the tighter the midtones get squeezed (and they're most of the pixels), and the more data this step throws away.
4. Set Gamma. Gamma reshapes how values spread across the range, granting extra precision in chosen parts of it.
5. Layer on whichever low-dynamic-range effects you want.
6. Add a second HDR Compander instance to the layer, making sure it sits after—below—any 8-bpc or 16-bpc effects already in place.
7. On that second instance, set Mode to Expand Range.
8. Give Gain and Gamma the same values you used on the first instance.

Note

There's a handier route to the HDR Compander effect: apply the Compress-Expand Dynamic Range animation preset. That preset bundles an expression together with two HDR Compander instances—the first with Compress Range chosen, the second with Expand Range chosen. The expression copies the Gain and Gamma you dialed into the first instance straight onto the second one. Drop whatever low-dynamic-range effects you like in the gap between these two HDR Compander instances.
