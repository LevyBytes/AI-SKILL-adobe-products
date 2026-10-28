# Creating Layers

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

A composition is built from layers; strip them away and nothing remains but an empty frame. Add however many layers the work demands — some compositions run to thousands of layers, others get by on a single one.

A layer in After Effects plays a role much like a track in Adobe Premiere. What sets them apart is that any one After Effects layer takes at most a single footage item as its source, whereas a Premiere track usually holds several clips. After Effects layers also parallel Photoshop layers, even though the working interface isn't the same — handling layers in the Timeline panel here mirrors handling them in Photoshop's Layers panel.

Several types of layers are available to create:

- Video and audio layers drawn from footage items you import, such as still images, movies, and audio tracks
- Layers you build inside After Effects for special purposes, such as cameras, lights, adjustment layers, and null objects
- Solid-color layers drawn from solid-color footage items you make within After Effects
- Synthetic layers carrying visual elements you make within After Effects, such as shape layers and text layers
- 3D layers holding 3D objects and scene, or 2D layers converted to work in 3D space, which lets them move and interact across the X, Y, and Z axes and react to cameras and lights for depth and perspective.
- Precomposition layers, which take compositions as their source footage items

Editing a layer leaves its source footage item alone. The same footage item can feed more than one layer, and you can use it differently in each.

What you do to one layer leaves the others untouched unless you link them on purpose. You can move, rotate, and draw masks on a single layer, say, without disturbing any other layer in the composition.

Every layer in a composition gets numbered automatically by After Effects. Those numbers sit by default next to each layer name in the Timeline panel, and each one matches the layer's spot in the stacking order. Whenever the stacking order shifts, After Effects renumbers everything to match. Because that stacking order sets the rendering order, it shapes how the composition renders for previews and for final output.
