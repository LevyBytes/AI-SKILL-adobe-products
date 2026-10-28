# Frame.elements

Community declaration reference: Animate/22.0.

Element objects are returned as an array (see Element object). Their sequence matches their stored order in the FLA file. When several shapes on the Stage remain ungrouped, Flash reports them as one element. Grouping each shape instead makes Flash expose multiple separate elements on the Stage. Put another way, any number of raw, ungrouped Stage shapes are treated as a single element. For example, if a frame holds three raw, ungrouped shapes, elements.length for that frame is 1. The workaround is to select each shape on its own and group it.

```typescript
declare class Frame {
    readonly elements: Element[]
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
