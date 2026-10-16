# Rect

Community declaration reference: Illustrator/2022.

Rectangle descriptor that also works as a collection with four slots.
Format: left, top, right, bottom.
Width and height can be computed using `[r[2] - r[0], r[1] - r[3]]`.
**Note:** y axis is flipped. Upper means negative number, lower means positive.

```typescript
type Rect = [number, number, number, number]
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
