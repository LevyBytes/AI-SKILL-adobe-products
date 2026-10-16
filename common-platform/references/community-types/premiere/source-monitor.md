# SourceMonitor

Community declaration reference: Premiere/24.0.

```typescript
declare class SourceMonitor {
    /**

    - */
      bind(eventName: string, function_: any): void
    /**

    - */
      closeAllClips(): void
    /**

    - */
      closeClip(): void
    /**

    - */
      openFilePath(filePath: string): boolean
    /**

    - */
      play(speed?: number): void
    /**

    - */
      getProjectItem(): ProjectItem | undefined
    /**

    - */
      setTimeout(eventName: string, function_: any, milliseconds: number): void
    /**

    - */
      unbind(eventName: string): void
    /**

    - */
      getPosition(): Time
    /**

    - */
      openProjectItem(itemToOpen: ProjectItem): void
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
