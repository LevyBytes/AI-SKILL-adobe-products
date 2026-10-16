# Issue: Using service-specific endpoint

**Problem:** The implementation still calls separate service endpoints

```javascript
// Wrong
const url = `https://image.adobe.io/lrService/status/${jobId}`;
```

**Solution:** Point status checks at the unified endpoint

```javascript
// Correct
const url = `https://photoshop-api.adobe.io/v2/status/${jobId}`;
```
