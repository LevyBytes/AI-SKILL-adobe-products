# Temporal compression and spatial compression

Video and audio compression has two broad categories: spatial and temporal. Spatial compression works on an individual frame of data without using nearby frames. It is also commonly called intraframe compression.

Temporal compression finds changes from frame to frame and stores only those changes, so each frame is described by how it differs from the frame before it. Areas that do not change are reused from earlier frames. This approach is also commonly called interframe compression.
