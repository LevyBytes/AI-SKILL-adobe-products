# AMEFormat

Community declaration reference: Audition/2018.

AMEFormat describes one Adobe Media Encoder format.

```typescript
declare class AMEFormat {
    /**
    - File name extension for this format.
      */
      readonly extension: string
    /**

    - Name of this format.
      */
      readonly name: string
    /**

    - Ask Adobe Media Encoder for user, match source, and system presets available for this format. AMEPresetsEvent.EVENT_RequestPresetsSuccess or AMEPresetsEvent.EVENT_RequestPresetsError reports the outcome.
    - Request this format's available presets from AME.
      */
      requestPresets(): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
