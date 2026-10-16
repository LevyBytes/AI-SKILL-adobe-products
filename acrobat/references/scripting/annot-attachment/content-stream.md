# contentStream

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 11.0 | No | No | All | object | R |

This is a ReadStream that exposes the byte stream of the file attachment, letting your script reach into whatever content the annotAttachment object is holding.

When you try to read the bytes of an embedded file attachment, the call raises a NotAllowedError and fails whenever any one of the conditions listed below holds (extension comparisons ignore letter case):

The extension on the attachment is ".SWF". Granting a trusted .SWF — one running inside Acrobat's Rich Media Annotation or as a PDF Portfolio navigator — access to the raw bytes of other .SWF embedded attachments would open the door for that trusted .SWF to pull in a hostile one.

Note

Should you rely on the Data.MIMEType property to test whether a Data object holds a .SWF file, remember that .SWF files report the MIME type application/x-shockwave-flash.

The extension reads ".GIF", ".JPG", ".JPEG", or ".PNG" yet the opening three bytes carry a .SWF header signature ("FWS" or "CWS"). This guard exists because the very same ActionScriptflash.display.Loader load() method that pulls in GIF, JPEG, and PNG images is equally capable of pulling in a SWF; rename a malicious SWF to one of those image extensions and it could slip through and load.
