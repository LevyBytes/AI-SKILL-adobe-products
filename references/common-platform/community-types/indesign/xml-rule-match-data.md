# XMLRuleMatchData

Community declaration reference: InDesign/2023.

Match data for an XML element found by one or more rules in the active XML rule set.

```typescript
declare class XMLRuleMatchData {
    /**
    - XML element found by one or more rules in the active XML rule set.
      */
      readonly element: XMLItem
    /**

    - EventListener collection attached to this object.
      */
      readonly eventListeners: EventListeners
    /**

    - Events collection attached to this object.
      */
      readonly events: Events
    /**

    - XMLRuleMatchData position inside its containing object.
      */
      readonly index: number
    /**

    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - Indices for rules that matched within the rule set.
      */
      readonly matchRules: number[]
    /**

    - Parent object for XMLRuleMatchData (a XMLRuleProcessor).
      */
      readonly parent: XMLRuleProcessor
    /**

    - Property bag used to set multiple values together.
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

    - Resolves this object specifier into object-reference array form.
      */
      getElements(): XMLRuleMatchData[]
    /**

    - Unregisters an event listener.
    - @param eventType Registered event type.
    - @param handler Registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Builds executable source text that resolves back to the XMLRuleMatchData.
      */
      toSource(): string
    /**

    - Gets this object's specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
