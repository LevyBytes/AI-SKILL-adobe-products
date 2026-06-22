# Color Profiles, Choose Colors, Color Modes

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Adjust color; About color profiles; Embed color profiles; Change color profile for documents; Set foreground and background colors; Choose colors with the Adobe Color Picker; Choose a color while painting; Choose web-safe colors; Choose a CMYK equivalent for a non-printable color; Choose a spot color; Spot color libraries; Convert an image to another color mode; Convert an image to Bitmap mode; Convert a color photo to Grayscale mode; Convert a Bitmap mode image to Grayscale mode; Convert a grayscale or RGB image to indexed color; Conversion options for indexed-color images.

## Adjust color

### Color profiles

About color profiles

Embed color profiles

Change color profile for documents

### Choose colors

Set foreground and background colors

Choose colors with the Adobe Color Picker

Choose a color while painting

Choose web-safe colors

Choose a CMYK equivalent for a non-printable color

Choose a spot color

Spot color libraries

### Color modes

Convert an image to another color mode

Convert an image to Bitmap mode

Convert a color photo to Grayscale mode

Convert a Bitmap mode image to Grayscale mode

Convert a grayscale or RGB image to indexed color

Conversion options for indexed-color images

### Color corrections

Apply a Hue or Saturation adjustment

Colorize a grayscale image or create a monotone effect

### Selective color adjustments

Match color in different images

Match color between two images

Match color of two layers in the same image

Save and apply settings in Match Color

Replace Object Colors by Applying a Hue or Saturation Adjustment

### Color effects and techniques

Convert a color image to black and white

Apply a gradient fill

Edit a gradient

## About color profiles

Color profiles help Adobe Photoshop align on-screen color with printed and displayed results for accurate color management.

A color profile is a standardized file that describes a device's color reproduction. By translating device-specific values into a universal color space, the profile helps Adobe Photoshop keep color predictable across monitors, scanners, cameras, and printers.

Reliable color management depends on accurate ICC-compliant profiles. If profiles are missing or wrong, the same image can look different from one device to another, which can lead to unnecessary edits that damage the work. A scanned image, for example, may display incorrectly in another program because the devices differ. With the proper profile, Photoshop compensates for those differences and shows the image's actual colors.

### Types of color profiles in Photoshop

### Monitor profiles

These profiles describe the way your monitor currently displays color. Create this profile first, because dependable on-screen color is required for sound design choices. If the display color is inaccurate, edits can be based on misleading visual feedback.

### Input device profiles

These profiles define the color range that scanners and cameras can record. Adobe recommends Adobe RGB for compatible cameras, while sRGB remains the default for most consumer devices. Advanced users can build custom profiles for particular lighting conditions or film types.

### Output device profiles

These profiles specify the color space used by printers and presses, helping Photoshop map document colors to the printer range based on the ink and paper in use. Glossy paper usually provides a broader color range than matte paper. Built-in printer profiles are a useful calibration starting point.

### Document profiles

Document profiles set the RGB or CMYK color space for a file so color values map to real appearances. For example, R=127, G=12, B=107 is only a group of numbers until a profile such as Adobe RGB tags it and interprets it as a particular purple. Photoshop applies profiles to new documents from your Working Space settings. Untagged documents, by contrast, contain only raw color numbers and depend on the working space profile for display and editing.

## Embed color profiles

Embed color profiles when saving images in Adobe Photoshop so colors stay consistent on other devices during viewing or printing.

Color profiles help images display with consistent colors across devices and applications. When a Photoshop document includes an embedded profile, the file can better preserve the intended appearance after it is opened somewhere else.

An embedded profile is a core part of a color management workflow. Without one, another application may interpret the image colors differently and introduce unwanted color shifts. This procedure works for any document that already has a color profile assigned in Photoshop.

### Embed a color profile when saving

Select File > Save As.

Choose a supported format that allows profile embedding, such as PSD, TIFF, JPEG, PDF, or PSB.

Select Embed Color Profile.

Choose the desired file location and name, then select Save.

### Verify if a color profile is embedded

Look at the document information area along the bottom of the Photoshop window.

Select the right arrow icon, then choose Document Profile to show the embedded profile currently in the document.

## Change color profile for documents

In Adobe Photoshop, change a document's color profile when you are targeting another output destination or fixing color management problems.

Color profiles keep color representation consistent across devices and applications. Photoshop usually assigns suitable profiles automatically, but particular output requirements may call for a manual change.

Only change a document's color profile when preparing for a different destination, such as moving from web output to print, or when correcting a color management issue. The workflow lets you assign another profile without altering color values, or convert the colors so they match the color space of a new profile.

### Assign a different color profile

Select Edit > Assign Profile.

Choose one option:

- Don't Color Manage This Document: clears the profile currently assigned.
- Working RGB: uses the working space profile currently in effect.
- Profile: opens selection of a specific profile.

Confirm with OK.

Note

Assigning a profile leaves the document's color values intact. What changes is Photoshop's interpretation of those values, so the colors shown on your screen may shift significantly.

### Convert document colors to another profile

Select Edit > Convert to Profile.

In Destination Space, select the target Profile.

Choose the settings you want in Conversion Options:

- Engine: Adobe (ACE) is usually recommended.
- Intent: choose the rendering intent that fits your needs.
- Use Black Point Compensation: generally leave this checked.
- Use Dither: reduces banding in gradients.

Select Preview to see the conversion effect on your image in real time.

Select OK.

After changing the document's color profile, save the file in a profile-capable format such as PSD, TIFF, or JPEG so the color management settings are preserved.

## Set foreground and background colors

Use the toolbar or the Eyedropper tool in Adobe Photoshop to set colors.

### Set colors with the toolbar

Use the toolbar's Set foreground color box to open Color Picker (Foreground Color), then pick a new foreground swatch.

A. Switch Foreground and Background Colors. B. Default Foreground and Background Colors. C. Set foreground or background color.

Use the toolbar's Set background color box to open Color Picker (Background Color), then pick a new background swatch.

Use Switch Foreground and Background Colors in the toolbar to exchange the colors.

Use Default Foreground and Background Colors in the toolbar to return black to the foreground and white to the background.

### Set colors with the Eyedropper tool

Select the Eyedropper tool in the toolbar.

From the Sample Size menu in the Options bar, choose a sample size:

- Point Sample: uses the clicked pixel's exact value.
- 3 by 3 Average, 5 by 5 Average, 11 by 11 Average, 31 by 31 Average, 51 by 51 Average, 101 by 101 Average: calculates an average value over the chosen pixel area.

From the Sample menu in the Options bar, choose a sampling option:

- All Layers: samples across every layer.
- Current Layer: samples only the active layer.
- Current & Below: samples the active layer plus any layers under it.
- All Layers no Adjustments: samples every layer except adjustment layers.
- Current & Below no Adjustments: samples the active layer and lower layers, omitting adjustment layers.

To choose a foreground or background color, use one of these methods:

- Click the desired area in the image to choose a new foreground color.
- Hold Alt (Windows) or Option (macOS), then click the desired area in the image to choose a new background color.

Tip

Drag the Eyedropper tool across an image area and release when the desired color appears to confirm the selection. As you drag, the foreground or background color box updates dynamically.

## Choose colors with the Adobe Color Picker

Use the Adobe Color Picker in Adobe Photoshop to set colors with HSB, RGB, Lab, CMYK, or hexadecimal values.

The Adobe Color Picker gives precise control over color selection across multiple color models. Depending on whether the work is for web color, print production, or digital design, you can enter exact values in the system that fits the workflow.

Enter values in the Color Picker to target the precise color you need.

Before you begin

Use the Color Picker values to specify the exact color, then open the picker by selecting Set foreground color or Set background color from the toolbox.

### Choose a color using the HSB model

HSB uses Hue (color type), Saturation (intensity), and Brightness (lightness) to define color.

Select H in the Color Picker.

Enter a value from 0° to 360° in the H text box.

To refine saturation and brightness, use any of these methods:

- Clicking a spot in the color field,
- Moving the circular marker, or
- Typing S and B values directly in their text boxes.

(Optional) Choose S or B when you want the color field to show saturation or brightness for fine-tuning.

### Choose a color using the RGB model

The RGB model combines Red, Green, and Blue light to create the desired variation.

Enter values from 0 to 255 in the R, G, and B text boxes.

You can also select a spot in the color field, which shows a blend of the other two components not selected among R, G, and B.

### Choose a color using the Lab model

Enter values in the L, A, and B text boxes with these ranges:

- L: 0–100 (lightness)
- A: –128 to +127 (green to red)
- B: –128 to +127 (blue to yellow)

The color field can also be used to adjust the colors.

### Choose a color using the CMYK model

The CMYK model uses printing inks: Cyan, Magenta, Yellow, and Black.

Enter percentage values from 0% to 100% for C, M, Y, and K in their text boxes.

The color field can also be used to adjust the colors.

### Choose a color by specifying a hexadecimal value

A hexadecimal (hex) value uses 6 digits to encode RGB values, a notation common in web work and digital design.

Type the desired code in the # text box to set the color.

## Choose a color while painting

Use the HUD (heads-up display) color picker in Adobe Photoshop when you need to choose colors without leaving the canvas while painting.

While a painting tool is active, the HUD (heads-up display) color picker opens inside the document window so you can choose colors in visual context and sample against the image as you work.

Note

Photoshop must have OpenGL enabled for the HUD color picker to appear. When OpenGL is off, the HUD picker is unavailable.

### Choose the type of HUD color picker

Open Edit > Preferences > General (Windows) or Photoshop > Preferences > General (macOS).

In the HUD Color Picker menu, choose one of these picker layouts:

- Hue Strip: shows a vertical picker.
- Hue Wheel: shows a circular picker.

### Choose a color from the HUD color picker

Activate a painting tool in the toolbox; examples include Brush tool, Pencil tool, and Mixer Brush tool.

Use Shift + Alt + right-click (Windows) or Control + Option + Command (macOS), then select within the document to display the HUD Color Picker.

Move through the picker to set Hue (color) and Shade (tone).

Tip

Keep the current shade fixed while adjusting hue by holding the spacebar; the same shortcut can also hold hue steady while the shade changes.

For direct sampling from the image, hold Alt (Windows) or Option (macOS) to switch temporarily to the Eyedropper tool.

## Choose web-safe colors

Use the Adobe Color Picker or the Color panel to set web-safe colors.

Choosing web-safe colors helps artwork display predictably across browsers and systems. In Adobe Photoshop, both the Adobe Color Picker and the Color panel provide access to that workflow.

The web-safe palette contains 216 browser-shared colors that display reliably on monitors restricted to 256 colors. Working from that palette reduces dithering and helps artwork remain visually consistent from one system to another.

### Select web-safe colors in the Adobe Color Picker

In the toolbox, select Set foreground color or Set background color to open the Color Picker.

Turn on Only Web Colors in the lower-left corner of the Color Picker. With that option enabled, every chosen color is restricted to the web-safe palette.

When Only Web Colors is off and the chosen color falls outside the web-safe set, Photoshop shows the Warning: not a web safe color icon next to the color sample.

Warning: not a web safe color

Warning: not a web safe color

Use the warning cube to replace the color with the nearest web-safe alternative.

### Select a web-safe color using the Color panel

Open the Color panel tab, or choose Window > Color.

From the Color panel menu, choose this option:

- Make Ramp Web Safe - selected colors snap to web-safe values.
  - To bypass snapping, Alt-drag (Windows) or Option-drag (macOS) the sliders.

If the current selection is not web-safe, the Color panel shows an alert cube next to the color ramp.

Select the alert cube to change the color to its nearest web-safe match.

## Choose a CMYK equivalent for a non-printable color

In Adobe Photoshop, assign the nearest CMYK equivalent when the selected color cannot be printed as chosen.

For print work, some RGB values and other color definitions fall outside what printing inks can reproduce accurately. Photoshop flags those out-of-gamut choices and lets you move them to the closest printable CMYK equivalents. The model uses four inks: Cyan, Magenta, Yellow, and Black.

In the toolbar, choose Set foreground color or Set background color to open the Color Picker.

Choose a color in the Color Picker.

If the color cannot be printed, Photoshop displays a Warning: out of gamut for printing icon.

Warning: Out of gamut for printing

Warning: Out of gamut for printing

Use the alert triangle to substitute the closest CMYK equivalent. Photoshop changes the selection to the nearest printable CMYK value.

## Choose a spot color

Use the Adobe Color Picker in Adobe Photoshop to choose a spot color from available libraries.

The Color Picker can draw spot colors from supported color libraries. Because spot colors are premixed inks intended for repeatable print output, use a printed swatch book when accuracy matters.

Open the Color Picker from the toolbox by selecting Set foreground color or Set background color.

In the Color Picker, select Color Libraries. The Colors Libraries dialog box displays the closest match to the color currently selected.

Select the closest print color in the Color Libraries

Select the closest print color in the Color Libraries

In the Book menu, choose a library; examples include Trumatch, Focoltone, ANPA, HKS, or DIC. Each one supplies a spot color system for print production.

You can find a color by typing the ink number, or by moving the triangles along the scroll bar.

Choose the wanted color patch in the list to apply it in the Color Picker.

## Spot color libraries

Review the spot color libraries available in Adobe Photoshop, including ANPA, DIC, Focoltone, HKS, and Trumatch.

Several professional-print spot color libraries are available through the Color Picker. They are intended to keep color selection reliable across regions and print workflows, and they help match colors accurately when preparing artwork for print output.

### ANPA-COLOR

ANPA-COLOR is primarily associated with newspaper production. It is built from the ANPA-COLOR ROP Newspaper Color Ink Book, which defines newspaper color standards for repeatable reproduction.

### DIC Color Guide

DIC Color Guide is frequently used in Japanese print production. It was developed by Dainippon Ink & Chemicals, Inc., and it is common in Japanese publishing and printing work.

### Focoltone

Focoltone contains 763 CMYK colors. It helps reduce prepress trapping and registration issues by presenting the overprints used to build each color. Available materials include swatch books, overprint charts, and chip books.

### HKS

HKS is used for European printing work. Every color maps to its own CMYK equivalent. Available variants:

- HKS E: continuous stationery
- HKS K: gloss art paper
- HKS N: natural paper
- HKS Z: newsprint

### Trumatch

Trumatch supplies more than 2,000 predictable CMYK colors. It spans the visible CMYK gamut in regular increments and includes tints, shades, and four-color grays for accurate color matching.

## Convert an image to another color mode

In Adobe Photoshop, convert images among color modes such as RGB, CMYK, Grayscale, and others.

Changing an image's color mode rewrites its color values permanently. During RGB to CMYK conversion, RGB colors outside the target gamut are mapped into the CMYK working space, and some detail may be impossible to restore.

Before you begin

- Keep most editing in the original color mode so the file remains flexible.
- Store a backup that keeps all layers intact for future edits.
- Flatten only when changes to layer blending are acceptable; retain layers when editable text or vectors are still needed.

Select or open the image to edit.

Choose Image > Mode from the drop-down menu. Its submenu shows the color modes supported by the document.

Choose the destination mode, such as RGB Color, CMYK Color, Grayscale, or another listed mode.

When converting to Multichannel, Bitmap, or Indexed Color, Photoshop flattens images automatically because those modes do not support layers.

Use View > Proof Colors to preview the converted image for print or for display on other devices.

Choose Edit > Convert to Profile when the image must be prepared for a particular output profile, such as a printer profile or web standard.

## Convert an image to Bitmap mode

Convert an image to Bitmap mode in Adobe Photoshop when you need pure black-and-white output and a smaller file.

Bitmap mode limits the image to black and white. That two-color result can produce high-contrast artwork or satisfy specific print workflows. Because editing choices are narrow in Bitmap mode, make most corrections in Grayscale before conversion.

For a color image, choose Image > Mode > Grayscale, then choose Image > Mode > Bitmap. For an image already in grayscale, choose Image > Mode > Bitmap.

In the Bitmap dialog box, enter the Output resolution value and choose a measurement unit. The current resolution is used by default.

Choose a conversion method from the Use menu:

- 50% Threshold: changes pixels lighter than middle gray to white and pixels darker than middle gray to black.
- Pattern Dither: organizes gray values as geometric dot patterns.
- Diffusion Dither: distributes tonal differences through pixels with error diffusion, producing a grainy, film-like appearance.

  - Frequency: lines per inch (lpi) or centimeters, based on the paper and press.
  - Angle: halftone screen direction, measured in degrees. For black-and-white prints, 45° is common.
  - Shape: dot shape chosen for the halftone.

- Custom Pattern: gives the converted image the look of a custom halftone screen. Select a custom pattern, usually one that contains multiple gray shades. Before using this option, define a pattern, then screen the grayscale image so the texture is applied. The pattern must match the full image size to cover everything; otherwise Photoshop tiles it. Photoshop includes several self-tiling patterns suitable for halftone screen patterns.

Tip

For better results, convert to grayscale first, then run the Blur More filter several times to soften the pattern.

## Convert a color photo to Grayscale mode

Use Grayscale mode in Adobe Photoshop when a color photo should discard color data and use less storage.

Grayscale mode uses only black, white, and gray tones to represent an image. File size goes down, but the color information is discarded and cannot be restored from the grayscale file. For more control, use a Black & White adjustment layer instead; it keeps the color data and lets you assign colors to particular gray values.

Before you begin

Save a backup copy in case color needs to be restored later.

Open the color photo for conversion.

Choose Image > Mode > Grayscale from the menu bar.

When prompted, select Discard to remove color information. Photoshop converts the photo into black, white, and shades of gray.

## Convert a Bitmap mode image to Grayscale mode

Convert a Bitmap mode image to Grayscale mode in Adobe Photoshop to regain editing options and create gray tones from black-and-white artwork.

Grayscale mode turns a Bitmap image into shades of gray, which makes editing easier. Remember that changes made in Grayscale may not translate the same way after converting back to Bitmap. A light-gray pixel edited in Grayscale, for example, becomes white after Bitmap conversion when its brightness is above 128.

Before you begin

Before converting, save a copy of the Bitmap image because a later return to Bitmap may not retain the edits.

Open the Bitmap mode image.

From the menu bar, choose Image > Mode > Grayscale.

Enter a value from 1 to 16 in the Size Ratio dialog box.

- The size ratio controls how pixels are averaged while the Bitmap image is scaled down.
- A value of 2, for example, averages two Bitmap pixels into one Grayscale pixel and reduces the image by 50%.
- Higher values create smoother gray tones from a 1-bit scanned image.

## Convert a grayscale or RGB image to indexed color

For GIF or PNG-8 preparation, Adobe Photoshop can convert a grayscale or RGB image to Indexed Color mode and reduce file size.

Indexed Color mode removes color data and builds a palette containing 256 colors. The result is smaller, but editing options become limited. Conversion is available only for images with 8 bits per channel in Grayscale or RGB mode.

Before you begin

Confirm that the image uses 8 Bits/Channel in Image > Mode.

Open the image and verify that it is in Grayscale or RGB mode with 8 Bits/Channel.

From the menu bar, choose Image > Mode > Indexed Color.

- A Grayscale image converts automatically.
- For an RGB image, Photoshop opens the Indexed Color dialog box.

Turn on Preview in the dialog box to see changes as they update.

Set the conversion choices in the dialog box, including Palette type, Dither, Transparency, and any other needed options to complete the Indexed Color image.

## Conversion options for indexed-color images

Use the conversion controls in Adobe Photoshop when moving an RGB or Grayscale image into Indexed Color mode.

During an Indexed Color conversion in Photoshop, the available settings control how colors are reduced and how the result appears. Those choices affect file size, visual fidelity, and compatibility with formats such as GIF and PNG-8.

### Palette types

The palette determines the color set available to the Indexed Color image. Choose the palette type that matches the intended output:

- Exact: keeps the original image colors exactly when the image contains 256 colors or fewer. No dithering is generated.
- System (Mac OS/Windows): relies on the default 8-bit system palette, built from uniform RGB sampling.
- Web: limits the table to the 216 web-safe colors to prevent browser dithering on older 256-color displays.
- Uniform: draws evenly spaced samples across RGB space; six red levels, six green levels, and six blue levels produce 216 colors.
- Local (Perceptual, Selective, Adaptive): builds the palette from colors in the current image.
- Perceptual gives preference to colors that human vision notices more strongly.
- Selective emphasizes large color areas while retaining web colors.
- Adaptive samples the colors that appear most often in the image.
- Master (Perceptual, Selective, Adaptive) - works like local palette generation, except it evaluates all open documents rather than a single document.
- Custom - lets you work in the Color Table dialog box to edit a custom color table or load one.
- Previous - applies the palette used by the previous indexed-color conversion.

For Palette choices such as Uniform, Perceptual, Selective, or Adaptive, specify the exact color count up to 256. Photoshop still processes the image as 8-bit, but this value determines how the color table is constructed.

### Color inclusion and transparency

Several controls define how chosen colors and transparent regions are treated:

- Forced: guarantees that selected colors stay in the palette. Available choices include Black and White, Primaries, Web, or a Custom selection.
- Transparency: keeps transparent regions by adding a transparency entry to the palette. When this option is off, Photoshop fills transparent regions with a matte color.
- Matte: sets the fill color used for anti-aliased edges or transparent regions so they can blend into a web background. Choose None when hard-edged transparency is preferred.

Dithering blends available pixels to imitate colors that are not present in the palette. It can improve appearance, although file size may grow. Options include:

- None: maps pixels to the nearest available color, creating crisp transitions and a posterized appearance.
- Diffusion: applies error diffusion for smoother output. Preserve Exact Colors keeps existing palette colors unchanged.
- Pattern: uses a halftone-style grid to represent unavailable colors.
- Noise: introduces randomness to limit seam patterns, which helps with web-layout image slices.

Note

Indexed Color mode restricts an image to 256 or fewer colors for smaller files and broader format compatibility. Transparency, forced-color, and dithering choices let you tune the final quality.
