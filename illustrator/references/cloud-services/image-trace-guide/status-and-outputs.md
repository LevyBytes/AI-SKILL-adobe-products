# Status and outputs

Use `GET https://illustrator-api.adobe.io/v1/status/{jobId}` to poll Image Trace status. After `status` changes to `succeeded`, retrieve the generated SVG files through the presigned URLs in `outputs`. The same error schema used by other beta operations in this reference covers HTTP status codes and messages.
