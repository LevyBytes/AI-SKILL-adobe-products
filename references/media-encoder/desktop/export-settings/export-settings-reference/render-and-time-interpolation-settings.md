# Render and time interpolation settings

This option preserves detail and reduces aliasing when the export frame size differs from the source media. An example is exporting a high-resolution 4-K sequence to lower-resolution HD or SD. Turning it on can improve quality, with these considerations:

- Export time can rise substantially, especially on systems without a supported GPU.
- If supported GPU hardware is available and Renderer is set to Metal, CUDA, or OpenCL, maximum render quality is used automatically. Keep this setting off in those cases.
- Use this only when exporting to a different frame size. When source and export frame sizes match, leave it off.

When enabled, Adobe Media Encoder exports from preview files already created for the Premiere sequence instead of rendering fresh media. This can make exporting faster, but the chosen preview format can affect quality.

Note

This setting applies only to Premiere sequences.

Proxies improve performance during editing and export.

When enabled, Adobe Media Encoder exports from proxy files already created for the sequence instead of rendering fresh media. This can improve export performance. The checkbox defaults to unchecked.

When enabled, Adobe Media Encoder writes verified metadata covering the file creator, the application used, such as Premiere, and any edits or generative AI involved, so viewers can understand how the content was produced and changed.

Turn this on to set an exported-media starting timecode that differs from the source timecode. Leave it off to use the source timecode during export.

Sources that include an alpha channel can use this option. When enabled, the output video renders only the alpha channel, and the Output tab shows a grayscale preview of that alpha channel. This helps when exporting to formats such as MXF that do not support transparency data. The alpha-channel-only export can define transparent areas in third-party applications.

Time Interpolation applies when exported-media frame rate does not match source-media frame rate. For example, the source sequence might be 30 fps while the export target is 60 fps. Time Interpolation creates or removes frames using these methods:

- Frame Sampling: duplicates or drops frames to reach the requested frame rate. Some footage may play back with stutter or jitter when this method is used.
- Frame Blending: inserts or removes frames by blending neighboring frames together, which can make playback smoother.
- Optical Flow: creates or removes frames by interpolating pixel motion from nearby frames. It usually gives the smoothest playback, though artifacts can appear when frames differ greatly. If that happens, try another time interpolation setting.

Estimated File Size is an approximate value based on constant-bit-rate video without audio or metadata.

Select this option to define the Maximum File Size for the exported video. It appears for presets that support estimated file sizes. Longer files are exported with an adjusted bitrate so they fit the requested file size. This is useful for export targets such as YouTube that impose file-size limits.

Note

- In some cases, Maximum File Size is respected by changing bit rates to remain under the size limit.
- Estimated File Size and Maximum File Size values are unreliable with very small target sizes, variable bit rates, or audio-only media.
- Actual sizes may differ greatly depending on format.
- Adding metadata can make the file larger than the displayed Estimated File Size.
