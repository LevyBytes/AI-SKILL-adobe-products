# Trap A Document Or A Book, Trap Preset Options, Set The Trap Width For Colors Next To Black, Print A Composite ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Trap a document or a book; Trap preset options; Set the trap width for colors next to black; Print a composite; Use color management when printing; Color output options; Print objects on all color plates; About overprinting.

## Trap a document or a book

Use trap presets and trapping controls in Adobe InDesign to compensate for printing press misregistration.

Offset printing can leave visible gaps where different inks meet. Trapping avoids those gaps by adding small overlaps between adjoining colors.

Follow this workflow when a document includes touching spot or process colors that need trap adjustments. If the job is mostly black text, or if adjacent process colors share ink components, trapping may be unnecessary. Confirm the correct trap settings for the press conditions with the prepress service provider before output.

Before applying traps, check which trapping technology the output device supports: InDesign built-in trapping or Adobe In-RIP Trapping. Built-in trapping depends on a PostScript Printer Description (PPD) file that supports separations, and its trap widths are capped at 4 points. To use Adobe In-RIP Trapping, the output device must be PostScript Level 2 or later, the RIP must support Adobe In-RIP Trapping, and the PPD file must be suitable. Keep this checklist available before exporting the print file:

- InDesign document ready for print output
- Prepress service provider consultation completed for trap settings
- PPD file installed for the target output device
- Confirmation of whether on-host or in-RIP separations will be used

### Create a custom trap preset

The [Default] trap preset contains standard values that fit many commercial print jobs. Make a custom preset only when the prepress service provider gives different numbers.

Open Window > Output > Trap Presets to display the Trap Presets panel.

Use the panel menu icon, then choose New Preset.

Type a clear preset name in the Name field.

Under Trap Width, enter the prepress service provider's values for Default and Black.

Set Trap Appearance, Images, and Trap Thresholds according to the prepress service provider's recommendations.

Choose OK to save the trap preset.

### Assign trap presets to page ranges

Open Window > Output > Trap Presets.

Use the panel menu icon, then choose Assign Trap Preset.

In Assign Trap Presets, choose the Trap Preset to apply.

Under Pages, choose All or Range. Specific pages and page spans can be typed with hyphens and commas, for example 2-4, 6, 9-10, 12. Pages that do not need trapping, such as pages containing only black text, can have trapping disabled by choosing [No Trap Preset] from the Trap Preset menu and applying it to those page ranges. This can reduce processing time.

Choose Assign to apply the preset to those pages.

Choose Done to close the dialog box.

### Configure print settings and trap the document

Open File > Print to display the Print dialog box.

Choose the Output tab.

For Color, choose Separations when using on-host separations, or choose In-RIP Separations when using in-RIP separations.

For Trapping, choose Application Built-In to use the InDesign trapping engine. If the output device supports Adobe In-RIP trapping, choose Adobe In-RIP instead.

When the prepress service provider supplies specific ink settings, choose Ink Manager, set the options as instructed, and choose OK.

Set any other print options required for the job, then choose Print.

### Trap multiple documents in a book

For book output, trap presets must be assigned inside each separate document.

Open the InDesign book file.

Use the panel menu icon, then choose Synchronize Options.

Check that Trap Preset is selected so custom Trap Presets from the parent document are available in every document in the book.

Open each document contained in the book file.

Apply trap presets to the required page ranges.

Save every document after its trap presets are assigned.

Set up printing and trap the document, or export the book file with trapping included.

## Trap preset options

In Adobe InDesign, trap preset specifications cover trap widths, appearance controls, image behavior, and threshold values.

Use these specifications while creating or modifying trap presets so the print job traps accurately. Open the Trap Preset options through Window > Output > Trap Presets.

Talk with the commercial printer or prepress service provider before changing these numbers. Paper behavior, screen ruling, and press conditions influence which trap settings are appropriate.

### Trap Width

Trap width sets how much overlap each trap creates. These numbers affect color behavior directly at object edges.

Note

With Application Built-In trapping in InDesign, any trap width above 4 points is limited to 4 points at output. The value you typed remains visible, and it will be used if the job is switched to Adobe In-RIP Trapping.

### Trap Appearance

Use these controls to define trap geometry at joins and intersections.

### Join Style

Sets the outside join shape where two trap segments share an endpoint.

### End Style

Sets the point where three trap segments intersect.

### Image

Use these settings to control bitmap-image trapping in InDesign and the way bitmap images interact with vector objects.

### Trap Placement

Controls the trap position when vector objects, including InDesign-drawn objects, touch bitmap images.

Tip

For consistent-looking edges while trapping objects against photographs, use Center, Choke, or Spread. Neutral Density may produce visibly uneven edges because the trap can move from one side to the other.

### Trap Thresholds

These numbers define the conditions that cause trapping to occur. Ink color, paper stock, press behavior, and other variables all influence the correct thresholds.

Option

Description

Step

Sets how large a color change must be before a trap is generated.

- Default value: 10%.
- Recommended range: 8% to 20%.
- Effect: smaller percentages make subtler color differences trigger additional traps.
- Purpose: determines whether trapping starts on minor color shifts or only on strong color changes.

Black Color

Sets the minimum black-ink percentage that must be present before the Black trap width setting is used.

- Default value: 100%
- Recommended minimum: 70%
- Application: defines which colors count as "solid process black" or "rich black"

This helps when low-grade paper stock creates extreme dot gain.

Black Density

Sets the neutral density level at or above which InDesign treats an ink as black.

- Default value: 1.6.
- Application: defines when spot colors use the Black trap width setting.
- Example: type the neutral density value for a dark spot ink to make black trapping rules apply.

Sliding Trap

Controls the point at which a trap moves onto the centerline of a color boundary instead of staying mostly on one side.

- Default value: 70%.
- Calculation: neutral density of the lighter color / neutral density of the darker color.
- Effect at 70%: the trap starts crossing the centerline after the lighter color passes 70% of the darker color's neutral density.
- Range: 0% (every trap uses the centerline) to 100% (sliding traps are off; one color spreads entirely into another).
- Special case: colors with equal neutral density always straddle the centerline unless the value is 100%.

Trap Color Reduction

Adjusts the use of neighboring color components to lighten the trap color and avoid a trap darker than either adjacent color.

- Default setting: 100% (no reduction).
- Allowed range: 0% to 100%.
- At 100%: full color components are used, which can make dark traps between pastel colors.
- Effect below 100%: the trap color starts becoming lighter.
- Effect at 0%: the trap is created with neutral density equal to the darker color.
- Use case: avoids unattractive dark traps between pastel colors.

| --- | --- |

### Black Trapping Specifications

While trap presets are being created or edited, Black Color and Black Density together determine what InDesign treats as "black" for trapping.

### Solid Black vs. Rich Black

- Solid black: only 100% K (black) ink
- Rich black: process black (K), plus cyan, magenta, and/or yellow percentages to make the black more opaque

### Black Trap Width Application

InDesign uses the Black trap width value when both conditions are true:

1. The ink meets the Black Color percentage threshold, AND
2. Its neutral density is equal to or higher than the Black Density value

### Keepaway (Holdback) for Rich Blacks

If support screens, meaning CMY inks, continue all the way to black-area edges, misregistration can create visible halos or distorted edges. InDesign applies a keepaway (holdback) that offsets those support screens from:

- Knockout elements reversed out of black areas
- Light foreground elements placed over black

The keepaway distance comes from the Black trap width value.

Note

For thin elements, such as black keylines around graphics, InDesign ignores the Black trap width setting and caps the trap at one-half of the element width.

### Setting Sliding Traps

Sliding traps make trap lines less visible by positioning the trap according to the neutral density relationship between neighboring colors.

Effect of different values:

- 0%: every trap uses the centerline position
- 70% (default): the trap crosses the centerline after the lighter color exceeds 70% of the darker color's neutral density
- 100%: sliding traps are off; one color spreads completely into another no matter what the neutral density relationship is

## Set the trap width for colors next to black

Adjust how colors spread into solid black, or how support screens stay back from black edges, in Adobe InDesign.

For black elements in a design, careful trap-width control keeps edges clean and helps avoid unwanted halos around light or reversed-out elements.

Use this workflow when the document requires control over the way other colors interact with solid process black or rich black regions. The Black trap width setting defines either the distance that inks spread into solid black, or the holdback amount, which is how far support screens are choked back under black. If misregistration occurs during printing, this keeps support screens from showing along black edges.

Black trap width is commonly 1.5 to 2 times the default trap width. For example, with a default trap width of 0.25 points, the Black trap width could be 0.4 to 0.5 points. The larger amount accounts for black ink's visual weight and provides enough trapping at high-contrast edges.

Open Window > Output > Trap Presets.

In the Trap Presets panel, choose New Preset from the panel menu to make a preset, or double-click an existing preset to edit it.

Under Trap Width, enter a point value in the Black field for the distance other colors should spread into black, or for how far support screens should be choked back under black.

Under Trap Thresholds, enter values for Black Color and Black Density so InDesign can identify solid black or rich black.

Choose OK to save the trap preset.

Note

Black trapping features become active only when a color area uses an ink whose neutral density is greater than or equal to the Black Density value and whose percentage is greater than or equal to the Black Color value.

When trapping a thin element around graphics, such as a black keyline, the trapping engine overrides the Black trap width setting and restricts the trap to half of that thin element's width. This keeps the trap from overpowering delicate line work.

## Print a composite

Use composite printing in Adobe InDesign to preview every color on one sheet or to make review proofs.

Composite printing sends all document colors to one sheet, which makes it useful for desktop proofs and client review copies. Separations printing creates one plate for each ink, while a composite shows the design with all colors combined as the final output will appear.

Choose composite printing when a fast proof is needed on a desktop printer or when the design needs checking before files are sent out. Use separations printing instead for color-separated output, where each ink prints on its own plate. Composite printing needs a color printer, or it can produce grayscale output on black-and-white printers.

### Configure composite print settings

Open File > Print.

Choose a printer from the Printer dropdown menu.

In the General tab, enter page numbers in the Range field to specify pages, or choose All.

Open the Output tab, then choose Composite RGB from the Color dropdown menu for color printers, or Composite Gray for black-and-white output.

For composite printing, set the Trapping dropdown to Off.

Choose Save or Print.

Composite RGB is best suited to desktop inkjet and laser printers. Composite CMYK is available only when printing to PostScript devices, and it should be chosen only when the printer specifically needs CMYK data.

### Adjust graphics and marks settings

Open File > Print.

Open the Graphics tab, then choose Optimized Subsampling from the Send Data dropdown menu for faster proof output, or choose All for maximum image quality.

Open the Marks and Bleed tab. To include registration marks, color bars, and page information on the output, choose All Printer's Marks.

If the design extends past the page edge and those areas should print, define the bleed area.

Choose Save or Print.

## Use color management when printing

Apply color profiles and printer settings in Adobe InDesign to keep printed color output accurate.

During printing, color management helps document colors stay as consistent as possible across output devices. It can convert document colors to the printer color space, proof colors for a target output condition, or use PostScript color management on compatible devices.

Use these procedures for color-managed printing to desktop printers, proofing devices, or PostScript output devices. Print color management options can temporarily override the document profile for one job without modifying the document. When documents lack embedded color profiles, InDesign can convert colors using the printer settings.

Before printing with color management, confirm the following:

- Install the printer driver and PPD (PostScript Printer Description) file for the output device
- Create or choose color profiles for the printer or proofing device
- Use a document with embedded color profiles (recommended)
- Use a PostScript Level 2 or higher printer for the PostScript color management option

When printing to desktop printers or proofing devices, InDesign can handle color conversion by applying the selected printer profile to the document colors.

Open File > Print.

Choose a printer preset from the Print Preset menu if it already has the desired settings, or set the individual options for this print job.

Open Color Management and set these choices:

- In the Print section, choose Document.
- For Color Handling, choose Let InDesign Determine Colors.
- For Printer Profile, choose the ICC profile that matches the output device. Some printer companies provide ICC profiles, and a custom profile can also be created for a specific printer. The profile may describe the paper type, or the profile can be made by printing on the actual paper that will be used.
- Use Preserve RGB Numbers or Preserve CMYK Numbers when color values must go straight to the device. Preserved numbers bypass color-space conversion and are appropriate for controlled CMYK workflows, but not for RGB documents that need conversion.

At the bottom of the dialog box, choose Setup (Windows) or Printer (macOS) to open the printer driver.

Disable color management in the printer driver so colors are not converted twice, then return to the InDesign Print dialog box.

Choose Print to output the document.

## Color output options

Use the composite color output choices to understand how printed color is handled in Adobe InDesign documents.

Before a composite job is printed from InDesign, confirm that the selected color output mode fits both the printer and the production workflow so color reproduction stays predictable.

Composite output is not separated into individual plates; it is commonly used for document proofs and for finished pieces such as handouts. The Color choices determine the way InDesign converts color data and delivers it to the printer for composite printing. The best selection depends on the destination printer, the color model in use, and whether the job is a proof or final output.

Open File > Print, select Output, and use the Output area of the Print dialog box to choose the Color settings available for composite printing:

Note

If the proper mode or file format for a commercial print job is unclear, ask the prepress service provider before output. Choosing the wrong color mode can produce unexpected color changes or print failures.

## Print objects on all color plates

Use [Registration] color in Adobe InDesign when objects must image on every separation plate during color output.

Apply [Registration] color only to elements that need to appear the same way on each separation plate. Any object using [Registration] color is output on every process plate and every spot plate, which helps avoid alignment problems in commercial printing. Limit it to small production marks, for example trim marks or color bars, because broad areas can overload ink coverage or damage the paper.

### Apply [Registration] color to objects

With the Selection tool, select the objects that need [Registration] color.

Open the Swatches panel by choosing Window > Swatches.

In the Swatches panel, choose the [Registration] color swatch. The selected objects are then shown with [Registration] color applied. When separations are output from File > Print with the Output section set to Separations or In-RIP Separations, those objects image across the full plate set: process color plates (cyan, magenta, yellow, black) and every spot color plate in the document.

[Registration] color is made from 100% of every ink. Reserve it for small items such as crop marks or [Registration] targets. Large applications of [Registration] color can create excessive ink coverage, causing print defects and unnecessary ink use. Do not treat [Registration] color as a rich black color.

### Verify [Registration] color in the Separations Preview panel

Choose Window > Output > Separations Preview.

In the Separations Preview panel, choose Separations from the View dropdown menu.

Use the eye icon beside each separation plate to turn that plate on or off.

Check that objects using [Registration] color stay visible no matter which plates are enabled or hidden.

This preview verifies that [Registration] marks will image on all plates. When any single plate or any combination of plates is viewed, objects colored with [Registration] should remain present, while objects with ordinary colors appear only on their assigned plates.

Tip

Before handing files to a prepress service provider, run Window > Output > Preflight and confirm that [Registration] color appears only on suitable objects. Large [Registration] color areas usually mean the color was applied incorrectly.

## About overprinting

Use overprinting in Adobe InDesign to avoid gaps between touching colors, and apply manual overprint settings only when the print workflow calls for them.

Overprinting defines what happens to inks where printed objects overlap. InDesign normally knocks out the ink underneath an object, which can reveal white slivers if press registration moves. With overprinting, the lower ink remains and the upper ink prints over it, reducing gaps and allowing planned color mixing in commercial print work.

### How overprinting works

One way to picture overprinting is as transparent inks laid over colored sheets. If cyan overprints magenta, the overlap looks violet because both inks contribute to the result. The final appearance varies with the inks' opacity and neutral density values.

By default, InDesign automatically overprints fills and strokes that use 100% black. That behavior protects small black type placed on color from registration-related gaps. On Windows, review or change the setting in Edit > Preferences > Appearance of Black. On macOS, use InDesign > Preferences > Appearance of Black.

### When to use manual overprinting

Most color-overlap cases are handled automatically by built-in trapping and Adobe In-RIP Trapping. Manual overprinting is useful only in particular situations where automatic trapping is unsuitable or unavailable:

- Intentional color mixing effects: use this when a cyan fill should combine with a magenta background and produce violet.
- Gaps in spot color work: use this when artwork lacks shared ink colors and a manual trap is needed.
- Trap simulation: use this when stroke colors are calculated by hand to span two neighboring colors.

Talk with the prepress service provider before turning on manual overprinting. Automated trapping choices in the Print dialog box can change substantially. Overprinting is supported by most PostScript Level 2 and PostScript 3 devices, although output devices do not all render it the same way.

### Overprint behavior with process colors

For process colors that overprint without common ink components, InDesign combines their ink values. If a 100% magenta fill overprints a 100% cyan fill, the overlap becomes violet rather than magenta. The resulting color comes from the total ink densities.

When a stroke is used to trap two process colors, define the CMYK stroke with the higher corresponding ink value from each starting color. This method closes possible gaps while avoiding unwanted color changes.

### Black ink and rich black

Plain 100% process black can let some underlying color show through when it overprints, so it may not look fully opaque. For large black shapes or large black type where show-through must be avoided, use a four-color rich black, usually created by adding small cyan, magenta, and yellow amounts to black ink. Ask the service provider for percentages that fit the press and paper stock. Rich black and the Registration color are different concepts.

In the Swatches panel, the black swatch is 100% process black and it overprints automatically. The overprint preference does not apply to black tints, unnamed black colors made by other methods, or objects that only appear black because of transparency settings or applied styles.

### Previewing overprint effects

Before output, check overprint behavior in the Separations Preview panel. The panel previews how spot inks and process inks combine on press, so unintended color mixing can be found before printing.

Choose Window > Output > Separations Preview to open the panel. In the View menu, choose Separations, then turn individual inks on and off to inspect how overprinted objects interact. The preview applies to both spot colors and process colors and shows what the commercial printer will output.

### Overprinting strokes, fills, and gaps

InDesign separates fill and stroke overprint controls in the Attributes panel (Window > Output > Attributes). Depending on the design, a stroke can overprint while the fill knocks out, or the fill can overprint while the stroke knocks out.

For dashed, dotted, or patterned lines, Overprint Gap determines whether the spaces between segments overprint or knock out. This matters when decorative rules sit over colored backgrounds.

If a stroke is overprinted to make a manual trap, set the stroke alignment so the stroke sits outside the path instead of centered on it. That keeps the stroke from intruding into the object's filled interior.

### Paragraph rules and footnote separators

Overprinting is also available for paragraph rules and footnote rules. For paragraph rules, open Type > Paragraph Rules and select Overprint Stroke and Overprint Gap as needed. These choices can be stored in a paragraph style so the same behavior is applied consistently throughout a document.

For footnote separators, open Type > Document Footnote Options, go to the Layout tab, and select Overprint Stroke.

### Disabling automatic black overprinting

To stop the black swatch from automatically overprinting, open Edit > Preferences > Appearance of Black on Windows or InDesign > Preferences > Appearance of Black on macOS, then clear Overprint Black Swatch at 100%.

Only objects using the black swatch at 100% are affected when this preference is disabled. When some black objects should knock out and others should overprint, create a duplicate of the default black swatch and apply that duplicate to the knockout objects. Then manage overprint behavior for selected items from the Attributes panel.

Note

Overprint simulation can be used when printing to composite output devices. After a composite color choice is selected, choose Simulate Overprint in the Output tab of the Print dialog box. The simulation cannot be used with Composite Leave Unchanged.
