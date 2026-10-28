# Submenus.add

Community declaration reference: InDesign/2023.

Creates a new submenu object.
@param title Display label for Submenu in the user interface. Ampersand characters (&) mark the next character for Windows Alt-key menu navigation, while double ampersands show a literal ampersand. The Mac OS drops the extra ampersands.
@param at Placement for the submenu, either relative to the reference object or inside the containing object.
@param reference Reference object; required when at is before or after.
@param withProperties Starting property values for the Submenu being created.

```typescript
declare class Submenus {
    add(title: string, at?: LocationOptions, reference?: MenuElement, withProperties?: object): Submenu
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
