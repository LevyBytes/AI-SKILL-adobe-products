# GotoStateBehavior

Community declaration reference: InDesign/2023.

Represents a goto state behavior.

```typescript
declare class GotoStateBehavior extends Behavior {
    /**
    - Associated multi-state object page item.
      */
      associatedMultiStateObject: MultiStateObject
    /**

    - When true, rollover roll off returns automatically to the previous state.
      */
      goBackOnRollOff: boolean
    /**

    - State name inside the associated multi-state object.
      */
      stateName: string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
