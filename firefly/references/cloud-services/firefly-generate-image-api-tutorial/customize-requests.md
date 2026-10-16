# Customize Requests

Firefly requests include several controls for customizing generated images. The following `data` object demonstrates these choices:

- Landscape output at a (16:9) aspect ratio
- A geographic style localized to `en-US`
- Style presets set to `doodle_drawing` and `scribble_texture` as the selected pair

```js
const data = {
  prompt: "Fun, abstract tourism doodle that inspires travel",
  size: { width: 2688, height: 1536 },
  promptBiasingLocaleCode: "en-US",
  style: {
    presets: ["doodle_drawing", "scribble_texture"],
  },
};
```
