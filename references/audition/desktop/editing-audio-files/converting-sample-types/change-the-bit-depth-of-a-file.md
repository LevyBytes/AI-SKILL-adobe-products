# Change the bit depth of a file

Bit depth determines an audio file's dynamic range. Audition supports resolution up to 32-bit. Increase bit depth to get more dynamic range, or reduce it when the goal is a smaller file.

Note

Some common applications and media players need audio at 16-bit or lower.

In the Waveform Editor, choose Edit > Convert Sample Type.

Use the menu to choose Bit Depth, or type a custom bit depth in the text box.

Under Advanced, configure these options:

Dithering

Turns dithering on or off when converting to a lower bit depth. Without dithering, the bit depth is cut off abruptly, which can create crackling in low-volume passages because of quantization distortion.

Dithering adds a small amount of noise, but the result is much better than the extra distortion that would otherwise appear at low signal levels. It also allows sounds to remain audible when they would otherwise be hidden by the noise and distortion limits of lower bit-depth audio.

Dither Type

Sets how dithering noise is distributed in relation to the original amplitude value. Triangular is usually the strongest compromise across noise level, distortion, and modulation side effects.

| Dither type | Reduces signal-to-noise ratio | Noise modulation |
| --- | --- | --- |
| Triangular | 4.8 dB | No |
| Gaussian | 6.0 dB | Negligible |

Noise Shaping

Sets which frequencies receive dithering noise. Adding noise shaping can let you use lower dither depths without audible artifacts. Use the source material, target sample rate, and bit depth to choose the shape. Noise Shaping is unavailable below 32Khz because all of the noise would stay inside audible frequencies.

High Pass

With a 7.3 kHz crossover, dithering noise falls to -180dB at 0 Hz and -162dB at 100 Hz.

Light Slope

At an 11 kHz crossover, noise falls to -3dB at 0 Hz and -10dB at 5 kHz.

Neutral

Light stays flat through 14 kHz, increases noise to a peak at 17kHz, and becomes flat again at higher frequencies. Background noise has the same character as it would without noise shaping, but is about 11dB lower.

Heavy stays flat through 15.5kHz, moving all dithering noise above 16kHz, or above the crossover you set. If the crossover is too low, sensitive listeners may notice a high-pitched ringing. When converting 48 or 96 kHz audio, though, the crossover can sit well above 20 kHz. Choose a Neutral shape to keep background hiss from being sonically colored. Compared with other shapes, however, hiss will seem louder.

U-Shaped

Shallow is mostly flat from 2 kHz through 14 kHz, but rises as the audio nears 0 Hz because low frequencies are far less audible. Medium adds slightly more noise above 9 kHz, allowing less noise below that point. Deep raises noise above 9 kHz further, while lowering it much more in the 2-6 kHz range.

Weighted

Light tries to follow how the ear hears quiet sounds by reducing noise more in the 2-6 kHz range and increasing it in the 10-14 kHz range. At high volumes, hiss may stand out more. Heavy reduces the most sensitive 2-6KHz range more evenly, at the cost of additional noise above 8kHz.

Crossover

Sets the frequency above which noise shaping is applied.

Strength

Sets the maximum amplitude of noise added to any one frequency.

Adaptive Mode

Changes the distribution of noise across frequencies.
