# Define Localized Customizations

Place this object near the top of your file to describe the localized variants:

```js
const IMAGE_VARIATIONS = [
  {
    location: "Paris, France",
    locale: "fr-FR",
    customPrompt: "Includes delicious croissants.",
  },
  {
    location: "Tokyo, Japan",
    locale: "ja-JP",
    customPrompt: "Includes delicious sushi.",
  },
];
```

Then revise the `createImages` function so each location gets its own request customization:

```js
async function createImages(accessToken) {
  return Promise.all(
    IMAGE_VARIATIONS.map(({ location, locale, customPrompt }) => {
      const data = {
        prompt: `Fun, abstract tourism doodle that inspires travel to ${location}. ${customPrompt}`,
        size: { width: 2688, height: 1536 },
        promptBiasingLocaleCode: locale,
        style: {
          presets: ["doodle_drawing", "scribble_texture"],
        },
      };

      return generateImage({ accessToken, data });
    }),
  );
}
```
