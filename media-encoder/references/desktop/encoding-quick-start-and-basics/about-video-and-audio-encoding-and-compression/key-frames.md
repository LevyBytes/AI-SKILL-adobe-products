# Key frames

Key frames are full video frames, or images, placed at regular intervals in a video clip. Frames between key frames store information about changes occurring between those key frames.

Note

Key frames differ from keyframes, which are markers used to define animation properties at specific times.

By default, Adobe Media Encoder chooses the key frame interval, also called key frame distance, automatically from the video clip's frame rate. The key frame distance value controls how frequently the encoder re-evaluates the video image and records a complete frame, or key frame, into the file.

Footage with many scene changes, fast motion, or animation may produce better overall image quality when the key frame distance is lower. Smaller key frame distance values also create larger output files.

After lowering the key frame distance value, increase the video file bitrate to keep image quality comparable.
