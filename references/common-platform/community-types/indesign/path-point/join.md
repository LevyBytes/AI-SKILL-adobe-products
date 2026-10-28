# PathPoint.join

Community declaration reference: InDesign/2023.

Connects this path point to another path point. Both points must be end points, with their paths combined into one path on one page item.
@param reference Reference object; the path point to join to
@param given Join option to use.

```typescript
declare class PathPoint {
    join(reference: PathPoint, given: JoinOptions): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
