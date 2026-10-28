# Use the Reshape effect

Open a layer in the Layer panel.

Give each mask a name you'll readily spot in the Mask menu over in the Effect Controls panel.

Over in the Timeline panel, set the Mode menu to None for every mask.

Place the boundary mask to mark the region of the image that stays untouched. The interior of the boundary mask gets distorted; whatever lies outside it is left alone. To steer clear of foldovers, hold the boundary mask as far away from the source and destination masks as you can.

5. Scale and position the source mask over the image.
   Size and place the destination mask to point out the final shape. Distortions come out best when the source and destination masks sit in roughly the same spot.

Bring the Composition or Timeline panel to the front, select the layer, then choose Effect > Distort > Reshape.

Using the Mask menus, pick the source, destination, and boundary masks.

Dial in the Percent control and settle on an option for Elasticity.

Within the Composition panel, add, remove, or reposition correspondence points on the masks to steer the distortion:

Adding a point: Alt-click (Windows) or Option-click (macOS) the mask.

Removing one: Alt-click or Option-click the point itself.

Relocating one: simply drag it wherever you want.

Flipping the interpolation of a point pair: Shift-click a point. Smooth interpolation suits round masks best, while linear interpolation suits angular masks best, and you can mix smooth and linear interpolation within one composition.

Settle on an interpolation method and preview the distortion. When Linear or Smooth gives unwanted results, throw in more keyframes; when Discrete gives unwanted results, switch to another method.
