# InCopyExportOption

Community declaration reference: InDesign/2023.

Export options for the InCopy INCX document format.

```typescript
declare class InCopyExportOption extends Preference {
    /**
    - When true, all resources, such as styles etc, are exported; otherwise only resources used by the story are exported.
      */
      includeAllResources: boolean
    /**

    - When true, graphic proxy data is included.
      */
      includeGraphicProxies: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
