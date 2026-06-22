# Page Set Up And Printer Marks

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Print; Change page position on media; Object printing options; Specify which layers to print; Specify paper size and orientation; Specify page range; Print documents with mixed page sizes; Set printer's marks; Print bleed and slug areas.

## Print

### Page setup and printer marks

Change page position on media

Object printing options

Specify which layers to print

Specify paper size and orientation

Specify page range

Print documents with mixed page sizes

Set printer's marks

Print bleed and slug areas

### Ink and color management

Manage inks for separation

Customize spot color appearance

Specify halftone frequency and resolution

Use spot colors for printing

Process colors (CMYK) overview

Emulsion and image exposure settings

### Color output and separations

About color separations

Prepare documents for color separation

Create color separations

Save and print color separations

Print gradients as separations

About ink trapping

Trap a document or a book

Trap preset options

Set the trap width for colors next to black

Print a composite

Use color management when printing

Color output options

Print objects on all color plates

About overprinting

Overprint strokes and fills

Overprint paragraph and footnote rules

Simulate spot ink overprinting

Change the black overprint setting

Preview color separations and ink coverage

### Preflight

Configure and use the preflight panel

Create and manage preflight profiles

View and resolve preflight errors

Turn on or off live preflight

Preflight book files

Package InDesign files for output

### Print booklets

Impose documents for booklet printing

Booklet types

Spacing, bleed, and margin options for booklet printing

Adjust creep settings in booklets

Preview booklet printing

### Print production and file creation

Set up a printer

Print documents and books

Print as bitmap

Create and manage print presets

Produce print-ready PDF files

Print or export book files

About PostScript and EPS files

Create PostScript files

Print oversized documents

Scale documents for printing

## Change page position on media

Adjust where document pages land on printed sheets in Adobe InDesign by using offset and gap controls.

During InDesign printing, Offset and Gap define page placement on the media: Offset moves the page horizontally, and Gap sets the blank interval between consecutive pages on a roll.

These controls primarily apply to PostScript devices with custom paper-size support. With standard paper sizes, automatic centering is used.

Choose File > Print to display the Print dialog box.

From the Printer menu, choose PostScript® File.

In Setup, choose Custom in the Paper Size menu.

Non-PostScript printer custom sizes are not exposed in the InDesign Print dialog box. Define them through Setup (Windows), Printer, or Page Setup (macOS) to access the printer-driver settings.

If Custom is missing, the selected PPD cannot use custom paper sizes.

Next, set Width and Height with one of these choices:

- Choose Auto to have InDesign calculate the smallest paper size required for the document.
- Enter new values in the Width and Height fields when you need a larger paper size.

Output-device limits and the selected PPD file define the largest paper dimensions and imageable area.

In Offset, type a measurement value to move the page away from the left edge of the imageable area.

In Gap, enter the spacing to use between pages on continuous media.

Select Transverse to rotate both media and page content by 90 degrees.

Check the lower-left preview to confirm there is room for printer marks, bleed, and slug areas.

Use the lower-left preview again to make sure printer marks, bleed, and slug areas still fit.

Select Save.

## Object printing options

Review Adobe InDesign settings for printing blank pages, nonprinting objects, guides, and layers.

In the General area of the Print dialog box, these options decide which document elements are included in print output and help diagnose unexpected output.

### Print dialog box object settings

Note

When printing separations, Print Blank Pages and Print Visible Guides and Baseline Grids cannot be used. For composite output through Print Booklet, include blank spreads needed to complete signatures with Print Blank Printer Spreads.

### Print Layers options

Use the Print Layers menu to filter output in three ways:

- All Layers: Outputs every document layer, including hidden layers and layers set to non-printing in Layer Options.
- Visible Layers: Outputs only layers currently visible, even if Layer Options marks them as non-printing.
- Visible & Printable Layers: Outputs only layers that are visible and also marked printable in Layer Options.

### Review or chage layer visibility

Before printing, inspect or adjust layer visibility and print behavior in the Layers panel (Window > Layers): open the panel menu icon and choose Layer Options. To make a selected object nonprinting, choose Window > Output > Attributes, then select Nonprinting.

## Specify which layers to print

Use the Print Layers menu in Adobe InDesign when you need to decide which layers appear in printed output.

The InDesign Print Layers menu determines the layers sent to print. This lets one document produce variants, such as annotated copies, annotation-free copies, or alternate-language versions. The selected layer print settings apply to the active print job and to PDF exports.

Before you begin

Confirm that every layer has suitable print settings. In the Layers panel, double-click a layer name and inspect Print Layer and Show Layer in the Layer Options dialog box.

Choose File > Print.

In General within the Print dialog box, find the Print Layers menu.

Choose one of the following options:

- Visible & Printable Layers: Outputs layers only when they are visible and set to print.
- Visible Layers: Outputs every visible layer, ignoring individual layer print settings.
- All Layers: Outputs every document layer.

Check that the page preview in the Print dialog matches the layer choice.

Set any other print options, then select Print.

## Specify paper size and orientation

Set paper dimensions and page rotation in Adobe InDesign so printed output matches your requirements.

Choose paper size and orientation so the printed InDesign document matches the physical media. Paper size is the sheet used by the printer, and it may be larger than the page so there is room for printer's marks, bleed, or slug areas.

Because most printers cannot image all the way to the page edge, the printable area can be smaller than the paper itself.

Choose File > Print.

Go to Setup and choose an option from the Paper Size menu.

Choose an Orientation option to define page rotation.

Set page orientation to Portrait, Landscape, Reverse Portrait, or Reverse Landscape.

Use Portrait, Landscape, Reverse Portrait, or Reverse Landscape as the page orientation.

Check the lower-left preview to make sure the document fits on the selected paper.

Select Save.

## Specify page range

Use range syntax to print selected pages, sections, or spreads from an Adobe InDesign document.

Rather than printing the full document, target specific pages or ranges. InDesign accepts flexible syntax for single pages, ranges, and combinations of pages.

### Specify pages to print

Choose File > Print to display the Print dialog box.

In General, find the Range field.

Type the range with the syntax in the table below.

Use the Sequence menu to decide which pages output:

- All Pages: Outputs every page included in the range you entered.
- Even Pages Only: Outputs only even-numbered pages from that range.
- Odd Pages Only: Outputs only odd-numbered pages from that range.

Tip

To output spreads as single units, enable Spreads. If a spread is larger than the selected paper size, InDesign prints only the portion that fits unless Scale To Fit is selected in Setup.

Select Print.

## Print documents with mixed page sizes

Use Adobe InDesign page-size controls when printing documents that contain more than one page dimension.

InDesign permits multiple page sizes inside one document. At print time, the printer paper size covers the whole print job, so the selected pages or spreads need matching dimensions. Use print controls to isolate the pages with the required size.

Choose File > Print.

In General, select or clear Spreads to choose whether pages or spreads are printed.

Note

When a spread contains pages with different dimensions, the spread size is based on the largest width and height in that spread.

To output only pages of the same size, use the Pages controls to choose the needed range, then select the pages icon. The Range field shows every page or spread of that size.

Select Print.

## Set printer's marks

Configure crop marks, bleed marks, and registration marks for Adobe InDesign print production.

Printer's marks give production staff trim, registration, and page-information cues. They print outside the page edge in the bleed and slug areas and are meant for commercial print workflows. Do not use them for digital or office printing. Set bleed and slug space first, and confirm the marks your print provider requires.

Choose File > Print to display the Print dialog box.

In the left-side list, choose Marks and Bleed.

In Marks, select the checkbox for every required mark type: Crop Marks, Bleed Marks, Registration Marks, Color Bars, or Page Information.

From the Type drop-down menu, choose the mark style that matches the output device. Default works for most commercial printers.

From the Weight drop-down menu, choose the line thickness for marks.

In Offset, set the distance between the marks and the page edge.

In Bleed and Slug, select Use Document Bleed Settings to include the bleed area defined in the document setup.

Select Print to output the document with those marks configured.

## Print bleed and slug areas

Use this InDesign reference to locate bleed and slug settings for output that includes trim marks, color bars, and page information.

Apply it while preparing files for commercial printers, or when a job requires confirmation of exact bleed and slug dimensions.

Bleed and slug regions sit outside the final trimmed page, but each supports a different production need. Bleed gives edge-touching artwork extra room past the trim so cutting shifts do not leave white borders. Slug space carries job notes, page metadata, and color bars, then is cut away when the page reaches final trim.

### Bleed area specifications

Bleed gives artwork placed on a page edge room to continue past the trim boundary, which helps absorb small print or cutting alignment shifts.

A common commercial standard is 0.125 inches (3 mm), though the print provider's specifications should be checked for the actual required bleed.

### Slug area specifications

Slug space sits farther out than the bleed and can carry items such as production directions, color calibration bars, and registration details. Anything placed there can print, but final trimming removes it. InDesign shows the slug when View > Screen Mode uses Normal, Slug, or Preview.

By default, slug output is disabled. Enable it from the Marks and Bleeds tab in File > Export > Adobe PDF (Print), or from the File > Print dialog.

### Print marks reference

Printer's marks support cutting, registration, color checking, and production tracking. When marks are enabled, the page bounds expand so there is space for them.

### Offset specifications

Offset sets how far printer's marks sit from the page edge.

Keep marks out of the bleed by making the offset larger than the bleed setting. For a 0.125-inch bleed, for example, set offset to at least 9 points (0.125 inches).

### Bleed and slug modes for verification

Before output, check the bleed and slug with the specialized views under View > Screen Mode.

Screen modes

Display

Normal

Shows the standard editing workspace.

Preview

Uses a gray background instead of the pasteboard and shows the final page trim.

Bleed

Uses a gray background instead of the pasteboard and makes the bleed area visible.

Slug

Uses a gray background instead of the pasteboard and makes the slug area visible.

| --- | --- |

### Output limitations

Only material inside the defined bleed or slug extent, whichever reaches farther, is included in print output.

When exporting PDF, page dimensions with bleed and slug included cannot exceed 200 × 200 inches (508 × 508 cm). Anything beyond that size is cropped rather than reduced. If a large-format layout goes past the limit, reduce the document scale before export or output it as tiles.

Note

Values set for bleed and slug in File > Document Setup become the default document values. The Print dialog box can override them for output without changing the document setup itself.
