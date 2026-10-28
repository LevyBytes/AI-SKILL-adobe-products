# Exporting to Adobe PDF - Create secure PDF documents

Access to an Adobe PDF file can be limited during export. When security restrictions are applied, related tools and menu items appear dimmed.

A PDF can require a user password for opening and a parent password for changing security settings. When any security restriction is added, also set a parent password; without it, anyone who opens the PDF could remove the restrictions. Opening the PDF with a master password temporarily turns off the restrictions. If both passwords are present, either password can open the file.

Note

Compatibility controls encryption strength. Acrobat 4 (PDF 1.3) uses low encryption, 40-bit RC4. Other compatibility choices use high encryption: 128-bit RC4 or AES.

Start with File > Export. Set Save As Type (Windows) or Format (Mac OS) to Adobe PDF. Enter a name and location for the file, then click Save. Click Security Settings. In Passwords, choose the needed password protection:

For Password Required To Open Document, use the Document Open Password text box to enter the password required before the PDF opens.

For Password Required To Change Permissions And Passwords, use the Permissions Password text box to enter the password required before PDF security options can be changed.

Note

The same password cannot be used in both text boxes.

In Permissions, set what users are allowed to do:

No Printing

Blocks users from printing the Adobe PDF file.

No Changing The Document

Blocks form filling and every other edit to the Adobe PDF file.

No Content Copying Or Extraction, Disable Accessibility

Blocks selection of text and graphics.

No Adding Or Changing Comments And Form Fields

Blocks adding or changing notes and form fields when the PDF is opened in Adobe Acrobat or another PDF editor.

Click Save, then click Export.
