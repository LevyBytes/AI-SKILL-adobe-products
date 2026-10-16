# BehaviorEvents

Community declaration reference: InDesign/2023.

Choices for behavior trigger events.

```typescript
declare enum BehaviorEvents {
    /**
    - Triggers the behavior when the mouse button is clicked and held without release.
      */
      MOUSE_DOWN = 1835296118,
    /**

    - Triggers the behavior when the mouse pointer enters the object's bounding-box area.
      */
      MOUSE_ENTER = 1835361654,
    /**

    - Triggers the behavior when the mouse pointer leaves the object's bounding-box area.
      */
      MOUSE_EXIT = 1836606838,
    /**

    - Triggers the behavior when the mouse is released after clicking.
      */
      MOUSE_UP = 1836410230,
    /**

    - Triggers the behavior when focus shifts to another interactive object.
      */
      ON_BLUR = 1868719478,
    /**

    - Triggers the behavior when the object gains focus through mouse action or the Tab key.
      */
      ON_FOCUS = 1868981622,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
