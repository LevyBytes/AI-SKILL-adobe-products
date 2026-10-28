# Import certificates from emails

How to safely bring in digital certificates that someone has emailed to you within Adobe Acrobat.

A contact who emails their digital certificate sends it along as an attachment. By importing it, you fold the sender into your trusted identities, which is what unlocks secure document workflows.

Launch the certificate attachment that arrived with the email.

Inside the dialog box that pops up, choose Set Contact Trust.

Choosing Set Contact Trust files the sender's certificate among your trusted identities so it can be used for secure validation and encryption.

Picking Set Contact Trust lands that sender's certificate in your trusted identities, ready to back up encryption and validation tasks.

Highlight the contact, then hit Import.

Should a password be requested, type it in and move on with Next.

Hit OK to bring up the import details, and hit OK a second time afterward.

Point to where the certificate should be saved, then proceed with Next.

Select Finish.

In the Trust settings dialog, select the appropriate options:

- Reserve Use this certificate as a trusted root for the rare case where it's needed to validate a digital signature. Because it switches off revocation checking, treat it carefully.
  - Dynamic content: Opens the door to outside files and links.
  - Embedded high privilege JavaScript: Lets scripts baked into the file execute.
  - Privileged system operations: Clears the way for things like printing, networking, and working with files.

That certificate now sits in your trusted identities list. From here you can rely on it to encrypt documents meant for that contact or to confirm their digital signatures.
