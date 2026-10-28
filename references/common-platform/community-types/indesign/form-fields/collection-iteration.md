# FormFields collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class FormFields {
    /**
    - Retrieves an arbitrary FormField from this collection.
      */
      anyItem(): FormField
    /**
    - Retrieves all FormField entries from this collection.
      */
      everyItem(): FormField[]
    /**
    - Retrieves the initial FormField from this collection.
      */
      firstItem(): FormField
    /**
    - Retrieves the final FormField from this collection.
      */
      lastItem(): FormField
    /**
    - Retrieves the center FormField from this collection.
      */
      middleItem(): FormField
    /**
    - Retrieves the FormField immediately after the supplied FormField in this collection.
    - @param obj FormField positioned immediately before the target FormField.
      */
      nextItem(obj: FormField): FormField
    /**
    - Retrieves the FormField immediately before the supplied index.
    - @param obj Index belonging to the FormField immediately after the target FormField.
      */
      previousItem(obj: FormField): FormField
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
