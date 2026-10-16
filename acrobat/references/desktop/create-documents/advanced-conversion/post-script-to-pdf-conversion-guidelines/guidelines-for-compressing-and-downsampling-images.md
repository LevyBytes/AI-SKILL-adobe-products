# Guidelines for compressing and downsampling images

As you prepare PostScript files for PDF conversion, lean on these best practices to keep image compression and resolution under control:

- Reach for ZIP compression on text, line art, and pictures dominated by flat areas of solid color, which holds their clarity and sharpness.
- Reach for JPEG compression on photographs and images whose colors shade gently, trimming file size while the visual quality survives.
- Reach for CCITT Group 3 or 4 compression on scanned monochrome documents, and Run Length compression on black-and-white images carrying broad solid areas.
- Reach for bicubic downsampling on photographic images, where weighted pixel averaging yields smoother gradients.
- Reach for subsampling when image quality matters less and speed matters more, since it grabs one representative pixel out of each sample area.
- Hold the resolution near 300 dpi at low compression for print output, which keeps image quality high.
- Drop the resolution to somewhere between 72 and 150 dpi at higher compression for screen or web output, which shrinks file size.
- Give individual images their own compression and downsampling settings when it helps, so background and foreground elements can be tuned apart from each other.
- Drop Distiller parameters into the PostScript file to steer how images are treated — for instance, set the resolution through the ImageResolution parameter ahead of each image.

Note

For the inserted Distiller parameters to take effect, head to the Advanced panel within Distiller's Adobe PDF Settings dialog box and switch on Allow PostScript file to override Adobe PDF settings. With it on, those parameters take precedence over whatever you chose in the Adobe PDF dialog box.
