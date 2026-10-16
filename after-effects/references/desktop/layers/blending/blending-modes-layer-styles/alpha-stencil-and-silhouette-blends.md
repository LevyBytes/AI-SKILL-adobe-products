# Alpha, stencil and silhouette blend modes

Stencil Alpha

This builds a stencil out of the layer's alpha channel.

Stencil Luma

This builds a stencil out of the layer's luma values. Brighter pixels in the layer end up more opaque than darker ones.

Silhouette Alpha

This builds a silhouette out of the layer's alpha channel.

Silhouette Luma

This builds a silhouette out of the layer's luma values. Painted regions of the layer become transparent, exposing the layers or background beneath. Opacity in the result is set by the blend color's luminance value: brighter source pixels produce more transparency than darker ones. Painting in pure white yields 0% opacity, while painting in pure black changes nothing.

Alpha Add

Layers composite as usual, but complementary alpha channels are added to produce one continuous transparent region. It's useful for erasing visible edges where two alpha channels are inverted relative to each other, or along the alpha-channel edges of two abutting layers undergoing animation.

Note

Seams can sometimes show up between layers butted edge-to-edge. The problem shows up especially with 3D layers joined at their edges to assemble a 3D object. Anti-aliasing a layer's edges leaves a bit of partial transparency there. Overlap two regions of 50% transparency and you don't land on 100% opacity but on 75%, because multiplication is the default behavior. (Half the light passes through the first layer, then half of what's left passes through the next, so a quarter makes it through overall.) That mirrors how partial transparency behaves in the real world. There are times, though, when this default isn't what you want — you'd rather have the two 50% opacity regions merge into a seamless, opaque join, with the alpha values summed. For those situations, turn to the Alpha Add blending mode.

Luminescent Premul

This keeps color values that run past the alpha channel value after compositing from clipping, folding them back into the composition instead. It's useful when compositing rendered lens or light effects — lens flare, say — from footage carrying premultiplied alpha channels. Footage from other vendors' matting software may also come out better this way. When you apply the mode, reinterpreting the premultiplied-alpha source footage as straight alpha often gives the best results.

Related: [Normal and dissolve blending modes](blending-mode-descriptions.md).
