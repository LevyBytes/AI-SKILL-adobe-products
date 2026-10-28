# Notifier

Community declaration reference: Photoshop/2015.5.

Event-handler object that runs assigned code after a chosen event occurs. Notifiers must be enabled before they can fire. Refer to the 'notifiers enabled' property on the Application object. Events raised from inside scripts usually do not trigger notifiers, since they happen within a "play script" event.

```typescript
declare class Notifier {
    /**
    - Four-character event ID or unique string tied to this notifier.
      */
      readonly event: string
    /**

    - Event class ID for the Notifier object, given as four characters or a unique string.
      */
      readonly eventClass: string
    /**

    - File path executed when the event fires or activates the notifier.
      */
      readonly eventFile: File
    /**

    - Container for this object.
      */
      readonly parent: object
    /**

    - Object class-name value.
      */
      readonly typename: string
    /**

    - Removes this object.
      */
      remove(): void
    /**

    - Removes every element.
      */
      removeAll(): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
