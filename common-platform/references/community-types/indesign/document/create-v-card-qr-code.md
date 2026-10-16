# Document.createVCardQRCode

Community declaration reference: InDesign/2023.

Creates a business-card QR Code on the page item or loads it into the document's placegun.
@param firstName Business Card first name for the QR Code.
@param lastName Business Card last name for the QR Code.
@param jobTitle Business Card title for the QR Code.
@param cellPhone Business Card cell phone number for the QR Code.
@param phone Business Card phone number for the QR Code.
@param email Business Card email address for the QR Code.
@param organisation Business Card organisation for the QR Code.
@param streetAddress Business Card street address for the QR Code.
@param city Business Card city for the QR Code.
@param adrState Business Card state for the QR Code.
@param country Business Card country for the QR Code.
@param postalCode Business Card postal code for the QR Code.
@param website Business Card URL for the QR Code.
@param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
@param withProperties Initial Document property values; it may also carry the preceding argument values.

```typescript
declare class Document {
    createVCardQRCode(firstName: string, lastName: string, jobTitle: string, cellPhone: string, phone: string, email: string, organisation: string, streetAddress: string, city: string, adrState: string, country: string, postalCode: string, website: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
