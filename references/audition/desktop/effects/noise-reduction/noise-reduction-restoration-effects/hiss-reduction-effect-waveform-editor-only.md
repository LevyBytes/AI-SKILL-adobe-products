# Hiss Reduction effect (Waveform Editor only)

Noise Reduction/Restoration > Hiss Reduction reduces hiss from sources such as audio cassettes, vinyl records, and microphone preamps. It greatly lowers the amplitude of any frequency range that falls below an amplitude threshold known as the noise floor. Frequency ranges louder than that threshold are left unchanged. When background hiss stays at a consistent level, Hiss Reduction can remove it completely.

Note

For wide-frequency-range noise of other kinds, try Noise Reduction.

Capture Noise Floor

Plots an estimated noise floor. Hiss Reduction uses that estimate to remove hiss more precisely while keeping ordinary audio intact. This is the strongest control in Hiss Reduction.

For the most accurate noise-floor graph, choose Get Noise Floor while selecting audio that contains only hiss. Another option is to choose the area with the least wanted audio and the least high-frequency information. In the spectral display, find a region with no activity in the upper 75% of the display.

After the noise floor is captured, you may need to move the control points on the left, which represent lower frequencies, until the graph is as flat as possible. If music exists at any frequency, the surrounding control points will be higher than they should be.

Graph

Shows the estimated noise floor for every frequency in the source audio, with frequency on the horizontal ruler (x-axis) and noise-floor amplitude on the vertical ruler (y-axis). This view helps separate hiss from wanted audio information.

The value used for hiss reduction combines the graph with the Noise Floor slider, which moves the estimated noise-floor reading up or down for fine-tuning.

Scale

Sets the way frequencies are laid out on the horizontal x-axis:

For more precise low-frequency control, select Logarithmic. A logarithmic scale better matches human hearing.

For detailed high-frequency work with evenly spaced frequency intervals, select Linear.

Channel

Shows the chosen audio channel in the graph.

Reset

Restores the estimated noise floor. To reset it higher or lower, use the menu button at the upper right of the graph and choose an item from the Reset Control Curve menu.

Note

- For fast, general-purpose hiss reduction, a full noise-floor graph is not always required. Often you can reset the graph to a flat level and adjust the Noise Floor slider.
- To turn off frequency and amplitude tooltips, open the graph's upper-right menu button and deselect Show Tooltip Over Graph.

Noise Floor

Adjusts the noise floor until hiss reduction and quality reach the desired balance.

Reduce By

Sets hiss reduction strength for audio below the noise floor. Higher values, especially above 20 dB, can remove hiss dramatically, but the remaining audio may distort. Lower values remove less noise and keep the original audio signal more intact.

Output Hiss Only

Previews just the hiss so you can check whether wanted audio is being removed.

Advanced settings

Select the triangle to display these options:

Spectral Decay Rate

- Spectral Decay Rate: When audio rises above the estimated noise floor, this setting controls how much nearby-frequency audio is treated as continuing with it. Low values assume less neighboring audio continues, so hiss reduction cuts closer to the retained frequencies. Values from 40% to 75% work best. Above 90%, the result can include unnaturally long tails and reverbs. Too-low values can create bubbly background artifacts and make music sound artificial.

- Precision Factor: sets the time accuracy of hiss reduction. Typical values are 7 to 14. Lower values can leave a few milliseconds of hiss before and after louder audio sections. Larger values usually improve results but slow processing. Values over 20 generally do not add further quality improvement.

- Transition Width: creates a gradual hiss-reduction transition rather than a sudden change. Values from 5 to 10 usually work well. If the value is too high, hiss may remain after processing. If it is too low, background artifacts can appear.

- FFT Size: sets the Fast Fourier Transform size, which balances frequency accuracy against time accuracy. Sizes from 2048 to 8192 generally work best. Lower FFT sizes, 2048 and below, improve time response, such as less swooshing before cymbal hits, but can reduce frequency resolution and create hollow or flanged sounds. Higher FFT sizes, 8192 and above, may add swooshing, reverb, and drawn-out background tones, but they deliver very accurate frequency resolution.

- Control Points: sets the number of graph points created when Capture Noise Floor is selected.

The video demonstrates background-noise cleanup and hiss reduction.

### More like this

- Control effect settings with graphs
- Applying effects in the Waveform Editor
- Applying effects in the Multitrack Editor
- Use effect presets
