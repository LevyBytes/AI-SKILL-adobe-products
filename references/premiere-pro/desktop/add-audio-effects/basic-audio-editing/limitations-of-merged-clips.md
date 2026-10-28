# Limitations of merged clips

Understand Adobe Premiere merged-clip limitations, including unsupported editing and synchronization features.

In Premiere Pro, merged clips make complex-sequence editing simpler. Because a merged clip is handled as one clip in the sequence, editors do not need to manage several separate clips. They can also synchronize audio and video that were recorded separately. Even so, merged clips have important limitations.

These Adobe Premiere features and commands are unavailable for merged clips:

- Replace Footage.
- Control over all audio channel mapping inside merged clips.
- Final Cut Pro XML and AAT interchange formats.
- Auto-sync through audio waveforms, free-run timecode, time-of-day timecode, AUX timecode, and separate audio timecode.

Remember these details when using merged clips:

- Merged clips, or portions of clips that were merged before, cannot be remerged or used to make a new merged clip.
- Only component clips can serve as the source material for creating a merged clip.
- When a specific component clip is removed, the merged clip can be relinked.
- Audio inside merged clips is restricted to one mono track rather than stereo or multi-channel audio.
