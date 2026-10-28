# ScriptPreference

Community declaration reference: InDesign/2023.

Preferences for the scripting environment.

```typescript
declare class ScriptPreference extends Preference {
    /**
    - When true, redraw is enabled while a script runs.
      */
      enableRedraw: boolean
    /**

    - Measurement unit used during script processing.
      */
      measurementUnit: AutoEnum | MeasurementUnits
    /**

    - Path to the application's Scripts folder.
      */
      readonly scriptsFolder: File
    /**

    - Entries from the Scripts folder. Return form can be Array of Array of 2 Strings or Files.
      */
      readonly scriptsList: any[]
    /**

    - Controls whether dialogs and alerts appear during script processing.
      */
      userInteractionLevel: UserInteractionLevels
    /**

    - Version of the scripting environment.
      */
      version: string | number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
