# Audio Effects Library (part 3)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Time and Pitch

### Pitch Shifter

The Pitch Shifter effect changes musical pitch in real time. It can be paired with other effects in the mastering rack or effects rack. In the Multitrack View, automation lanes can also change pitch over time.

- Semi-tones: Moves pitch by semi-tone steps, which are musical half-notes; for example, C# is one semi-tone above C. A value of 0 keeps the original pitch, +12 semitones raises it one octave, and -12 semitones lowers it one octave.
- Cents: Changes pitch by fractions of a semitone. The permitted span is -100 (one semi-tone lower) through +100 (one semi-tone higher).
- Ratio: Sets how shifted frequency relates to original frequency. The permitted span is 0.5 (an octave lower) through 2.0 (an octave higher).

- Low Precision: Choose Low for 8-bit or low-quality audio.
- Medium Precision: Choose Medium for medium-quality audio.
- High Precision: High requires the most processing time. Use High for professionally recorded audio.

- Splicing Frequency: Sets the size of each audio-data chunk. The Pitch Shifter effect divides audio into small chunks during processing. Higher values place stretched audio more precisely over time, but artifacts become more obvious as values increase. With higher Precision settings, lower Splicing Frequency values can create stutter or echo. If the value is too high, audio can become tinny and voices can sound tunnel-like.
- Overlapping: Sets how much each audio-data chunk overlaps the chunks before and after it. If stretching creates a chorus effect, reduce the Overlapping percentage. If that produces choppiness, adjust the percentage until choppiness and chorusing are balanced. Values run from 0% to 50%.
- Use appropriate default settings: Applies suitable default values for Splicing Frequency and Overlapping.

## Obsolete Audio Effects

When an obsolete effect exists in a project, opening the project prompts you to replace it. Select Yes to apply the updated version of the effect.
