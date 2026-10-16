# Basics of Legacy Puppet tool

What the Puppet effect does is warp a portion of an image in line with where you set down pins and how you move them. Those pins decide which areas of the image shift, which stay fixed, and which sit in front once areas overlap.

Every Puppet tool exists to set down and adjust one particular kind of pin:

Puppet Pin tool

Reach for this tool to set down and reposition Deform pins.

Puppet Overlap tool

Reach for this tool to set down Overlap pins, which mark the parts of an image that ought to sit in front of the rest whenever distortion makes portions of the image overlap.

Puppet Starch tool

Reach for this tool to set down Starch pins, which firm up portions of the image so they distort less.

Mesh created by placing Deform pins (left), and result of dragging a Deform pin

The moment you set down the first pin, the region inside an outline is split automatically into a triangular mesh. That outline only becomes visible once the Puppet effect has been applied and a Puppet tool pointer hovers over the area the outline marks out. Because every piece of the mesh is also tied to the image's pixels, the pixels travel along with the mesh.

Note

Select Show in the Tools panel to reveal the mesh.

Shift one or more Deform pins and the mesh reshapes itself to take in that movement while staying as rigid as it can overall. The upshot is that moving one part of the image triggers natural, lifelike motion elsewhere.

To take an example: drop Deform pins on a person's feet and hands, then move one hand so it waves — the attached arm swings a lot, while the waist barely budges, exactly as it would in reality.

Select a single animated Deform pin and its Position keyframes appear as a motion path in the Composition and Layer panels. These motion paths behave like any other motion path you work with, right down to setting keyframes that rove across time.

A single layer can carry several meshes. That comes in handy when you want to warp various parts of an image on their own — text characters, say — and also when you want to warp several copies of the same image part, each with its own distortion.

When you apply the effect, the original undistorted mesh is computed at the current frame. The mesh won't reshape itself to follow motion in a layer driven by motion footage, nor will it refresh if you swap out a layer's source footage item.

Note

Steer clear of animating the position or scale of a continuously rasterized layer through layer transformations while you're also animating that layer with the Puppet tools. Continuously rasterized layers — shape and text layers, for instance — follow a render order that isn't the same as that of raster layers. You can precompose the shape layer and run the Puppet tools on the precomposition layer, or use the Puppet tools to transform the shapes inside the layer.

Whatever motion the Puppet tools generate gets sampled by motion blur when motion blur is switched on for both the layer and the composition, though only half the count set by the Samples Per Frame value is used.

Note

Through expressions, a Deform pin's position can be bound to motion tracking data, to audio amplitude keyframes, or to whatever other property you choose.
