# ImportOptions.importAs

importOptions.importAs

### Description

Which kind of object the imported file will serve as the source for. Ahead of setting it, call canImportAs to verify the file is allowed to come in as the source of that object type.

### Type

An ImportAsType enumerated value; read/write. One of:

- ImportAsType.`COMP_CROPPED_LAYERS`
- ImportAsType.FOOTAGE
- ImportAsType.COMP
- ImportAsType.PROJECT
