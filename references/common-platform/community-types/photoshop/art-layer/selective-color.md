# ArtLayer.selectiveColor

Community declaration reference: Photoshop/2015.5.

@param selectionMethod Changes a process-color amount within a specified primary color while leaving the other primary colors alone.
@param reds 4-value array: cyan, magenta, yellow, black.
@param yellows 4-value array: cyan, magenta, yellow, black.
@param greens 4-value array: cyan, magenta, yellow, black.
@param cyans 4-value array: cyan, magenta, yellow, black.
@param blues 4-value array: cyan, magenta, yellow, black.
@param magentas 4-value array: cyan, magenta, yellow, black.
@param whites 4-value array: cyan, magenta, yellow, black.
@param neutrals 4-value array: cyan, magenta, yellow, black.
@param blacks 4-value array: cyan, magenta, yellow, black.

```typescript
declare class ArtLayer extends Layer {
    selectiveColor(
      selectionMethod: AdjustmentReference,
      reds?: number[],
      yellows?: number[],
      greens?: number[],
      cyans?: number[],
      blues?: number[],
      magentas?: number[],
      whites?: number[],
      neutrals?: number[],
      blacks?: number[],
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
