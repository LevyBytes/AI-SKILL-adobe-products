# Item.setPublishData

Community declaration reference: Animate/22.0.

Turns publishing for a library item's persistent data on or off.
@param name String containing the persistent data item name, as specified in "item.addData()".
@param format String naming the publishing format. Note: _EMBED_SWF_ is the built-in special format for persistent data publishing. When selected, each publish embeds the persistent data into the SWF file. ActionScript can read it through the .metaData property. The feature is available for SWF version 19 (Flash Player 11.6) and above, only on symbol instances that are onstage. Custom JSFL scripts can use additional custom publishing formats when getPublishPersistentData() is invoked using that format value.
@param publish Boolean indicating whether publishing of persistent data is enabled or disabled for the specified format.

```typescript
declare class Item {
    setPublishData(name: string, format: string, publish: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
