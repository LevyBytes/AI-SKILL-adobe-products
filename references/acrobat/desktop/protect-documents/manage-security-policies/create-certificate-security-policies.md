# Create certificate security policies

This walkthrough covers building a certificate-based security policy in Adobe Acrobat, which guards PDFs by means of public key certificates.

With a certificate security policy, encryption is scoped to named recipients through their digital certificates. That gives you say over who reaches a document and which permissions each person receives.

Before you begin

Confirm that every recipient has a valid, in-date public key certificate that supports encryption.

Open a PDF in Acrobat.

Select All tools > Protect a PDF > Manage security policies.

Select New.

Select Use public key certificates, and then select Next.

Give the policy a name and description, and indicate which parts of the document should be encrypted.

From the dropdown, pick an Encryption Algorithm that matches the recipients' Acrobat version, then select Next.

Decide how the policy gets tied to recipients:

- For a policy bound to individual documents, select Ask for recipients when applying this policy, then select Next.
- For a policy bound to a fixed set of recipients, leave Ask for recipients when applying this policy unchecked, pick the recipients' digital IDs (yours included), then select Next.

Set the general options and decide how the certificate security policy gets applied.

On the Summary page, look over the policy settings and select Finish. The certificate security policy is now saved by Acrobat.

The finished certificate security policy shows up in the security policies list, available for use. A document-bound policy asks you to pick recipients on each application, whereas a recipient-bound policy relies on the recipient list you defined when you built it.

Tip

Give policies clear, descriptive names so you can spot them again later — for instance "Confidential Reports - View Only" or "Legal Documents - Full Permissions."
