# Audio Considerations

Sampling rates as high as 96Khz are handled by the After Effects audio API, across as broad a range of formats as it can manage.

Just as pixel-processing routines in plug-ins ought to stay "resolution independent," audio plug-ins should not assume any particular sample rate or bit depth.

There's no way for your plug-in to learn the eventual output format of the audio it touches; downstream of your plug-in the signal could be stretched, normalized, truncated, or phase-inverted before it reaches the final mix.

The problems that confront audio filters differ from those that image filters run into.

For a sample of how audio rendering can be done, look at the SDK example.
