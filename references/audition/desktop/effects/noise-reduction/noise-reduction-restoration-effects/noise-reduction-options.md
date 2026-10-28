# Noise Reduction options

Capture Noise Print

Creates a noise profile from the selection, treating it as background noise only. Adobe Audition collects statistics about that background noise so the rest of the waveform can be cleaned.

Tip

When the selected range is too short, Capture Noise Print is unavailable. Lower FFT Size or select a longer noise segment. If no longer section exists, copy and paste the current selection to make one, then remove the pasted noise later with Edit > Delete.

Save the Current Noise Print

Stores the noise print as an .fft file. It records the sample type, FFT (Fast Fourier Transform) size, and three FFT coefficient sets: the lowest detected noise, the highest detected noise, and the power average.

Load a Noise Print from Disk

Loads a noise print already saved from Adobe Audition in FFT format. Noise prints can be used only with matching sample types; for example, a 22 kHz mono profile cannot be applied to 44kHz stereo samples.

Noise prints are highly specific, so a profile captured from one kind of noise will not work well on other kinds. If the same kind of noise is removed often, a saved profile can still make the work much faster.

Graph

Shows frequency on the horizontal x-axis and the amount of noise reduction on the vertical y-axis.

The blue control curve defines the reduction amount for different frequency ranges. For example, to reduce noise only in higher frequencies, move the control curve downward on the graph's right side.

Selecting the Reset button to flatten the control curve makes the reduction amount depend completely on the noise print.

To concentrate on the noise floor, choose the menu button at the upper right of the graph, then turn off Show Control Curve and Show Tooltip Over Graph.

Noise Floor

High displays the greatest detected noise amplitude at each frequency; Low displays the smallest amplitude. Threshold displays the amplitude below which reduction is applied.

The three noise-floor elements may overlap in the graph. To separate them visually, choose the menu button and then choose items from the Show Noise Floor menu.

Scale

Sets how the horizontal x-axis arranges frequencies:

For more precise control in low frequencies, choose Logarithmic. A logarithmic scale more closely matches human hearing.

For detailed high-frequency work with evenly spaced frequency intervals, choose Linear.

Channel

Shows the selected channel in the graph. Noise reduction amount is always identical for every channel.

Select Entire File

Allows a captured noise print to be applied to the full file.

Noise Reduction

Sets the percentage of noise reduction in the output signal. Preview the audio while fine-tuning this value so noise reduction is maximized and artifacts are minimized.

Very high noise reduction settings can sometimes make audio sound flanged or out-of-phase.

Reduce By

Sets how much detected noise is reduced in amplitude. Values between 6 and 30 dB are effective. Use lower values to lessen bubbly artifacts.

Output Noise Only

Plays only the noise so you can judge whether desirable audio is being removed.

Advanced

Select the triangle to open the menu and see advanced settings:

- Spectral Decay Rate: Sets the percentage of frequencies processed after audio falls below the noise floor. Careful adjustment can increase noise reduction while reducing artifacts. Values of 40% to 75% work best. Below that range, bubbly-sounding artifacts are often audible; above it, too much noise usually remains.

- Smoothing: Considers how much the noise signal varies in each frequency band. Bands with large variation during analysis, such as white noise, are smoothed differently from constant bands such as 60-Hz hum. Generally, increasing smoothing up to about 2 reduces burbly background artifacts but raises the overall background broadband noise level.

- Precision Factor: Controls amplitude changes. Values of 5-10 work best, and odd numbers are best for symmetrical processing. With values of 3 or lower, the Fast Fourier transform runs in very large blocks, so drops or spikes in volume may occur between them. Values above 10 do not noticeably improve quality, but they do require more processing time.

- Transition Width: Sets the amplitude span between noise and desired audio. For example, zero width applies a hard noise gate to each frequency band: audio just above the threshold remains, while audio just below it is cut to silence. You can instead set a range where audio fades to silence according to the input level. For example, if Transition Width is 10 dB and the band's noise level is -60 dB, the -60 dB audio is unchanged, the -62 dB audio is reduced slightly, and the -70 dB audio is fully removed.

- FFT Size: Sets how many separate frequency bands are analyzed. This setting produces the largest quality changes. Each band is treated separately, so more bands allow noise to be removed with finer frequency detail. Good settings range from 4096 to 8192. Fast Fourier Transform size balances frequency accuracy against time accuracy. Larger FFT sizes can create swooshing or reverberant artifacts, but they remove noise frequencies very accurately. Smaller FFT sizes improve time response, for example by reducing swooshing before cymbal hits, but they may lower frequency resolution and create hollow or flanged sounds.

- Noise Print Snapshots: Sets how many noise snapshots are included in the captured profile. For accurate data, 4000 is optimal. Very small values have a strong effect on quality across noise reduction levels. More snapshots make a noise reduction level of 100 more likely to remove additional noise and additional original signal. With more snapshots, even a low noise reduction level will probably remove more noise while preserving the intended signal.
