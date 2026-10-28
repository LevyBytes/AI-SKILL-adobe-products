# 7. Best Practices

- Turn on `useGranularLabels` only for workflows that need left/right separation. Standard mode returns less data and may complete more quickly.
- Make sure the input mask covers the entire subject accurately. Low-quality subject masks can produce missing or combined left/right detections.
- Persist masks using `label` from the response array instead of relying on position. Read `label` for every mask before identifying it.
- Ground shadow workflows: calculate each foot's shadow anchor from `Left Shoe` and `Right Shoe` separately.
- Reflection workflows: reflect each shoe or leg mask on its own across the vertical axis so per-limb reflections align correctly.
- Keep input images at or below 4000 x 4000 px. Downscale higher-resolution source images before sending them to the API.
