# Document.createPlainTextQRCode

Community declaration reference: InDesign/2023.

Creates a plain text QR Code on the page item.
@param plainText Plain text encoded in the QR Code.
@param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
@param withProperties Initial Document property values; this object may also include the preceding argument values.

```typescript
declare class Document {
    createPlainTextQRCode(plainText: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
