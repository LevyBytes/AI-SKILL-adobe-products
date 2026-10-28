# Configure audio inputs and outputs

When inputs and outputs are set up for recording and playback, Adobe Audition can work with these sound card driver types:

On Windows, professional cards are supported through ASIO drivers, while standard cards usually use MME drivers.

On macOS, CoreAudio drivers support standard cards as well as professional cards.

ASIO and CoreAudio are preferred because they reduce latency and improve performance. They also allow monitoring while recording and make volume, pan, and effects changes audible immediately while playback is running.

Go to Edit > Preferences > Audio Hardware (Windows) or Adobe Audition > Settings > Audio Hardware (macOS).

In the Device Class menu, select the driver for the sound card being used.

Select a Default Input and Default Output from that card.

Note

Defaults can be overridden for individual tracks in the Multitrack Editor.

For Clock, select the input or output that other digital audio hardware should synchronize to so samples stay aligned accurately.

For I/O Buffer Size (ASIO and CoreAudio) or Latency (MME), use the lowest value that does not cause audio dropouts. Because the best value depends on system speed, some testing may be needed.

Choose a Sample Rate for the audio hardware.

To tune ASIO and CoreAudio card performance, click Settings. Consult the sound card documentation for additional details.

Note

By default, Audition controls ASIO sound cards during playback or monitoring. To make the card available to another application, select Release ASIO Driver In Background. Audition continues controlling the card during recording so recordings do not stop unexpectedly.
