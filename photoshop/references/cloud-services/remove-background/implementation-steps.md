# Implementation steps

1. [Download the make-file.atn file](https://github.com/AdobeDocs/cis-photoshop-api-docs/blob/main/sample_files/ic_customized_workflow/make-path.atn). Use this file in the Photoshop action API call.
2. First call Remove Background v2 to create an intermediate RGBA remove background result.
3. Then call the Photoshop Action service with the intermediate result and the make-file.atn file to produce the final JPEG result with the desired Photoshop path embedded.
4. Open the final result in the Photoshop Desktop app and check the generated path in the path panel.
