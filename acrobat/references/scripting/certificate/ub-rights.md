# ubRights

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 7.0 | No | No | All | Rights object | R |

Returned as a generic Rights object, this lists which application rights the certificate is able to switch on.

Rights Object

These are the properties carried by a Rights object.

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| mode | String | R | The candidate values are:<br><br>Evaluation: rights this certificate turns on for the document hold good for however long the certificate stays valid.<br><br>Production: rights this certificate turns on for the document hold good permanently.<br><br>Adobe's PDF viewer makes no use of this value at present. |
| rights | Array of Strings | R | A string array naming the application rights this certificate is able to switch on. The candidate values are:<br><br>FormFillInAndSave: permission to complete forms — signature fields aside — and store the edited file.<br><br>FormImportExport: permission to bring form data in and send it out.<br><br>FormAddDelete: permission to insert or remove a form field.<br><br>SubmitStandalone: permission to submit a document when no browser is involved.<br><br>SpawnTemplate: permission to spawn page templates.<br><br>Signing: permission to sign form fields that already exist in a document.<br><br>AnnotModify: permission to author, remove, and edit comments.<br><br>AnnotImportExport: permission to bring annotations in and send them out.<br><br>BarcodePlaintext: permission to render a form field's look as a plain-text barcode.<br><br>AnnotOnline: lets commenting happen online. Permits sending any of the document's annotations up to a server and pulling annotations back down from one. It does not permit folding those annotations into the document.<br><br>FormOnline: switches on forms-oriented online channels like SOAP or Active Data Object.<br><br>EFModify: permission to author, remove, edit, and import named embedded files. File attachment annotations fall outside its scope. |
