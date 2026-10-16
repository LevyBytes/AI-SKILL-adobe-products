# Flash.showIdleMessage

Community declaration reference: Animate/22.0.

Controls whether the warning about a script running too long is shown; pass false for show to disable it. This is useful for long batch operations. To turn the alert back on, call the command again with true for show.
@param show Boolean value specifying whether the warning about a script running too long is enabled or disabled.

```typescript
declare class Flash {
    showIdleMessage(show: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
