# TimingList

Community declaration reference: InDesign/2023.

Represents a timing list.

```typescript
declare class TimingList {
    /**
    - EventListeners collection reference.
      */
      readonly eventListeners: EventListeners
    /**

    - Events collection reference.
      */
      readonly events: Events
    /**

    - Position of this TimingList inside its containing object.
      */
      readonly index: number
    /**

    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - Parent object for this TimingList, a TimingSetting.
      */
      readonly parent: TimingSetting
    /**

    - Lets multiple properties be set together.
      */
      properties: object
    /**

    - TimingGroups collection reference.
      */
      readonly timingGroups: TimingGroups
    /**

    - Trigger event value.
      */
      readonly triggerEvent: DynamicTriggerEvents
    /**

    - Attaches an event listener.
    - @param eventType Event type value.
    - @param handler Event handler value.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**

    - Resolves this object specifier into object reference entries.
      */
      getElements(): TimingList[]
    /**

    - Deletes this TimingList.
      */
      remove(): void
    /**

    - Detaches an event listener.
    - @param eventType Registered event type.
    - @param handler Registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Builds source text that evaluates back to this TimingList.
      */
      toSource(): string
    /**

    - Gets this object's specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
