# Understanding style presets

Firefly includes style presets for the [Generate Images API][1], allowing output images to take on a selected visual style or mood. Supplying those presets in the request gives you prompt-level generation plus additional control over the resulting variations.

In a Generate Images API request, style presets belong in the `presets` array. Every preset listed there is applied to the generated image. Change the `strength` value when you want to vary how much influence the presets have.

Presets request parameter

```json
{
    "prompt": "a puppy dressed as a renaissance artist",
    "numVariations": 4,
    "style": {
        "presets": [
            "bw", "fantasy", "dramatic_light"
        ],
        "strength": 100
    }
}
```
