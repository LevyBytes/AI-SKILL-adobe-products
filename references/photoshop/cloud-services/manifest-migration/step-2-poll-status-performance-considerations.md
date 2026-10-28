# Step 2: Poll status - Performance considerations

**Thumbnail Generation:**

- Creating thumbnails for every layer can take substantial time on complex documents
- Use `maximumThumbnailDepth` to restrict how far generation descends
- Disable thumbnails when only the document structure is required
- Turning on `trimToTransparency` adds processing for each layer; enable it only when tightly cropped thumbnails are needed

**XMP Metadata:**

- XMP extraction has low overhead
- Request it only when metadata is required

**Output Storage:**

- Choose embedded storage for immediate access to small manifests
- Choose hosted storage when you do not want to manage storage
- Choose external storage when integrating with existing workflows
