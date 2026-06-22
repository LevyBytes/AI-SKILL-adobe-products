# Certify Pdfs, Compare Versions, Validate Digital Sign, View Signed Portfolios ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Certify PDFs; Compare signed document versions; Validate digital signatures; View signed and certified PDF portfolios; Set certificate trust level; Set preferences for validating digital signatures.

## Certify PDFs

### Certify PDFs within Adobe Acrobat so their integrity and authenticity hold up.

When you certify a PDF, you're signing off on its content and stating which edits are still allowed once it's certified. The point is official paperwork, contracts, or any PDF whose integrity matters and whose later changes you want under control.

A certificate signature will only go onto a PDF that carries no signatures yet. Such a signature may show or stay hidden, and a certify ribbon icon in the Signature Panel marks a valid certifying signature. You'll need a digital ID before you can add a certifying digital signature.

Note

Ahead of certifying a PDF, strip out anything that could undermine its security, things like JavaScripts, actions, or embedded media.

Select All tools > Use a certificate.

To certify using a visible digital signature, choose Certify (visible signatures).

Note

If you'd rather skip a visible signature, pick Certify (invisible signatures) and carry on through the workflow.

Once the dialog box appears, choose Drag New Signature Rectangle.

Within the Save as Certified Document dialog box, choose OK, then drag the dotted cursor to outline a rectangle wherever the signature should sit.

In the Sign with a Digital ID dialog box, pick the Digital ID you'd like to certify with and choose Continue.

Pick a digital ID to sign the document with. Lacking one, build it first by choosing Configure New Digital ID before you go on.

Pick a digital ID to sign the document with. Lacking one, build it first by choosing Configure New Digital ID before you go on.

In the Sign as <username> dialog box:

- Verify your signature details.
- From the Permitted Actions After Certifying dropdown menu, select an appropriate option.
- Enter your digital ID password.

Decide how your signature looks and which actions stay permitted once the document is certified, keeping later changes in check.

Decide how your signature looks and which actions stay permitted once the document is certified, keeping later changes in check.

Choose Review to look over any document-security warnings.

Select Sign.

At the save prompt for the signed document, pick where it should go and then choose Save.

The signature joins the document, and up top a signature panel shows a certified badge.

Tip

Want to hang on to the original unsigned file? Save the certified PDF under a filename different from the original.

## Compare signed document versions

### Within Adobe Acrobat, look over whatever changed in a document once it was signed.

Select Signatures from the right panel.

Pick the signature out of the Signatures panel.

Choose Options , then choose Compare Signed Version to Current Version.

Pick Compare Signed Version to Current Version to spot anything altered since signing.

Pick Compare Signed Version to Current Version to spot anything altered since signing.

Go over what the dialog box shows and choose OK.

## Validate digital signatures

### Validate digital signatures in Adobe Acrobat to keep a document's integrity intact.

On a signed document you can validate the signature to confirm both who signed it and the content that was signed. Confirming that authenticity means checking whether the signer's certificate, or the certificates above it, are trusted.

### Validate signatures

With the signed PDF open, select Signatures from the right panel.

In the Signatures panel choose Options, then choose Validate Signatures.

Within the Signature Validation Status dialog box, look over the signature's validation details.

For more on the signer's certificate, choose Signature Properties, then choose Show Signer’s certificate.

To look over the signature timestamp, bring up the Signatures pane and choose Valid Certified Document. You may see one of these messages:

- Signature time are from the clock on the signer’s computer: The time is based on the local time on the signer’s computer.
- Signature is time-stamped: The signer used a Timestamp Server, and your settings indicate that you have a trust relationship with that timestamp server.
- Signature is time-stamped but the timestamp couldn’t be verified: Timestamp verification requires obtaining the timestamp server’s certificate to your list of trusted identities. Check with your system administrator.
- Signature is time-stamped but the timestamp has expired: This is displayed if the timestamp signer’s certificate expires before the current time.

Note

Want an expired timestamp accepted? Select Menu (Windows) or Acrobat (macOS) > Preferences > Signatures. Choose More beneath the Verification option, then tick Use expired timestamps over in the Signature Verification Preferences dialog box.

### Validate all digital signatures

Open whichever PDF you'd like every digital signature validated on.

Select All tools from the global bar.

Select Use a certificate > Validate all signatures.

Choose OK. Once every signature has been validated, a confirmation text shows up.

## View signed and certified PDF portfolios

### Learn how to check signed and certified PDF portfolios in Adobe Acrobat.

When a PDF portfolio is signed or certified, it carries one or more signatures that either approve or certify the document. Whichever signature counts most turns up in a Signature badge in the toolbar. Every signature's particulars show on the portfolio's cover sheet.

Select Signatures from the right panel.

Choose Signature Badge to bring up the name of whatever person or organization signed the PDF portfolio. Up comes the Signatures panel with the full details.

Hover over the Signature Badge to view the certificate issuer’s name, email ID, and other details.

Hover over the Signature Badge to view the certificate issuer’s name, email ID, and other details.

Resting your pointer on the Signature Badge surfaces extras such as the certificate issuer's name and email address.

Scan the Signature Badge for any warning icons, since those point to an approval or certification that isn't valid, plus other problems.

Note

For a rundown of what the warnings mean, turn to the Acrobat Desktop Digital Signatures Guide.

## Set certificate trust level

### Within Adobe Acrobat, set how far a certificate is trusted on signed documents.

Within Acrobat, the signature on a certified or signed document holds up as valid when a trust relationship exists between you and the signer. How much you trust the certificate spells out which actions you'll trust the signer to perform.

Adjusting a certificate's trust settings lets you green-light particular actions. As an example, you might tweak the settings so dynamic content and embedded JavaScript are allowed to run inside the certified document.

### Windows

Select Menu > Preferences > Signatures.

Choose More off the Identities & Trusted Certificates option.

Choose Trusted Certificates, pick a certificate from the list, and choose Edit Trust.

Go over your digital IDs and tend to them so your certificates stay current and trusted.

Go over your digital IDs and tend to them so your certificates stay current and trusted.

When the Edit Certificate Trust dialog box comes up, tick whichever of these options to trust the certificate:

- Use this certificate as a trusted root: Trusts all certificates issued by the certificate authority.
- Signed documents or data: Acknowledges the identity of the signer.
- Certified documents: Trusts documents in which the author has certified the document with a signature
  - Dynamic content: Allow movies, sound, and other dynamic elements to play in a certified document.
  - Embedded high privilege JavaScript: Allow privileged JavaScript embedded in PDF files to run.
  - Privileged system operations (networking, printing, file access, etc.): Allow Internet connections, cross-domain scripting, silent printing, external-object references, and import and export methodology operations on certified documents.

Note

Reserve Embedded high privilege JavaScript and Privileged system operations (networking, printing, file access, etc.) for sources you trust and have a close working relationship with.

Select OK.

### macOS

Select Acrobat > Preferences > Signatures.

Choose More off the Identities & Trusted Certificates option.

Choose Trusted Certificates, pick a certificate from the list, and choose Edit Trust.

When the Edit Certificate Trust dialog box comes up, tick whichever of these options to trust the certificate:

- Use this certificate as a trusted root: Trusts all certificates issued by the certificate authority.
- Signed documents or data: Acknowledges the identity of the signer.
- Certified documents: Trusts documents in which the author has certified the document with a signature
  - Dynamic content: Allow movies, sound, and other dynamic elements to play in a certified document.
  - Embedded high privilege JavaScript: Allow privileged JavaScript embedded in PDF files to run.
  - Privileged system operations (networking, printing, file access, etc.): Allow Internet connections, cross-domain scripting, silent printing, external-object references, and import and export methodology operations on certified documents.

Note

Reserve Embedded high privilege JavaScript and Privileged system operations (networking, printing, file access, etc.) for sources you trust and have a close working relationship with.

Select OK.

For more about trusted certificates, have a look at the Adobe Digital Signature Guide.

## Set preferences for validating digital signatures

### In Adobe Acrobat, tune the preferences that govern digital-signature validation.

You're able to set verification preferences so digital signatures come out valid the moment you open a PDF. Alongside the signature you'll find the verification details. After digital signatures pass validation, a signature badge turns up in the document message bar to flag the signature status.

### Windows

Select Menu > Preferences.

Choose Signatures beneath Categories.

Choose More off the Verification option.

In the dialog box that comes up, adjust these settings to suit:

- Verify signatures when the document is opened: Acrobat automatically validates all the signatures when a PDF is opened.
- Verification Behavior: Set the plugin to verify a signature when a PDF is opened.
- Require certificate revocation checking to succeed whenever possible during signature verification: Acrobat checks certificates against a list of excluded certificates during validation.
- Use expired timestamps: Use the time mentioned in the timestamp or embedded time in the signature even if the signature certificate has expired. If you deselect the checkbox, Acrobat discards expired timestamps.
- Verification Time: Check the time at which the signature was created or embedded in the PDF.
- Verification Information: Select when to alert the user when verification information is too large.
  - Validating signatures: Certificates are trusted for Acrobat Approval signature validation.
  - Validating certified documents: Certificates are trusted for certification signature validation.

Lock in secure document validation by switching on the signature verification preferences.

Lock in secure document validation by switching on the signature verification preferences. Note

Turning these options on may affect document security.

Select OK.

### macOS

Select Acrobat > Preferences.

Choose Signatures beneath Categories.

Choose More off the Verification option.

In the dialog box that comes up, adjust these settings to suit:

- Verify signatures when the document is opened: Acrobat automatically validates all the signatures when a PDF is opened.
- Verification Behavior: Set the plugin to verify a signature when a PDF is opened.
- Require certificate revocation checking to succeed whenever possible during signature verification: Acrobat checks certificates against a list of excluded certificates during validation.
- Use expired timestamps: Use the time mentioned in the timestamp or embedded time in the signature even if the signature certificate has expired. If you deselect the checkbox, Acrobat discards expired timestamps.
- Verification Time: Check the time at which the signature was created or embedded in the PDF.
- Verification Information: Select when to alert the user when verification information is too large.
  - Validating signatures: Certificates are trusted for Acrobat Approval signature validation.
  - Validating certified documents: Certificates are trusted for certification signature validation.

Lock in secure document validation by switching on the signature verification preferences.

Lock in secure document validation by switching on the signature verification preferences. Note

Turning these options on may affect document security.

Select OK.
