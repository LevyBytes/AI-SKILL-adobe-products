# Flash.toggleBreakpoint

Community declaration reference: Animate/22.0.

Toggles a breakpoint for the specified .as file at the specified line. If enable is false, any stored breakpoint at that line is removed.
@param fileURI String; URI of the the AS file where the breakpoint is toggled.
@param line Integer; line number where the breakpoint is toggled.
@param enable Boolean; true enables the breakpoint, and false disables it.

```typescript
declare class Flash {
    toggleBreakpoint(fileURI: string, line: number, enable: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
