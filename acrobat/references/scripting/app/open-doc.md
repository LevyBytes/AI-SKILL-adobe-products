# app.openDoc

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Opens the PDF document named and returns its Doc object. A script can use this object to invoke methods or to read and write properties on the document just opened.

Note

While a batch sequence runs, a modal dialog box stays open to keep the user from interfering during processing. For that reason, this method cannot be run through a batch sequence.

Note

A doc open script cannot call the app.openDoc API. The script that runs on the doc open action goes by the name doc open script. Under those circumstances Viewer throws a NotAllowedError exception, which escript hands on to the user. From other triggers, though — a page open action, for one — the call succeeds.

Opening an HTML document with this method throws an exception and gives back an invalid Doc object. Wrap app.openDoc in a try/catch to trap that exception. See example 2 below.

Parameters

| Parameter | Description |
| --- | --- |
| cPath | A device-independent path to the document to be opened. When oDoc is supplied, the path may be given relative to it. The target document has to be reachable in the default file system. - With cFS set to "CHTTP", escape the cPath string, perhaps via the core JavaScript global function encodeURI. See Example 5 (Acrobat 7.0) below. |
| oDoc | (optional) A Doc object to use as a base to resolve a relative cPath. Must be accessible in the default file system. |
| cFS | (optional, Acrobat 7.0) A string naming the source file system. Two values work: "" (the empty string and the default), which stands for the default file system, and "CHTTP". This parameter matters only where the web server supports WebDAV. |
| bHidden | (optional, Acrobat 7.0) A Boolean that, when true, opens the PDF file with its window hidden. false is the default. |
| bUseConv | (optional, Acrobat 7.0) A Boolean used when cPath points at a non-PDF file. When true, the method attempts to convert that non-PDF file into a PDF document. false is the default. - (Acrobat 7.0) Setting bUseConv to true is possible only during a console or batch event. See also Privileged context. |
| cDest | (optional, Acrobat 8.0) The name of the destination within a document. Supplying it forces the open at a named destination inside the PDF document. For specifics on named destinations and creating them, see the PDF Reference. |

Returns

A Doc object or null :

Under Acrobat 5.0, a Doc object comes back from this method.

Under Acrobat 5.0.5, the Doc object comes back unless the target document's disclosed property is not true, in which case null is returned.

Starting with the Acrobat 5.0.5 Accessibility and Forms Patch and carrying through Acrobat 6.0 and later, openDoc acts like this:

Within a batch, console, or menu event, openDoc disregards the disclosed property and returns the Doc object of the file that cPath names.

Within any other event, openDoc returns the Doc when disclosed is true, and otherwise null.

Related references:

- [Opening documents with app.openDoc](open-document-examples.md)
