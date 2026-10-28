# VR assignments

VR property assignments determine how Premiere treats VR clips when metadata is present or absent.

VR properties are assigned when those values are written into a clip's metadata as the clip is created. If no VR properties are assigned, the clip metadata contains none of those values. Premiere still uses frame dimensions to recognize VR media and interpret it this way:

- 1:1 frame size dimensions are interpreted as Stereoscopic over/under VR.
- 2:1 dimensions are interpreted as Monoscopic VR.
- 4:1 dimensions are interpreted as Stereoscopic side-by-side VR.

Note

Auto-detection works only at these frame heights: 960, 1920, 2048, 2880, 4096, 5760, 6000, and 8192.Bl
