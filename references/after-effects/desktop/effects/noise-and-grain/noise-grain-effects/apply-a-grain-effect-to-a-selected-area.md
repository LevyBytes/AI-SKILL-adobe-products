# Apply a grain effect to a selected area

Through masking and matting a chosen region, the Blend with Original controls group lets you target a grain effect precisely at one part of an image. Two selection methods are open to you, and you can mix them:

- Color Matching: leaves out any image region whose color matches one you pick. Flip the matte and you can instead single such a region out for processing.
- Masking Layer: pulls in any layer from the current composition to act as a mask, so you can process or omit a region of the active layer or track.

The moment any grain effect goes on, the Amount value within the Blend with Original controls group sits at 0%. That figure sets how much the original image and the processed version are blended. With it at 0% nothing blends and the chosen effect hits the whole image at full strength; at 100% the white regions of the blending matte stay exactly as they were in the original.

Whatever mask or matte you use behaves the same way: its white pixels keep that region of the original out of the grain effect's reach, while its black pixels go through processing as usual. Set Amount to 100% and the white regions blend completely with the original, so they drop out of processing entirely. That holds true even after the match is inverted. The black regions of a matte or mask always get processed no matter what Amount reads. All the Amount slider touches is the territory beneath the white pixels of the matte or mask — purely how each grain effect handles those white areas.

Put a grain effect on the image.

Then, in the Effect Controls panel, take one of these routes:

- When you want a matte drawn around the region the grain effect should hit or skip, work with the Color Matching controls inside the Blend with Original controls group.
- When you'd rather mask the current layer using another layer or track, work with the Masking Layer controls.

Raise or lower the Blur Matte value to soften the matte, smoothing the handoff between the parts of the image that are affected and those that aren't.

Should you be running a color matte and a layer mask together, pick one of these from the Combine Match and Mask Using dropdown menu:

- Screen: turns the matte white anywhere that either the mask or the color match is white.
- Multiply: turns the matte white only where both inputs are white.

Pull the Amount value down to let more of the underlying image read through the grain.

Choose Final Output from the Viewing Mode dropdown menu.
