# Assignment.createPackage

Community declaration reference: InDesign/2023.

Creates a package for the assignment.
@param filePath Full path name for the assignment package file.
@param submit If true, assigned stories are submitted before packaging.
@param withProperties Starting property values for Assignment creation.

```typescript
declare class Assignment {
    createPackage(filePath: File, submit?: boolean, withProperties?: object): File
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
