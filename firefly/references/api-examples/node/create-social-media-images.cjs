const { retrieveAccessToken } = require("./axios-authentication.cjs");
const { uploadImage } = require("./axios-image-upload.cjs");
const { genExpand } = require("./expand-image-request.cjs");

// Define social media platforms and their image dimensions
const SOCIAL_MEDIA_PLATFORMS = [
  {
    name: "Instagram Post",
    width: 1080,
    height: 1080,
  },
  {
    name: "Facebook Cover",
    width: 820,
    height: 312,
  },
  {
    name: "Twitter Post",
    width: 1024,
    height: 512,
  },
];

async function createSocialMediaRenditions(accessToken) {
  // Upload the source image
  let upload = await uploadImage({
    filePath: "./expand-image-tutorial-source-image.webp",
    fileType: "image/webp",
    accessToken,
  });

  let sourceImageId = upload.images[0].id;

  // Loop over each platform and generate renditions
  for (const platform of SOCIAL_MEDIA_PLATFORMS) {
    let result = await genExpand({
      imageId: sourceImageId,
      width: platform.width,
      height: platform.height,
      accessToken,
    });

    console.log(`Generated rendition for ${platform.name} at ${result.result.outputs[0].image.url}`);
  }
}

async function main() {
    const token = await retrieveAccessToken();
    return createSocialMediaRenditions(token);
}
if (require.main === module) main().then(result => {
    if (result !== undefined) console.log(JSON.stringify(result, null, 2));
}).catch(error => { console.error(error); process.exitCode = 1; });
module.exports = { main, createSocialMediaRenditions };
