# Frame rate

Video consists of images shown rapidly in sequence on the screen, creating the impression of motion. Frame rate is the count of frames displayed each second, measured in frames per second (fps). Higher frame rates use more frames each second to present the image sequence, producing smoother movement. The quality tradeoff is that higher frame rates require more data and therefore more bandwidth.

With digitally compressed video, increasing the frame rate also increases file size. To make the file smaller, reduce either the frame rate or the bitrate. Reducing bitrate while keeping the frame rate the same lowers image quality.

Because video usually looks much better at its native frame rate, the rate at which it was originally recorded, Adobe recommends keeping the frame rate high when your delivery channels and playback platforms support it. Use 29.97 fps for full-motion NTSC video; use 25 fps for PAL video. When the frame rate is lowered, Adobe Media Encoder drops frames at a linear rate. If reducing frame rate is required, dividing evenly gives the best results. For example, with a 24 fps source, use 12 fps, 8 fps, 6 fps, 4 fps, 3 fps, or 2 fps as the reduced frame rate.

On mobile devices, choose the device-specific encoding presets in the Preset Browser panel.

Note

When you create a SWF file with embedded video, the video clip and the SWF file need matching frame rates. Playback becomes inconsistent when the SWF file and embedded video clip use different frame rates.
