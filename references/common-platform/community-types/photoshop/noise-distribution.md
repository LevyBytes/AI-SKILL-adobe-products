# NoiseDistribution

Community declaration reference: Photoshop/2015.5.

Selects the distribution used by the Add Noise filter.

```typescript
declare enum NoiseDistribution {
    /**
    - Places noise color values along a bell-shaped curve for a speckled effect.
      */
      GAUSSIAN = 2,
    /**

    - Places noise color values with random numbers between 0 and plus or minus the specified amount, producing a subtle effect.
      */
      UNIFORM = 1,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
