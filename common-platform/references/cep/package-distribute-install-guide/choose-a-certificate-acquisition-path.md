# Choose a certificate acquisition path

Code-signing certificates fall into two categories: commercial certificates issued by trusted certificate authorities, and self-signed certificates. A commercial certificate must be bought from a trusted certificate authority.

- Using CA (Certificate Authority) - A CA-signed certificate must meet these requirements: - The target operating system must include the root certificate for the code-signing certificate by
  default. This differs across operating-system variants.

      - The issuing certificate authority (CA) for the code-signing certificate must allow that

  certificate to be used for signing extensions.

- Creating a self-signed certificate - When no CA-signed certificate is available, use the `ZXPSignCmd` downloaded earlier to self-sign the package with this command:

Command syntax notation: replace angle-bracket arguments and omit unused optional brackets before execution.

```text
ZXPSignCmd -selfSignedCert <countryCode> <stateOrProvince> <organization> <commonName> <password> <outputPath.p12> [options]
```

| Parameters | Description |
| --- | --- |
| countryCode | The certificate identifying information for your country. |
| stateOrProvince | The certificate identifying information for your state or providence. |
| organization | The certificate identifying information for your organization. |
| commonName | The certificate identifying information for your common name. |
| password | The password for the new certificate. |
| outputPath.p12 | The path and file name for the new certificate. |
| options(locality) | `-locality <code>` If supplied, the locale code to associate with this certificate. |
| options(orgUnit) | `-orgUnit <name>` If supplied, an organizational unit to associate with this certificate. |
| options(email) | `-email <addr>` If supplied, an email address to associate with this certificate. |
| options(validityDays) | `-validityDays <num>` If supplied, a number of days from the current date-time that this certificate remains valid. |

After the command completes, the generated self-signed certificate is placed at `<outputPath.p12>`.

**Example**

```bash
./ZXPSignCmd -selfSignedCert US NY MyCompany MyCommonName abc123 MyCert.p12
```
