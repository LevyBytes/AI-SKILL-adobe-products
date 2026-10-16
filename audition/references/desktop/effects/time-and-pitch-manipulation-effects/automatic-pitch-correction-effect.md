# Automatic Pitch Correction effect

Automatic Pitch Correction is available in both Waveform and Multitrack editors. In Multitrack, keyframes and hardware control surfaces can automate its settings over time.

Choose Effects > Time and Pitch > Automatic Pitch Correction, then configure these options:

Use Automatic Pitch Correction to quickly retune out-of-tune vocals or instruments to a selected key.

The Automatic Pitch Correction effect quickly corrects vocals or instruments that are out of tune, matching them to a chosen key.

Scale

Sets the scale type that fits the material best: Major, Minor, or Chromatic.

- Major or Minor moves notes to the chosen musical key.
- Chromatic moves notes to the nearest pitch without using a key.

Key

Sets the desired key for corrected audio. This control appears only when Scale is Major or Minor, because Chromatic includes all 12 tones and is not tied to a key.

Note

Together, scale and key define the key signature.

Attack

Sets how quickly Adobe Audition moves pitch toward the scale tone. Fast settings usually suit short notes, such as rapid staccato passages. Extremely fast attack can produce a robotic character. Slower settings give more natural correction for sustained notes, such as vocal lines with held notes and vibrato. Since musical material can vary during a performance, the best results often come from correcting short phrases separately.

Sensitivity

Sets the threshold outside which notes are not corrected. Sensitivity is measured in cents, with 100 cents in each semitone. For example, a Sensitivity value of 50 cents requires a note to fall within 50 cents, or half a semitone, of the target scale tone before automatic correction occurs.

Reference Channel

Choose the source channel where pitch changes are clearest. Audition analyzes only that channel, then applies pitch correction equally to every channel.

FFT Size

Sets the Fast Fourier Transform size for each data piece processed by the effect. Smaller values generally work better for correcting higher frequencies. For voices, 2048 or 4096 usually sounds most natural. For short staccato notes or percussive audio, try 1024.

Calibration

Sets the tuning standard for the source audio. In Western music, standard tuning is A4 at 440 Hz. If the source used a different reference, set A4 anywhere from 410 to 470 Hz.

Correction meter

During preview, shows the correction amount for flat and sharp tones.
