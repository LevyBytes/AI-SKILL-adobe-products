A permissions password, also called an owner password, protects changes to restrictions in conforming PDF readers. Its presence and the active permission settings affect API eligibility even when the file opens without a password.

PDF Extract rejects input that forbids copying with HTTP `400` and `DISQUALIFIED_PERMISSIONS`. Exporting PDF pages to images additionally requires page extraction, document assembly and printing to be permitted. The [permission checks](the-effect-of-pdf-permissions-on-adobe-pdf-services-api.md) distinguish these exceptions and the string-valued printing field.

Inspect [PDF Properties](detecting-pdf-permissions.md) or the [Acrobat copying-permission example](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/copy-not-allowed.png). If the owner authorizes removal, supply the owner password to [Remove Protection](user-password-protection.md) before another operation that rejects the restrictions.
