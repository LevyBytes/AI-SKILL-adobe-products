# Puppet Starch controls

As you warp one part of an image, there may be times you'd like to keep other parts from warping. Holding an arm rigid while you move a hand to make it wave is one such case. The Puppet Starch tool lets you drop Starch pins onto the part of an object you want to keep stiff.

Starch pins go on the original outline, not on the distorted image.

Unwanted distortion in figure (upper left) is prevented with Starch pin (upper right and lower left)

These are the properties carried by each Starch pin:

Amount

How strong the stiffening agent is. Starch pins build on one another, meaning their Amount values get summed wherever extents overlap on the mesh. A negative Amount value lets you cancel out the pull of another Starch pin at a particular spot.

Note

Should you spot an image tearing close to a Deform pin, set a Starch pin with a tiny Amount value (under 0.1) near that Deform pin. Small Amount values help hold image integrity together without adding much stiffness.

Extent

How far the pin's pull reaches out from the Starch pin. That pull stops sharply rather than tapering off with distance from the pin. A pale fill across the affected parts of the mesh marks the extent visually.

The Puppet effect isn't limited to still images — you can run it on a layer whose source is motion footage. You might, for instance, warp everything in the whole composition frame to track an object moving within that frame. For that, think about building a mesh for the entire layer, treating the layer boundaries as the outline, and running the Puppet Starch tool around the edges to keep the layer's edges from warping.
