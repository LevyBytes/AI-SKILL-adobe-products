# Item.linkageURL

Community declaration reference: Animate/22.0.

URL of the SWF file containing the shared asset. Flash ignores this property when item.linkageImportForRS, item.linkageExportForAS, and item.linkageExportForRS are all false. Conversely, it is required when any one of those properties is true. A web URL or platform-dependent filename can be supplied, using forward slashes [/] or backward slashes [\] according to the platform.

```typescript
declare class Item {
    linkageURL: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
