# PageItem.createTextMsgQRCode

Community declaration reference: InDesign/2023.

Creates a Text Msg QR Code on the page item or document.
@param cellNumber Text Phone Number for the QR code.
@param textMessage Text Message for the QR code.
@param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
@param withProperties Starting property values for the new PageItem. Those earlier parameters may also be supplied through withProperties.

```typescript
declare class PageItem {
    createTextMsgQRCode(cellNumber: string, textMessage: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
