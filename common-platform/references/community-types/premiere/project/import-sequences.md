# Project.importSequences

Community declaration reference: Premiere/24.0.

Imports sequences from a project.
@param projectPath Path to the project that supplies the sequences.
@param sequences Array of sequence IDs to import from that project.

```typescript
declare class Project {
    importSequences(projectPath: String, sequencesToImport: Array<string>): boolean
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
