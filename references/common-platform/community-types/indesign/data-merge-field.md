# DataMergeField

Community declaration reference: InDesign/2023.

Data merge field object.

```typescript
declare class DataMergeField {
    /**
    - Event listener collection.
      */
      readonly eventListeners: EventListeners
    /**

    - Event collection.
      */
      readonly events: Events
    /**

    - Field name.
      */
      readonly fieldName: string
    /**

    - Source field type.
      */
      readonly fieldType: SourceFieldType
    /**

    - Containing-object index for the DataMergeField.
      */
      readonly index: number
    /**

    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - Parent object for the DataMergeField (a a DataMerge).
      */
      readonly parent: DataMerge
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
      getElements(): DataMergeField[]
    /**

    - Unregisters the event listener.
    - @param eventType Registered event type value.
    - @param handler Registered event handler callback.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Creates source text that, when run, evaluates to the DataMergeField.
      */
      toSource(): string
    /**

    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
