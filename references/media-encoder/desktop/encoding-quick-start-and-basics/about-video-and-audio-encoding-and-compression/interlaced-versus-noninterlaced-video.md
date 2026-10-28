# Interlaced versus noninterlaced video

Interlaced footage builds each frame from two fields. One field carries half of the frame's horizontal lines: the upper field (Field 1) has the odd-numbered lines, while the lower field (Field 2) has the even-numbered lines. An interlaced video display, such as a television, paints a frame by drawing one field's lines and then the other field's lines. Field order determines which field appears first. In NTSC video, the screen receives new fields 59.94 times per second, yielding a frame rate of 29.97 frames per second.

Noninterlaced frames are stored without field separation. On a progressive-scan monitor (such as a computer monitor), a noninterlaced frame is drawn in one pass from the top horizontal line to the bottom one.

When an interlaced source is encoded to noninterlaced output, Adobe Media Encoder deinterlaces the video before encoding.
