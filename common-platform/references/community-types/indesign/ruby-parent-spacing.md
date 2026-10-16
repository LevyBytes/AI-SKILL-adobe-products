# RubyParentSpacing

Community declaration reference: InDesign/2023.

Choices for spacing ruby beside parent text.

```typescript
declare enum RubyParentSpacing {
    /**
    - Ruby parent 121 aki spacing.
      */
      RUBY_PARENT_121_AKI = 1248997682,
    /**

    - Ruby parent both-sides spacing.
      */
      RUBY_PARENT_BOTH_SIDES = 1249010291,
    /**

    - Transfers parent text aki to the ruby characters.
      */
      RUBY_PARENT_EQUAL_AKI = 1249014113,
    /**

    - Justifies ruby characters against both parent-text edges.
      */
      RUBY_PARENT_FULL_JUSTIFY = 1249014634,
    /**

    - Does not derive ruby spacing from parent text.
      */
      RUBY_PARENT_NO_ADJUSTMENT = 1249013345,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
