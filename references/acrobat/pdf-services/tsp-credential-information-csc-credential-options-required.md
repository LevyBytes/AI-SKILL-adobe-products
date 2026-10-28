# TSP Credential Information (_cscCredentialOptions_) : **Required**

Through these TSP parameters, the certificate credential held by the sealer (see [digital certificate credentials](step-1-procure-digital-certificate-credentials.md)) arrives paired with its accompanying authentication and authorization data.

- **TSP Name** (_providerName_) : **Required** : Names the Trust Service Provider behind the certificate. For now, support is limited to TSPs that work through the OAuth 2.0 client credential authorization flow. Each supported Trust Service Provider's provider-name mapping appears in the table that follows.
  [Figure: TSP Name Mapping](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/provider-mapping-ss.png)

- **TSP Credential Id** (_credentialId_) : **Required** : Names the Digital ID held at the TSP that the seal should draw on.
- **TSP Authorization Context** (_authorizationContext_) : **Required** : Wraps up the authorization data needed to talk to the TSPs.

  - **Access Token** (_accessToken_) : **Required** : The access token that grants entry to the CSC provider's hosted APIs.
  - **Token Type** (_tokenType_): The kind of access token in play; absent a value, "Bearer" is assumed.

- **TSP Credential Authorization Parameter** (_credentialAuthParameters_) : **Required** : Carries the credential authorization details that unlock access to the digital certificate.

  - **PIN** (_pin_) : **Required** : The PIN tied to the credential ID issued by the TSP.
