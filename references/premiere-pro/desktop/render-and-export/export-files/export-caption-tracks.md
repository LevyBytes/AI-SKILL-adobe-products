# Export caption tracks

In Adobe Premiere, export captions as burn-in, sidecar, or embedded output.

Select Export from the header bar at the top of Premiere to enter the Export workspace.

Choose caption export behavior according to your needs:

- Burn-in captions: If multiple caption tracks are enabled and captions are burned in, the active caption tracks in the timeline are displayed. During export, the captions appear under Captions > Caption Tracks.

Burn the track captions into the output regardless of format, because they are rendered directly onto the video file.

Render the selected track captions directly into the video file, regardless of caption format.

- All channels for CEA-608
- All channels for CEA-708
- Only one Caption Stream for OP-47

- Sidecar export with .scc extension: Because .scc supports only 608 tracks, the list includes only the sequence's available 608 tracks. If the timeline contains equal 608 streams, Premiere auto-selects them by stream count from the lowest track number to the highest. It does not select two equal streams at the same time.
- Sidecar export with .mcc extension: Because .mcc supports only 608 and 708 tracks, only available 608 or 708 tracks from the sequence are shown. If the timeline contains the same 608 and 708 streams, Premiere auto-selects them by stream count from the lowest track number to the highest. You can export all 608 and 708 tracks together.
- Sidecar export with .xml export extension: Because .xml supports only 608, 708, Teletext, EBU Subtitle, and Australian OP-47, Export settings offers a dropdown for choosing one supported track. This setup exports only one track at a time.
- Sidecar export with .stl export extension: Because .stl supports only Teletext, EBU Subtitle, and Australian OP-47, and it supports a single stream at a time, the caption track format lists all supported tracks present in the sequence. Choose one stream when exporting.
- Sidecar export with .srt export extension: Although .srt supports only one stream per file, it can handle several formats, including 608, 708, Teletext, EBU, Australian, and Subtitle.

Premiere automatically chooses the active timeline track as the default. When two or more tracks are enabled, it selects the enabled track with the lowest track number.
