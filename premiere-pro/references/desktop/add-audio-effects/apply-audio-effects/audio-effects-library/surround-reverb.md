# Surround Reverb

Surround Reverb is designed mainly for 5.1 sources, though it can add surround ambience to mono or stereo material. In the Waveform Editor, choose Edit > Convert Sample Type to change a mono or stereo file to 5.1, then apply Surround Reverb. In the Multitrack Editor, mono or stereo tracks can be routed to a 5.1 bus or master that uses Surround Reverb.

- Input Center: Sets how much of the center channel is included in the processed signal.
- Input LFE: Sets the percentage of the Low Frequency Enhancement channel used to drive reverb for other channels. The LFE signal itself does not receive reverb.
  - Impulse: Selects the impulse file for the acoustic model. Click Load to import a WAV or AIFF custom impulse file with 6-channel audio.
  - Room Size: Sets the percentage of the complete room represented by the impulse file. Higher percentages create longer reverb.
  - Damping LF: Reduces low-frequency, bass-heavy reverb material to avoid muddiness and make the result clearer and more articulate.
  - Damping HF: Reduces high-frequency transient reverb material to avoid harshness and make the result warmer and lusher.
  - Pre-Delay: Sets the milliseconds required for reverb to rise to maximum amplitude. For a natural response, use a short pre-delay of 0-10 milliseconds. For special effects, use a long pre-delay of 50 milliseconds or more.
  - Front Width: Sets stereo spread across the front three channels. A width value of 0 creates a mono reverb signal.
  - Surround Width: Sets width for the rear surround channels (Ls and Rs).
