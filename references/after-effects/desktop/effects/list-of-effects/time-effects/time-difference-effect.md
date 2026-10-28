# Time Difference effect

Time Difference effect

Time Difference effect

By computing the color difference between two layers, the Time Difference effect lends a hand in color correction; lean on it to pull out color differences while matching a clean background plate against foreground footage. It's handy too for building mattes that drive trails of smoke, fire, or echo effects. Once you've applied the Time Difference effect to pinpoint color differences in the footage, Color Correction effects can carry out the corrections.

This effect works with 8-bpc color.

Note

Pair Time Difference with Particle Playground to shed particles from moving sections alone.

Target

Names the layer that gets compared to the effect layer. The comparison layer's video switch needn't be on (unless you pick the source layer as the Target).

Time Offset

Where in the comparison layer, in seconds, the layers are compared. Set this control to 0.00 and the comparison happens at the current time. To stack the effect layer against a point 3 seconds into the comparison layer, for example, set Time Offset to 3. Select the underlined offset value and you can type the exact frame-offset value in the format frames/frame rate. After Effects works out the value automatically. Enter 3/30, for instance, to jump three frames forward in a 30-fps composition. The computed value is 0.1, or 10% of the total time.

Contrast

Tunes the comparison result. For fine-tuning color corrections, this control can be especially useful.

Absolute Difference

Shows the comparison result as an absolute value. Black stands for any area of the comparison layer that matches the effect layer, while any degree of difference shows up brighter than black. Deselect this option and compared areas with no difference appear gray instead.

Alpha Channel

Sets how the alpha channel is computed.

- Original: Draws on the effect layer's alpha channel.

- Target: Draws on the target layer's alpha channel.

- Blend: Mixes together the alpha channels of the target layer and the effect layer.

- Max: Takes whichever alpha channel is more opaque.

- Full On: Makes the alpha channel opaque.

- Lightness Of Result: Takes the lightness of the RGB difference for the alpha.

- Max Of Result: Takes the top values of the RGB difference for the alpha.

- Alpha Difference: Works out the alpha-channel differences between the effect layer and target layer the same way the RGB difference is worked out.

- Alpha Difference Only: Works out the alpha-channel differences alone. RGB gets set to white.
