# About shapes and shape layers

Inside shape layers live vector graphics objects known as shapes. Out of the box, a shape is built from a path, a stroke, and a fill.

To make shape layers, draw in the Composition panel using either the shape tools or the Pen tool.

There are two sorts of shape paths: parametric shape paths and Bezier shape paths. Numerically defined, parametric shape paths rely on properties you can adjust and animate in the Timeline panel once you've drawn them. Bezier shape paths instead consist of a set of vertices (path points) and segments that you reshape over in the Composition panel. Working with a Bezier shape path mirrors how you handle a mask path—and every mask path is itself a Bezier path.

Reshaping a shape path is done by applying path operations like Wiggle Paths and Pucker & Bloat. Paint operations are what you use to stroke a path or to flood the region a path defines with color.

Taken together, shape paths, paint operations, and path operations for shapes go by the name shape attributes. Adding them happens through the Add menu, found in the Tools panel or the Timeline panel. In the Timeline panel each shape attribute shows up as its own property group, whose properties you animate exactly as you would any layer property. Learn more about animation, keyframes, and expressions.

Whatever color bit depth the project uses—8, 16, or 32 bpc—a shape layer matches it.

Footage items are not the basis for shape layers. Layers built without a footage item are occasionally called synthetic layers. Text layers fall into that synthetic category too, and they're likewise made of vector graphics objects, which is why a great many of the conventions covering text layers carry over to shape layers as well. As one instance, a shape layer won't open in a Layer panel, the same way a text layer won't.

Tip

Animation presets are a handy way to keep your favorite shapes on hand.
