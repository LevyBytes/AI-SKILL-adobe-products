# ScriptArg

Community declaration reference: InDesign/2023.

Arguments supplied to a script.

```typescript
declare class ScriptArg extends Preference {
    /**
    - Removes every script argument.
      */
      clear(): void
    /**

    - Reads a script argument value.
    - @param name Script argument name.
      */
      get(name: string): string
    /**

    - Reads a script argument value.
    - @param name Script argument name.
      */
      getValue(name: string): string
    /**

    - Checks whether a script argument has been defined.
    - @param name Script argument name.
      */
      isDefined(name: string): boolean
    /**

    - Restores the saved script arguments.
      */
      restore(): void
    /**

    - Stores the current script arguments.
      */
      save(): void
    /**

    - Writes a script argument value.
    - @param name Script argument name.
    - @param value Value to store.
      */
      set(name: string, value: string): void
    /**

    - Writes a script argument value.
    - @param name Script argument name.
    - @param value Value to store.
      */
      setValue(name: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
