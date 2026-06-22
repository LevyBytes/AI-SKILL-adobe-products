# Analyzing Phase Frequency Amplitude, Frequency Band Splitter, Undo Redo History, Converting Sample Types

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Analyze phase, frequency, and amplitude with Audition; Frequency Band Splitter; Undo, redo, and history; Converting sample types.

## Analyze phase, frequency, and amplitude with Audition

Adobe Audition includes multiple audio-analysis tools. Phase relationships between two channels are compared in the Phase Meter panel, while tonal balance and dynamic level information are examined in the Frequency Analysis and Amplitude Statistics panels.

Spectral Frequency Display is also available in the Waveform Editor and can be used alongside those analysis panels. (See Displaying audio in the Waveform Editor.)

### Analyze phase

For stereo and surround waveforms, the Phase Meter panel helps expose channels that are out of phase; use Effects > Invert to correct that condition. (See Invert a waveform.) The same panel can also point out channels that are strongly in phase and therefore would sound alike when combined to mono. (See Convert a waveform between surround, stereo, and mono.)

Note

For background on audio phase, see How sound waves interact.

Open Window > Phase Meter. Right-click the Phase Meter panel, then pick channels from the Channel and Compare To menus. In Editor panel, mark a range if you want one, and begin playback.

On the Phase Meter, values farther left indicate greater phase opposition, and values farther right indicate stronger phase alignment. -1.0 means complete phase cancellation; 1.0 means the audio content is the same in every channel.

Note

To change how meters look, right-click them and choose Show Color Gradient or Show LED Meters.

### Analyze frequency range

The Frequency Analysis panel can help locate frequency bands that need attention, after which you can apply a filter effect to fix them.

Open Window > Frequency Analysis. In the Editor panel, click a point in time, mark a range, or play the audio. In the Frequency Analysis panel, the horizontal axis represents frequency and the vertical axis represents amplitude.

Note

When a range is selected, Adobe Audition evaluates only its center point. For analysis across the selected range as a whole, click Scan Selection.

### Frequency Analysis options

Scale

Controls whether the frequency scale is shown as Logarithmic, matching the way hearing is perceived, or Linear, which gives more visible resolution at higher frequencies.

Copy All Graph Data

Sends a text-based report of frequency information to the system clipboard.

Hold buttons

Capture as many as eight frequency snapshots during playback. Each frozen outline uses the color of the Hold button that created it, remains displayed on the graph, and overlays the other frequency outlines. Click the matching Hold button again to remove that stored outline.

Display

Sets the graph style. Select one of these styles:

Lines

Draws amplitude at each frequency using plain lines. The default colors are green for the left channel and blue for the right channel.

Area

Still uses amplitude lines, but fills the area under them with a solid color and evens out amplitude variation within that region.

Bars

Breaks the view into rectangular sections so analysis resolution is visible. Increasing the FFT size raises the analysis resolution and makes the bars narrower.

Top Channel

Chooses which channel from a stereo or surround file is drawn above the others. To merge the visible channels, choose Average.

Scan or Scan Selection

Analyzes the full file or the current selection, then shows averaged frequency information on the graph. By default, the graph uses data from the center point of a file or selection.

Advanced options

FFT Size

Sets the Fast Fourier Transform size. Larger FFT sizes produce more exact frequency reports, but processing takes more time.

Window

Selects the Fast Fourier transform shape. The listed functions progress from narrowest to widest. Narrow shapes consider fewer nearby frequencies but represent the center frequency less precisely. Wider shapes include more surrounding frequencies and represent center frequencies more accurately. Hamming and Blackman are strong general-purpose choices.

0 dB Reference

Sets the amplitude level at which full scale, 0 dBFS audio data is drawn. For example, 0 places 0 dBFS audio at 0 dB, while 30 places 0 dBFS audio at -30 dB. The setting only shifts the graph vertically; the audio data amplitude itself is unchanged.

Tip: Use 0 dB Reference when you need this display aligned to another decibel reference, such as sound pressure level (SPL).

Value at [x] Hz

Shows the exact amplitude for a frequency when the pointer is over the graph.

Overall Frequency

Reports the average frequency at the start point of a selected range.

Overall Musical Note

At the beginning of a selected range, reports the keyboard position and its deviation from standard tuning (A440). For example, A2 +7 means the second-lowest A on a keyboard tuned 7% above normal.

### Zoom frequency graphs

Use zooming in the Frequency Analysis panel when you need a closer view of graph detail.

Do any of the following:

For a closer graph view, use the secondary mouse button to drag the magnifying glass icon in either ruler.

To pan while magnified, drag the hand icon in either ruler with the primary mouse button.

To reduce magnification, open the context menu on either ruler and choose Zoom Out to return to the previous level, or Zoom Out Full to show the entire graph again.

Zooming and navigating a Frequency Analysis graph

Zooming and navigating a Frequency Analysis graph

### Analyze amplitude

In the Waveform Editor, open Window > Amplitude Statistics. To compute statistics for a complete file or for a selected part, click Scan or Scan Selection. By default, the calculation uses the center point of the file or selection.

Note

You can revise the selection in the Editor panel. Click Scan Selection again to update the statistics.

Review amplitude information on these tabs:

The General tab presents numeric statistics for dynamic range, clipped-sample detection, and any DC offset.

The RMS Histogram tab presents a graph showing how common each amplitude is. The horizontal ruler uses decibels for amplitude, and the vertical ruler uses the RMS formula to show prevalence. Pick the channel to view from the Show Channel menu.

Tip: Use the Histogram tab to find common amplitude levels, then process them with an amplitude effect such as compression, limiting, or normalization.

### General options

Use the icons beside values on the right to jump to the matching position in the file.

Use the icons beside values on the right to jump to the matching position in the file.

Peak Amplitude

Reports the highest-amplitude sample as a decibel value.

Maximum Sample Value

Identifies the sample with the greatest amplitude.

Minimum Sample Value

Identifies the sample with the smallest amplitude.

Possibly Clipped Samples

Reports how many samples probably went above 0 dBFS. Click the icon to the right of this value to move to the first clipped sample in the audio file. If needed, click the icon again to move through additional clipped samples.

Total, Maximum, Minimum, and Average RMS Amplitude

Report root-mean-square values for the selection. RMS values use the prevalence of particular amplitudes and often track perceived loudness more closely than absolute or average amplitude values.

DC Offset

Indicates direct current offset in the waveform from recording. Values above the center line are positive; values below that line are negative. (See Correct DC offset.)

Measured Bit Depth

Gives the bit depth for the waveform. (32 means the full 32-bit float range is in use).

Dynamic Range

Shows the difference between the Maximum and Minimum RMS Amplitude.

Dynamic Range Used

Reports dynamic range after subtracting unusually long stretches of low RMS amplitude, including silent passages.

Loudness

Reports the average amplitude.

Perceived Loudness

Adjusts for the way human hearing emphasizes middle frequencies.

Copy

Places every statistic from the General tab on the system clipboard.

### RMS Settings options

Set these options to control RMS statistic calculation:

0dB = FS Sine Wave

Maps the dB level to a full-scale sine wave, whose peak amplitude is roughly 3.01 dB lower than a full-scale square wave.

0dB = FS Square Wave

Maps the dB level to a full-scale square wave, whose peak amplitude is roughly 3.01 dB higher than a full-scale sine wave.

Account For DC

Excludes DC offset when measurements are made.

Window Width

Sets how many milliseconds each RMS window contains. A selected range is divided into a sequence of these windows, and Adobe Audition averages them to derive the Minimum RMS and Maximum RMS values. For the most accurate RMS readings, use wider windows with audio that has a wide dynamic range, and narrower windows with audio that has a narrow dynamic range.

## Frequency Band Splitter

### In Adobe Audition, Frequency Band Splitter can divide audio into bands for separate processing and more precise mix control.

Frequency Band Splitter takes a selected audio clip, or a highlighted portion of one, and creates up to 8 copies. Each copy contains a different frequency range from the original, with the split locations set by the crossover frequencies. The session window receives each copied waveform on its own track. You can then edit the separate bands or apply effects to them independently.

For example, the default setup uses three bands and crossover values of 800 and 3200. That produces three versions of the selected waveform: one covering 0 Hz to 800 Hz, one covering 800 Hz to 3200 Hz, and one covering 3200 Hz to 22050 Hz, or to whatever maximum frequency exists for the sample rate.

Open an audio clip. If you want to process only part of it, use a selection tool to mark the range.

Choose Edit > Frequency Band Splitter.

Frequency Band Splitter

Frequency Band Splitter

Choose the options you need, then click OK.

### Frequency Splitter options

Bands

Sets how many split points are used. Audition copies the original waveform the number of times you enter, and each copy receives a separate frequency range based on the crossover count.

Maximum

Sets the highest frequency for each band. Minimum and Bandwidth are calculated from the maximum frequency values for the current band and neighboring bands.

Scale

Sets the scale used to draw the bands visually. The available choices are Linear and Logarithmic.

Max FIR Filter Size

Controls the largest allowed size for the FIR (Finite Impulse Response) filter, which keeps phase errors across the response curve. FIR filters differ from IIR filters, which may introduce phase error that is often heard as a ringing quality. Higher settings improve frequency-filtering accuracy. The default value, 320, is suitable in most cases, but raise it if filtered waves show distortion or ringing.

## Undo, redo, and history

### Use undo, redo, and history tools in Adobe Audition to reverse edits quickly and manage the editing workflow.

Audition tracks the edits made during each session. Until a file is saved and closed, those edits are not applied permanently, so undo and redo remain unlimited.

To undo or redo changes, do any of the following:

To reverse one edit, choose Edit > Undo [name of change].

To reapply one edit, choose Edit > Redo [name of change].

In the Waveform Editor, choose Edit > Repeat Last Command to run the previous command again. Most commands can be repeated, but some exceptions exist, including Delete.

Note

To repeat the previous command without showing its dialog box, press Ctrl+R (Windows) or Command+R (macOS).

### Compare history states

Undo and Redo move only step by step, but the History panel can return immediately to any earlier edit state. Use it to compare processed audio against the original, or to remove a sequence of edits that led to unwanted results.

Note

Closing a file removes its history states.

Revert to states

To return to a history state, click it.

To step through states one at a time, press the up and down arrows on the keyboard.

Delete states

For very large audio files, remove history states you no longer need to free disk space and improve performance.

To remove every state, choose Clear History from the panel menu.

To remove one state, select it and click the trash icon.

Note

Removing history states also removes the associated Undo commands.

## Converting sample types

### Convert sample types in Adobe Audition to change bit depth and tune audio quality for different workflows.

In the Waveform Editor, Interpret Sample Rate lets you audition a file as though it used a different sample rate. Use it to catch audio files whose headers contain the wrong rate. For a lasting sample-rate change, run Edit > Convert Sample Type.

With the file open in the Waveform Editor, choose Edit > Interpret Sample Rate.

Type a sample rate in the text box, or select a common sample rate from the list.

Note

Audition can work with sample rates from 6000 to 192,000 Hz, but your sound card might not handle every rate correctly. Check the card's documentation to learn which sample rates it supports.

### Convert the sample rate of a file

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

### Convert a waveform between surround, stereo, and mono

Use Convert Sample Type when you need the fastest way to change a waveform to another channel count.

With the waveform open, select Edit > Convert Sample Type.

In the Channels menu, choose Mono, Stereo, or 5.1.

In the Advanced section, type percentages for Left Mix and Right Mix:

When changing mono to stereo, Left Mix and Right Mix set the relative amplitudes used to distribute the original mono signal into the left and right channels of the new stereo signal. For instance, the mono source can be placed only on the left, only on the right, or anywhere between them.

When changing stereo to mono, Left Mix and Right Mix determine how much signal from each channel is included in the resulting mono waveform. The typical mix uses 50% from each channel.

### Change the bit depth of a file

Bit depth determines an audio file's dynamic range. Audition supports resolution up to 32-bit. Increase bit depth to get more dynamic range, or reduce it when the goal is a smaller file.

Note

Some common applications and media players need audio at 16-bit or lower.

In the Waveform Editor, choose Edit > Convert Sample Type.

Use the menu to choose Bit Depth, or type a custom bit depth in the text box.

Under Advanced, configure these options:

Dithering

Turns dithering on or off when converting to a lower bit depth. Without dithering, the bit depth is cut off abruptly, which can create crackling in low-volume passages because of quantization distortion.

Dithering adds a small amount of noise, but the result is much better than the extra distortion that would otherwise appear at low signal levels. It also allows sounds to remain audible when they would otherwise be hidden by the noise and distortion limits of lower bit-depth audio.

Dither Type

Sets how dithering noise is distributed in relation to the original amplitude value. Triangular is usually the strongest compromise across noise level, distortion, and modulation side effects.

Dither type

Reduces signal-to-noise ratio

Noise modulation

Triangular

4.8 dB

No

Gaussian

6.0 dB

Negligible

| --- | --- | --- |

Noise Shaping

Sets which frequencies receive dithering noise. Adding noise shaping can let you use lower dither depths without audible artifacts. Use the source material, target sample rate, and bit depth to choose the shape. Noise Shaping is unavailable below 32Khz because all of the noise would stay inside audible frequencies.

High Pass

With a 7.3 kHz crossover, dithering noise falls to -180dB at 0 Hz and -162dB at 100 Hz.

Light Slope

At an 11 kHz crossover, noise falls to -3dB at 0 Hz and -10dB at 5 kHz.

Neutral

Light stays flat through 14 kHz, increases noise to a peak at 17kHz, and becomes flat again at higher frequencies. Background noise has the same character as it would without noise shaping, but is about 11dB lower.

Heavy stays flat through 15.5kHz, moving all dithering noise above 16kHz, or above the crossover you set. If the crossover is too low, sensitive listeners may notice a high-pitched ringing. When converting 48 or 96 kHz audio, though, the crossover can sit well above 20 kHz. Choose a Neutral shape to keep background hiss from being sonically colored. Compared with other shapes, however, hiss will seem louder.

U-Shaped

Shallow is mostly flat from 2 kHz through 14 kHz, but rises as the audio nears 0 Hz because low frequencies are far less audible. Medium adds slightly more noise above 9 kHz, allowing less noise below that point. Deep raises noise above 9 kHz further, while lowering it much more in the 2-6 kHz range.

Weighted

Light tries to follow how the ear hears quiet sounds by reducing noise more in the 2-6 kHz range and increasing it in the 10-14 kHz range. At high volumes, hiss may stand out more. Heavy reduces the most sensitive 2-6KHz range more evenly, at the cost of additional noise above 8kHz.

Crossover

Sets the frequency above which noise shaping is applied.

Strength

Sets the maximum amplitude of noise added to any one frequency.

Adaptive Mode

Changes the distribution of noise across frequencies.

### Use sample rate conversion presets

When the same conversion must be applied to several files, a sample rate conversion preset can save time.

Open Edit > Convert Sample Type.

Set the options as desired.

Click the New Preset button.

After creation, the preset appears in the Presets list at the top of the dialog box. To remove one, select it from the list and click the Delete button.
