# Enhancements to the getDataObjectContents method

When this method tries to reach the bytes of an embedded file attachment meeting any of the conditions below, it fails and raises a NotAllowedError (extension matching ignores letter case throughout):

The extension on the attachment is ".SWF". When a trustworthy .SWF application or module — one running inside Acrobat's Rich Media Annotation or a PDF Portfolio navigator — is granted access to the content bytes of embedded .SWF attachments, that legitimate .SWF could end up pulling in a hostile .SWF.

Note

Should you rely on the Data.MIMEType property to determine whether a Data object stands for a .SWF file, keep in mind that such files report application/x-shockwave-flash as their MIME type.

The attachment carries a ".GIF", ".JPG", ".JPEG", or ".PNG" extension while its opening three content bytes match a .SWF header signature ("FWS" or "CWS"). This restriction exists because the very same ActionScriptflash.display.Loader class load() method used for pulling in GIF, JPEG, and PNG images is equally capable of pulling in a SWF. Rename a malicious SWF to one of those image extensions and it could be loaded.
