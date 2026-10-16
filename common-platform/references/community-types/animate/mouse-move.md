# mouseMove

Community declaration reference: Animate/22.0.

Function; runs each time the extensible tool is active and the pointer travels over a specified point on the Stage. The mouse button may be pressed or not pressed.
@param pt Point value for the current mouse position. The runtime passes it on each movement so the script can follow mouse location. When the Stage is in edit or edit-in-place mode, the coordinates are measured relative to the object currently being edited. In other cases, the coordinates use the Stage as their frame of reference. This parameter is optional.

```typescript
declare function mouseMove(pt?: Point): void
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
