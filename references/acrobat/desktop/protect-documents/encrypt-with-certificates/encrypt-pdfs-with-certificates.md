# Encrypt PDFs with certificates

How to lock a PDF's contents behind a certificate in Adobe Acrobat so that only the people you intend can read it.

Wrapping a PDF in certificate encryption both shields what's inside and vouches for who sent it by way of digital signatures. Access is limited to the recipients you name, and you can hand out varied permission tiers—say, one group permitted to fill and sign forms while another is cleared to edit pages. You can pull certificates from trusted identities, from files, off an LDAP server, or out of the Windows certificate store. Be sure to add your own certificate every time so you keep your own access to the file.

Tip

Where you can, lean on certificates that come from third-party digital IDs to encrypt documents. Should such a certificate go missing or be stolen, the authority that issued it can hand you a replacement. Delete a self-signed digital ID, though, and every PDF encrypted with that ID's certificate is locked away permanently.

With the target PDF open, head to All tools > Protect a PDF > Encrypt with Certificate.

At the prompt, confirm the security change by selecting Yes.

When the Certificate Security Settings dialog box opens, choose which part of the document to lock down.

Decide how much of the PDF gets encrypted—everything, everything but the metadata, or attachments alone—so document protection stays under your control.

Pick your encryption strength from the Encryption Algorithm dropdown menu:

- 128-bit AES: Works for anyone on Acrobat or Acrobat Reader version 7 and up
- 256-bit AES: Requires that recipients run Acrobat or Acrobat Reader version 9 (or newer)

Select Next.

Build the list of people who may open the encrypted PDF:

- Hit Search when you need to find identities on a directory server or among the trusted identities you've already saved.
- Use Browse to point to a file holding the certificates of trusted identities.

Want to cap what recipients may print or edit? Highlight them in the list and select Permissions.

Confirm with OK, then move ahead via Next to look over everything you've configured.

Wrap up by selecting Finish, which puts the encryption in place.

Whenever a recipient opens the PDF, whatever security settings you chose for that individual take effect.
