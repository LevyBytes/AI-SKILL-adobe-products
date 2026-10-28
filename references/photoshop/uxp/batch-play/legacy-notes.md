# Legacy notes

`batchPlay` carries forward the role that `executeAction` had in ExtendScript. `executeAction` played one descriptor per call, while `batchPlay` takes an array of action descriptors. ExtendScript offered a class for constructing descriptors, references, and inserted values. `batchPlay` replaces those related classes with `actionJSON`. Developers familiar with ExtendScript `executeAction` probably know 4 character codes (OSTypes) and helper methods for them. In `actionJson`, extended string identifiers such as `colorSampler` are preferred. You can still use an OSType by prefixing it with `$` and passing that string, for example `'$app '` (mind the space!).

## See also

- [Photoshop Actions](../../cloud-services/photoshop-actions.md)
