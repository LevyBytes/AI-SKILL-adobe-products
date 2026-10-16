# Pdf Electronic Seal Api — Gettingstarted

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

1. To get the digital certificate, a client first registers with a Trust Service Provider (TSP). You can buy a certificate from any of the [supported TSPs](overview-what-is-pdf-electronic-seal-api/overview-supported-trust-service-providers.md) that meet the Cloud Signature Consortium (CSC) requirements. The [CSC](https://cloudsignatureconsortium.org/wp-content/uploads/2020/01/`CSC_API_V1_1`.0.4.0.pdf) standard covers this in more depth.
2. Acting as the legal owner of the digital certificate, the client is put through remote identity verification by the TSP.
3. Once that verification clears, the TSP hands the client a digital certificate together with a `credential_id`, `client_id` and `client_secret`, generally guarded by a static PIN. Keep both the credential details and the PIN somewhere safe for when you need them later.

[Figure: TSP Token Generation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/cert.png)
