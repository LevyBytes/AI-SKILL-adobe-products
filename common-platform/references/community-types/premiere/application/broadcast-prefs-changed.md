# Application.broadcastPrefsChanged

Community declaration reference: Premiere/24.0.

Alerts App that Preferences have changed.
The only currently valid argument is 'BE::PreferencesScratchDisksChanged'.

```typescript
declare class Application {
    broadcastPrefsChanged(preferencesThatChanged: string): boolean
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
