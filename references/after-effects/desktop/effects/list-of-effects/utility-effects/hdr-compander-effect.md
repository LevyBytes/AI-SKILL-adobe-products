# HDR Compander effect

The HDR Compander (compressor/expander) effect opens a path to using tools that can't handle high-dynamic-range color—8-bpc and 16-bpc effects among them—while keeping the footage's high dynamic range intact.

What the HDR Compander effect does is squeeze the HDR image's highlight values down into the range an 8-bpc or 16-bpc (low-dynamic-range) image allows, then stretch those values back out to the 32-bpc range afterward.

Place the HDR Compander effect on a layer twice over: once above the low-dynamic-range effects in the stack, and once below them.

Sampling drives the first HDR Compander instance as it compresses the value range, so a little precision slips away. That's why you should turn to the HDR Compander effect only when you're willing to trade some value precision for the sake of high dynamic range.

Color depths of 8-bpc, 16-bpc, and 32-bpc are supported.
