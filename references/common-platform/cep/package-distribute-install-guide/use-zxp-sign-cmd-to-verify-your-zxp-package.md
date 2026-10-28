# Use `ZXPSignCmd` to verify your `ZXP` Package

`ZXPSignCmd` checks the signature of a `ZXP` package; it does not validate the extension content.
Run this command for signature checking:

Command syntax notation: replace angle-bracket arguments and omit unused optional brackets before execution.

```text
ZXPSignCmd -verify <zxp>|<extensionRootDir> [options]
```

| Parameters | Description |
| --- | --- |
| zxp | The path and file name for the ZXP package. |
| extensionRootDir | The path to the folder containing the deployed ZXP |
| options(certinfo) | `-certinfo` If supplied, prints information about the certificate, including timestamp and revocation information. |
| options(skipOnlineRevocationChecks) | `-skipOnlineRevocationChecks` If supplied, skips online checks for certificate revocation when `-certinfo` is set. |
| options(addCerts) | `-addCerts <cert1> <cert2> ...` If supplied, verifes the certificate chain and assesses whether the supplied DER-encoded certificates are included. |

**Example**

```bash
./ZXPSignCmd -verify myExtension.zxp -certinfo
```

Illustrative certificate output from the documented example:

```text
*********** Certificate Information ***********
CN: MyCommonName
OU:
DN: /C=US/ST=NY/O=MyCompany/CN=MyCommonName
OS Trusted: false
Revoked: false
Timestamp: Valid and within certificate validity dates at time of signing
Signing Certificate: Valid (from 2018-04-02 until 2029-06-19)
***********************************************
```

_Note: The output above shows how to confirm timestamp validity._
