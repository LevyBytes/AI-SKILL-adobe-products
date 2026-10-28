# Project.importFiles

Community declaration reference: Premiere/24.0.

Imports files into the project.
@param arrayOfFilePathsToImport Array of file paths to import.
@param suppressUI Optional; when true, warnings, translation reports, and errors are suppressed.
@param projectBin Optional destination bin for the imported media.
@param importAsNumberedStill Optional; when present, treats the file paths as a numbered-still sequence.

```typescript
declare class Project {
    importFiles(
        arrayOfFilePathsToImport: string[],
        suppressUI?: boolean,
        projectBin?: ProjectItem,
        importAsNumberedStill?: boolean,
        ): boolean
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
