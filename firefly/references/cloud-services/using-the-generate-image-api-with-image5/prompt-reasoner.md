# Prompt Reasoner

Inside `modelSpecificPayload`, `prompt_reasoner` sets the prompt reasoning strategy applied during generation. It supports these two values:

- **`quality`** — turns on the higher-quality prompt reasoning path. The response also carries generated image-description text in `altText`.
- **`speed`** (default) — prioritizes faster generation and leaves `altText` blank.

**Sample request payload**

```json
{
  "prompt": "A beagle running through a park toward its owner",
  "aspectRatio": "4:3",
  "modelId": "firefly_image",
  "numVariations": 1,
  "referenceBlobs": [],
  "modelSpecificPayload": {
    "localeCode": "en-US",
    "prompt_reasoner": "quality"
  }
}
```
