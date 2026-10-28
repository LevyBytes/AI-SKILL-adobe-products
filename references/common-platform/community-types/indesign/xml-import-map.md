# XMLImportMap

Community declaration reference: InDesign/2023.

Mapping object connecting an XML tag to a paragraph, character, table, or cell style.

```typescript
declare class XMLImportMap {
    /**
    - Event listeners related to this object.
      */
      readonly eventListeners: EventListeners
    /**

    - Events related to this object.
      */
      readonly events: Events
    /**

    - Position of the XMLImportMap within its containing object.
      */
      readonly index: number
    /**

    - Indicates whether the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - Style mapped to the XML tag.
      */
      mappedStyle: ParagraphStyle | CharacterStyle | TableStyle | CellStyle | string
    /**

    - XML tag assigned to the element.
      */
      readonly markupTag: XMLTag | string
    /**

    - Parent object for the XMLImportMap (a Application or Document).
      */
      readonly parent: any
    /**

    - Property bag used to set several properties together.
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

    - Resolves the object specifier and returns object references in an array.
      */
      getElements(): XMLImportMap[]
    /**

    - Deletes this XMLImportMap.
      */
      remove(): void
    /**

    - Unregisters the event listener.
    - @param eventType Registered event type.
    - @param handler Registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Builds executable source text that resolves back to the XMLImportMap.
      */
      toSource(): string
    /**

    - Gets the object specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
