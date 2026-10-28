# Create a mask from a motion path

Position, anchor point, or an effect control point's position keyframes can be copied and then pasted onto a mask path or shape path you've selected. As you build mask paths or shape paths out of motion paths, be sure the keyframes you copy come from one Position property alone — leave every other property's keyframes out of it.

Tip

Sketch out a motion path using Motion Sketch — bring its panel up via Windows > Motion Sketch — and afterward drop that path into a mask path or shape path.

Note

Copying from a mask path over to a motion path comes with a catch: a mask path states its values in the layer's own coordinate system (layer space), while a motion path states them in the composition's coordinate system (composition space). Because of that mismatch the pasted path lands offset, so you'll have to nudge it back into place afterward. Learn more about coordinate systems – composition space and layer space.
