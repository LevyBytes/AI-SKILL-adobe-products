# Video Preview Using Mercury Transmit

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Apr 17, 2026

### Preview compositions on external displays with Mercury Transmit by sending real‑time video and audio to supported hardware for accurate monitoring and smoother previews.

Adobe applications rely on a software interface called Mercury Transmit to push video frames out to external video devices. Plug-ins from hardware makers like AJA, Blackmagic Design, Bluefish444, and Matrox carry frames from Mercury Transmit through to their devices.

What video preview using Mercury Transmit does is route the Composition, Layer, or Footage panel viewer's contents to an external monitor. That external monitor might be any of these:

- A video monitor reached by way of I/O devices from third-party makers like AJA, Blackmagic, or Matrox
- A DV device linked over FireWire
- A computer monitor attached to your video display card by way of HDMI, DVI, VGA, or DisplayPort

Whatever the Resolution menu in the Composition panel is set to fixes the resolution of the external video preview.

Note

Overlays — user interface controls, guides, warning banners, and other things OpenGL draws — are not sent by Mercury Transmit to the external monitor. That likewise means the Fast Draft and Wireframe preview modes send no image data out to the external monitor.

## Video preview preferences

These video preview preferences can be set by going to After Effects > Settings > Video:

- Enable Mercury Transmit: Switches video preview with Mercury Transmit on or off. Press '/' on the numeric keypad to toggle it. If your Mac has no numeric keypad, press Control+Shift+/ on the main keyboard instead.

  - Adobe DV: Choose this for DV devices wired up over FireWire.
  - Adobe Monitor x: Shows the roster of attached computer monitors capable of taking video preview data through the graphics card.
  - Third-party video hardware: Shows the roster of third-party hardware you've connected. Hit Setup to see the options each piece of hardware offers.

- Disable video output when in the background: Pick this to stop video frames from reaching the external monitor whenever After Effects isn't the foreground application.
- Video preview during render queue output: Pick this to send video frames to the external monitor while After Effects renders frames in the render queue.

Whenever a previewed image fails to land exactly on the pixel dimensions of the preview monitor, scaling is handled by the third-party I/O device. The way each device scales differs, and on some you can steer it through that device's Setup options. Whatever the Resolution menu in the Composition panel is set to fixes the resolution of the external video preview.

Note

If RAM preview frame rates drag while Mercury Transmit is on, give one or more of these a try:

- Lower the resolution in the Composition or Preview panel
- Lower the RAM preview frame rate in the Preview panel
- Lower the project color depth to 16-bpc or 8-bpc
- Turn color management off, which you do by pointing the project's working space at None.

### More like this

- Previewing
