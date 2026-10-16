# XMP Output Options

**External Storage:**

```json
{
  "destination": {
    "url": "<XMP_URL>"
  },
  "mediaType": "application/rdf+xml"
}
```

**Hosted Storage:**

```json
{
  "destination": {
    "validityPeriod": 3600
  },
  "mediaType": "application/rdf+xml"
}
```

**Embedded (Inline):**

```json
{
  "destination": {
    "embedded": "string"
  },
  "mediaType": "application/rdf+xml"
}
```

**Creative Cloud Storage:**

```json
{
  "destination": {
    "creativeCloudPath": "/path/to/adjustments.xmp"
  },
  "mediaType": "application/rdf+xml"
}
```
