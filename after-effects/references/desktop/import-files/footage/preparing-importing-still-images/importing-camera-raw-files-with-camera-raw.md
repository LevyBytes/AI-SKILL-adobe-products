# Importing camera raw files with Camera Raw

Bringing in a run of camera raw frames works the same way as pulling in any other numbered run of still images.

For every frame in the sequence that lacks its own XMP sidecar, After Effects falls back on whatever settings belong to the first camera raw image and applies those across the rest. Image settings stored in the Camera Raw database are never consulted.

Note

Because camera raw files carry no compression, they tend to be bulky, and that heft can push render times up.

Select File > Import > File.

2. Select the camera raw file, and select Open.
   Make necessary adjustments in the Camera Raw dialog box, and select OK.

Once a camera raw image is in the project, it remains adjustable. Reopening it in the Camera Raw dialog box is a matter of picking the footage item in the Project panel, then choosing File > Interpret Footage > Main, and finally selecting More Options.

Note

For a color-managed project, there's no way to attach an input color profile to a camera raw image. Learn more about automatic color interpretation.
