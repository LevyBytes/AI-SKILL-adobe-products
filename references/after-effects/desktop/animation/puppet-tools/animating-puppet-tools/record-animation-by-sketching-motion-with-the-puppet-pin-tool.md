# Record animation by sketching motion with the Puppet Pin tool

The motion path of one or more Deform pins can be sketched in real time — or at whatever speed you set — in much the same way you'd sketch a layer's motion path through Motion Sketch.

Should your composition include audio, you can sketch motion in step with that audio.

Ahead of recording any motion, it's worth setting up your recording preferences. Select Record Options in the Tools panel to bring up the Puppet Record Options dialog box.

Speed

How the speed of the recorded motion compares with the speed of playback. At a Speed of 100%, the motion plays back exactly as fast as it was recorded. Push the Speed above 100% and the motion plays back more slowly than it was recorded.

Smoothing

Raise this value to strip more stray keyframes out of the motion path while it's being drawn. Fewer keyframes yield smoother motion.

Use Draft Deformation

The distorted outline you see during recording disregards Starch pins. On a complicated mesh, this option can speed things up.

Note

This walkthrough assumes Deform pins are already sitting in the object you mean to animate. To learn how those pins get placed, refer to Manually animate an image with the Puppet tools.

Choose at least one Deform pin.

2. Move to the moment where motion recording should start.
   Inside the Composition or Layer panel, holding down Ctrl (Windows) or Command (macOS) summons the Puppet Sketch tool. Animate the pins by dragging them with Ctrl held (Windows) or Command held (macOS).

The recording of motion kicks off the moment you click to start the drag, and it stops once you let go of the mouse button.

For the mesh whose motion is being sketched, the outline takes on the same color as the pin (yellow). Reference outlines belonging to other meshes on that same layer pick up the layer's label color instead.

Once done, the current-time indicator jumps back to where recording started, so you can run the recording again with more Deform pins or redo it using the same pins.

The motion paths of the Deform pins can be reshaped with the very same techniques you'd apply to any other motion path. A pin's motion path only displays when that pin is the sole one selected.

Note

Have a go at making several duplicate meshes and sketching motion for each one. When a single Puppet effect instance holds more than one mesh, the reference outlines of the rest stay visible as you sketch motion for any one of them, so you can trail their movements — loosely or exactly.
