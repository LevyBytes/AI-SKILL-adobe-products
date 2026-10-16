# New control fields

Several new configuration properties are introduced by the new API, and some may be required for particular models:

- `negativePrompt`
- `promptBiasingLocaleCode`
- `contentClass`
- `upsamplerType`
- `visualIntensity`
- `modelSpecificPayload.prompt_reasoner` — selects the prompt reasoning strategy, either `quality` or `speed`. When the value is `quality`, the response contains a populated `altText` field.
