# ProjectManager

Community declaration reference: Premiere/24.0.

```typescript
declare class ProjectManager {
    /**

    - String array describing errors encountered.
      */
      errors: Array<Error>
    /**

    - `ProjectManagerOptions` structure.
      */
      options: ProjectManagerOptions
    /**

    - Runs consolidation and transfer.
    - @param project `Project` selected for consolidation.
      */
      process(project: Project): number
    /**

    - */
      unbind(eventName: string): void
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
