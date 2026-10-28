# PropertyGroup

Community declaration reference: AfterEffects/26.0.

Application preference settings control which expression-syntax variants can resolve layer properties by name.

```typescript
declare interface PropertyGroup {
    (index: number): _PropertyClasses
    (name: string): _PropertyClasses
    /** Count of indexed properties held by the group. */
    readonly numProperties: number
    /* Creates a property inside the group. */
    addProperty(name: string): _PropertyClasses
    /* Reports whether the group accepts the named property. */
    canAddProperty(name: string): boolean
    /* Creates a variable font axis property in this group. */
    addVariableFontAxis(axisTag: string): OneDProperty
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
