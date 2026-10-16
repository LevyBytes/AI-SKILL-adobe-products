# Continuously rasterize a layer containing vector graphics

Import vector graphics and After Effects rasterizes them on its own. But scaling a layer of vector graphics past 100% calls for continuous rasterization of that layer to hold image quality. Layers sourced from Illustrator, SWF, EPS, and PDF files can be continuously rasterized. Continuous rasterization has After Effects rasterize the file on demand, driven by each frame's transformation. Such a layer tends to yield finer results, but it can render more slowly.

Shape layers and text layers undergo continuous rasterization at all times.

Apply an effect to a continuously rasterized layer and the outcome can diverge from what you'd get on a layer without continuous rasterization. That gap traces back to a shift in the layer's default rendering order. Without continuous rasterization, a layer's default order is masks, then effects, then transformations; with it, the default order becomes masks, then transformations, then effects.

Continuous rasterization or not, viewing and rendering a composition at Best Quality has After Effects anti-alias (smooth) the vector graphics.

A continuously rasterized layer can't be opened or worked with in a Layer panel. One upshot of that restriction is that painting straight onto such a layer isn't possible. You can, however, copy paint strokes from other layers and paste them in.

Image from imported Illustrator file

A. Original B. Enlarged with Continuously Rasterize switch turned off C. Enlarged with Continuously Rasterize switch turned on

Image from imported Illustrator file

1. Within the Timeline panel, click the layer's Continuously Rasterize switch , which doubles as the Collapse Transformations switch on precomposition layers.

### More like this

- Select layers
- Working with footage items
- Timeline panel
- Layers (keyboard shortcuts)
- Select a color or edit a gradient
- Preview modes and Viewer Quality preferences
- About vector graphics and raster images
- Render order and collapsing transformations
