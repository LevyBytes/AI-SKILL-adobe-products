# Best practices

**Planning artboard layout:**

1. Choose `artboardSpacing` for the design requirements (default is 50px)
2. Account for the image array order, since layout proceeds from left to right
3. Compute total output width as: (image widths) + (spacing x (number of images - 1))
4. Factor in the required resolution for the final output

**Performance tips:**

1. Provide source images at suitable dimensions
2. Combine multiple outputs in one request (up to 25)
3. Choose hosted storage for short-lived outputs
4. Use embedded storage when creating small previews

**Output optimization:**

1. Request several formats together (PSD + JPEG + PNG)
2. Pick quality settings that fit the use case
3. Set dimensions when optimized outputs are needed
4. Apply ICC profiles for color-critical work

**Storage strategy:**

1. Prefer AWS S3 presigned URLs where possible (no storageType needed)
2. Set `validityPeriod` for hosted URLs according to the download timeline
3. Keep persistent assets in Creative Cloud storage
4. Include `storageType` only for Azure Blob Storage and Dropbox
