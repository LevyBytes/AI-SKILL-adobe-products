# Stroke.style

Community declaration reference: Animate/22.0.

Stroke style string. Valid values are "noStroke", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched". Some values require extra Stroke members as follows:
- "solid" and "noStroke" require no additional members.
- "dashed" adds dash1 and dash2.
- "dotted" adds dotSpace.
- "ragged" adds pattern, waveHeight, and waveLength.
- "stipple" adds dotSize, variation, and density.
- "hatched" adds hatchThickness, space, jiggle, rotate, curve, and length.

```typescript
declare class Stroke {
    style: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
