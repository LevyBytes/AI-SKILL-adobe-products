# Pitch Shifter effect

Pitch Shifter changes musical pitch. It processes in real time and can sit alongside other effects in the mastering rack or effects rack. In Multitrack View, automation lanes can vary pitch over time.

Choose Effects > Time and Pitch > Pitch Shifter effect, then configure these options:

Use Pitch Shifter to raise or lower audio pitch without changing duration.

The Pitch Shifter effect raises or lowers audio pitch while keeping duration unchanged.

Pitch Transpose

Contains controls for changing pitch:

- Semi-Tones: Shifts pitch in semi-tone increments, equivalent to musical half-notes. For example, C# is one semi-tone higher than C. A value of 0 keeps the original pitch; +12 semi-tones raises it one octave; -12 semi-tones lowers it one octave.
- Cents: Changes pitch by fractions of semi-tones. Values can range from -100, or one semi-tone lower, to +100, or one semi-tone higher.
- Ratio: Sets the relationship between shifted frequency and original frequency. Values range from 0.5, one octave lower, to 2.0, one octave higher.

Precision

Sets sound quality; High takes the most time to process. Use Low for 8-bit or low-quality audio, and High for professionally recorded material.

Note

To decide on a Precision setting quickly, process a small selected range with each setting and compare quality against processing time.

Pitch Settings

Control audio processing behavior:

- Splicing Frequency: Sets the size of each small audio-data chunk used by Pitch Shifter processing. Higher values place stretched audio more precisely over time, but artifacts become easier to hear as values rise. With higher Precision settings, lower Splicing Frequency can introduce stutter or echo. If it is too high, sound can become tinny and voices can take on a tunnel-like character.
- Overlapping: Sets how much each audio-data chunk overlaps the neighboring chunks before and after it. If stretching creates a chorus effect, reduce Overlapping. If the result becomes choppy, adjust the percentage to balance choppiness against chorusing. Values range from 0 to 50%.
- Use Appropriate Default Settings: Applies suitable default values for Splicing Frequency and Overlapping.
