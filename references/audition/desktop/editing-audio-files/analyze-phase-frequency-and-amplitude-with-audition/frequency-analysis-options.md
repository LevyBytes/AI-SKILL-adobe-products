# Frequency Analysis options

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
