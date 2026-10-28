# Flash.scriptURI

Community declaration reference: Animate/22.0.

file:/// URI string for the JSFL script that is currently running. When fl.runScript() invoked the script, this value is the path for the direct parent script; it does not walk back through nested fl.runScript() calls to locate the original caller.

```typescript
declare class Flash {
    readonly scriptURI: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
