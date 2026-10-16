# Property.setSpatialTangentsAtKey

Community declaration reference: AfterEffects/26.0.

Assigns key spatial tangent vectors for 'in' and 'out'.

```typescript
declare class Property<T extends UnknownPropertyType = UnknownPropertyType> extends PropertyBase {
    setSpatialTangentsAtKey(
    keyIndex: number,
    inTangent: [number, number],
    outTangent: typeof inTangent,
    ): void
}
```

```typescript
declare class Property<T extends UnknownPropertyType = UnknownPropertyType> extends PropertyBase {
    setSpatialTangentsAtKey(
    keyIndex: number,
    inTangent: [number, number, number],
    outTangent: typeof inTangent,
    ): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
