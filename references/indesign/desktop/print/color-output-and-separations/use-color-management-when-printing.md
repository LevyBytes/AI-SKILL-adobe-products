# Use color management when printing

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
