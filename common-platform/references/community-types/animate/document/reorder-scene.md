# Document.reorderScene

Community declaration reference: Animate/22.0.

Moves one scene before another specified scene.
@param sceneToMove Integer selecting the scene to move, with 0 (zero) as the first scene.
@param sceneToPutItBefore Integer selecting the scene before which sceneToMove should be placed. Use 0 (zero) for the first scene. For example, sceneToMove 1 and sceneToPutItBefore 0 places the second scene before the first scene. Use -1 to place the scene last.

```typescript
declare class Document {
    reorderScene(sceneToMove: number, sceneToPutItBefore: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
