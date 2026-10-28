# Submenus collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Submenus {
    /**
    - Retrieves an arbitrary Submenu from the collection.
      */
      anyItem(): Submenu
    /**
    - Retrieves all Submenu objects in the collection.
      */
      everyItem(): Submenu[]
    /**
    - Retrieves the first Submenu from the collection.
      */
      firstItem(): Submenu
    /**
    - Retrieves the last Submenu from the collection.
      */
      lastItem(): Submenu
    /**
    - Retrieves the middle Submenu from the collection.
      */
      middleItem(): Submenu
    /**
    - Retrieves the Submenu positioned after the supplied Submenu in the collection.
    - @param obj Submenu immediately before the desired Submenu.
      */
      nextItem(obj: Submenu): Submenu
    /**
    - Retrieves the Submenu positioned before the supplied index.
    - @param obj Index after the desired Submenu.
      */
      previousItem(obj: Submenu): Submenu
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
