# EventListeners named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class EventListeners {
    /**
    - Retrieves the EventListener matching the requested index or name.
    - @param index Index or name value.
      */
      item(index: number | string): EventListener
    /**
    - Retrieves the EventListener matching the requested ID.
    - @param id ID value.
      */
      itemByID(id: number): EventListener
    /**
    - Retrieves the EventListener matching the requested name.
    - @param name Name value.
      */
      itemByName(name: string): EventListener
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
