# Manually animate an image with the Puppet tools

A Deform pin's Position property has its stopwatch switch set on automatically the instant the pin comes into being. As a result, each time you reposition a Deform pin, a keyframe is set or revised. That behavior sets it apart from most After Effects properties, where you have to switch the stopwatch on yourself by adding a keyframe or an expression before each property will animate. Because Deform pins auto-animate, it's easy to drop them in and animate them right in the Composition or Layer panel without ever touching the properties over in the Timeline panel.

1. Pick out the layer whose image you intend to animate.
   With the Puppet Pin tool, take one of these actions in the Composition or Layer panel:

Click any non-transparent pixel on a raster layer to apply the Puppet effect and build a mesh for the outline produced by auto-tracing that layer's alpha channel.

On a vector layer, clicking inside a closed path applies the Puppet effect and builds a mesh for the outline that path defines.

Click inside a closed, unlocked mask to apply the Puppet effect and build a mesh for the outline that the mask path defines.

Click outside every closed path on a vector layer to apply the Puppet effect without building a mesh. The layer's paths get outlines, but those outlines only show while a Puppet tool pointer hovers over the area they mark out. Hover the pointer over the region a path encloses to preview the outline where a mesh would form if you clicked that spot. Click within an outline to build a mesh.

Wherever you click to build the mesh is where a Deform pin lands.

Should an image prove too intricate for the Puppet effect to build a mesh at the present Triangle value, the Info panel reports a Mesh Generation Failed message. Bump up the Triangle value over in the Tools panel and have another go.

Click at one or more spots inside the outline to drop in additional Deform pins.

Get the result you're after with as few pins as you can. Over-constrain the image and you'll lose the natural deformation the Puppet effect offers. Place pins on the parts of the figure you know you want to govern. When animating someone waving, for example, drop a pin on each foot to anchor them to the ground, plus a pin on the waving hand.

Jump to another point in the composition's timeline and, with the Puppet Pin tool, drag one or more Deform pins to new positions inside the Composition or Layer panel. Carry on repeating this step until your animation is complete.

The motion paths of the Deform pins can be reshaped with the very same techniques you'd apply to any other motion path.

Note

After Effects no longer paints the tinted fill over the original layer region while you hover with the Puppet Pin tool.
