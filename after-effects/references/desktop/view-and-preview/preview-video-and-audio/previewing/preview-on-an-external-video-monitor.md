# Preview on an external video monitor

The contents of your Layer, Footage, or Composition panel can be previewed on an external video monitor. Doing so calls for extra hardware — a video capture card or a FireWire port, for example.

You can route previews to a second monitor wired to your video display cards over DVI, DisplayPort, or HDMI. When a video capture card links the external video monitor, install its appropriate drivers and hook up the monitor to see previews. When a FireWire port is involved, attach a digital camcorder or comparable device to it first, then connect the video monitor to that device. The documentation for your digital camcorder, VCR, or other devices covers more on configuring FireWire previews.

Pick Edit > Preferences > Video Preview (Windows) or After Effects > Preferences > Video Preview (macOS).

Turn on video output to an external device by picking among these options:

- Adobe DV: The FireWire choice.
- Adobe Monitor x: Your connected computer monitors, the ones able to take video preview data via the graphics card.
- Third-party video hardware: What appears here changes with the third-party hardware you've hooked up. AJA Kona 3G, Blackmagic Playback, and Matrox Player are common examples.

Pick the Disable video output when in the background option so that video frames stop flowing to the external monitor whenever After Effects isn't the foreground application.

Pick the Video preview during render queue output option to push video frames out to the external monitor as After Effects renders frames in the render queue.

When the video preview goes to an external monitor over Mercury Transmit, it's color-managed, with the external video preview monitor handled as an HDTV Rec. 709 device. The Video preview using Mercury Transmit article has more details.

Note

To the video preview monitor, the Wireframe preview mode previews nothing at all. (See Preview modes and Choose a working color space and enable color management.)

## More like this

- Layer switches and columns in the Timeline panel
- Workspaces, panels, and viewers
- Preferences
- Basics of rendering and exporting
