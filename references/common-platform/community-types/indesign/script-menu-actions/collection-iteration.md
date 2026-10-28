# ScriptMenuActions collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ScriptMenuActions {
    /**
    - Retrieves an arbitrary ScriptMenuAction from the collection.
      */
      anyItem(): ScriptMenuAction
    /**
    - Retrieves all ScriptMenuAction objects in the collection.
      */
      everyItem(): ScriptMenuAction[]
    /**
    - Retrieves the first ScriptMenuAction from the collection.
      */
      firstItem(): ScriptMenuAction
    /**
    - Retrieves the last ScriptMenuAction from the collection.
      */
      lastItem(): ScriptMenuAction
    /**
    - Retrieves the middle ScriptMenuAction from the collection.
      */
      middleItem(): ScriptMenuAction
    /**
    - Retrieves the ScriptMenuAction positioned after the supplied ScriptMenuAction in the collection.
    - @param obj ScriptMenuAction immediately before the desired ScriptMenuAction.
      */
      nextItem(obj: ScriptMenuAction): ScriptMenuAction
    /**
    - Retrieves the ScriptMenuAction positioned before the supplied index.
    - @param obj Index after the desired ScriptMenuAction.
      */
      previousItem(obj: ScriptMenuAction): ScriptMenuAction
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
