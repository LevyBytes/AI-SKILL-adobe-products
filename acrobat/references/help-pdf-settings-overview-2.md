# Pdf Settings Overview (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Advanced panel options

Process DSC comments: Keeps the DSC information that came from a PostScript file.

Log DSC warnings: Shows warning messages about troublesome DSC comments as processing runs and records them in a log file.

Preserve EPS information from DSC: Holds onto an EPS file's details, such as its originating application and creation date.

Preserve OPI comments: Holds the data required to replace a For Placement Only (FPO) image or comment with its high-resolution counterpart, which lives on servers running Open Prepress Interface (OPI) versions 1.3 and 2.0. Full details are in the OPI 2.0 specification at https://www.pdfa.org/norm-refs/5660_`OPI_2_0`.pdf (PDF, English only).

Preserve document information from DSC: Tucks the document's properties — title, plus creation date and time — into the PDF.

Resize page and center artwork for EPS files: Puts an EPS image at the center and crops the page down so it sits snugly around that image. Switch it off and the page's size and centering derive instead from two reference points: the upper left corner of the upper-left object together with the lower right corner of the lower-right one. Only jobs built from a single EPS file get this treatment.

## Standards panel options

Standards options let you confirm that the content of the PostScript file satisfies the PDF/X1-a, PDF/X-3, or PDF/A criteria before the PDF gets made. When the target is PDF/X compliance, the Standards panel also lets you require the PostScript file to clear further criteria. Which options appear depends on the standard you pick. A compliant PDF can also be promoted to a PDF/X file later by way of Acrobat's Preflight feature.

PDF/X-compliant: Conforms to PDF/X, the standard built for high-resolution print production.

Note

Files made through PDFMaker — the route that converts Microsoft Word and other application documents into PDF — won't come out PDF/X-compliant.

PDF/A-compliant: Meets the PDF/A standard for archival documents.

Note

When you set up a watched folder to make PDF/A-compliant files in Acrobat Pro, leave security off the folder. Encryption is not allowed under the PDF/A standard.

Compliance Standard: Turns out a report stating whether the file meets the standard you chose and, if it falls short, what went wrong. The .log file shows up at the bottom of the dialog box.

Note

PDFs that satisfied both the PDF/X-1a and PDF/X-3 standards in Acrobat 6.0 default to PDF/X-1a in Acrobat XI.

When not compliant: Decides whether the PDF gets created when the PostScript file fails to meet the standard's requirements.

Continue: Builds a PDF even when the PostScript file misses the standard's requirements, recording those problems in the report.

Cancel job: Builds a PDF only when the PostScript file clears the standard's requirements and is otherwise valid.

Report as error (Acrobat Pro): Marks the PostScript file noncompliant if one of the reporting options is on and any page is missing a trim box or art box.

Set TrimBox to MediaBox with offsets (Acrobat Pro): Works out trim box values from the offsets of each page's media box when neither the trim box nor the art box is given. The trim box always stays the same size as the surrounding media box or smaller.

Set BleedBox to MediaBox (Acrobat Pro): Falls back on the media box values for the bleed box when the bleed box goes unspecified.

Set BleedBox to TrimBox with offsets (Acrobat Pro): Works out bleed box values from the offsets of each page's trim box when the bleed box isn't given. The bleed box always stays the same size as the enclosed trim box or larger. This option draws on the units set on the General panel of the Adobe PDF Settings dialog box.

Output Intent Profile Name (Acrobat Pro): Names the characterized printing condition the document was prepared for, which PDF/X compliance requires. When a document names no output intent profile, Distiller takes the value chosen from this menu. If your workflow expects the document itself to supply the output intent, choose None.

Output Condition Identifier (Acrobat Pro): Names the reference identifier set by the registry of the output intent profile name. For more, click the question mark beside the option.

Output Condition (Acrobat Pro): Spells out the intended printing condition. This entry can help whoever ends up receiving the PDF. For more, click the question mark beside the option.

Registry Name (URL) (Acrobat Pro): Gives the web address where more about the output intent profile can be found. For ICC registry names the URL fills in by itself. The registry name is optional yet advised. For more, click the question mark beside the option.

Trapped (Acrobat Pro): Reports the document's trapping state. PDF/X compliance calls for a value of True or False. When the document leaves the trapped state unset, the value entered here is used. If your workflow expects the document to supply the trapped state, choose Leave undefined.
