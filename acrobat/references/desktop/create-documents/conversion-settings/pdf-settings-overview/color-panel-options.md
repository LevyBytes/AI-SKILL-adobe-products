# Color panel options

In the Adobe PDF Settings dialog box, the Color panel is where you handle every piece of Distiller's color management — be it color management data pulled from the PostScript file, Distiller CSFs you apply, or custom settings you define yourself.

Settings File: Enumerates color settings, including some that come from graphics applications. Picking None opens up the Color Management Policies and Working Spaces settings for editing.

Color Management Policies: Governs how Distiller converts unmanaged color in a PostScript file when no Distiller color settings file is in play. The menu becomes available once None is chosen in the Settings File menu.

Note

How Color Management Policies values land on a PDF can shift with whichever compatibility setting you pick in the General panel.

Leave Color Unchanged: Keeps device-dependent colors as they are and holds device-independent colors at the closest equivalent it can. This suits print shops that have calibrated their gear, used those calibrations to specify color in the file, and send output only to those same devices.

Tag Everything for Color Management: Attaches an ICC profile to color objects and calibrates them so they read as device-independent across PDFs compatible with Acrobat 4 (PDF 1.3) and later. In Acrobat 3.0 (PDF 1.2) compatible PDFs, it turns device-dependent image color spaces (RGB, Grayscale, and CMYK) into device-independent ones (CalRGB, CalGray, and Cie L*a*b).

Tag Only Images for Color Management: Attaches ICC profiles to images alone — leaving text and vector objects out — so that black text dodges any color shift while Acrobat 4.0 (PDF 1.3) compatible PDFs are distilled. In Acrobat 3.0 (PDF 1.2) compatible PDFs, it converts device-dependent image color spaces (RGB, Grayscale, and CMYK) into device-independent ones (CalRGB, CalGray, and Lab).

Convert All Colors to sRGB (or Convert Everything To CalRGB): Calibrates the color so it becomes device-independent. In PDFs compatible with Acrobat 4 (PDF 1.3) or later it converts CMYK and RGB images to sRGB; in Acrobat 3.0 (PDF 1.2) compatible PDFs it converts them to calibrated RGB (CalRGB). Best for PDFs bound for the screen or for low-resolution printers.

Convert All Colors to CMYK: Turns color spaces into DeviceGray or DeviceCMYK following the choices made in the Working Spaces menu. Every entry under Working Spaces has to be specified.

Document Rendering Intent: Pick how colors get mapped from one color space to another. What any given method yields hinges on the color spaces' profiles — some profiles, for instance, give the same result no matter the method.

Acrobat carries the same four rendering intents (Perceptual, Saturation, Relative Colorimetric, and Absolute Colorimetric) as the other Creative Suite applications.

Acrobat also offers a rendering intent named Preserve, signaling that the intent lives in the output device instead of in the PDF. For many output devices, Relative Colorimetric serves as the default intent.

Note

Whatever the case, color management operations that run after the PDF is created may override these intents or ignore them outright.

Working Spaces: For any Color Management Policies value other than Leave Color Unchanged, pick a working space to set which ICC profiles define and calibrate the grayscale, RGB, and CMYK color spaces in the distilled PDFs.

Gray: Pick a profile to set the color space for every grayscale image in the files. Adobe Gray - Dot Gain 20% is the default ICC profile for gray images. Choose None to keep grayscale images from being converted.

RGB: Pick a profile to set the color space for every RGB image in the files. The default, sRGB IEC61966-2.1, is understood by many output devices. Choose None to keep RGB images from being converted.

CMYK: Pick a profile to set the color space for every CMYK image in the files. The default is U.S. Web Coated (SWOP) v2. Choose None to keep CMYK images from being converted.

Note

Choosing None for all three working spaces produces the same outcome as choosing the option Leave Color Unchanged.

To add ICC profiles — say ones your print service bureau hands you — drop them into the ICCProfiles folder inside the Common folder, the Windows\System\Color folder (Windows), or the System Folder/ColorSync folder (macOS).

Preserve CMYK values for calibrated CMYK color spaces: With this on, device-independent CMYK values are read as device-dependent (DeviceCMYK) values, device-independent color spaces are thrown out, and PDF/X-1a files adopt the Convert All Colors to CMYK value. With it off, device-independent color spaces convert to CMYK whenever Color Management Policies is set to Convert All Colors to CMYK.

Preserve under color removal and black generation: Keeps these settings when the PostScript file already holds them. Black generation works out how much black to lay down while reproducing a color. Undercolor removal (UCR) trims cyan, magenta, and yellow to offset black generation. Since UCR draws on less ink, it fits uncoated stock.

When transfer functions are found: Sets how PDFs deal with transfer functions. Transfer functions serve artistic ends and correct for the traits of a given output device.

Remove: Strips out any transfer functions that were applied. Such applied functions ought to go, unless the PDF will print on the very device the source PostScript file targeted.

Preserve: Keeps the transfer functions long used to offset the dot gain or dot loss that can crop up when an image is moved to film. Dot gain or loss happens when the ink dots forming a printed image come out bigger or smaller than they were in the halftone screen.

Apply: Runs the transfer function, altering the file's colors without retaining the function itself. It comes in handy for building color effects within a file.

Preserve halftone information: Keeps whatever halftone information the files carry. Halftone information is meant for one specific output device.
