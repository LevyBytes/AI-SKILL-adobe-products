# Manage Digital Ids, Redact Pdfs

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Digital ID overview; Digital ID protection; Create self-signed digital IDs; Set a default digital ID; Register digital IDs; Delete digital IDs; Manage digital ID passwords; About redacting and sanitizing PDFs in Acrobat Pro; Types of redactable data; Redact sensitive content in Acrobat Pro; Search and redact text in Acrobat Pro; Text redaction properties in Acrobat Pro; Redact images in PDFs; Change redaction appearance in Acrobat Pro; Sanitize PDFs in Acrobat Pro; Apply multiple codes to a redaction in Acrobat Pro; Create redaction codes and code sets in Acrobat Pro; Edit redaction codes and code sets in Acrobat Pro.

## Digital ID overview

### How Digital IDs let you apply signatures to PDFs and encrypt them within Adobe Acrobat.

Think of a digital ID as the personal signature that authenticates you securely inside Acrobat. With it, you can sign documents in a trustworthy way, confirm who you are, and keep sensitive PDF content guarded. Every digital ID is built from two parts:

- A private key, which stamps your signature onto documents
- A public key, which lets other people confirm that signature

Working as a pair, these keys give Acrobat a dependable way to confirm your identity throughout its workflows.

### Types of digital IDs

Two kinds of digital IDs work in Acrobat:

1. Self-signed Digital IDs: These are the ones you generate directly inside Acrobat. Setup takes only moments, and they suit personal use or in-house business needs. Reach for a self-signed ID whenever you need digital signatures right away or the situation is fairly informal.
2. Certificate Authority (CA) Digital IDs: These come from trusted outside organizations called Certificate Authorities. Because the authority checks who you are before handing one over, they carry stronger identity assurance. For official or legal dealings, government bodies and regulated sectors frequently insist on CA-issued digital IDs.

### Digital ID usage

For these jobs, Acrobat insists that you use a digital ID:

- Applying e-signatures to documents like contracts and legal paperwork
- Certify that no one has altered a PDF
- Distributing confidential PDFs meant only for chosen recipients
- Confirming who you are during official transactions conducted online

### Key benefits

Compared with ordinary e-signatures, digital IDs offer stronger protection along with extras such as:

- Authentication and verification: Confirm who you are and check that documents remain intact
- Compliance: Satisfy regulatory obligations
- Convenience: Put your signature on documents wherever you are and on whatever device

## Digital ID protection

### Learn about adding security to your digital IDs in Adobe Acrobat.

Securing a digital ID keeps anyone from misusing the private key to sign or unlock confidential material without permission. Whenever that private key lives on a hardware token, a smart card, or some other device guarded by a password or PIN, picking a robust password or PIN really matters.

### Best practices for creating passwords

- Make it eight characters at minimum.
- Blend capital and lowercase letters together with digits and special characters.
- Pick something tough for others to guess yet still memorable for you.
- Steer clear of actual dictionary words so the password resists guessing.
- Refresh your password on a regular basis.
- Swritten passwords

For private keys held in P12/PFX files, pair a strong password with sensible timeout settings. On top of that, set every signing key so it demands password authentication, and keep backup copies of whatever keys you rely on for decryption.

How private keys are safeguarded inside the Windows certificate store depends on the particular provider. Reach out to that provider for its backup and protection instructions. Whatever option is strongest for authentication, use it.

### Lost or stolen digital IDs

Should a certificate-authority digital ID go missing or get stolen, stop using the private key, alert the certificate authority without delay, and ask them to revoke your certificate. For a self-issued ID that is lost or stolen, wipe out the private key and warn everyone you handed the matching public key or certificate to, because someone could otherwise abuse your digital signature.

## Create self-signed digital IDs

### Generating a self-signed digital ID inside Adobe Acrobat for those times you must e-sign documents yet have no certificate authority.

When there's no certificate authority involved, a self-signed digital ID fits personal use and in-house business steps nicely. With one, you can sign and encrypt documents so their authenticity and privacy hold up.

### Windows

Open Menu > Preferences.

From the Categories menu pick Signatures, then choose More beneath Identities & Trusted Certificates.

Choose Digital IDs, then click the add digital ID icon.

Choose A new digital ID I want to create now, then choose Next.

Beneath Where would you like to store your self-signed digital ID, pick a storage option.

Fill in your identity details across the relevant fields. Under Key Algorithm, standard security calls for 2048-bit RSA, whereas stronger encryption comes from 1024-bit RSA.

Choose Next.

Key in a password for the digital ID in the Password field, then key it in once more in the Confirm Password field.

Choose Finish to generate your self-signed digital ID.

Note

Should a digital ID file already carry the same name, Acrobat asks whether to replace it. Choose OK to overwrite, or browse to a different location to store the file.

### macOS

Open Acrobat > Preferences.

From the Categories menu pick Signatures, then choose More beneath Identities & Trusted Certificates.

Choose Digital IDs, then click the add digital ID icon.

Choose A new digital ID I want to create now, then choose Next.

Fill in your identity details across the relevant fields. Under Key Algorithm, standard security calls for 2048-bit RSA, whereas stronger encryption comes from 1024-bit RSA.

Choose Next.

Key in a password for the digital ID in the Password field, then key it in once more in the Confirm Password field.

Choose Finish to generate your self-signed digital ID.

## Set a default digital ID

### Designating a default digital ID within Adobe Acrobat so that signing or certifying a PDF no longer prompts you to choose one every time.

### Windows

Open Menu > Preferences.

From the Categories menu pick Signatures, then choose More beneath Identities & Trusted Certificates.

Choose Digital IDs and pick the one you'd like treated as the default.

Click the usage options icon and tick one or more tasks you want this digital ID handling by default. The choices you tick show a check mark beside them.

Tick particular usage options such as signing or encryption so the chosen digital ID lines up with your security needs.

Tick particular usage options such as signing or encryption so the chosen digital ID lines up with your security needs.

Choose Close.

Note

To clear a default digital ID, click the usage options icon and untick the options for that ID.

### macOS

Open Acrobat > Preferences.

From the Categories menu pick Signatures, then choose More beneath Identities & Trusted Certificates.

Choose Digital IDs and pick the one you'd like treated as the default.

Click the usage options icon and choose Use for Signing so the ID handles your e-signatures. A check mark then appears beside that option.

Choose Close.

## Register digital IDs

### Registering your digital ID within Adobe Acrobat Pro, which then lets you put it to work signing and encrypting PDF documents.

### Windows

Open Menu > Preferences.

From the Categories menu pick Signatures, then choose More beneath Identities & Trusted Certificates.

Choose Digital IDs, then click the add digital ID icon.

Depending on where the digital ID you're registering comes from, pick one of these:

- A file: Here the digital ID is an electronic file. Walk through the prompts to point at the digital ID file, enter your password, and drop the digital ID into the list.
- A roaming digital ID accessed via a server: In this case a signing server holds the digital ID. At the prompt, enter the name and URL of the server hosting that roaming ID.
- A device connected to this computer: Here a security token or hardware token plugged into your computer holds the digital ID.

Choose Next.

Pick the.p12 file from whichever folder, server, or device holds it, then choose Open.

Enter the password you assigned to the digital ID, then choose Next.

Choose Finish.

### macOS

Open Acrobat > Preferences.

From the Categories menu pick Signatures, then choose More beneath Identities & Trusted Certificates.

Choose Digital IDs, then click the add digital ID icon.

Depending on where the digital ID you're registering comes from, pick one of these:

- A file: Here the digital ID is an electronic file. Walk through the prompts to point at the digital ID file, enter your password, and drop the digital ID into the list.
- A roaming digital ID accessed via a server: In this case a signing server holds the digital ID. At the prompt, enter the name and URL of the server hosting that roaming ID.
- A device connected to this computer: Here a security token or hardware token plugged into your computer holds the digital ID.

Choose Next.

Pick the .p12 file from whichever folder, server, or device holds it, then choose Open.

Enter the password you assigned to the digital ID, then choose Next.

Choose Finish.

## Delete digital IDs

### How to clear out digital IDs you no longer use in Adobe Acrobat.

Within Acrobat, a digital ID is what lets you apply electronic signatures to documents and lock down PDFs so they can be shared securely. As months pass, some of those IDs go stale or expire and stop serving any purpose. Clearing out the ones you don't need keeps your roster of digital-identity credentials tidy inside Acrobat. Deleting a digital ID also wipes the accompanying PKCS #12 file, which holds both the private key and the certificate. One exception: if the digital ID came from an outside provider, Acrobat won't let you remove it.

Caution

Confirm that no other application still relies on the digital ID, and that no document needs it for decryption, before you go ahead and delete it.

### Windows

Open Menu > Preferences.

Under the Categories menu choose Signatures, then click More beside Identities & Trusted Certificates.

Click Digital ID Files, highlight the ID you'd like to clear out, then click Remove ID.

Only self-signed digital IDs originally generated inside Acrobat are eligible for deletion.

Only self-signed digital IDs originally generated inside Acrobat are eligible for deletion.

Key in the password you chose when the digital ID was created, then click OK.

Note

Should the password slip your mind, you can still get rid of the digital ID by erasing its underlying file. Click Remove ID to find out where that file sits; a dialog box then shows the full path to the digital ID file. Go to that path and delete the file by hand. Once the file is gone, relaunch Acrobat.

### macOS

Open Acrobat > Preferences.

Under the Categories menu choose Signatures, then click More beside Identities & Trusted Certificates.

Click Digital ID Files, highlight the ID you'd like to clear out, then click Remove ID.

Key in the password you chose when the digital ID was created, then click OK.

Note

Should the password slip your mind, you can still get rid of the digital ID by erasing its underlying file. Click Remove ID to find out where that file sits; a dialog box then shows the full path to the digital ID file. Go to that path and delete the file by hand. Once the file is gone, relaunch Acrobat.

## Manage digital ID passwords

### How to swap passwords and set up password timeout behavior for your digital IDs in Adobe Acrobat Pro.

Protecting your digital ID is what keeps both your electronic signatures and your encrypted files safe. Rotating the password on a regular basis cuts down the chance that someone gains access without permission. The password timeout settings let you decide how frequently Acrobat asks you to re-enter that password.

### Windows

Choose Menu (Windows) or Acrobat (macOS), then pick Preferences.

Under the Categories menu choose Signatures, then click More beside Identities & Trusted Certificates.

Click Digital ID Files, then pick the digital ID whose password you'd like to swap.

Click Change Password. Key in the old password followed by a new one. Re-enter the new password to confirm it, then click OK.

Leaving that ID highlighted, click Password Timeout.

Through Password Timeout you decide the circumstances under which Acrobat will make you key in your password.

Through Password Timeout you decide the circumstances under which Acrobat will make you key in your password.

Pick whichever of the choices below matches how often you'd like to be asked for your password:

- Always
- After
- Once per session
- Never

Key in the password, then click OK.

### macOS

Open Acrobat > Preferences.

Under the Categories menu choose Signatures, then click More beside Identities & Trusted Certificates.

Click Digital ID Files, then pick the digital ID whose password you'd like to swap.

Click Change Password. Key in the old password followed by a new one. Re-enter the new password to confirm it, then click OK.

Leaving that ID highlighted, click Password Timeout.

Through Password Timeout you decide the circumstances under which Acrobat will make you key in your password.

Through Password Timeout you decide the circumstances under which Acrobat will make you key in your password.

Pick whichever of the choices below matches how often you'd like to be asked for your password:

- Always
- After
- Once per session
- Never

Key in the password, then click OK.

## About redacting and sanitizing PDFs in Acrobat Pro

### A closer look at stripping out sensitive or confidential material before you share documents in Adobe Acrobat.

Two safeguards — redaction and sanitization — work to shield the private data carried inside digital documents. Together they strip away both the content you can see and the content hidden underneath, so a PDF is clean before you pass it along or hand it out.

### Redaction

With redaction, sensitive material is sealed off from a PDF for good. Under Acrobat Pro, whatever you redact — be it wording or imagery — gets covered over with solid colored boxes, so there's no path back to viewing or recovering the confidential content.

### Sanitization

The job of sanitization is to clear hidden data out of PDFs. That covers metadata, embedded material, scripts, and any other element you can't see on the page that might carry private information or open up a security hole.

### Benefits of redacting and sanitizing PDFs

A handful of important payoffs come from redaction and sanitization:

1. Privacy protection: keeping personal or confidential details out of the wrong hands.
2. Compliance: satisfying the legal and regulatory bar for protecting data and governing how it's shared.
3. Security: shutting down any abuse of hidden data that might turn into a cybersecurity threat.
4. Intellectual property protection: deciding exactly which information travels with a document when you hand it out.

### Redaction limitations

- Permanence: once a redaction has been applied and the file saved, there's no reversing it.
- Scope: only the visible text and graphics get stripped by redaction. Anything hidden — metadata or embedded material, for instance — has to be sanitized on its own.

## Types of redactable data

### A closer look at the different kinds of data Adobe Acrobat Pro lets you redact.

To keep confidential material in PDFs locked down, Acrobat Pro brings a full set of tools to the table. Sensitive information inside a PDF can take many shapes, ranging from text on the page to metadata tucked out of sight. Once you can tell these data categories apart, you're able to pick the redaction approach that fits, locking down the document and cutting the odds that information leaks out by accident.

## Redact sensitive content in Acrobat Pro

### How to strip confidential information out of your PDF documents with Adobe Acrobat.

Open All tools > Redact a PDF.

In the left pane, click Redact text and images.

Drag the cursor across the text or image you're targeting.

From the left pane, click Apply.

When the dialog box appears, flip the toggle button if you'd also like to sanitize the file and clear out its hidden information.

Click Continue.

Type a filename and pick a location in the Save Sanitized Document dialog box.

Click Save.

## Search and redact text in Acrobat Pro

### How to track down and strip sensitive words or phrases from PDFs with Adobe Acrobat Pro.

Open All tools > Redact a PDF > Find text and redact, then click OK.

When the dialog box appears, pick any of these under the Search for option:

- Single word or phrase
- Multiple words or phrase
- Patterns

Set where the search for words or patterns should run under Where would you like to search?, then click Search & Remove Text.

To grab every match, click Check All in the Search dialog box; otherwise tick the check box beside each item you mean to redact.

Under Redaction Mark Options, decide whether full words or partial words should be flagged for redaction.

Click Mark Checked Results for Redaction, then click anywhere on the document to bring back the Redact a PDF pane.

Click Apply. When the dialog box appears, flip the toggle button if you'd like to sanitize the file and clear out hidden information, then click Continue.

Type a filename and pick a location in the Save Sanitized Document dialog box, then click Save.

## Text redaction properties in Acrobat Pro

### A look at the redaction-mark properties for text that you can tailor in Adobe Acrobat.

Beyond stripping out sensitive material, Acrobat lets you shape how redaction marks look when you're hiding private content in PDFs. Getting a handle on the text redaction properties lets you turn out polished, uniform redactions that hold up to professional norms and legal demands.

## Redact images in PDFs

### How to redact images inside PDF documents with Adobe Acrobat.

Open All tools > Redact a PDF.

Double-click whichever image you mean to redact.

From the left pane, click Apply.

When the dialog box appears, flip the toggle button if you'd also like to sanitize the file and clear out its hidden information.

Click Continue.

Type a filename and pick a location in the Save Sanitized Document dialog box.

Click Save.

## Change redaction appearance in Acrobat Pro

### How to tailor the look of redaction marks before you commit redactions to your PDF with Adobe Acrobat.

Open All tools > Redact a PDF.

From the left pane, click Set Properties.

When the dialog box appears, tweak any of these settings to suit your needs:

- Redacted area fill color: pick a color to fill redacted areas, or go with No Color to leave them transparent.
- Use overlay text: switch this on to lay text across redacted areas.
- Custom text: type whatever text should show up in redacted areas.
- Font: set the font, size, and alignment for the overlay text.
- Redaction code: choose an existing code or build a fresh one for redacted areas.
- Customize redaction mark appearance: dial in outline and fill colors for the redaction marks and tune their opacity.

Click OK.

## Sanitize PDFs in Acrobat Pro

### How to strip sensitive and hidden information out of your PDFs with Acrobat Pro.

A PDF can carry hidden information you'd rather not pass along when distributing or publishing it. Think metadata, comments, hidden layers, and other private content. Acrobat Pro lets you sanitize a PDF so that every hidden and potentially sensitive piece is cleared out ahead of sharing.

### Redact visible content

Open All tools > Redact a PDF.

In the left pane, click Sanitize document.

When the dialog box appears, click Remove all.

Choose a filename and a place to store the sanitized PDF.

Click Save.

### Find and redact hidden content

Open All tools > Redact a PDF.

In the left pane, click Sanitize document.

When the dialog box appears, click Selectively remove.

Within the Hidden Information panel, tick the boxes beside the items you mean to clear out.

Click Remove.

Save the file to wipe the chosen content for good.

## Apply multiple codes to a redaction in Acrobat Pro

### Steps for stacking several redaction codes onto one redacted region in Adobe Acrobat.

On the redaction marker, open the context menu with a right-click.

From that context menu, pick a code set.

Picking the correct entry keeps your redactions in step with the disclosure rules the law imposes.

Picking the correct entry keeps your redactions in step with the disclosure rules the law imposes.

From the list, tick whichever code entries you want; each one that gets applied is flagged afterward with a check mark beside it.

## Create redaction codes and code sets in Acrobat Pro

### Steps for building your own redaction codes to sanitize documents in Adobe Acrobat.

A redaction code is one flavor of overlay text, made up of preset entries that are grouped together into code sets. Out of the box, Acrobat ships sets aligned with U.S. FOIA and U.S. Privacy Act requirements. Beyond those, nothing stops you from defining custom codes or your own text. Because a single set can hold many separate codes, you get latitude in how they get applied across your files.

Select All tools > Redact a PDF.

Select Set properties.

When the dialog opens, turn on Use Overlay Text, then choose Redaction Code.

For a new redaction code set, go to Edit Codes > Add Set.

Give the new set a name, then select OK.

To load entries into the new redaction code, highlight one in the Code Entries list and choose Add Selected Entry.

Pulling an entry back out of a redaction code is done by selecting the code and then Remove Selected Entry.

Select OK.

## Edit redaction codes and code sets in Acrobat Pro

### Steps for tailoring and maintaining redaction labels on sensitive PDF content in Adobe Acrobat.

Select All tools > Redact a PDF.

From the left pane, choose Set properties.

When the dialog opens, turn on Use Overlay Text, then choose Redaction Code.

Pick a code set beneath Code Entries and choose Edit Codes.

Inside the Redaction Code Editor dialog, carry out whichever of these you need:

- Drop a single entry by highlighting it and choosing Remove Code.
- Relabel an entry by selecting it, typing the replacement name into the field under the list, and choosing Rename Code.
- Discard a whole set by picking it in the Code Sets list and choosing Remove Set.
- Save a set out to a file by selecting it and choosing Export Set.
- Pull a set in from a file by choosing Import Set.
- Relabel a set by selecting it, typing the new name into the field under the Code Sets list, and choosing Rename Set.

Choose OK to dismiss the Redaction Code Editor.

Select OK.
