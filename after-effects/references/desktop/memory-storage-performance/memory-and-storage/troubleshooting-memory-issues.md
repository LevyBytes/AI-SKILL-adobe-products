# Troubleshooting memory issues

| Error | Solution |
| --- | --- |
| “Unable to allocate enough memory to render the current frame....” | Lighten this frame's memory load, or add more RAM. |
| “Unable to allocate [n] MB of memory....” | Lighten this frame's memory load, or add more RAM. |
| “Image buffers of size [width]x[height] @ [depth] bpc ([n] GB) exceed internal limits...” | Trim what this frame asks of memory; any one frame tops out at 2 GB. |
| “Memory allocation of [n] GB exceeds internal limits...” | Trim what this frame asks of memory; a single allocation tops out at 2 GB. |
| “Frame dimensions exceed internal limits. Decrease the dimensions to render this frame.\" | Shrink the composition or solid so it stays beneath 16384. That ceiling covers Advanced 3D or Draft 3D plus solids, images, and textures — including any tucked inside 3D models. |
