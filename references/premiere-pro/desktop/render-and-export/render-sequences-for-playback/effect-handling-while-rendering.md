# Effect handling while rendering

- Timeline rendering includes every non-intrinsic effect applied to the clip.
- When Source is set to Sequence, Intrinsic Motion effects are included even if Include Video Effects is off. Premiere does not render Audio effects, Transition effects between clips, Time Remapping effects, or Intrinsic Opacity. Once effects are rendered, they cannot be moved or edited in the Effect Controls panel.
- Audio in audio-video (AV) clips can be rendered with a suitable preset. If that preset does not support the clip's audio type, render and replace is unavailable for the AV clip. For audio-only clips, or when the audio portion of an AV clip is selected, Premiere outputs the audio clip as .wav audio files. Audio-only clips can be restored to the original unrendered media.
