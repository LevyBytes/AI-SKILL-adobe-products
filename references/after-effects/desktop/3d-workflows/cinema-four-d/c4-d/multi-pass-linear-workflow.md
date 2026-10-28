# Multi-Pass (Linear Workflow)

Reach for the Cinema 4D Multi-Pass option to name which pass to render. Multi-pass features come into play only with the Standard renderer.

What multi-passes buy you is the speed to fine-tune a C4D scene by compositing assorted kinds of passes together in After Effects — say, tweaking only the scene's shadows or reflections. To have the results line up with Cinema 4D's default Linear Workflow project setting, your project has to blend colors in linear light — reached either through a color-managed linear working space or by enabling Blend Colors Using 1.0 Gamma over in the Project Settings dialog box.

- Set Multi-Pass: Choose this to pick which pass renders on this layer. It is available only when the Cinema 4D Multi-Pass option is enabled.

- Defined Multi-Passes: Switch this on and it adds the passes explicitly added in the .c4d file, which can take in passes besides image layers.

- Add Image Layers: Reach for this to build multiple pass layers carrying the right blending modes, keyed to how Defined Multi-Passes is set. With the Defined Multi-Passes option switched on, Add Image Layers will let through nothing but the passes set in the Cinema 4D render settings, holding back every other supported type.

Note

As image layers get added, whichever layer you had selected at the start drops to the bottom of the Timeline stack and is renamed with RGBA Image tacked on, marking its multi-pass type.
