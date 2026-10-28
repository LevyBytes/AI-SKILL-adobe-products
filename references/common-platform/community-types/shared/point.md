# Point

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Location value for a window or UI element, represented as a 2-element array.
It stores the origin point as x-axis and y-axis pixel offsets measured from this element coordinate-space origin.
Setting an element's location property creates a Point object. The property can be supplied either as a JavaScript object with x and y properties or as a 2-value array ordered [x, y].

```typescript
declare class Point extends Array<number> {
    /**
    - Left coordinate value.
      */
      left: number
    /**

    - Top coordinate value.
      */
      top: number
    /**

    - X-axis pixel offset from this element coordinate-space origin.
      */
      x: number
    /**

    - Y-axis pixel offset from this element coordinate-space origin.
      */
      y: number
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
