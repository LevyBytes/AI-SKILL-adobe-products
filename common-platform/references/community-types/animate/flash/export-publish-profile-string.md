# Flash.exportPublishProfileString

Community declaration reference: Animate/22.0.

Returns a publishing profile for a specific document without opening that file. The publish profile can be supplied, but it is optional.
@returns String containing that document's publishing profile.
@param ucfURI String specifying the file Uniform Resource Identifier (URI) used to export the publish settings.
@param profileName String naming the profile that should be exported. This parameter is optional.

```typescript
declare class Flash {
    exportPublishProfileString(ucfURI: string, profileName?: string): string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
