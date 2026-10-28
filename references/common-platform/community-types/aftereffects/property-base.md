# PropertyBase

Community declaration reference: AfterEffects/26.0.

```typescript
declare class PropertyBase {
    /* Property name used when constructing unique naming paths. */
    readonly matchName: string
    /* Index of this property inside the parent group. */
    readonly propertyIndex: number
    /* Count of parent-group levels between this property and its containing layer. */
    readonly propertyDepth: number
    /* Type value for this property. */
    readonly propertyType: PropertyType
    /* Direct parent group for this property. */
    readonly parentProperty: PropertyGroup
    /* True after the property has changed from its creation state. */
    readonly isModified: boolean
    /* True when the UI can show an eyeball icon for this property. */
    readonly canSetEnabled: boolean
    /* True when this property is active. */
    readonly active: boolean
    /* True when the UI does not display this property. */
    readonly elided: boolean
    /* True when this property is an effect. */
    readonly isEffect: boolean
    /* True when this property is a mask. */
    readonly isMask: boolean
    /* Property name. */
    name: string
    /* True when this property is enabled. */
    enabled: boolean
    /* True when this property is selected. */
    selected: boolean
    /* Returns the parent group for this property. */
    propertyGroup(countUp?: number): PropertyGroup
    /* Deletes this object from the project. */
    remove(): void
    /* Repositions this property within its parent group. */
    moveTo(newIndex: number): void
    /* Creates a duplicate of this property object. */
    duplicate(): _PropertyClasses
    /* Returns a member property or group; this is strictly a PropertyGroup method. */
    property(index: number): _PropertyClasses
    property(name: string): _PropertyClasses
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
