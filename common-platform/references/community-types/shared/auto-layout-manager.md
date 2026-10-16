# AutoLayoutManager

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Manages automatic layout behavior for a window or container.
AutoLayoutManager is the subclass that supplies the default automatic layout behavior.

```typescript
declare class AutoLayoutManager {
    /**
    - Runs automatic layout for the container under management.
    - Child element sizes and positions are adjusted from the placement and alignment property values on the parent and children.
    - The first display of a window invokes this automatically. After that, scripts must call it directly when parent or child size or position changes require relayout.
    -
    - @param recalculate Optional. true forces the layout manager to recompute this container's size and the size of any child containers. The default is false.
      */
      layout(recalculate?: boolean): void
    /**

    - Lays out again after a Window resize, using the new dimensions.
    - After the user resizes the window, child elements in the managed container are resized according to the given alignment type.
      */
      resize(): void
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
