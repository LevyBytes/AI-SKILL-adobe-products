# Conformed file management

As long as source files have not been moved or renamed, Premiere can reuse conformed files in sequences that share the same audio sample rate. For every imported audio item, the Media Cache Database records the conform-file path.

Storage locations:

- CFA files: Audio Previews scratch disk location (Project Settings > Scratch Disks)
- PEK waveform files: Media Cache Files location (Preferences > Media)

PEK files are generated for every imported file that contains audio, and Timeline panels use them to draw waveforms.
