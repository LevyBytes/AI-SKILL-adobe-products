# RubyOverhang

Community declaration reference: InDesign/2023.

Choices for ruby overhang.

```typescript
declare enum RubyOverhang {
    /**
    - Prevents ruby overhang.
      */
      NONE = 1852796517,
    /**

    - Sets ruby overhang to one-half the size of one chararacter.
      */
      RUBY_OVERHANG_HALF_CHAR = 1249011811,
    /**

    - Sets ruby overhang to one-half ruby.
      */
      RUBY_OVERHANG_HALF_RUBY = 1249013554,
    /**

    - Leaves ruby overhang without a size limit.
      */
      RUBY_OVERHANG_NO_LIMIT = 1249013621,
    /**

    - Sets ruby overhang to the size of one character.
      */
      RUBY_OVERHANG_ONE_CHAR = 1249013603,
    /**

    - Sets ruby overhang to one ruby.
      */
      RUBY_OVERHANG_ONE_RUBY = 1249013553,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
