# Element.getPublishPersistentData

Community declaration reference: Animate/22.0.

Indicates whether publishing is enabled for a specified persistent data item, using the specified format on an element.
Note: _EMBED_SWF_ is the built-in persistent-data publishing format. When enabled, every document publish embeds that data in the SWF file. ActionScript access uses the .metaData property; support requires SWF version 19 (Flash Player 11.6) or later and only covers symbol instances onstage. Custom JSFL scripts may use additional publishing formats by calling this method with the same format.
@returns True when that persistent data publishes for the requested format; otherwise False.
@param name String naming the persistent data item (set with element.setPersistentData()).
@param format String specifying the publishing format. Ex: "_EMBED_SWF_"

```typescript
declare class Element {
    getPublishPersistentData(name: string, format: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
