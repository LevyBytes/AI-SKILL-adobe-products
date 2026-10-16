# Property.setTemporalEaseAtKey

Community declaration reference: AfterEffects/26.0.

Assigns key temporal ease arrays for 'in' and 'out'.

```typescript
declare class Property<T extends UnknownPropertyType = UnknownPropertyType> extends PropertyBase {
    setTemporalEaseAtKey(
    keyIndex: number,
    inTemporalEase: [KeyframeEase],
    outTemporalEase?: typeof inTemporalEase,
    ): void
}
```

```typescript
declare class Property<T extends UnknownPropertyType = UnknownPropertyType> extends PropertyBase {
    setTemporalEaseAtKey(
    keyIndex: number,
    inTemporalEase: [KeyframeEase, KeyframeEase],
    outTemporalEase?: typeof inTemporalEase,
    ): void
}
```

```typescript
declare class Property<T extends UnknownPropertyType = UnknownPropertyType> extends PropertyBase {
    setTemporalEaseAtKey(
    keyIndex: number,
    inTemporalEase: [KeyframeEase, KeyframeEase, KeyframeEase],
    outTemporalEase?: typeof inTemporalEase,
    ): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
