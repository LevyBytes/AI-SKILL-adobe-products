# Storage requirements for output files

To work out how many megabytes one uncompressed frame at full resolution takes up, apply this formula:

(height in pixels) x (width in pixels) x (number of bits per channel) / 2,097,152

Note

That 2,097,152 figure is a conversion factor rolling together the bytes in a megabyte (220), the bits in a byte (8), and the channels in a pixel (4).

A few sample frame sizes paired with their per-frame memory needs, expressed in megabytes (MB):

DV NTSC (720x480) frame in an 8-bpc project: 1.3 MB

D1/DV PAL (720x576) frame in an 8-bpc project: 1.6 MB

HDTV (1920x1080) frame in a 16-bpc project: 16 MB

4K digital cinema (4096x2304) frame in a 32-bpc project: 144 MB

Final output usually gets compressed during encoding, so multiplying one frame's memory by the frame rate and the composition's length won't tell you how much disk space the finished movie needs. That product does, however, hint at the upper bound of storage you might require. Take one second — roughly 30 frames — of uncompressed standard-definition 8-bpc video: it runs about 40 MB. At that data rate a feature-length film would eat over 200 GB. Apply DV compression, which trims each second of video to 3.6 MB, and the same movie still works out to more than 20 GB.

Feature-film projects routinely call for terabytes to hold footage and rendered movies, owing to their deeper color bit depth, bigger frames, and far gentler compression ratios.
