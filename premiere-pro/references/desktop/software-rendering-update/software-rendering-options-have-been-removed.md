# Software rendering options have been removed.

In Premiere (version 25.2 and later), Project Settings > General no longer includes the software renderer choice "Mercury Playback Engine Software Only".

Software rendering can slow performance and render at 8-bit, which may create image quality problems.

Affected products and platforms:

- Premiere - Windows
- Premiere - Macintosh Intel
- Adobe Media Encoder - All platforms

Premiere on Apple silicon computers is unchanged, because this platform never offered software rendering.

Only rendering is affected by this update. Software encoding remains available during export. Hardware encoding is the recommended path for best performance.

On a computer with one GPU type, Project Settings > General > Renderer selects that GPU and disables the menu because there is no second GPU type available. The playback engine displayed there is active for rendering.

On a computer with two GPU types, choose which GPU type, OpenCL or CUDA, handles rendering.

Note

If a project rendered correctly with software rendering in version 25.1 or earlier but fails in later versions, submit a bug report so the problem can be fixed.
