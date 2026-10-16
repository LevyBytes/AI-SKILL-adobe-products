# More information about GPU

- Every VR effect, VR Blur included, runs solely on the GPU. They differ from the other effects in having no CPU fallback at the moment. To run them, a GPU carrying plenty of VRAM, 4GB or more, is the recommendation. Where they beat other effects for VR is in stitching the edges of the VR image together without a visible seam. A few also prove handy on ordinary, non-VR footage simply because they're brand new to After Effects, VR Chromatic Aberrations being one example.
- Found under Preferences > Appearance, the Hardware Accelerate Composition, Layer, and Footage Panels option ships turned on and relies on DirectX under Windows and Metal on Mac to ready rendered frames for the screen during previews or playback. After a frame is rendered, After Effects then readies it for display, accounting for screen resolution, scaling, overlays such as guides and layer handles, and color management. In particular, View > Use Display Color Management applies once a working space color profile is active for the project. Switch the Hardware Accelerate option off and After Effects shifts all of that onto the CPU, yet the GPU can speed the work up, color management most of all. The GPU demand here stays minimal, and any recent video card carrying even a little VRAM will do.

### More like this

- Basics of rendering and exporting in After Effects
- Memory and storage in After Effects
