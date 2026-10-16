# ComponentParam

Community declaration reference: Premiere/24.0.

```typescript
declare class ComponentParam {
    readonly displayName: string
    addKey(): boolean
    areKeyframesSupported(): boolean
    findNearestKey(): object
    findNextKey(): object
    findPreviousKey(): object
    getColorValue(): any[]
    getKeys(): any[]
    getValue(): any
    getValueAtKey(time: Time): any
    getValueAtTime(): any
    isEmpty(): boolean
    isTimeVarying(): boolean
    keyExistsAtTime(): boolean
    removeKey(): boolean
    removeKeyRange(start: Time, end: Time): boolean
    setColorValue(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean
    setInterpolationTypeAtKey(): boolean
    setTimeVarying(setTimeVarying: boolean, p1?: boolean): boolean
    setValue(value: any, updateUI?: boolean | number): boolean
    setValueAtKey(time: Time, value: any, updateUI?: boolean | number): boolean
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
