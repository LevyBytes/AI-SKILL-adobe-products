# Hosted storage period is invalid

**Problem:** Hosted-storage `validityPeriod` is outside the permitted limits

**Error:**

```text
validityPeriod must be between 60 and 86400 seconds
```

**Fix:** Pick any allowed duration: at least 60 seconds (1 minute) and no more than 86400 seconds (24 hours)

```json
{
  "destination": {
    "validityPeriod": 3600
  }
}
```
