# Add verification information after signing

Sign while offline and validation particulars such as timestamps and revocation data might not be reachable, though they can be attached later once the PDF is validated online. Subsequent checks will then draw on that information.

Open the signed PDF document in Acrobat.

Track down the signature you want to supply with verification information.

Right-click the signature and choose Add Verification Information.

Note

You'll only find the Add Verification Information option when the signature earns trust through a certificate chain (rather than being self-signed or trusted by hand), when the verification time isn't fixed to "Always use current time," when the signature checks out as valid, and when it isn't a PKCS#1 object.

Should a prompt appear, let Acrobat reach the internet to fetch the verification information.

Confirm the verification information now attached to the signature, which might cover:

- Whether the signing certificate has been revoked
- A timestamp drawn from a trusted timestamp server, when one is configured

Save the PDF so the attached verification information sticks.
