# Input Phase controls

Get Phase From

Which color attribute serves as input. Pick Zero to pull a color attribute from a different layer.

Add Phase

The second layer fed in as input. To feed in this layer alone, set Get Phase From to Zero; otherwise both the Add Phase layer and the layer carrying the effect are used. You're free to pick the layer carrying the effect, adding a second input attribute drawn from that same layer.

Add Phase From

Which color attribute from the second layer serves as input.

Add Mode

The way input values get combined:

Wrap

Sums the two attributes' values for each pixel. Anything past 100% wraps back around the cycle. A sum of 125%, for instance, wraps around to 25%.

Clamp

Sums the two attributes' values for each pixel. Anything past 100% is clipped to 100%.

Average

Takes the mean of the two attributes' values for each pixel. Since the mean of two values each sitting between 0% and 100% never tops 100%, this operation never has to wrap or clamp. That makes Average the safest pick for predictable output.

Screen

Screens the second layer atop the original layer; the second layer's brighter regions lighten the first layer, while its darker regions are thrown away. Screen mode shines especially for compositing fire, lens flares, and other lighting effects.

Phase Shift

Where on the Output Cycle wheel the mapping of input colors kicks off. Push this positive and the starting point spins clockwise around that wheel.

Tip: Send colors cycling around the wheel by animating Phase Shift.
