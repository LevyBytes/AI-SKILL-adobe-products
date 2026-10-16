# Acquiring a signed certificate

The package signature proves that the packaged contents have not changed after packaging. During installation, the extension installer compares the package with that signature and confirms that the certificate is valid. CEP also performs certificate validation whenever a host application attempts to launch an extension.

Documents and software are commonly signed with certificates whose expiration windows range from one to four years. Without a valid timestamp, an extension signed by an expired certificate can no longer be installed or loaded. Users are not warned before the signature reaches expiration. Restoring availability requires repackaging the extension with a new certificate, so rebuild the extension package well ahead of the installer certificate's expiration date to prevent installation failures for users.

A valid timestamp records that the signing certificate was still valid when the signature was created.
For that reason, include a timestamp whenever you package and sign an extension.
Adding the timestamp keeps the digital signature usable for a longer period.

Validation outcomes are:

| Signature | CEP result |
| --- | --- |
| No signature | Extension does not run |
| Signature invalid | Extension does not run |
| Certificate used to sign has expired and no timestamp exists | Extension does not run |
| Certificate used to sign has expired, but has a valid timestamp | Extension runs normally |
| Signature valid | Extension runs normally |
