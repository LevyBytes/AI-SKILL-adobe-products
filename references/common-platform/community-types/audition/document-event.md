# DocumentEvent

Community declaration reference: Audition/2018.

Fires when one or more document-related events occur.

```typescript
declare class DocumentEvent {
    /**
    - Fires when a document has closed.
      */
      static readonly EVENT_CLOSED: string
    /**

    - Fires when a document has been created or opened.
      */
      static readonly EVENT_NEW: string
    /**

    - Fires after a document has been saved.
      */
      static readonly EVENT_SAVED: string
    /**

    - Fires after a document's time selection changes.
      */
      static readonly EVENT_TIMESELECTIONCHANGED: string
    /**

    - Unique document ID.
      */
      readonly documentID: string
    /**

    - Path to the document file.
      */
      readonly path: string
    /**

    - */
      static __(): any
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
