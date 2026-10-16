# Convert files with the Image Processor

Batch-convert, resize, and save groups of files in Adobe Photoshop while choosing format, color, and metadata settings.

Select File > Scripts > Image Processor.

Choose images from currently open files, or include every subfolder in the selection.

(Optional) Select Open First Image To Apply Settings when the first image needs adjustment before the remaining files receive the same settings. For PSD or JPEG files, this option can convert the first image's color profile and reuse it across the full set. The Image Processor does not store these settings globally; they apply only to the chosen location. Camera RAW files keep their current settings unless you change them.

Pick where the processed files will be stored. Processed outputs receive unique names, so existing files are not overwritten.

Choose the destination for the processed files.

Select the file types and options:

- Save As JPEG: writes images as JPEG files inside a folder called JPEG in the destination folder.
- Quality: controls JPEG image quality from 0 through 12.
- Resize to Fit: scales the image within the Width and Height values you enter while preserving original proportions.
- Convert Profile To sRGB: changes the color profile to sRGB. To store the profile with the saved image, also select Include ICC Profile.
- Save As PSD: writes Photoshop-format files into a folder called PSD in the destination folder.
- Maximize Compatibility: includes a composite version of a layered image in the target file for applications that cannot read layered images.
- Save As TIFF: writes images as TIFF files inside a folder called TIFF in the destination folder.
- LZW compression: uses the LZW compression scheme when saving the TIFF file.

Set other preferences:

- Run Action: choose an action set and an action already loaded in the Actions panel to apply to each image.
- Copyright Info: add metadata or replace existing metadata.
- Include ICC Profile: attach the profile to the saved files.

Choose Run to start processing. The Image Processor builds JPEG, PSD, or TIFF file folders in the selected destination.

Tip

Choose Save to store the settings. To use them again, choose Load and select the saved file.
