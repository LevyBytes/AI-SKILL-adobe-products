# Settings

Community declaration reference: AfterEffects/26.0.

Settings offers script-friendly management for stored settings. Values are saved in the After Effects preferences file and persist between application sessions. Entries are addressed by section and key; each key maps to a value. In the preferences file, section names appear inside brackets and quotation marks, while key names appear in quotation marks below the section. All values are strings.

```typescript
declare class Settings {
    /** Writes the fallback setting value. */
    saveSetting(sectionName: string, keyName: string, value: string, type?: PREFType): void
    /* Fetches the stored value. */
    getSetting(sectionName: string, keyName: string, type?: PREFType): string
    /* Reports whether the named setting has a value. */
    haveSetting(sectionName: string, keyName: string, type?: PREFType): boolean
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
