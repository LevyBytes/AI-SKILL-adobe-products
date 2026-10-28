# PreflightRuleFlag

Community declaration reference: InDesign/2023.

Flag value showing whether the rule is disabled, treated as error, warning, or informational.

```typescript
declare enum PreflightRuleFlag {
    /**
    - Treat as an error when the rule check fails.
      */
      RETURN_AS_ERROR = 1699890546,
    /**

    - Treat as informational only when the rule check fails.
      */
      RETURN_AS_INFORMATIONAL = 1699893865,
    /**

    - Treat as a warning when the rule check fails.
      */
      RETURN_AS_WARNING = 1699893879,
    /**

    - Indicates that the rule is disabled.
      */
      RULE_IS_DISABLED = 1699890274,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
