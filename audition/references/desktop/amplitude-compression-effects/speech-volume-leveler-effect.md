# Speech Volume Leveler effect

Amplitude and Compression > Speech Volume Leveler is a compression effect for dialogue that evens levels, optimizes speech, and removes background noise.

For best results, use this workflow:

Choose the lowest-level audio. Move Target Volume Level and Leveling Amount to the left. Begin playback, then raise Leveling Amount gradually until speech is clearly audible without bringing up background noise.

Move Target Volume Level and Leveling Amount sliders left to reduce overall volume and make leveling less pronounced.

For subtler volume leveling and a lower overall level, move the Target Volume Level and Leveling Amount sliders to the left.

Choose the highest-level audio and start playback. Change Target Volume Level until it matches the loudness of the quieter passage adjusted earlier.

If the sound becomes too compressed, adjust Leveling Amount again.

Speech Volume Leveler provides these adjustable settings:

Target Volume Level

Sets the target output level compared with zero dBFS. See measuring amplitude in dBFS for more detail.

Leveling Amount

At low values, speech is raised modestly without lifting the noise floor. At high values, the entire signal is amplified more as it approaches the noise floor.

Boost Low Signals

Treats shorter, quiet passages as speech intended for amplification. For most material, turn this option off to keep the sound smoother.

Target Dynamic Range

Reduces background noises while amplifying and leveling speech only. For most content, best results usually come from a Target Dynamic Range value between -45dB and -60dB.

Note

- Higher parameter values, up to -80dB, can greatly reduce background noise, but they apply less leveling and amplification to speech.
- Lower parameter values, down to -30dB, improve speech leveling but may raise background noise more than desired.

Compressor

Keeps the processed signal strong when it falls below a threshold relative to zero dBFS.

Noise Gate

Cuts background noise by sharply lowering output level when the signal drops by the offset you specify.
