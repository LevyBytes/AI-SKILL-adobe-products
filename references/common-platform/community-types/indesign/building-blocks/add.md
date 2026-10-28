# BuildingBlocks.add

Community declaration reference: InDesign/2023.

Creates and returns a new cross reference building block.
@param blockType Kind assigned to the building block.
@param appliedCharacterStyle CharacterStyle assigned to this BuildingBlock.
@param customText Custom text for a BuildingBlock. Currently useful only with a custom string BuildingBlock; other BuildingBlock types ignore it.
@param withProperties Starting values for BuildingBlock properties.

```typescript
declare class BuildingBlocks {
    add(blockType: BuildingBlockTypes, appliedCharacterStyle: CharacterStyle, customText: string, withProperties: object): BuildingBlock
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
