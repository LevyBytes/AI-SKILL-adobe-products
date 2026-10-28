# MovieBehavior

Community declaration reference: InDesign/2023.

Represents a movie behavior object.

```typescript
declare class MovieBehavior extends Behavior {
    /**
    - Movie page item.
      */
      movieItem: Movie
    /**

    - Navigation point id used as the playback start. All operations except Play From Navigation Point ignore this property.
      */
      navigationPointID: number
    /**

    - Playback mode.
      */
      operation: MoviePlayOperations
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
