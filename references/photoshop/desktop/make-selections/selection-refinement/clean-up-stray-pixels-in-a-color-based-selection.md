# Clean up stray pixels in a color-based selection

In Adobe Photoshop, the Smooth command can clean stray pixels from a selection and soften jagged selection edges.

Create a selection with any selection tool.

Select Select > Modify > Smooth.

For Sample Radius, type any pixel value from 1 to 100.

Select OK.

Photoshop checks pixels around each selected pixel out to the distance set by the radius. When selected pixels make up more than half of that surrounding area, the current pixel stays selected and neighboring unselected pixels are added. When fewer than half are selected, Photoshop removes the pixel. This process reduces patchy areas and smooths sharp corners or jagged lines in the selection.
