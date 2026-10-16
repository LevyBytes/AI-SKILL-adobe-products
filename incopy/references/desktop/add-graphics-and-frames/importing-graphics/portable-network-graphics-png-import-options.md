# Importing graphics — Portable Network Graphics (.png) import options

Placing a PNG image with Show Import Options enabled in the Place dialog box opens a dialog box divided into three import-settings areas. Two areas reuse choices found with other bitmap formats. The remaining area, PNG Settings, includes these choices:

Use Transparency Information

This choice is on by default when the PNG graphic contains transparency. If the imported PNG file has transparency, interaction with the graphic occurs only where the background is transparent.

White Background

For a PNG graphic without a file-defined background color, this choice is selected by default. It is enabled only when Use Transparency Information is active. When selected, white becomes the background color used while applying transparency information.

File Defined Background Color

If Use Transparency Information is selected for a PNG graphic stored with a non-white background color, this choice is selected by default. To avoid that default background color, click White Background to import the graphic over white, or turn off Use Transparency Information to import without transparency and show areas that are currently transparent. Some image-editing programs cannot define a non-white background color for PNG graphics.

Apply Gamma Correction

Choose this setting to adjust a PNG graphic's gamma, or midtone, values as it is placed. It helps match image gamma to the device gamma used for output or display, including a low-resolution printer, non-PostScript printer, or computer monitor. Turn the setting off to place the image without gamma correction. By default, it is selected when the PNG graphic was saved with a gamma value.

Gamma Value

Available only when Apply Gamma Correction is selected, this choice shows the gamma value saved with the graphic. To modify it, enter a positive number from 0.01 to 3.0.

For imported PNG files, the Image Import Options dialog box always bases its settings on the selected file, rather than on default or last-used settings.
