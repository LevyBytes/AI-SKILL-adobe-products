# Doc.saveAs

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | Requires save rights |

Writes the file out to the device-independent path named in the mandatory cPath parameter. Web optimization is not applied to the saved file. From Acrobat 6.0 onward, the document may instead be turned into a different file type (something other than PDF) and saved according to whatever cConvID holds.

Note

Execution is restricted to a batch or console event only. See Privileged context. JavaScript events are discussed under the event object.

(Adobe Reader S ): documents carrying Save usage rights can use this method within Adobe Reader.

Parameters

| Parameter | Description |
| --- | --- |
| cPath | The device-independent path the file is written to. - cPath has to be a safe path (see Safe path) and bear an extension that suits the cConvID value. Consult the Values of cConvID and Valid Extensions table further down. When these security requirements go unmet, the method raises a NotAllowedError (see Error object) and fails. |
| cConvID | (optional, Acrobat 6.0) A conversion ID string naming the target conversion file type. The currently supported cConvID values are enumerated by app.fromPDFConverters. Omit cConvID and PDF is assumed. |
| cFS | (optional, Acrobat 7.0) A string naming the source file system. Two are accepted: “” (the empty string) for the default file system, and “CHTTP”. The default file system applies by default. This only matters when the web server supports WebDAV. |
| bCopy | (optional, Acrobat 7.0) A Boolean; pass true to save the PDF as a copy. Defaults to false. |
| bPromptToOverwrite | (optional, Acrobat 7.0) A Boolean; pass true and the user is prompted whenever the destination file is already there. Defaults to false. |

Returns

A successful call returns undefined. Any error throws. As one case, the method raises a NotAllowedError (see Error object) when the user refuses an overwrite.

Note

Before Acrobat 7.0 this method gave back no value at all.

Values of cConvID and Valid Extensions

| cConvID | Valid extensions |
| --- | --- |
| com.adobe.acrobat.eps | eps |
| com.adobe.acrobat.html | html, htm |
| com.adobe.acrobat.jpeg | jpeg, jpg, jpe |
| com.adobe.acrobat.jp2k | jpf, jpx, jp2, j2k, j2c, jpc |
| com.adobe.acrobat.docx | docx |
| com.adobe.acrobat.doc | doc |
| com.callas.preflight.pdfa | pdf |
| com.callas.preflight.pdfe | pdf |
| com.callas.preflight.pdfx | pdf |
| com.adobe.acrobat.png | png |
| com.adobe.acrobat.ps | ps |
| com.adobe.acrobat.rtf | rft |
| com.adobe.acrobat.xlsx | xlsx |
| com.adobe.acrobat.spreadsheet | xml |
| com.adobe.acrobat.accesstext | txt |
| com.adobe.acrobat.plain-text | txt |
| com.adobe.acrobat.tiff | tiff, tif |
| com.adobe.acrobat.xml-1-00 | xml |
| com.adobe.acrobat.pptx (Acrobat Professional only) | pptx |

Deprecated Values of cConvID (as of Acrobat 10)

The IDs below were deprecated at Acrobat 10. They carry no registration, yet — strictly when used with the doc.saveAs JavaScript call — they map internally onto valid, registered conversion IDs. A later Acrobat release will drop support for the deprecated IDs entirely.

| Deprecated cConvID | Equivalent Valid cConvID |
| --- | --- |
| com.adobe.acrobat.html-3-20 | com.adobe.acrobat.html |
| com.adobe.acrobat.htm l- 4-01-css-1-00 | com.adobe.acrobat.html |

Note

Whenever the conversion ID maps to jpeg, jp2k, png, or tiff, each page lands in its own file, named by tacking "_Page_#" onto the basename taken from the supplied file name. So with cPath set to "/C/temp/mySaveAsDocs/myJPGs.jpg", you'd get myJPGs_Page_1.jpg, myJPGs_Page_2.jpg, and onward.

Related references:

- [Saving and converting document examples](save-document-examples.md)
