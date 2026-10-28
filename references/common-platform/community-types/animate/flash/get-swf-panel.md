# Flash.getSwfPanel

Community declaration reference: Animate/22.0.

Finds a SWFPanel object by localized panel name or by SWF filename without its extension.
@returns SWFPanel object.
@param panelName Localized panel name or root filename of the panel's SWF file. Pass false as the second parameter when using the filename form.
@param useLocalizedPanelName Optional. Defaults to true. With false, panelName is treated as the English (unlocalized) panel name, matching the SWF filename without its file extension.

```typescript
declare class Flash {
    getSwfPanel(panelName: string, useLocalizedPanelName?: boolean): SWFPanel
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
