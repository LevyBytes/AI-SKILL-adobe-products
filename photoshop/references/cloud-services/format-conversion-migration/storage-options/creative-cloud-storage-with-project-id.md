# Creative Cloud storage with project ID

```json
{
  "destination": {
    "creativeCloudPath": "project-assets/output.jpg",
    "creativeCloudProjectId": "urn:aaid:sc:US:a21c8629-413f-55d9-b5b0-....."
  }
}
```

Use these fields to point at a project asset:

- `creativeCloudProjectId` (a URN starting with `urn:aaid:`) points to the project root.
- `creativeCloudPath` gives the asset location under that project root.
- This is useful for Creative Cloud assets scoped to a project.
