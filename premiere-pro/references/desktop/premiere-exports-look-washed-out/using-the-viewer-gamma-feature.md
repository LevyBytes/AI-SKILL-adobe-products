# Using the Viewer Gamma Feature

Viewer Gamma, located in Lumetri Color > Settings > Project, changes the way Premiere displays the video and offers these three gamma curve choices:

- 2.4 (Broadcast)
- 2.2 (Web)
- 1.96 (QuickTime)

Adjusting Viewer Gamma does not alter the exported file. It only changes the Premiere viewing preview, which helps you align what you see with what a customer is likely to see.

In older Premiere releases, some users applied an Adobe-created gamma compensation LUT at export time to handle QuickTime gamma shift. Viewer Gamma removes the need for that LUT-based workaround.

Note

In Premiere v25.2 and earlier, Viewer Gamma targets standard dynamic range (SDR) workflows. It supports Rec. 709, log, and raw media. With log and raw sources, it behaves correctly in a LUT-based workflow, but not when Lumetri Color > Settings > Project > Color Manage Auto Detected Log and Media is enabled. Viewer Gamma also depends on Lumetri Color > Settings > Sequence > Color Setup being set to Direct Rec. 709 (SDR) or Disable Color Management. A later Premiere release will provide an updated viewer gamma feature for more color management workflows.
