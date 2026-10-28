# Flash.runScript

Community declaration reference: Animate/22.0.

Runs a JavaScript file. When one argument names a function, that function is invoked along with any script code outside the function. Code outside the function runs first.
@returns Function result as a string when funcName is supplied; otherwise no value.
@param fileURI String expressed as a file:/// URI, specifying the script file to execute.
@param funcName String identifying the function to execute in the JSFL file named by fileURI. This parameter is optional.
@param args Optional parameter specifying one or more arguments to pass to funcname.

```typescript
declare class Flash {
    runScript(fileURI: string, funcName?: string, ...args: any[]): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
