# Validation caveats: stochastic filters

Some Photoshop filter actions rely on an internal random seed, and the V1 and V2 rendering engines do not share the same seed behavior. Because of that, even correctly migrated ActionJSON can produce 50-80% pixel differences from V1 reference output for these filters; treat such differences as noise-pattern variation, not proof of a migration defect. A pixel-diff comparison against V1 output is therefore **not a valid acceptance test** for them.

**Known stochastic filter actions (`_obj` values):** `addNoise`, `grain`, `reticulation`, `mezzotint`, `pointillize`, `clouds`, `differenceClouds`, `spatter`, `sprayedStrokes`, `colorHalftone`

> **Note on `colorHalftone`:** Although the filter is conceptually deterministic, V1 and V2 generate dot patterns and anti-aliasing differently. Correctly migrated ActionJSON may still show roughly 15-20% pixel variation on ordinary images, so validate it as a stochastic case.

**Validation alternatives for stochastic filters:**

- **Histogram comparison** - Check channel mean and standard deviation against an acceptable delta
- **SSIM** - Require Structural Similarity Index to clear a threshold, such as >= 0.85
- **Mean-color comparison** - Evaluate average color by region
- **Status-only validation** - Confirm job success and output-file creation, then skip pixel comparison

## See also

- [Unsupported](../../uxp/unsupported.md)
