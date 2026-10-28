# Document.createTextMsgQRCode

Community declaration reference: InDesign/2023.

Creates a text message QR Code on the page item or document.
@param cellNumber Text phone number encoded in the QR Code.
@param textMessage Text message encoded in the QR Code.
@param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
@param withProperties Initial Document property values; it can also contain the values from the prior arguments.

```typescript
declare class Document {
    createTextMsgQRCode(cellNumber: string, textMessage: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
