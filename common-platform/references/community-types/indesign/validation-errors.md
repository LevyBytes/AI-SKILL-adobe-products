# ValidationErrors

Community declaration reference: InDesign/2023.

Collection type for XML validation errors.

```typescript
declare class ValidationErrors {
    /**
    - Count of objects held by the collection.
      */
      readonly length: number
    /**

    - Fetches a ValidationError by supplied index.
    - @param index Index value.
      */
      [index: number]: ValidationError
    /**

    - Gets an arbitrary ValidationError from the collection.
      */
      anyItem(): ValidationError
    /**

    - Shows the element count for the ValidationError.
      */
      count(): number
    /**

    - Gets all ValidationError objects in the collection.
      */
      everyItem(): ValidationError[]
    /**

    - Gets the collection's initial ValidationError.
      */
      firstItem(): ValidationError
    /**

    - Fetches a ValidationError by supplied index or name.
    - @param index Index or name.
      */
      item(index: number | string): ValidationError
    /**

    - Collects ValidationErrors from the requested span.
    - @param from ValidationError, index, or name that starts the span.
    - @param to ValidationError, index, or name that ends the span.
      */
      itemByRange(from: ValidationError | number | string, to: ValidationError | number | string): ValidationError[]
    /**

    - Gets the collection's final ValidationError.
      */
      lastItem(): ValidationError
    /**

    - Gets the ValidationError located at the collection midpoint.
      */
      middleItem(): ValidationError
    /**

    - Gets the ValidationError positioned after the supplied ValidationError.
    - @param obj ValidationError immediately before the one wanted.
      */
      nextItem(obj: ValidationError): ValidationError
    /**

    - Gets the ValidationError positioned before the supplied index.
    - @param obj Index for the ValidationError immediately after the one wanted.
      */
      previousItem(obj: ValidationError): ValidationError
    /**

    - Builds executable source text that resolves back to the ValidationError.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
