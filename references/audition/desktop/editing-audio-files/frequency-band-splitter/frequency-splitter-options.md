# Frequency Splitter options

Bands

Sets how many split points are used. Audition copies the original waveform the number of times you enter, and each copy receives a separate frequency range based on the crossover count.

Maximum

Sets the highest frequency for each band. Minimum and Bandwidth are calculated from the maximum frequency values for the current band and neighboring bands.

Scale

Sets the scale used to draw the bands visually. The available choices are Linear and Logarithmic.

Max FIR Filter Size

Controls the largest allowed size for the FIR (Finite Impulse Response) filter, which keeps phase errors across the response curve. FIR filters differ from IIR filters, which may introduce phase error that is often heard as a ringing quality. Higher settings improve frequency-filtering accuracy. The default value, 320, is suitable in most cases, but raise it if filtered waves show distortion or ringing.
