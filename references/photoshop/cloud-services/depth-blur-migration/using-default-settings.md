# Using default settings

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/execute-actions \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"NF_OUTPUT_TYPE\":1,\"NF_UI_DATA\":{\"_obj\":\"NF_UI_DATA\",\"spl::filterStack\":[{\"_obj\":\"spl::filterStack\",\"spl::cropStates\":[{\"_obj\":\"spl::cropStates\",\"spl::cropId\":\"layer1\",\"spl::values\":{\"_obj\":\"spl::values\",\"spl::focalSelector\":\"auto\",\"spl::generateDepthMap\":false,\"spl::selectSubjectUsage\":1,\"spl::slideAperture\":50,\"spl::slideFocalDist\":50,\"spl::slideFocalRange\":50,\"spl::sliderBrightness\":0,\"spl::sliderHaze\":0,\"spl::sliderNoise\":0,\"spl::sliderSaturation\":0,\"spl::sliderSelectResolutionLevel\":1,\"spl::sliderTint\":0,\"spl::sliderWarmness\":0}}],\"spl::enabled\":true,\"spl::id\":\"internal.Hazy\",\"spl::version\":\"1.0\"}],\"spl::version\":\"1.0.6\"},\"_obj\":\"neuralGalleryFilters\"}]",
          "contentType": "application/json"
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```
