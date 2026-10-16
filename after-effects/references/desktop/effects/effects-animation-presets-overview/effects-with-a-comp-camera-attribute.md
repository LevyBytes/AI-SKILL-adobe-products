# Effects with a Comp Camera attribute

A few effects are able to draw on the camera and lights belonging to the same composition; Card Dance, Card Wipe, and Shatter are among them. Some of these always tap the composition camera, while others expose camera and light options in the Effect Controls panel.

Note

The Live Photoshop 3D effect acts like an effect carrying a Comp Camera attribute. It surfaces on a layer only when that layer is a 3D object layers from PSD file.

Apply an effect that has a Comp Camera attribute to a 2D layer, and it can follow the composition's camera and light positions and paint a 3D image onto the very 2D layer it's attached to. Although the outcome looks three-dimensional, the layer holding the Comp Camera attribute stays a 2D layer, which carries these consequences:

Neither can the 3D layers stacked over and under it in the Timeline panel pass through one another or throw shadows onto one another.

Intersecting with 3D layers, or casting and receiving shadows, is beyond it.

Note

Because the rendering lands on the layer rather than on the composition, take care to attach these effects to layers that match the composition's size and sit precisely centered within it.
