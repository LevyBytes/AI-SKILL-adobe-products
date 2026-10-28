# Doc.submitForm

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Sends the form off to a URL you specify. Calling it requires that you're running inside a web browser, or that the Acrobat Web Capture plug-in is installed. (A URL on the “mailto” scheme will still go through outside a web browser, so long as the SendMail plug-in is around.) From Adobe Reader 6.0 on, a web browser is no longer a prerequisite for this call.

Note

(Acrobat 6.0) Which parameters you pass brings restrictions on how this method may be used. Look to the notes folded into the parameter descriptions.

Secure connections over the https protocol are supported.

Parameters

| Parameter | Description |
| --- | --- |
| cURL | The URL submitted to. When the submission yields FDF or XFDF (meaning cSubmitAs is “FDF” or “XFDF”) and the document is shown inside a browser window, this string has to finish with #FDF. |
| bFDF | (optional) Pass true (the default) and form data goes out as FDF; pass false and it goes out as URL-encoded HTML. - This option is deprecated; reach for cSubmitAs instead. |
| bEmpty | (optional) Pass true to submit every field, valueless ones included. Pass false (the default) to leave out fields that hold no value at the moment. - For an XDP, XML, or XFD submission (set via the cSubmitAs parameter below), this flag stops mattering: everything goes through, blank fields and all. See aFields. |
| aFields | (optional) Either an array of field names to submit or a string carrying a single field name: - When provided, only the named fields are submitted, save for any bEmpty rules out. - When omitted or null, every field is submitted, save for any bEmpty rules out. - When an empty array, no fields go. A submitted FDF file may yet carry data if bAnnotations is true. Non-terminal field names are allowed, letting you export a whole subtree of fields. - For an XDP, XML, or XFD submission (set via the cSubmitAs parameter), this flag stops mattering: everything goes through, blank fields and all. See bEmpty. |
| bGet | <br>(optional, Acrobat 4.0) Pass true to submit by the HTTP GET method. Pass false (the default) for a POST. GET is permitted only when Acrobat Web Capture handles the submission (the browser interface backs POST alone) and only when the data travels as HTML (that is, cSubmitAs is HTML). |
| bAnnotations | (optional, Acrobat 5.0) Pass true and annotations ride along in the submitted FDF or XML file. Defaults to false. Relevant only when cSubmitAs is FDF or XFDF. |
| bXML | (optional, Acrobat 5.0) Set true for an XML submission; false is the default. - Now deprecated — turn to cSubmitAs in its place. |
| bIncrChanges | (optional, Acrobat 5.0) Pass true to fold the PDF document's incremental changes into the submitted FDF file. Defaults to false. Has effect for cSubmitAs FDF alone, and is absent from Adobe Reader. |
| bPDF | (optional, Acrobat 5.0) Set true to send the whole PDF document; false is the default. When true, every other parameter but cURL is disregarded. Not available in Adobe Reader. - Now deprecated — turn to cSubmitAs in its place. |
| bCanonical | (optional, Acrobat 5.0) Pass true to render any submitted dates in the standard format (namely D:YYYYMMDDHHmmSSOHH'mm' ; see the PDF Reference ). Defaults to false. |
| bExclNonUserAnnots | (optional, Acrobat 5.0) Pass true to drop any annotations the current user doesn't own. Defaults to false. |
| bExclFKey | (optional, Acrobat 5.0) Pass true to drop the F entry. Defaults to false. |
| cPassword | (optional, Acrobat 5.0) The password used to derive the encryption key, should the FDF file need encrypting ahead of submission. Hand in the value true (no quotes) to reuse whatever password the user already typed (this Acrobat session) for sending or receiving an encrypted FDF file. With no password entered yet, the user gets prompted for one. However the password arrives — passed in or asked of the user — this new password is held for the rest of this Acrobat session for later outgoing or incoming encrypted FDF files. Applies only when cSubmitAs is FDF.<br><br>Caution<br><br>From Acrobat 8.0 on, password-encrypted FDF files can no longer be created. Supply this parameter, and any form that tries handing off a password-encrypted FDF raises an ESErrorInvalidArgs exception; the submission is blocked from going through. |
| bEmbedForm | (optional, Acrobat 6.0) Pass true and the call tucks the whole form supplying the data into the FDF file. Applies only when cSubmitAs is FDF. |
| oJavaScript | (optional, Acrobat 6.0) Lets you carry Before, After, and Doc scripts into a submitted FDF file. When present, the value converts straight into a matching CosObj and serves as the JavaScript attribute inside the FDF file. For instance:<br><br>oJavaScript: { Before: 'app.alert("before!")', After: 'app.alert("after")', Doc: [ "MyDocScript1", "myFunc1()", "MyDocScript2", "myFunc2()" ] }\* Only applicable if `cSubmitAs is FDF. ` |
| cSubmitAs | (optional, Acrobat 6.0) This parameter sets the submission format. Values are:<br><br>FDF: (default): Submit as FDF<br><br>XFDF: Submit as XFDF<br><br>HTML: Submit as HTML<br><br>XDP: Submit as XDP<br><br>XML: submit as XML. In Acrobat 7.0, form data is submitted in XML format unless the parameter oXML (new to Acrobat 7.0) contains a valid XMLData object, in which case that is what gets submitted instead.<br><br>XFD: Submit as Adobe Form Client Data File<br><br>PDF: Submit the complete PDF document; all other parameters except cURL are ignored. (Save rights required) The choice of PDF is not available in Adobe Reader, unless the document has save rights. This parameter supersedes the individual format parameters. However, they are considered in the following priority order, from high to low: cSubmitAs, bPDF, bXML, bFDF. |
| bInclNMKey | (optional, Acrobat 6.0) Pass true to take in the NM entry of any annotations. Defaults to false. |
| aPackets | (optional, Acrobat 6.0) An array of strings naming which packets to fold into an XDP submission. Relevant only when cSubmitAs is XDP. The possible strings are:<br><br>config<br><br>datasets<br><br>sourceSet<br><br>stylesheet<br><br>template<br><br>pdf: The PDF should be embedded; if pdf is not included, only a link to the PDF is included in the XDP.<br><br>xfdf: Include annotations in the XDP (since that packet uses XFDF format)<br><br>\*: Every packet ought to be present inside the XDP. For pdf, the out-of-the-box behavior keeps it as a reference. Embedding the actual PDF inside the XDP requires you to name pdf explicitly among the listed packets. - (Save rights required) Listing pdf explicitly while submitting an XDP out of Adobe Reader means the document needs document save rights. Out of the box, the value is: ["datasets", "xfdf"]. |
| cCharset | (optional, Acrobat 6.0) Sets which encoding the submitted values use. Accepted string values are utf-8, utf-16, Shift-JIS, BigFive, GBK, and UHC. When omitted, whatever Acrobat normally does takes over. XML-style formats always go out as utf-8. With other formats, Acrobat picks whichever host encoding suits the submitted values best. An XFDF submission disregards this setting entirely and sticks with utf-8. |
| oXML | (optional, Acrobat 7.0) Relevant only when cSubmitAs is set to XML. Supply an XMLData object here, and that object becomes the submission. |
| cPermID | (optional, Acrobat 7.0) Assigns a permanent ID to the submitted PDF, used when cSubmitAs is PDF or when bEmbedForm is true. That permanent ID lands as the opening element of the docID array (docID[0]). The document currently open is left unchanged. |
| cInstID | (optional, Acrobat 7.0) Assigns an instance ID to the submitted PDF, used when cSubmitAs is PDF or when bEmbedForm is true. That instance ID lands as the second element of the docID array (docID[1]). The document currently open is left unchanged. |
| cUsageRights | (optional, Acrobat 7.0) Attaches extra usage rights to the submitted PDF, used when cSubmitAs is PDF or when bEmbedForm is true. submitFormUsageRights.RMA is the sole acceptable value. The document currently open is left unchanged. |

Related references:

- [Form submission examples](submit-form-examples.md)
