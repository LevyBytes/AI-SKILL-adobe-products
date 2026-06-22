# Protect With Passwords, Encrypt With Certificates

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Protect documents; Password security overview; Add passwords to PDFs; Remove passwords from PDFs; Encrypt PDFs with passwords; Restrict PDF editing; Restrict printing, editing, and copying PDFs; Regain access to locked PDFs; PDF security options; Encrypt PDFs with certificates; Change encryption settings; Import certificates overview; Import certificates from digital signatures in PDFs; Import certificates from emails; Import certificates from the Windows Certificate Store; Verify certificate information; Delete trusted certificates.

## Protect documents

### Protect with passwords

Password security overview

Add passwords to PDFs

Remove passwords from PDFs

Encrypt PDFs with passwords

Restrict PDF editing

Restrict printing, editing, and copying PDFs

Regain access to locked PDFs

PDF security options

### Encrypt with certificates

Encrypt PDFs with certificates

Change encryption settings

Import certificates overview

Import certificates from digital signatures in PDFs

Import certificates from emails

Import certificates from the Windows Certificate Store

Verify certificate information

Delete trusted certificates

### Manage digital IDs

Digital ID overview

Digital ID protection

Create self-signed digital IDs

Set a default digital ID

Register digital IDs

Delete digital IDs

Manage digital ID passwords

### Redact PDFs

About redacting and sanitizing PDFs in Acrobat Pro

Types of redactable data

Redact sensitive content in Acrobat Pro

Search and redact text in Acrobat Pro

Text redaction properties in Acrobat Pro

Redact images in PDFs

Change redaction appearance in Acrobat Pro

Sanitize PDFs in Acrobat Pro

Apply multiple codes to a redaction in Acrobat Pro

Create redaction codes and code sets in Acrobat Pro

Edit redaction codes and code sets in Acrobat Pro

### Use protected view

Protected View and Protected Mode overview

Enable or disable protected view

Bypass protected view restrictions

### Mitigate security risks

Acrobat and PDF content security overview

Security warnings in PDFs

Security warning triggers

Respond to security warnings

Allow or block links to other websites

Restrict access to JavaScript APIs

Allow attachments to start applications

Block or allow file attachments

Reset attachment permissions

### Manage security policies

Security policies overview

Server-based security policies overview

Protect PDFs with password security policies

Create certificate security policies

Create file attachment security policies

Apply security policies to Outlook attachments

Copy, edit, or delete security policies

Revoke policy-protected PDFs

Export security settings

### Use enhanced security

Enable enhanced security

Turn on sandbox protection

Specify privileged locations for trusted content

Ways to allow trusted content with enhanced security

## Password security overview

### Get to know the kinds of password security Adobe Acrobat provides and the way they keep your PDF documents safe.

Sensitive or confidential material inside a PDF often needs to be kept away from people who shouldn't see it. Acrobat gives you passwords for locking down your PDFs. Once you grasp what each kind of password protection does, you can manage who reaches your documents and clamp down on particular actions, preserving both integrity and confidentiality.

### Types of passwords

Two kinds of password protection are available for PDF files in Acrobat Pro:

- Document Open Password: Forces anyone to type a password before the PDF will open and display, locking down who can reach its contents.
- Permissions Password: Lets you lock down specific PDF capabilities, including printing, editing, content copying, and adding comments.

### Benefits of using passwords

Several upsides come with locking PDFs behind passwords in Adobe Acrobat:

- Keep sensitive material out of unauthorized hands.
- Govern the ways recipients are able to work with your document.
- Stop finalized documents from being altered without permission.
- Layer on extra protection for files you treat as confidential.

### Best practices for using passwords

To get the most out of PDF security, apply these recommended practices:

- Build strong, one-of-a-kind passwords that mix uppercase with lowercase letters, numbers, and special characters, steering clear of easy guesses like names or birthdates.
- Keep from recycling the same password across several documents, which lowers the chance of unauthorized access.
- Keep passwords inside a password manager rather than jotting them down or emailing them around.
- For sensitive files, apply both a Document Open Password and a Permissions Password so you govern access and curb actions such as editing or printing.
- Look over the permissions settings so that only the features that are genuinely needed stay enabled for your recipients.
- Refresh passwords on a regular basis when they protect long-term documents or ones opened often, which keeps security tighter.
- Hand passwords to recipients over secure channels so they can't be intercepted or abused.

## Add passwords to PDFs

### How to lock a PDF behind a password so that opening, editing, printing, or copying it is limited to the people you choose.

Choose All tools > Protect a PDF.

Over in the left pane, choose Protect with password.

When the dialog box appears, decide whether the password should cover Viewing or Editing.

Through Advanced options you can lock the PDF using either a password or a certificate.

Through Advanced options you can lock the PDF using either a password or a certificate.

Key your password into both password fields, entering it a second time to confirm.

Choose Apply.

## Remove passwords from PDFs

### How to strip password protection off your PDF documents in Adobe Acrobat so everyone can get in.

Choose All tools > Protect a PDF.

Over in the left pane, choose Set security properties beneath ADVANCED PROPERTIES.

When the window appears, open the Security tab, then choose Change Settings.

Clear whichever security options you no longer want:

- Clearing Require a password to open the document drops the document open password.
- Clearing Restrict editing and printing of the document drops the permissions password.

Enter the permission password should you be asked for it.

Choose OK to dismiss the dialog box.

Choose OK to lock in the changes.

Save the PDF so the revised password settings take hold.

## Encrypt PDFs with passwords

### How to lock your PDF files behind passwords with Adobe Acrobat, limiting who gets in and curbing what people can do with the document.

### Add a password to a PDF

Choose All tools > Protect a PDF.

Over in the left panel, choose Encrypt with Password beneath ADVANCED OPTIONS.

When the dialog box appears, choose Yes.

Choose Require a password to open the document.

Key a password into the Document Open Password field and choose OK.

Key the password a second time in the confirmation dialog box and choose OK.

Read over the security message and choose OK.

Save the PDF so the changes take hold.

### Restrict printing, editing, and copying

Choose All tools > Protect a PDF.

Over in the left panel, choose Encrypt with Password beneath ADVANCED OPTIONS.

When the dialog box appears, choose Yes.

Beneath Permissions, switch on whichever of these changes you want to permit:

- Printing Allowed: Lets the document print at either low or high resolution.
- Changes Allowed: Lets users insert, delete, or rotate Pages, fill in form fields, or pull out pages.
- Enable copying of text, images and other content: Lets PDF content be copied.
- Enable text access for screen reader devices for the visually impaired: Lets screen reader devices read the PDF aloud.

Key the permission password into the Change Permission Password field and choose OK.

Read over the security message and choose OK.

Key the permission password a second time and choose OK.

Save the PDF so the changes take hold.

## Restrict PDF editing

### How to keep your PDF documents from being altered by using password security in Adobe Acrobat.

Choose All tools > Protect a PDF.

Over in the left pane, choose Protect with password.

When the dialog box appears, choose Editing.

Key your password into both password fields, entering it a second time to confirm.

How robust your password is — weak, medium, or strong — is reflected by the password strength indicator.

How robust your password is — weak, medium, or strong — is reflected by the password strength indicator.

Choose Apply.

## Restrict printing, editing, and copying PDFs

### How to keep users from altering your PDF by using Adobe Acrobat.

Choose All tools > Protect a PDF.

Over in the left pane, choose Encrypt with Password, then choose Yes in the confirmation dialog box.

Beneath Permissions, choose Restrict editing and printing of the document.

Key a password into the Change Permissions Password field.

How robust your password is — weak, medium, or strong — is reflected by the password strength indicator.

How robust your password is — weak, medium, or strong — is reflected by the password strength indicator.

Out of the Printing Allowed dropdown menu, pick whichever option fits:

- None: Blocks the document from printing at all.
- Low Resolution: Caps printed output at 150 dpi.
- High Resolution: Places no ceiling on the print resolution.

Out of the Changes Allowed dropdown menu, pick what users are allowed to alter:

- None
- Inserting, deleting, and rotating pages
- Filling form fields and signing
- Commenting, filling forms, and signing
- Any except extracting pages

Switch on any of the extra options you need:

- Enable copying of text, images, and other content
- Enable text access for screen reader devices

Choose OK. When the dialog box appears, key the permission password again and then choose OK.

## Regain access to locked PDFs

### How to recover editing rights for PDFs in Adobe Acrobat.

Lost the permissions password that locks down certain features on a PDF you own? As long as the file is yours, you can restore full editing by re-printing it through the Adobe PDF printer.

Launch the PDF inside Acrobat.

From the global bar, select Print this file

Within the Print dialog box, choose Adobe PDF as the Printer.

Select Print.

A follow-up dialog box appears: enter a name, pick a destination folder, then select Save.

## PDF security options

### A closer look at the security choices Adobe Acrobat offers for keeping PDF documents protected.

Who gets to open, modify, print, or copy material out of your PDFs is something the security options in Acrobat let you decide. Putting these protections in place keeps confidential material out of the wrong hands and preserves the document's integrity.

### Types of PDF security options

Several routes to lock down a PDF are built into Acrobat Pro:

- Password Security: Limits who can open the file by requiring a password.
- Certificate Security: Relies on digital certificates to handle encryption and confirm signatures.
- Adobe Experience Manager Forms Server (Document Security): Enforces security policies managed on a server.
- FIPS Mode: Keeps you aligned with the Federal Information Processing Standard.

### Password security options

Two distinct passwords are available to you when locking down a PDF with password security in Acrobat:

- Document Open Password: Needed before anyone can open the PDF.
- Permissions Password: Needed to alter the security configuration or to carry out restricted operations like printing and editing.

### Certificate security

For protecting confidential PDFs, Acrobat includes a strong certificate-security feature. Compared with plain password protection, it brings a number of benefits:

- Locks down documents so only chosen recipients can read them.
- Hands out distinct access privileges to separate people or groups.
- Lets the author be alerted whenever someone opens the PDF.

### Security policies

To keep settings uniform across many PDFs, Acrobat lets you build security policies you can reuse. They come in two forms:

- User Policies: Built and put to use by an individual on their own.
- Organizational Policies: Set up by administrators and held on Adobe Experience Manager Forms Server (Document Security).

### Additional security options

Beyond the basics, Acrobat Pro ships with extra protective tools for your PDFs:

- Redaction: Strips sensitive material out of PDFs for good.
- Sanitization: Clears hidden data and metadata away from documents.
- Protected Mode: Uses sandboxing to stop harmful code from running.
- Enhanced Security: Governs whether outside links and multimedia content can be reached.

## Encrypt PDFs with certificates

### How to lock a PDF's contents behind a certificate in Adobe Acrobat so that only the people you intend can read it.

Wrapping a PDF in certificate encryption both shields what's inside and vouches for who sent it by way of digital signatures. Access is limited to the recipients you name, and you can hand out varied permission tiers—say, one group permitted to fill and sign forms while another is cleared to edit pages. You can pull certificates from trusted identities, from files, off an LDAP server, or out of the Windows certificate store. Be sure to add your own certificate every time so you keep your own access to the file.

Tip

Where you can, lean on certificates that come from third-party digital IDs to encrypt documents. Should such a certificate go missing or be stolen, the authority that issued it can hand you a replacement. Delete a self-signed digital ID, though, and every PDF encrypted with that ID's certificate is locked away permanently.

With the target PDF open, head to All tools > Protect a PDF > Encrypt with Certificate.

At the prompt, confirm the security change by selecting Yes.

When the Certificate Security Settings dialog box opens, choose which part of the document to lock down.

Decide how much of the PDF gets encrypted—everything, everything but the metadata, or attachments alone—so document protection stays under your control.

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

## Change encryption settings

### How to adjust a PDF document's encryption configuration inside Adobe Acrobat.

With the encrypted PDF open, navigate to All tools > Protect a PDF > Set security properties.

Once the Document Properties dialog box appears, switch to its Security tab.

Select Change Settings.

Carry out whichever of these steps you need:

- Want a different set of document components encrypted? Choose that option.
- To swap the Encryption Algorithm, pick it from the menu.

Adjust recipient permissions however you need:

- To inspect a trusted identity, highlight the recipient and then select Details.
- To drop recipients, highlight one or more of them, then select Remove. Hold on to your own certificate unless you no longer want access through it.
- To revise what recipients may do, highlight one or more of them and select Permissions.

Handle certificate recipients and dial in each one's permissions as you roll out security policies on a PDF.

Handle certificate recipients and dial in each one's permissions as you roll out security policies on a PDF.

Move forward by selecting Next, followed by Finish.

To commit everything, select OK; this dismisses the Document Properties dialog.

### Remove encryption settings

With the encrypted PDF open, go to All tools > Protect a PDF > Remove security.

Supply the permissions password when Acrobat asks for it.

Don't have the password? Reach out to whoever authored the PDF.

## Import certificates overview

### A primer on bringing in and handling digital certificates so you can establish trusted identities and lock down document workflows.

### Overview

Within secure digital workflows, certificates do the heavy lifting of confirming identities and proving that documents are authentic. Plenty of organizations keep their certificates on directory servers, which means people can search them and grow their roster of trusted identities.

Got a certificate from someone—a coworker, perhaps, or a business partner? You can drop it into your trusted identity list. From there you're able to confirm digital signatures and certified documents tied to that certificate.

### Trust settings

Your trust settings can be set up to extend automatic trust to:

- Every digital signature produced with a particular certificate.
- Every certified document that certificate has issued.

Doing so makes secure communication and the validation of documents go more smoothly.

### Importing from certificate stores

You can also bring certificates in from operating-system certificate stores like the Windows Certificate Store. What you'll usually find in those stores are certificates handed out by an assortment of Certification Authorities (CAs) that enjoy broad recognition and trust.

### Third-party security providers

A number of organizations turn to third-party security providers to validate identities. Such providers might rely on proprietary techniques or hook straight into applications such as Adobe Acrobat. Working with one of them? Consult that provider's own documentation for help with managing certificates and configuring trust settings.

## Import certificates from digital signatures in PDFs

### How to safely pull a certificate out of a signed PDF and add it to your trusted identities in Adobe Acrobat.

Bringing in trusted certificates is what lets you confirm that the signed documents reaching you are genuine. Hold off on importing a certificate until you've checked its fingerprint and know the source is one you trust.

Bring up the PDF that carries the digital signature.

Pull up the Signature Panel, then click the signature itself.

Within the Options menu, pick Show Signature Properties.

Once the Signature Properties dialog box is showing, click Show Signer's Certificate.

When the certificate is self-signed, get in touch with whoever created it to verify that the fingerprint values shown on the Details tab line up. Extend trust only once those values agree.

Open the Trust tab, where you'll find Add to Trusted Certificate.

Put a certificate on the trusted list by selecting Add to Trusted Certificate.

Getting the certificate onto the trusted roster is a matter of clicking Add to Trusted Certificate.

Select OK.

When the Import Contact Settings dialog box comes up, set your trust options there and confirm with OK.

## Import certificates from emails

### How to safely bring in digital certificates that someone has emailed to you within Adobe Acrobat.

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

## Import certificates from the Windows Certificate Store

### How to set Adobe Acrobat up so it can search the Windows certificate store and import certificates from it.

Acrobat can be configured to hunt down digital certificates in the Windows Certificate Store and import them. That lets the certificates already sitting in Windows be used straight from Acrobat to sign and encrypt PDF documents securely. As a security precaution, hold off on pulling certificates out of the Windows store unless your workflow genuinely calls for it.

### Configure Acrobat for Windows certificates

Head to Menu > Preferences > Signatures.

Within the Verification section, click More.

The Windows Integration area offers these options—pick whichever ones suit your needs:

- Validating Signatures: Pulls in Windows Certificate Store certificates as it checks digital signatures.
- Validating Certified Documents: Draws on Windows Certificate Store certificates while checking certified documents.

Pick the option you want so that every root certificate in the Windows Certificate Store is trusted.

Pick the option you want so that every root certificate in the Windows Certificate Store is trusted.

Select OK.

### Import a specific certificate

Over in Windows Explorer, give the certificate file (pfx or.p12) a right-click and choose Install PFX.

Walk through the Certificate Import Wizard to place the certificate in the Windows store.

Should you be asked to validate the certificate, jot down its MD5 and SHA1 fingerprint values. Before extending trust, reach the certificate's originator to confirm those values check out.

Select OK.

Note

Consult the Microsoft Help for instructions on importing a certificate into the certificate store.

## Verify certificate information

### Inspecting a digital certificate's particulars within Adobe Acrobat so you can confirm it is valid and worth trusting.

A certificate carries several pieces of identifying data: who holds it, how long it stays valid, what it may be used for, its serial number, and the public-key algorithm behind it. Revocation status is also worth checking, since a certificate can be pulled when its holder leaves an organization or when a security problem surfaces.

Note

When a certificate's origin is in doubt, reach out to whoever owns it and confirm the fingerprint values (the MD5 and SHA1 digests) directly. The Digital Signatures User Guide covers certificate verification in greater depth.

### Verify your own certificate

Open Menu (Windows) or File (macOS) > Preferences > Signatures.

Within the Identities & Trusted Certificates section, choose More.

Pick your digital ID, then choose Certificate Details.

Choosing Certificate Details brings up the full details of the certificate.

Choosing Certificate Details brings up the full details of the certificate.

Look over the certificate data that appears.

### Verify certificates for contacts

Bring up the Signature Panel and pick whichever signature needs checking.

From the Options menu, choose Show Signature Properties.

Choose Show Signer's Certificate to bring the certificate details into view.

## Delete trusted certificates

### Taking certificates off the roster of trusted identities you keep inside Adobe Acrobat.

Head to Menu > Preferences > Signatures.

Beneath Identities & Trusted Certificates, choose More.

Highlight whichever certificate you want gone and choose Remove ID.

Highlight whichever certificate you want gone and choose Remove ID.

Highlight whichever certificate you want gone and choose Remove ID.

When the confirmation appears, choose OK to go ahead with the deletion.

Choose Close to leave the preferences window.

That certificate no longer appears among your trusted identities in Acrobat.
