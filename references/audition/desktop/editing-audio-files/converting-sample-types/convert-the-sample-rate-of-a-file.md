# Convert the sample rate of a file

A file's sample rate defines the waveform's frequency range. Before changing that rate, remember that sound cards usually accept only a limited set of rates.

In the Waveform Editor, select Edit > Convert Sample Type.

Note

To open the Convert Sample Type dialog box quickly, double-click the Sample Type section of the status bar.

Choose a rate from the Sample Rate list, or type a custom rate in the text box.

In the Advanced section, use the Quality slider to set the sampling-conversion quality.

Higher settings preserve more high-frequency content, but conversion is slower. Lower settings process faster while reducing high frequencies.

Note

Choose higher Quality values when downsampling from a high rate to a low one. During upsampling, higher values make little difference.

For best results, enable Pre/Post Filter so aliasing noise is prevented.
