# Create Null controllers for Positional properties

Nulls Controllers for Positional Properties let you spin up controller Nulls from any positional point in moments, so that point can be animated like a standalone layer. The motion of one specific point — a Position or an Anchor Point sitting inside a Shape, object, or layer — can then be isolated and driven apart from the rest of that same layer.

Arrange your composition and layers however the project calls for.

Click the layer where you intend to build Null controllers for positional points.

Choose the layer by itself and run the Null Controllers for Positional Points command, and the Position property of whatever layer(s) you selected gets bound to controller Nulls.

Binding any other positional property — Anchor Point, for instance — requires that you select the property within the timeline first.

2. An example where the Anchor Point is selected in the timeline to be linked to a controller Null.
   Pick any one of these to generate a Null layer for positional points:

- Layer > Create > Null Controllers for Positional Points.
- Animation > Keyframe Assistant > Null Controllers for Positional Points.
- Right-click the positional property of the layer in the Timeline or Properties panel > Keyframe Assistant > Null Controllers for Positional Points.

- Confirm the project is running on the JavaScript Expression engine. Set this under Project Settings > Expressions > Expressions Engine > JavaScript.
- Check that no two layers in the composition share the same name.

The resulting Null layer takes its name from the layer and property it's bound to. Its label color carries over too, which makes it simpler to tell apart and find.

4. A Null layer is created, named and colored to match the linked layer and property.
   From there, put the Null controllers to work adjusting the bound Position property.
