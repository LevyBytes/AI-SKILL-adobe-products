# Model selection

⚠️ Important: Treat this as more than a simple rename.
The new API has no explicit model-version selector. Choose the model through the higher-level header mechanism.

**Previous-model format**

```json
{
  "modelId": "firefly_image",
  "modelVersion": "image5"
}
```

**Image5 model format**

```json
{
  "contentClass": "photo",
  "customModelId": "string"
}
```
