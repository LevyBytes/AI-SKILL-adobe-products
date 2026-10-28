# AutoCorrectTables

Community declaration reference: InDesign/2023.

Collection wrapper for auto-correct tables.

```typescript
declare class AutoCorrectTables {
    /**
    - Object count in this collection.
      */
      readonly length: number
    /**

    - Looks up an AutoCorrectTable by index.
    - @param index Index value.
      */
      [index: number]: AutoCorrectTable
    /**

    - Selects an arbitrary AutoCorrectTable from this collection.
      */
      anyItem(): AutoCorrectTable
    /**

    - Counts elements on the AutoCorrectTable collection.
      */
      count(): number
    /**

    - Gets all AutoCorrectTable objects in this collection.
      */
      everyItem(): AutoCorrectTable[]
    /**

    - Gets the initial AutoCorrectTable in this collection.
      */
      firstItem(): AutoCorrectTable
    /**

    - Finds an AutoCorrectTable by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): AutoCorrectTable
    /**

    - Finds an AutoCorrectTable by name.
    - @param name Name value.
      */
      itemByName(name: string): AutoCorrectTable
    /**

    - Gets AutoCorrectTables spanning the supplied range.
    - @param from AutoCorrectTable, index, or name at the range start.
    - @param to AutoCorrectTable, index, or name at the range end.
      */
      itemByRange(from: AutoCorrectTable | number | string, to: AutoCorrectTable | number | string): AutoCorrectTable[]
    /**

    - Gets the final AutoCorrectTable in this collection.
      */
      lastItem(): AutoCorrectTable
    /**

    - Gets the central AutoCorrectTable in this collection.
      */
      middleItem(): AutoCorrectTable
    /**

    - Gets the AutoCorrectTable positioned after the supplied AutoCorrectTable.
    - @param obj AutoCorrectTable that comes before the wanted AutoCorrectTable.
      */
      nextItem(obj: AutoCorrectTable): AutoCorrectTable
    /**

    - Gets the AutoCorrectTable positioned before the supplied index.
    - @param obj Index belonging to the AutoCorrectTable after the wanted AutoCorrectTable.
      */
      previousItem(obj: AutoCorrectTable): AutoCorrectTable
    /**

    - Builds source text that resolves back to the AutoCorrectTable when run.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
