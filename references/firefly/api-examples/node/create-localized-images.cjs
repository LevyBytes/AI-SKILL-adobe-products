const { retrieveAccessToken } = require("./axios-authentication.cjs");
const { generateImage } = require("./generate-image-request.cjs");

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
  // Add more locations here
];

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

async function main() {
    const token = await retrieveAccessToken();
    return createImages(token);
}
if (require.main === module) main().then(result => {
    if (result !== undefined) console.log(JSON.stringify(result, null, 2));
}).catch(error => { console.error(error); process.exitCode = 1; });
module.exports = { main, createImages };
