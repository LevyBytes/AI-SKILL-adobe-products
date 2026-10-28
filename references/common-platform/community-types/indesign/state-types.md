# StateTypes

Community declaration reference: InDesign/2023.

Choices for the user actions that alter a button's state.

```typescript
declare enum StateTypes {
    /**
    - Mouse pointer clicks within the button's area.
      */
      DOWN = 1181971556,
    /**

    - Off state for Down.
      */
      DOWN_OFF = 1181967462,
    /**

    - On state for Down.
      */
      DOWN_ON = 1181967471,
    /**

    - Mouse pointer enters the button's area.
      */
      ROLLOVER = 1181971574,
    /**

    - Off state for Rollover.
      */
      ROLLOVER_OFF = 1181972070,
    /**

    - On state for Rollover.
      */
      ROLLOVER_ON = 1181972079,
    /**

    - Default appearance used when no user activity occurs in the button's area.
      */
      UP = 1181971566,
    /**

    - Off state for Up.
      */
      UP_OFF = 1181970022,
    /**

    - On state for Up.
      */
      UP_ON = 1181970031,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
