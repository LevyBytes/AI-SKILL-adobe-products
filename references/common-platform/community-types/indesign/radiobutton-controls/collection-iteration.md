# RadiobuttonControls collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class RadiobuttonControls {
    /**
    - Selects an arbitrary RadiobuttonControl from the collection.
      */
      anyItem(): RadiobuttonControl
    /**
    - Provides every RadiobuttonControl in the collection.
      */
      everyItem(): RadiobuttonControl[]
    /**
    - Provides the first RadiobuttonControl in the collection.
      */
      firstItem(): RadiobuttonControl
    /**
    - Provides the final RadiobuttonControl in the collection.
      */
      lastItem(): RadiobuttonControl
    /**
    - Provides the middle RadiobuttonControl in the collection.
      */
      middleItem(): RadiobuttonControl
    /**
    - Provides the RadiobuttonControl after obj in collection order.
    - @param obj RadiobuttonControl positioned before the requested RadiobuttonControl.
      */
      nextItem(obj: RadiobuttonControl): RadiobuttonControl
    /**
    - Provides the RadiobuttonControl before obj in collection order.
    - @param obj Index positioned after the requested RadiobuttonControl.
      */
      previousItem(obj: RadiobuttonControl): RadiobuttonControl
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
