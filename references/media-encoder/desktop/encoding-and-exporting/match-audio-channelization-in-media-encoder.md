# Match audio channelization in Media Encoder

Search. Last updated: Jan 21, 2026

Match source audio channel configuration while encoding with Adobe Media Encoder.

Use new beta features

Testing and feedback are now open for Match Audio Source support. Try it in Media Encoder (beta).

Get started

When video projects include audio, keeping the source channel layout helps preserve the intended balance and sound quality. Source audio might be mono, stereo, or a more complex surround configuration. Adobe Media Encoder (Beta) adds flexible controls for matching the encoded file's audio layout to the source, giving control over channel handling during export.

The match source audio update in Adobe Media Encoder (Beta) includes these capabilities:

- Matches sample rate and channelization: Aligns automatically with the source audio setup, including stereo, 5.1, or 8-channel.
- Format support: Supports QuickTime, HEVC, and H.264 when the format allows it, plus Waveform Audio and MP3. A future release is planned to add MXF support.
- Fallback behavior: When a selected format cannot use the source channelization, such as H.264 with only mono, stereo, or 5.1 support, Media Encoder falls back to the nearest supported choice.
- Preserving all channels: For full channelization beyond 5.1, choose a multi-channel-capable format such as QuickTime.

The match source controls can be enabled manually in the Export Settings dialog box, or they can be stored in an encoding preset.
