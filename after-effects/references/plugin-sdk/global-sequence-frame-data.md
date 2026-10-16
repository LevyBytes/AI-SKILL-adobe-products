# Global, Sequence, & Frame Data

Three storage scopes are open to plug-ins under After Effects: global, sequence, and frame. Weigh your choice of where to keep information with care; a bad call can drag down performance or leave users baffled by your plug-in.

Reserve global data for whatever every instance of the effect shares: static variables and data, bitmaps, and pointers off to other DLLs or outside applications. Should your effect handle Multi-Frame Rendering, every static or global variable has to be clear of race conditions (the topic What does it mean for an effect to be thread-safe? covers this in more depth).

Whatever belongs to this particular plug-in instance — UI settings, text strings, plus any custom data you don't keep in parameters — goes into Sequence Data or the new Compute Cache For Multi-Frame Rendering.

As for frame data, it holds whatever pertains to rendering one specific frame. Most machines can now pull a whole frame into memory at once, so this scope has largely gone unused. Naturally, the folks among your users generating IMAX frames will be grateful for whatever optimizations you manage.
