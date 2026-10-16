# AssignedStory.move

Community declaration reference: InDesign/2023.

Moves the assigned story to a target location.
@param to Target position, either inside the container or relative to the reference object.
@param reference Required reference object when `to` specifies before or after.

```typescript
declare class AssignedStory {
    move(to?: LocationOptions, reference?: Assignment | AssignedStory): AssignedStory
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
