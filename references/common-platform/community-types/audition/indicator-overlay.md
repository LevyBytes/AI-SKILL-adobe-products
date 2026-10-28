# IndicatorOverlay

Community declaration reference: Audition/2018.

Small overlay window aimed at a specific application UI location.

```typescript
declare class IndicatorOverlay {
    /**
    - Bottom-edge anchor point
      */
      static readonly ANCHOR_BOTTOM_EDGE: number
    /**

    - Left-edge anchor point
      */
      static readonly ANCHOR_LEFT_EDGE: number
    /**

    - Right-edge anchor point
      */
      static readonly ANCHOR_RIGHT_EDGE: number
    /**

    - Top-edge anchor point
      */
      static readonly ANCHOR_TOP_EDGE: number
    /**

    -
    - @param ctrlPath
    - @param direction
    - @param text
    - @param animation
    - @param persistent Instantiate IndicatorOverlay.
      */
      constructor(
      ctrlPath: string,
      direction: number,
      text: string,
      animation: boolean,
      persistent: boolean,
      )
    /**

    - */
      static __(): any
    /**

    - Hide the overlay.
      */
      hide(): boolean
    /**

    - Show the overlay.
      */
      show(): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
