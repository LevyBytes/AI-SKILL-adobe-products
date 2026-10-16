# Document.createEmailQRCode

Community declaration reference: InDesign/2023.

Creates an email QR Code on the page item or document.
@param emailAddress Email address encoded in the QR Code.
@param subject Email subject encoded in the QR Code.
@param body Email body message encoded in the QR Code.
@param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
@param withProperties Initial Document property values; it may also carry values supplied by the earlier parameters.

```typescript
declare class Document {
    createEmailQRCode(emailAddress: string, subject: string, body: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
