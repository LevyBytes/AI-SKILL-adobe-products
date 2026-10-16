# Video Preview Using Mercury Transmit

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Apr 17, 2026

Preview compositions on external displays with Mercury Transmit by sending real‑time video and audio to supported hardware for accurate monitoring and smoother previews.

Adobe applications rely on a software interface called Mercury Transmit to push video frames out to external video devices. Plug-ins from hardware makers like AJA, Blackmagic Design, Bluefish444, and Matrox carry frames from Mercury Transmit through to their devices.

What video preview using Mercury Transmit does is route the Composition, Layer, or Footage panel viewer's contents to an external monitor. That external monitor might be any of these:

- A video monitor reached by way of I/O devices from third-party makers like AJA, Blackmagic, or Matrox
- A DV device linked over FireWire
- A computer monitor attached to your video display card by way of HDMI, DVI, VGA, or DisplayPort

Whatever the Resolution menu in the Composition panel is set to fixes the resolution of the external video preview.

Note

Overlays — user interface controls, guides, warning banners, and other things OpenGL draws — are not sent by Mercury Transmit to the external monitor. That likewise means the Fast Draft and Wireframe preview modes send no image data out to the external monitor.
