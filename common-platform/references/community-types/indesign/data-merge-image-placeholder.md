# DataMergeImagePlaceholder

Community declaration reference: InDesign/2023.

Container object for a date merge image field.

```typescript
declare class DataMergeImagePlaceholder {
    /**
    - Event listener collection.
      */
      readonly eventListeners: EventListeners
    /**

    - Event collection.
      */
      readonly events: Events
    /**

    - Placeholder insertion uses this data merge field. Consult the data merge text placeholder and data merge image placeholder entries.
      */
      readonly field: DataMergeField
    /**

    - Containing-object index for the DataMergeImagePlaceholder.
      */
      readonly index: number
    /**

    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - Parent object for the DataMergeImagePlaceholder (a a Document).
      */
      readonly parent: Document
    /**

    - Page item that receives the placeholder.
      */
      readonly placeholderPageItem: PageItem
    /**

    - Use this property to assign several properties together.
      */
      properties: object
    /**

    - Registers an event listener.
    - @param eventType Event type value.
    - @param handler Event handler callback.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**

    - Builds an array of object references by resolving the object specifier.
      */
      getElements(): DataMergeImagePlaceholder[]
    /**

    - Unregisters the event listener.
    - @param eventType Registered event type value.
    - @param handler Registered event handler callback.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Creates source text that, when run, evaluates to the DataMergeImagePlaceholder.
      */
      toSource(): string
    /**

    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
