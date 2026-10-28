# Auto-align image layers

In Adobe Photoshop, automatic image-layer alignment helps build composites, panoramas, and layered designs without hand-positioning each layer.

Auto-Align Layers compares matching image details across different layers, including corners and edges, then aligns those layers automatically. Either assign the reference layer yourself or let Photoshop select it. Photoshop positions the remaining layers against that reference so shared details overlap properly.

After alignment, the images can be combined in these ways:

- Blend layers or apply masks to remove or replace image areas that share the same background, producing a continuous composition.
- Join images that contain overlapping areas to make a panoramic or wide-angle result.

Copy or place the images for alignment into one document. Keep every image on a separate layer.

In the Layers panel, choose a locked layer to use as the reference.

Choose the other layers to align, right-click, and choose Rasterize Layers.

Note

- Avoid selecting adjustment layers, vector layers, or Smart Objects that do not include the image information used for alignment.
- With static-background video, frames can be converted into layers so content can be added or removed across several frames.

Choose Edit > Auto-Align Layers, then choose an alignment option in the Auto-Align Layers dialog.

Under Projection, choose from these options:

- Auto: evaluates the images and chooses Perspective or Cylindrical, depending on which layout produces the strongest result.
- Perspective: treats the center image as the reference and transforms the others by repositioning, stretching, or skewing them until overlapping content lines up.
- Collage: lines up layers and matches shared content while preserving the shapes without distortion.
- Cylindrical: places images on a curved surface, reducing the "bow tie" distortion often produced by Perspective layout.
- Spherical: uses a central reference to align images that overlap horizontally and vertically by converting them into a spherical layout.
- Reposition: lines up layers and matches shared content without applying Stretch or Skew transformations to the source layers.

Under Lens Correction, use these options for lens defects:

- Vignette Removal: offsets dark corners introduced by lens limits.
- Geometric Distortion: corrects barrel, pincushion, or fisheye distortion.

Choose OK.
