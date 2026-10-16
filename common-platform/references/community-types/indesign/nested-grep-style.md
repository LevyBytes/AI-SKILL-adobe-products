# NestedGrepStyle

Community declaration reference: InDesign/2023.

Represents a nested GREP style.

```typescript
declare class NestedGrepStyle {
    /**
    - Character style assigned to the text.
      */
      appliedCharacterStyle: CharacterStyle | string
    /**

    - Collection containing event listeners.
      */
      readonly eventListeners: EventListeners
    /**

    - Collection containing events.
      */
      readonly events: Events
    /**

    - GREP expression that drives automatic styling.
      */
      grepExpression: string
    /**

    - NestedGrepStyle position within its containing object.
      */
      readonly index: number
    /**

    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - Owning object for the NestedGrepStyle; allowed parents include TextDefault, a Paragraph, a ParagraphStyle, Text, an InsertionPoint, a TextStyleRange, a TextColumn, a Line, a Word, a Character, a Story or an XmlStory.
      */
      readonly parent: any
    /**

    - Property bag for assigning multiple properties in one operation.
      */
      properties: object
    /**

    - Registers an event listener.
    - @param eventType Event type to listen for.
    - @param handler Event handler to invoke.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**

    - Resolves this object specifier into object-reference array entries.
      */
      getElements(): NestedGrepStyle[]
    /**

    - Deletes the NestedGrepStyle.
      */
      remove(): void
    /**

    - Unregisters an event listener.
    - @param eventType Registered event type.
    - @param handler Registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Builds a string that returns the NestedGrepStyle when run.
      */
      toSource(): string
    /**

    - Returns this object's specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
