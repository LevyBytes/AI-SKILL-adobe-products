# Audio conforming behavior

Conforming is the conversion Premiere performs when it prepares audio files for its internal working format. It happens during import, and it can influence both timeline responsiveness and how much disk space the project uses. The conformed audio is written as CFA (Conformed Audio) files in the scratch disk location chosen for audio previews.

For uncompressed files recorded at sample rates Premiere supports natively, no conforming is needed when the sequence uses the same sample rate. If the sample rates do not match, conforming is deferred until export or audio preview creation. Audio recorded at unsupported sample rates is raised to the closest supported rate; a 11024 Hz source, for example, becomes 11025 Hz.

Every compressed audio file is conformed during import at the source sample rate. For example, a 44100 Hz MP3 file is conformed at 44100 Hz and then plays at the sequence sample rate when the sequence differs, with no extra processing step. After a file has been conformed, Premiere reuses that conformed version in any sequence with the same sample rate as long as the original file has not been moved or renamed.

Premiere also generates PEK (peak) files for imported audio so waveforms can be drawn in the Timeline panel. Those files live in the Media Cache Files location and remain available across sessions.
