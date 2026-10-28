# FFT Filter

FFT Filter lets you draw curves or notches for rejecting or boosting chosen frequencies. FFT means Fast Fourier Transform, which rapidly evaluates amplitude and frequency content.

This effect can create:

- Broad high or low-pass filters (to keep high or low frequencies)
- Narrow band-pass filters (to imitate a telephone-call sound)
- Notch filters (to remove narrow, exact frequency ranges)

  - For more detailed low-frequency control, select Logarithmic. A logarithmic scale more closely matches human hearing.
  - For detailed high-frequency edits with evenly spaced frequency intervals, select Linear.

- Spline Curves: creates smoother curved transitions between control points instead of sharper linear transitions.
- Reset: returns the graph to its default state and removes filtering.
  - FFT Size: sets the Fast Fourier Transform size, which controls the tradeoff between frequency accuracy and time accuracy. Choose higher values for steep, precise frequency filters. Choose lower values to reduce transient artifacts in percussive audio. Values from 1024 through 8192 work well for most material.
  - Window: sets the Fast Fourier Transform shape, with each choice producing a different frequency response curve. The functions are ordered from narrowest to widest. Narrow functions include fewer surrounding, or sidelobe, frequencies but represent center frequencies less precisely. Wider functions include more surrounding frequencies but represent center frequencies more precisely. Hamming and Blackman provide strong overall results.
