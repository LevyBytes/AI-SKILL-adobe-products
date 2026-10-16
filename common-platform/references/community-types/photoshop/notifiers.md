# Notifiers

Community declaration reference: Photoshop/2015.5.

Notifier objects contained by the document.

```typescript
declare class Notifiers {
    /**
    - Element count for this collection.
      */
      readonly length: number
    /**

    - Container that owns this object.
      */
      readonly parent: object
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - Returns the collection element at the supplied index.
    - @param index
      */
      [index: number]: Notifier
    /**

    - Creates a notifier.
    - @param event Event class id, either four characters or a unique string.
    - @param eventFile Script file run when the event occurs.
    - @param eventClass Object class receiving the event, either four characters or a unique string. When the same event can reach several object kinds, eventClass identifies which object this Notifier covers. For example, the Make event ("Mk") may target document objects ("Dcmn"), channel objects ("Chnl"), and additional object categories.
      */
      static add(event: string, eventFile: File, eventClass?: string): Notifier
    /**

    - Returns the first collection element matching the supplied name.
    - @param name
      */
      getByName(name: string): Notifier
    /**

    - Removes every element.
      */
      static removeAll(): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
