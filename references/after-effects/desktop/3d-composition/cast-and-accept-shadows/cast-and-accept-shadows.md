# Cast and accept shadows

Search Last updated on Feb 7, 2024

Decide how 3D objects respond to lighting and shadows within your composition by setting up their cast and receive shadows properties.

A layer holding 3D objects exposes Compositing Options, which is where you set whether those objects cast and receive shadows. Such properties matter a great deal: they establish how the 3D objects in a scene relate to one another and react to light and shadow.

Before you begin:

Start a fresh composition, bring in 3D models, and place an environmental light.

Within the Timeline panel, pick the layer whose 3D objects need their shadow properties set up.

Open the properties by twirling them down, then choose Composition Settings to reveal the Casts Shadows and Accepts Shadows options.

To set up the Casts Shadows properties, define these parameters:

- On: Switching the Casts Shadows option On makes the layer's 3D models throw shadows driven by the composition's environment light source.

- Off: Switching the Casts Shadows option Off stops the layer's 3D models from throwing any shadow at all.

- Only: Choosing Only keeps the layer's 3D models out of view while they continue to throw shadows.

3. Specify the Casts Shadows option as Only to hide the 3D object in the layer but still allow it to cast shadows.
   To set up the Accepts Shadows properties, define these parameters:

- On: With the Accepts Shadows option set to On, the layer's 3D models take on shadows from any asset that has Casts Shadows turned on.

- Off: With the Accepts Shadows option set to Off, the layer's 3D models reject shadows from assets that have Casts Shadows turned on.

- Only - Disabled: In contrast to Casts Shadows, picking Only - Disabled leaves the composition's shadow behavior untouched.

Wrap up your animation workflow, then export and render the composition the usual way.
