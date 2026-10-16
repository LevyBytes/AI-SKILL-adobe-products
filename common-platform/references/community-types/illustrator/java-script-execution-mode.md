# JavaScriptExecutionMode

Community declaration reference: Illustrator/2022.

Timing for showing a JavaScript debugger.

```typescript
declare enum JavaScriptExecutionMode {
    /**
    - Opens the JavaScript debugger before the first JavaScript line.
      */
      BeforeRunning = 3,
    /**

    - Opens the JavaScript debugger when a runtime error occurs.
      */
      OnRuntimeError = 2,
    /**

    - Keeps the JavaScript debugger hidden. Runtime errors throw JavaScript exceptions instead.
      */
      never = 1,
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
