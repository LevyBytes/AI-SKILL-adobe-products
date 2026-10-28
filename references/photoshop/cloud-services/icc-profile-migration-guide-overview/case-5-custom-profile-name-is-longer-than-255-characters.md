# Case 5: Custom profile name is longer than 255 characters

**Input sample:**

```json
{
  "iccProfile": {
    "type": "custom",
    "name": "A very long profile name that exceeds 255 characters...",
    "source": {
      "url": "https://example.com/profile.icc"
    }
  }
}
```

**Response message:**

> ICC profile name must not exceed 255 characters

**Solution:** Reduce the profile name so it is 255 characters or fewer.
