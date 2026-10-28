# Convolution Reverb

Convolution Reverb recreates spaces from small coat closets through concert halls. This kind of reverb uses impulse files to model acoustic environments, producing very realistic results.

Note

Convolution Reverb uses substantial processing power. On slower systems, previews may include clicks or pops. After the effect is applied, those artifacts go away.

- Impulse: Selects the impulse file that represents the acoustic space. Use Load when adding a custom impulse file in WAV or AIFF format.
- Mix: Sets the balance between original audio and reverberant audio.
- Room Size: Sets the percentage of the complete room represented by the impulse file. Higher percentages create longer reverb.
- Damping LF: Lowers bass-heavy low-frequency material in the reverb, helping avoid muddiness and making the sound clearer and more articulate.
- Damping HF: Lowers transient high-frequency material in the reverb, reducing harshness and creating a warmer, fuller tone.
- Pre-Delay: Sets the milliseconds required for reverb to reach maximum amplitude. For the most natural response, use a short pre-delay of 0-10 milliseconds. For special effects, use a long pre-delay of 50 milliseconds or more.
- Width: Sets stereo spread. A value of 0 creates a mono reverb signal.
- Gain: Raises or lowers amplitude after processing.
