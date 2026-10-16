# Tips for creating control layers

With a lot of compound effects, neutral gray pixels in the control layer map to no operation at all, which makes a neutral gray solid layer a solid jumping-off point when you're building one.

For turbulent or atmospheric looks, a strong control layer comes from applying the Turbulent Noise effect to a layer and then precomposing it.

You can also assemble a control layer by precomposing a white solid layer together with a black solid layer plus a mask on the upper layer that decides which regions read white and which read black. Feather that mask more, and the handoff between black and white values grows gentler.

How sharply values shift across the control layer's surface comes down to the contrast between neighboring pixel values. For gradual transitions, lay down paint with a soft or anti-aliased brush, or drop in gradients; for sharp ones, skip the in-between tones and rely on a handful of well-separated shades — say 50% gray, black, and white.
