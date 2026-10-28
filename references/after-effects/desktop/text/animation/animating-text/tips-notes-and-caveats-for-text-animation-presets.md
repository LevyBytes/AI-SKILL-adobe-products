# Tips, notes, and caveats for text animation presets

Each text animation preset was authored within an NTSC DV 720x480 composition, with every text layer set in 72-point Myriad Pro. Certain preset animations carry the text on, off, or across the composition. Inside a composition far larger or smaller than 720x480, the preset's position values might not fit — an animation meant to begin off-frame, say, could instead start on-frame. When the text lands somewhere other than expected or vanishes without warning, tweak the position values for the text animator over in the Timeline panel or Composition panel.

Having applied a 3D Text animation preset, you might have to rotate the layer or introduce a camera that orbits the layer in order to view the 3D animation's results.

Presets in the Paths category will automatically swap the source text for the preset's own name and turn the font color white. Other character properties may shift as well under these presets.

Within the Fill And Stroke category sit presets capable of altering the fill color and stroke properties of whichever preset you apply. When a preset calls for a stroke or fill color, it only works if you've already given one to your text.
