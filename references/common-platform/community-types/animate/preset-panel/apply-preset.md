# PresetPanel.applyPreset

Community declaration reference: Animate/22.0.

Applies either the named preset or the current selection to the current Stage selection. The target must be a motion tween, a symbol, or something convertible to a symbol. For a motion tween, applying the preset replaces the existing motion without asking for confirmation.
This method fails in these cases:
- No item exists at presetPath.
- presetPath is omitted and no preset is selected.
- presetPath is omitted while multiple presets are selected.
- The selected Stage item is not a symbol and cannot be converted to one.
@returns true when the preset is applied successfully; otherwise false.
@param presetPath Optional string containing the full path and preset name as shown in the Motion Presets panel; when omitted, the current preset selection is applied.

```typescript
declare class PresetPanel {
    applyPreset(presetPath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
