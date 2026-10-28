# Assignments.add

Community declaration reference: InDesign/2023.

Constructs an Assignment entry.
@param filePath Full path name for the new assignment.
@param versionComments Comment attached to this version.
@param forceSave If true, a version is saved forcibly.
@param withProperties Starting property values for Assignment creation.

```typescript
declare class Assignments {
    add(filePath: File, versionComments: string, forceSave?: boolean, withProperties?: object): Assignment
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
