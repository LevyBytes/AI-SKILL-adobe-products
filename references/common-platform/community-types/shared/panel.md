# Panel

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Framed or unframed container for other control types.
A panel may define layout settings for its child elements. Hiding the panel hides all children, and showing it makes visible those children whose own visibility state is not hidden.

```typescript
declare class Panel extends _Control {
    /**
    - Sets the alignment behavior for child elements.
      */
      alignChildren: _AlignmentProperty
    /**

    - Reserves room for the requested character count and affects preferredSize calculation.
      */
      characters: number
    /**

    - Array containing this element's children.
      */
      readonly children: _Control[]
    /**

    - ScriptUIGraphics object available for appearance customization while handling onDraw().
      */
      readonly graphics: ScriptUIGraphics
    /**

    - Default text justification for child text elements.
    - Accepts left, center, or right. Justification has an effect only when this value is set during element creation.
      */
      justify: _Justify
    /**

    - Layout manager assigned to this container.
    - When a container first becomes visible, ScriptUI runs this manager through its layout() function. Unless replaced, the value is an AutoLayoutManager instance based on LayoutManager and created automatically with the container element.
      */
      layout: AutoLayoutManager
    /**

    - Pixel distance from the container edges to the outermost child elements.
    - Each edge can have its own margin. Defaults depend on the container type and are selected to follow standard Adobe UI guidelines.
      */
      margins: _Margins
    /**

    - Direction used to lay out the children of this container.
    - The container's layout manager interprets the value. The default LayoutManager Object accepts row, column, or stack without regard to case. For window and panel, the default is column; for group, the default is row. The legal values for this container's alignChildren and for child alignment properties depend on orientation.
      */
      orientation: _Orientation
    /**

    - Pixel gap between a child element and the adjacent sibling element.
    - Because a container owns just one row or one column of children, one spacing number is sufficient. The default depends on the container type and is chosen to match standard Adobe UI guidelines.
      */
      spacing: number
    /**

    - Localizable title or label text.
      */
      text: string
    /**

    - Creates a child control or container and places it in this container.
    - The new control or container object is returned after being appended to the container's children.
    - @param type Child element type, using the same values as the type property. Control types are enumerated in the JavaScript Tools Guide.
    - @param bounds Size and position description for the new control or container relative to its parent. When provided, this value creates a new Bounds object and assigns it to the new object's bounds property.
    - @param text Localizable text or label. It supplies the starting title, label, or contents shown by the control, depending on the control type. When supplied, this value becomes the new object's text property.
    - @param properties Object containing one or more creation-only properties for the new child. Available creation properties vary by element type. See the properties property for each control type.
      */
      add: _AddControl
    /**

    - Runs just before the panel is drawn.
    - The handler can change or manage appearance through the control's ScriptUIGraphics object and receives one DrawState argument.
      */
      onDraw(drawState: DrawState): void
    /**

    - Takes the selected child control out of this group's children array.
    - No error is reported when the child is not present.
    - @param what Child control to remove, identified by 0-based index, by text property value, or by passing the control object.
      */
      remove(what: any): void
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
