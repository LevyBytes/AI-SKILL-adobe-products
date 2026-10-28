# Document.setPlayerVersion

Community declaration reference: Animate/22.0.

Sets the Flash Player version targeted by the specified document. This matches the value set in the Publish Settings dialog box.
@returns true when the player version is set successfully; otherwise false.
@param version String representing the Flash Player version targeted by the specified document. Allowed values: "FlashLite", "FlashLite11", "FlashLite20" , "FlashLite30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "FlashPlayer10", "FlashPlayer10.3", "FlashPlayer11.1", "FlashPlayer11.2", "FlashPlayer11.3","FlashPlayer11.4", "FlashPlayer11.5", "FlashPlayer11.6", "FlashPlayer11.7", "AdobeAIR1_1", "AdobeAIR1_1", "AdobeAIR2_5", "AdobeAIR3_6", "android3_6", and "PF13_6".

```typescript
declare class Document {
    setPlayerVersion(version: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
