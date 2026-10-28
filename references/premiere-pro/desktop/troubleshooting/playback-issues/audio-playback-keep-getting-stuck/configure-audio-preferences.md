# Configure audio preferences

Choose Edit > Preferences > Audio Hardware, then review the computer audio device and the Device Class setting used by Premiere for audio playback and recording: ASIO/MME on Windows OS or CoreAudio on macOS. For more detail, see Audio Hardware preferences.

Look for external audio devices under Default Input/Output and try turning them off. Examples include Webcam, external mic, USB MICs, monitor speakers, and third-party audio playback devices such as AJA or BlackMagic.

On Windows machines, open the Sound Control panel and try disabling every listed device except Realtek.

On macOS, build an aggregate device from the built-in input/output devices, then set that aggregate device as Default Input/Output in Premiere Audio Hardware preferences.

After the third-party audio interfaces and devices are turned off, test whether playback has returned.
