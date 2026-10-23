# Images panel options

On the Images panel, the controls govern how color, grayscale, and monochrome images are compressed and resampled. It often pays to try different combinations until file size and image quality strike the right trade-off.

For color and grayscale images, aim for a resolution roughly 1.5 to 2 times the line screen ruling used at print time. Monochrome images should match the output device's resolution. That said, pushing a monochrome image past 1500dpi inflates the file without any visible quality gain. Artwork meant to be enlarged, such as maps, can warrant higher resolutions.

Note

Resampling monochrome images sometimes yields surprises: for instance, the image may not display at all. Should that occur, switch resampling off and convert the file once more. Subsampling is the likeliest culprit, while bicubic downsampling is the least likely.

The table below lists familiar printer categories alongside their resolution in dpi. It also gives the default screen ruling in lines per inch (lpi) and a resampling resolution for images in pixels per inch (ppi). As an example, when printing to a 600-dpi laser printer you would set 170 as the resolution at which images get resampled.

| Printer resolution | Default line screen | Image resolution |
| --- | --- | --- |
| 300dpi (laser printer) | 60lpi | 120ppi |
| 600dpi (laser printer) | 85lpi | 170ppi |
| 1200dpi (imagesetter) | 120lpi | 240ppi |
| 2400dpi (imagesetter) | 150lpi | 300ppi |

Downsample (Off): Brings image resolutions that sit above the for images above value down to the output device's resolution by merging the pixels within a sample region into one bigger pixel.

Average Downsampling to: Takes the average of the pixels across a sample region and swaps the whole region for that average pixel color at the resolution you set.

Subsampling to: Swaps a whole region for a single pixel picked out of that sample region, at the resolution you set. It converts faster than downsampling, though the images it yields are less smooth and continuous.

Bicubic Downsampling to: Determines pixel color from a weighted average rather than the plain average that downsampling uses. It is the slowest method but delivers the smoothest tonal gradations.

Compression/Image Quality: Compresses color, grayscale, and monochrome images. With color and grayscale images, it also governs the image quality.

Anti-alias to gray: Eases the jagged edges of monochrome images. Pick 2 bit, 4 bit, or 8 bit to get 4, 16, or 256 gray levels. (Anti-aliasing can leave small type or thin lines looking blurry.)

Note

Text and line art are always compressed. Switching that off means setting the relevant Distiller parameter. For the details, consult the SDK information on the Acrobat Developer Center at www.adobe.com/go/learn_acr_devcenter_en (PDF, English only).

Policy: Brings up the Image Policy dialog box, where you decide how Color, Grayscale, and Monochrome images that fall under the resolutions you name get handled. Give each image type a resolution value, then pick Ignore, Warn and continue, or Cancel job.
