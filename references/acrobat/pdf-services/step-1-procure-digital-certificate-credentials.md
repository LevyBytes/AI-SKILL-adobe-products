# Step 1: Procure Digital Certificate Credentials

1. To obtain the digital certificate, a client first has to enroll with a Trust Service Provider (TSP). Certificates are available from any of the [supported TSPs](overview-what-is-pdf-electronic-seal-api/overview-supported-trust-service-providers.md) that meet Cloud Signature Consortium (CSC) compliance. The [CSC](https://cloudsignatureconsortium.org/wp-content/uploads/2020/01/`CSC_API_V1_1`.0.4.0.pdf) standard covers this in greater depth.
2. Acting as the certificate's legal owner, the client is then put through remote identity verification by the TSP.
3. Once that verification clears, the client receives a digital certificate from the TSP carrying a `credential_id`, `client_id` and `client_secret`. A static PIN normally guards these values. Keep the PIN and the credential details somewhere safe, since you will need them again later.

[Figure: TSP Token Generation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/cert.png)
