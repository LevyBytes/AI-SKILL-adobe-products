# Text.createTextMsgQRCode

Community declaration reference: InDesign/2023.

Generates a Text Msg QR Code for a document or page item.
@param cellNumber Text Phone Number value encoded in the QR code.
@param textMessage Text Message value encoded in the QR code.
@param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
@param withProperties Initial property values for the new Text; these settings may also carry the preceding values.

```typescript
declare class Text {
    createTextMsgQRCode(cellNumber: string, textMessage: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
