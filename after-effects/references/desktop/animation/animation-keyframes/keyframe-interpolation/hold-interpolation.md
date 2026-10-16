# Hold interpolation

Only as a temporal interpolation method is Hold interpolation offered. Reach for it when a layer property's value should shift over time without any gradual handoff. It serves well for strobe effects, or any case where layers should pop in or vanish all at once.

Apply Hold temporal interpolation across all keyframes of a layer property and the first keyframe's value stays put right up to the next keyframe, where the value flips at once. On the value graph, the segment that trails a Hold keyframe shows up as a flat horizontal line.

Although Hold interpolation exists solely as a temporal method, the motion-path keyframes still appear — they simply lack the connecting layer-position dots. Animate a layer's Position property with Hold interpolation, for example, and the layer stays at the prior keyframe's position value until the current-time indicator hits the next keyframe, whereupon it drops out of the old spot and pops up at the new one.

Freezing the current frame across the whole layer is easy with the Freeze Frame command. To do so, park the current time indicator on the frame you want frozen. Confirm the layer is selected, then choose Layer > Time > Freeze Frame. This switches on time-remapping and drops a Hold keyframe at the current time indicator's position, freezing that frame.

Note

Had you already turned on time-remapping for the layer, applying the Freeze Frame command wipes out any keyframes you'd made.

Hold interpolation is usable only for outgoing temporal interpolation — that is, for the frames that come after a keyframe. Create a keyframe right after a Hold keyframe and the new one picks up incoming Hold interpolation.

Note

Turning outgoing Hold interpolation on or off for a keyframe is done by selecting it in the Timeline panel and choosing Animation > Toggle Hold Keyframe.
