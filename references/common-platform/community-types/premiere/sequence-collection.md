# SequenceCollection

Community declaration reference: Premiere/24.0.

```typescript
declare class SequenceCollection {
    /**

    - */
      readonly numSequences: number
    /**

    - */
      bind(eventName: string, function_: any): void
    /**

    - */
      setTimeout(eventName: string, function_: any, milliseconds: number): void
    /**

    - */
      unbind(eventName: string): void
    /**

    - */
      [index: number]: Sequence
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
