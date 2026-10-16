# Work with Puppet pins and the distortion mesh

- To bring up the Puppet effect's mesh, choose Show in the options section of the Tools panel.
- To pick or reposition a pin, click or drag it with the Move tool. You activate the Move tool by resting the pointer on a pin while either the Selection tool or the matching Puppet tool is active.
- To pick several pins at once, Shift-click each one, or drag a Marquee-selection box around them with the Marquee-selection tool. That tool activates when you rest a Puppet tool's pointer outside every mesh and outline, or when you hold the Alt (Windows) or Option (macOS) key.
- To pick every pin of a single kind (Deform, Starch, or Overlap), select one pin of that kind and hit Ctrl+A (Windows) or Command+A (macOS).
- To remove selected pins, hit the Delete key. When a pin carries several keyframes and only the keyframe at the present time is selected, one press of Delete removes just that keyframe and a second press removes the pin.
- To send Deform pins back to where they originally sat at the present time, choose Reset for the Puppet effect in the Timeline or Effect Controls panel. Choosing Reset a second time strips every pin and mesh out of an instance of the Puppet effect.

Note

There are times you'll want to animate an image from a starting position, on through an in-between position, and back to where it began. Rather than hauling the pins back to their starting spots by hand at the animation's close, park the current-time indicator at the end time and choose Reset. Only the keyframes sitting at the present time get reset.

- To raise or lower how many triangles a mesh uses, adjust the Triangle value, found either in the Tools panel's options section or over in the Timeline panel. Changing the Triangle value sets it for whichever mesh is selected or, with no mesh selected, for meshes built afterward.
- More triangles give smoother results but lengthen render time. Small objects such as text characters tend to distort nicely on just 50 triangles, while a large figure can call for 500. The triangle count actually used may not line up precisely with the Triangle value; that value serves only as a target.
- To push the mesh past the original outline, raise the Expansion property, available either in the Tools panel's options section or via the Timeline panel. Changing the Expansion property sets it for whichever mesh is selected or, with no mesh selected, for meshes built afterward. Pushing the mesh out is handy for taking in a stroke.
- To copy an object using the Puppet Pin tool, click inside the original outline. The mesh that click produces carries its own duplicate of whatever pixels sit within that original outline. The Timeline panel offers a second route to the same outcome — duplicating a Mesh group there — which can beat trying to click inside the original outline while avoiding the mesh and dropping a pin.
