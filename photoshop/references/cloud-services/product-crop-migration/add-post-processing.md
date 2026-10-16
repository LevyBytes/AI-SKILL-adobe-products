# 3. Add post-processing

Append extra actions once the product crop steps finish:

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "content": "[...product crop actions...{\"_obj\":\"brightnessEvent\",\"brightness\":20}]",
          "contentType": "application/json"
        }
      }
    ]
  }
}
```
