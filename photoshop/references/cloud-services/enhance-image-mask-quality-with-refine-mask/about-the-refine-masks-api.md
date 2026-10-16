# About the Refine Masks API

Start with the broad flow of the Refine Masks API before moving into code.

- First, place a source image in a supported cloud storage provider. For the current provider list, see the API reference.
- Next, submit a _masked_ copy of that image. The Photoshop API uses the source image as context while refining the mask.
- For the input image, include one mask that requires refinement.

Use the [v1/mask-objects](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/api/index.md) endpoint first to create masks that can be sent with requests to this endpoint.
