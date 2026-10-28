# Text.createVCardQRCode

Community declaration reference: InDesign/2023.

Creates a Business Card QR Code on a page item, or loads it into the document's placegun.
@param firstName Business Card First Name value encoded in the QR code.
@param lastName Business Card Last Name value encoded in the QR code.
@param jobTitle Business Card Title value encoded in the QR code.
@param cellPhone Business Card Cell Phone Number value encoded in the QR code.
@param phone Business Card Phone Number value encoded in the QR code.
@param email Business Card Email Address value encoded in the QR code.
@param organisation Business Card Organisation value encoded in the QR code.
@param streetAddress Business Card Street Address value encoded in the QR code.
@param city Business Card City value encoded in the QR code.
@param adrState Business Card State value encoded in the QR code.
@param country Business Card Country value encoded in the QR code.
@param postalCode Business Card Postal Code value encoded in the QR code.
@param website Business Card URL value encoded in the QR code.
@param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
@param withProperties Initial property values for the new Text; these settings may also carry the preceding values.

```typescript
declare class Text {
    createVCardQRCode(firstName: string, lastName: string, jobTitle: string, cellPhone: string, phone: string, email: string, organisation: string, streetAddress: string, city: string, adrState: string, country: string, postalCode: string, website: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
