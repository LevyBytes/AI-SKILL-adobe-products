# MetadataPreference.setProperty

Community declaration reference: InDesign/2023.

Assigns the XMP property for the requested path.
@param namespace Namespace for the property.
@param path Requested path(s).
@param value Value assigned to the property. Note: Pass an empty string to remove the property.

```typescript
declare class MetadataPreference extends Preference {
    setProperty(namespace: string, path: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
