# Importing graphics — Bitmap import options

For individual imported graphics, color-management choices can be applied when the document is being handled with color-management tools. You can also bring in a clipping path or alpha channel stored with an image made in Photoshop. That allows direct selection of the image and path edits without changing the graphics frame.

Note

Adobe InCopy itself does not provide color-management options, but these import choices matter when images placed in InCopy later move to InDesign.

Placing a PSD, TIFF, GIF, JPEG, or BMP file with Show Import Options enabled in the Place dialog box opens a dialog box with these choices:

Apply Photoshop Clipping Path

When this choice is unavailable, either the image was not saved with a clipping path or its file format cannot support clipping paths. If a bitmap image has no clipping path, one can be created in InDesign.

Alpha channel

Choose an alpha channel to import the portion of the image stored as an alpha channel in Photoshop. InCopy uses that alpha channel to build a transparent mask on the image. This choice appears only when the image includes one or more alpha channels.

Open the Color tab to view these choices:

Image imported without clipping path (left) and with clipping path (right)

Profile

If Use Document Default is selected, keep this choice as it is. Otherwise, pick a color source profile matching the gamut of the device or software that created the graphic. With that profile, InDesign can translate the graphic's color correctly for the output device gamut.

Rendering Intent

Pick how the graphic's color range should be scaled to the output device color range. Perceptual (Images) is usually the choice for photographs because it represents photo colors accurately. Saturation (Graphics), Relative Colorimetric, and Absolute Colorimetric work better for solid-color areas and do not reproduce photographs well. Rendering Intent choices are unavailable for bitmap, grayscale, and index-color mode images.
