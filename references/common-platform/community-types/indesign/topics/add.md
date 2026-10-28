# Topics.add

Community declaration reference: InDesign/2023.

Creates a Topic object.
@param name Topic name. Note: this text is what the index displays.
@param sortBy Sort string used instead of the topic name. Note: the index still displays the actual topic text, not the sort order text.
@param withProperties Initial property values for the new Topic.

```typescript
declare class Topics {
    add(name: string, sortBy: string, withProperties: object): Topic
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
