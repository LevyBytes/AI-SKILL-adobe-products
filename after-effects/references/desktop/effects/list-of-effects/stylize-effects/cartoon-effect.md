# Cartoon effect

What the Cartoon effect does is simplify and smooth an image's shading and colors while drawing strokes along the borders between features. Overall it cuts contrast where contrast runs low and lifts it where contrast runs high. The outcome may resemble a sketch or cartoon, or it may stay fairly understated. Put the Cartoon effect to work simplifying or abstracting an image for style, drawing the eye to detailed regions, or masking weak source footage.

One edge the Cartoon effect holds over certain other effects and techniques that reach a comparable look is its stronger temporal coherence. In practice, that means the Cartoon effect's output shifts little between one frame and the next when those two frames are much alike.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Three stages make up how the Cartoon effect operates:

A blurring pass akin to the Bilateral Blur effect smooths the image and strips out small variations. The Detail Radius and Detail Threshold properties steer this phase.

It locates the image's edges and lays a stroke along them, much like the Find Edges effect. The properties in the Edge and Advanced groups control how edges get found and how the strokes are drawn.

It trims the image's luminance and color variation, simplifying the shading and color. The Fill group's properties steer this quantization (posterization).

Note

Start with Render at Fill Only and nail down the image colors you're after first. Then pick either Edges or Fill & Edges and settle the basic edge appearance. The Advanced group's properties let you refine the look once the other controls have set the basic appearance.

Like any other properties, the Cartoon effect's properties can be animated. Settings that suit one stretch of a scene may fall short for another. You might, say, want fewer colors and heavier edge strokes for a face close-up than for an action shot crowded with subjects and detail.

Note

Ahead of applying the Cartoon effect, think about either lowering the composition's frame rate or running the Posterize Time effect on the layer when you want a movie to read as a cartoon. Keep in mind that the frame rates of cartoons sit far beneath those of live-action footage.

Original layer based on video footage item

Original layer based on video footage item Cartoon effect applied with Render set to Fill

Cartoon effect applied with Render set to Fill Cartoon effect applied with Render set to Edges

Cartoon effect applied with Render set to Edges Cartoon effect applied with Render set to Fill Edges

Cartoon effect applied with Render set to Fill Edges

Cartoon effect properties

Render

Fill, Edges, or Fill & Edges. Sets which operations run and which results show.

Detail Radius

The radius of the blurring pass that smooths the image and clears detail before edges get found. A bigger blur radius averages more pixels together for each pixel value, so a larger Detail Radius means more blur.

Detail Threshold

The Cartoon effect's blur pass resembles the one in the Bilateral Blur effect. (See Bilateral Blur effect.) Wherever an edge or other prominent detail sits, the blur radius drops automatically. The Detail Threshold value sets how the Cartoon effect tells which regions hold features worth keeping from which should take the full blur. A lower Detail Threshold keeps more fine detail; a higher one drives a more simplistic, cartoon-like result with less detail retained.

Fill

The image's luminance values get quantized (posterized) per the Shading Steps and Shading Smoothness property settings. At a Shading Smoothness of 0, the result lands close to plain posterization, transitions between values snapping sharply. Raise Shading Smoothness and the colors blend more naturally, transitions between posterized values easing in gradually and gradients surviving.

How much detail the original image holds factors into the smoothing phase, so regions that are smooth already (a sky gradient, say) escape quantization unless the Shading Smoothness value runs low.

Edge

These properties set the fundamentals of what counts as an edge and how the stroke laid on an edge looks.

Threshold

Sets how far apart two pixels must be for the Cartoon effect to read them as straddling an edge. Raise the Threshold to flag more regions as edges.

Width

How thick the stroke added to the edge is.

Softness

Raise this value to ease the transition between an edge's stroke and the colors around it.

Opacity

How opaque the stroke laid on the edge is.

Advanced

Advanced settings tied to edges and performance.

Edge Enhancement

Positive values sharpen the edges; negative ones spread them. The enhancement warps the whole image by pulling pixels toward or away from the edges, which sharpens or spreads them.

Edge Black Level

At 0, only the pixels flagged as part of an edge get a stroke; with Render at Edges, the image stays white apart from regions carrying a pure black stroke. Nudge Edge Black Level up a little to bring shades of gray into the Edges render phase. Raise it more to head toward a look resembling white strokes over a black backdrop.

Edge Contrast

The contrast within the grayscale rendering of the edges.

Performance

Should your machine hold a display card whose GPU supports OpenGL, processing can be accelerated as the Cartoon effect taps that GPU.
