# Textures controls

The look of the fragments' surfaces is set through the Textures controls.

Color

Sets the fragment's color, governed by the Front Mode, Side Mode, and Back Mode menus. Whether this color shows depends on the Mode choices: when a Mode reads Color, Tinted Layer, Color + Opacity, or Tinted Layer + Opacity, the chosen color feeds into how the fragment looks.

Opacity

Governs the opacity tied to the matching Mode setting. The opacity changes a fragment's look only when a Mode is set to Color + Opacity, Layer + Opacity, or Tinted Layer + Opacity. Pair the Opacity control with texture maps to fake the appearance of semitransparent materials.

Front Mode, Side Mode, Back Mode

Set how the front, sides, and back of the fragments look. Color paints the chosen color onto the relevant face of the fragment. Layer grabs whatever layer is picked in the matching Layer menu and wraps it onto the relevant face. Tinted Layer mixes the picked layer with the chosen color, yielding something like looking at the layer through a tinted filter. Color + Opacity merges the chosen color with the Opacity amount: at Opacity 1 the relevant face takes the chosen color, and at Opacity 0 it goes transparent. Layer + Opacity merges the picked layer with the Opacity amount: at Opacity 1 the picked layer wraps onto the relevant face, and at Opacity 0 it goes transparent. Tinted Layer + Opacity merges the tinted picked layer with the Opacity amount: at Opacity 1 the tinted picked layer wraps onto the relevant face, and at Opacity 0 it goes transparent.

Note

When you apply Shatter to a layer whose alpha channel you intend to use for transparency, give the fragments' front, sides, and back the same texture — or at minimum another layer carrying an identical alpha channel — so that every face turns transparent.

Front Layer, Side Layer, Back Layer

Set which layer gets wrapped onto the matching face of the fragment. Front Layer wraps the picked layer onto the fragment's front. Back Layer wraps the picked layer backward onto the layer. Set Front Mode and Back Mode both to Layer, feed each the same layer, and every shattered fragment ends up with matching pixel data on both faces. Side Layer wraps an extrusion of the picked layer onto the fragment's extruded sides, as though that layer also covers the front and back and the layer has been cut clean through.

Note

Pick a layer that has an effect applied, and the effect stays absent from the texture unless you precompose that layer. Choose None, though, and the layer you applied Shatter to — together with any effects landing ahead of Shatter — serves as the texture map with no precomposing needed.
