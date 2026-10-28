# TabbedPanel

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Container that owns selectable tab containers.
Unlike a panel element, this container accepts only tab elements as direct children.

```typescript
declare class TabbedPanel extends _Control {
    /**
    - Array containing this element's child tabs.
      */
      readonly children: Tab[]
    /**

    - Tab that is selected at the moment.
    - Assigning this value enables the specified tab in the panel.
    - The value may be assigned with an item index instead of an object reference.
    - An out-of-range index is ignored.
    - Even when an index is used for assignment, reading the property returns an object reference.
    - Whenever selection changes, whether from user choice or script assignment, TabbedPanel is notified through onChange.
      */
      selection: Tab | number
    title: string
    titleLayout: _TitleLayout
    /**

    - Appends a tab to this tabbed panel.
    - Returns the newly created tab control object.
    -
    - Note: supply `undefined` for `bounds`; the value is ignored.
      */
      add(type: "tab", bounds?: undefined, text?: string, properties?: _AddControlProperties): Tab
    /**

    - Runs after the selected tab changes.
      */
      onChange(): void
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
