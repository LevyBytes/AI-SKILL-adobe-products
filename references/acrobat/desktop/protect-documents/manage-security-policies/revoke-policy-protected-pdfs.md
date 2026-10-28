# Revoke policy-protected PDFs

This topic explains how to pull back access to policy-protected PDFs so recipients can no longer open them.

Because policy protection governs how recipients reach a PDF even after it leaves your hands, you can shut off access right away by revoking the policy whenever a document is no longer valid or should stay closed.

Open the policy-protected PDF you intend to revoke. Should the document be a PDF Portfolio, open the portfolio file rather than one of its component PDFs.

Authenticate with whichever rights‑management service is guarding the file:

- A standalone PDF, or a component PDF inside a PDF Portfolio, uses Adobe LiveCycle Rights Management ES.
- A PDF Portfolio itself uses Adobe Experience Manager – Forms Server (Document Security).

Select All tools > Protect a PDF > Document Security > Revoke.

On the web page that opens, pick a revocation reason from the menu or write your own message.

If a replacement document is going out, enter the URL where recipients can reach the new file.

Select OK to record your changes and finish revoking.

After revocation, no user can reach the document any longer. Anyone who tries to open the PDF instead sees your explanation message together with a link to any replacement document.
