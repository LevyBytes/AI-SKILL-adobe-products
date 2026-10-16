# MutationEvent

Community declaration reference: InDesign/2023.

Mutation event object for attribute-change notifications.

```typescript
declare class MutationEvent extends Event {
    /**
    - Fires when this MutationEvent observes a property-value change. Propagation bubbles. Cancellation is unavailable.
      */
      static readonly AFTER_ATTRIBUTE_CHANGED: string
    /**

    - Name of the changed property.
      */
      readonly attributeName: string
    /**

    - Current value for the changed property.
      */
      readonly attributeValue: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
