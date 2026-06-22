# Scan Documents To Pdfs, Optimize Pdfs

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Scan documents; Recognize text in scanned documents; Fix text issues in scanned PDFs; Edit scanned documents; Enhance images; Enhance scanned documents; Scanned PDF settings; Reduce PDF file size; Reduce PDF file size with advanced options; Reduce PDF file size by unembedding fonts; View storage space used by different elements in PDFs; PDF optimizer settings.

## Scan documents

Scan paper directly into a PDF by pairing Acrobat with a connected scanner; here is the workflow.

Turning physical pages into sharp PDFs is straightforward in Acrobat once a scanner is attached. A handful of steps lets you tune the capture, run OCR, and end up with a searchable file that's ready to share.

From the global toolbar, choose Create.

When the new page appears, pick Scanner along the left rail.

Click the Scanner dropdown menu, then choose your device from those listed.

Note

Should your scanner not show up in Acrobat, consult the Scanner not recognized troubleshooting help.

Adjust whichever of these scan settings apply to your job:

- Scanner: pick the device you'll capture from in the dropdown menu.
- Pages: choose Front Sides, or Both sides where your hardware allows it.
- Quality: choosing Optimize Image lets you trade off between how big the file gets and how good it looks; the slider runs from Low Quality up to High Quality.
- Output: from the dropdown menu, settle on Create New PDF, Append to File, or Save Multiple Files.
- Recognize Text (OCR): turns pictures of words into text you can search and select; Settings is where you set the language and the output type.
- Add Metadata: brings up Document Properties once scanning is done so you can tag the file; with several files, you supply the common metadata a single time.
- Make PDF/A-1b compliant: tick this where you need the file kept for archival.

Choose Scan.

Got more pages to capture? Pick Scan More Pages, Scan Reverse Sides, or Scan Is Complete, then confirm with OK.

Note

Whether you feed additional pages through the document feeder or lay them on the flatbed depends on your hardware, so check the manual that came with your scanner.

Once the scan is open in Acrobat, set the page range and language inside the Recognize Text dialog box, then click Recognize Text.

Note

Windows users can route a paper document into a PDF through either a printer or a scanner together with Acrobat. When the scanner uses a WIA driver, hit its Scan button, pick Adobe Acrobat from the choices, and then select the device along with a preset or Custom Scan inside Acrobat.

## Recognize text in scanned documents

### Make the text inside a scanned PDF searchable, using Adobe Acrobat.

A PDF produced by scanning paper holds nothing but pixels at first, with no text you can search. Running Acrobat's optical character recognition (OCR) turns those pictures of words into text you can select and search.

Clear out any security locks before you start editing a scanned PDF. Find out how protected view gets switched on or off, and how to recover entry to PDFs that are locked.

Tip

Keep a spare copy of the untouched scanned PDF on hand before you edit, in case you ever need to roll back.

### Recognize text in a single document

Begin by opening the scanned PDF, then go to All tools > Scan & OCR.

Choose In this file.

Within the dialog box, set both the page range and the language that recognition should use.

If you want extra control, click Settings for more options.

Choose Recognize Text.

A searchable text layer is now built into the PDF by Acrobat.

### Recognize text in multiple documents

Go to All tools > Scan & OCR.

Choose In multiple files.

Inside the Recognize Text dialog box, click Add files and pick the PDFs you intend to run.

The Output Options dialog box is where you point the processed files at a destination folder and decide how they're named. Click OK.

Set your choices in the Recognize Text - General Settings dialog box, then click OK.

The chosen files are run by Acrobat, which writes searchable copies into the output folder you named.

Once OCR finishes, look the document over to confirm the text came through correct and complete. Where it didn't, patch the mistakes by hand or run OCR again with the settings tweaked.

## Fix text issues in scanned PDFs

### Clean up text-recognition mistakes in scanned PDFs by going over uncertain words and correcting them with the tools built into Adobe Acrobat.

OCR on a scanned PDF has Acrobat study the picture and swap the text bitmaps for searchable characters. Where the match isn't certain, the word gets flagged as a suspect: you still see the original image, but searchable text sits behind it.

Open the scanned file, then choose All tools on the global bar.

From the All tools menu on the left, choose Scan & OCR.

Over in the left pane, choose Correct recognized text.

Inside the pop-up box, tick the Review recognized text checkbox.

Note

Both the scanned image and the text Acrobat read are shown. Words it wasn't sure about appear boxed within the document.

Click one of the boxed words in the document. Inside the pop-up box, fix whatever needs fixing in the Recognized as field.

Compare the picture against the proposed text, and once it's right, click Accept.

The next word is selected by Acrobat on its own.

Lean on the Review recognized text tool whenever you need to repair OCR mistakes in scanned PDFs.

Lean on the Review recognized text tool whenever you need to repair OCR mistakes in scanned PDFs.

Work through every recognition issue, then click Cancel to dismiss the review dialog when you're finished.

Note

Try to select text or fire up Read Out Loud before OCR has run, and Acrobat will ask you to run it. Click OK, then set your preferences in the Recognize Text dialog box that appears.

## Edit scanned documents

### How to edit scanned PDFs in Acrobat, plus the practices that keep text recognition, formatting, and layout intact.

### Edit scanned PDFs

### Windows

Open the scanned PDF file.

From the top menu, choose Edit.

OCR is applied to the document automatically by Acrobat, which then hands you an editable PDF copy.

Click whichever text element you'd like to change and begin typing.

Whatever you type takes on the original font from your scanned PDF.

Head to Menu > Save as to store the edited PDF.

Point to where the file should go and click Save.

### macOS

Open the scanned PDF file.

From the top menu, choose Edit.

OCR is applied to the document automatically by Acrobat, which then hands you an editable PDF copy.

Click whichever text element you'd like to change and begin typing.

Whatever you type takes on the original font from your scanned PDF.

Head to File > Save as to store the edited PDF.

Point to where the file should go and click Save.

### Tips for editing scanned PDFs

Hold on to accuracy and keep the formatting intact by following these practices:

- Check OCR output Verify the recognized text is right before you start editing. When it isn't, run Scan & OCR > Recognize Text again for a cleaner pass.
- Improve image quality When a scan is fuzzy or low-resolution, run the Enhance scanned file or the Enhance camera image tool first. Scan documents to PDF covers the specifics.
- Match font and formatting Keep your edits in the same style as the surrounding text. A missing font? Look up how to install fonts on your computer.
- Remove security restrictions Editing blocked? Look for a security lock and unlock the PDF when one is present.
- Avoid editing complex elements Touch tables, graphs, and images as little as you can so the layout holds together.
- Check for app compatibility Confirm your build of Acrobat handles the scanned PDF, and update it if trouble shows up; the system requirements spell out what's supported.
- Save a backup Stash a copy of the original in case you have to undo your changes.

## Enhance images

### Sharpen up document photos by correcting angle, shadow, and lighting problems for PDFs that read cleaner and clearer.

Photos of documents snapped on your phone can be cleaned up in Acrobat with the Enhance camera image feature. Without reaching for a scanner, it tackles the usual culprits — dim lighting, shadows, tilted angles, stray background — and produces a crisp, small PDF.

Open the photograph or document image in Acrobat.

Note

Should a Scanned Page Alert dialog box appear, click Yes to keep going. Within the Recognize Text dialog box, pick the page range, tune any settings, and click OK so the image becomes editable text and graphics.

Head to All tools > Scan & OCR.

Over in the left panel, choose Enhance camera image.

Reshape the image borders by dragging the blue handles to whatever size you want.

Choose Enhance.

For finer control, slide the Adjust enhancement level control and choose Enhance.

Before you pull text out of scanned documents or photos, reach for the Enhance camera image option inside the Scan & OCR tool to tighten up image clarity.

Before you pull text out of scanned documents or photos, reach for the Enhance camera image option inside the Scan & OCR tool to tighten up image clarity.

Save your PDF.

## Enhance scanned documents

### Boost the quality of scanned PDF files with the scan-enhancement features built into Adobe Acrobat.

Sharpening a scanned PDF lifts how it looks while also folding in searchable text, which pays off when you're archiving or sending files around digitally.

Open the scanned file, then choose Scan & OCR from the All tools menu.

Choose Enhance scanned file, and in the dialog box that appears pick which pages to enhance.

Tick the Recognize text checkbox to switch OCR on.

Choose Settings and tune the scanned PDF settings however you need.

Through the Enhance Scanned PDF settings you get to dial in image quality, lay on filters, and turn on text recognition so the file is set for editing or searching.

Through the Enhance Scanned PDF settings you get to dial in image quality, lay on filters, and turn on text recognition so the file is set for editing or searching.

Click OK to commit the settings.

Choose Enhance.

## Scanned PDF settings

### Get to know the settings on offer for scanning PDFs and for sharpening the quality and clarity of scanned documents in Acrobat.

When you scan documents into PDFs with Acrobat, a range of settings is yours to configure.

## Reduce PDF file size

### How to shrink PDFs in Adobe Acrobat so they're simpler to share and store.

### Windows

Choose Menu > Save as Other > Reduced size PDF.

When the dialog box appears, pick the compatibility you want from the Make compatible with dropdown menu.

Choose OK.

Pick where the slimmed-down PDF should live, type a filename, and click Save.

### macOS

Choose File > Save as Other > Reduced size PDF.

When the dialog box appears, pick the compatibility you want from the Make compatible with dropdown menu.

Choose OK.

Pick where the slimmed-down PDF should live, type a filename, and click Save.

### Windows

Choose Menu > Save as Other > Reduced size PDF.

When the dialog box appears, pick the compatibility you want from the Make compatible with dropdown menu.

Choose Apply to Multiple Files.

Within the Arrange documents dialog box, click Add Files or Add Open Files as the situation calls for.

Choose OK.

In the Output Options dialog box, set the folder, the filename, and how overwriting is handled.

Choose OK.

### macOS

Choose File > Save as Other > Reduced size PDF.

When the dialog box appears, pick the compatibility you want from the Make compatible with dropdown menu.

Choose Apply to Multiple Files.

Within the Arrange documents dialog box, click Add Files or Add Open Files as the situation calls for.

Choose OK.

In the Output Options dialog box, set the folder, the filename, and how overwriting is handled.

Choose OK.

## Reduce PDF file size with advanced options

### Compress PDF files in Adobe Acrobat for effortless sharing and storage.

### Windows

Choose Menu > Save as Other > Optimized PDF.

When the dialog box appears, pick Standard from the Settings dropdown menu.

Dial in the file size and quality by adjusting whichever of these panels applies:

- Images: trims the file by downsampling the pictures and compressing them.
- Fonts: shrinks the file by unembedding fonts or keeping only a subset.
- Transparency: cuts size by easing back the quality of see-through objects and flattening transparency effects.
- Discard Objects: drops things such as embedded thumbnails and search indexes and flattens form fields, all to save space.
- Discard User Data: strips out comments, forms, multimedia, and private information to bring the size down.
- Clean Up: clears away dead elements like stray bookmarks or links and readies the PDF for fast web view.

From the Make compatible with dropdown menu, pick which Acrobat versions to stay compatible with.

Note

Reaching back to an older Acrobat version can hold back some compression features.

Choose OK.

Pick where the compressed PDF should go, type a filename, and click Save.

### macOS

Choose File > Save as Other > Optimized PDF.

When the dialog box appears, pick Standard from the Settings dropdown menu.

Dial in the file size and quality by adjusting whichever of these panels applies:

- Images: trims the file by downsampling the pictures and compressing them.
- Fonts: shrinks the file by unembedding fonts or keeping only a subset.
- Transparency: cuts size by easing back the quality of see-through objects and flattening transparency effects.
- Discard Objects: drops things such as embedded thumbnails and search indexes and flattens form fields, all to save space.
- Discard User Data: strips out comments, forms, multimedia, and private information to bring the size down.
- Clean Up: clears away dead elements like stray bookmarks or links and readies the PDF for fast web view.

From the Make compatible with dropdown menu, pick which Acrobat versions to stay compatible with.

Note

Reaching back to an older Acrobat version can hold back some compression features.

Choose OK.

Pick where the compressed PDF should go, type a filename, and click Save.

## Reduce PDF file size by unembedding fonts

### Shrink a PDF in Adobe Acrobat Pro by changing how its fonts are stored.

Stripping embedded fonts out of a document is one of the more effective ways to shrink a PDF. To see how many bytes the fonts are costing you in a given file, run the Audit space usage feature first.

### Windows

Select Menu > Save as Other > Optimized PDF.

When the PDF Optimizer dialog box appears, pick Fonts from the left pane.

Under Font Unembedding Settings, tick the checkbox labelled Do not unembed any font.

Select OK.

Pick where the compressed PDF should go, type a filename, and then select Save.

### macOS

Select File > Save as Other > Optimized PDF.

When the PDF Optimizer dialog box appears, pick Fonts from the left pane.

Under Font Unembedding Settings, tick the checkbox labelled Do not unembed any font.

Select OK.

Pick where the compressed PDF should go, type a filename, and then select Save.

## View storage space used by different elements in PDFs

### Use the audit space feature to see how much room each part of a PDF takes up.

In Adobe Acrobat, the Audit space usage feature breaks down how many bytes each kind of PDF content is consuming — text, images, fonts, forms, and comments among them. Every element is reported both as a raw byte count and as a share of the whole file. Seeing which parts dominate makes it easier to trim the file down and tune the PDF for whatever you need it to do.

### Windows

Select Menu > Save as Other > Optimized PDF.

Once the dialog box opens, choose Audit space usage.

Look over the space usage report.

Select OK.

### macOS

Select File > Save as Other > Optimized PDF.

Once the dialog box opens, choose Audit space usage.

Look over the space usage report.

Read through the audit space usage report to work out which elements are eating up room in your PDF.

Read through the audit space usage report to work out which elements are eating up room in your PDF.

Select OK.

## PDF optimizer settings

### Get to know the Adobe Acrobat controls for trimming file size, squeezing images, handling fonts, and stripping elements out of PDFs.

With PDF Optimizer you can trade off file size against document quality. Tweaking the image, font, and object settings is straightforward, letting you tailor a PDF for the web or for print production.

### Images settings

Within the PDF Optimizer, the Images panel is where you control compression for color, grayscale, and monochrome images, along with image downsampling.

### Font Unembedding settings

Embedding every font keeps the PDF an exact match for the original document. When an exact match isn't important to you and a leaner file is preferable, leave fonts unembedded for Roman text as well as East Asian scripts — Traditional Chinese, Simplified Chinese, Korean, and Japanese. On any machine that lacks the original fonts, a substitution font stands in for text written in those scripts.

### Transparency settings

Should your PDF contain artwork that uses transparency, the Transparency panel in PDF Optimizer offers presets that flatten that transparency and bring the file size down. Before any of the other optimization steps run, PDF Optimizer applies these transparency choices across every page of the document.

Choosing the Acrobat 4.0 and later compatibility settings switches the Transparency panel on, and every bit of transparency in the file gets flattened as part of optimization. That guarantees the result works in Acrobat 4.0 and earlier, versions that have no transparency support. Any flattening presets you build show up alongside the default ones in the Transparency panel.

### Discard Objects settings

With the Discard Objects panel you can name which objects should be stripped from the PDF and have curved lines in CAD drawings simplified. Objects authored in Acrobat as well as those made in other applications can be discarded. Once you mark an object, every instance of it throughout the PDF is removed.

### Discard User Data settings

The Discard User Data panel is there to strip out personal information you'd rather not hand off or circulate. When such details don't turn up, the person who made the document may have concealed them.

### Clean Up settings

The choices in the Clean Up panel of the PDF Optimizer dialog let you strip duplicate items out of the document. That covers anything outdated or surplus to how you plan to use the file. Out of the box, only the items that won't change behavior are checked. If you're not certain what removing the other options would do, stick with those default checkboxes.

Learn how to use PDF Optimizer to compress PDFs in Acrobat.
