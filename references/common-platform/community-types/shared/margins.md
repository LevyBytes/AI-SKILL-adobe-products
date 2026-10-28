# Margins

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Pixel margin values between a container's edges and its outermost child elements.
The array [ left, top, right, bottom ] stores the margin between the container's left edge and leftmost child, and likewise for the other edges.
Setting an element's margins property creates a Margins object.
Object form requires properties named left, top, right, and bottom.
Array form must order values as [ left, top, right, bottom ].
A single numeric value may also be assigned to margins, in which case every array value receives that number.

```typescript
declare class Margins extends Array<number> {
    /**
    - Pixel distance between the container's left edge and its leftmost child element.
      */
      left: number
    /**
    - Pixel distance between the container's right edge and its rightmost child element.
      */
      right: number
    /**
    - Pixel distance between the container's top edge and its top child element.
      */
      top: number
    /**
    - Pixel distance between the container's bottom edge and its bottom child element.
      */
      bottom: number
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
