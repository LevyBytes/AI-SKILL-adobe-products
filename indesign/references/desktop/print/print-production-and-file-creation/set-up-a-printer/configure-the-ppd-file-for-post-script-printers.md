# Configure the PPD file for PostScript printers

Open printer settings from the system control panel.

Find the PPD selection control, which is commonly located under Advanced or Device Settings.

Choose the PPD file that matches your printer.

Apply the changes, then close the dialog box.

Note

- In Windows 11 version 24H2, Microsoft added Windows Protected Print Mode (WPP) as an opt-in print-security feature. When enabled, it disables PostScript (PSCRIPT5.dll) and OEM PCL drivers, blocks every v3/v4 driver, and prefers Windows IPP Class printer drivers.
- To work with that change, InDesign added an IPP PDF Passthrough printing workflow for Windows 11 and supported printers. Current workflows are not changed. When using PDF Passthrough with IPP Class drivers, you can also choose Let Printer Determine Colors for better color management.
