# Validate signatures

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
