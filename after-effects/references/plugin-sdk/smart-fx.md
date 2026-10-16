# SmartFX

Effects and After Effects talk to each other in both directions through the SmartFX API, which opens the door to numerous performance gains and surfaces dependency information that was not obtainable before. Implementing 32-bit-per-channel support in After Effects goes through this extension of the effect API.

A conventional effect plug-in receives a full-sized input buffer and is told to render a full-sized output buffer. The output extent_hint does mark which slice of the output buffer genuinely has to be filled, yet the arrangement remains quite wasteful when the effect doesn't require its whole input. On top of that, plenty of effects ignore extent hints altogether.
