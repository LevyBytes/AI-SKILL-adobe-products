# PageItem.createEmailQRCode

Community declaration reference: InDesign/2023.

Creates an Email QR Code on the page item or document.
@param emailAddress Email Address for the QR code.
@param subject Email Subject for the QR code.
@param body Email Body Message for the QR code.
@param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
@param withProperties Starting property values for the new PageItem. Those earlier parameters may also be supplied through withProperties.

```typescript
declare class PageItem {
    createEmailQRCode(emailAddress: string, subject: string, body: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
