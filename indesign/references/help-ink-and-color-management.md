# Manage Inks For Separation, Customize Spot Color Appearance, Specify Halftone Frequency And Resolution, Use Spot Colors For Printing ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Manage inks for separation; Customize spot color appearance; Specify halftone frequency and resolution; Use spot colors for printing; Process colors (CMYK) overview; Emulsion and image exposure settings.

## Manage inks for separation

Use the InDesign ink controls to manage output inks, change spot colors to process colors, and set ink density for reliable color separations.

Ink Manager adjusts ink handling at output time while leaving the document's color definitions unchanged. It can convert spot colors to process output, handle duplicate spot-color names, and tune ink density for trapping. Because these changes apply only during output, the feature suits print-provider workflows that need press-specific separations while preserving the original source file.

### Specify which inks to separate

Choose File > Print, then choose Output from the list on the left.

For Color, select Separations or In-RIP Separations.

Check the ink list and confirm that printer icons appear beside the inks that should be separated.

Use the printer icon next to an ink name to switch that ink's separation on or off. If the printer icon is visible beside a color name, InDesign outputs a separate plate for that color. Selecting the icon hides it and stops that ink from producing a separation.

### Convert spot colors to process

Choose Window > Output > Separations Preview.

Open the Separations Preview panel menu icon, then choose Ink Manager.

In the Ink Manager dialog box, find the spot color to convert in the ink list.

Select the spot color icon beside the color name to change it to process output. After the conversion, InDesign builds the separations from the CMYK values stored in the color swatch.

Confirm that the icon now shows CMYK quadrants, which indicates that the color separates as process colors.

### Create ink aliases for duplicate spot colors

Choose Window > Output > Separations Preview.

Open the menu icon in the Separations Preview panel, then choose Ink Manager.

In the Ink Manager dialog box, find the duplicate spot color in the ink list.

Open the Ink Alias menu for that color.

Select the primary spot color name that this duplicate should map to. Once the alias is set, both colors print to one separation plate, which can lower costs when a document unintentionally contains several versions of the same spot color.

### Adjust ink density

Choose Window > Output > Separations Preview.

Open the menu icon in the Separations Preview panel, then choose Ink Manager.

In the Ink Manager dialog box, choose the ink to change from the list.

Type a replacement value in Neutral Density, usually between 0.001 and 10.000.

Check that the neutral-density setting matches the press specifications supplied by the print service provider.

## Customize spot color appearance

Use Lab values and color-conversion choices in InDesign to control spot-color preview and printed output behavior.

InDesign can display and output spot colors using either Lab or CMYK values. The selection affects screen previews and conversion during output, while the spot-color definitions remain unchanged. Spot colors use their own dedicated plates, rather than being built from mixed process inks such as CMYK. Lab values are the more consistent option across devices; CMYK remains useful for older workflows. When spot colors must be converted to process at output, use the Ink Manager.

### Configure spot color display using Lab values

On Windows, choose Edit > Preferences > Appearance of Black. On macOS, choose InDesign > Preferences > Appearance of Black.

From the Printing / Exporting drop-down menu, choose Display All Blacks Accurately.

For predefined spot colors from PANTONE, TOYO, DIC, and HKS libraries, enable Lab-based display by opening Ink Manager from Window > Output > Separations Preview, then choosing Ink Manager from the panel menu.

In the Ink Manager dialog box, enable Use Standard Lab Values For Spots. These Lab values are device independent, so with properly configured color management profiles they produce more consistent results across monitors, printers, and commercial presses.

Select OK so the settings take effect, then close Ink Manager.

Note

Lab values are used automatically when Overprint Preview mode is active through View > Overprint Preview, or when Simulate Overprint is selected in the Print dialog box.

### For workflows requiring CMYK-based display and output

Choose Window > Output > Separations Preview.

Open the panel menu icon, then choose Ink Manager.

Clear Use Standard Lab Values For Spots. InDesign will use the CMYK equivalents stored in the spot color libraries instead.

Select OK to apply the setting.

### Preview spot color output

Choose Window > Output > Separations Preview to inspect separate spot-color plates.

Open the panel menu icon, then choose Ink Manager.

Enable Use Standard Lab Values For Spots, then select OK.

Choose View > Overprint Preview. With Overprint Preview on, colors are shown through Lab values, giving a closer soft proof of final spot-color reproduction.

In the Separations Preview panel, use the eye icon beside individual spot colors to show or hide them in the preview. Use Separations Preview to confirm correct spot-color separation and to find unwanted spot colors that may have arrived through placed graphics.

## Specify halftone frequency and resolution

Set halftone screen frequency (lpi) and printer resolution (dpi) in InDesign to control dot spacing and image detail for commercial print output.

For production output such as film separations or press-ready files, InDesign provides halftone screen settings in the Print dialog box. Halftone screens create the impression of continuous tone by arranging printed dots into lines, measured in lines per inch (lpi). Higher values, such as about 150 lpi, support fine magazine detail, while lower values, such as 60–85 lpi, are better suited to newspapers. Confirm the recommended screen values with the print provider because some output devices ignore custom settings.

### Select preset screen frequencies

Open the document and choose File > Print.

In the Print dialog box, choose the Output tab.

From Screening, select a preset that combines screen frequency (lpi) and printer resolution (dpi). Based on the chosen PPD file, the Screening menu lists recommended line-screen and resolution pairings. These combinations are tuned for typical commercial printing needs.

Review the selected settings, then select Print.

### Customize screen frequency for individual inks

Open the document and choose File > Print.

In the Print dialog box, choose the Output tab.

From the ink list, choose the plate, or color separation, that needs custom settings. These custom halftone values take precedence over preset combinations.

In Frequency, enter the desired line-screen value in lines per inch.

In Angle, enter the screen-angle value in degrees.

Note

As different inks are selected in the list, the Frequency and Angle values update to show the current settings for each separation.

Repeat the process for any other plates as needed, then select Print.

Screen angle helps avoid visible row patterns by rotating each ink's line screen differently. Standard angles are: Cyan 105°, Magenta 75°, Yellow 90°, and Black 45°. The service provider may require other angles for the press.

Good output depends on matching screen frequency, resolution, and press capability. Compared with an 85 lpi screen (1270 dpi), a 150 lpi screen requires more resolution, typically 2400 dpi or greater. If the values are mismatched, image quality may get worse instead of improving.

## Use spot colors for printing

Use InDesign spot-color inks for commercial print projects that require controlled color application and management.

Spot colors are separate premixed inks, useful when exact color matches or special effects such as fluorescent or metallic finishes are required. Branding and packaging often use them, but every spot color adds another plate and increases cost. Before adding spot colors in InDesign, verify the color systems the printer supports, check the printer's swatch guide, and make sure the document setup can handle plates in addition to CMYK.

### Add a spot color swatch

Open Window > Color > Swatches so the Swatches panel is visible.

From the panel menu icon, choose New Color Swatch.

In Color Mode, pick the color-matching system accepted by the printer, for example PANTONE+ Solid Coated.

For Color Type, choose Spot.

Find the needed color by typing the number from the swatch book or by browsing through the list.

Choose OK to place the spot color in the Swatches panel.

In the Swatches panel, the added spot color is marked with a spot color icon, shown as a circle with a dot, beside its name. That mark means the color outputs as its own ink.

### Apply spot color to objects

With the Selection tool, choose the frame or object that should receive the color.

Pick the spot color swatch in the Swatches panel.

To color the stroke rather than the fill, activate the Stroke icon in either the Tools panel or the Swatches panel, and then pick the spot color.

Tip

For tint versions of the spot color, highlight that spot color in the Swatches panel and choose New Tint Swatch from the panel menu. The tint remains on the same printing plate as the original spot color.

### Verify spot color separations

Open Window > Output > Separations Preview.

In the Separations Preview panel, set the View dropdown menu to Separations.

Check that the spot color is listed as an independent item with a printer icon next to it. That icon shows that the color will make a dedicated printing plate.

Use the individual separations in the list to inspect the elements assigned to each plate.

Before final output, use the Ink Manager if the document has more spot colors than planned or if any spot colors must become process colors.

## Process colors (CMYK) overview

Learn the role of CMYK process colors in commercial printing and how to decide when they belong in Adobe InDesign work.

Most commercial full-color printing relies on process colors. Printed photographs, magazines, and brochures usually come from process color printing: cyan, magenta, yellow, and black (CMYK) inks are combined on paper so four printing plates can reproduce thousands of colors.

Knowing the mechanics of process colors helps with color mode choices, client discussions about achievable color accuracy, and correct file preparation for a commercial printer.

### What process colors are

A process color is printed from some mix of the four standard process (CMYK) inks. Spot colors rely on premixed inks and separate printing plates, but process colors are built from small halftone dots of the four inks placed in controlled patterns. At ordinary reading distance, the dots merge visually and look like continuous color.

Because this method handles many colors efficiently, process colors fit projects with photographic imagery or broad color requirements, where assigning a separate spot color plate to every color would be impractical or too expensive.

### When to use process colors

Process colors are useful for:

- Photographic reproduction when images include gradients, nuanced color changes, or complex palettes.
- Designs with many colors, where separate spot inks would demand too many printing plates.
- Cost-sensitive jobs, because four-color process printing generally costs less than several spot colors.
- Projects that use imported images already saved in CMYK format.
- Digital print work where spot colors are not available.

Standard four-color process printing, also called "4-color" or "full-color" printing, supplies enough color range for most commercial uses, including brochures, magazines, posters, and packaging.

### How InDesign defines process colors

In InDesign, a process color may be a named swatch in the Swatches panel or an unnamed color made directly in the Color panel. After a swatch is applied to objects, InDesign handles it as a global process color, so edits to that swatch update every object using it. Colors without names that are edited in the Color panel do not propagate automatically through the document.

The difference changes workflow efficiency, not separation or print behavior. Named and unnamed process colors both output to the same four CMYK plates at print time.

### Color mode and final values

InDesign lets you define process colors with RGB, HSB, LAB, or CMYK color modes, but CMYK is always used for the final output values. When color separations are printed, InDesign translates any non-CMYK process colors into CMYK values according to the active color management settings and document profile.

That conversion is important because:

- RGB-specified colors can change appearance after conversion into the smaller CMYK color gamut
- Monitors show color in RGB, so on-screen color may not match printed output
- A calibrated color management system improves prediction of these changes, but it cannot remove them completely

For reliable high-quality print production, define process colors with CMYK values from printed process color reference charts, or coordinate with the commercial printer to set color expectations.

### Process colors in color separations

At output, InDesign divides process colors across four printing plates: one plate for cyan, one for magenta, one for yellow, and one for black. The commercial printer uses those plates in precise registration to put the four process inks on paper. Assigned CMYK component percentages, from 0-100%, determine the amount of each ink printed at a location.

One possible rich purple mix is C=70, M=100, Y=0, K=0. In that mix, 70% density goes to the cyan plate, 100% to magenta, 0% to yellow, and 0% to black. The printer's halftone screens convert those percentages into dot patterns with suitable sizes.

### Spot colors versus process colors

InDesign can mark colors as either spot or process types, matching two different commercial printing methods:

- Spot colors use premixed inks and need separate printing plates, which suits jobs with a small number of colors that require strict color accuracy
- Process colors use CMYK ink combinations on four plates, which suits photographic images and designs with many colors

The Swatches panel shows the color type through the icons beside color names. A single document can include both spot and process colors, for example a spot varnish placed over process-printed photos, but knowing the distinction helps you choose the right color mode for each element. Spot colors are usually set to overprint instead of knocking out underlying colors, especially when they represent a varnish or foil.

### Considerations for process color specification

Use these guidelines when working with process colors:

- Avoid choosing process colors solely from screen appearance unless a properly calibrated color management system is in place and its preview limits are understood
- Avoid process colors for documents meant only for online viewing, because CMYK has a smaller color gamut than typical monitors display; RGB is better suited to screen-only content
- Before finalizing process color values, coordinate with the commercial printer, especially for brand colors or other critical matches
- For important design choices, select colors from printed process color guides instead of relying on screen previews

These basics help you build print-ready documents that satisfy both creative intent and production requirements.

## Emulsion and image exposure settings

Find where Adobe InDesign provides film emulsion direction controls and image exposure options for commercial printing output.

Before separation settings are finalized for commercial printing film output, confirm the required emulsion direction and image exposure with the print service provider.

### What is emulsion

Emulsion is the light-sensitive coating on film or paper that records the printed image. In the United States, print service providers commonly ask for negative film; in Europe and Japan, positive film is more typical, although press type and workflow can change the requirement.

### Identifying emulsion side

To identify the emulsion side, inspect the film under good light: the dull side is emulsion, and the shiny side is the base. The related settings are named Emulsion Up (EU) and Emulsion Down (ED).

### Flip settings

When Color is set to Composite Gray or a separation option, the Output section of the Print dialog box contains the flip options.

Flip choices in the Output section control whether type appears as Right Reading (RR), meaning it reads correctly, or as Wrong Reading (WR), meaning it looks mirrored or backward when the emulsion side is viewed.

### Image exposure settings

Image exposure controls whether output creates negative or positive film.

When Color is set to Composite Gray or a separation option, image exposure controls are available in the Output section of the Print dialog box. Select or clear Negative according to the service provider's requirements.

Tip

Settings for emulsion and image exposure in the Print dialog box take precedence over conflicting printer driver settings. To get the intended output, set these options in the Print dialog box.
