# Not supported: Binary resources

Inline content **is NOT allowed** for:

- **Images** - Main input image or additional images
- **Brushes** - `.abr` brush files
- **Patterns** - `.pat` pattern files
- **Fonts** - Font files

Provide these binary resources as external file references through:

- `url` - External-storage presigned URL
- `creativeCloudPath` - Path in Adobe Creative Cloud storage
- `creativeCloudFileId` - Identifier for a Creative Cloud file
- `lightroomPath` - Adobe Lightroom path, images only

**External reference example**

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_IMAGE_URL>"
    }
  },
  "options": {
    "additionalContents": [
      {
        "source": {
          "url": "<ADDITIONAL_IMAGE_URL>"
        }
      }
    ],
    "brushes": [
      {
        "source": {
          "url": "<BRUSH_FILE_URL>"
        }
      }
    ],
    "patterns": [
      {
        "source": {
          "url": "<PATTERN_FILE_URL>"
        }
      }
    ]
  }
}
```

**Unsupported inline-content example**

```json
{
  "options": {
    "brushes": [
      {
        "content": "base64_encoded_data..."
      }
    ]
  }
}
```

NOT SUPPORTED

Using inline content for binary resources such as images, brushes, patterns, or fonts causes validation to fail. Always provide those resource types by external file reference.
