# TimingGroup object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class TimingGroup {
    /**
    - Moves the timing group or target to the requested location.
    - @param to Location relative to the reference object or inside the containing object.
    - @param reference Reference object. Note: required when to targets a before or after position. .
      */
      move(to: LocationOptions, reference: TimingGroup | TimingTarget | TimingList): TimingGroup
    /**
    - Deletes this TimingGroup.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
