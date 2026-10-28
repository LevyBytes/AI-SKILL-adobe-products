# Additional contents not working

❌ **Problem:** Placeholder format is incorrect

```json
{
  "content": "[{\"file\":\"additional_contents_path_0\"}]"
}
```

✅ **Solution:** Use the correct placeholder format

```json
{
  "content": "[{\"file\":\"__ADDITIONAL_CONTENTS_PATH_0__\"}]"
}
```
