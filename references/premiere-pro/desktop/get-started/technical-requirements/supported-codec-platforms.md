# Supported codec platforms

Hardware-accelerated decoding is available for MP4 media that uses H.264/AVC and HEVC codecs. On Intel platforms, HEVC 4:2:2 10-bit decoding is supported by Premiere, Adobe Media Encoder, and After Effects (version 22.0 and later).

M2TS (MPEG-2 Transport Stream) is not supported. For 4K M2TS media, playback can improve after transcoding to MP4 with hardware-accelerated decoding. HD M2TS media may see little or no meaningful speed gain.

On systems using an integrated Intel GPU, 8 GB RAM or less can restrict hardware-accelerated decoding enough that the CPU takes over. For better performance, use 16 GB of RAM or more.


Encode videos as H.264/AVC (8-bit) or HEVC 4:2:0 (8-bit and 10-bit). With a 10th-generation or newer Intel® Core™ processor, HEVC output can go up to 8192x8192; on other processors, keep HEVC at 4096x4096 or below.
