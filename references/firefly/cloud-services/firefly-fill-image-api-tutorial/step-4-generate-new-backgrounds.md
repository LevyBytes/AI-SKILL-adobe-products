# Step 4 - Generate new backgrounds

Iterate through the employee list and generate an image with an updated background for each photo:

```js
async function updateEmployeePhotos() {
  const accessToken = await getAccessToken();

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

  for (const employee of employees) {
    try {
      // Upload the source and mask images
      const sourceUploadResponse = await uploadImage(employee.imagePath, "image/png", accessToken);
      const sourceImageId = sourceUploadResponse.images[0].id;

      const maskUploadResponse = await uploadImage(employee.maskPath, "image/png", accessToken);
      const maskImageId = maskUploadResponse.images[0].id;

      // Generate the new image
      const result = await genFill({
        maskImageId,
        sourceImageId,
        backgroundPrompt,
        accessToken,
      });

      console.log(`Updated photo for ${employee.name}`);
      console.log(`New image URL: ${result.outputs[0].image.url}`);
    } catch (error) {
      console.error(`Error updating photo for ${employee.name}:`, error.response.data);
    }
  }
}
```

- [Figure: result-person-photo-1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/result-person-photo-1.jpeg)
- [Figure: result-person-photo-2](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/result-person-photo-2.jpeg)
