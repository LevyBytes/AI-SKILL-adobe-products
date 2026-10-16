# JavaScriptExecutionMode

Community declaration reference: Photoshop/2015.5.

Controls when a JavaScript debugger should appear.

```typescript
declare enum JavaScriptExecutionMode {
    /**
    - Opens the JavaScript debugger when the script's first line runs.
      */
      BEFORERUNNING = 3,
    /**

    - Keeps the JavaScript debugger hidden. Runtime errors are handled by throwing JavaScript exceptions.
      */
      NEVER = 1,
    /**

    - Opens the JavaScript debugger when a runtime error occurs.
      */
      ONRUNTIMEERROR = 2,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
