# Match Source controls and presets

For H.264 or MPEG-2 exports, Adobe Media Encoder can mirror the source file's video settings through Match Source presets. Choosing one of these presets turns on the relevant controls in the Video settings tab of the Export Settings dialog.

For H.264 and MPEG-2 exporters, Adobe Media Encoder includes two Match Source presets:

- Match Source - High bit rate: intended for High-Definition (HD) source video. For both H.264 and MPEG-2 exporters, this is the default Match Source preset.
- Match Source - Medium bit rate: intended for Standard-Definition (SD) source video.

Use Match Source presets when only some video attributes should carry over from the source while other attributes are set manually. The Match Source configuration can be saved as a new preset and reused on any source in the Queue or Watch Folder panels.

For instance, a Watch Folder may contain assets with different frame sizes and frame rates. If all of those assets need conversion to one format at 24 fps, build a preset that keeps source matching enabled for every property except Frame Rate, which you set to 24 fps.

Most Media Encoder export formats share the following settings:

- Width: the video frame's width.
- Height: the video frame's height.

Note

When width and height are linked, the video's aspect ratio is preserved. To set width and height separately, turn off the link button.

- Video Dimensions: formats such as H.264 Blu-ray or Wraptor DCP allow only particular frame sizes. For those formats, the Video Dimensions menu lists the supported sizes.
- Frame Rate: the number of frames displayed each second during playback. Higher frame rates usually make motion appear smoother, but selecting a frame rate that differs from the source media can create unwanted motion artifacts. Some formats and codecs also restrict frame rates to a specific set.

  - Progressive is the preferred choice for digital television, online content, and film.
  - For interlaced exports such as NTSC or PAL, choose Upper First or Lower First to define the field display order.

- Aspect: the video's pixel aspect ratio. Pixel aspect ratio (PAR) is the width-to-height relationship of one video pixel. Digital formats such as HD, 4 K UHD, and 8 K generally use square pixels (PAR 1.0), while analog formats such as NTSC & PAL use rectangular pixels. Exporting with a PAR that differs from the source media's PAR can distort the image.
- Render at Maximum Depth: exports with greater color precision (32-bit), improving gradients and overall color quality.

H.264 and HEVC formats include the settings described next.
