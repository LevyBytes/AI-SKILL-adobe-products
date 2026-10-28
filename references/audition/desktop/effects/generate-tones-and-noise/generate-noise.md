# Generate Noise

The Noise command creates random noise in multiple colors. Color traditionally describes the spectral makeup of noise, and each color has distinct behavior. Noise generation helps build calming sounds, including waterfall-like material that pairs well with the Binaural Auto-Panner function in Adobe Audition, and it can also produce test signals for checking the frequency response of a speaker, microphone, or another audio-system component.

Set the cursor at the insertion point for the noise. To replace existing waveform material instead, select the desired range of audio data.

Select Effects > Generate > Noise.

Set these options as needed:

Use Generate Noise effect settings to choose the noise color, style, and related values.

Color

Sets the noise color:

- Brown noise: has a spectral frequency of 1/f2. In plain terms, this means the noise contains much more low-frequency energy, giving it a thunder-like or waterfall-like sound. The name Brown noise comes from Brownian motion: each next waveform sample equals the previous sample plus a small random amount. When plotted, the waveform resembles jagged peaks.
- Pink noise: has a spectral frequency of 1/f and appears often in nature. Among these noise types, it sounds the most natural. With equalization, pink noise can produce believable rainfall, waterfalls, wind, rushing rivers, and other natural sounds. Pink noise sits exactly between brown and white noise, which is why some people formerly called it tan noise. It is neither fully random nor predictable; visually, it has a fractal-like character. When magnified, the pattern resembles the zoomed-out version, but at lower amplitude.
- White noise: has a spectral frequency of 1, so all frequencies are present in equal proportions. Because human hearing is more sensitive to high frequencies, white noise has a very hissy sound. Adobe Audition creates white noise by selecting random values for each sample.

Style

Sets the noise style:

- Spatial Stereo: builds noise from three separate noise sources and spatially encodes them so one seems to come from the left, one from the center, and one from the right. Over stereo headphones, the result is perceived as sound arriving from around the listener. To set how far the left and right noise sources sit from the center, enter a delay value in microseconds. About 900 to 1000 microseconds is the largest delay that can be perceived. A delay of zero matches monaural noise, with identical left and right channels.
- Independent Channels: builds noise from two separate sources, one for each channel. The left channel's noise is entirely independent from the right channel's noise.
- Mono: builds noise from one source, with left and right channels both assigned equally to that source.
- Inverse: builds noise from one source, much like the Mono option. However, the left channel's noise is the exact inverse of the right channel's noise. Over stereo headphones, the result is perceived as coming from inside the listener's head instead of from an outside source.

Intensity

Sets noise intensity on a scale from 2 to 40. Higher intensities make the noise more erratic, harsher, and louder.

DC Offset

Applies a constant DC (Direct Current) amplitude to the tone, shifting the waveform upward or downward by the specified percentage to center it differently.

Duration

Sets how many seconds of noise Adobe Audition generates.

Select OK.
