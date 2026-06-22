# Booklets Posters Banners, Color Print Quality

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Booklet printing with Adobe Acrobat; Print booklets; Print large-sized documents; Color management in Acrobat Pro; Print color composites in Acrobat Pro; Print color separations in Acrobat Pro; Specify trapping details in Acrobat Pro; Preview overprint in Acrobat Pro.

## Booklet printing with Adobe Acrobat

### Learn about the booklet printing feature in Adobe Acrobat to create folded, multi-page booklets from PDF files.

Making a booklet is easy in Adobe Acrobat: it sequences the pages for you, sizes them to fit, and lays two per sheet on its own. Print that double-sided, fold it, add a staple, and you end up with a booklet that looks professionally made.

### Key benefits of using Acrobat for booklet printing

- Sequences pages on its own into the proper booklet order.
- Handles several binding styles, among them left, right, left tall, and right tall.
- Functions with duplex printers as well as non-duplex or manual ones.
- Offers a print preview so you can confirm the layout.
- Lets you tailor the sheet sizes.
- Sizes pages on its own to match the printable region.

Be it manuals, brochures, or lengthy multi-page documents, Acrobat's booklet printing tools handle the arranging, scaling, and page setup so everything is ready to fold.

Learn how to print booklets in Acrobat.

## Print booklets

### Learn how to print a multi-page document as a booklet using Adobe Acrobat.

Acrobat's booklet printing feature orders the pages so that printing them double-sided, folding, and stapling yields a booklet whose pages fall in the right sequence.

You'll get the cleanest results from a printer capable of double-sided or duplex output. Lacking one, you'll run the pages through in two passes and flip them yourself. Learn more about printing duplex and multi-page documents.

With the document open, choose Print this file from the global bar.

Inside the Print dialog box, pick a printer from the Printer dropdown menu.

Within the Pages to Print section, settle on one of these options:

- All: Sends every page of the document to the printer.
- Current: Outputs just the page on view at the moment in the viewer.
- Pages: Type a page range so only the pages you pick get printed.

Below Page Sizing & Handling, choose Booklet.

Choosing Booklet under Page Sizing & Handling lays the pages out automatically in the right sequence for folding and binding.

Choosing Booklet under Page Sizing & Handling lays the pages out automatically in the right sequence for folding and binding.

Set up the booklet options:

- Booklet subset: For duplex printers, go with Both sides. When printing duplex by hand, pick Front side only or Back side only.
- Sheets from: Name the opening and closing sheet to print.
- Binding: Use the dropdown menu to set which edge the booklet binds along.
- Auto-rotate pages within each sheet: Switch this on so each page turns by itself to sit in the tightest fit.

Choose Print to produce the booklet.

Note

For manual printing, lean on your printer's own guidance when reinserting the pages to run the second side.

After it prints, fold the sheets down the middle and staple along that center crease to finish the booklet.

## Print large-sized documents

### Learn how to print large-sized documents, such as posters and banners, using the tiling feature in Adobe Acrobat.

Large documents print effortlessly in Adobe Acrobat because it breaks one page across several sheets. Tune the scale, choose how much the tiles overlap, and Acrobat works out how many pages it takes. After printing, line the sheets up and join them into the complete poster or banner.

With the document open, choose Print this file from the global bar.

Inside the Print dialog box, pick Poster within the Page Sizing & Handling section.

Configure these options however you need:

- Tile Scale: Dials the page scaling percentage up or down.
- Overlap: States how far each tile extends over its neighbors.
- Cut marks: Drops trimming guides on every page for clipping the overlap.
- Labels: Stamps the filename and page number onto each tile.
- Tile only large pages: Limits tiling to pages that exceed the paper size.

Note

Because the print preview refreshes instantly, you can check the layout before committing to print.

Choosing Poster under Page Sizing & Handling spreads one page over several sheets for large-format or tiled output.

Choosing Poster under Page Sizing & Handling spreads one page over several sheets for large-format or tiled output.

Select Print.

## Color management in Acrobat Pro

Get familiar with how composite printing and color management operate inside Acrobat Pro.

Whenever a color PDF goes to print, Acrobat Pro hands the color data off to whichever printer you picked. Reliable proofs and dependable press results come from grasping the interplay between color management, composite printing, and color separation.

### Core printing concepts

### Color management

What color management governs is the way colors get translated at print time so the result stays consistent. RGB and CMYK appearance is held steady from one device to the next. Within Advanced Print Setup you may proof the result against a printer profile, or hand off the color as RGB through a choice of profiles.

Note

Picking a different printer profile lets you see ahead of time how a given printer will render the colors before any sheet is committed.

### Composite printing

With composite printing, every color in the PDF lands together on one plate. Most desktop printers default to this approach, and which controls show up in the Output panel of the Advanced Print Setup dialog box is determined by the printer you chose.

### Color separation

Splitting artwork into one plate per color for professional output is what color separation does. Anything carrying more than a single color has to go onto separate master plates, one plate per color. A color or grayscale composite proof can be printed as you build those separations.

### Key considerations when printing composites

How a composite behaves on press is shaped by what the output device can do and the print options you pick.

- Overprinting isn't supported on most desktop printers. To approximate it, open the Advanced Print Setup dialog box, go to its Output panel, and turn on Simulate Overprinting. Because that option turns spot colors into process colors, keep it away from your final output files.
- On a monochrome printer, black-and-white output yields a grayscale composite built from visually faithful gray equivalents rather than matching color percentages. Turning on Print Color As Black in the main Print dialog box drives every nonwhite color to print as solid black.

Output quality differs across color printers, which is why a proof from your service provider remains the surest check on how the final print will look.

## Print color composites in Acrobat Pro

Find out how to lay down every color in one pass, whether for proofing or routine desktop output.

Reach for composite printing when you want all of a PDF's colors placed together on a single plate. The technique shows up most often in desktop printing and when you need color or grayscale proofs before a job heads to press.

In Acrobat Pro, open the PDF you want to print.

Choose File > Print, which brings up the Print dialog box.

Set your page range and page handling options to taste.

From the Comments & Forms dropdown menu, pick Document and stamps so every visible element is carried through.

In the upper-left, select Advanced. The Advanced Print Setup dialog box opens.

From the left panel select Output, then pick a composite entry in the Color dropdown menu.

To govern how transparent objects render in the document, pick a preset from the Transparency Flattening dropdown menu.

Select OK to commit the advanced settings, then select Print back in the Print dialog box to run the composite.

## Print color separations in Acrobat Pro

Walk through splitting colors onto their own plates for dependable commercial printing.

Color separations are the route for commercial printing whenever the artwork holds more than one color. To reproduce color, printers split the artwork into cyan, magenta, yellow, and black plates that recombine on press to recreate the original.

Before you begin

Calibrate your monitor, declare any trapping information you have, preview both the separations and the transparency flattening, and preflight against whatever criteria you require.

### About color separations in Acrobat Pro

Two flavors of color separation are available in Acrobat Pro:

- Host‑based separations, in which Acrobat builds the PostScript data for every plate and ships it to the output device
- In‑RIP separations, in which the separation is handled by the output device's RIP

Processing In‑RIP separations is usually quicker, yet it depends on a PostScript 3 output device plus a PPD file that handles in‑RIP separations.

Note

When a print service provider is involved, stay in close contact with its specialists both before you start and as the job proceeds.

### Configure separation settings and print

With your PDF open in Acrobat Pro, select File > Print and pick a printer.

Pick an entry from the Comments and Forms dropdown menu, then dial in the print range and page handling options.

Select Advanced to bring up the Advanced Print Setup dialog box.

Tip

Under Settings, load a custom printer settings file that already carries separation settings.

From the left pane select Output, then pick an entry from the Color menu.

- Separations: Use this when the PPD has no support for in‑RIP separations.
- In‑RIP Separations: Use this when the PPD does support in‑RIP separations. Choosing it unlocks the trapping options.

If you went with In-RIP Separations, set the Trapping menu to Adobe In-RIP or Off, then select Trap Presets. Should you pick Adobe In-RIP, choose a preset and select OK.

Enter the halftone screen frequency and angle, and pick a Transparency Flattener Preset whenever the document holds transparency.

In Ink Manager, clear any colors you'd rather not separate. Hit the Ink Manager button to adjust ink settings for the color separations as needed.

Choose Marks and Bleeds > All Marks and tune the PostScript Options from the left panel. Select OK, then select Print to send the separations.

The four process colors—cyan, magenta, yellow, and black—head the plate list, with spot colors following in alphabetical order.

## Specify trapping details in Acrobat Pro

See how to manage the way neighboring colors meet on press so gaps don't appear and output stays clean.

Trapping tunes how bordering colors overlap during printing to head off gaps from misregistration. Within Acrobat Pro you can set trapping options while printing color separations, with the choices hinging on whether your printer handles In‑RIP trapping.

Before you begin

Confirm the document carries trapping information and that both your printer and its PPD handle In-RIP trapping.

### Set the trapped state for your PDF

With your PDF open in Acrobat Pro, select File > Print and pick a printer.

Select Advanced to bring up the Advanced Print Setup dialog box.

From the left panel select Output, then pick an entry from the Color menu.

Check the Trapping menu to see whether trapping information lives in the PDF:

- Yes: Trapping information is present in the file.
- No: The file carries no trapping.
- Unknown: The trapping state can't be pinned down.

For the right setting in your workflow, lean on your print service provider's advice.

From the Trapping menu, select Adobe In‑RIP or Off.

If Adobe In‑RIP was your pick, select Trap Presets.

Pick a trapping preset, then select OK to put it into effect.

Select OK to dismiss the Advanced Print Setup dialog box, then select Print.

## Preview overprint in Acrobat Pro

Learn how to check ahead of time how overlapping colors and links will land in the printed piece.

Overprint preview lets you set the on-screen look of the artwork against its printed result, giving you a way to vet color-separated documents before they go to final output.

### Enable overprint preview

Open the PDF in Acrobat Pro.

Select All tools > Use print production.

From the left pane, select Output preview.

Within the Output Preview dialog box, turn on the Simulate Overprinting checkbox.

To line up with your target output device, pick a simulation profile from the Simulation Profile dropdown menu.

Once you've finished your review, close the Output Preview dialog box.

Keep in mind that overprint preview only mimics the printed result on screen. What you see can shift with the printer, the RIP, and whatever output settings drive final production.
