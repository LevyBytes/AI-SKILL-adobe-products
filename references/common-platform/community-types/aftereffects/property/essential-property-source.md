# Property.essentialPropertySource

Community declaration reference: AfterEffects/26.0.

Essential Property instance member returning the original source Property used to make that Essential Property.

```typescript
declare class Property<T extends UnknownPropertyType = UnknownPropertyType> extends PropertyBase {
    readonly essentialPropertySource: Property<T> | AVLayer | null
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
