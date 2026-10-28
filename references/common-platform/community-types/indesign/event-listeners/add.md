# EventListeners.add

Community declaration reference: InDesign/2023.

Registers an event listener.
@param eventType Event type value.
@param handler Event handler callback or file.
@param captures Obsolete parameter.
@param withProperties Property seed values for the EventListener being created

```typescript
declare class EventListeners {
    add(eventType: string, handler: File | Function, captures?: boolean, withProperties?: object): EventListener
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
