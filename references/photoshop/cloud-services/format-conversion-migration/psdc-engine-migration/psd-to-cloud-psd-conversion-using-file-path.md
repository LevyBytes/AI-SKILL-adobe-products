# PSD to Cloud PSD conversion (using file path)

Convert a PSD file to Cloud PSD format using path.

**PSDC Engine:**

```shell
curl -X POST \
  https://sensei-ue1.adobe.io/services/v2/predict \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: multipart/form-data" \
  -F 'contentAnalyzerRequests={
  "sensei:engines": [{
    "sensei:execution_info": {
      "sensei:engine": "Feature:sensei-demo:Service-66484d87ede04702af063315a7de4094"
    },
    "sensei:inputs": {
      "image_in": {
        "repo:path": "/files/input.psd",
        "dc:format": "image/vnd.adobe.photoshop",
        "sensei:repoType": "CCRepo"
      }
    },
    "sensei:params": {
      "format": "document/vnd.adobe.cpsd+dcx"
    },
    "sensei:outputs": {
      "image_out": {
        "repo:path": "/files/output.psdc",
        "dc:format": "document/vnd.adobe.cpsd+dcxucf",
        "sensei:repoType": "CCRepo"
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
      "creativeCloudPath": "files/input.psd"
    }
  },
  "outputs": [{
    "destination": {
      "creativeCloudPath": "files/output.psdc"
    },
    "mediaType": "document/vnd.adobe.cpsd+dcxucf"
  }]
}'
```
