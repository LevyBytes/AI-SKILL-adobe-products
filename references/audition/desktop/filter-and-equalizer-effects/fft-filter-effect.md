# FFT Filter effect

Because Filter and EQ > FFT Filter is graph-based, you can sketch frequency curves or notches that either reduce or raise selected ranges. FFT means Fast Fourier Transform, a method for rapidly examining amplitude and frequency.

With this effect, you can build wide high- or low-pass filters that keep the upper or lower range, tight band-pass filters that mimic telephone audio, and notch filters that target small frequency spans.

Apply the FFT Filter effect for noise reduction based on frequency content and for tonal shaping.

Use the FFT Filter effect when tonal shaping or frequency-focused noise cleanup is required.

Scale

Sets how the horizontal x-axis lays out frequencies:

For more precise work in the low range, choose Logarithmic. A logarithmic scale is closer to human hearing.

For evenly spaced frequency intervals and detailed high-frequency edits, choose Linear.

Spline Curves

Smooths movement between control points with curved transitions instead of sharper straight-line changes. Learn more about spline curves for graphs.

Reset

Returns the graph to its default, unfiltered state.

FFT Size

Sets the Fast Fourier Transform size and therefore balances frequency detail against time accuracy. Higher values suit steep, exact frequency filters. Lower values reduce transient artifacts in percussive material. For most audio, values between 1024 and 8192 are effective.

Window

Sets the Fast Fourier Transform shape; every choice produces a different frequency response curve.

The functions appear from the narrowest through the widest. Narrower functions use fewer nearby, or sidelobe, frequencies, though they identify center frequencies with less precision. Wider functions include more neighboring frequencies while representing center frequencies more accurately. Hamming and Blackman are strong general-purpose choices.
