# Cloud PSD to PSD conversion (using URN)

Convert a Cloud PSD file to PSD format using file URN.

**Key Changes:**

- `repo:id` -> `creativeCloudFileId` (input via URN)
- `repo:path` -> `creativeCloudPath` (output to file path)
- `sensei:repoType: "RAPI"` -> Not needed (inferred from field used)
- `dc:format` -> `mediaType` (always `image/vnd.adobe.photoshop`)
- JSON becomes simple; multipart/form-data is no longer needed

**PSDC Engine:**

```shell
curl -X POST \
  https://sensei-ue1.adobe.io/services/v2/predict \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: multipart/form-data" \
  -F 'contentAnalyzerRequests={
  "sensei:invocation_mode": "asynchronous",
  "sensei:invocation_batch": false,
  "sensei:in_response": false,
  "sensei:engines": [{
    "sensei:execution_info": {
      "sensei:engine": "Feature:sensei-demo:Service-66484d87ede04702af063315a7de4094"
    },
    "sensei:inputs": {
      "image_in": {
        "repo:id": "urn:aaid:sc:US:edc9dc37-fb7a-4bcd-9e22-717f1ef7fa44",
        "dc:format": "document/vnd.adobe.cpsd+dcx",
        "sensei:repoType": "RAPI"
      }
    },
    "sensei:params": {
      "format": "image/vnd.adobe.photoshop"
    },
    "sensei:outputs": {
      "image_out": {
        "repo:path": "/temp/output.psd",
        "dc:format": "image/vnd.adobe.photoshop",
        "sensei:repoType": "RAPI"
      }
    }
  }]
}'
```

**V2 API:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "creativeCloudFileId": "urn:aaid:sc:US:edc9dc37-fb7a-4bcd-9e22-717f1ef7fa44"
    }
  },
  "outputs": [{
    "destination": {
      "creativeCloudPath": "temp/output.psd"
    },
    "mediaType": "image/vnd.adobe.photoshop"
  }]
}'
```
