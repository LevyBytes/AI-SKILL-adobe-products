# ToolObj.showPIControl

Community declaration reference: Animate/22.0.

Changes visibility for a Property inspector control; this method applies only to extensible tools.
@param control String naming the control whose visibility should change. This is for extensible tools only; allowed names come from the Property inspector used by the tool (see toolObj.setPI()).
Shape Property inspector controls: stroke, fill
Text Property inspector controls:
type, font, pointsize, color, bold, italic, direction, alignLeft, alignCenter, alignRight, alignJustify, spacing, position, autoKern, small, rotation, format, lineType, selectable, html, border, deviceFonts, varEdit, options, link, maxChars, target
Movie Property inspector controls:
size, publish, background, framerate, player, profile
@param bShow Boolean selector for visibility of the named control: true shows it, false hides it.

```typescript
declare class ToolObj {
    showPIControl(control: string, bShow: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
