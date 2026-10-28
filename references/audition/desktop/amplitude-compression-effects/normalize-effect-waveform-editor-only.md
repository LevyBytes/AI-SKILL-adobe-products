# Normalize effect (Waveform Editor only)

Amplitude and Compression > Normalize sets a target peak level for a file or selection. Normalizing to 100% reaches digital audio's maximum allowed amplitude, 0 dBFS. When sending audio to a mastering engineer, use a value between -3 and -6 dBFS to leave room for later processing.

Normalize raises the whole file or selection by the same amount. For example, if source audio peaks at 80% and has a quieter low point at 20%, a 100% normalization raises the peak to 100% and the low point to 40%.

Note

- Offline processing is required for this effect. While the effect is open, waveform editing, selection adjustment, and current-time indicator movement are unavailable.
- For RMS normalization, choose Effects > Match Volume. That command can be applied to one file only if needed.

Use Normalize when the loudest point in audio should reach a specified peak.

Normalize can adjust audio so its highest point reaches a chosen peak level.

Normalize To

Sets the highest peak as a percentage of maximum amplitude.

Tip

Select dB when the Normalize value should be entered in decibels rather than as a percentage.

Normalize All Channels Equally

Calculates amplification from all channels in a stereo or surround waveform. When this option is off, each channel is calculated separately, which can make one channel much louder than another.

DC Bias Adjust

Adjusts where the waveform sits in the wave display. Some recording hardware adds DC bias, making the recorded waveform appear above or below the display's normal center line. Set the percentage to zero to center the waveform. Use a positive or negative percentage to shift the full selected waveform above or below the center line.
