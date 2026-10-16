# Output configuration: JPEG specific

- [ ] Use a string enum for quality, for example `"maximum"` instead of `7`
- [ ] Map quality values correctly: 7 → `"maximum"`, 5-6 → `"high"`, 3-4 → `"medium"`, 1-2 → `"low"`
- [ ] Use the `quality` parameter, not `compression`
