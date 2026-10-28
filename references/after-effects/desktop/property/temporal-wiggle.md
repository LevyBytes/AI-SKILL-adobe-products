# temporalWiggle(freq, amp, octaves=1, amp_mult=.5, t=time)

Return type: Number or Array.

Argument type: freq, amp, octaves, amp_mult, and t are Numbers.

Reads the property at a wiggled time. Here freq is the frequency in wiggles per second, amp the amplitude in units of the applied property, octaves the count of noise octaves summed together, amp_mult the factor amp is multiplied by per octave, and t the base start time. The function only carries meaning when the sampled property is animated, since it shifts the sampling time rather than the value. Example: scale.temporalWiggle(5, .2)
