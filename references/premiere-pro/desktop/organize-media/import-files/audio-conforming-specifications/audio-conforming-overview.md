# Audio conforming overview

Premiere handles every audio channel as 32-bit floating-point data at the sequence sample rate. If imported audio does not already match that format, Premiere conforms it automatically on first import and creates CFA (Conformed Audio) preview files in the location set for Audio Previews in Project Settings.

The time and storage required for conforming scale with file duration. While conforming runs, a progress indicator is displayed in the lower-right corner of the application window. Audio files remain editable before the process finishes, but preview playback works only for portions that have already been conformed.
