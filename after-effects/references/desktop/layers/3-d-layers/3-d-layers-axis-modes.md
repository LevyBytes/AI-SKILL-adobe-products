# 3D layers - Axis modes

Which set of axes a 3D layer transforms along is governed by axis modes. Pick one from the Tools panel.

Switching among the Axis modes lets you handle and inspect a layer's 3D axes against different frames of reference.

Local Axis mode

Lines the axes up with the surface of a 3D layer.

World Axis mode

Lines the axes up with the composition's absolute coordinates. However you rotate a layer, these axes keep standing for 3D space as measured against the 3D world.

View Axis mode

Lines the axes up with whichever view you've chosen. Say a layer has been rotated and you've switched to a custom view: from then on, any transformation you apply to that layer in View Axis mode runs along the axes that match the direction you're viewing it from.

The axis modes only diverge from one another once a composition contains a 3D camera.

Note

- Because the Camera tools always work along the view's own local axes, the axis modes have no bearing on what the Camera tools do.
- Whichever 3D axis mode you used last is what the Tools panel restores after you quit and relaunch After Effects.
