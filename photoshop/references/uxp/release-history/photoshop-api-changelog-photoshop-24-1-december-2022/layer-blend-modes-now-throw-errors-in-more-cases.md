# Layer blend modes now throw errors in more cases

- A value is passed that does not belong to [Constants.blendMode](../../enumerations/blend-mode.md).
- A blend mode is passed that the document's color mode or bit depth cannot use. Earlier, this would fail without an error.
- The Background layer is targeted for a blend mode change. Previously, that operation promoted Background into a normal layer and created a new layer ID. That automatic promotion is not a desirable side effect here, and the UI does not offer this action.

- [CountItem class](../../host-api/count-item/reference-index.md) implements:
  - `typename`, `parent`, `itemIndex`, `groupIndex`, `position`
  - `move()`, `remove()`
  -
