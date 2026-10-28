PDF password security distinguishes opening a document from changing its permissions:

| Password | Purpose |
| --- | --- |
| Document-open password, also called user password | Requires a password to open the encrypted document. |
| Permissions password, also called owner password | Controls changes to printing, editing and copying permissions in conforming readers; it can also open the document. |

A PDF with only an owner password can open without prompting. When both passwords are set, either opens the file, but the owner password controls changes to restricted features. Adobe products enforce these restrictions; third-party readers that do not implement them may allow restricted actions. Permissions are not an assurance that every recipient's software will enforce them.

The [Protect PDF contract](https://developer.adobe.com/document-services/docs/apis/#operation/pdfoperations.protectpdf) defines how to set passwords and permissions. Before processing an existing PDF, [inspect its security fields](detecting-pdf-permissions.md), [check the intended operation's prerequisites](the-effect-of-pdf-permissions-on-adobe-pdf-services-api.md), and use [Remove Protection](user-password-protection.md) only with the owner's authorization and the required password.
