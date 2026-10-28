# Fixing washed-out color after video export from Adobe Premiere

At times, an exported video does not match the look shown in the Program Monitor. People often describe the result as "too light" or "washed out".

The reason is tied to the way displays and playback software represent images.

Televisions, Windows computers, macOS computers, and individual viewer applications use gamma curves so screen brightness lines up more closely with human visual perception.

QuickTime gamma shift happens when the viewing device or application applies a different gamma curve. macOS uses a gamma curve of 1.96, Windows uses a gamma curve of 2.2, and broadcast video is standardized around a gamma curve of 2.4. Premiere displays video using the 2.4 broadcast standard.

Because of those gamma differences, footage that appears correct in Premiere can shift slightly after export when it is opened in a Windows viewer that applies the Windows 2.2 gamma curve.

The mismatch is more obvious on macOS. Premiere shows the image with a 2.4 gamma curve by default, while most other macOS applications display the exported file with the macOS 1.96 gamma curve, making the image look washed out.

Since the behavior comes from differences among operating systems and playback applications, there is no single simple fix. Premiere instead provides a control for choosing the gamma curve used for video display inside the application.
