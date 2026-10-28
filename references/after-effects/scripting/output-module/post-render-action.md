# OutputModule.postRenderAction

app.project.renderQueue.item(index).outputModule(index).postRenderAction

### Description

Specifies what should happen once the render finishes.

### Type

A PostRenderAction enumerated value (read/write); one of:

- PostRenderAction.NONE
- PostRenderAction.IMPORT
- PostRenderAction.`IMPORT_AND_REPLACE_USAGE`
- PostRenderAction.`SET_PROXY`
