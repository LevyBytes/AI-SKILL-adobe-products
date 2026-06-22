# Setting Printer

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

Final printing is normally handled in Adobe® InDesign®, but Adobe InCopy® can print story drafts from Galley, Story, or Layout view.

## Printing with InCopy

InCopy usually works with a linked InDesign parent document. Because the InDesign document is commonly the final source used for production printing, many production-quality print controls remain in InDesign. You can still use InCopy to print story drafts from Galley, Story, or Layout view. Depending on the selected view and print settings, the printed copy resembles what appears on-screen:

In Galley or Story view, InCopy outputs unformatted text in a continuous column or columns. Document layout and formatting features are not shown.

In Layout view, InCopy outputs the document as shown on-screen, with frames and all other page elements preserved.

InCopy supports Adobe PostScript® printers, non-PostScript printers, and other printing devices. When using a PostScript printer, verify that the printer driver includes the correct PostScript Printer Description (PPD) file and that it is installed properly.

Note

InCopy does not support the format used by PDF Writer. Printing to PDF Writer can cause delays or printing errors.

## About printer drivers

A printer driver gives applications on your computer direct access to printer features. With the correct driver installed, the application can use every feature supported by that printer.

Adobe recommends the latest printer drivers, listed in the table that follows. If an older driver causes problems, update to the newest driver for your operating system.

For details about recommended and supported PostScript printer drivers, including installation instructions, search the printer-driver section of the Adobe website.

Some printing features in InCopy appear both in the InCopy Print dialog box and in printer-driver dialog boxes. As a general rule, set overlapping options only in the InCopy Print dialog box; InCopy ignores duplicate settings entered in the printer-driver dialog box. The guidance in this section helps you handle those overlapping options.

Printer drivers can include capabilities that InCopy itself does not provide, such as duplex printing. Availability depends on the installed printer driver. Ask the printer manufacturer for details.

To set options for a particular printer, use the Setup button in the InCopy Print dialog box to reach the printer driver. In Windows, Setup opens the Properties dialog box for the selected printer. In Mac OS, Setup opens the standard Mac OS Print dialog box.

## Select a PPD file

A PPD file (PostScript Printer Description file) adapts driver behavior to a specific PostScript printer. It describes the output device, including resident printer fonts, supported media sizes and orientations, optimized screen frequencies, screen angles, resolution, and color output capabilities. Choosing the right PPD before printing is important. When the PPD for your PostScript printer or imagesetter is selected, the Print dialog box is populated with settings available for that output device. You can change to another PPD when your needs require it. During printing, applications use the PPD file information to decide which PostScript information to send to the printer.

For best printing results, Adobe recommends getting the latest PPD file for the output device from its manufacturer. Many commercial printers and print service providers maintain PPDs for their imagesetters. Store PPDs in the location specified by the operating system. Consult the documentation for your operating system for details.

On both Windows and Mac OS, selecting a PPD file follows the same general process as adding a printer. The exact steps differ by platform. See the operating system documentation for instructions.

### More like this

- Exporting to Adobe PDF
