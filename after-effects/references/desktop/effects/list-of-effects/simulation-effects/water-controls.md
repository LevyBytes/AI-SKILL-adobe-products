# Water controls

Water Surface

Names the layer that stands in for the water's surface. To build a 3D surface, Caustics reads that layer's luminance as a height map — bright pixels ride high, dark pixels sink low. A layer made with the Wave World or Radio Waves effect works here; precompose it first before handing it to Caustics.

Wave Height

Tunes how tall the waves stand relative to one another. Crank it up and the waves steepen while the surface shifts more dramatically; ease it down and the Caustics surface flattens out.

Smoothing

Rounds off the waves by blurring the water surface layer. Push it high to wipe out detail; keep it low and the flaws in the water surface layer remain on view.

Water Depth

Sets the depth. The same small ripple barely bends the view of the bottom in shallow water, yet warps it severely once the water is deep.

Refractive Index

Governs how sharply light bends on its way through the liquid. At 1, the bottom shows no distortion. Water is faithfully reproduced at the default of 1.2. Push the value higher to add distortion.

Surface Color

Sets the water's color.

Surface Opacity

Decides how clearly the bottom layer shows through the water. For a cloudy look, raise both Surface Opacity and Light Intensity; at 0 the liquid reads as clear.

Note

Push Surface Opacity to 1.0 for a flawless mirror of a sky layer. Pair that with the right texture map and you can conjure the look of liquid mercury.

Caustics Strength

Renders the caustics themselves — the pools of light gathered on the bottom by the lensing of the waves. Flipping this on transforms the whole look: the wave troughs deepen sharply while the crests brighten well beyond before. Leave it unset and the effect still bends the bottom layer as waves roll across, but skips rendering the lighting.
