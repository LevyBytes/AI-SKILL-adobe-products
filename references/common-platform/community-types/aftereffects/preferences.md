# Preferences

Community declaration reference: AfterEffects/26.0.

```typescript
declare class Preferences {
    deletePref(section: string, key: string, type?: PREFType): void
    getPrefAsBool(section: string, key: string, type?: PREFType): boolean
    getPrefAsFloat(section: string, key: string, type?: PREFType): number
    getPrefAsLong(section: string, key: string, type?: PREFType): number
    getPrefAsString(section: string, key: string, type?: PREFType): string
    havePref(section: string, key: string, type?: PREFType): boolean
    reload(): void
    savePrefAsBool(section: string, key: string, value: boolean, type?: PREFType): void
    savePrefAsFloat(section: string, key: string, value: number, type?: PREFType): void
    savePrefAsLong(section: string, key: string, value: number, type?: PREFType): void
    savePrefAsString(section: string, key: string, value: string, type?: PREFType): void
    saveToDisk(): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
