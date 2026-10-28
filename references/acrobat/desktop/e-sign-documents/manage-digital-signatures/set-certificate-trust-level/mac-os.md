# macOS

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
