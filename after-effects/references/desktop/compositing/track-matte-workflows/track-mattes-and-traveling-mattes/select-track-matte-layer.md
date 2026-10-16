# Select Track Matte layer

Within the Timeline panel, pinpoint the layer that will act as the Track Matte layer.

Pick the layer that the Track Matte should apply to.

Inside the Modes column, choose your Track Matte layer from the Layer List dropdown, or drag the pick whip to designate which layer feeds the Track Matte source.

Should the Modes column be hidden, right-click anywhere in the timeline header area > Columns > Modes.

3. The Layer List dropdown to pick which layer you use as a Track Matte.
   Choosing a layer as a Track Matte flips on two toggle switches. Transparency for the Track Matte is governed through these switches:

Alpha Matte

Renders opaque where a pixel's alpha channel value reaches 100%

Luma Matte

Renders opaque where a pixel's luminance hits 100%

Alpha Inverted Matte

Renders opaque where a pixel's alpha channel value drops to 0%

Luma Inverted Matte

Renders opaque where a pixel's luminance falls to 0%

Even with video disabled on the matte layer, that layer stays selectable so you can move, scale, or rotate it. Click the layer inside the Timeline panel, then grab its center — shown as a circle with an X — and drag it within the Composition panel. Selecting a layer as a track matte switches off the track matte layer's visibility by default, yet you can switch it back on whenever you still want it present in your composition.

Working with a Track Matte parallels the Preserve Underlying Transparency option, where a layer inherits transparency from the combined transparency of whatever layers sit beneath it in the stacking order. Learn more about the Preserve Underlying Transparency feature.

- Apply the Levels effect to push more contrast between the bright and dark portions of the matte layer. Doing so cuts down on the abundance of mid-range values that produce partial transparency. (Mattes typically work best when regions are fully opaque or fully transparent, apart from the edges.)
- When you want some channel besides the matte layer's alpha channel to act as the matte, reach for a Channel effect — the Shift Channels effect, for instance — to feed the chosen channel's value into the alpha channel.
- For a Track Matte that travels along with the layer it mattes, parent the Track Matte to that layer. Learn more about parent and child layers.
