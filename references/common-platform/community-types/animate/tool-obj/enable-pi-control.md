# ToolObj.enablePIControl

Community declaration reference: Animate/22.0.

Turns a Property inspector control on or off for extensible tools.
@param control String naming the control to toggle. Available names come from the Property inspector assigned to this tool; see toolObj.setPI().
Shape Property inspector controls:
stroke, fill
Text Property inspector controls:
type, font, pointsize, color, bold, italic, direction, alignLeft, alignCenter, alignRight, alignJustify, spacing, position, autoKern, small, rotation, format, lineType, selectable, html, border, deviceFonts, varEdit, options, link, maxChars, target
Movie Property inspector controls:
size, framerate, publish, player, background, profile
@param bEnable Boolean selector: true enables the control, false disables it.

```typescript
declare class ToolObj {
    enablePIControl(control: string, bEnable: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
