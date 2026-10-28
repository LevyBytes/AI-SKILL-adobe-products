# Property.keyValue

Community declaration reference: AfterEffects/26.0.

Returns the keyframe value at the time for the requested condition.

```typescript
declare class Property<T extends UnknownPropertyType = UnknownPropertyType> extends PropertyBase {
    keyValue(keyIndex: number): T["value"]
}
```

```typescript
declare class Property<T extends UnknownPropertyType = UnknownPropertyType> extends PropertyBase {
    keyValue(markerComment: string): MarkerValue
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
