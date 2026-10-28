# Data Types - Nasty, Brutish, and Short

Details about layers, streams, and plenty of other items are short-lived — user actions tend to invalidate them in short order.

Anything that changes how many items exist (their quantity, not their quality) will void references to those items: drop a keyframe onto a stream and references to that stream go stale, though pushing a layer through a render leaves references to it intact. Never cache a layer's pixels.

Holding onto references across separate invocations of one of your plug-in's hook functions is a bad bet; grab what you need at the moment you need it, and let it go (release it) the instant you can.
