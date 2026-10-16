# PrProduction

Community declaration reference: Premiere/24.0.

```typescript
declare class PrProduction {
    /**
    - */
      name: string
    /**

    - */
      projects: ProjectCollection
    /**

    - */
      close(): void
    /**

    - */
      getLocked(project: Project): Boolean
    /**

    - */
      setLocked(project: Project, newLockState: Boolean): void
    /**

    - */
      moveToTrash(projectPath: String, suppressUI: Boolean, saveProject: Boolean): Boolean
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
