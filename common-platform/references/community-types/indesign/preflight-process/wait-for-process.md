# PreflightProcess.waitForProcess

Community declaration reference: InDesign/2023.

Blocks until the process finishes, with an optional maximum wait. Other processes do not receive cycles during this interval.
@param waitTime Maximum wait time, in seconds; when omitted, wait until completion regardless of duration.

```typescript
declare class PreflightProcess {
    waitForProcess(waitTime: number): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
