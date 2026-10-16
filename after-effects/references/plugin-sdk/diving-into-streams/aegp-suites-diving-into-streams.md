# AEGP Suites — Diving Into Streams!

Practically everything within After Effects is a stream. Under the hood, effect parameters, layers, masks, and shapes all take the form of streams. Nearly every facet of every stream is reachable through the AEGP API.

Many kinds of objects can sit in the After Effects timeline, and each one carries a collection of parameters known as streams. No matter which object type they hang off, all streams are conceptually alike (and After Effects treats them alike, too. What changes is how you reach each kind of stream, owing to where it lives.

Once you've acquired a stream, it stands for a value that can shift across time. Some streams _cannot_ vary over time, and even a given stream might not be time-variant at the moment you access it.

The value of a stream can be reached in two ways. When a stream carries keyframes, you can turn to the Working With Keyframes. The values handed back won't take expressions into account. Note: within any expression, you can always reach the present keyframed value through the variable named value.

The other route is `AEGP_GetNewStreamValue` from `AEGP_StreamSuite5`, which samples the stream's value at whatever time you pick. When a stream has no expressions or keyframes, the time parameter doesn't matter, and what the function returns is effectively the stream's constant value. To assign such streams, use `AEGP_SetStreamValue` (which takes no time parameter).

Plenty of StreamSuite functions fill in a StreamH that your AEGP is obliged to dispose of when finished. After Effects hands you a copy of the values it has allocated, rather than a direct handle onto the original value. `AEGP_GetNewLayerStream`() is limited to streams whose values can be read without allocating any memory.
