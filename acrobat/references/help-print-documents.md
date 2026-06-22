# Set Up And Print Pdfs, Use Secure And Special Print Mode, Print Duplex And Multi Page Document

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Print documents; Adobe PDF printer settings on Windows; Set Adobe PDF printer properties on Windows; Save documents as PDFs; Save documents as PostScript files; Print PDFs with mixed page sizes; Print large documents; Print multiple pages per sheet; Print bookmarked pages; Adjust page size for printing; Create and use custom page sizes; Print settings; Make PDFs print-ready with Acrobat Pro; Print comments; Print layers; Print PDFs with unembedded Asian fonts; Enable protected print mode on Windows; Create print presets.

## Print documents

### Set up and print PDFs

Adobe PDF printer settings on Windows

Set Adobe PDF printer properties on Windows

Save documents as PDFs

Save documents as PostScript files

Print PDFs with mixed page sizes

Print large documents

Print multiple pages per sheet

Print bookmarked pages

Adjust page size for printing

Create and use custom page sizes

Print settings

Make PDFs print-ready with Acrobat Pro

### Print booklets, posters, and banners

Booklet printing with Adobe Acrobat

Print booklets

Print large-sized documents

### Use secure and special print mode

Print comments

Print layers

Print PDFs with unembedded Asian fonts

Enable protected print mode on Windows

### Manage color and print quality

Color management in Acrobat Pro

Print color composites in Acrobat Pro

Print color separations in Acrobat Pro

Specify trapping details in Acrobat Pro

Preview overprint in Acrobat Pro

### Print duplex and multi-page document

Create print presets

Enable double-sided printing

Print on both sides of the paper

Manually print double-sided in face-down output printers

Manually print double-sided in face-up output printers

## Adobe PDF printer settings on Windows

### Find out how the Adobe PDF printer settings in Acrobat on Windows control the way PDFs get produced when you print from other applications.

### Overview

Whatever you set for the Adobe PDF printer carries over to every program by default; the only way to deviate is to override it inside a particular authoring app through its Page Setup, Document Setup, or Print menu.

Depending on the route you take to reach it, that preferences window shows up under one of three titles: Adobe PDF Printing Preferences, Adobe PDF Printing Defaults, or Adobe PDF Document Properties.

### Accessing Adobe PDF Printer settings

There are two primary routes to these settings:

- From Windows settings: Launch the Start menu, head into Printers & scanners, highlight Adobe PDF, and click Printing preferences.
- From an application: Head to File > Print, set the printer to Adobe PDF, and then open Printer Properties or Preferences.

Tip

A handful of programs make you pick the printer first by choosing Setup in the Print dialog. Once that's done, select Properties or Preferences.

### Understanding the Settings tabs

- Adobe PDF Settings tab: holds the conversion options unique to PDF output.
- Paper/Quality and Layout tabs: the usual printer controls, covering orientation, color, and how many pages land on each sheet.

Note

Anything labeled Printing Preferences is tied specifically to Adobe PDF, while Printer Properties covers the generic options that any printer exposes.

Set your conversion options through the choices on the Adobe PDF Settings, Layout, and Paper Quality tabs.

The Adobe PDF Settings, Layout, and Paper Quality tabs hold the controls for tuning specific conversion options.

### Adobe PDF conversion settings

- Default Settings: pick one of the ready-made conversion presets, or hit Edit to tweak your own through the Adobe PDF Settings dialog box.

  - Reconfirm Security for each job: makes you define security on every print run.
  - Use the last known security settings: carries forward whatever you chose on the previous job.

- Adobe PDF Output Folder: controls the save destination for the PDF. Point it at a default output folder, hit Browse to swap that out, or turn on Prompt for Adobe PDF filename so you name the file and pick its spot as it converts.
- Adobe PDF Page Size: lets you apply a custom page size you've already set up.
- Replace Existing PDF: governs what happens when a name collides — pick Always, Ask Everytime, or Never replace.
- View Adobe PDF results: pops the finished PDF open in Acrobat once conversion wraps.
- Add document information: bundles in details like the file name plus the creation date and time.
- Rely on system fonts only; do not use document fonts: speeds things up at the cost of possibly skipping custom fonts. A good pick for Asian-language documents.
- Deselect this option to embed all document fonts: every font travels with the PDF this way, though the file takes longer to build.
- Delete log files for successful jobs: clears out the logs on its own, holding onto them only when a job fails.

Dialing in these options lets you tailor how PDFs get built, keep the workflow efficient, and produce output that fits what each application calls for.

## Set Adobe PDF printer properties on Windows

### Learn how to configure Adobe PDF printer properties to customize your PDF output in Adobe Acrobat.

You usually won't have to touch the default printer properties on Windows; the exceptions are when printer sharing is turned on or you've set up security options.

Note the distinction between the two: Printer properties are general and span every printer, whereas Printing preferences belong only to the Adobe PDF printer and govern the way documents become PDFs.

### Set Adobe PDF printer properties

From the Windows Start menu, head to Settings > Bluetooth & devices > Printers & scanners.

Pick the Adobe PDF printer, then open Printer properties.

To get at the PDF Printer properties, choose Printer Properties under Adobe PDF printer settings.

Opening the PDF Printer properties is a matter of clicking Printer Properties beneath Adobe PDF printer settings.

Inside the Adobe PDF Properties dialog box, move through the tabs and set the options however you need.

Commit your changes by clicking Apply followed by OK.

### Reassign the port that the Adobe PDF printer uses

Should Adobe Acrobat Distiller be open, shut it down first and let every job already sitting in the Adobe PDF printer queue finish.

From the Windows Start menu, head to Settings > Bluetooth & devices > Printers & scanners.

Pick the Adobe PDF printer, then open Printer properties.

Open the Ports tab and click Add Port.

To point the Adobe PDF printer at a different port, go to the Ports tab and use Add Port.

Switching the port for the Adobe PDF printer begins on the Ports tab, where you click Add Port.

From the available port types, pick Adobe PDF Port Monitor, then click New Port.

Point it at a local folder for the PDF output files and confirm with OK. Wrap up by clicking Close to dismiss the Printer Ports dialog box.

Back in the Adobe PDF Properties dialog box, click Apply, then OK.

Tip

You'll get the cleanest results by pointing to a folder on the very machine that hosts the distiller. Network or remote folders do work, but they come with access restrictions and security drawbacks.

### Delete a folder and reassign the Adobe PDF printer to the default port

If Adobe Acrobat Distiller happens to be running, close it and wait for the jobs lined up in the Adobe PDF printer queue to wrap up.

From the Windows Start menu, head to Settings > Bluetooth & devices > Printers & scanners.

Pick the Adobe PDF printer, then open Printer properties.

Once the dialog box is up, switch to the Ports tab.

Highlight the default port called Documents and click Apply.

Pick the port you want gone, click Delete Port, then click OK to confirm you're removing it.

Clearing a port means selecting the default one, hitting Delete Port, and confirming through OK.

Deleting the port boils down to choosing the default port, picking Delete Port, and pressing OK.

Reselect the Documents port and click Close.

## Save documents as PDFs

### Learn how to quickly save documents and files as PDFs using Adobe Acrobat.

### Windows

Go to Menu > Print.

When the Print dialog box opens, set the Printer dropdown to Adobe PDF.

Click Print.

Give the file a name and point it at a save location.

Confirm with Save.

### macOS

Head to File > Save As.

When the Print dialog box appears, click Printer.

If a prompt pops up, answer Yes.

Down at the bottom of the dialog box, click PDF.

Give the file a name and point it at a save location.

Confirm with Save.

## Save documents as PostScript files

### Learn how to save PDF documents as PostScript files in Adobe Acrobat.

### Windows

Go to Menu > Export a PDF > PostScript.

Once the dialog box appears, type a file name and pick where the file should be saved.

Confirm with Save.

### macOS

Head to File > Save As.

When the dialog box appears, open the Format dropdown menu.

Pick PostScript.

Enter a name and choose where to save the file.

Confirm with Save.

## Print PDFs with mixed page sizes

### Learn how to print PDF documents containing different page sizes, such as a mix of letter and legal sizes, using Adobe Acrobat.

### Windows

Go to Menu > Print.

When the Print dialog box opens, under Page Sizing & Handling pick Size.

Tick the Choose paper source by PDF page size checkbox.

A custom paper size when needed checkbox shows up; tick it as well.

Click Print.

### macOS

Head to File > Print.

When the Print dialog box opens, under Page Sizing & Handling pick Size.

Tick the Choose paper source by PDF page size checkbox.

A custom paper size when needed checkbox shows up; tick it as well.

Click Print.

## Print large documents

### Learn how to print oversized PDF documents using Adobe Acrobat.

For big jobs such as posters and banners, Acrobat includes a tiling capability. It spreads one oversized layout over several ordinary sheets, so you can produce large prints without owning any special hardware.

Acrobat Pro tallies the required sheet count for you and hands over controls to fine-tune the output so assembly stays simple. Windows

Go to Menu > Print.

When the Print dialog box opens, under Page Sizing & Handling pick Poster.

Adjust these options to taste:

- Tile Scale: change the percentage to resize the document.
- Overlap: set how far each tile extends past its neighbors to make assembly simpler.
- Cut marks: drop in guide marks so the overlapping borders are easy to trim.
- Labels: stamp the file name and page number onto every tile.
- Tile only large pages: limit tiling to pages that exceed the chosen paper size.

Click Print.

macOS

Head to File > Print.

When the Print dialog box opens, under Page Sizing & Handling pick Poster.

Adjust these options to taste:

- Tile Scale: change the percentage to resize the document.
- Overlap: set how far each tile extends past its neighbors to make assembly simpler.
- Cut marks: drop in guide marks so the overlapping borders are easy to trim.
- Labels: stamp the file name and page number onto every tile.
- Tile only large pages: limit tiling to pages that exceed the chosen paper size.

Click Print.

## Print multiple pages per sheet

### Learn how to print multiple PDF pages on a single sheet of paper using Adobe Acrobat.

From the global bar, click Print this file.

Within the Print dialog box, head to the Page Sizing & Handling section and choose Multiple.

Use the Pages per sheet option to set how many pages print, or choose Custom to enter your own figure, anything up to 99.

Through the Page order dropdown menu, decide how the pages get laid out:

- Horizontal: Left to right, then top to bottom
- Horizontal Reversed: Right to left, then top to bottom
- Vertical: Top to bottom, then left to right
- Vertical Reversed: Top to bottom, then right to left

Click Print.

## Print bookmarked pages

### Learn how to print bookmarked pages in a PDF using Adobe Acrobat.

Straight from the Bookmarks panel in Acrobat, you can choose to print only the pages tied to particular bookmarks. Keep in mind this works solely for bookmarks aimed at real page content; ones that fire off actions, like launching a file or playing a sound, can't be printed.

### Windows

Select Menu > View > Show/Hide > Side Panels > Bookmarks.

From the Side panels, pick Bookmarks.

Within the right-hand panel, right-click whichever bookmark you'd like to send to the printer, then choose Print Page(s).

When the Print dialog box appears, tweak whatever settings you need.

Select Print.

### macOS

Select View > Show/Hide > Side Panels > Bookmarks.

From the Side panels, pick Bookmarks.

Within the right-hand panel, right-click whichever bookmark you'd like to send to the printer, then choose Print Page(s).

When the Print dialog box appears, tweak whatever settings you need.

Select Print.

## Adjust page size for printing

### Learn how to scale your PDF pages for printing in Adobe Acrobat.

With the document open, choose Print this file from the global bar.

Inside the Print dialog box, look under Page Sizing & Handling and select Size.

Pick whichever of these page-sizing choices suits your situation:

- Fit: Shrinks or grows every page so it lands within the printable region of the paper size you've chosen.
- Actual size: Sends pages out at full scale; anything that overruns the sheet gets clipped.
- Shrink oversized pages: Pulls in pages too big for the chosen paper, yet leaves smaller pages alone.
- Custom Scale: Scales the page to whatever percentage you type in.
- Choose paper source by PDF page size: Lets the PDF's own page dimensions pick the output tray instead of the page-setup setting.

Select Print.

## Create and use custom page sizes

### Build your own custom page sizes and apply them while printing PDFs from Adobe Acrobat.

### Create custom page sizes

With the document open, choose Print this file from the global bar.

Inside the Print dialog box, select Page Setup.

When the next dialog box opens, open the Page Size dropdown menu and choose Manage Custom Sizes.

Hit + and fill in the details below:

- Name for the custom size
- Width and height
- Margin sizes

Click OK to store the custom size.

### Use custom page sizes

With the document open, choose Print this file from the global bar.

Inside the Print dialog box, select Page Setup.

When the next dialog box opens, open the Page Size dropdown menu and, under Custom papers, choose your custom size.

Select OK.

Select Print.

### Create custom page sizes

Press command + P.

Inside the Print dialog box, select Page Setup.

When the next dialog box opens, open the Page Size dropdown menu and choose Manage Custom Sizes.

Hit + and fill in the details below:

- Name for the custom size
- Width and height
- Margin sizes

Click OK to store the custom size.

### Use custom page sizes

Press command + P.

Inside the Print dialog box, select Page Setup.

When the next dialog box opens, open the Page Size dropdown menu and, under Custom papers, choose your custom size.

Select OK.

Select Print.

## Print settings

Find out how to tune the print settings in Adobe Acrobat Pro so you govern the way your PDFs come off the printer.

A whole set of print controls ships with Adobe Acrobat Pro to govern how your PDFs are output. Through these choices you can dial in exactly which content prints, the page range that's included, and the way the layout lands on the page. Knowing what each one does keeps your printed PDFs faithful to what you planned.

### Comments and Forms

The Comments & Forms dropdown is where you pick which content pieces make it into the printout.

### Pages to Print

Use the Pages to Print options to specify the exact range of pages that go into the print job.

Note

When Use logical page numbers is turned on under Page Display preferences, type the real page label rather than the sequential number. So if your opening page reads iii, enter iii to print it.

### More Print options

For finer control over the way pages come out, turn to these advanced options.

### Orientation

With Auto Portrait/Landscape, the page orientation flips between portrait and landscape on its own to suit the content and the paper.

- Handy when a document mixes layouts. Think spreadsheets in landscape alongside newsletters in portrait.
- Whatever orientation you'd set by hand in Page Setup gets overridden by this option.

## Make PDFs print-ready with Acrobat Pro

See how to turn out top-grade PDFs in Acrobat Pro that satisfy the demands of professional printing.

Plenty of ordinary PDFs carry low-resolution imagery or the wrong color setup, which leaves prints looking rough. Acrobat can rebuild such files into high-resolution, print-ready PDFs that hold up to professional print standards, locking in correct resolution, color treatment, and embedded fonts.

### Convert an existing PDF to a print‑ready format

Open a PDF.

On Windows open Menu; on macOS, use File menu instead.

From there, follow Save as other > Press-ready PDF (PDF/X) > Settings.

Set your PDF/X conversion options within the Settings dialog box.

Set your PDF/X conversion options within the Settings dialog box.

Press OK to commit the settings, then pick where to save and what to name your PDF.

Tip

Reach for a PDF/X‑4 conversion profile and run whatever corrections it takes to satisfy print‑ready standards.

Click Save to generate the fresh PDF/X-4 file. It's now tuned and set for professional printing.

## Print comments

### Send a document to print together with its comments and annotations from Adobe Acrobat.

### Windows

Select Menu > Print.

Inside the Print dialog box, open the Comments & Forms dropdown menu.

Pick whichever of these fits your need:

- Document: Outputs the page contents and form fields while leaving comments off.
- Document and Markups: Outputs page contents, form fields, and comments together.
- Document and Stamps: Outputs the document, form fields, and stamps, yet skips every other markup.
- Form fields only: Outputs the interactive form fields but none of the document contents.

Should you want a comment summary printed alongside the document, click the Summarize Comments button and then confirm with Yes.

Select Print.

### macOS

Select File > Print.

Inside the Print dialog box, open the Comments & Forms dropdown menu.

Pick whichever of these fits your need:

- Document: Outputs the page contents and form fields while leaving comments off.
- Document and Markups: Outputs page contents, form fields, and comments together.
- Document and Stamps: Outputs the document, form fields, and stamps, yet skips every other markup.
- Form fields only: Outputs the interactive form fields but none of the document contents.

Should you want a comment summary printed alongside the document, click the Summarize Comments button and then confirm with Yes.

Select Print.

## Print layers

### Decide which layers make it to paper as you work with layered PDF files in Adobe Acrobat.

Layers in a PDF give you a way to switch the visibility of separate pieces of content on and off. While printing a layered PDF, you get to decide which layers end up in the output. That comes in handy for files that carry background art, watermarks, or differing depths of detail you may wish to keep in or leave out at print time.

### Windows

Select Menu > View > Show/Hide > Side panels > Layers.

From the right panel, pick Layers.

Within the Layers pane, choose Options

Select Apply Print Overrides.

### macOS

Select File > View > Show/Hide > Side panels > Layers.

Open Layers from the panel on the right.

Within the Layers pane, click Options.

Select Apply Print Overrides.

### Windows

Select Menu > View > Show/Hide > Side panels > Layers.

Open Layers from the panel on the right.

Within the Layers pane, click Options.

Select Layer Properties.

When the dialog box appears, open the Print dropdown menu.

Pick whichever of these choices fits your situation:

- Prints When Visible: Ties what gets printed to whatever is currently shown on screen.
- Never Prints: Keeps the layer out of the printed result.
- Always Prints: Forces the layer onto the printed page regardless.

### macOS

Select File > View > Show/Hide > Side panels > Layers.

Open Layers from the panel on the right.

Within the Layers pane, click Options.

Select Layer Properties.

When the dialog box appears, open the Print dropdown menu.

Pick whichever of these choices fits your situation:

- Prints When Visible: Ties what gets printed to whatever is currently shown on screen.
- Never Prints: Keeps the layer out of the printed result.
- Always Prints: Forces the layer onto the printed page regardless.

## Print PDFs with unembedded Asian fonts

### Learn how to print PDFs containing Asian fonts that aren't embedded in the document or installed on your system.

From the global bar, choose Print this file.

Once the Print dialog box opens, click Advanced.

Inside the Advanced Print Setup dialog box, pick PostScript Options over in the left pane.

Click OK to dismiss the dialog box.

Select Print.

## Enable protected print mode on Windows

### Learn how to enhance PDF printing security by enabling Windows Protected Print Mode for Adobe Acrobat.

Built to make printing on Windows both safer and more efficient, Windows Protected Print Mode (WPP) leans on a fresh Virtual Printer Architecture grounded in the Print Support App (PSA). That redesign gives Adobe Acrobat users printing that is more dependable and better protected. Because the new Acrobat PDF Printer is wired into WPP, you get stronger security up front without losing any of the quality or capability your documents rely on.

### Enable WPP mode

Select Settings > Bluetooth & devices > Printers & scanners.

Under Printer preferences, switch on Windows protected print mode.

When the warning prompt appears, accept it so the old driver is removed and the new Adobe PDF Printer driver gets installed.

### Switch back to the old driver

Select Settings > Bluetooth & devices > Printers & scanners.

Under Printer preferences, switch off Windows protected mode.

When the warning prompt appears, accept it so the new driver is uninstalled and the old PDF Printer driver is put back.

Note

Should the Adobe PDF Printer go missing or stop working once you flip WPP on or off, a repair of Acrobat usually sorts it out. For that repair, select Menu > Help > Repair installation.

## Create print presets

### Learn how to create print presets in Adobe Acrobat that allow you to save frequently used print settings for quick access.

### Windows

Select Menu > Document Properties.

After the dialog box opens, click the Advanced tab.

Beneath Print Dialog Presets, fine-tune whichever of these settings you need:

- Page Scaling: Decides the way pages are scaled at print time.
- DuplexMode: Picks between one-sided and two-sided printing.
- Paper Source by Page Size: Bases the output tray on the size of each PDF page.
- Print Page Range: Sets the page ranges that print by default.
- Number of Copies: Establishes how many copies come out by default.

Select OK.

### macOS

Select File > Document Properties.

After the dialog box opens, click the Advanced tab.

Beneath Print Dialog Presets, fine-tune whichever of these settings you need:

- Page Scaling: Decides the way pages are scaled at print time.
- DuplexMode: Picks between one-sided and two-sided printing.
- Paper Source by Page Size: Bases the output tray on the size of each PDF page.
- Print Page Range: Sets the page ranges that print by default.
- Number of Copies: Establishes how many copies come out by default.

Select OK.

## Enable double-sided printing

### Learn how to turn on the double-sided printing option for Adobe Acrobat.

Printing on both sides, also called duplex printing, trims paper use and lends a polished look to your documents. Plenty of current printers can handle it, yet the setting isn't necessarily switched on in your print options. Adjusting your printer's settings lets you enable the feature for Adobe Acrobat.

### Windows

Select Start > Settings > Bluetooth & devices > Printers & scanners.

Highlight your printer, then click Printing preferences.

Select Advanced.

Open up Document Options > Printer Features.

Switch on Two-sided printing and click OK.

To commit the changes, click OK once more.

### macOS

Press command + space.

Type sudo cupsctl WebInterface=yes and press Return.

Supply your system password if it asks for one.

Launch a web browser and head to http://localhost:631

Open the Printers tab, then click Manage printer.

Highlight your printer, then open the Administration dropdown menu.

Choose Set Default Options followed by Finishing.

Pick Long Edge from the Duplex dropdown menu, then click Set Default Options.

## Print on both sides of the paper

### Learn how to print on both sides of paper using Adobe Acrobat.

From the global bar, choose Print this file.

Within the print dialog box, tick Print on both sides of paper.

Select Print.

## Manually print double-sided in face-down output printers

### Learn how to print double-sided documents in Adobe Acrobat when using a printer that prints pages face-down.

From the global bar, choose Print this file.

Inside the Print dialog box, click More options below Pages to Print.

In the Odd or Even Pages dropdown menu, pick Even pages only, then turn on Reverse pages.

Select Print.

When the document runs to an odd page count, drop a blank sheet onto the printed stack.

Lift the printed stack and feed it back into the paper tray:

- Lay the stack so the blank, unprinted faces point upward.
- Orient it so the page tops face the printer.
- Square up the stack so every edge lines up.

From the global bar, choose Print this file.

Inside the Print dialog box, click More options below Pages to Print, then clear Reverse Pages.

In the Odd or Even Pages dropdown menu, pick Odd pages only.

Select Print.

## Manually print double-sided in face-up output printers

### Learn how to print double-sided documents in Adobe Acrobat using a printer that outputs prints face-up.

From the global bar, choose Print this file.

Inside the Print dialog box, click More options below Pages to Print.

In the Odd or Even Pages dropdown menu, pick Even pages only.

Select Print.

When the document runs to an odd page count, drop a blank sheet onto the printed stack.

Lift the printed stack and feed it back into the printer paper tray:

- Lay the stack so the blank, unprinted faces point upward
- Orient it so the page tops face the printer
- Square up the stack so every edge is aligned

From the global bar, choose Print this file.

Inside the Print dialog box, click More options below Pages to Print, then turn on Reverse Pages.

Select Print.
