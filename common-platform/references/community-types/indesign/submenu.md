# Submenu

Community declaration reference: InDesign/2023.

Submenu object.

```typescript
declare class Submenu extends MenuElement {
    /**
    - Fires before Submenu is displayed; it does not bubble and cannot be canceled.
      */
      static readonly BEFORE_DISPLAY: string
    /**

    - Collection object for menu elements.
      */
      readonly menuElements: MenuElements
    /**

    - Collection object for menu items.
      */
      readonly menuItems: MenuItems
    /**

    - Collection object for menu separators.
      */
      readonly menuSeparators: MenuSeparators
    /**

    - Name assigned to Submenu.
      */
      readonly name: string
    /**

    - Collection object for submenus.
      */
      readonly submenus: Submenus
    /**

    - Display label for Submenu in the user interface. Ampersand characters (&) mark the next character for Windows Alt-key menu navigation, while double ampersands show a literal ampersand. The Mac OS drops the extra ampersands.
      */
      readonly title: string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
