# Tune Premiere playback for H.264 and H.265 media.

Premiere can use Intel® Quick Sync. That feature relies on the dedicated media-processing functions in Intel® Graphics Technology to decode and encode H.264/H.265 media more quickly.

For H.264/H.265 media, switch on hardware-accelerated decoding or encoding to improve playback and reduce export duration.

To improve playback, enable hardware-accelerated decoding:

Open Edit > Preferences > Media.

Turn on Enable hardware accelerated decoding (requires restart).

Restart Premiere.

To reduce export duration, enable hardware accelerated encoding:

Choose File > Export > Media.

In the Format drop-down list, choose H.264 or HEVC (H.265).

On the Video tab, open Encoding Settings and set Performance to Hardware Encoding.

Note

Hardware-accelerated decoding or encoding requires an Intel® CPU that supports Intel® Quick Sync. For additional details, see the system requirements and GPU and GPU Driver requirements.
