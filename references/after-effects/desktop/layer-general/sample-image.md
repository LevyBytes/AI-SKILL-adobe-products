# sampleImage(point, radius = [.5, .5], postEffect=true, t=time)

Return type: Array [4].

Argument type: point is an Array [2], radius is an Array [2], postEffect is a Boolean, and t is a Number.

Reads a layer's color and alpha channel values and hands back, as the array [red, green, blue, alpha], the alpha-weighted average across the pixels lying within the given distance of the point. With postEffect set true, the readings reflect the layer once its masks and effects have been rendered; with postEffect false, they reflect the layer before any masks and effects render. The point input lives in layer space, where [0,0] marks the center of the layer's upper-left pixel. The radius input gives the horizontal and vertical reach from the sample center out to the edges of the sampled rectangle. By default it samples a single pixel.

Note

That postEffect parameter concerns effects placed directly on the layer, not ones applied indirectly such as through an adjustment layer.

Tip

Calling sampleImage inside an expression no longer switches off multiprocessing.

The sample below grabs a rectangle 4 pixels across and 3 pixels tall, centered on a point 100 pixels down from and 100 pixels right of the layer's upper-left corner:

thisComp.layer(1).sampleImage([100, 100], [2, 1.5])
