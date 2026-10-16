# Property.setValueAtKey

Community declaration reference: AfterEffects/26.0.

Locates a keyframe and changes this property's value there.

```typescript
declare class Property<T extends UnknownPropertyType = UnknownPropertyType> extends PropertyBase {
    setValueAtKey(keyIndex: number, newValue: T["value"]): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
