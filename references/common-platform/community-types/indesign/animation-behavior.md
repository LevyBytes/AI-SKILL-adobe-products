# AnimationBehavior

Community declaration reference: InDesign/2023.

Represents an animation behavior.

```typescript
declare class AnimationBehavior extends Behavior {
    /**
    - Animation page item.
      */
      animatedPageItem: PageItem
    /**

    - When true, roll off after a rollover event automatically plays the animation backward.
      */
      autoReverseOnRollOff: boolean
    /**

    - Playback mode.
      */
      operation: AnimationPlayOperations
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
