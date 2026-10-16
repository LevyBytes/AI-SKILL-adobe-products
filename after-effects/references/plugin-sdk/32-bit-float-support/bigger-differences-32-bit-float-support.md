# Bigger Differences — 32-Bit Float Support

Premiere Pro does not support After Effects 16-bit rendering or SmartFX. To render at 32-bit in Premiere Pro, declare support for one of the 32-bit pixel formats described in the previous section, then implement 32-bit rendering for `PF_Cmd_RENDER`. This approach can support multiple render depths. The SDK Noise sample project demonstrates the pattern.

Depending on the clip or clips receiving the effect, 32-bit processing is not always required to preserve source-input quality. Settings are available, however, to force 32-bit rendering when effects need finer processing granularity and more headroom. For timeline previewing, go to Settings>Sequence Settings> Video Previews>Maximum Bit Depth. For file export, use Export Settings>Video>Basic Settings>Render at Maximum Depth.
