# Hard Limiter

- Hard Limiter: strongly reduces audio that exceeds a specified threshold. Limiting is often paired with input boost to raise overall volume while avoiding distortion.
- Maximum Amplitude: sets the highest permitted sample amplitude.
- Input Boost: preamplifies audio before limiting, making the selection louder without clipping. More of this level produces more compression. Extreme values can create the loud, high-impact sound common in contemporary pop music.
- Look Ahead Time: sets the time, in milliseconds, that audio is attenuated before the loudest peak arrives.
- Release Time: sets how long, in milliseconds, attenuation takes to rebound 12 dB. Around 100, the default, generally works well and preserves low bass frequencies.
- Link Channels: ties all channel loudness together while preserving stereo or surround balance.

Use Hard Limiter to cap an audio clip's maximum volume and avoid distortion by changing amplitude, input boost, and release time.
