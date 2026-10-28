# ComponentParamCollection

Community declaration reference: Premiere/24.0.

```typescript
declare class ComponentParamCollection {
    /** Item count. */
    readonly numItems: number
    /* Item count. */
    readonly length: number
    bind(eventName: string, function_: any): void
    clearProperty(propertyKey: string): void
    doesPropertyExist(propertyKey: string): boolean
    getProperty(propertyKey: string): any
    isPropertyReadOnly(propertyKey: string): boolean
    setProperty(
    propertyKey: string,
    propertyValue: any,
    permanenceValue: number,
    allowCreateNewProperty: boolean,
    ): void
    setTimeout(eventName: string, function_: any, milliseconds: number): void
    unbind(eventName: string): void
    [index: number]: ComponentParam
    getParamForDisplayName(paramName: string): ComponentParam | null
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
