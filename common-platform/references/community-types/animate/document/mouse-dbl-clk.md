# Document.mouseDblClk

Community declaration reference: Animate/22.0.

Performs a Selection-tool double-click.
@param position Pair of floating-point values giving the click's x and y pixel coordinates.
@param bAltDown Boolean recording whether Alt is down during the event: true for pressed; false for not pressed.
@param bShiftDown Boolean recording Shift state during the event: true for pressed; false for not pressed.
@param bShiftSelect Boolean giving the Shift select application preference state: true means on; false means off.

```typescript
declare class Document {
    mouseDblClk(position: Point, bAltDown: boolean, bShiftDown: boolean, bShiftSelect: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
