# Widget

Community declaration reference: InDesign/2023.

Umbrella term for an object in a dialog column or dialog row. Covered items include dialog controls such as radio button groups, checkboxes, individual editboxes, dropdown controls, and comboboxes; static text objects; enabling groups; border panels; plus nested dialog columns and dialog rows. Related entries: dialog column and dialog row; static text and border panel; enabling group and radiobutton group; checkbox control plus angle editbox and angle combobox; integer editbox with integer combobox; measurement editbox with measurement combobox; percent editbox with percent combobox; real editbox with real combobox; and text editbox.

```typescript
declare class Widget {
    /**
    - Event listener collection.
      */
      readonly eventListeners: EventListeners
    /**

    - Event collection.
      */
      readonly events: Events
    /**

    - Unique ID assigned to Widget.
      */
      readonly id: number
    /**

    - Index position of Widget in its containing object.
      */
      readonly index: number
    /**

    - Whether the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - Control width; for an editbox or combobox, this sets the box minimum width.
      */
      minWidth: number
    /**

    - Owning container for the Widget: DialogColumn, DialogRow, EnablingGroup, BorderPanel, or RadiobuttonGroup.
      */
      readonly parent: any
    /**

    - Lets multiple properties be assigned together.
      */
      properties: object
    /**

    - Registers an event listener.
    - @param eventType Event type value.
    - @param handler Event handler callback or file.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**

    - Expands the object specifier into an array of object references.
      */
      getElements(): Widget[]
    /**

    - Unregisters an event listener.
    - @param eventType Previously registered event type.
    - @param handler Previously registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Produces source text that can evaluate back to the Widget.
      */
      toSource(): string
    /**

    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
