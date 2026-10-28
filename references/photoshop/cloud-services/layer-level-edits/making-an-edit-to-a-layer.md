# Making an edit to a layer

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentOperations \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs":[
    {
      "href":"<your_signed_get_url>",
      "storage":"<your_storage>"
    }
  ],
  "options":{
    "layers":[
      {
        "edit":{},
        "id":750,
        "index":1,
        "locked":true,
        "name":"HeroImage",
        "type":"smartObject",
        "visible":true
      }
    ]
  },
  "outputs":[
    {
      "href":"<your_signed_post_url>",
      "storage":"<your_storage>",
      "type":"vnd.adobe.photoshop"
    }
  ]
}'
```
