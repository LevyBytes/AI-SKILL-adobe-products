# Editing a pixel layer

Here the image in an existing pixel layer is replaced: the `Hero Image` layer inside `Example.psd`.

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentOperations \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs":[
    {
      "href":"<SIGNED_GET_URL>",
      "storage":"<your_storage>"
    }
  ],
  "options":{
    "layers":[
      {
        "edit":{},
        "input":{
          "href":"<SIGNED_GET_URL>",
          "storage":"<your_storage>"
        },
        "bounds":{
          "height":405,
          "left":0,
          "top":237,
          "width":300
        },
        "id":751,
        "index":2,
        "locked":false,
        "name":"BackgroundGradient",
        "type":"layer",
        "visible":true
      }
    ]
  },
  "outputs":[
    {
      "href":"<SIGNED_POST_URL>",
      "storage":"<your_storage>",
      "type":"vnd.adobe.photoshop"
    }
  ]
}'
```

This API call launches an asynchronous job and returns a response with an href. Use that href to [check job status](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/6a5b7e759e09b595562aa4cb20a2e9b36437bb60/src/pages/guides/get-job-status/index.md).
