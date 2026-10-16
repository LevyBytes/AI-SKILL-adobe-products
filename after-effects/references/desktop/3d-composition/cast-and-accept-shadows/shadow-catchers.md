# Shadow catchers

Search Last updated on Jun 18, 2024

Make composites over 2D content look more believable by dropping shadows onto a 3D shadow catcher.

Think of a shadow catcher as its own separate plane or surface, sitting behind or beneath the object, that receives the shadows other objects throw. Although built specifically to capture shadows, this 3D layer is otherwise see-through, which lets the shadows look as though they land on the 2D layer below.

Set Accepts Shadows to Only under a shadow catcher layer's Material Options properties, and After Effects renders the layer itself invisible (transparent) yet still able to catch shadows thrown by objects on the layers above.

A sample showing the shadow catcher layer both before and after Accepts Shadows is set to Only.

Before you begin:

Bring a video clip or image plus a 3d model into your project.

Drop a video or image onto the timeline to serve as the composition's background.

Bring in a 3D model whose job is to throw a shadow.

Place an Environment light to serve as the light source for the added 3D model's shadow.

Create a solid layer and turn it into a 3D layer. Using the X Rotation property beneath Transform, rotate it so it lines up with whatever surface should receive the shadow.

The easiest pick is a solid, though any 3D layer capable of accepting shadows works as a shadow catcher.

Position the Solid layer beneath the 3D model so it acts as a shadow catcher layer.

A. Layer with a 3D model that is to cast the shadow B. Solid 3D layer that acts as a shadow catcher C. Layer with a video or an image on which the 3D model shadow is cast

5. The sequence of layers in the timeline utilizes the shadow catcher layer for natural-looking shadows on the background.
   Confirm that Casts Shadows is enabled for the 3D model.

Twirl open the 3D solid layer's properties, and beneath Material Options, flip the Accepts Shadows option to Only.

7. Set the Accepts Shadows property as Only so that the layer accepts the shadows but is invisible in the composition.
   Should you want to fine-tune how the shadow catcher layer responds to light, change the values of the properties under Material Options.

Black is the Shadow Color default, but adjusting the Shadow Color property lets you push your shadows toward a more natural or imaginative tint.

9. Use the Shadow Color property to add a natural shadow tone and create a realistic composite.

Tip

Got embedded animations in your 3D model? Reach for the Animation Options to choose the animation for the composition. While that animation runs, the shadow on the shadow catcher layer updates and is recast to match.
