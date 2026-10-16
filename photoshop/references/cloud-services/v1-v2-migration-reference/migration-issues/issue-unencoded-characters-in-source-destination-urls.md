# Issue: Unencoded characters in source/destination URLs

**Problem:** URL encoding that V1 tolerated is rejected in V2, which applies strict URL validation on every endpoint.

```json
{ "image": { "source": { "url": "https://host/My Folder/file.psd" } } }
```

**Solution:** Encode special characters anywhere they occur in `source.url` or `destination.url`.

```json
{ "image": { "source": { "url": "https://host/My%20Folder/file.psd" } } }
```

The most frequent failure is an unencoded space (`%20`). The returned error is `"The url is malformed or blocked"`, and the rule applies to every V2 endpoint.
