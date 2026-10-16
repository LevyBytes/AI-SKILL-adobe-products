# BackgroundTask identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class BackgroundTask {
    /**
    - Unique ID for the BackgroundTask.
      */
      readonly id: number
    /**
    - Position of the BackgroundTask inside its containing object.
      */
      readonly index: number
    /**
    - true when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - BackgroundTask name.
      */
      readonly name: string
    /**
    - Parent object for the BackgroundTask (a Application).
      */
      readonly parent: Application
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
