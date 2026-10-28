# Audio

The Audio tab in the Export Settings dialog contains audio controls. The selected export format determines which settings appear.

Use the Audio tab when adjusting export format, channels, sample rate, and bitrate.

- AAC
- MPEG

Preferred formats let you prepare the audio for output.

- Audio Codec: selects the audio compression codec. Certain audio formats allow only uncompressed audio, which provides the highest quality while consuming more disk space. Some formats offer a single codec; others present several codec choices.
- Sample Rate: the frequency, measured in Hertz (Hz), at which audio becomes discrete digital values. Higher sample rates can improve recorded audio quality but require larger files. For best results, export audio at its original recording sample rate. Exporting above that rate does not improve quality and requires resampling, which can lengthen export time.
- Channels: sets how many audio channels are written into the exported file. If you export fewer channels than exist in the master track of the sequence or media file, Adobe Media Encoder down-mixes the audio. Typical choices include Mono, which uses one channel; Stereo, which uses two channels; and 5.1, a six-channel surround sound setup.

Note

- Down mixing supports only certain channelization conversions, including 5.1 to stereo and stereo to mono. N-Channel to stereo or mono is not supported.
- In QuickTime, Audio Channel Configuration options control how source channels map to output channels in the exported file. This can save time and simplify rendering by placing multiple audio output configurations in one QuickTime file, including stereo and 5.1 channelization.

- Sample Size: the amount of audio data stored for each sample, also called "bit depth". Higher sample sizes generally produce better sound quality but larger files.

Bitrate [kbps] is the exported audio bit rate. In general, higher bit rates raise both quality and file size.
