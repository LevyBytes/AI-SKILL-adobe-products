# AutoCorrectTable

Community declaration reference: InDesign/2023.

Auto-correct table object.

```typescript
declare class AutoCorrectTable {
    /**
    - Auto-correct word-pair entries: a misspelled word paired with its correction. Can return: Array of Arrays of 2 Strings.
      */
      autoCorrectWordPairList: any[]
    /**

    - Event listeners collection.
      */
      readonly eventListeners: EventListeners
    /**

    - Events collection.
      */
      readonly events: Events
    /**

    - Position of the AutoCorrectTable inside its parent object.
      */
      readonly index: number
    /**

    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - AutoCorrectTable name.
      */
      readonly name: string
    /**

    - Parent object for the AutoCorrectTable (a Application).
      */
      readonly parent: Application
    /**

    - Property bundle for setting multiple values in one call.
      */
      properties: object
    /**

    - Registers an event listener.
    - @param eventType Event type.
    - @param handler Event handler.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**

    - Resolves the object specifier into object-reference results.
      */
      getElements(): AutoCorrectTable[]
    /**

    - Unregisters an event listener.
    - @param eventType Registered event type.
    - @param handler Registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Builds source text that resolves back to the AutoCorrectTable when run.
      */
      toSource(): string
    /**

    - Gets the object specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
