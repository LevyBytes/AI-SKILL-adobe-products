# Project.createNewSequenceFromClips

Community declaration reference: Premiere/24.0.

@param newSequenceName Sequence name to assign.
@param projectItems Array of project items to add to the sequence.
@param targetBin Destination bin for the new sequence.

```typescript
declare class Project {
    createNewSequenceFromClips(
      newSequenceName: string,
      projectItems: Array<ProjectItem>,
      targetBin: ProjectItem,
      ): Sequence
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
