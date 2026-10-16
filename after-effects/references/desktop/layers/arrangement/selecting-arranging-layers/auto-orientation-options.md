# Auto-Orientation options

A layer's auto-orientation options (Layer > Transform > Auto-Orient) govern how its orientation answers to motion paths, points of interest, and cameras.

Off

The layer spins freely, paying no mind to the motion path, the point of interest, or any other layers.

Orient Along Path

The layer turns to face whichever way the motion path heads. Use it on a camera, for example, to convey the view of a driver watching the road ahead while driving.

Orient Towards Camera

The layer keeps itself turned to face the active camera at all times. It's on offer for 3D layers – yet not for 2D layers, cameras, or lights. 3D text layers gain an extra option, Orient Each Character Independently, which turns each character about its own anchor point. Switching on Orient Each Character Independently turns on per-character 3D properties for the text layer if they weren't on already.

Orient Towards Point Of Interest

The camera or light keeps aimed at its point of interest. This one is on offer for nothing other than cameras and lights.

Note

Set an auto-orientation option on a layer and then alter its Orientation or its X, Y, or Z Rotation properties, and the layer orientation gets offset by those new values. You might, for instance, give a camera an Orient Along Path and then swing it 90 degrees to the right to convey the view of a passenger gazing out the side window of a moving car.

That automatic aim toward the point of interest happens ahead of the Rotation and Orientation transformations. So when a camera or light set to Orient Towards Point Of Interest should glance briefly elsewhere, it's the Rotation and Orientation transform properties you animate.

### More like this

- Parent and child layers
- Color labels for layers, compositions,and footage items
- Search and filter in the Timeline, Project, and Effects Presets panels
- Render order and collapsing transformations
