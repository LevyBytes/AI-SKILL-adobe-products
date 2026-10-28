# CrossReferences.add

Community declaration reference: InDesign/2023.

Creates a CrossReference object.
@param referencedTopic Topic targeted by the cross reference.
@param crossReferenceType Cross reference type to create.
@param customTypeString Custom string used by the cross reference. Valid only with custom cross reference types.
@param withProperties Initial property values for the new CrossReference.

```typescript
declare class CrossReferences {
    add(referencedTopic: Topic, crossReferenceType: CrossReferenceType, customTypeString: string, withProperties: object): CrossReference
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
