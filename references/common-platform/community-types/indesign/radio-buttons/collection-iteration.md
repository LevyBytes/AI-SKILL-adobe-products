# RadioButtons collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class RadioButtons {
    /**
    - Gets any RadioButton from the collection.
      */
      anyItem(): RadioButton
    /**
    - Gets all RadioButton objects in the collection.
      */
      everyItem(): RadioButton[]
    /**
    - Gets the first RadioButton in the collection.
      */
      firstItem(): RadioButton
    /**
    - Gets the final RadioButton in the collection.
      */
      lastItem(): RadioButton
    /**
    - Gets the middle RadioButton in the collection.
      */
      middleItem(): RadioButton
    /**
    - Gets the RadioButton positioned after the supplied RadioButton.
    - @param obj RadioButton positioned immediately before the desired RadioButton.
      */
      nextItem(obj: RadioButton): RadioButton
    /**
    - Gets the RadioButton whose index comes before the supplied index.
    - @param obj Index belonging to the RadioButton after the desired RadioButton.
      */
      previousItem(obj: RadioButton): RadioButton
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
