# Set Up A Printer, Print Documents And Books, Print As Bitmap, Create And Manage Print Presets ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Set up a printer; Print documents and books; Print as bitmap; Create and manage print presets; Produce print-ready PDF files; Print or export book files; About PostScript and EPS files; Create PostScript files; Print oversized documents; Scale documents for printing.

## Set up a printer

Set up printer drivers and PPD files so Adobe InDesign can print through PostScript and non-PostScript devices.

Through system printer drivers, InDesign can target PostScript® (Level 2 and 3) devices as well as non-PostScript printers. Correct setup supports accurate output.

PostScript printers use a PPD file in InDesign. For non-PostScript printers, the printer driver supplies the needed information. Install the correct driver, and install the PPD as well when it is required.

### Install the printer driver

Get the newest printer driver from the manufacturer's website.

Run the installer and follow the on-screen instructions.

If the installer asks for it, restart the computer.

Confirm that the printer is listed with the system's printers.

### Configure the PPD file for PostScript printers

Open printer settings from the system control panel.

Find the PPD selection control, which is commonly located under Advanced or Device Settings.

Choose the PPD file that matches your printer.

Apply the changes, then close the dialog box.

Note

- In Windows 11 version 24H2, Microsoft added Windows Protected Print Mode (WPP) as an opt-in print-security feature. When enabled, it disables PostScript (PSCRIPT5.dll) and OEM PCL drivers, blocks every v3/v4 driver, and prefers Windows IPP Class printer drivers.
- To work with that change, InDesign added an IPP PDF Passthrough printing workflow for Windows 11 and supported printers. Current workflows are not changed. When using PDF Passthrough with IPP Class drivers, you can also choose Let Printer Determine Colors for better color management.

### Test the printer connection in InDesign

Start InDesign and open any document.

Choose File > Print.

In the Print dialog box, choose your printer from the Printer menu.

Check the print settings to verify communication with the printer. For PostScript printers, confirm that PPD-specific options are present.

Choose Cancel.

## Print documents and books

Use print presets and settings in Adobe InDesign when sending layouts to printers or presses.

InDesign printing can send documents to desktop printers or commercial presses while letting you set quality, color, paper size, and page range. For documents, use File > Print; for books, use the Book panel.

Before you begin

Make sure the correct driver and PPD for the printer are installed.

### Print a single document

Choose File > Print.

In the Print dialog box, choose a Printer.

Choose a Print Preset, or use [Default].

In the General section, set the copy count and type the page range in the Range field.

From the Sequence menu, choose All Pages, Even Pages Only, or Odd Pages Only.

Indicate whether output should include blank pages, non-printing objects, or visible guides and baseline grids.

In the Setup section, choose the Paper Size and Orientation.

Open the remaining sections, including Marks and Bleed, Output, Graphics, Color Management, and Advanced, and adjust their settings.

Choose Print.

Tip

As settings change, the preview in the lower-left corner of the Print dialog box refreshes to show how the document fits on the selected paper size.

### Print a book

Open the Book panel (File > New > Book) and confirm that the book file is loaded.

To output every document in the book, choose Print Book from the Book panel menu.

For only certain documents, select them in the list, then choose Print Selected Documents from the Book panel menu.

Set the needed printer options in the Print dialog box, then choose Print.

When printing books, the Range option is not available.

## Print as bitmap

Rasterize Adobe InDesign layouts during printing when complex design elements are causing output errors.

Print as bitmap converts each page to raster form before printing. This can work around problems caused by complex objects, including gradients and smooth shading. The tradeoff is lower precision, so this method is more appropriate for proofs than final output.

The Print as Bitmap option appears only for non-PostScript printers.

### Configure bitmap printing settings

Choose File > Print.

In the Printer menu, confirm that a non-PostScript printer is selected.

From the options list in the Print dialog box, choose Advanced.

Select Print as Bitmap.

Type a resolution value that fits the printer.

Tip

Higher resolutions can improve quality, but they also require more processing time and memory. Use 300 dpi for proofs, and test 600 dpi when higher quality is needed.

Check the rest of the print settings, then choose Print.

## Create and manage print presets

Save Adobe InDesign print settings as reusable presets to make repeated printing workflows more consistent.

Print presets capture the settings from the Print dialog box, so the same configuration can be applied across jobs and errors are less likely.

Presets can be imported, shared, or synchronized across documents and book files. They support both PostScript and non-PostScript printers.

### Create a print preset

Choose File > Print Presets > Define, then choose New.

In the New Print Preset dialog box, enter a new name or keep the default.

Set the print options in each available category.

Choose OK to store the preset and return to the Print Presets dialog box.

Choose OK.

Another way to create a print preset is to choose File > Print, change the print settings, and choose Save Preset. Enter a name or keep the default, then choose OK.

### Apply a print preset

Choose File > Print.

From the Print Preset menu, pick the preset you want.

Check the settings the preset applies.

Click Print.

Tip

To output with a preset while skipping the Print dialog box, choose File > Print Presets > <Preset name>.

### Edit a print preset

Choose File > Print Presets > Define.

In the list, highlight a preset and click Edit.

Change the needed print settings in the available categories.

Click OK to keep the changes and return to the Print Presets dialog box, then click OK a second time.

### Delete print presets

Choose File > Print Presets > Define.

Highlight one or more presets in the list.

Click Delete, then approve the prompt.

Click OK.

## Produce print-ready PDF files

Use Adobe InDesign presets and settings to export documents as PDFs prepared for commercial print output.

A print-ready PDF helps commercial printers reproduce the job accurately while preserving the design.

Before export, verify that links are current, fonts are present and properly licensed, bleeds and margins are configured, colors are appropriate for print (CMYK preferred), and preflight reports no critical errors.

### Verify document links and resources

Choose Window > Links.

Look in the Links panel for links marked missing or modified.

For modified links, choose Update Link from the panel menu to refresh them.

Refreshing links makes the exported PDF use the latest placed images and graphics.

When a link is missing, click Relink and browse to the correct file location.

### Run preflight check

Choose Window > Output > Preflight.

In the Preflight panel, inspect any document errors or warnings.

Fix critical problems, including missing fonts, images below 300 ppi, or overset text.

### Export document as print PDF

Choose File > Export.

Pick a save location and type a filename.

On macOS, use the Format menu; on Windows, use Save as type; choose Adobe PDF (Print).

Click Save to display the Export Adobe PDF dialog box.

Set the needed options in the Export Adobe PDF dialog box.

Click Export.

### Configure PDF export settings

In the Export Adobe PDF dialog box, choose a preset from the Adobe PDF Preset menu, for example [Press Quality] or [PDF/X-4:2008].

In General, verify that Pages covers the page range you intend to output.

Open Marks and Bleeds from the left panel, then enable All Printer's Marks when your print provider requires them.

Under Bleed and Slug, make sure the bleed values match your document setup.

In the left panel, open Output; for CMYK conversion, set Color Conversion to Convert to Destination.

From the Destination menu, choose the color profile specified by your print provider.

Click Export.

Caution

During PDF export, any content extending beyond 200" × 200" is cropped. For larger formats, either scale the document proportionally or ask the print provider about tiling options.

## Print or export book files

Use Adobe InDesign synchronized settings to print or export every document in a book.

Send all documents from a book file as one PDF or print job so settings stay consistent and the workflow stays simpler. Before continuing, confirm that every document is current, synchronized, and free of missing links.

### Export a book to PDF

Choose File > Open, then choose your .indb file so the Book dialog box opens.

To export the entire book, choose Export Book to PDF from the Book panel menu  ico icon.

For selected documents only, select the documents, then choose Export Selected Documents to PDF from the Book panel menu.

Enter the PDF file name and choose its location, then set the type to Adobe PDF (Print).

Adobe PDF (Print) output excludes interactive elements.

Click Save.

In the Export Adobe PDF dialog box, choose a preset from the Adobe PDF Preset menu or adjust export settings yourself.

For print production, use a PDF/X preset or choose [Press Quality] for commercial printing.

In the Advanced tab, check accessibility options and set Language and Display Title as needed.

Click Export (Windows) or Save (macOS).

### Print a book

Choose File > Open, then choose your .indb file to open the Book dialog box.

For the whole book, choose Print Book from the Book panel menu .

For selected documents, choose the documents first, then use Print Selected Documents from the Book panel menu.

Once the Print dialog box appears, pick your printer from the Printer menu.

Choose a Print Preset from the menu, or set print options manually.

In General, enter the copy count and verify that all page ranges are included.

Check each category, including Setup, Marks and Bleed, Output, and so on.

Click Print.

## About PostScript and EPS files

Use Adobe InDesign with PostScript and EPS formats for print workflows and compatibility across applications.

PostScript and Encapsulated PostScript (EPS) are older foundational formats used in professional printing and cross-application workflows. Knowing where these formats fit supports file-preparation decisions, prepress workflows, and compatibility requirements.

### What PostScript files are

PostScript is a page-description language for specifying how text, graphics, and images appear, either device-independently or with device-specific details. Creating a PostScript file (.ps) from InDesign captures a full document description, including fonts, graphics, and layout information, in a form that imagesetters and high-end printing devices can interpret directly.

### Choose the right method for creating a PostScript file

An InDesign document or book can be saved as one of three PostScript file categories: device-independent, device-dependent, or device- and driver-dependent.

The tables identify printer drivers and output methods recommended for strong results with post-processing applications and InDesign. When a document will pass through an OPI server, imposition, trapping, or another prepress application before RIP printing, set the Printer menu to PostScript® File in the InDesign Print dialog box. With that choice, InDesign controls the DSC output fully. For desktop printing, rely on any supported PostScript printer driver.

Asterisks in the tables show each method's relative suitability for prepress work:

Printer selection: PostScript® File

No printer driver is involved when the printer selection is “PostScript® File.”

Printer selection: <installed printer>

For the selected printer, the Print dialog box shows the PPD in the PPD text box at the top.

### Types of PostScript files

InDesign can produce three PostScript file types, with each one matching a different workflow need:

Device-independent PostScript files: Carry no printer-specific information and can be used with any output device. They provide the most flexibility when the final output device is unknown or the files must travel through multiple prepress applications.

Device-dependent PostScript files: Are tuned for a particular printer, imagesetter, or platesetter. To create them, choose a specific PostScript Printer Description (PPD) file during output generation. This method fits pre-separation or trapping workflows, especially when the plan uses Adobe In-RIP Trapping or automatic trapping features.

Device- and driver-dependent PostScript files: Depend on a specific output device plus a particular printer driver. They can suit immediate output, but they are less flexible when prepress workflows require post-processing applications.

### When to use PostScript files

PostScript files have targeted roles in professional workflows. Create PostScript files when:

- A service provider asks for them for direct output to an imagesetter.
- The workflow uses OPI servers to swap low-resolution proxy images for high-resolution versions.
- Imposition, trapping, or other prepress applications need PostScript for final output.
- Remote printing services in the job require PostScript.

In most current workflows, PDF has taken over general document exchange that once used PostScript files. PostScript still matters, however, in some specialized prepress environments and legacy workflows.

### Understanding EPS files

Encapsulated PostScript (EPS) files are self-contained PostScript documents designed for placement inside other documents. EPS usually holds one page or a graphic element rather than describing a whole document as a PostScript file does.

After you place an EPS file in InDesign, the application builds a low-resolution bitmap preview for screen display and keeps the high-resolution PostScript data for final output. This lets editing stay efficient while print quality is retained.

## Create PostScript files

Use PostScript files and PPD settings in Adobe InDesign to create device-independent or device-dependent output for prepress workflows.

InDesign can save documents as PostScript files tailored to different prepress workflows. Choosing an output method is easier when the differences between device-independent and device-dependent PostScript files are clear.

### Create device-independent PostScript files

Device-independent PostScript files strip away device and driver dependencies, so they work with almost any output device. Output from these files is composite CMYK (and spot colors if any), with separations handled later in post-processing software or at the RIP using in-RIP separations. Choose this path for composite prepress workflows where trapping and separation happen later in production.

Choose File > Print.

From the Printer menu in the Print dialog box, choose PostScript File.

From the PPD menu, choose Device Independent.

Note

InDesign cannot trap device-independent PostScript files. Trapping must be done at the RIP or in post-processing software.

Review or adjust print settings. When InDesign creates the PostScript file, it uses the current page range. Ask your printer for the proper color management settings. Set the transparency flattener settings to high resolution.

Click Save.

Enter a filename and location, then click Save.

### Create device-dependent PostScript files

Device-dependent PostScript files include details for a particular output device, such as optimized screen frequencies, resolution, and available media sizes. They may be composite or separated and can use every InDesign color output method. Device-dependent files suit pre-separation or trapping workflows that use InDesign's Application Built-In or Adobe In-RIP Trapping features.

Choose File > Print.

When the document will go through an OPI server or prepress application before the RIP, choose PostScript File in the Printer menu. This keeps InDesign in full control of DSC compliance.

From the PPD menu, choose the PPD for the final output device. Confirm the correct PPD with your printer.

Review or adjust print settings. When InDesign creates the PostScript file, it uses the current page range. Ask your printer for the proper color management settings. Set the transparency flattener settings to high resolution.

Click Save.

Enter a filename and location, then click Save.

Device-independent and device-dependent PostScript files are limited to printing to file, not directly to a device. If a workflow needs direct printing plus driver features such as watermarks, choose an installed PostScript printer and the device- and driver-dependent method.

## Print oversized documents

In Adobe InDesign, tiling is the way to output a layout whose page size is larger than the paper your printer can handle.

When a document is bigger than the available printer paper, InDesign breaks the page into printable rectangular sections. Those overlapping sections can then be printed, trimmed, and put together so the complete design is reconstructed.

### Tile a document automatically

Choose File > Print.

In the Print dialog box, go to the Setup section and turn on Tile.

From the Tile menu, choose one of these settings:

Auto: determines how many tiles are needed and includes the overlap.

Auto Justified: expands the overlap so the tiles on the right and bottom line up with the page edges.

For Overlap, type the smallest amount of repeated content you want on every tile.

The Overlap setting must be larger than the printer's nonprinting margins, and it cannot exceed half of the page's shortest side.

Choose Print to send all tiles to the printer in one operation.

### Tile a document manually

With manual tiling, you position each tile yourself and print each tile in a separate pass.

Choose View > Show Rulers.

Move the rulers' intersection so the zero point sits at the upper-left corner you want for the tile being printed.

While setting the zero point, allow space for overlap and printer's marks.

Choose File > Print, then choose Setup.

In the Setup section, turn on Tile, then choose Manual from the Tile menu.

Choose Print to output the tile currently defined.

Thumbnails place reduced previews of several pages onto a single sheet. In the Print dialog box, enable Thumbnails and specify the count per page. InDesign may adjust the paper orientation automatically, and the output leaves out marks plus bleed or slug areas.

## Scale documents for printing

In Adobe InDesign, print scaling lets you resize pages proportionally or with independent width and height values so they fit your printer's paper.

Use scaling at print time when oversized pages need to be output on smaller sheets while the document itself remains unchanged. You can keep width and height linked, or scale each dimension separately. Uneven scaling is also useful for countering print distortion, including plate stretching.

### Scale document dimensions manually

Choose File > Print.

In the Setup area of the Print dialog box, choose Width under Options to make the scaling fields active.

Enable Constrain Proportions when the document's width-to-height ratio should stay unchanged.

Turn it off when width and height need separate scaling.

Type percentage values from 1 to 1000 in the Width and Height fields.

When Constrain Proportions is enabled, editing either value changes the other value so proportions are preserved.

Note

For spreads, InDesign applies scaling to each spread on its own.

### Scale document to fit paper automatically

Choose File > Print.

In the Setup area of the Print dialog box, make sure Tile and Thumbnail are both off.

Choose Scale To Fit.
