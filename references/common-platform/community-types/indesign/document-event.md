# DocumentEvent

Community declaration reference: InDesign/2023.

Event object for document activity.

```typescript
declare class DocumentEvent extends Event {
    /**
    - Fires after a Document revert completes. The event bubbles and cannot be canceled.
      */
      static readonly AFTER_REVERT: string
    /**

    - Fires after a Document save completes. The event bubbles and cannot be canceled.
      */
      static readonly AFTER_SAVE: string
    /**

    - Fires after a save-as operation completes for a Document. The event bubbles and cannot be canceled.
      */
      static readonly AFTER_SAVE_AS: string
    /**

    - Fires after saving a copy of a Document. The event bubbles and cannot be canceled.
      */
      static readonly AFTER_SAVE_A_COPY: string
    /**

    - Fires before a Document is created. The event bubbles and may be canceled.
      */
      static readonly BEFORE_NEW: string
    /**

    - Fires before a Document is opened. The event bubbles and may be canceled.
      */
      static readonly BEFORE_OPEN: string
    /**

    - Fires before a Document revert happens. The event bubbles and may be canceled.
      */
      static readonly BEFORE_REVERT: string
    /**

    - Fires before a Document save happens. The event bubbles and may be canceled.
      */
      static readonly BEFORE_SAVE: string
    /**

    - Fires before a save-as operation happens for a Document. The event bubbles and may be canceled.
      */
      static readonly BEFORE_SAVE_AS: string
    /**

    - Fires before saving a copy of a Document. The event bubbles and may be canceled.
      */
      static readonly BEFORE_SAVE_A_COPY: string
    /**

    - Full path for the DocumentEvent, including the DocumentEvent name.
      */
      readonly fullName: File
    /**

    - Sets whether dialogs and alerts appear while scripts run.
      */
      userInteractionLevel: UserInteractionLevels
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
