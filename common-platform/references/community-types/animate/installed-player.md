# InstalledPlayer

Community declaration reference: Animate/22.0.

Flash Player target installed in the document PI.

```typescript
declare interface InstalledPlayer {
    /**
    - Document string name.
      */
      name: string
    /**
    - Usable with Document.setPlayerVersion() to assign the current player for a document.
      */
      version: string
    /**
    - Lowest ActionScript version required by the document. Use an integer from minASVersion through maxASVersion, inclusive, to assign the document ActionScript version through Document.asVersion.
      */
      minASVersion: number
    /**
    - Highest ActionScript version supported by the document.
      */
      maxASVersion: number
    /**
    - Default Stage width in pixels for this target. For iPhone the default is 320 x 480 pixels; for Android it is 480 x 800.
      */
      stageWidth: number
    /**
    - Default Stage height in pixels for this target. For iPhone the default is 320 x 480 pixels; for Android it is 480 x 800.
      */
      stageHeight: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
