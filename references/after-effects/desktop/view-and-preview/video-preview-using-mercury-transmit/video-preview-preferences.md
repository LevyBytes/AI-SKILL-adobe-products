# Video preview preferences

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
