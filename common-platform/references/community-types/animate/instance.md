# Instance

Community declaration reference: Animate/22.0.

Instance

```typescript
declare class Instance extends Element {
    /**

    - String identifying the instance type. Allowed strings are "symbol", "bitmap", "embedded video", "linked video", "video", and "compiled clip".
      */
      readonly instanceType: string
    /**
    - Library item used to create this instance. This property can be changed only to another library item of the same type; for example, a bitmap cannot replace a symbol library reference.
      */
      libraryItem: Library
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
