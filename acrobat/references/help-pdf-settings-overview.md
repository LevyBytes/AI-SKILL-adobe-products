# Pdf Settings Overview (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

### How Adobe PDF settings shape document quality, compatibility, and file size to ready your PDFs for print production, web distribution, or archiving.

How a document is handled as it converts from another format into PDF comes down to its PDF settings. Things like image quality and font handling, color management, and adherence to industry standards all hinge on them. Tune these settings and your PDFs will behave the way their intended use demands.

## General settings

Here is what the general panel governs in your PDF file:

- Compatibility: Sets which version of Acrobat your PDF stays usable with. Reach for the newest version to unlock the latest features; drop back to an older one to reach a wider audience.
- Object Level Compression: Governs the way structural data — bookmarks, accessibility features, and the like — gets compressed inside the file.
- Auto-Rotate Pages: Turns pages to match the direction of their text on its own, and you can have it rotate everything together by file, separately by page, or leave it off.
- Binding: Picks left-side or right-side binding, which changes how pages line up in some viewing modes.
- Resolution: Stands in for printer resolutions across a 72-to-4000 range; push it higher and file size along with processing time may climb.
- Optimize for Fast Web View: Rebuilds the file so web servers can hand it over a page at a time more quickly.

## Images settings

Here is how these settings govern image handling in your PDF:

- Downsampling: Cuts image resolution by merging pixels. The choices — Average Downsampling, Subsampling, and Bicubic Downsampling — each strike their own trade-off between processing speed and image quality.
- Compression and Image Quality: Puts compression to work on color, grayscale, and monochrome images, and lets you dial the quality for the color and grayscale ones.
- Anti-alias to Gray: Softens the stair-stepped edges of monochrome images, offering 4, 16, or 256 levels of gray.

Which resolution serves an image best comes down to the output device. For instance:

- 300dpi laser printer: 120ppi image resolution
- 600dpi laser printer: 170ppi image resolution
- 1200dpi imagesetter: 240ppi image resolution
- 2400dpi imagesetter: 300ppi image resolution

## Fonts settings

Which fonts get embedded in your PDF is what the font settings decide. Embedding matters for holding a document's look steady across systems — especially when it leans on specialized fonts or will be opened on a range of devices:

- Embed All Fonts: Carries every font the document uses, which keeps the look consistent everywhere at the cost of a larger file.
- Embed OpenType Fonts: Holds onto OpenType font data so advanced text layout survives.
- Subset Embedded Fonts: Embeds only the characters actually used once their share dips beneath a threshold you set, paring down file size.
- Always Embed or Never Embed: Lets you name specific fonts to embed every time or to leave out entirely, whatever the other settings say.

## Color settings

How colors are treated while a PDF is created is the job of the color management settings. They carry extra weight in print production, where getting color right is critical:

- Color Management Policies: The choices run from leaving colors as they are, to tagging everything for color management, to tagging images alone, to converting every color into sRGB or CMYK.
- Working Spaces: Set which ICC profiles serve the grayscale, RGB, and CMYK color spaces.
- Document Rendering Intent: Decides how colors translate from one color space to another, with Perceptual, Saturation, Relative Colorimetric, and Absolute Colorimetric on offer.

## Advanced settings

Which Document Structuring Conventions (DSC) comments stay in a PDF, plus a handful of other choices that shape the conversion out of PostScript, are what the advanced options control. Inside a PostScript file, DSC comments record details about it — the application it came from, when it was created, the page orientation — and lend structure to the file's page descriptions. This panel holds these options:

- Allow PostScript File to Override Settings: Draws on the settings tucked inside the PostScript file in place of the current PDF settings.
- Convert Gradients to Smooth Shades: Lifts quality and pares file size for documents that carry gradient effects.
- Preserve Overprint Settings: Carries the original document's overprint settings forward, which counts for professional printing.
- Process DSC Comments: Carries the Document Structuring Conventions data from PostScript files forward.
- Save Adobe PDF Settings Inside PDF File: Tucks the settings that built the PDF into it as an attachment.

## Standards options

With these settings you can verify, before the PDF is generated, that the content held in the PostScript file conforms to the PDF/X1-a, PDF/X-3, or PDF/A criteria. When you target PDF/X compliance, the Standards panel also lets you impose further requirements on the incoming PostScript file. Which controls show up here changes with the standard you pick. A PDF that already complies can be turned into a PDF/X file later through Acrobat's Preflight feature.

- PDF/X-compliant: Builds output that satisfies the requirements for high-resolution print production.
- PDF/A-compliant: Builds output suited to archival documents that need long-term preservation.
- Compliance Standard Reporting: Produces a report stating whether the file met the chosen standard and flagging anything that did not.

## General panel options

Reach for this panel when you need to pin a PDF to a particular Acrobat version and to set the related file and device behavior.

Compatibility: Determines which PDF compatibility level applies. Picking the newest release (here, version 1.7) pulls in every recent feature and capability. When the PDFs are headed for a broad audience, drop to an older level so that everyone can still open and print them.

Object Level Compression: Squeezes structural data — things like bookmarks, accessibility data, and objects that can't otherwise be compressed — which conceals it and renders it unusable in Acrobat 5.0 or Reader 5.0. With Tags, only the structural information gets compressed. With Off, no compression is applied at all.

Auto-Rotate Pages: Turns pages automatically to follow the direction in which the text runs.

Note

When Process DSC Comments is turned on in the Advanced panel and %%Viewing Orientation comments are present, those comments win when page orientation is decided.

Collectively by File: Spins every page to agree with whichever text orientation dominates the document.

Individually: Spins each page to match the text orientation found on that particular page.

Off: Keeps pages from rotating at all.

Binding: Controls whether the PDF reads with binding on the left edge or the right edge. What you choose for Binding shapes how pages appear in Two-Up Continuous view and how the thumbnails sit beside one another.

Resolution: Applies to PostScript files so they can mimic resolutions tied to the destination printer. Accepts anything from 72 to 4000. Stick with the default unless you intend to print the PDF on a specific printer while reproducing the resolution that the original PostScript file declared.

Note

Pushing the resolution value higher grows the file and can add a little to how long certain files take to process.

Pages: Determines which pages get converted into the PDF.

Embed thumbnails: Bakes a thumbnail preview of every page into the PDF, which makes the file larger. Leave it off when the audience runs Acrobat 5.0 or newer to view and print. Those versions build thumbnails on the fly whenever you open the Pages panel of a PDF.

Optimize for fast web view: Reorganizes the file so web servers can serve it faster, one page at a time (byte serving). It also compresses text and line art, which overrides whatever compression you set on the Images panel.

Default Page Size: Sets the page dimensions to fall back on when the original file names none. EPS files supply a bounding box size rather than a page size.

## Images panel options

On the Images panel, the controls govern how color, grayscale, and monochrome images are compressed and resampled. It often pays to try different combinations until file size and image quality strike the right trade-off.

For color and grayscale images, aim for a resolution roughly 1.5 to 2 times the line screen ruling used at print time. Monochrome images should match the output device's resolution. That said, pushing a monochrome image past 1500dpi inflates the file without any visible quality gain. Artwork meant to be enlarged, such as maps, can warrant higher resolutions.

Note

Resampling monochrome images sometimes yields surprises — for instance, the image may not display at all. Should that occur, switch resampling off and convert the file once more. Subsampling is the likeliest culprit, while bicubic downsampling is the least likely.

The table below lists familiar printer categories alongside their resolution in dpi. It also gives the default screen ruling in lines per inch (lpi) and a resampling resolution for images in pixels per inch (ppi). As an example, when printing to a 600-dpi laser printer you would set 170 as the resolution at which images get resampled.

Printer resolution

Default line screen

Image resolution

300dpi (laser printer)

60lpi

120ppi

600dpi (laser printer)

85lpi

170ppi

1200dpi (imagesetter)

120lpi

240ppi

2400dpi (imagesetter)

150lpi

300ppi

| --- | --- | --- |

Downsample (Off): Brings image resolutions that sit above the for images above value down to the output device's resolution by merging the pixels within a sample region into one bigger pixel.

Average Downsampling to: Takes the average of the pixels across a sample region and swaps the whole region for that average pixel color at the resolution you set.

Subsampling to: Swaps a whole region for a single pixel picked out of that sample region, at the resolution you set. It converts faster than downsampling, though the images it yields are less smooth and continuous.

Bicubic Downsampling to: Determines pixel color from a weighted average rather than the plain average that downsampling uses. It is the slowest method but delivers the smoothest tonal gradations.

Compression/Image Quality: Compresses color, grayscale, and monochrome images. With color and grayscale images, it also governs the image quality.

Anti-alias to gray: Eases the jagged edges of monochrome images. Pick 2 bit, 4 bit, or 8 bit to get 4, 16, or 256 gray levels. (Anti-aliasing can leave small type or thin lines looking blurry.)

Note

Text and line art are always compressed. Switching that off means setting the relevant Distiller parameter. For the details, consult the SDK information on the Acrobat Developer Center at www.adobe.com/go/learn_acr_devcenter_en (PDF, English only).

Policy: Brings up the Image Policy dialog box, where you decide how Color, Grayscale, and Monochrome images that fall under the resolutions you name get handled. Give each image type a resolution value, then pick Ignore, Warn and continue, or Cancel job.

## Fonts panel options

The Fonts options decide which fonts ride along inside a PDF and whether only a subset of the characters in use gets embedded. Embedding works for OpenType®, TrueType, and PostScript fonts. A lock icon marks any font carrying license restrictions. Selecting a license-restricted font causes the restriction's terms to appear in the Adobe PDF Options dialog box.

Note

If you merge PDF files sharing one font subset, Acrobat tries to consolidate those subsets.

Embed all fonts: Embeds every font the file uses. PDF/X compliance demands font embedding.

Embed OpenType fonts: Embeds each OpenType font the file uses and keeps its OpenType data for advanced line layout. This control surfaces only when either Acrobat 7 (PDF 1.6) or Acrobat 8 (PDF 1.7) is chosen from the Compatibility menu in the General panel.

Subset embedded fonts when percent of characters used is less than: Sets a threshold percentage when you want only part of the fonts embedded. Say the threshold is 35 — if under 35% of the characters appear, Distiller embeds just those characters.

When embedding fails: Dictates how Distiller reacts if no embeddable font turns up while a file is being processed.

Always Embed: To embed only particular fonts, shift them into the Always Embed list. Confirm that Embed all fonts is left off.

Never Embed: Drop any fonts you would rather not embed into this list. If you need to, switch to a different font folder via the pop-up menu so the font shows up in the font list.

Note

A lock icon flags fonts that carry license restrictions. Selecting one displays the nature of that restriction in the Adobe PDF Options dialog box.

Add Name: When the font you are after sits in no font folder, choose Add Name. Type the font's name, choose Always Embed list (or Never Embed list), and choose Add.

Note

A TrueType font may carry a flag set by its designer that blocks the font from being embedded in PDF files.

Remove: Takes a font off the Always Embed or Never Embed list. Doing so leaves the font on your system; it only drops the list's reference to it.

Note

Times, Helvetica, and ZapfDingbats are not bundled with Acrobat. To let PDF recipients view and print these fonts in the PDFs you produce, embed them.

## Color panel options

In the Adobe PDF Settings dialog box, the Color panel is where you handle every piece of Distiller's color management — be it color management data pulled from the PostScript file, Distiller CSFs you apply, or custom settings you define yourself.

Settings File: Enumerates color settings, including some that come from graphics applications. Picking None opens up the Color Management Policies and Working Spaces settings for editing.

Color Management Policies: Governs how Distiller converts unmanaged color in a PostScript file when no Distiller color settings file is in play. The menu becomes available once None is chosen in the Settings File menu.

Note

How Color Management Policies values land on a PDF can shift with whichever compatibility setting you pick in the General panel.

Leave Color Unchanged: Keeps device-dependent colors as they are and holds device-independent colors at the closest equivalent it can. This suits print shops that have calibrated their gear, used those calibrations to specify color in the file, and send output only to those same devices.

Tag Everything for Color Management: Attaches an ICC profile to color objects and calibrates them so they read as device-independent across PDFs compatible with Acrobat 4 (PDF 1.3) and later. In Acrobat 3.0 (PDF 1.2) compatible PDFs, it turns device-dependent image color spaces (RGB, Grayscale, and CMYK) into device-independent ones (CalRGB, CalGray, and Cie L*a*b).

Tag Only Images for Color Management: Attaches ICC profiles to images alone — leaving text and vector objects out — so that black text dodges any color shift while Acrobat 4.0 (PDF 1.3) compatible PDFs are distilled. In Acrobat 3.0 (PDF 1.2) compatible PDFs, it converts device-dependent image color spaces (RGB, Grayscale, and CMYK) into device-independent ones (CalRGB, CalGray, and Lab).

Convert All Colors to sRGB (or Convert Everything To CalRGB): Calibrates the color so it becomes device-independent. In PDFs compatible with Acrobat 4 (PDF 1.3) or later it converts CMYK and RGB images to sRGB; in Acrobat 3.0 (PDF 1.2) compatible PDFs it converts them to calibrated RGB (CalRGB). Best for PDFs bound for the screen or for low-resolution printers.

Convert All Colors to CMYK: Turns color spaces into DeviceGray or DeviceCMYK following the choices made in the Working Spaces menu. Every entry under Working Spaces has to be specified.

Document Rendering Intent: Pick how colors get mapped from one color space to another. What any given method yields hinges on the color spaces' profiles — some profiles, for instance, give the same result no matter the method.

Acrobat carries the same four rendering intents (Perceptual, Saturation, Relative Colorimetric, and Absolute Colorimetric) as the other Creative Suite applications.

Acrobat also offers a rendering intent named Preserve, signaling that the intent lives in the output device instead of in the PDF. For many output devices, Relative Colorimetric serves as the default intent.

Note

Whatever the case, color management operations that run after the PDF is created may override these intents or ignore them outright.

Working Spaces: For any Color Management Policies value other than Leave Color Unchanged, pick a working space to set which ICC profiles define and calibrate the grayscale, RGB, and CMYK color spaces in the distilled PDFs.

Gray: Pick a profile to set the color space for every grayscale image in the files. Adobe Gray - Dot Gain 20% is the default ICC profile for gray images. Choose None to keep grayscale images from being converted.

RGB: Pick a profile to set the color space for every RGB image in the files. The default, sRGB IEC61966-2.1, is understood by many output devices. Choose None to keep RGB images from being converted.

CMYK: Pick a profile to set the color space for every CMYK image in the files. The default is U.S. Web Coated (SWOP) v2. Choose None to keep CMYK images from being converted.

Note

Choosing None for all three working spaces produces the same outcome as choosing the option Leave Color Unchanged.

To add ICC profiles — say ones your print service bureau hands you — drop them into the ICCProfiles folder inside the Common folder, the Windows\System\Color folder (Windows), or the System Folder/ColorSync folder (macOS).

Preserve CMYK values for calibrated CMYK color spaces: With this on, device-independent CMYK values are read as device-dependent (DeviceCMYK) values, device-independent color spaces are thrown out, and PDF/X-1a files adopt the Convert All Colors to CMYK value. With it off, device-independent color spaces convert to CMYK whenever Color Management Policies is set to Convert All Colors to CMYK.

Preserve under color removal and black generation: Keeps these settings when the PostScript file already holds them. Black generation works out how much black to lay down while reproducing a color. Undercolor removal (UCR) trims cyan, magenta, and yellow to offset black generation. Since UCR draws on less ink, it fits uncoated stock.

When transfer functions are found: Sets how PDFs deal with transfer functions. Transfer functions serve artistic ends and correct for the traits of a given output device.

Remove: Strips out any transfer functions that were applied. Such applied functions ought to go, unless the PDF will print on the very device the source PostScript file targeted.

Preserve: Keeps the transfer functions long used to offset the dot gain or dot loss that can crop up when an image is moved to film. Dot gain or loss happens when the ink dots forming a printed image come out bigger or smaller than they were in the halftone screen.

Apply: Runs the transfer function, altering the file's colors without retaining the function itself. It comes in handy for building color effects within a file.

Preserve halftone information: Keeps whatever halftone information the files carry. Halftone information is meant for one specific output device.

## Advanced panel options

Advanced options decide which Document Structuring Conventions (DSC) comments survive into a PDF and how to handle other factors in the move from PostScript. Inside a PostScript file, DSC comments record details about the file — its originating application, its creation date, its page orientation — and lend structure to the file's page descriptions, such as the opening and closing statements of a prologue section. These comments earn their keep once a document is bound for print or press.

To dig deeper, the documents at the Adobe PDF Technology Center cover it: www.adobe.com/go/learn_acr_pdftechnology_en (PDF, English only).

Note

Distiller no longer carries the ASCII Format option, though it lives on as a Distiller parameter.

Script file to override Adobe PDF settings: Draws on settings kept in a PostScript file instead of the current PDF settings file. For more on tailoring PDF settings, consult the SDK information on the Acrobat and PDFL Developer Guides at www.adobe.com/go/learn_acr_pdftechnology_en (PDF, English only).

Allow PostScript XObjects: PostScript XObjects hold snippets of PostScript code for use when a PDF prints on a PostScript printer. Reserve this for controlled workflows that leave no alternative. It is available once Standard or Smallest File Size is picked from the Default Settings menu.

Convert gradients to smooth shades: Turns blends into smooth shades for Acrobat 4.0 and later, lifting quality while shrinking the PDF. Distiller handles gradients coming out of Adobe Illustrator, Adobe InDesign, Adobe FreeHand®, CorelDraw, QuarkXPress, and Microsoft PowerPoint.

Convert smooth lines to curves: Cuts down the number of control points that form curves in CAD drawings, yielding smaller PDFs and quicker onscreen rendering.

Preserve Level 2 copypage semantics: Relies on the copypage operator as defined in PostScript Level 2 rather than the one in Language Level 3 PostScript. With this option on, a copypage operator in your PostScript file copies the page. Leave it off and the equivalent of a showpage operation runs, except that the graphics state stays uninitialized.

Preserve overprint settings: Keeps any overprint settings present in files headed for PDF conversion. Overprint settings make color by laying one ink over another.

Overprinting default is nonzero overprinting: Stops overprinted objects whose CMYK values are zero from knocking out the CMYK objects sitting under them.

Save Adobe PDF settings inside PDF file: Tucks the settings file (.joboptions) that built the PDF inside it as an attachment. (To see that settings file, choose View > Show/Hide > Navigation Panes > Attachments in Acrobat.)

Save original JPEG images in PDF if possible: Handles already-compressed JPEG images (those compressed via DCT encoding) without putting them through compression again. Leaving it off speeds things up, since only decompression rather than recompression takes place.

Save Portable Job Ticket inside PDF file: Holds a PostScript job ticket inside a PDF. Job tickets describe the PostScript file and may serve later in a workflow or when the PDF is printed.

Use Prologue.ps and Epilogue.ps: Ships a prologue and an epilogue file with every job. Through these files you can drop in custom PostScript code set to fire as each converted job begins or ends.

Sample Prologue.ps and Epilogue.ps files are located in Windows 11 (64-bit), Windows 10 version 1810 or later (32-bit and 64-bit), Windows 8, 8.1 (32-bit and 64-bit)†, Windows 7 SP1 (32-bit and 64-bit), or Windows Server - 2008 R2 (64 bit), 2012 (64 bit), 2012 R2 (64 bit)†, 2016 (64 bit), or 2019 (64 bit) /Users/[Username]/AppData/Roaming/Adobe/Adobe PDF/Distiller/Data or (Mac OS)/Library/Application Support/Adobe/Adobe PDF/Distiller/Data.

Within Windows Explorer (Windows 7 and later), the Application Data folder usually stays hidden; to reveal it, choose View> Show, and select Hidden Items. Alternatively, type the path straight into the Address text box.

Note

In Acrobat Standard, Distiller runs prologue and epilogue files only when both are present and sitting in the right place. The pair has to be used together.

In Acrobat Pro, Distiller runs prologue and epilogue files only when both are present and properly located. The pair has to be used together. Should the prologue and epilogue files reside at the same level as a watched folder's in and out folders, they take the place of the ones in the Distiller folder.
