# Project.path

Community declaration reference: Premiere/24.0.

Warning: on MacOS Ventura, reading the project path can raise an error while shutdown is in progress.
Bug ID: DVAPR-4242199
Workaround: wrap path checks in try/catch when they might run during shutdown.

```typescript
declare class Project {
    readonly path: string
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
