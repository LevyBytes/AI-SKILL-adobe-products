# FootageSource.fieldSeparationType

app.project.item(index).mainSource.fieldSeparationType

app.project.item(index).proxySource.fieldSeparationType

### Description

Governs the way fields get split apart in footage that is not still. Setting it is an error when isStill is true, and assigning FieldSeparationType.OFF is an error if removePulldown is not PulldownPhase.OFF.

### Type

A FieldSeparationType enumerated value; read/write. One of:

- FieldSeparationType.OFF
- FieldSeparationType.`UPPER_FIELD_FIRST`
- FieldSeparationType.`LOWER_FIELD_FIRST`
