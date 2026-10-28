# Stochastic filter validation caveats

Certain Photoshop filter actions rely on an internal random seed; V1 and V2 rendering engines do not use the same seed. For those filters, pixel-diff comparison is **not a valid acceptance test** because semantically identical, correctly migrated ActionJSON can still produce 50–80% pixel differences.

**Known stochastic `_obj` values:**

| ActionJSON `_obj` | Filter Name |
| --- | --- |
| `addNoise` | Add Noise |
| `grain` | Grain |
| `reticulation` | Reticulation |
| `mezzotint` | Mezzotint |
| `pointillize` | Pointillize |
| `clouds` | Clouds |
| `differenceClouds` | Difference Clouds |
| `spatter` | Spatter |
| `sprayedStrokes` | Sprayed Strokes |
| `colorHalftone` | Color Halftone |

**Recommended validation alternatives for stochastic filters:**

- Compare histograms, with channel mean/stddev inside an acceptable delta
- Use Structural Similarity Index (SSIM ≥ threshold)
- Compare mean color per region
- Omit pixel validation and check only response status plus output-file existence
