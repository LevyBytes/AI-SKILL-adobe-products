# `PF_InData` — Point Controls And Buffer Expansion

Effects that grow the output buffer place the original layer's top-left corner by setting output*origin_x/y in `PF_InData` during `PF_Cmd_FRAME_SETUP`.

Effects further down the chain are told of this shift through the pre_effect_source_origin_x/y. Point parameters get adjusted for the shift on their own.

Put a buffer expander like Gaussian Blur or the Resizer SDK sample ahead of your effect, and feed it a large resize value.

Where your effect mishandles pre_effect_source_origin_x/y, toggling the blur on and off will move the output's position.

Every point parameter value, at any time, carries shift values given by pre_effect_source_origin_x/y. This is seamless for the majority of effects.

That said, when a buffer expansion shifts over time — an animated blur amount, say — the origin shift will displace points that aren't animated.

Keep this in mind while designing effects that cache point parameter values from one frame to the next.
