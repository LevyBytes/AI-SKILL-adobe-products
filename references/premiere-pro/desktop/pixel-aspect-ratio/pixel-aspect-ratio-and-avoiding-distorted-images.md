# Pixel aspect ratio and avoiding distorted images

Pixel aspect ratio defines the width-to-height relationship of one pixel within a frame. The pixels that form a frame have their own pixel aspect ratio, sometimes called PAR. Pixel aspect ratios differ because video systems make different assumptions about how many pixels are needed to fill a frame.

For example, many computer video standards describe a 4:3 aspect ratio frame as 640x480 pixels high, which produces square pixels. Those computer-video pixels use a 1:1 pixel aspect ratio (square).

DV NTSC and similar video standards define a 4:3 aspect ratio frame as 720x480 pixels, creating narrower rectangular pixels. DV NTSC pixels use a pixel aspect ratio of 0.91 (non-square). DV pixels are always rectangular; they are vertically oriented in systems that produce NTSC video and horizontally oriented in systems that produce PAL video. In the Project panel, Premiere shows the clip pixel aspect ratio beside the clip image thumbnail.

Note

The clean aperture is the image area free of edge artifacts and distortions. The production aperture means the full image area.

Pixel aspect ratio comparison examples

A. 4:3 square-pixel image on a 4:3 square-pixel (computer) monitor B. The same 4:3 square-pixel image correctly interpreted for a 4:3 non-square pixel (TV) monitor C. The same 4:3 square-pixel image incorrectly interpreted for that 4:3 non-square pixel (TV) monitor

Pixel aspect ratio comparison graphic
