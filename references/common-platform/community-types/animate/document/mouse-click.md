# Document.mouseClick

Community declaration reference: Animate/22.0.

Performs a Selection-tool mouse click.
@param position Pair of floating-point values giving the click's x and y pixel coordinates.
@param bToggleSel Boolean describing the Shift key state: true for pressed; false for not pressed.
@param bShiftSel Boolean describing the Shift select application preference state: true means on; false means off.

```typescript
declare class Document {
    mouseClick(position: Point, bToggleSel: boolean, bShiftSel: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
