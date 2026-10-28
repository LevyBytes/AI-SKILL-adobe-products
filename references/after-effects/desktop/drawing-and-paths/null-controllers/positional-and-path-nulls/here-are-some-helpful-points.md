# Here are some helpful points:

- Whenever you like, the Effects Controls panel will show or let you change the Layer Control, which sets the layer driving the bound positional property. Lean on this to tie positional points to other layers that already exist.

Use the Effects Controls panel to view or adjust the Layer Control for the linked positional property.

- Split a layer's Position into separate dimensions (breaking the X, Y, and Z axes into their own properties) once you've bound that Position to a controller Null, and the Null stops driving them until you tie them back in. Reconnect the separated Position properties to the Null by right-clicking and running the linking command once more.

After separating a layer's Position dimensions (X, Y, Z) into individual properties, re-link them to the controller Null.

- A Null controller inherits the layer's dimensionality on creation: 2D layers get a 2D Null, 3D layers get a 3D one. Switch a 3D Null down to 2D and any linked 3D layers hold their on-screen 2D placement. That makes it straightforward to bind 3D layers into 2D space and 2D layers into 3D space.
