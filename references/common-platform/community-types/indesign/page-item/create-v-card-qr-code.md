# PageItem.createVCardQRCode

Community declaration reference: InDesign/2023.

Creates a Business Card QR Code on the page item or loads it on the document's placegun.
@param firstName Business Card First Name for the QR code.
@param lastName Business Card Last Name for the QR code.
@param jobTitle Business Card Title for the QR code.
@param cellPhone Business Card Cell Phone Number for the QR code.
@param phone Business Card Phone Number for the QR code.
@param email Business Card Email Address for the QR code.
@param organisation Business Card Organisation for the QR code.
@param streetAddress Business Card Street Address for the QR code.
@param city Business Card City for the QR code.
@param adrState Business Card State for the QR code.
@param country Business Card Country for the QR code.
@param postalCode Business Card Postal Code for the QR code.
@param website Business Card URL for the QR code.
@param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
@param withProperties Starting property values for the new PageItem. Those earlier parameters may also be supplied through withProperties.

```typescript
declare class PageItem {
    createVCardQRCode(firstName: string, lastName: string, jobTitle: string, cellPhone: string, phone: string, email: string, organisation: string, streetAddress: string, city: string, adrState: string, country: string, postalCode: string, website: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
