# GPU settings in Photoshop are causing conflicts with certain features

Open Edit > Preferences > Performance (Windows) or Photoshop > Settings > Performance (macOS).

Confirm that Use Graphics Processor is checked.

Open Advanced Settings.

Clear Use OpenCL and GPU Compositing, then select OK.

Select OK again, then restart Photoshop.

Note

Some Photoshop features depend on GPU acceleration and stop working if the graphics processor is disabled. Affected features include certain 3D functionality as well as Oil Paint filter, Perspective Warp, and Smooth Brush Resizing.
