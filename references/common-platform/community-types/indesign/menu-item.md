# MenuItem

Community declaration reference: InDesign/2023.

Menu item object.

```typescript
declare class MenuItem extends MenuElement {
    /**
    - Menu action used to implement the menu item.
      */
      readonly associatedMenuAction: MenuAction
    /**

    - When true, the menu action's menu item is checked.
      */
      readonly checked: boolean
    /**

    - When true, MenuItem is enabled.
      */
      readonly enabled: boolean
    /**

    - Unique ID assigned to MenuItem.
      */
      readonly id: number
    /**

    - Name assigned to MenuItem.
      */
      readonly name: string
    /**

    - Display label for MenuItem in the user interface. Ampersand characters (&) mark the next character for Windows Alt-key menu navigation, while double ampersands show a literal ampersand. The Mac OS drops the extra ampersands.
      */
      readonly title: string
    /**

    - Selects the MenuItem.
      */
      select(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
