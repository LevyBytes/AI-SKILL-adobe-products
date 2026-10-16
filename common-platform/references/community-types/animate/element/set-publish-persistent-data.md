# Element.setPublishPersistentData

Community declaration reference: Animate/22.0.

Turns persistent-data publishing on or off for a specified format.
@param name String naming the persistent data item (set with element.setPersistentData()).
@param format String specifying the publishing format. Note: _EMBED_SWF_ is the built-in persistent-data publishing format. When enabled, every document publish embeds that data in the SWF file. ActionScript access uses the .metaData property; support requires SWF version 19 (Flash Player 11.6) or later and only covers symbol instances onstage. Custom JSFL scripts may use additional publishing formats by calling this method with the same format.
@param publish Boolean indicating whether persistent data publishing should be enabled or disabled for that format.

```typescript
declare class Element {
    setPublishPersistentData(name: string, format: string, publish: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
