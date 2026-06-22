# Impose Documents For Booklet Printing, Booklet Types, Booklet Printing Settings, Adjust Creep Settings In Booklets ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Impose documents for booklet printing; Booklet types; Spacing, bleed, and margin options for booklet printing; Adjust creep settings in booklets; Preview booklet printing.

## Impose documents for booklet printing

Use Print Booklet to build printer spreads with the page order needed for folded publications.

Booklet imposition defines printer spreads and controls how pages print, fold, and bind. InDesign performs the imposition in the print stream, leaving the document pages in standard reading order. Before imposing pages, confirm that the document uses a single page size and add any required blank pages with objects so the layout does not reflow.

### Configure and print the imposed document

Select File > Print Booklet.

In Print Preset, choose a preset with the settings you want, or choose Current Document Settings to reuse the document's current print setup.

For only part of the document, choose Range in the Setup area. Enter consecutive page spans with hyphens, such as 3-7, or separate non-adjacent pages with commas, such as 3-7, 16. In documents that use sections, enter section page numbers such as Sec2:11.

Select Print Settings when you need to change printer's marks, color output, bleed settings, or other print options. Adjust the settings and select OK.

Use the Print Booklet dialog box for additional setup, including spacing between pages, margins, bleed, and creep adjustments. Print Booklet cannot generate a new InDesign document that contains the imposed pages; output is limited to direct printing or saving as PDF.

Select Print when you are ready to send the imposed job to the printer.

### Print double-sided pages without duplex capability

Use manual duplex printing, with odd and even pages printed in separate passes, when the printer lacks automatic duplex support.

Start with File > Print Booklet.

Open the Print Booklet dialog box and choose the Print Settings button.

On the General tab, set Sequences to Odd Pages Only, then select OK.

Choose Print to produce the first pass.

When the first pass is finished, turn the printed pages over and load them back into the printer tray using the correct orientation.

Return to File > Print Booklet > Print Settings, choose Even Pages Only, and select OK.

Select Print to finish the duplex job.

Tip

Start with a test document so you can find the correct page orientation and loading direction for your printer model.

### Handle blank pages correctly

Blank pages that you add for printer-spread alignment may be moved to the end of the document if they are truly empty, because InDesign may not recognize them as pages to impose.

Select the blank pages you want included in the imposition.

Place a text frame, placeholder frame, or another object on each blank page.

Alternatively, in the Print Booklet dialog box, select the Print Settings button (File > Print Booklet).

Select Print Blank Pages and select OK so all blank pages are included even when they have no content.

## Booklet types

Compare booklet imposition styles in Adobe InDesign so pages fold and print correctly for professional output.

The booklet type you choose controls how InDesign assembles document pages into printer spreads. Print Booklet includes three imposition styles for different printing, binding, and folding scenarios. Knowing the distinctions helps you select a format for projects ranging from small brochures through saddle-stitched newsletters and perfect-bound catalogs.

### 2-up Saddle Stitch

2‑up Saddle Stitch creates printer spreads for publications that are printed, folded, and stapled along the spine. This choice fits short documents because folded output reads in the proper page order. InDesign does the imposition at print time, leaving the document layout unchanged.

The document page count must be divisible by four; if it is not, InDesign inserts blank pages to fill out the final signature. Because the style is based on one four‑page signature, page spacing, bleed between pages, and signature size cannot be adjusted. For longer documents, creep offsets page thickness, and InDesign uses the document's binding direction so output follows the correct left‑to‑right or right‑to‑left order.

### 2-up Perfect Bound

2‑up Perfect Bound makes two‑page printer spreads that are collected into multiple signatures at a chosen size. It suits documents that are printed, trimmed, and glued into a cover, such as paperback books, catalogs, and larger magazines. Perfect Bound projects usually have higher page counts than saddle-stitched booklets.

Set Signature Size in the Print Booklet dialog box to control how pages are grouped. If the total page count does not divide evenly, InDesign adds blank pages to finish the final signature. This arrangement supports professional production where signatures may use different paper stocks, for example a separately printed cover and interior. Space Between Pages helps compensate for binding trim, creep, and grind-off over several signatures.

### Consecutive

Use Consecutive booklet styles for straightforward sequential panel layouts instead of bound signatures. They support 2-up, 3-up, and 4-up arrangements and suit brochures or foldout pieces where pages print next to each other in order.

For standard trifold brochures, 3‑up Consecutive works well. Rather than building columns on one oversized page, create each panel as its own page. InDesign then outputs two printer spreads: panels 1–3 on one spread and panels 4–6 on the other, which simplifies design and alignment. Controls that apply to signatures, including bleed between pages and creep, are not available in this mode.

## Spacing, bleed, and margin options for booklet printing

Use these Adobe InDesign controls when booklet imposition needs spacing, bleed, creep, signature, and margin setup.

While preparing printer spreads, adjust these settings to manage physical gaps, bleed regions, and margins so the finished piece can fold, bind, and trim correctly.

Within the Print Booklet dialog box (File > Print Booklet), look under Setup for these controls. Which controls appear depends on the selected booklet type: 2-up Saddle Stitch, 2-up Perfect Bound, or Consecutive.

### Spacing and bleed options

### Notes for Space Between Pages

In a 2-up Perfect Bound document, a negative Creep value (creeping in) sets the minimum Space Between Pages value to the width of that Creep value.

When you build signatures yourself, such as for a document that mixes paper stocks, enter a Space Between Pages value to give spreads in separate signatures an initial creep amount.

## Adjust creep settings in booklets

In Adobe InDesign, paper thickness in saddle-stitch and perfect-bound booklets can be offset by moving pages progressively from the spine.

Creep adjustment keeps multi‑page booklets aligned after folding, when paper bulk makes inner pages extend beyond outer pages. Based on each sheet's position within the signature, InDesign moves page content toward the spine or away from it. Apply creep only to 2‑up Saddle Stitch and 2‑up Perfect Bound layouts; Consecutive styles do not offer it. To calculate creep, InDesign spreads the value you enter across all sheets and holds either the outermost sheet or the innermost sheet in place according to whether the value is positive or negative.

### Configure creep settings

Choose File > Print Booklet to display the Print Booklet dialog box.

From the Booklet Type drop-down menu, choose 2-up Saddle Stitch or 2-up Perfect Bound.

In the Creep field, type a point value for the total amount pages move relative to the spine. A negative value moves inner pages toward the spine (outward creep), while a positive value moves outer pages away from the spine (inward creep).

Use the preview thumbnails on the left side of the dialog to check the adjusted page positions.

Choose Print to output the booklet with creep, or choose Export to make a PDF.

Tip

Example: In a 16-page booklet (4 sheets), 24 points of negative creep produces an 8 points per sheet increment (24 ÷ 3). The innermost sheet shifts 12 points per page (24 ÷ 2); the third sheet shifts 8 points per page (16 ÷ 2); the second sheet shifts 4 points per page (8 ÷ 2); the outermost cover sheet stays in place.

### Understanding creep calculation

InDesign gets the creep increment by taking the creep value you entered and dividing it by one less than the total sheet count. One sheet contains two printer spreads—front and back.

- Positive creep: The centerfold (innermost spread) remains fixed, and outer sheets shift away from the spine. Use this direction when thick paper stocks make outer pages extend.
- Negative creep: The cover (outermost spread) remains fixed, and inner sheets shift toward the spine. Booklet printing commonly uses this "push-in" effect to compensate for paper bulk.

Across the sheets, the creep value is applied in steps. On each sheet, every page moves half of that sheet's total creep amount, with one half going toward each side of the spread.

### Adjust spacing alongside creep

For Perfect Bound booklets, keep Space Between Pages coordinated with the creep value so page gaps stay even through the signature.

The minimum Space Between Pages value is the absolute width of a negative creep value. For example, when creep is -12 points, use at least 12 points for Space Between Pages so pages do not overlap.

When manually assembling signatures for documents that use mixed paper stocks, Space Between Pages can define the starting creep offset for spreads in different signature groups.

## Preview booklet printing

In Adobe InDesign, use the Preview and Summary areas to inspect printer spreads and confirm settings before printing.

Before you send output to the printer, the Print Booklet dialog box can show both a visual check and a detailed readout of imposition settings. These areas help you spot problems and confirm that printer spreads, marks, and layout match the intended result.

Preview and summary checks let you validate booklet setup before spending paper or time. After imposition options are set in the Print Booklet dialog box and before choosing Print, review the Preview area for actual printer spreads with marks applied. The Summary area reports the current settings and identifies conflicts.

### Preview printer spreads visually

Choose File > Print Booklet.

Set any needed imposition options, including Booklet Type, Page Range, Margins, and Creep.

From the left side of the Print Booklet dialog box, choose Preview.

Inspect the color thumbnail for the current printer spread, along with any printer's marks selected in the Print dialog box. Red areas indicate content that does not fit within the selected paper size.

To browse printer spreads, use the scroll arrows below the preview, or drag the scroll box to jump directly to a specific spread.

Tip

When you use the Print Settings button to change options in the Print dialog box, the Preview area refreshes right away. Printer paper size and crop marks are among the settings reflected there.

### View a summary of booklet settings

Choose File > Print Booklet.

From the left side of the Print Booklet dialog box, choose Summary.

Inspect the current booklet settings list, including booklet type, page range, signature size, margins, and printer configuration.

At the bottom of the Summary area, look for warnings or conflicting settings that may affect output quality. The Summary area combines settings from the Print Booklet dialog box and the Print dialog box, so you can see how the document will be processed.
