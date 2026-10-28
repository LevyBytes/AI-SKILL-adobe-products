# Seal Appearance Parameters (_sealAppearanceOptions_)

Sets the appearance parameters for the seal field. These come from a fixed list of display items: NAME, DATE, `DISTINGUISHED_NAME`, LABELS and `SEAL_IMAGE`.

- **Display Options** (_displayOptions_): Chooses what the seal puts on screen. Left unset, NAME and LABELS apply.

  - **NAME**: Puts the certificate owner's name on display.
    [Figure: Display Options](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/name-ss.png)
  - **DATE**: Puts the sealing date and time on display. Do not confuse this with a signed timestamp issued by a timestamp authority.
    [Figure: Display Options](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/date-ss.png)
  - `DISTINGUISHED_NAME`: Puts the distinguished name drawn from the digital certificate on display.
    [Figure: Display Options](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/dn-ss.png)
  - **LABELS**: Puts text labels on display.
    [Figure: Display Options](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/labels-ss.png)
  - `SEAL_IMAGE`: Puts the seal image on display.
    [Figure: Display Options](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/seal2-ss.png)
    Should the appearance parameters include `SEAL_IMAGE` while no seal image accompanies the request, Acrobat falls back to its standard trefoil image.
    [Figure: Display Options](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/trefoil-ss.png)

**Example JSON**

```json
{
  "signatureFormat": "PADES",
  "documentLevelPermission": "FORM_FILLING",
  "cscCredentialOptions": {
    "authorizationContext": {
      "accessToken": "<ACCESS_TOKEN>",
      "tokenType": "Bearer"
    },
    "credentialAuthParameters": {
      "pin": "<PIN>"
    },
    "providerName": "<PROVIDER_NAME>",
    "credentialId": "<CREDENTIAL_ID>"
  },
  "tsaOptions": {
    "url": "<TIMESTAMP_URL>",
    "credentialAuthParameters": {
      "username": "<USERNAME>",
      "password": "<PASSWORD>"
    }
  },
  "sealFieldOptions": {
    "pageNumber": 1,
    "fieldName": "Signature1",
    "visible": true,
    "location": {
      "left": 150,
      "top": 250,
      "bottom": 350,
      "right": 200
    }
  },
  "sealAppearanceOptions": {
    "displayOptions": ["NAME", "DATE", "LABELS", "DISTINGUISHED_NAME", "SEAL_IMAGE"]
  }
}
```

For now, Trusted Timestamping and Document Level Permissions ship only via the REST APIs and the Java SDK. The remaining SDKs are slated to gain these capabilities in later releases.
