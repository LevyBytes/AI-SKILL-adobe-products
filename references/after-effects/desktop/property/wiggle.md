# wiggle(freq, amp, octaves=1, amp_mult=.5, t=time)

Return type: Number or Array.

Argument type: freq, amp, octaves, amp_mult, and t are Numbers.

Jitters (wiggles) the property's value at random.

freq sets the rate, counted in wiggles per second.

amp sets the swing, measured in the units of whatever property it acts on.

octaves counts how many octaves of noise get stacked together, governing the wiggle's level of detail. Push it past its default of 1 to fold in higher frequencies, or pull it lower to fold in amplitude harmonics.

amp_mult is the multiplier applied to amp at every octave, which dictates how quickly the harmonics taper. It defaults to 0.5; nudge it toward 1 so the harmonics ride at the base frequency's amplitude, or toward 0 so less detail enters.

t marks the base start time, defaulting to the current time. Supply it when you want the result to sample the property's wiggle at some other moment.

Example: position.wiggle(5, 20, 3, .5) yields roughly 5 wiggles each second averaging about 20 pixels. On top of that primary wiggle, two further tiers of fine wiggles appear, running at 10 and 20 wiggles per second with sizes of 10 and 5 pixels in turn.

Placed on a two-dimensional property such as Scale, the example below wiggles both dimensions by an identical amount:

v = wiggle(5, 10); [v[0], v[0]]

Placed on a two-dimensional property, this example wiggles along the y-axis alone:

freq = 3; amp = 50; w = wiggle(freq,amp); [value[0],w[1]];
