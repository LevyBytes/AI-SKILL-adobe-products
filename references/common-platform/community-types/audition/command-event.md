# CommandEvent

Community declaration reference: Audition/2018.

Object for command events.

```typescript
declare class CommandEvent {
    /**
    - Fires before a command is invoked.
      */
      static readonly EVENT_INVOKE_COMMAND: string
    /**

    - Description attached to the command.
      */
      readonly description: string
    /**

    - Name assigned to the command.
      */
      readonly name: string
    /**

    - Title assigned to the command.
      */
      readonly title: string
    /**

    - */
      static __(): any
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
