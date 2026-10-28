# Advanced panel options

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


Process DSC comments: Keeps the DSC information that came from a PostScript file.

Log DSC warnings: Shows warning messages about troublesome DSC comments as processing runs and records them in a log file.

Preserve EPS information from DSC: Holds onto an EPS file's details, such as its originating application and creation date.

Preserve OPI comments: Holds the data required to replace a For Placement Only (FPO) image or comment with its high-resolution counterpart, which lives on servers running Open Prepress Interface (OPI) versions 1.3 and 2.0. Full details are in the OPI 2.0 specification at https://www.pdfa.org/norm-refs/5660_`OPI_2_0`.pdf (PDF, English only).

Preserve document information from DSC: Tucks the document's properties — title, plus creation date and time — into the PDF.

Resize page and center artwork for EPS files: Puts an EPS image at the center and crops the page down so it sits snugly around that image. Switch it off and the page's size and centering derive instead from two reference points: the upper left corner of the upper-left object together with the lower right corner of the lower-right one. Only jobs built from a single EPS file get this treatment.
