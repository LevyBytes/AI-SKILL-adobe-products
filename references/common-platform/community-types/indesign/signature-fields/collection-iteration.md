# SignatureFields collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class SignatureFields {
    /**
    - Gets any SignatureField from the collection.
      */
      anyItem(): SignatureField
    /**
    - Gets all SignatureField objects in the collection.
      */
      everyItem(): SignatureField[]
    /**
    - Gets the first SignatureField in the collection.
      */
      firstItem(): SignatureField
    /**
    - Gets the final SignatureField in the collection.
      */
      lastItem(): SignatureField
    /**
    - Gets the middle SignatureField in the collection.
      */
      middleItem(): SignatureField
    /**
    - Gets the SignatureField positioned after the supplied SignatureField.
    - @param obj SignatureField positioned immediately before the desired SignatureField.
      */
      nextItem(obj: SignatureField): SignatureField
    /**
    - Gets the SignatureField whose index comes before the supplied index.
    - @param obj Index belonging to the SignatureField after the desired SignatureField.
      */
      previousItem(obj: SignatureField): SignatureField
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
