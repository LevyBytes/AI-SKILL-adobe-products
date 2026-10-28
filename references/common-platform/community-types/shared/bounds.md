# Bounds

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Boundary rectangle for a window in screen coordinates, or for a UI element in its container's coordinate space.
Setting an element's bounds property creates a Bounds object. The property can be supplied either as a JavaScript object with left, top, right, bottom or x, y, width, height properties, or as a 4-value array ordered [x, y, wd, ht].

```typescript
declare class Bounds extends Array<number> {
    /**
    - Y-axis pixel offset from this element coordinate-space origin.
      */
      bottom?: number
    /**

    - Height in pixels.
      */
      height?: number
    /**

    - X-axis pixel offset from this element coordinate-space origin.
      */
      left?: number
    /**

    - Width in pixels.
      */
      right?: number
    /**

    - Height in pixels.
      */
      top?: number
    /**

    - Width in pixels.
      */
      width?: number
    /**

    - X-axis pixel offset from this element coordinate-space origin.
      */
      x?: number
    /**

    - Y-axis pixel offset from this element coordinate-space origin.
      */
      y?: number
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
