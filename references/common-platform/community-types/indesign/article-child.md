# ArticleChild

Community declaration reference: InDesign/2023.

Group member included within an article.

```typescript
declare class ArticleChild {
    /**
    - Collection containing event listeners.
      */
      readonly eventListeners: EventListeners
    /**

    - Collection containing events.
      */
      readonly events: Events
    /**

    - Unique ID assigned to the ArticleChild.
      */
      readonly id: number
    /**

    - Position index for the ArticleChild inside its container.
      */
      readonly index: number
    /**

    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - Underlying page item reference.
      */
      readonly itemRef: PageItem
    /**

    - Parent object for the ArticleChild (a Group).
      */
      readonly parent: Group
    /**

    - Object for applying several property values at once.
      */
      properties: object
    /**

    - Registers an event listener.
    - @param eventType Event type string.
    - @param handler Handler invoked for the event.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**

    - Resolves this object specifier into an array of object references.
      */
      getElements(): ArticleChild[]
    /**

    - Relocates the ArticleChild to the requested location.
    - @param to Location relative to a reference object or inside the containing object.
    - @param reference Reference object; required when to is before or after.
      */
      move(to: LocationOptions, reference: ArticleChild): ArticleChild
    /**

    - Unregisters the event listener.
    - @param eventType Registered event type string.
    - @param handler Registered handler for the event.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Creates executable source text that resolves back to the ArticleChild.
      */
      toSource(): string
    /**

    - Retrieves this object's specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
