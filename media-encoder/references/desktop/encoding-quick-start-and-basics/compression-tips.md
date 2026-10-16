# Compression tips

Search Last updated on Mar 27, 2026

Video compression guidance

Keep editing in the project's native video format until final delivery

Start from raw footage, or from the least-compressed version you can access. Whenever video passes through a lossy encoder, quality is reduced. A single generation of loss is often workable, but encoding and compressing material that was already compressed can push the damage past an acceptable level. Previously encoded and compressed video can also carry noise and artifacts, which may slow the next encode/compression pass or make the output file larger.

Keep the video duration as short as possible

Cut material from the start and end, and remove unneeded content during editing. See Crop and trim source before encoding.

Tune the compression settings

When compressed footage looks good, adjust settings to lower the file size. Test the footage, then keep changing compression values until you find the strongest setting for that specific video. Because each video has different attributes that affect compression and file size, each one needs its own best-fit setting. See Encoding and exporting.

Reduce fast motion

If file size matters, keep movement low. Movement of any kind raises file size; shaky camera work, rolls, and zooms cause especially poor results here. After Effects motion stabilization features can remove unnecessary movement.

Pick suitable dimensions

See Image aspect ratio and frame size.

Use a suitable frame rate

See Frame rate.

Set a suitable key-frame count

See Key frames.

Lower noise and grain

Noise and grain in source images make encoded files larger. When possible, use Adobe Premiere or After Effects tools to reduce noise and grain.

Audio compression guidance

Audio production follows the same kind of concerns as video production. For effective audio compression, begin with a source audio file that has no distortion or audible artifacts from the original recording.

When encoding material from a CD, record it through direct digital transfer instead of through a sound card's analog input. A sound card adds needless digital-to-analog and analog-to-digital conversion, which can introduce noise into the transferred audio. Direct digital transfer tools are available for Windows and Mac OS. When an analog source is unavoidable, use the best sound card available.

Note

For a monaural (mono) source audio file, encode in mono for Flash use. With Adobe Media Encoder and an encoding preset, verify whether the preset outputs stereo or mono, then choose mono if needed.
