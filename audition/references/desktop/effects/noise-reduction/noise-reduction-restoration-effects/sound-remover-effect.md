# Sound Remover effect

Sound Remover (Effects > Noise Reduction/Restoration) removes unwanted sound sources from a recording. It analyzes a selected part of the recording and creates a sound model that is then used to locate and remove that sound.

Parameters that describe complexity can modify the generated model. A more complex sound model needs additional refinement passes to process the recording, but it can produce more accurate results. The sound model can be saved for later. Presets are available for common noises, including sirens and ringing mobile phones.

Use the Sound Remover effect to lessen or eliminate unwanted background sounds in recordings.

Apply the Sound Remover effect when audio recordings contain unwanted background sounds that should be reduced or removed.

Learn Sound Model

Learns the sound model from the selected waveform. Choose a waveform area that contains only the sound to remove, then select Learn Sound Model. Sound models can also be saved to disk and loaded again.

Sound Model Complexity

Shows the complexity of the Sound Model. More complex or mixed sounds benefit from higher complexity settings, though calculation takes longer. Settings range from 1 to 100.

Sound Refinement Passes

Sets how many refinement passes remove the sound patterns represented in the sound model. More passes need more processing time, but they produce more accurate results.

Content Complexity

Shows the complexity of the signal. Higher complexity settings work better for more complex or mixed sound, although calculation takes longer. Settings range from 5 to 100.

Content Refinement Passes

Sets the number of passes applied to the content to remove sounds matching the sound model. More passes require extra processing time, but they usually improve accuracy.

Enhanced Supression

Increases how aggressively the sound removal algorithm works and can be adjusted with the Strength value. Higher values remove more of the sound model from mixed signals, which can also remove more desired signal. Lower values preserve more overlapping signal, so more of the noise may remain audible, though still less than in the original recording.

Enhance for Speech

Indicates that the audio includes speech and handles removal carefully for audio patterns that closely resemble speech. The result is intended to remove noise without removing speech.

FFT Size

Sets how many separate frequency bands are analyzed. This setting produces the largest quality changes. Each band is treated separately, so more bands allow noise to be removed with finer frequency detail. Good settings range from 4096 to 8192. Fast Fourier Transform size balances frequency accuracy against time accuracy. Larger FFT sizes can create swooshing or reverberant artifacts, but they remove noise frequencies very accurately. Smaller FFT sizes improve time response, such as less swooshing before cymbal hits, while reduced frequency resolution can lead to hollow or flanged results.

Watch the video titled Sound removal and noise reduction strategies to learn ways to reduce noise and remove unwanted sounds from audio.
