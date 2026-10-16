# seedRandom(offset, timeless=false)

Return type: none.

Argument type: offset is a Number, timeless is a Boolean.

A seed value steers the number sequence produced by the random and gaussRandom methods. By default that seed is derived from a unique layer identifier, the property inside the layer, the present time, and an offset of 0. Calling seedRandom with an offset other than 0 produces a different random sequence.

Pass true for the timeless argument to keep the current time out of the random seed. Doing so lets you produce a random number that won't change with the moment of evaluation.

It's the offset value — not the timeless value — that also governs the wiggle function's starting value.

For example, on the Opacity property this expression fixes Opacity to a random value that stays constant over time:

seedRandom(123456, true); random()\*100

Multiplying by 100 here turns the 0–1 value that random returns into one spanning 0–100; that span suits the Opacity property, whose values run from 0% to 100%, far better.
