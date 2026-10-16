# InDesign ran out of memory

During PDF export, InDesign can exhaust memory if it has to downsample several high-resolution images at once. Letting the PDF export skip that demanding downsampling pass can allow the file to save, after which Acrobat can perform the image reduction more efficiently in PDF optimization.

Use File > Export and set the format to Adobe PDF (Print).

Pick the destination, then choose Save.

In the Export Adobe PDF dialog box, open Compression from the left panel.

For Color Images, Grayscale Images, and Monochrome Images, set downsampling to Do Not Downsample.

During export from the InDesign document to Adobe PDF (Print), update the Compression settings.

Review the Compression settings again while creating the Adobe PDF (Print) from the InDesign document.

Turn off Preserve InDesign Editing Capabilities to lower the memory demand during the first save.

Choose Export so the PDF is written without downsampling.

Open the new PDF in Adobe Acrobat.

In Acrobat Pro, choose File > Save As Other > Optimized PDF. Acrobat Pro is required for that command.

When the PDF Optimizer dialog box opens, choose Images in the left panel.

Choose the downsampling values you need for Color, Grayscale, and Monochrome images.

Choose OK, then provide a name for the optimized file.

Choose Save.
