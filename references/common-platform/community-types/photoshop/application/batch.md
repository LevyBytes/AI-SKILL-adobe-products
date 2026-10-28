# Application.batch

Community declaration reference: Photoshop/2015.5.

Runs batch automation, similar to using the Batch command in Photoshop.
@param inputFiles Files that the routine operates on.
@param action Action name to play; matching is case-sensitive and must correspond to the Actions palette entry.
@param from Action set name holding the played action; matching is case-sensitive and must correspond to the Actions palette entry.
@param options Batch automation settings.

```typescript
declare class Application {
    batch(inputFiles: File[], action: string, from: string, options?: BatchOptions): string
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
