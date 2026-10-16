const { retrieveAccessToken } = require("./axios-authentication.cjs");
const { uploadImage } = require("./axios-image-upload.cjs");
const { genFill } = require("./fill-image-request.cjs");

// Define the background replacement prompt
const backgroundPrompt =
  "A professional background for corporate headshots, blending a smooth gradient in neutral tones (e.g., gray, beige, or light blue) with subtle abstract artistic elements. Include elegant geometric shapes, soft brushstroke patterns, or layered textures that provide a modern and sophisticated appearance without overpowering the subject. The abstract elements should create depth and interest while maintaining a clean, polished, and corporate-appropriate aesthetic.";

// Assuming you have a list of employee image file paths and corresponding mask file paths
const employees = [
  {
    name: "Jane Smith",
    imagePath: "./source-person-photo-1.png",
    maskPath: "./mask-person-photo-1.png",
  },
  {
    name: "John Doe",
    imagePath: "./source-person-photo-2.png",
    maskPath: "./mask-person-photo-2.png",
  },
  // Add more employees as needed
];

async function updateEmployeePhotos(accessToken) {
  const failures = [];
  for (let employee of employees) {
    try {
      // Upload the source and mask images
      const sourceUploadResponse = await uploadImage({
        filePath: employee.imagePath,
        fileType: "image/png",
        accessToken,
      });
      const sourceImageId = sourceUploadResponse.images[0].id;

      const maskUploadResponse = await uploadImage({
        filePath: employee.maskPath,
        fileType: "image/png",
        accessToken,
      });
      const maskImageId = maskUploadResponse.images[0].id;

      // Generate the new image
      const result = await genFill({
        maskId: maskImageId,
        sourceId: sourceImageId,
        prompt: backgroundPrompt,
        accessToken,
      });

      console.log(`Updated photo for ${employee.name} at url ${result.outputs[0].image.url}`);
    } catch (error) {
      console.error(`Error updating photo for ${employee.name}:`, error.response?.data || error.message);
      failures.push(error);
    }
  }
  if (failures.length) throw new AggregateError(failures, "Some employee photos failed");
}

async function main() {
    const token = await retrieveAccessToken();
    return updateEmployeePhotos(token);
}
if (require.main === module) main().then(result => {
    if (result !== undefined) console.log(JSON.stringify(result, null, 2));
}).catch(error => { console.error(error); process.exitCode = 1; });
module.exports = { main, updateEmployeePhotos };
